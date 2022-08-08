import React from "react";
import Register  from "./pages/Register";

 import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
            <Route path = "/">
                <Welcome />
            </Route>
            <Route path = "/game">
                <Game />
            </Route>
            <Route path = "/leaderboard">
                <Leaderboard />
            </Route>
           </Routes>
    </div>
  );
}

export default App;
