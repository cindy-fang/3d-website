import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-x1 text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Bonejaw, I'm <span className="font-semibold"> Boolingo </span> 👋
            <br/>
            I promise your learning is growing...in good claws and nests.
        </h1>
    ),
    2: (
        <InfoBox 
            text="Learn more about Boolingo!🦉🦉🦉"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="Watch our demo video! 🎥🎥🎥🎥"
            link="https://vimeo.com/914102102?share=copy#t=0"
            btnText="Watch Here"
        />    
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;
