import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Portfolio = () => {
  return (
   <>
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Portfolio:
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The projects you see here showcase my skills through
          real-world examples of my work. Each project has a brief 
          description with links to the GitHub code repositories and live demos.
          Through these projects, I have aimed to demonstrate my abilities to 
          problem-solve, work with different technologies, and manage projects effectively. 
        </motion.p>
      </div>

    </>
  )
}

export default SectionWrapper(Portfolio, "");