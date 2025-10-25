import React from 'react'
import './Studentcard.css'

import {Mail,Building2,SquareUserRound,Mars,Venus }from "lucide-react"
import man from './../../images/man.png'
import girl from './../../images/girl.png'
function Studentcard( {name,email,gender,city}) {
  return (
    <div className='student-card'>
    
        <h1 className='student-name'><SquareUserRound className='student-info-icon'/>{name}</h1>
        <p className='student-info'><Mail className='student-info-icon'/>{email}</p>
         <p className="student-info"><Building2 className='student-info-icon'/>:{city}</p>
         <p className='stud-info'>
          <img src={gender === 'male' ? man : girl } className='student-gender'/>
          </p>
      </div>
  )
}

export default Studentcard