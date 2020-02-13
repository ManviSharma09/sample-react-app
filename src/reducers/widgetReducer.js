import actionTypes from "../actionConstants";
const initialState = {
  widgetArray: [
    {
      widgetId: 1,
      widgetName: "HelloWorld",
      endPoint: "/helloWorld"
    },
    {
      widgetId: 2,
      widgetName: "HelloWorld2",
      endPoint: "/helloWorld2"
    }
  ]
};
const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
export default widgetReducer;
