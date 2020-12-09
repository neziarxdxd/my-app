import listOfProjects from './listOfProjects.json';
import React from 'react';
import {Link} from 'react-router-dom';

function Project() {

    const cards= listOfProjects.map((data)=>
       
        <Cards title={data.project_name} content={data.description} image={data.image} project_name={data.project_name}/>
   
    );
   


    return(
        <main>
            
            <div className="grid-3">             
               {cards}
            </div>
        </main>
    );
}
function Cards({title, content,image,project_name}) {
    return(
       
        <div class="card-3">
            
            <img alt="LORD" src={image}/>

            <div class="text-content row-grid">
            <Link to={`page/${project_name}`}href="/raizen" className="project-icon">
                <div class="card-head row-1">{title}</div>
                </Link>   
                <div class="row-2">
                <p>{content.substr(0,170)}</p>
                </div>
            
            </div>
             
        </div>
       
    );
}


export default Project;
