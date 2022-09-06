import { useRef } from "react";
import "./Filteryear.css";

const Filteryear = (props) => {
  const yearhandler = (event) => {
    props.yearchange(event.target.value);
  };

  return (
    <div className="Filteryear">
      <span className="yearspan">select filter year</span>
      <select onChange={yearhandler} className="yearselect">
        <option defaultValue="All">All</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>

        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default Filteryear;
