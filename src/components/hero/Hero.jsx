import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 9,
    },
  },
};

const Hero = () => {
  const handleScroll = () => {
    const servicesSection = document.getElementById('Services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleContact = () => {
    const servicesSection = document.getElementById('Contact');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Irteza Siddiqui</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Development Engineer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={handleScroll}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} onClick={handleContact}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Coder 
      </motion.div>
      <div className="imageContainer">
        <img src="/4.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
