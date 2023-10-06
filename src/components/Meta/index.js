import React, {useState} from 'react';
import '../../App.css';
import {PopUp} from '../Popup/index.js';
//Importation images et création elements JSX pour display
const metaImgs = ['./images/meta1.jpg','./images/meta2.jpg','./images/meta3.jpg' ]



export function Meta(props){
    const [clickedImage, setClickedImage] = useState({
        src:'',
        status: false
    });
    
    function handleClick(e){
        const clickedTarget= e.target.alt;
        setClickedImage({src:clickedTarget, status:true});        
    }


    return(
        <div className='meta'>
            <h2>Untitled</h2>
            <div className='image-container'>
                {metaImgs.map(image => <div className="container-meta"> <img src={image} alt={image} onClick={handleClick}/> </div>)}
            </div>
            {props.text}
            <PopUp clickedImg={clickedImage} changeStatus={setClickedImage}/>
        </div>
        
    )
}