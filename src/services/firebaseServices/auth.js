import firebase from "firebase";

export const signUpUser = async (email, password) => {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const getCurrentUser = async () => {
  const user = await firebase.auth().currentUser;
  return user;
};

export const signInUser = async (email, password) => {
  await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOutUser = async () => {
  await firebase.auth().signOut();
};

export const updateUserProfile = async (firstName, lastName, user) => {
  var displayName = firstName + lastName;
  await user.updateProfile({
    displayName: displayName
  });
};

export default {
  signInUser,
  signUpUser,
  signOutUser,
  getCurrentUser,
  updateUserProfile
};
