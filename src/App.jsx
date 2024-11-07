import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "./store/reducers/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="m-auto container mt-5 bg-red-100 p-10">
      <h1 className="text-center font-bold text-2xl text-red-900">
        Counter : {value}
      </h1>
      <div className="text-center">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementAsync(5))}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
};

export default App;
