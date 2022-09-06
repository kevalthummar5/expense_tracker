import "./Dateitem.css";

const Dateitem = (props) => {
  let ary = ["21", "December", "2021"];
  return (
    <div className="Dateitem" type={props.type}>
      <p>{props.dateary[1]}</p>
      <p className="Dateitemyear">{props.dateary[2]}</p>
      <h2 className="Dateitemdate">{props.dateary[0]}</h2>
    </div>
  );
};

export default Dateitem;
