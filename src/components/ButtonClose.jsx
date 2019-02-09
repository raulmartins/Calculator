import React from 'react';
import './ButtonClose.css'
export default props => {
 let classes ='buttonClose ';
 classes +=  props.red ? 'red': '';
 classes +=  props.yellow ? 'yellow': '';
 classes +=  props.green ? 'green': '';

 return(
    <div className={classes}></div>
   )

}
