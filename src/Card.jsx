import React from 'react'
import './Card.css'
import {Mail,Building2,SquareUserRound,Mars,Venus }from "lucide-react"
import man from './images/man.png'
import girl from './images/girl.png'
function Card() {
const items=[{ name:"qqqq", email:"qqqq@gmail.com", gender:"male" ,city:"cairo"},
  { name:"www", email:"www@gmail.com", gender:"female",city:"cairo"},
  { name:"eee", email:"eee@gmail.com", gender:"female", city:"cairo"},
  { name:"rrr", email:"rrr@gmail.com", gender:"male",city:"cairo"},
  { name:"ttt", email:"ttt@gmail.com", gender:"female", city:"cairo"},

]

  return (
    <div>
      <div className='college-contator'>
      <img src={man} alt="college logo" className='college-logo' />
      <h1 className='headline'>College Name</h1>
      </div>
      <p className='descripton'>college description: this is a description of the college</p>
      <div>
        <p>Welcome to Sunrise Institute of Technology (SIT) — a premier educational institution dedicated to academic excellence and innovation. Established in 2005, SIT has been at the forefront of higher education, offering world-class programs in Engineering, Management, and Computer Science.

Our mission is to empower students with knowledge, creativity, and practical skills that prepare them for global challenges. With highly qualified faculty, modern infrastructure, and industry partnerships, we strive to create future leaders and innovators.</p>
      </div>
      <div className='student-contanor'>
      {items.map((item)=>{const {name,email,gender,city}=item;
    
      return <div className='student-card'>
        <h1 className='student-name'><SquareUserRound className='student-info-icon'/>{name}</h1>
        <p className='student-info'><Mail className='student-info-icon'/>{email}</p>
         <p className="student-info"><Building2 className='student-info-icon'/>:{city}</p>
         <p className='stud-info'>
          <img src={gender=="female"? girl :man} className='student-gender'/>
          </p>
      </div>})}
      
    </div>
    </div>
  )
}

export default Card 