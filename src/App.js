import { useState } from "react";
import "./styles.css";

const foodDictionary = {
  Starters: [
    {
      name: "Paneer Tikka",
      description: "Medium spicy dish containing Paneer",
      rating: "9/10"
    },
    {
      name: "Mushroom Pepper",
      description: "More spicy dish containing Mushroom",
      rating: "9.5/10"
    },
    {
      name: "Babycorn Tikka",
      description: "Medium spicy dish containing Babycorn",
      rating: "10/10"
    }
  ],
  "Main Course": [
    {
      name: "Paneer Tikka Masala",
      description: "Medium spicy dish containing Paneer",
      rating: "9/10"
    },
    {
      name: "Mushroom Pepper Masala",
      description: "Very spicy dish containing Mushroom",
      rating: "9.5/10"
    },
    {
      name: "Babycorn Masala",
      description: "Less spicy dish containing Babycorn",
      rating: "9.7/10"
    }
  ],

  Desserts: [
    {
      name: "Tiramisu",
      description: "Mangalorean special ice-cream by Pabbas",
      rating: "9.5/10"
    },
    {
      name: "Gulab Jamoon",
      description: "Authentic Indiaan sweet dish",
      rating: "9.5/10"
    },
    {
      name: "Knoppers",
      description: "German Wafers with chocolate filling",
      rating: "10/10"
    }
  ]
};

export default function App() {
  const [foodType, setFoodType] = useState("Starters");

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
        return (
          <span onClick={() => foodClickHandler(food)}>
            <ul className="menu-box">{food}</ul>
          </span>
        );
      })}
      <hr />
      {foodDictionary[foodType].map((item) => {
        return (
          <>
            <ul id="item-box">
              <li className="item list-non-bullet">
                <h3>{item.name}</h3>
              </li>
              <li className="item list-non-bullet">
                <h4>{item.description}</h4>
              </li>
              <li className="item list-non-bullet">
                <h5>Rating: {item.rating}</h5>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
}
