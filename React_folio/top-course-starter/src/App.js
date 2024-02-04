import React, { useEffect, useState } from "react";

import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {toast} from "react-toastify"

const App = () => {
  const [courses,setCourses]=useState(null);
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        //save data in a variable
        setCourses(output.data);
        console.log("Courses value updated");
        console.log(courses);

      }catch(error){
          toast.error("Something Went Wrong !");
      }
    }
    fetchData();
  },[]);
  return <div>
    <Navbar/>

    <Filter 
    filterData={filterData}
    />

    <Cards course={courses}/>
  </div>
  ;
};

export default App;
