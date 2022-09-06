import "./Anybutton.css";

const Anybutton = (props) => {
  //   console.log(props);
  return (
    <button className="Anybutton" type={props.type}>
      {props.title}
    </button>
  );
};

export default Anybutton;
