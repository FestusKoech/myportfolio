import styles from "../style";
import { discount, robot } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">About Me</span>{" "}
           
          </p>
        </div>

        <h1 className="font-semi-bold text-dark text-xl mb-1 xs:text-[40px] text-[0s0px] text-black xs:leading-[76.8px] leading-[66.8px] w-full ml-auto mr-auto">
        Hi,<span>I'm <b className="text-slate-600">Koech</b></span> <br>
        </br> a Frontend Web Developer
        </h1>
        <p className={`${styles.paragraph} text-base text-body-color`}>
        I am very passionate about programming and engineering as a whole.
         I primarily work on the frontend and I am very fond of complex systems that require critical thinking skills and logic. 
         Though, I am flexible and have worked in the backend as well! I'm comfortable in PHP, Java, React, MySQL, MongoDB, etc.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[30%] h-[80%] ml-auto mr-auto rounded-full" />

      
      </div>

    
    </section>
  );
};

export default Hero;

