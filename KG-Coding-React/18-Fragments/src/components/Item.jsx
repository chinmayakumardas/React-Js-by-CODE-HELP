import React from 'react'
import styles from './Item.module.css'
const Item = (props) => {
  //let {foodItem}=props;
  return (
    <div>
       
            <li className={`${styles['kg-item']} "list-group-item "`}><span className={styles['kg-span']}>{props.foodItem}</span></li>
    </div>
  )
}

export default Item