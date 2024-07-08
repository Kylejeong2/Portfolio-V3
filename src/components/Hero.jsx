import { styles } from "../styles";
import { Headshot } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full mx-auto sm:flex sm:flex-col`} style={{height: '48vh'}}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5 sm:flex sm:flex-row`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Kyle Jeong</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Student, Entrepreneur, and Programmer. 
          </p>
        </div>
          <div>
            <img src={Headshot} alt="Pic of Kyle Jeong" className="w-60 h-auto rounded-full" />
          </div>
        
      </div>
    </section>
  );
};

export default Hero;