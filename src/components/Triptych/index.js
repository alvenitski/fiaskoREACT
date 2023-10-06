import React, {useState} from 'react';
import '../../App.css';
import {PopUp} from '../Popup/index.js';


//Importation images + creations elements JSX
const med =["../images/scans/tri/med1.jpg", "../images/scans/tri/med2.jpg"]

const triptychArray = [[],[],[],[],[],[]];
for (let i = 1; i < 4; i++) {
    for (let j = 0; j < 6; j++){
       triptychArray[j].push('../images/scans/tri/'+j+i+'.jpg')
    }
}

//Creation Component
export function Triptych(){
    //State setters pour agrandir images
    const [clickedImage, setClickedImage] = useState({
        src:'',
        status: false
    });
    
    function handleClick(e){
        const clickedTarget= e.target.alt;
        setClickedImage({src:clickedTarget, status:true});        
    };

    //State setters pour Slider
    const [slideIndex, setSlideIndex] = useState(0)
    function slideLeft(){
        if(slideIndex >0){
            setSlideIndex(slideIndex-1)
        }
    }

    function slideRight(){
        if(slideIndex < 5 ){
            setSlideIndex(slideIndex+1)
        }
        if(slideIndex > 5){
            setSlideIndex(5)
        }
    }

    return(
        <div>
            <h2>Scenes from movies</h2>
            <div className='image-container'>
                {med.map(image => <div className="container-med"> <img src={image} alt={image} onClick={handleClick}/> </div>)}
            </div>
            <h2>Triptychs</h2>
            <div className='container-triptych'>
                <div>
                     <div id='top'>
                        <img src={triptychArray[slideIndex][0]} alt='' key='1'/>
                    </div>
                    <div id='middle'>
                        <img src={triptychArray[slideIndex][1]} alt=''key='2'/>
                    </div>
                    <div id='bottom'>
                        <img src={triptychArray[slideIndex][2]} alt='' key='3'/>
                    </div>
                    <button onClick={slideLeft}>LEFT</button>
                    <button onClick={slideRight}>RIGHT</button>
                </div>
            </div>
            
            <p> acrylic and medecine leaftlet on cardboard<br/> 24x18cm <br/> 2023. </p>
            <PopUp clickedImg={clickedImage} changeStatus={setClickedImage}/>
        </div>
    )
}