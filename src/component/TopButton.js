import React from 'react';
import Button from 'react-bootstrap/Button';

// function topButton() {
//     return (
//         <div>
//             <input type="button">{props.name}</input>
//         </div>
//     );
// }

const TopButton = props => {
    return (
        <nav className="Button">

            <Button href={props.url} variant="outline-light" value={props.name} size="sm">{props.name}</Button>

            {/* <button value={props.name}></button> */}
        </nav>
    )
}
export default TopButton;