import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  addData,
  deleteName,
  updateUser,
} from "./features/counter/counterSlice";

function App() {
  const apidata = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  const [addname, setaddName] = useState("");
  const [addcity, setaddCity] = useState("");
  const [updatenewname, setupdatenewName] = useState("");

  // console.log(updatenewname);
  return (
    <>
      <br />
      <br />
      <input type="text" onChange={(e) => setaddName(e.target.value)} />
      <input type="text" onChange={(e) => setaddCity(e.target.value)} />
      <button
        onClick={() =>
          dispatch(
            addData({
              id: apidata[apidata.length - 1].id + 1,
              name: addname,
              city: addcity,
            })
          )
        }
        className="btn-btn"
      >
        Save data
      </button>
      <br />
      {apidata.map((el, i) => {
        return (
          <div className="center" key={i}>
            <div className="App">
              <h1>id : -{el.id}</h1>
              <h1>Name :-{el.name}</h1>
              <h1>City :-{el.city}</h1>
              <input
                type="text"
                placeholder="Name..."
                onChange={(e) => setupdatenewName(e.target.value)}
              />
              <button
                onClick={() =>
                  dispatch(updateUser({ id: el.id, name: updatenewname }))
                }
                className="btn-btn"
              >
                Update Name
              </button>
              <button
                onClick={() => dispatch(deleteName({ id: el.id }))}
                className="btn-btn"
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
