import { initializeApp } from "firebase/app";
import { getAuth,initializeAuth, getReactNativePersistence} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; 
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  appId: Constants.expoConfig.extra.appId,
  databaseURL: Constants.expoConfig.extra.databaseURL,
};

const firebaseApp=initializeApp(firebaseConfig); // initaialization of firebase application
 const database = getFirestore(firebaseApp);
 const auth = getAuth(firebaseApp);

 export{auth,database}

