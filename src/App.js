import { useState } from "react";
import "./styles.css";

const foodDictionary = {
  Starters: [
    { name: "Paneer Tikka", rating: "9/10" },
    { name: "Mushroom Tikka", rating: "9.5/10" },
    { name: "Babycorn Tikka", rating: "10/10" }
  ],
  "Main Course": [
    { name: "Paneer Tikka Masala", rating: "9/10" },
    { name: "Mushroom Tikka Masala", rating: "9.5/10" },
    { name: "Babycorn Tikka Masala", rating: "9.7/10" }
  ],

  Desserts: [
    { name: "Tiramisu", rating: "9.5/10" },
    { name: "Gulab Jamoon", rating: "9.5/10" },
    { name: "Knoppers", rating: "10/10" }
  ]
};

export default function App() {
  // const [second, setSecond] = useState(1);
  // const [third, setThird] = useState(2);
  const [foodType, setFoodType] = useState("Starters");
  // const foodTypes = ["Starters", "Main Course", "Desserts"];
  const foods = Object.keys(foodDictionary);
  function foodClickHandler(food) {
    switch (food) {
      case "Starters":
        setFoodType("Starters");
        break;
      case "Main Course":
        setFoodType("Main Course");
        break;
      default:
        setFoodType("Desserts");
        break;
    }
  }
  return (
    <div className="App">
      <h1>F🥘🍩d Rec🥗mmendati🍪n</h1>
      <h2>Select your meal type 🍔 </h2>
      {foods.map((food) => {
        return <span onClick={() => foodClickHandler(food)}>{food}</span>;
      })}
      <hr />
      {foodDictionary[foodType].map((item) => {
        return (
          <>
            <ul id="item-box">
              <li className="item">{item.name}</li>
              <li className="item">{item.rating}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
}
