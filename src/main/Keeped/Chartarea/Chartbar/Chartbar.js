import "./Chartbar.css";
const Chartbar = (props) => {
  console.log("chartbar pickup");
  console.log(props.per);
  return (
    <div className="Chartbararea">
      <div className="outerbar">
        <div
          className="innerbar"
          style={{ height: `${parseInt(props.per)}%` }}
        ></div>
      </div>
      <p> &nbsp;₹ {props.amt}</p>
      <span className="chartbarspan">{props.mon}</span>
    </div>
  );
};

export default Chartbar;
