import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favcar:"",
  });
  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
function submitHandler(event){
  event.preventDefault();
  console.log("Form submited sucessfully");

}
  return (
    <div className="App">
      APP
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">First Name </label>
        <input
          type="text"
          value={formData.firstname}
          name="firstname"
          id="firstname"
          placeholder="Enter First name..."
          onChange={changeHandler}
        ></input>{" "}
        <br />
        <br />
        <label htmlFor="lastname">Last Name </label>
        <input
          name="lastname"
          id="lastname"
          value={formData.lastname}
          type="text"
          placeholder="Enter First name..."
          onChange={changeHandler}
        ></input>
        <br />
        <br />
        <label htmlFor="email">Email </label>
        <input
          name="email"
          value={formData.email}
          id="email"
          type="email"
          placeholder="Enter Email..."
          onChange={changeHandler}
        ></input>{" "}
        <br />
        <br />
        <label htmlFor="comments">Comments </label>
        <textarea
          placeholder="Enter the Comments "
          value={formData.comments}
          name="comments"
          id="comments"
          onChange={changeHandler}
        ></textarea>
        <br />
        <br />
        <input
          type="checkbox"
          checked={formData.isVisible}
          id="isVisible"
          name="isVisible"
          value={formData.isVisible}
          onChange={changeHandler}
        ></input>
        <label htmlFor="isVisible">I agree all t&c. </label> <br />
        <br />
        <input
          type="radio"
          onChange={changeHandler}
          checked={formData.mode === "offline-Mode"}
          id="offline-Mode"
          value="offline-Mode"
          name="mode"
        ></input>
        <label htmlFor="offline-Mode">offline Mode</label>
        <input
          type="radio"
          onChange={changeHandler}
          checked={formData.mode=== "online-Mode" }
          id="online-Mode"
          value="online-Mode"
          name="mode"
        ></input>
        <label htmlFor="online-Mode">Online Mode</label>
        <br></br> <br></br>
        <label >Tell me yout fav Car ?</label> <br/>
        <select name="favcar" id="favcar" value={formData.favcar} onChange={changeHandler}>
            <option>BMW</option>
            <option>Audi</option>
            <option>Fortuner</option>
        </select>
        <br/>
      {/* <input type="submit" value="Submit"></input> */}
      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
