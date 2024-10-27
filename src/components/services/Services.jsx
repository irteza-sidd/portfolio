import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          As a full-stack developer, I create and maintain applications to help your project grow and succeed.
          <br />
          Let’s work together to turn your ideas into reality.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Comprehensive</motion.b> Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I OFFER?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Application Development</h2>
          <p>
            I design and build responsive web and mobile applications tailored to your needs, ensuring a seamless user experience.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>API Development</h2>
          <p>
            I create robust APIs that allow for smooth integration and communication between your application and external services.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Website Maintenance</h2>
          <p>
            I provide ongoing support and maintenance for your websites, ensuring they are secure, up-to-date, and performing optimally.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Custom Software Solutions</h2>
          <p>
            I develop tailor-made software solutions that meet your specific business requirements and help you achieve your goals.
          </p>
          <button>Learn More</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
