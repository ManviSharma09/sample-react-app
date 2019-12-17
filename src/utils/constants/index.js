export const formConstants = {
  loginFormConst: "login",
  signUpFormConst: "signUp"
};

export const signUpFormData = [
  {
    name: "firstName",
    label: "First Name",
    type: "text"
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text"
  },
  {
    name: "email",
    label: "Email",
    type: "email"
  },
  {
    name: "password",
    label: "Password",
    type: "password"
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password"
  }
];

export const loginFormData = [
  { name: "email", label: "Email", type: "email" },
  {
    name: "password",
    label: "Password",
    type: "password"
  }
];
