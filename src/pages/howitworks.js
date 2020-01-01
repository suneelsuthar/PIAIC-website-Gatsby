import React from "react"
import Layout from "./../componets/Layout"
import Mappic from "./../images/map.png"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Classes from "./Styles/Work.module.scss"
import { border } from "@material-ui/system"

const HowItWorks = () => (
  <Layout>
    <div>
      <div className={Classes.container}>
        <div className={Classes.headingContainer}>
          <p className={Classes.heading}>How It Works</p>
        </div>
        <div className={Classes.sliderContainer}>
          <div className={Classes.series}>1</div>
          <div>
            <p className={Classes.paragraph}>
              PIAIC will launch classes in tde following locations, one city at
              a time, in tde following order
            </p>
          </div>
        </div>

        
        <div className={Classes.locationContainer}>
          <div>
            <img src={Mappic} width="274px" height="250px" alt="map Image" />
          </div>
          <div>
            <h5 style={{ textAlign: "center", color: "white" }}>
              City by City Roadmap
            </h5>

            <table>
              {/* row 1 */}
              <tr>
                <td className={Classes.numbering}>1</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Classes Started</td>
              </tr>

              {/* row 2 */}
              <tr>
                <td className={Classes.numbering}>2</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Classes Started</td>
              </tr>

              {/* row 3 */}
              <tr>
                <td className={Classes.numbering}>3</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Classes Started</td>
              </tr>

              {/* row 4 */}
              <tr>
                <td className={Classes.numbering}>4</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Accepting applications in Sialkot</td>
              </tr>

              {/* row 5 */}
              <tr>
                <td className={Classes.numbering}>5</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Coming Soon</td>
              </tr>

              {/* row 6 */}
              <tr>
                <td className={Classes.numbering}>6</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Coming Soon</td>
              </tr>

              {/* row 7 */}
              <tr>
                <td className={Classes.numbering}>7</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Coming Soon</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* body */}

    {/* block 2 */}
    <Grid container justifyContent={"center"}style={{ backgroundColor: "rgb(228, 220, 220)" }}>
      <Grid item lg={2} xl={4} md={4} sm={12} xs={12} style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        <div className={Classes.series}>2</div>
      </Grid>
      <Grid item lg={8} xl={7} md={8} sm={12} xs={12} style={{ padding: "20px" }}>
        <p className={Classes.block_content}>
          To participate in the program and become eligible for the most
          prestigious credentials for AI, Cloud, and Blockchain technologies in
          the world, students must complete the following process
        </p>
        <hr />
        <div className={Classes.content_list}>
          <p>
            1- Signup at PIAIC Portal. <a>Click here</a>
          </p>
          <p>2- Submit the online application.</p>
          <p>
            3- Pass the entrance exam which consists of multiple choice English
            and Mathematics questions. Results are determined based on
            percentile.
          </p>
          <p>4- Pass all PIAIC exams with an average score of at least 70%.</p>
        </div>
      </Grid>
    </Grid>
    {/* block 3 */}

    <Grid container justifyContent={"center"} style={{backgroundColor: "rgb(255, 255, 255)",paddingTop: "4%",paddingBottom: "4%"}}>
      <Grid item lg={2} xl={4} md={4} sm={12} xs={12}style={{display: "flex",justifyContent: "center",alignItems: "center",}}>
        <div className={Classes.series}>3</div>
      </Grid>
      <Grid item lg={8} xl={7} md={8} sm={12} xs={12} style={{ padding: "20px" }}>
        <p className={Classes.block_content}>
          Those students who wish to participate in the program online can check
          the distance learning option in the application form. Please note that
          distance learning students must also take proctored exams on site,
          just like the onsite students.
        </p>
      </Grid>
    </Grid>

    {/* block 4 */}

    <Grid container justifyContent={"center"}style={{backgroundColor: "rgb(61, 208, 146)",paddingTop: "4%",paddingBottom: "4%"}}>
      <Grid item lg={2} xl={4} md={4} sm={12} xs={12} style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        <div className={Classes.series} style={{ backgroundColor: "white", color: "hsl(165, 100%, 41%)" }}>
          4
        </div>
      </Grid>
      <Grid item lg={8} xl={7} md={8} sm={12} xs={12}>
        <p style={{ color: "white", fontSize: 14 }}>
          To participate in the program and become eligible for the most
          prestigious credentials for AI, Cloud, and Blockchain technologies in
          the world, students must complete the following process
        </p>
        <p style={{ color: "white", fontSize: 14 }}>
          The fee structure for onsite students is PKR 1,000 per month for 12
          months, payable in 4 installments of PKR 3,000, before the start of
          each quarter.
        </p>
        <p style={{ color: "white", fontSize: 14 }}>
          The fee structure for distance learning students is PKR 500 per month
          for 12 months, payable in 4 installments of PKR 1,500, before the
          start of each quarter.
        </p>
      </Grid>
    </Grid>

    {/* block 5 */}

    <Grid container justifyContent={"center"} style={{backgroundColor: "(255, 255, 255)",paddingTop: "4%",paddingBottom: "4%"}}>
      <Grid item lg={2} xl={4} md={4} sm={12} xs={12} style={{display: "flex",justifyContent: "center",alignItems: "center",}}>
        <div className={Classes.series}>5</div>
      </Grid>
      <Grid item lg={8} xl={7} md={8} sm={12} xs={12} style={{ padding: "20px" }}>
        <p className={Classes.block_content}>
          Please note, all fees will be collected by Saylani Welfare Trust, the
          most trusted NGO in Pakistan. Saylani has strict audit processes
          already in place to ensure proper accountability of funds.
        </p>
      </Grid>
    </Grid>

    {/* block 6 */}
    <Grid container justifyContent={"center"} style={{backgroundColor: "rgb(61, 208, 146)",paddingTop: "4%",paddingBottom: "4%"}}>
      <Grid item lg={2} xl={4} md={4} sm={12} xs={12} style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        <div className={Classes.series} style={{ backgroundColor: "white", color: "hsl(165, 100%, 41%)" }}>
          6
        </div>
      </Grid>
      <Grid item lg={8} xl={7} md={8} sm={12} xs={12}style={{ padding: "20px" }}>
        <p className={Classes.block_content}>
          Please note, this is a highly prestigious program. Due to the high
          level of difficulty, only 10% of students will be awarded the PIAIC
          certifications.
        </p>
      </Grid>
    </Grid>

    {/* block 7 */}
    <Grid container justifyContent={"center"} style={{backgroundColor: "rgb(51, 50, 45)",paddingTop: "4%",paddingBottom: "4%"}}>
      <Grid item lg={2} xl={4} md={4} sm={12} xs={12} style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
        <div className={Classes.series}>7</div>
      </Grid>
      <Grid item lg={8} xl={7} md={8} sm={12} xs={12} style={{ padding: "20px" }}>
        <p style={{color: "white",fontSize: "14px",margin: "0px",padding: "0px"}}>
          For questions related to admissions, you may call us on the PIAIC
          Helpline: +92-308-2220203 between 10 AM - 6 PM. Please note we are
          closed on Fridays.
        </p>
        <p
          style={{color: "white",fontSize: "14px",margin: "0px",padding: "0px"}}>
          For technical questions related to coursework, you may contact us via
          email at education@piaic.org.
        </p>
      </Grid>
    </Grid>
  </Layout>
)

export default HowItWorks
