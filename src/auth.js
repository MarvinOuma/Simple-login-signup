import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
