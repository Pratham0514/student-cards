import React from 'react'
import './Card.css'
import Studentcard from './Component/Studentcard/Studentcard' 
import {ITEMS} from './Config/Students'
import {NAME_HEADLINE , COLLEGE_DESCRIPTION,SUB_HEADLINE,THIRD_COLOR,PRIMARY_COLOR, SECONDARY_COLOR } from './Config/App'
 import man from './images/man.png'
function Card() {
  return (
    <div>
      <div className='college-contator' style={{backgroundColor:THIRD_COLOR}}>
      <img src={man} alt="college logo" className='college-logo'/>
      <h1 className='Name_headline' style={{color:SECONDARY_COLOR}}>{NAME_HEADLINE}</h1>
      </div>
      {COLLEGE_DESCRIPTION ? <p className='descripton'>{COLLEGE_DESCRIPTION}</p> : null}
      <div>
       
     <div>
  <h1 className='sub-headline' style={{color:PRIMARY_COLOR}}>{SUB_HEADLINE}</h1>
</div>
      </div>
      <div className='student-contanor'>
      {ITEMS.map((item)=>{const {name,email,gender,city}=item;
    
      return (
      <Studentcard  
          name={name} 
          email={email} 
          gender={gender} 
          city={city} 
          key={email}/> 
      ); 
    })}
    </div>
    </div>
  )
}

export default Card 