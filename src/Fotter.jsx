import React from 'react'
import './Fotter.css'
import { NAME_HEADLINE ,EMAIL,PHONE_NUMBER} from './Config/App'
import { Phone, Mail, MapPinned } from 'lucide-react'

function Fotter() {
  const EMAIL = "prathameshroundale05@gmail.com"

  return (
    <div className="fottor">
      <div>
        <p>{NAME_HEADLINE}</p>

        <p>
          <a className="fotter-icons" href={`tel:${PHONE_NUMBER} `}>
            <Phone /> {PHONE_NUMBER}
          </a>
        </p>

        <p>
          <a className="fotter-icons" href={`mailto:${EMAIL}`}>
            <Mail /> {EMAIL}
          </a>
        </p>

        <p>
          <a
            className="fotter-icons"
            href="https://www.google.com/search?q=K.K.Wagh+College+of+Agricultural+Engineering+%26+Technology+Nashik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPinned /> Sunrise Institute of Technology
          </a>
        </p>
      </div>
    </div>
  )
}

export default Fotter
