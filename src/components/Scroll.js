import React from 'react';
const Scroll = (props) => {
    return (
        <div style={{ overflow:'scroll',height:'767px'}}>
            {props.children}
        </div>
    )
}
export default Scroll;