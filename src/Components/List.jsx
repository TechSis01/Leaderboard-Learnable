import interns from "./Interns";
import React from 'react'
import Modal from "./Modal";
import {useState,useEffect} from "react"
function List() {
   const [internList,setInterns] = useState(interns)
   const [personalInternDetails,setpersonalInternDetails] = useState([])
   const [openModal, setOpenModal] = useState(false)
   
        // Function to add up the tasks scores and arrange in descending order using the sort method
        useEffect(()=>{
            function addScores(){
                let result = internList.map((int)=>{
                    let total = int.appraisal + int.attendance + int.task1 + int.task2 +int.task3 + int.task4 + int.task5
                    return {
                        ...int,
                        points:total
                    };
                })
                result.sort((a, b) => b.points - a.points)
                setInterns(result)
            }
            addScores()
        },[])

        function showDetails(id){
            let internDetails = internList.filter((intern)=>intern.id === id)
            setpersonalInternDetails(internDetails[0])
            setOpenModal(true)
        }
       
        function closeModal (){
            setOpenModal(false)
        }
        
        
        
  return (
    <div className="full-container">
       {internList.map((intern)=>(
        <div className={`subheaders intern-list ${intern.points === 237 ? "winner2" : ""}`} key={intern.id} onClick={()=>showDetails(intern.id)}>
            <div className="intern-img-name-box">
                
                <img src={intern.img} alt="intern's image" width={50}></img>
                <p>{intern.name}</p>
            </div>
            <div className="individual">{intern.attendance}</div>
            <div className="individual">{intern.appraisal}</div>
            <div className="individual">{intern.task1}</div>
            <div className="individual">{intern.task2}</div>
            <div className="individual">{intern.task3}</div>
            <div className="individual">{intern.task4}</div>
            <div className="individual">{intern.task5}</div>
            <div className="individual">{intern.points}</div>
        </div>
       ))}
     {openModal && <Modal interndeets = {personalInternDetails} closeModal = {closeModal}/>}
    </div>
  )
}

export default List;