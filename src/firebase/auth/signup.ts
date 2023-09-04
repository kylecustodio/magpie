import app from "../config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);

const signUp = async (username: string, email: string, password: string) => {
  let result = null,
    error = null;
  try {
    const createResult = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const emailResult = await sendEmailVerification(createResult.user);
    const updateResult = await updateProfile(createResult.user, {
      displayName: username,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default signUp;
