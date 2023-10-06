import React from 'react';
import '../../App.css';

export function PopUp({clickedImg, changeStatus}){
 
  
    function closePopUp(){
            changeStatus({status:false})     
        }

        return (
            clickedImg.status &&
                <div className="popup" id='popup'>
                    <div className='enlarged-image'>
                        <img src={clickedImg.src} alt="" />
                        <button className="close-btn"
                                        onClick={closePopUp}> 
                            X </button>  
                    </div>
                </div> 
        )          
}

