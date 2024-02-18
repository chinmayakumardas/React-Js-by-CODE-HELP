
import styles from "./FoodInput.module.css"
const FoodInput = () => {
  return (
   
        <input  className={styles.foodInput} type='text' placeholder="Enter food Item " onChange={(e)=>console.log(e.target.value)}></input>
    
  )
}

export default FoodInput