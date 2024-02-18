import React from "react";
import styles from "./Item.module.css";
const Item = (props) => {
  //let {foodItem}=props;
const handleButtonClicked=()=>{
  console.log(`${props.foodItem} Being Brought.`)
}


  return (
    <div>
      <li className={`${styles["kg-item"]} "list-group-item "`}>
        <span className={styles["kg-span"]}>{props.foodItem}</span>
        <button className={`${styles.button} btn btn-info`}
        onClick={()=>handleButtonClicked(props.foodItem)}
         
        
        >Buy</button>
      </li>
    </div>
  );
};

export default Item;
