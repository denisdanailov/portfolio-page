import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import Section from '../../components/section/Section';
import weather from '../../assets/weather.jpg';
import todo from '../../assets/todo.jpg';
import appcap from '../../assets/image.jpg';

const Possibility = () => (
    <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">

            <h4>Request Early Access to Get Started</h4>
            <h1 className="gradient__text">A small selection of my projects.</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
           
            <Section name="Weather App" image={weather} />
            <Section name="To-do" image={todo} />
            <Section name="App-cap" image={appcap} />
        </div>

    </div>
);

export default Possibility;