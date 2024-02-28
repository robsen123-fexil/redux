import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getsongsFetch } from "./songstate";

function App() {
  const song = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getsongsFetch());
  }, [dispatch]);

  console.log(song);

  return <div className="App">{/* Your component content goes here */}</div>;
}

export default App;
