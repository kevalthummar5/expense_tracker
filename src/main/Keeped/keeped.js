import Keepitem from "./keepitem/keepitem";
import "./keeped.css";
import Filteryear from "./Filteryear/Filteryear";
import Chartarea from "./Chartarea/Chartarea";
const Keeped = (props) => {
  let finry = props.keepitemarray;
  let outary = [];
  const yearhandler = (yearitem) => {
    props.yearchange(yearitem);
  };
  if (finry.length > 0) {
    finry.map((item) => {
      outary.push(
        <Keepitem
          key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        ></Keepitem>
      );
    });
  } else {
    outary.push(<h1>No Items Found</h1>);
  }

  return (
    <div className="Keeped">
      <Filteryear key={"7"} yearchange={yearhandler}></Filteryear>
      <Chartarea
        key={"5"}
        maximisefactor={props.maximisefactor}
        monthary={props.monthary}
      ></Chartarea>
      {outary}
    </div>
  );
};

export default Keeped;
