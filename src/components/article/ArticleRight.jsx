import React from 'react';
import './article.css';

const Article = ({ text }) => (
  <div className="container-article-right">
    <div className="container-article-content-right">
        <h3>{text}</h3>
      <div className="intro-card-code-wrap">
        <div>
          <span className="code-color">&lt;ul&gt;</span>
        </div>
        <div className="intro-card-code-indented">
          <span className="code-color">&lt;li&gt;</span>Semantisches HTML.<span className="code-color">&lt;/li&gt;</span>
        </div>
        <div className="intro-card-code-indented">
          <span className="code-color">&lt;li&gt;</span>Class Naming System.<span className="code-color">&lt;/li&gt;</span>
        </div>
        <div className="intro-card-code-indented">
          <span className="code-color">&lt;li&gt;</span>Optimiert für Performance.<span className="code-color">&lt;/li&gt;</span>
        </div>
        <div>
          <span className="code-color">&lt;/ul&gt;</span>
        </div>
      </div>
    </div>
  </div>
);

export default Article;

