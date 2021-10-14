import React from "react"

function CarCard70s({ make, model, year, price, transmission, image }) {
  return (
    <div className="cars70s-list">
      <img> {image}</img>
      <small>{make}</small>
      <h3>{model}</h3>
      <div className="car-price">${price}</div>
    </div>
  )
}

// function CarCard80s ({make, model, year, price, transmission}) {
//   return (
//     <div className="cars80s-list">
//       <img src="..." alt="Image of {make} + {model}" />
//       <small>{make}</small>
//       <h3>{model}</h3>
//       <div className="car-price">${price}</div>
//     </div>
//   )
// }

export default CarCard70s
// export default CarCard80s
