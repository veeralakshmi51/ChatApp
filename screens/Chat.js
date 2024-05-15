import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, database} from '../config/firebase';
import { signOut } from 'firebase/auth';
import { GiftedChat } from 'react-native-gifted-chat';
import { addDoc, collection,query,orderBy,onSnapshot } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const profile=require('../assets/images/profile.png')
const Chat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const signOutNow = () => {
        signOut(auth).then(() => {
            navigation.replace('Home Page');
        }).catch((error) => {
          console.log(error);
        });
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <Avatar
                        rounded
                        source={profile}
                    />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity style={{
                    marginRight: 10
                }}
                    onPress={signOutNow}
                >
                    <Text>Logout<Icon name='logout'/></Text>
                </TouchableOpacity>
            )
        })
        const q = query(collection(database, 'chats'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }))
        ));

        return () => {
          unsubscribe();
        };
    }, [navigation]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hi My Fellow Developer, Chat App with Firebase and React Native',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: require('../assets/images/profile1.png'),
                },
            },
        ])
    }, []);
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        const {_id,createdAt,text,user}=messages[0]
        addDoc(collection(database,'chats'),{_id,createdAt,text,user});
    }, []);
    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL
            }}
            renderAvatar={(props) => (
                <Avatar imageUrl={props.currentMessage.user.avatar} />
            )}
        />
    );
}

export default Chat;