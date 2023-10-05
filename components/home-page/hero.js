import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/nextjs-big-logo.png"
          alt="a personal image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi im Ilias</h1>
      <p>
        I Blog about web development - frontend frameworks like React, NextJS
      </p>
    </section>
  );
};

export default Hero;
