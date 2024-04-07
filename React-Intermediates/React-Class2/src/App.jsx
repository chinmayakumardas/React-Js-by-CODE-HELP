
import "./App.css";
import { useState } from "react";


function App() {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    street:"",
    city:"",
    state: "",
    pincode:"",
    adult:true,
    singing:false,
    dancing:false,
    sport:false,
  });
  console.log(formData);

  function changeHandler(event){
    const { name, value, checked, type } = event.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });

  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form submited sucessfully");
    // alert(formData.state)
  }
  return (
    <div className="App bg-gray-200 h-screen mx-auto flex flex-col">
      <u>React Form</u>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-[500px] justify-center items-center mx-auto"
      >
      {/* first name */}
        <lable htmlFor="firstname">First Name</lable>
        <input
         required
          className="pl-2 rounded-md"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Enter First name..."
          onChange={changeHandler}
          value={formData.firstname}
        ></input>
        {/* last name */}
        <lable htmlFor="lastname">Last Name</lable>
        <input
          className="pl-2 rounded-md"
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Enter Last name..."
          onChange={changeHandler}
          value={formData.lastname}
        ></input>
        {/* email */}
        <label htmlFor="email">Email </label>
        <input
          name="email"
          className="pl-2 rounded-md"
          id="email"
          type="email"
          placeholder="Enter Email..."
          onChange={changeHandler}
          value={formData.email}
        ></input>
        {/* country */}
        <label htmlFor="country">Country</label>
        <select id="country" name="country" className="pl-2 rounded-md w-[38%]" onChange={changeHandler}  value={formData.country}>
          <option>India</option>
          <option>USA</option>
          <option>Japan</option>
          <option>China</option>
        </select>
        {/* street Address  */}
        <lable htmlFor="street">Street Address</lable>
        <input
          className="pl-2 rounded-md"
          type="text"
          id="street"
          name="street"
          placeholder="Street name..."
          onChange={changeHandler}
          value={formData.street}
        ></input>
       
      
         {/* city */}
         <lable htmlFor="city">City</lable>
        <input
          className="pl-2 rounded-md"
          type="text"
          id="city"
          name="city"
          placeholder="Bhubaneswar"
          onChange={changeHandler}
          value={formData.city}
        ></input>
        {/* state/provinance */}
        <lable htmlFor="state">State / provinance</lable>
        <input
          className="pl-2 rounded-md"
          type="text"
          id="state"
          name="state"
          placeholder="Odisha"
          onChange={changeHandler}
          value={formData.state}
        ></input>
        {/* zip code */}
        <lable htmlFor="pincode">Pincode</lable>
        <input
          className="pl-2 rounded-md "
          type="number"
          id="pincode"
          name="pincode"
          placeholder="751024"
          pattern="[0-9]{6}"
          onChange={changeHandler}
          value={formData.pincode}
        ></input>
        {/* Adult or not */}
        <lable htmlFor="adult">Adult or Not ?</lable>
        <div className="gap-2 flex ">
        <input type="radio" id="yes" name="adult" onChange={changeHandler}  value="yes"></input>
        <label htmlFor="yes">Yes</label>
        <input type="radio" id="no" name='adult' onChange={changeHandler}  value="no"></input>
        <label htmlFor="no">No</label>
        </div>
        <fieldset className="gap-5">
          <legend className="">By Email</legend>
          <input type="checkbox" id='singing' name="singing"  onChange={changeHandler}  value={formData.singing}></input>
          <label>Singing</label>
          <input type="checkbox" id='dancing' name="dancing"  onChange={changeHandler}  value={formData.dancing}></input>
          <label>Dancing</label>
          <input type="checkbox" id='sport' name="sport"  onChange={changeHandler}  value={formData.sport}></input>
          <label>Sport</label>
        </fieldset>
        <button className="bg-blue-500 mt-4 h-[40px] text-white rounded-md px-4">Submit</button>
      </form>
    </div>
  );
}

export default App;
