import React from 'react';

function Project() {
    // const [images] = useState([
    //     {image:require('./image/head-1.jpeg')}
    // ]);
    return(
    <main>
        <div className="grid-3">
        
        <Cards title="fdfdf" content="fdfdfdf" />
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
    <img src={'image/head-1.jpeg'} alt="imagge"/>
    <div class="text">
<div class="card-head">{title}</div>
<p>{content}</p>
     
  </div>
  </div>
    );
}


export default Project;
