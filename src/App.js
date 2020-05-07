import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Button from "./Components/Button/Buttons";

import "./App.css";
import TestForm from "./Components/Form/index";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Button value="Click!" styleClass="btn-default" />
      <TestForm />
    </div>
  );
}

export default App;
