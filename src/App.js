// import React from 'react';
import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path='/work/:id'>
          <MovieDetail />
        </Route>
        <Route path='/work/hi'>
<h1> Hi </h1>
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
