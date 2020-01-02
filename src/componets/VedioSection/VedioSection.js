import React from "react"
import Styles from "./VedioSection.module.scss"
import Grid from "@material-ui/core/Grid"

export default class VedioSection extends React.Component {
  render() {
    return (
      <>
        <div className={Styles.main_container}>
          {/* play vedio */}
          <section id={Styles.main_body_container}>
            <h1 style={{ fontWeight: "bold", paddingBottom: 10 }}>Vedios</h1>
            <Grid container justifyContent="center">
              <Grid lg={8} xl={6} md={6} sm={12} xs={12}>
                <article id={Styles.main_article}>
                  <section style={{ textAlign: "center", width: "100%" }}>
                    <iframe
                      style={{ minWidth: "99%", minHeight: "480px" }}
                      src="https://www.youtube.com/embed/_rUQ301EJAo"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </section>
                  <div className={Styles.vedio_play_content}>
                    <h4>PIAIC Classes Coming Soon!</h4>
                    <p>
                      The mission of PIAIC is to reshape Pakistan by
                      revolutionizing education, research, and business by
                      adopting latest, cutting-edge technologies.
                    </p>
                  </div>
                </article>
              </Grid>

              {/* vedio 1 */}
              <Grid
                lg={4}
                xl={5}
                md={5}
                sm={12}
                xs={12}
                onClick={e => console.log("vedio data ==========> ", e)}
              >
                <aside className={Styles.scrollbar} id={Styles.sidebar_styling}>
                  <Grid container justifyContent="center">
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <article className={Styles.slider_article}>
                        <section
                          className={Styles.iframe_section}
                          style={{
                            backgroundImage:
                              "url(https://i.ytimg.com/vi/_rUQ301EJAo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAtBZodxxHyobIDP13zgWTQ92E-hQ)",
                          }}
                        ></section>
                      </article>
                    </Grid>
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <div className={Styles.vedio_content}>
                        <h3>PIAIC Classes Coming Soon!</h3>
                        <p>
                          The mission of PIAIC is to reshape Pakistan by
                          revolutionizing education, research, and business by
                          adopting latest, cutting-edge technologies.
                        </p>
                      </div>
                    </Grid>

                    {/* vedio 2 */}
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <article className={Styles.slider_article}>
                        <section>
                          <section
                            className={Styles.iframe_section}
                            style={{
                              backgroundImage:
                                "url(https://i.ytimg.com/vi/RuYbBHHF4VM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLABXcLM3C6FliZCd7LcHmdfftlMyw)",
                            }}
                          ></section>
                        </section>
                      </article>
                    </Grid>
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <div className={Styles.vedio_content}>
                        <h3>
                          <u>Teaser 2: PIAIC Classes Coming Soon !</u>
                        </h3>
                        <p>
                          The mission of PIAIC is to reshape Pakistan by
                          revolutionizing education, research, and business by
                          adopting latest, cutting-edge technologies.
                        </p>
                      </div>
                    </Grid>

                    {/* vedio 3 */}
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <article className={Styles.slider_article}>
                        <section
                          className={Styles.iframe_section}
                          style={{
                            backgroundImage:
                              "url(https://i.ytimg.com/vi/sqtc7s1KZEg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNwQn7v_KMACOFna29uryb3EpPzg)",
                          }}
                        ></section>
                      </article>
                    </Grid>
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <div className={Styles.vedio_content}>
                        <h3>PIAIC Intro - Full Version</h3>
                        <p>
                          Official intro video of the PIAIC. Messages from
                          President Dr. Arif Alvi, Kazi Rahat Ali, Hunaid
                          Lakhani, Sulaiman S. Mehdi, and Zia Ullah Khan.
                        </p>
                      </div>
                    </Grid>

                    {/* vedio 4 */}
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <article className={Styles.slider_article}>
                        <section
                          className={Styles.iframe_section}
                          style={{
                            backgroundImage:
                              "url(https://img.youtube.com/vi/x5LRuwdi0aQ/mqdefault.jpg)",
                          }}
                        ></section>
                      </article>
                    </Grid>
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <div className={Styles.vedio_content}>
                        <h3>Exclusive Interview of President Dr.Arif Alvi</h3>
                        <p>| Ab Baat Hogi | 26th January 2019 | BOL News </p>
                      </div>
                    </Grid>

                    {/* vedio 5 */}
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <article className={Styles.slider_article}>
                        <section>
                          <section
                            className={Styles.iframe_section}
                            style={{
                              backgroundImage:
                                "url(https://i.ytimg.com/vi/kHLdqsLWnEM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAc5yNk6ThE95pKLQVDjLkwlrGR7A)",
                            }}
                          ></section>
                        </section>
                      </article>
                    </Grid>
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <div className={Styles.vedio_content}>
                        <h3>PTV Coverage of PIAIC Entry Test</h3>
                        <p>
                          PTV News coverage of 1st Entrance Exam of the PIAIC in
                          Karachi
                        </p>
                      </div>
                    </Grid>

                    {/* vedio 6 */}
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <article className={Styles.slider_article}>
                        <section>
                          <section
                            className={Styles.iframe_section}
                            style={{
                              backgroundImage:
                                "url(https://i.ytimg.com/vi/7fjcWkDFbcg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAJ712JI48vC7_tJQmhlOjnsIEx_A)",
                            }}
                          ></section>
                        </section>
                      </article>
                    </Grid>
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <div className={Styles.vedio_content}>
                        <h3>PIAIC Launch - President Arif Alvi Address</h3>
                        <p>
                          Presidential address at the launch of the Presidential
                          Initiative for Artificial Intelligence and Computing
                          on December 9, 2018.
                        </p>
                      </div>
                    </Grid>

                    {/* vedio 7 */}
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <article className={Styles.slider_article}>
                        <section>
                          <section
                            className={Styles.iframe_section}
                            style={{
                              backgroundImage:
                                "url(https://i.ytimg.com/vi/C5iWrmShgv0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIg51jaxOVb5IXJMC2pdnmunOeng)",
                            }}
                          ></section>
                        </section>
                      </article>
                    </Grid>
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <div className={Styles.vedio_content}>
                        <h3>Zia Khan Interview on Bol News</h3>
                        <p>Published on Dec 31, 2018 </p>
                      </div>
                    </Grid>

                    {/* vedio 8 */}
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <article className={Styles.slider_article}>
                        <section>
                          <section
                            className={Styles.iframe_section}
                            style={{
                              backgroundImage:
                                "url(https://i.ytimg.com/vi/5p8oJVVg2P4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAXEtZvFoYIbr2qr3o_yZ_qZ-0G8Q)",
                            }}
                          ></section>
                        </section>
                      </article>
                    </Grid>
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <div className={Styles.vedio_content}>
                        <h3>PTV Coverage of PIAIC Launch Event</h3>
                        <p>
                          PTV Coverage of PIAIC Launch Event on December 9, 2018
                        </p>
                      </div>
                    </Grid>

                    {/* vedio 9 */}
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <article className={Styles.slider_article}>
                        <section>
                          <section
                            className={Styles.iframe_section}
                            style={{
                              backgroundImage:
                                "url(https://i.ytimg.com/vi/dRm0Y7n7xzU/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDXHaTnhJFYmoWLruA5N5m8Wpog0g)",
                            }}
                          ></section>
                        </section>
                      </article>
                    </Grid>
                    <Grid lg={6} xl={6} md={6} sm={6} xs={6}>
                      <div className={Styles.vedio_content}>
                        <h3>
                          LIVE: President of Pakistan Dr Arif Alvi's exclusive
                          interview with Nadeem Malik, October 29, 2018
                        </h3>
                        <p>Streamed live on Oct 29, 2018</p>
                      </div>
                    </Grid>
                  </Grid>
                  <div class="force-overflow"></div>
                </aside>
              </Grid>
            </Grid>
          </section>
        </div>
      </>
    )
  }
}