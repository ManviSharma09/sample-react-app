import * as firebase from "firebase";

export const saveUserBasicProfile = async (uid, photoUrl) => {
  await firebase
    .firestore()
    .collection("users")
    .doc()
    .set({ uid, photoUrl });
};
export default { saveUserBasicProfile };
