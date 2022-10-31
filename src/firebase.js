// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAF6uiaLi2XN3F7Bn6uFsD7lbX2_02BFSM',
    authDomain: 'fb-bdreact3-f2b50.firebaseapp.com',
    projectId: 'fb-bdreact3-f2b50',
    storageBucket: "fb-bdreact3-f2b50.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;