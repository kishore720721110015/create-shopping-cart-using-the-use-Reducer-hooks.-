// import React from "react";

import React, { useReducer } from "react";
import './body.css';
import image1 from './image/ai-generated-8512889_640.jpg';
import image2 from './image/apple-256267_640.jpg';


// function Content(){
//     return(
//         <div className="cards-container">
//         <div className="card">
//           <img
//             src={image1}
//             className="card-img"
//           />
//           <div className="card-content">
//             <button>Add item1</button>
//             {/* <h3>Can I donate?</h3>
//             <p>See if you are eligible to donate blood, plasma, or platelets today, or find answers to frequently asked questions.</p>
//             <a href="#eligibility" className="card-link">Check your eligibility</a> */}
//           </div>
//         </div>
//         <div className="card">
//           <img
//             src={image2}
//             alt="Can I donate?"
//             className="card-img"
//           />
//           <div className="card-content">
//             <button>Add item2</button>
//             {/* <h3>Can I donate?</h3>
//             <p>See if you are eligible to donate blood, plasma, or platelets today, or find answers to frequently asked questions.</p>
//             <a href="#eligibility" className="card-link">Check your eligibility</a> */}
//           </div>
//         </div>
//        </div>
//     ) 
// }
// export default Content;



const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: action.id, name: action.name, quantity: 1 }];
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    default:
      throw new Error();
  }
}

function Content() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (id, name) => {
    const itemExists = state.find((item) => item.id === id);
    if (itemExists) {
      dispatch({ type: "INCREASE_QUANTITY", id });
    } else {
      dispatch({ type: "ADD_ITEM", id, name });
    }
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
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
