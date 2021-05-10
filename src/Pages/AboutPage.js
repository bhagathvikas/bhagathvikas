import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import app from '../img/desktop.png';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Android App Development'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Flutter'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Development'} progress={'75%'} width={'75%'} />
                
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
            <ServicesSection image={app} title={'Android App Development'} 
                text={'I have Explored android Development With java and exploring kotlin and flutter as Well and I am very passinate to develop android application.'}
                />
                <ServicesSection image={design} title={'Web Development'} 
                text={'Expolring React JS and I can Work With react js development and made built this site using react'}
                />
                
                {/* <ServicesSection image={gamedev} title={''} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                /> */}

                
            </div>

        </div>
    )
}

export default AboutPage;
