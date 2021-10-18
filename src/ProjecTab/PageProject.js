import React from 'react';
import pageProject from './pageProject.json';

function PageProject({ match }) {

  const data = pageProject[match.params.id];

  return (
    <main>
      <FullStory title={data.project_name} description={data.full_description} />
    </main>
  );
}


function FullStory({ title, description }) {
  return (
    <div>
      <div className="title-project"><h1>{title}</h1></div>
      <div className="description" style={{ fontSize: "16px" }}>
        {description}
      </div>
    </div>
  );

}


export default PageProject;