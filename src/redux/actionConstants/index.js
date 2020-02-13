import asyncAction from "./asyncActionTypes";
import syncAction from "./syncActionTypes";
import { createAsyncAction, createSyncAction } from "./helper";

const actionTypes = {
  ...createAsyncAction(asyncAction),
  ...createSyncAction(syncAction)
};

export default actionTypes;
