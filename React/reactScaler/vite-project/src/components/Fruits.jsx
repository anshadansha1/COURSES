import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  let fruits = [
    { name: "Apple", price: 100 },
    { name: "Orange", price: 100},
    { name: "Mango", price: 150 },
    { name: "Pineapple", price: 200 },
  ];
  return <div>{fruits.map(fruit => (
    // <li key={fruit.name}> {fruit.name} - {fruit.price}</li>
    <Fruit name={fruit.name} price={fruit.price}/>
  ))}
  </div>;
}

export default Fruits;
