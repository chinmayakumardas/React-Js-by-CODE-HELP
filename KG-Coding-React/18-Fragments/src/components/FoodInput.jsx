
import styles from "./FoodInput.module.css"
const FoodInput = (handleOnChange) => {
  return (
   
        <input  className={styles.foodInput} type='text' placeholder="Enter food Item " onChange={handleOnChange}></input>
    
  ) 
}

export default FoodInput