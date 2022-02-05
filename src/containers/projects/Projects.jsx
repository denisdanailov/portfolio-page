import React from 'react';
import './projects.css';
import Section from '../../components/section/Section';
import weather from '../../assets/weather.jpg';
import todo from '../../assets/todo.jpg';
import gameplay from '../../assets/gamePlay.jpg';
import appcap from '../../assets/image.jpg';


const Projects = () => {
  return (
    <div className="projects section__padding" id="projects">
     
    <div className="projects-container">
    <Section name="Weather App" image={weather} />
    <Section name="To-do app" image={todo} />
    <Section name="Game-play" image={gameplay} />
    <Section name="App-Cap" image={appcap} />
    
    </div>
  </div>
  );
};

export default Projects;
