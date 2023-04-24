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
import { SpinnerDotted, SpinnerInfinity } from "spinners-react";

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

  const stacks = [
    "React JS",
    "Next JS",
    "React Native",
    "MySQL",
    "Sequelize",
    "Node JS",
    "Flutter",
    "Dart",
    "MongoDB",
    "Firebase",
    "Expo",
  ];

  const works = [
    {
      image:
        "https://user-images.githubusercontent.com/110984357/234081938-b941da26-a3b9-4688-8ed2-fc6cf28d50cb.png",
      name: "DevCom",
      about: "Community application that connects developers and enables them to share github projects in-app",
      lang: "React Native · Firebase · Android",
      link: "https://files.fm/f/uy42txubj",
      github: "https://github.com/pysavantcodes/DevCom",
    },
    {
      image:
        "https://user-images.githubusercontent.com/110984357/229850592-438d9118-e024-4bef-863e-773cb34ce59d.png",
      name: "My Portfolio",
      about: "Seamless portfolio built and designed with NextJs 13.",
      lang: "Next.js 13 · Framer Motion · AOS",
      link: "https://pysavant.netlify.app",
      github: "https://github.com/pysavantcodes/portfolio",
    },
    {
      image:
        "https://user-images.githubusercontent.com/110984357/229909111-0fa668ce-a072-4f0f-a9a6-00eb86ba3ff7.png",
      name: "My First Portfolio",
      about: "The first portfolio i built and designed with React.",
      lang: "React JS",
      link: "https://pysavant-old.netlify.app",
      github: "",
    },
    {
      image:
        "https://user-images.githubusercontent.com/110984357/229824797-c8c11aeb-b9ac-4826-852d-1ab5f5bc1264.png",
      name: "Pyshare",
      about: "A Non DB, Room based web app for sharing images seamlessly.",
      lang: "Next.js 13 · Tailwind CSS · Node Js · Socket.io",
      link: "https://pyshare.netlify.app",
      github: "https://github.com/pysavantcodes/Pyshare",
    },
    {
      image:
        "https://user-images.githubusercontent.com/110984357/229842528-bc119ec4-a802-4ea1-9bc9-1ee1e7ba4e13.png",
      name: "Background Remover",
      about:
        "A simple image background remover web app using the remove.bg api.",
      lang: "Next.js 13",
      link: "https://pysavant-bg-remover.netlify.app",
      github: "https://github.com/pysavantcodes/Background-Remover",
    },
    {
      image:
        "https://user-images.githubusercontent.com/110984357/229843533-44a152f3-0c6f-44cf-a5fe-5b946dc43595.png",
      name: "Context API Snippet for VS Code",
      about:
        "Create your react context api with the shortcut snippet i created for VS Code",
      lang: "VS Code",
      link: "",
      github: "https://github.com/pysavantcodes/context-api-snippet",
    },
    {
      image:
        "https://user-images.githubusercontent.com/110984357/229846353-11b60b15-1836-467f-a72b-5a1285c103e2.png",
      name: "Weather App",
      about: "Simple weather web app using a weather api. (Mini API Projects)",
      lang: "ReactJS",
      link: "https://pysavant-weather-app.netlify.app",
      github: "https://github.com/pysavantcodes/weather-app",
    },
    {
      image:
        "https://user-images.githubusercontent.com/110984357/229847889-e389089a-37d2-4736-98df-f8e0400992f3.png",
      name: "ShieldCoin DApp",
      about:
        "DApp for shield coin token. Containing NFT, Swap, Stake, Airdrop, LaunchPad, etc. (Group Project)",
      lang: "ReactJS · Solidity · NodeJs · MongoDB",
      link: "https://shieldcoindapp.com",
      github: "https://github.com/pysavantcodes/shield-Pact-site/",
    },
  ];

  return (
    <>
      <Head>
        <title>Pysav...</title>
        <meta name="description" content="Pysav Shit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
                    Yo!!, I'm <br />
                    <span>Pysavant...</span> <br />
                    Web Developer
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-easing="ease-out-sine"
                    data-aos-duration="500"
                  >
                    I took it as a passion right from the Genesis. A Young
                    Nigerian based Tech enthusiast.
                  </p>
                  <motion.div
                    whileTap={{ scale: 30 }}
                    transition={{ type: "spring" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className={styles.btn}
                  >
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="https://instagram.com/_pysavant.codes"
                    >
                      Let's chew the fat!! 🤝
                    </a>
                  </motion.div>
                </div>
                <div className={styles.right}>
                  <spline-viewer url="https://prod.spline.design/Akh2azdiuUYopsRW/scene.splinecode"></spline-viewer>
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
                    <p>
                      Hey, I'm Pysavant and I've been obsessed with tech since I
                      was very young. I love using technology to tackle complex
                      problems and make life better for people. With a keen eye
                      for detail and a creative mindset, I'm always looking for
                      new ways to use tech to change the game.
                      <br />
                      <br />
                      Fast-forward to today, I’ve had the privilege of working
                      as a freelancer on various start-ups and corporations. My
                      goal is to make a positive impact on the world and
                      contribute to the ever-evolving tech scenes 😀.
                    </p>
                    <section className={styles.tech}>
                      <h4>
                        Here are a few technologies I’ve been working with
                        recently:
                      </h4>
                      <ul>
                        {stacks.map((stack, index) => {
                          return <li key={index}>{stack}</li>;
                        })}
                      </ul>
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
                  <h3>Stuffs I've Built</h3>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.works_grid}>
                  {works.map((work, index) => {
                    return (
                      <Work
                        image={work.image}
                        name={work.name}
                        about={work.about}
                        github={work.github}
                        link={work.link}
                        lang={work.lang}
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
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="700"
                  className={styles.btn}
                >
                  <a href="mailto:pysavego@gmail.com">Say Hello! 👊</a>
                </div>
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
  
        {!isLoaded && <motion.div
          initial={{ minHeight:"100%", opacity:1 }}
      animate={{ minHeight:"0%", opacity:0 }}
      transition={{ duration:.5, delay:2.5 }}
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              display:"flex",
              alignItems: "center",
              justifyContent: "center",
              overflow:"hidden",
              background:"black",
              zIndex:"99999999"
            }}
          >
            <SpinnerDotted color="white" />
          </motion.div>}
      
    </>
  );
}
