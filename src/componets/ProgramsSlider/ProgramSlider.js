import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Styles from  "./ProgramSlider.module.scss"
export default class Posts extends React.Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    }
    return (
      <div
        style={{
          marginTop: "5%",
          width: "94%",
          float: "right",
        }}
      >
        <div style={{ border: "1.5px solid", width: 100 }}></div>
        <p className={Styles.title}>Programs in Development</p>
        <Carousel
          showDots={true}
          responsive={responsive}
          className={Styles.slider_section}

        >
          <div className={Styles.box_1}>SDN/NFV for 5G</div>
          <div className={Styles.box_2}>AUGMENTED REALITY</div>
          <div className={Styles.box_3}>ENTREPRENEURSHIP</div>
          <div className={Styles.box_4}>MOBILE WEB SPECIALIST</div>
          <div className={Styles.box_5}>iOS</div>
          <div className={Styles.box_6}>ANDROID</div>
        </Carousel>
      </div>
    )
  }
}
