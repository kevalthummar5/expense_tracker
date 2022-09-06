import Card from "../../../ui/card";
import "./Chartarea.css";
import Chartbar from "./Chartbar/Chartbar";
const Chartarea = (props) => {
  // monthary = JSON.parse(JSON.stringify(monthtestarray));
  let monthfinalary = props.monthary.map((data) => {
    let finalmonthobj = {};
    finalmonthobj.id = data.id;
    finalmonthobj.month = data.month;
    finalmonthobj.amount = data.amount;
    finalmonthobj.per =
      props.maximisefactor > 0 ? data.amount * (100 / props.maximisefactor) : 0;
    return finalmonthobj;
  });
  console.log(monthfinalary);
  return (
    <div className="Chartarea">
      {monthfinalary.map((data) => {
        return (
          <Chartbar
            key={data.id}
            mon={data.month}
            per={(data.per = NaN ? 0 : data.per)}
            amt={data.amount}
            max="100"
          ></Chartbar>
        );
      })}
    </div>
  );
};

export default Chartarea;
