import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Styles from "./ImageSlider.module.scss"
import slide1 from "./../../images/slide1.jpg"
import slide2 from "./../../images/slide2.jpg"
import slide3 from "./../../images/slide3.jpg"
import Grid from "@material-ui/core/Grid"

export default class ImageSlider extends React.Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    }
    return (
      <div className={Styles.main_container}>
        <p className={Styles.title}>Images</p>
        <Carousel
          showDots={true}
          responsive={responsive}
          className={Styles.main_section}
          removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        >
          <Grid container justifyContent="center">
            <Grid lg={7} xl={6} md={6} sm={12} xs={12}>
              <img src={slide2} />
            </Grid>
            <Grid lg={5} xl={6} md={6} sm={12} xs={12}>
              <div className={Styles.slide_content}>
                <h3>President launching the PIAIC website.</h3>
                <p>
                  President Dr. Arif Alvi launching the official website of the
                  PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf
                  (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr.
                  Hunaid Lakhani (Chancellor Iqra University), President Dr.
                  Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock
                  Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir
                  Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani
                  (President Saylani Welfare Trust).
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid lg={7} xl={6} md={6} sm={12} xs={12}>
              <img src={slide1} />
            </Grid>
            <Grid lg={5} xl={6} md={6} sm={12} xs={12}>
              <div className={Styles.slide_content}>
                <h3>First meeting with the President.</h3>
                <p>
                  First official PIAIC meeting on November 1st, 2018. From left
                  to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat
                  Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr.
                  Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad
                  Ghazzal (COO Saylani Welfare Trust).
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid lg={7} xl={6} md={6} sm={12} xs={12}>
              <img src={slide3} />
            </Grid>
            <Grid lg={5} xl={6} md={6} sm={12} xs={12}>
              <div className={Styles.slide_content}>
                <h3>Meeting with Chief Secretary Sindh.</h3>
                <p>
                  Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on
                  December 28th, where he assured the PIAIC management team of
                  his full support for the national cause and offered space at
                  all the public universities in Sindh.
                </p>
              </div>
            </Grid>
          </Grid>
        </Carousel>
      </div>
    )
  }
}