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
            Bonejaw, I'm <span className="font-semibold"> Cindy </span> 👋
            <br/>
            It's 2:43am I want sleep or death.
        </h1>
    ),
    2: (
        <InfoBox 
            text="looking for star, looking for love, looking for star, looking for love"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="eight makes one team, annyeonghello ateez ibnida"
            link="/projects"
            btnText="Visit my portfolio"
        />    
    ),
    4: (
        <InfoBox 
            text="hongjoong seonghwa yunho yeosang sani mingi wooyoung jongho"
            link="/contact"
            btnText="Let's talk"
        />    
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;
