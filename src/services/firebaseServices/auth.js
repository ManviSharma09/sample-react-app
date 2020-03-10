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

export const updateUserDisplayInfoProfile = async data => {
  const user = await getCurrentUser();
  // console.log("user", user, "data", data);
  // await user.updateProfile({
  //   email: data.emailValue,
  //   phoneNumber: data.phoneNumberValue,
  //   displayName: data.displayNameValue,
  //   photoURL: data.photoUrlValue
  // });
  await user.updateProfile({
    displayName: data.displayNameValue
  });
  await user.updateProfile({
    phoneNumber: data.phoneNumberValue
  });
  await user.updateProfile({
    email: data.email
  });
  await user.updateProfile({
    photoURL: data.photoURL
  });
  // console.log("user here", user);
};

export default {
  signInUser,
  signUpUser,
  signOutUser,
  getCurrentUser,
  updateUserProfile,
  updateUserDisplayInfoProfile
};
