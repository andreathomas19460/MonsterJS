import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Button from "./Components/Button/Buttons";
import ContactForm from "./Components/Form/index";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Button value="Click!" styleClass="btn-default" />
      <ContactForm />
    </div>
  );
}

export default App;
