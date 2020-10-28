import React from 'react';

function Project() {
    
    return(
    <main>
        <div className="grid-3">
        
        <Cards title="fdfdf" content="fdfdfdf"/>
        <Cards title="fdfdf" content="fdfdfdf"/>
        <Cards title="fdfdf" content="fdfdfdf"/>
        <Cards title="fdfdf" content="fdfdfdf"/>
        </div>
    </main>
    );
}

function Cards({title, content}) {
    return(
    <div class="card-3">
    <div class="text">
<div class="card-head">{title}</div>
<p>{content}</p>
     
  </div>
  </div>
    );
}


export default Project;
