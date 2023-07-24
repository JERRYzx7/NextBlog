import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/poyoyo.png"
          alt="An image is showing"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, ...</h1>
      <p></p>
    </section>
  );
}

export default Hero;
