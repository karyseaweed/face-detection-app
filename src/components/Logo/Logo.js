import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0 flex justify-center'>
      <Tilt className='tilt br2 shadow-2 mx-auto flex justify-center items-center'>
        <div>
          <img src={brain} alt='logo' />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
