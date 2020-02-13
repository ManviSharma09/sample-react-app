import React, { useState } from "react";
import { cloneDeep, clone } from "lodash";
import { connect } from "react-redux";

const About = props => {
  const [dynamicList, updateDynamicList] = useState([]);
  console.log("props", props, "dynamicList", dynamicList);
  const saveId = id => {
    const newList = clone(dynamicList);
    newList.push(id);
    console.log("props Enetered", newList);
    updateDynamicList(newList);
    // updateDynamicList([...dynamicList, id]);
  };

  return (
    <div>
      <h2>Widget</h2>
      {props.widgetList.map(widget => {
        return (
          <button onClick={() => saveId(widget.widgetId)}>
            {widget.widgetId}
          </button>
        );
      })}
      {dynamicList.map(dynamicEle => {
        console.log("props  dynamicEle", dynamicEle);
        return <div>{dynamicEle}</div>;
      })}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    widgetList: state.widget.widgetArray
  };
};
export default connect(mapStateToProps)(About);
