import Nav from "@/components/Nav";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Hamburger from "@/components/Toggle";
import { useEffect, useState } from "react";
import Drawer from "@/components/Drawer";
import AOS from "aos";
import "aos/dist/aos.css";
import Work from "@/components/Work";
import { SpinnerDotted } from "spinners-react";
import image from "../assets/image.png";
import { stacks, works } from "@/utils/data";

export default function Home() {
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [drawerPadding, setDrawerPadding] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
  }, [isLoaded]);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
  }, [isOpen]);

  return (
    <>
      <Head>
        <title>Pysavant Codes</title>
        <meta
          name="description"
          content="Yo!!, I'm Pysavant, a young tech enthusiast from Lagos, Nigeria"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image.png" />
      </Head>

      <>
        <Drawer
          toggle={() => {
            setIsOpen(!isOpen);
            setDrawerWidth(drawerWidth === 0 ? "100%" : 0);
            setDrawerPadding(drawerPadding === 0 ? "3rem" : 0);
          }}
          drawerPadding={drawerPadding}
          drawerWidth={drawerWidth}
        />
        <section className={styles.body}>
          <Nav />
          <Hamburger
            isOpen={isOpen}
            setIsOpen={() => setIsOpen(!isOpen)}
            toggle={() => {
              setIsOpen(!isOpen);
              setDrawerWidth(drawerWidth === 0 ? "100%" : 0);
              setDrawerPadding(drawerPadding === 0 ? "3rem" : 0);
            }}
          />

          <section className={styles.main_body}>
            <section id="header" className={styles.header}>
              <div className={styles.left}>
                <h1
                  data-aos="fade-down"
                  data-aos-delay="100"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="500"
                >
                  Hello!!, I'm <br />
                  <span>Pysavant...</span>
                </h1>

                <motion.a
                  whileTap={{ scale: 30 }}
                  transition={{ type: "spring" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className={styles.btn}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    marginTop: "2rem",
                  }}
                  href="https://instagram.com/_pysavant.codes"
                >
                  Let's chew the fat!! 🤝
                </motion.a>
                <img
                  className={styles.imgs}
                  src={
                    "https://user-images.githubusercontent.com/110984357/268734303-32199e12-00d1-4265-a300-3e4edc9b12e9.png"
                  }
                  alt="image"
                />
              </div>
              <div className={styles.right}>
                <img
                  src={
                    "https://user-images.githubusercontent.com/110984357/268734303-32199e12-00d1-4265-a300-3e4edc9b12e9.png"
                  }
                  alt="image"
                />
                <div className={styles.showOffBottom}>
                  <p>Keep Scrolling Mate!! 🐱‍👤</p>
                </div>
              </div>
            </section>
            <section id="about" className={styles.about}>
              <div
                data-aos="fade-in"
                data-aos-delay="100"
                className={styles.about_head}
              >
                <h3>About Me</h3>
                <div className={styles.line}></div>
              </div>
              <div className={styles.content}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="500"
                  className={styles.text}
                >
                  <p style={{ letterSpacing: "0.5px" }}>
                    Hey, I'm <b>Uwak Edidion</b> referred to as <b>Pysavant</b>{" "}
                    and I've been obsessed with tech since I was very young. I
                    love using technology to tackle complex problems and make
                    life better for people. With a keen eye for detail and a
                    creative mindset, I'm always looking for new ways to use
                    tech to change the game.
                    <br />
                    <br />
                    Fast-forward to today, I’ve had the privilege of working as
                    a freelancer on various start-ups and corporations. My goal
                    is to make a positive impact on the world and contribute to
                    the ever-evolving tech scenes 😀.
                  </p>
                  <section className={styles.tech}>
                    <h4>
                      Here are a few technologies I’ve been working with
                      recently:
                    </h4>

                    <div className={styles.stacks}>
                      {stacks.map((stack, index) => {
                        return (
                          <span
                            key={index}
                            style={{
                              background: "rgba(255,255,255,0.15)",
                              padding: "5px 10px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "fit-content",
                              borderRadius: "15px",
                              paddingTop: "8px",
                            }}
                          >
                            {stack}
                          </span>
                        )
                      })}
                    </div>
                  </section>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="500"
                  className={styles.image}
                >
                  <img
                    src="https://user-images.githubusercontent.com/110984357/229222668-314a5d50-e896-46ae-9c45-d80f848c9daa.png"
                    alt=""
                  />
                </div>
              </div>
            </section>
            <section id="works" className={styles.works}>
              <div
                data-aos="fade-in"
                data-aos-delay="100"
                className={styles.works_head}
              >
                <h3>Recent Works</h3>
                <div className={styles.line}></div>
              </div>
              <div className={styles.works_grid}>
                {works.map((work, index) => {
                  return (
                    <Work
                      key={index}
                      image={work.image}
                      name={work.name}
                      about={work.about}
                      github={work.github}
                      link={work.link}
                      lang={work.lang}
                      playstore={work.playstore ? work.playstore : ""}
                      ios={work.ios ? work.ios : ""}
                      keyVal={index}
                    />
                  );
                })}
              </div>
            </section>
            <section id="footer" className={styles.footer}>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-easing="ease-out-sine"
                data-aos-duration="700"
              >
                <h1>Get In Touch</h1>
                <p>
                  Thanks for taking the time to visit my website. If you have
                  any questions, comments, or just want to say hello, I'd love
                  to hear from you. I'll do my best to get back to you as soon
                  as possible. Looking forward to hearing from you!
                </p>
              </div>
              <a
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-easing="ease-out-sine"
                data-aos-duration="700"
                className={styles.btn}
                style={{ color: "black", textDecoration: "none" }}
                href="mailto:pysavego@gmail.com"
              >
                Say Hello! 👊
              </a>
              <a
                className={styles.design}
                href="https://github.com/pysavantcodes"
              >
                Designed by Pysavant Codes
              </a>
            </section>

            <div className={styles.email}>
              <a href="mailto:pysavego@gmail.com">pysavego@gmail.com</a>
            </div>
          </section>
          <script
            type="module"
            src="https://unpkg.com/@splinetool/viewer@0.9.281/build/spline-viewer.js"
          ></script>
          {/* <div className={styles.bt_line}>
          <p>
            Check out my resume 🧐. <a href="#0">Here</a>
          </p>
        </div> */}
        </section>
      </>

      {!isLoaded && (
        <motion.div
          initial={{ minHeight: "100%", opacity: 1 }}
          animate={{ minHeight: "0%", opacity: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "black",
            zIndex: "99999999",
          }}
        >
          <SpinnerDotted color="white" />
        </motion.div>
      )}
    </>
  );
}
