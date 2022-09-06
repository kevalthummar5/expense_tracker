import Anybutton from "../../../ui/Anybutton";
import "./Buttoneditor.css";
const Buttoneditor = (props) => {
  return (
    <div
      onClick={() => {
        props.formhandle();
      }}
    >
      <Anybutton title="ADD NEW ITEM"></Anybutton>
    </div>
  );
  // <Anybutton title="ADD NEW ITEM"></Anybutton>
};

export default Buttoneditor;
