import React from 'react';
import ArticleLeft from '../../components/article/ArticleLeft';
import ArticleRight from '../../components/article/ArticleRight';
import Banner from '../../components/article/Banner';
import './blog.css';

const Blog = () => (
  <div className="blog section__padding" id="about">
    <div className="blog-heading">
      <h1 className="gradient__text">About me, My work.</h1>
    </div>
    <div className="blog-container">
    
      <div className="blog-container_groupA">
        
        <ArticleLeft text="Pixel-Perfect and Responsive Design" />
      </div>
      <div className="blog-container_groupB">
      <ArticleRight text="Clean Code" />
      </div>
    </div>

    <div className="more-projects">
    {/* <button className="button" ><span>More </span></button> */}
    <Banner text="Hier muss ein Text einstellen!" />
    </div>
    
    
  
    
  </div>
);

export default Blog;