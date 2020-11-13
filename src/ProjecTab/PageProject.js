import React from 'react';
import pageProject from './pageProject.json';

function PageProject({match}) {
  
  const data = pageProject[match.params.id];

  console.log("dfdfd",data)
  
    return(
        <main>

        <FullStory title={data.role} description={data.full_description}/>  
 

        </main>
    );
}


function FullStory({title,description}) {
  return(
    <div>
      <div className="title-project"><h1>{title}</h1></div>
    
      <div className="description">
        {description} 

      </div>
    </div>
  );
  
}


export default PageProject;