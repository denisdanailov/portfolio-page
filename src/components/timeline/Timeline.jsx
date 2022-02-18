import React from 'react';
import './timeline.css';


const Timeline = () => {
  return (

    <ul className="timeline">
      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="flag">Creativity</span>
          </div>
          <div className="desc">Innovation, Experimenting, Design Thinking</div>
        </div>
      </li>

      <li>
        <div className="direction-l">
          <div className="flag-wrapper">
            <span className="flag">Organization</span>
          </div>
          <div className="desc">Self-motivation, Time management, Setting goals.</div>
        </div>
      </li>

      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="flag">Communication</span>
          </div>
          <div className="desc">Respect, Confidence, Friendliness</div>
        </div>
      </li>

      <li>
        <div className="direction-l">
          <div className="flag-wrapper">
            <span className="flag">Leadership</span>
          </div>
          <div className="desc">Decisiveness, Dependability, Problem-solving</div>
        </div>
      </li>

    </ul>

  );
}

export default Timeline;