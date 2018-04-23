import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'

const Navigation = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br3 shadow-2" options={{ max : 55 }} style={{ height: 140, width: 120 }} >
				 <div className="Tilt-inner pa3"> 
				 	<img style={{paddingTop: '5px'}} alt='logo 'src={brain} height='100' width='auto'></img>
				 </div>
			</Tilt>
		</div>
		);
}

export default Navigation;