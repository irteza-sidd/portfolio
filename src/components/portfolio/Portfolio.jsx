import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Talkative",
    img: "talkative.png",
    desc: "Talkative is a vibrant chat application built using React and powered by Node.js. It allows users to effortlessly create group chats and engage in one-on-one conversations. With features like emoji support and multimedia sharing, Talkative transforms your messaging experience into a lively and interactive platform. Join the conversation today and connect with friends like never before!",
    demoUrl:'https://talkative18.netlify.app'
  },
  {
    id: 2,
    title: "Currency Converter",
    img: "currency.png",
    desc: "Introducing the Currency Converter—your ultimate tool for navigating the world of finance! Effortlessly convert currencies in real-time with our sleek and intuitive interface. Whether you're traveling abroad or trading online, our app provides accurate exchange rates at your fingertips. Stay ahead of the market and make informed decisions with ease. Transform your financial experience today!",
    demoUrl:'https://currency-converter-kohl-six.vercel.app/'
}
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.demoUrl, "_blank")}>
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
