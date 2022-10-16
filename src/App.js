import { useState } from "react";
import "./styles.css";

const foodDictionary = {
  Starters: [
    { name: "Paneer Tikka", rating: "9/10" },
    { name: "Mushroom Tikka", rating: "9.5/10" }
  ],
  "Main Course": [
    { name: "Paneer Tikka Masala", rating: "9/10" },
    { name: "Mushroom Tikka Masala", rating: "9.5/10" }
  ],

  Desserts: [
    { name: "Tiramisu", rating: "9.5/10" },
    { name: "Gulab Jamoon", rating: "9.5/10" }
  ]
};

function foodClickHandler(food) {
  // switch (food) {
  //   case "Starters":
  //     setFirst(firstStarter);
  //     setSecond(secondStarter);
  //     setthird(thirdStarter);
  //     break;
  //   default:
  //     setFirst(firstDessert);
  //     setSecond(secondDessert);
  //     setThird(thirdDessert);
  //     break;
  // }
}

export default function App() {
  // const [first, setFirst] = useState(0);
  // const [second, setSecond] = useState(1);
  // const [third, setThird] = useState(2);

  //const foods = [first, second, third];
  const foods = Object.keys(foodDictionary);
  return (
    <div className="App">
      <h1>F🥘🍩d Rec🥗mmendati🍪n</h1>
      <h2>Select your meal type 🍔 </h2>
      {foods.map((food) => {
        return <span onClick={() => foodClickHandler(food)}>{food}</span>;
      })}
      <hr />
      {}
    </div>
  );
}
