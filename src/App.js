import React, {createContext, useState} from "react";
import './App.css';
import Header from "./Components/Header/Header";

import Banner from "./Components/Banner/Banner";
import Developers from "./Components/Developers/Developers";
import PostForm from "./Components/PostForm/PostForm";


export const RefreshCard = createContext(true);



function App() {
    const [shouldRefresh , setShouldRefresh]= useState(false)


  return (
      <RefreshCard.Provider value={{shouldRefresh, setShouldRefresh}}>
          <div className="App">
              <Header/>
              <Banner/>
              <Developers/>
              <PostForm/>
          </div>
      </RefreshCard.Provider>
  );
}

export default App;
