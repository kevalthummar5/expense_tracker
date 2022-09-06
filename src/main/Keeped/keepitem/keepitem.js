import Card from "../../../ui/card";
import { useState } from "react";
import "./keepitem.css";
import Dateitem from "../../../ui/Dateitem";

const Keepitem = (props) => {
  // console.log(props.amount);
  return (
    <Card>
      <div className="Keepitem">
        <Dateitem dateary={props.date}></Dateitem>
        <h2 className="Keepitemtitle">{props.title}</h2>
        <p className="Keepitemamt">₹ {props.amount}</p>
      </div>
    </Card>
  );
};

export default Keepitem;
