import React ,{useState, useEffect}from 'react';
import pageProject from './pageProject.json';

function PageProject({match}) {
  
  
    return(
        <main>
          <FullStory/>
        </main>
    );
}


function FullStory(id,title,description) {
  return(
    <div>
      <div className="title-project">{title}</div>
      <div className="id-project">{id}</div>
      <div className="description">
        {description} 

      </div>
    </div>
  );
  
}


export default PageProject;