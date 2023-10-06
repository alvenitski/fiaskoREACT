
import React , {useState} from 'react';
import {PopUp} from '../Popup/index.js';
import '../../App.css';


//Importation images et creation elements JSX pour display
const neuraImgs = ['./images/n1.jpg','./images/n2.jpg','./images/n3mid.jpg','./images/n4.jpg','./images/n5.jpg'];


//Creation Component Neurasthenia
export function Neura(props) {
    const [clickedImage, setClickedImage] = useState({
        src:'',
        status: false
    });
    
    function handleClick(e){
        const clickedTarget= e.target.alt;
        setClickedImage({src:clickedTarget, status:true});        
    }


    return (
        <div className='neura1'>
             <h2>Neurasthenia</h2>
            <div className="image-container" >
            {neuraImgs.map(image =>
                image !== './images/n3mid.jpg' ?
                    <div className="container46"> 
                        <img src={image} 
                             alt={image} 
                             onClick={handleClick}
                        /> 
                    </div>
                    :
                    <div className="container56"> 
                        <img src={image} 
                            alt={image}
                            onClick={handleClick} />
                    </div>
            )}                   
            </div>
            <p>{props.text}</p>
            <PopUp clickedImg={clickedImage} changeStatus={setClickedImage}/>
        
        </div>
         
    )
}
    


