import {useState} from "react";

const useStateCallback = (initialState) => {
  const [state, setState] = useState(initialState);

  const setStateCallback = (newState, callback) => {
    setState(newState);
    if (callback && typeof callback === "function") {
      setTimeout(() => {
        callback();
      }, 10);
    }
  };

  return [state, setStateCallback];
};

export default useStateCallback;
