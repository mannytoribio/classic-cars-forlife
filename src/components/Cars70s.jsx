import React from "react"
import CarCard from "./CarCard"
import "./cars.css"

const cars70sList = [{
 id: 1,
 make: 'Cheverolet', 
 model: 'Chevelle',
 year: '1971',
 price: 79999.99,
 transmission: 'manual',
 image: '/1971-Chevrolet-Chevelle.jpeg' ,
},{
  id: 2,
  make: 'Astre', 
  model: 'Pontiac',
  year: '1973',
  price: 89999.99,
  transmission: 'automatic',
  image: 
 },{
  id: 3,
  make: 'Maverick', 
  model: 'Ford',
  year: '1970',
  price: 99999.99,
  transmission: 'manual'
}]

// const cars80sList = [{
//  id: 1,
//  make: 'Lancia Delta', 
//  model: 'Integrale',
//  year: '1987',
//  price: 139999.99,
//  transmission: 'automatic',
// },{
//   id: 2,
//   make: 'Ferrari', 
//   model: 'F40',
//   year: '1983',
//   price: 189999.99,
//   transmission: 'manual'
//  },{
//   id: 3,
//   make: '959', 
//   model: 'Porche',
//   year: '1987',
//   price: 199999.99,
//   transmission: 'manual'
// }]

function Cars70s() {
  return(
    <>
      <h2>70's Classics</h2>
      <div className="cars70s-list">
        {cars70sList.map(item => {
          return (
            <CarCard
              key={item.id}
              item={item} />
          )
        })}
      </div>
    </>
  )
}

// function Cars80s(props) {
//   <>
//     <h2>80's Classics</h2>
//     <div className="cars80s-list">
//       {cars80sList.map(item => {
//         return (
//           <CarCard
//             key={item.id}
//             item={item} />
//         )
//       })}
//     </div>
//   </>
// }

export default Cars70s