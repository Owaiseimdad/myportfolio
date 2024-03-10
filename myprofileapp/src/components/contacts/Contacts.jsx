import { useState } from "react";
import "./contacts.scss";

function Contacts() {
  const [message, setMessage] = useState(false);
  const [inputMsg, setinputMsg] = useState([]);
  const handleOnSubmit = (e) => {
    setinputMsg([e.target[0].value, e.target[1].value]);
    e.preventDefault();
    setMessage(true);
    console.log(inputMsg);
    e.target[0].value = "";
    e.target[1].value = "";
    setTimeout(() => {
      setMessage(false);
    }, 10000);
  };
  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Email Me!</h2>
        <form onSubmit={handleOnSubmit}>
          <input type="email" placeholder="ex@gmat.com" />
          <textarea type="text" placeholder="Message..." />
          <button type="submit">Send</button>
          {message && (
            <span className="ThanksMsg">
              Thanks, I will reach out to you soon!!
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contacts;
