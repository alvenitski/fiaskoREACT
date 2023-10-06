import React, {useState} from 'react';
import '../../App.css';
import {PopUp} from '../Popup/index.js';

//Importation images + creations elements JSX
const canvas =["../images/canvas1.jpg", "../images/canvas2.jpg"]

export function Canvas(){
    const [clickedImage, setClickedImage] = useState({
        src:'',
        status: false
    });
    
    function handleClick(e){
        const clickedTarget= e.target.alt;
        setClickedImage({src:clickedTarget, status:true});        
    }

    return(
        <div>
            <h2>Fading into a state of non-being</h2>
            <div className='image-container'>
                {canvas.map(image => <div className="container-canvas"> 
                                        <img src={image} alt={image} onClick={handleClick} /> 
                                     </div>)}
            </div>
            <p> acrylic on linen and cotton canvas <br/> 60x40cm <br/> 2023. </p>
            <PopUp clickedImg={clickedImage} changeStatus={setClickedImage}/>
        </div>
        
    )
}