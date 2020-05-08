
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Button from "./Components/Buttons";
import ContactForm from "./Components/ContactForm"
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Button
        value='Click!'
        styleClass='btn-default' />
        <ContactForm styleClass={'sunset'}/>
    </div>
  );
}

export default App;
