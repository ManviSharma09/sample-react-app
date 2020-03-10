export const createAsyncAction = actions => {
  const actionObject = {};
  actions.forEach(actionType => {
    actionObject[`${actionType}_REQUEST`] = `${actionType}_REQUEST`;
    actionObject[`${actionType}_SUCCESS`] = `${actionType}_SUCCESS`;
    actionObject[`${actionType}_FAILURE`] = `${actionType}_FAILURE`;
  });
  return actionObject;
};

export const createSyncAction = actions => {
  const actionObject = {};
  actions.forEach(actionType => {
    actionObject[actionType] = actionType;
  });
  return actionObject;
};
