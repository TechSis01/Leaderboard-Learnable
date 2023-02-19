import React from 'react'
import { createPortal } from 'react-dom'
function Modal({interndeets,closeModal}) {
  return createPortal(

    <div className='modal-container' onClick={closeModal}>
        <div className='modal-content'>
          
            <div className='modal-content-main'>
                    <img src={interndeets.img} alt="intern image" width="350"></img>
                <div className='deets'>
                <button onClick={closeModal} className="close-btn">close</button>
                {interndeets.points === 237 && <p id="winner">Congratulations {interndeets.name}!! You are the Best Student!!</p>}
                    <p>Name : {interndeets.name}</p>
                    <p> Age: {interndeets.age} years old</p>
                    <p>Track :{interndeets.track}</p>
                    <p>Hobbies :{interndeets.hobbies}</p>
                    <p>Aspiration: {interndeets.aspiration}</p>
                    <p>Total Score: {interndeets.points}</p>
                    {interndeets.points === 237 ? <p id="winner-text">Congratulations {interndeets.name}!!,you have proven yourself worthy as the highest scoring student in this internship and you shall be rewarded by the Learnable Program!</p> : <p>Thank you for participating in this program,Goodluck on your career as a Techie!!</p>}
                </div>
            </div>
        </div>
    </div>,document.getElementById("modal-root")
  )
}

export default Modal