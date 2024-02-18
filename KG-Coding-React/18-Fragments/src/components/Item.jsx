
import styles from "./Item.module.css";
const Item = ({foodItem,handleBuyButton}) => {
  //let {foodItem}=props;
// const handleButtonClicked=()=>{
//   console.log(`${foodItem} Being Brought.`)
// }


  return (
    <div>
      <li className={`${styles["kg-item"]} "list-group-item "`}>
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
         
        
        >Buy</button>
      </li>
    </div>
  );
};

export default Item;
