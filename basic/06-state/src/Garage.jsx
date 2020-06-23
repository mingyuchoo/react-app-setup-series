import React, { Component, useState } from 'react';

/**
 * Class Component
 */
// class Car extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   changeColor = () => {
//     this.setState({color: "blue"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button type="button" onClick={this.changeColor}>
//           Change color
//         </button>
//       </div>
//     );
//   }
// }

/**
 * Function Component
 */

 export function Car() {
   const [info, setInfo] = useState({
     brand: "Ford",
     model: "Mustang",
     color: "red",
     year: 1964
   })
   const changeColor = () => {
     setInfo({...info, color: "blue"})
   }
   return (
     <div>
       <h1>My {info.brand}</h1>
       <p>
         It is a {info.color}
         {info.model}
         from {info.year}
       </p>
       <button id="change-color" type="button" onClick={changeColor}>
         Change Color
       </button>
     </div>
   )
 }
/**
 * Class Component
 */
// class Garage extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         <h1>Who lives in my Garage?</h1>
//         <Car />
//       </div>
//     );
//   }
// }

/**
 * Function Component
 */
function Garage() {
  return (
    <div>
      <h1>Who lives in my Grage?</h1>
      <Car />
    </div>
  )
}

export default Garage;
