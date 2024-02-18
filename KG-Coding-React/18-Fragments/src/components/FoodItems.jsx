import React from 'react'
import Item from './Item';
const FoodItems = ({items}) => {
    

    //in  propse either it 2way 
    // way-1 either you pass the props in source component call and in curr component pass the props by write "props" in func paramenter then use it by props.<props-var-name>.----etc

    // way-2 either you pass the props in source component call and in curr component pass the props by in the form of destructuring the arr {<props-var-name>} in func paramenter then use it by [  <props-var-name>.----etc  ]

    return (
    <div>
         <ul className="list-group">
         {items.map((item)=>(
          <Item key={item} foodItem={item} handleBuyButton={()=>console.log(`${item} brought.`)}></Item>

          
          ))}
      </ul>
    </div>
  );
}

export default FoodItems