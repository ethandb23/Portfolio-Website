import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As someone who has always been captivated by the intersection of technology and the
        natural world, I have spent my career exploring both realms. As a scuba diving instructor, I
        have had the opportunity to witness the breathtaking beauty of the ocean firsthand, and 
        have used my photography skills to capture its essence. However, I have also felt a strong 
        pull towards technology from a young age, which has led me to pursue a career change by enrolling in a 
        Software Engineering Immersive course. Through this experience, I have discovered a 
        passion for creating and building, and am now seeking a dynamic team in a fast-paced
        environment where I can continue to develop my skills and make an impact. My ultimate
        goal is to secure a role in a developing sector where I can put my new skills to the test and
        continue to grow professionally. As a proficient software developer, I possess a wealth of
        expertise in Ruby, TypeScript and JavaScript, as well as a range of prominent frameworks like
        React, Node.js, and Three.js. With my efficient learning style, I consistently collaborate 
        with clients to devise scalable and user-friendly solutions that effectively address real-
        world challenges. With my unique skill set and unwavering dedication to success, I am 
        confident in my ability to collaborate with anyone to turn innovative ideas into a reality.
        <br />
        <br />
        
        Let's work together to turn your vision into a reality!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
