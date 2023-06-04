import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    //console.log({ credentials });
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      //Info usuario
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

export const registerUserWhitEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    console.log(resp);
    //TODO: actualizar el displayName

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.errorMessage };
  }
};
