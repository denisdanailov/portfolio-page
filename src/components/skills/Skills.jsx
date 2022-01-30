import React from 'react';
import './skills.css';
import { java, html, react, mysql, shopify, wordpress } from './imports';

const Skill = () => {
  return (
    <div className="skills">
      <div>
        <img src={html} alt="html" />
      </div>
      <div>
        <img src={react} alt="react" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={mysql} alt="mysql" />
      </div>
      <div>
        <img src={wordpress} alt="wordpress" />
      </div>
      <div>
        <img src={java} alt="java" />
      </div>
    </div>
  );
};

export default Skill;
