// import React from "react";

import React, { useReducer } from "react";
import './body.css';
import image1 from './image/ai-generated-8512889_640.jpg';
import image2 from './image/apple-256267_640.jpg';



const initialState = [];

function Main(state, action) {
  switch (action.type) {
    case "Add":
      return [...state, { id: action.id, name: action.name, quantity: 1 }];
    case "Increment":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "Decrement":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case "Remove":
      return state.filter((item) => item.id !== action.id);
    default:
      throw new Error();
  }
}

function Content() {
  const [state, dispatch] = useReducer(Main, initialState);

  const addItem = (id, name) => {
    const itemExists = state.find((item) => item.id === id);
    if (itemExists) {
      dispatch({ type: "Increment", id });
    } else {
      dispatch({ type: "Add", id, name });
    }
  };

  const removeItem = (id) => {
    dispatch({ type: "Remove", id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "Decrement", id });
  };

  const getTotalItems = () => {
    return state.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <img
            src={image1}
            alt="Mango"
            className="card-img"
          />
          <div className="content">
            <button class="btn1" onClick={() => addItem(1, "Mango")}>Add item1</button>
          </div>
        </div>
        <div className="card">
          <img
            src={image2}
            alt="Apple"
            className="card-img"
          />
          <div className="content">
            <button class="btn1" onClick={() => addItem(2, "Apple")}>Add item2</button>
          </div>
        </div>
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        <p>Total Items: {getTotalItems()}</p>
        {state.length === 0 && <p>No items in the cart.</p>}
        <ul>
          {state.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => addItem(item.id, item.name)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
