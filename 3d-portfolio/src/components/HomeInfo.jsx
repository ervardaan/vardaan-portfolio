import { Link } from "react-router-dom";

import { arrow } from "../assets/icons/";

const HomeInfo = ({ currentStage }) => {
  // if (currentStage === 2)
  //   return (
  //     <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
  //       Hi, I'm
  //       <span className='font-semibold mx-2 text-white'>Adrian</span>
  //       👋
        
  //       A Software Engineer from Croatia 🇭🇷
  //     </h1>
  //   );
  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Classes, Certifications, and  Technical Skills
        </p>

        <Link to='/classes' className='neo-brutalism-white neo-btn'>
          Find the Plethora
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }
  if (currentStage === 1) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Hi I am Vardaan <br /> Hover fast to rock and roll!
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Knowing me
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Have completed many projects <br /> Want to know their curations!
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Want to play chess <br/> And maybe Coffee 🤩
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;