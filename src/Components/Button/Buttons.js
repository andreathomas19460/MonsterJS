import React from "react";
import Button from "./Button";
import "./style.css";
const ButtonList = (props) => {
  return (
    <div>
      <div className="comp-cat buttons">
        <h1>
          Buttons:
          <Button value="Click!" styleClass="btn sunset monster" />
          <Button value="Click!" styleClass="btn lagoon lg" />
          <Button value="Click!" styleClass="btn moon md" />
          <Button value="Click!" styleClass="btn midnight sm" />
        </h1>
      </div>
    </div>
  );
};

export default ButtonList;

// types = ['primary', 'outline', 'destructive', 'lowEmphasis'];
// <>
// {types.map(type => <Button type={type} key={type} style={{marginRight: 12}}>{type}</Button>)}

// <div style={{backgroundColor: '#212636', display: 'inline-block' }}>
//   <Button kind='outlineDark' key='outlineDark' style={{margin: 12}}>outlineDark</Button>
// </div>
// </>
