import React from 'react';
import './Display.css';
import ButtonClose from './ButtonClose';
export default props =>
 <div className="display">
  <div className="buttons">
   <ButtonClose red/>
   <ButtonClose yellow/>
   <ButtonClose green/>
  </div>
 {props.value}
 </div>