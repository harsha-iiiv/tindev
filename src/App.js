import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatsScreen from "./ChatsScreen";
import "./App.css";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />

            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route exact path="/chat">
            <Header backbutton="/" />
            <Chats />
          </Route>
          <Route exact path="/chat/:dev">
            <Header backbutton="/chat" />
            <ChatsScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
