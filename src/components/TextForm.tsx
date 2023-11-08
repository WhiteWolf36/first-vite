import { useState } from "react";
import { ChangeEvent } from "react";
import Alert from "./Alert";
interface Props {
  btnUpText: string;
  btnDnText: string;
  btnClrText: string;
  heading: string;
  color: string;
}
const TextForm = ({
  heading,
  btnUpText,
  btnDnText,
  btnClrText,
  color,
}: Props) => {
  const [text, setText] = useState("");
  const [alertText, setAlertText] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [myStyle, setMyStyle] = useState({
    fontWeight: "",
  });
  const [bldText, setBldText] = useState("Bold");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    setAlertText("Converted to Upper Case!");
    setVisibility(true);
  };
  const handleDnClick = () => {
    setText(text.toLowerCase());
    setAlertText("Converted to Lower Case!");
    setVisibility(true);
  };
  const handleClrClick = () => {
    setAlertText("Cleared!");
    setText("");
    setVisibility(true);
  };
  const handleCopy = () => {
    setAlertText("The text is Copied to Clipboard!");
    navigator.clipboard.writeText(text);
    setVisibility(true);
  };
  const handleExtraSpace = () => {
    setAlertText("Removed Extra space!");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    setVisibility(true);
  };
  const handleBold = () => {
    if (bldText === "Bold") {
      setAlertText("The text is Bold!");
      setMyStyle({
        fontWeight: "bold",
      });
      setBldText("Normal");
      setVisibility(true);
    } else {
      setAlertText("The text is Normal!");
      setMyStyle({
        fontWeight: "normal",
      });
      setBldText("Bold");
      setVisibility(true);
    }
  };
  const handleUpChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const handleVisbility = () => {
    setVisibility(false);
  };
  return (
    <>
      {visibility && <Alert onClickBtn={handleVisbility}> {alertText} </Alert>}
      <div className="container mb-3">
        <h1 style={{ color: `${color}` }}>{heading}</h1>
        <textarea
          className="form-control"
          placeholder="Enter your text here:"
          value={text}
          onChange={handleUpChange}
          id="textBox"
          rows={8}
          style={myStyle}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          {btnUpText}
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleDnClick}>
          {btnDnText}
        </button>
        <button className="btn btn-primary my-3 " onClick={handleClrClick}>
          {btnClrText}
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary my-3" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleBold}>
          {bldText}
        </button>
      </div>
      <div className="container my-3" style={{ color: `${color}` }}>
        <h2>Your Text Summary</h2>
        <p>
          Your text have{" "}
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        <p>
          {0.08 *
            text.split(/\s+/).filter((element) => {
              return element.length != 0;
            }).length}{" "}
          minutes read.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Your entered text appears here"}</p>
      </div>
    </>
  );
};

export default TextForm;
