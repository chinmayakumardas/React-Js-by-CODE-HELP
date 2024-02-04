import React from 'react'
import Card from './Card'
const Cards = ({courses}) => {
let allCourses=[];

//it returns all list of courses received from api
  const getCourses=()=>{
    console.log("Printing courses")
    console.log(courses);
    Object.values(courses).forEach((courseCatagory)=>{
            courseCatagory.forEach((course)=>{
              allCourses.push(course);
            })
      });
      return allCourses;
  }

  return (
    <div>
      {
        !courses? (
          <div>
              <p>No data found</p>
          </div>
        ):(
          getCourses().map((course)=>{
         return <Card key={course.id} course={course}/>
       })
        )
      }
      
    </div>
  );
}

export default Cards