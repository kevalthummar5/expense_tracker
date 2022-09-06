import { useRef } from "react";
import Anybutton from "../../../ui/Anybutton";
import Card from "../../../ui/card";

import "./Formeditor.css";
const Formeditor = (props) => {
  const titleref = useRef(null);
  const amountref = useRef(null);
  const dateref = useRef(null);
  let finobj = {};
  const id1 = Math.random().toString().slice(7, 11);
  let monthary = [
    "January",
    "Februry",
    "march",
    "april",
    "may",
    "june",
    "july",
    "auguest",
    "september",
    "october",
    "november",
    "december",
  ];
  const submithandler = (e) => {
    e.preventDefault();
    const datestr = dateref.current.value;
    const splitdate = datestr.split("-");
    const datefinalstr = splitdate[2];
    const monthfinalstr = monthary[parseInt(splitdate[1]) - 1];
    const yearfinalstr = splitdate[0];

    finobj.id = id1;
    finobj.title = titleref.current.value;
    finobj.date = [datefinalstr, monthfinalstr, yearfinalstr];
    finobj.amount = amountref.current.value;
    // console.log(finobj);
    props.finalobject(finobj);
    // console.log(monthfinalstr);
    // console.log(dateb, monthb, yearb);
    // props.finalobject(finobj);

    titleref.current.value = "";
    amountref.current.value = "";
    dateref.current.value = "";
  };

  return (
    <div className="Formeditor">
      <form className="Form1" onSubmit={submithandler}>
        <div className="box title">
          <label className="lbl titlelable" htmlFor="title">
            TITLE:
          </label>

          <input
            id="title"
            className="Text Textinput"
            type="text"
            placeholder="Title"
            ref={titleref}
            required
          />
        </div>
        <div className="box amount">
          <label className="lbl amountlable" htmlFor="amount">
            AMOUNT(Rs.):
          </label>

          <input
            id="amount"
            className="Text amountinput"
            type="number"
            placeholder="Amount"
            ref={amountref}
            required
          />
        </div>
        <div className="box title">
          <label className="lbl datelable" htmlFor="date">
            DATE:
          </label>

          <input
            id="date"
            className="Text dateinput"
            type="date"
            placeholder="select date"
            ref={dateref}
            required
          />
        </div>
        <div className="box submitbtn">
          <div
            className="cancelbtn"
            onClick={() => {
              props.formhandle();
            }}
          >
            <Anybutton type="reset" title="CANCEL"></Anybutton>;
          </div>
          <Anybutton type="submit" title="ADD"></Anybutton>;
        </div>
      </form>
    </div>
  );
};
export default Formeditor;
