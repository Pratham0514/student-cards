import React from 'react'
import './Fotter.css'
import {Phone, Mail , MapPinned} from 'lucide-react'
function Fotter() {

  return (
    <div  className='fottor'>
        <div >
            <p>K.K.Wagh College of Agricultural Engineering & Technology Nashik</p>
          <p><a className='fotter-icons' href='tel:+919837673813'> <Phone/> 9837673813</a></p> 
          <p><a className='fotter-icons' href='mailto:prathameshroundale@05gmail.com'> <Mail /> prathameshroundale@05gmail.com</a></p> 
          <p><a className='fotter-icons' href='https://www.google.com/search?sca_esv=9da7a081ced3aa3b&rlz=1C1UEAD_enIN1151IN1151&sxsrf=AE3TifPAoh7P_WCGGmpvy8QFuFfDBBfkmg:1761308671360&q=K.K.Wagh+College+of+Agricultural+Engineering+%26+Technology+Nashik&ludocid=1272167096383630400&lsig=AB86z5WPkG3_ILv-2B6hvaNrD_4L&sa=X&ved=2ahUKEwiM2siN6ryQAxU7cWwGHfvwEW0Q8G0oAHoECC8QAQ'><MapPinned/></a>Sunrise Institute of Technology</p>
        </div>
        
    </div>
  )
}

export default Fotter
