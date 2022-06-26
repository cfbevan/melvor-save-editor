import React from "react";
import { decryptSave, MelvorData } from "./util";
import { curry, setWith, clone } from "lodash/fp";
import get from "lodash-es/get";

export type Action =
  | { type: "load"; payload: MelvorData }
  | { type: "update"; payload: { path: string; value: any } };

export type State = MelvorData | null;

export type Dispatch = React.Dispatch<Action>;

export const setIn = curry(
  (path: string, value: any, state: MelvorData): MelvorData =>
    setWith(clone, path, value, clone(state))
);

export const reducer = (state: State, action: Action): MelvorData => {
  switch (action.type) {
    case "load":
      return action.payload;
    case "update":
      const { path, value } = action.payload;
      return setIn(path, value, state as MelvorData);
    default:
      throw new Error();
  }
};

export const Context = React.createContext<AppContextInterface | null>(null);

interface AppContextInterface {
  state: State;
  update: (path: string, value: any) => void;
  load: (loadData: string) => void;
  get: (path: string) => any;
}

const Provider = React.memo(
  ({ children }) => {
    const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
      reducer,
      null
    );

    const value: AppContextInterface = {
      state,
      update: (path: string, value: any) => {
        dispatch({
          type: "update",
          payload: {
            path,
            value,
          },
        });
      },
      load: (loadData: string) => {
        dispatch({ type: "load", payload: decryptSave(loadData.trim()) });
      },
      get: (path: string) => get(state, path),
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
  },
  () => true
);

export default Provider;
