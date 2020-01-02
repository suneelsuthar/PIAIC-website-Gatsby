import React from "react"
import Styles from "./Courses.module.scss"
const Card = props => (
  // <div className='column'>

  <div className={Styles.card}>
    <div className={Styles.card_top_border} className={Styles.card_1}></div>

    <div className={Styles.card_name}>
      <span className={Styles.title_1}>{props.heading}</span>
    </div>

    <div className={Styles.overlay}>
      <div className={Styles._text}>
        <span className={Styles.title_heading}>{props.heading}</span>
        <span className={Styles.title_descripation}>{props.description}</span>
      </div>
    </div>
  </div>

  // </div>
)

export default Card
