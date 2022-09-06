import Editor from "./Editor/editor";
import Keeped from "./Keeped/keeped";
import { useState } from "react";
import "./main.css";

const Main = () => {
  const [finalarray, setfinalarray] = useState([]);
  const [yearitem, setyearitem] = useState("");
  const [filterarray, setfilterarray] = useState([]);
  // const [monthary, setmonthary] = useState([
  //   { id: 11, month: "jan", amount: 0 },
  //   { id: 111, month: "feb", amount: 0 },
  //   { id: 1111, month: "mar", amount: 0 },
  //   { id: 124, month: "apr", amount: 0 },
  //   { id: 133, month: "may", amount: 0 },
  //   { id: 146, month: "jun", amount: 0 },
  //   { id: 154, month: "jul", amount: 0 },
  //   { id: 175, month: "aug", amount: 0 },
  //   { id: 166, month: "sep", amount: 0 },
  //   { id: 18, month: "oct", amount: 0 },
  //   { id: 178, month: "nov", amount: 0 },
  //   { id: 1788, month: "dec", amount: 0 },
  // ]);
  let monthary = [
    { id: 11, month: "jan", amount: 0 },
    { id: 111, month: "feb", amount: 0 },
    { id: 1111, month: "mar", amount: 0 },
    { id: 124, month: "apr", amount: 0 },
    { id: 133, month: "may", amount: 0 },
    { id: 146, month: "jun", amount: 0 },
    { id: 154, month: "jul", amount: 0 },
    { id: 175, month: "aug", amount: 0 },
    { id: 166, month: "sep", amount: 0 },
    { id: 18, month: "oct", amount: 0 },
    { id: 178, month: "nov", amount: 0 },
    { id: 1788, month: "dec", amount: 0 },
  ];
  const objecthandler = (obj) => {
    setfinalarray((prev) => {
      return [...prev, obj];
    });
    setyearitem("All");
  };

  const yearhandler = (yearitem) => {
    setyearitem(yearitem);
    setfilterarray([...finalarray.filter((obj) => obj.date[2] === yearitem)]);
  };
  let finaloutputarray = yearitem != "All" ? filterarray : finalarray;

  const monthhandler = (obj) => {
    // setmonthary((prev) => {
    //   return prev.map((event) => {
    //     const monthobj = {};
    //     {
    //       if (event.month === obj.date[1].slice(0, 3).toLowerCase()) {
    //         monthobj.id = event.id;
    //         monthobj.month = event.month;
    //         monthobj.amount = parseInt(obj.amount) + event.amount;
    //       } else {
    //         monthobj.id = event.id;
    //         monthobj.month = event.month;
    //         monthobj.amount = event.amount;
    //       }
    //       return monthobj;
    //     }
    //   });
    // });
  };

  finaloutputarray.forEach((element) => {
    let result = [];
    monthary.map((e) => {
      let monthtestobj = {};
      // console.log(`${e.month} month array`);
      // console.log(`${element.date} final  array`);
      if (e.month === element.date[1].slice(0, 3).toLowerCase()) {
        // console.log(`if run`);
        monthtestobj.id = e.id;
        monthtestobj.month = e.month;
        monthtestobj.amount = parseInt(element.amount) + e.amount;
      } else {
        // console.log(`else run`);
        monthtestobj.id = e.id;
        monthtestobj.month = e.month;
        monthtestobj.amount = e.amount;
      }
      // console.log(monthtestobj);
      // console.log(`${monthtestobj} in map`);
      return result.push(monthtestobj);
    });
    monthary.splice(0, 12);
    monthary = [...result];
  });

  let maximisefactor = Math.max(...monthary.map((e) => e.amount));

  // console.log(result);
  return (
    <div className="Main">
      <Editor
        Key={"h"}
        finalobject={(event) => {
          objecthandler(event);
          monthhandler(event);
        }}
      ></Editor>
      <Keeped
        Key={"h"}
        maximisefactor={maximisefactor}
        yearchange={yearhandler}
        monthary={monthary}
        keepitemarray={finaloutputarray}
      ></Keeped>
    </div>
  );
};

export default Main;
