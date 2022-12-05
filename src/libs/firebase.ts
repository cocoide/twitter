
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore";
import {getStorage}from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-c03c4.firebaseapp.com",
  projectId: "twitter-c03c4",
  storageBucket: "twitter-c03c4.appspot.com",
  messagingSenderId: "925576020569",
  appId: "1:925576020569:web:6b8517512660e01b696748"
};
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const db= getFirestore();
const storage = getStorage();
export {app, db, storage};