import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './projects.css';
import Section from '../../components/section/Section';
import weather from '../../assets/weather.jpg';
import todo from '../../assets/todo.jpg';
import appcap from '../../assets/image.jpg';

const Projects = () => (
    <div className="gpt3__possibility section__padding" id="projects">
        <div className="gpt3__possibility-image">
            <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">

            
            <h1 className="gradient__text">A small selection of my projects.</h1>
            <p>Here are part of my projects. The projects are at a basic level for training purposes.
                You can see the rest of my Projects on my GitHub profile.</p>
            
            <Section name="App-cap" image={appcap} url="https://github.com/denisdanailov/app-cap/" />
            <Section name="SecondParts" image={todo} url="https://github.com/denisdanailov/secondparts" />
            <Section name="Weather App" image={weather} url="https://github.com/denisdanailov/weather-app" />
            
        </div>
    </div>
);

export default Projects;

