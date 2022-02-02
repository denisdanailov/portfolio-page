import React from 'react';
import Article from '../../components/article/Article';
import { appCap, weather, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article project="</> Code" imgUrl={appCap} date="Dec 6, 2021" text="E-commerce App-capp" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article project="</> Code" imgUrl={weather} date="Jan 16, 2022" text="To-do List" />
        <Article project="</> Code"  imgUrl={blog03} date="Jan 20, 2022" text="Weather-App" />
        <Article project="</> Code"  imgUrl={blog04} date="Nov 26, 2021" text="Game-play" />
        <Article project="</> Code"  imgUrl={blog05} date="Sep 08, 2021" text="Portfolio Page" />
      </div>
    </div>
    <div className="more-projects">
    <button className="button" ><span>More </span></button>
    </div>
  </div>
);

export default Blog;