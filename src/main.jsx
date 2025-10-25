
import { createRoot } from 'react-dom/client'
import Card from './Card'
import Fotter from './Fotter'
import { BGCOLOR }  from './Config/App'
createRoot(document.getElementById('root')).render(
  <div style={{backgroundColor:BGCOLOR}}>
  <Card />
  <Fotter />
  </div>
)
