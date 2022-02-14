import React from 'react';
import BANNER from './Banner';
import CREATE from './Create';
import PROJECTS from './Projects';
import INNOVATING from './Innovating';
import TOGETHER from './Together';
import './body.scss'

export default function Body() {
  return <div className='body-style'> 
      <BANNER className='body-style'></BANNER>
      <CREATE className='body-style'></CREATE>
      <PROJECTS className='body-style'> </PROJECTS>
      <INNOVATING className='body-style'></INNOVATING>
      <TOGETHER className='body-style'></TOGETHER>
  </div>;
}
