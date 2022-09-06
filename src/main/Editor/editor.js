import Card from "../../ui/card";
import "./editor.css";
import { useState } from "react";
import Buttoneditor from "./Buttoneditor/Buttoneditor";
import Formeditor from "./Formeditor/Formeditor";

const Editor = (props) => {
  const [formdisplay, setformdisplay] = useState(false);
  const formdisplayhandler = () => {
    setformdisplay(true);
  };
  const formnotdisplayhandler = () => {
    setformdisplay(false);
  };
  const objecthandler = (e) => {
    props.finalobject(e);
    // console.log(e.amount);
  };
  return (
    <div className="Editor">
      <Card>
        {formdisplay ? (
          <Formeditor
            finalobject={objecthandler}
            formhandle={formnotdisplayhandler}
          ></Formeditor>
        ) : (
          <Buttoneditor formhandle={formdisplayhandler}></Buttoneditor>
        )}
      </Card>
    </div>
  );
};

export default Editor;
