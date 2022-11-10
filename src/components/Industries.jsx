import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";




const Industries = () => (
  <section id="Projects" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div     className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] w-[80%] ml-auto mr-auto">
      <h2 className={styles.heading2}>
        Projects:  Click to view them on Github
      </h2>

    </div>

    <div  onClick={() => window.open('https://github.com/FestusKoech')} className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>

< div>
  
  <button onClick={() => window.open('https://docs.google.com/document/d/1J7fRb3YqAwIQtP_fwnYl4NdbcEKtSsSUkWxNhonrCtM/edit?usp=sharing')}  id="Resume">
View Resume
  </button>
  
  </div>  
  </section>
);

export default Industries;
