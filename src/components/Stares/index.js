import React,{useState, useEffect} from 'react';
import '../../App.css';
//Creation array avec URL images via loop + elements JSX
let imageArray = [];
for(let i=1; i<25 ; i++){
    imageArray.push('../images/scans/eyes/e'+i+'.jpg');
    }
//Creation Component
export function StaresCarousel(){
    const [imageIndex, setImageIndex] = useState(1);
    const [pause, setPause] = useState(false);
    //useEffect permet de controler le nombre de render
    useEffect(() => {
        const intervalId = setInterval(()=>{
            if(imageIndex !== imageArray.length-1 & pause === false){
                setImageIndex(imageIndex+1)
            } if (imageIndex === imageArray.length-1 & pause === false){
                setImageIndex(1)
            } if (pause === true ) {
                setImageIndex(imageIndex)
            }                      
        }, 300)
        return ()=> {
            clearInterval(intervalId)
        }  
    })

    function Pause(){
        setPause(!pause)
        if(!pause){
            document.getElementById('pause-btn').innerText = 'Play'
        }else{
            document.getElementById('pause-btn').innerText = 'Pause'
        }
    }

  
    return(
        <div>
            <h2> Stares</h2>
            <div className='container-eyes'>
                <div className='slider'>
                    <img src={'../images/scans/eyes/e'+imageIndex+'.jpg'} alt=''/>       
                </div>
                <button id='pause-btn' onClick={Pause}>Pause</button>
                
            </div>             
            <p>acrylic on paper<br/> A3<br/> 2022-2023.</p>
        </div>
    )
}