import React from 'react';
import primaryPhoto from '../primaryPhoto.svg'
import name from '../name.svg'



// function drawCanvas() {
//     var canvas = document.getElementById("myCanvas"); // 取得物件
//     var ctx = canvas.getContext("2d"); // 取得繪圖環境

//     ctx.beginPath();

//     ctx.moveTo(50, 50);
//     ctx.lineTo(100, 200);
//     ctx.stroke();

//     ctx.moveTo(100, 100);
//     ctx.lineTo(400, 200);
//     ctx.stroke();
// }

const IndexPhoto = props => {
    return (
        <div>
            <img className='namePhoto' src={name}></img>

            <img className='primaryPhoto' id="primaryPhoto" src={primaryPhoto}></img>

        </div>
    )
}

// class IndexPhoto extends React.Component {
//     componentDidMount() {
//         this.updateCanvas();
//     }
//     updateCanvas() {
//         const ctx = this.refs.canvas.getContext('2d');
//         ctx.beginPath();

//         ctx.moveTo(600, 150);
//         ctx.lineTo(500, 200);

//         ctx.stroke();
//     }
//     render() {
//         return (
//             <canvas ref="canvas" width={600} height={400} />
//         );
//     }
// }
export default IndexPhoto;