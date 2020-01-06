export const formConstants = {
  loginFormConst: "login",
  signUpFormConst: "signUp"
};
let password="";
const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
  const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
  const maxLength40 = maxLength(40);
  const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const minLength8=minLength(8);
const storePass = (value)=>{
  password=value;
  return undefined;
}
const passwordsMatch = (value) => {
  if(value === password){
    return undefined;
  }
  return "Passwords do not match";
}
export const signUpFormData = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    validation: [required,maxLength40]
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    validation: [required,maxLength40]
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    validation: [required,email]
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validation: [required,minLength8,storePass]
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    validation: [required,minLength8,passwordsMatch]
  }
];

export const loginFormData = [
  {
    name: "email",
    label: "Email",
    type: "email",
    validation: [required,email]
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validation: [required]
  }
];