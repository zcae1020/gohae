import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "@/module/firebase";

export const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
};

export const signOut = async () => {
    await auth.signOut();
};
