import React from 'react';
import './article.css';

const Article = ({ text }) => (
  
  <div className="container-article-left">
      <div className="container-article-content-left">
        <h3>{text}</h3>
        </div>
  </div>
);

export default Article;