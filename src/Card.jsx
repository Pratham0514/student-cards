import React from 'react'
import './Card.css'
import Studentcard from './Component/Studentcard/Studentcard' 
import {ITEMS} from './Config/Students'
import man from './images/man.png';
function Card() {
  return (
    <div>
      <div className='college-contator'>
      <img src={man} alt="college logo" className='college-logo' />
      <h1 className='headline'>College Name :K.K.Wagh College of Agricultural Engineering & Technology</h1>
      </div>
      <p className='descripton'>college description: this is a description of the college</p>
      <div>
        <p>Welcome to Sunrise Institute of Technology (SIT) — a premier educational institution dedicated to academic excellence and innovation. Established in 2005, SIT has been at the forefront of higher education, offering world-class programs in Engineering, Management, and Computer Science.

Our mission is to empower students with knowledge, creativity, and practical skills that prepare them for global challenges. With highly qualified faculty, modern infrastructure, and industry partnerships, we strive to create future leaders and innovators.</p>
     <div>
  <h1 className='sub-headline'>
    STUDENT CARDS
  </h1>
</div>
      </div>
      <div className='student-contanor'>
      {ITEMS.map((item)=>{const {name,email,gender,city}=item;
    
      return (
      <Studentcard  name={name} email={email} gender={gender} city={city}/> 
      ); 
    })}
    </div>
    </div>
  )
}

export default Card 