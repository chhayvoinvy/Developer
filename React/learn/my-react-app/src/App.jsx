import { useState } from 'react';

import Card from './Card'
import MyComponent from "./MyComponent";
import Counter from './Counter';
import ColorPicker from './ColorPicker';
import ToDoList from './ToDoList';

function App() {

  // const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  // function handleAddFood() {
  //   const newFood = document.getElementById("foodInput").value;
  //   document.getElementById("foodInput").value = "";

  //   setFoods(prevFoods => [...prevFoods, newFood]);
  // }

  // function handleRemoveFood(index) {
  //   setFoods(foods.filter((_, i) => i !== index));
  // }



  // const [car, setCar] = useState({
  //   year: 2024,
  //   make: "Ford",
  //   model: "Mustang"
  // });

  // function handleYearChange(e) {
  //   setCar(previousCar => ({ ...previousCar, year: e.target.value }));
  // }

  // function handleMakeChange(e) {
  //   setCar(previousCar => ({ ...previousCar, make: e.target.value }));
  // }

  // function handleModelChange(e) {
  //   setCar(previousCar => ({ ...previousCar, model: e.target.value }));

  // }

  // const cards = [{ id: 1, type: 'birthday', style: 'men', age_style: 25 },
  // { id: 2, type: 'new_job', style: 'women', age_style: 25 },
  // { id: 3, type: 'new_position', style: 'women', age_style: 35 },
  // { id: 4, type: 'celebration', style: 'girl', age_style: 15 },
  // ];

  // cards.sort((a, b) => a.type.localeCompare(b.type)); // Sort by alphabet
  // cards.sort((a, b) => b.type.localeCompare(a.type)); // Sort by reverse alphabet
  // cards.sort((a, b) => b.age_style - a.age_style); // Numeric

  // const [name, setName] = useState("Guest");
  // const [qty, setQty] = useState();
  // const [comment, setComment] = useState("");
  // const [payment, setPayment] = useState("");
  // const [shipping, setShipping] = useState("");

  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }
  // function handleQtyChange(e) {
  //   setQty(e.target.value);
  // }
  // function handleCommentChange(e) {
  //   setComment(e.target.value);
  // }

  // function handlePaymentChange(e) {
  //   setPayment(e.target.value);
  // }

  // function handleShippingChange(e) {
  //   setShipping(e.target.value);
  // }


  // const [count, setCount] = useState(1);
  // // updater function = A function passed as an argument to setState() usually
  // //                                  Allow for safe updates based on the previous state
  // //                                  Used with multiple state updates and asynchronous functions
  // //                                  Good practice to use updater functions
  // const increment = () => {
  //   setCount(count + 1);
  //   setCount(previousCount => previousCount + 1);
  //   setCount(previousCount => previousCount + 1);
  //   setCount(previousCount => previousCount + 1);
  // }

  // const decrement = () => {
  //   setCount(count - 1);
  //   setCount(previousCount => previousCount - 1);
  //   setCount(previousCount => previousCount - 1);

  // }

  // const reset = () => {
  //   setCount(0);
  // }


  return (
    <>

      {/* <ToDoList /> */}


      {/* <MyComponent /> */}
      {/* <div>
      <h2>Food list</h2>
      <ul>
        {foods.map((food, index) => 
        <li key={index} onClick={() => handleRemoveFood(index)}>
          {food}
        </li>)}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter Food Name"></input>
      <button onClick={handleAddFood}>Add Food</button>

    </div> */}

      <div>
        {/* <hr style={{ margin: "200px" }}></hr>
      <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

      <input type="number" value={car.year} onChange={handleYearChange} /><br></br>
      <input type="text" value={car.make} onChange={handleMakeChange} /><br></br>
      <input type="model" value={car.model} onChange={handleModelChange} /><br></br>

      <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>-</button>
        <button className="counter-button" onClick={increment}>+</button>
        <button className="counter-button" onClick={reset}>Reset</button>
      </div>

      <hr style={{ margin: "200px" }}></hr>
      <ColorPicker />

      <hr style={{ margin: "200px" }}></hr>
      <p>Shipping: {shipping}</p>

      <label>Pickup</label>
      <input type="radio" value="Pickup"
        checked={shipping === "Pickup"} onChange={handleShippingChange}></input>
      <label>Delivery</label>
      <input type="radio" value="Delivery"
        checked={shipping === "Delivery"} onChange={handleShippingChange}></input>
      <hr style={{ margin: "200px" }}></hr>
      <Counter />
      <hr style={{ margin: "200px" }}></hr>
      <MyComponent />

      <hr style={{ margin: "200px" }}></hr>
      <Card items={cards}
        name='Travis'
        bio='I’ve committed to learning React JS for the next week and will do my best to complete it successfully.'

      />
      <hr style={{ margin: "200px" }}></hr>
      <br></br><br></br>
      <select value={payment} onChange={handlePaymentChange}>
        <option value=''>Select payment</option>
        <option value='master-card'>Master Card</option>
        <option value='visa-card'>Master Card</option>
      </select><br></br><br></br><br></br>

      <p>Payment selected: {payment}</p><br></br>


      <input value={name} onChange={handleNameChange}></input><br></br>
      <input type="number" value={qty} onChange={handleQtyChange}></input>
      <p>Welcome, {name}</p>
      <p>Qty {qty}</p><br></br>

      <p>Remark: {comment}</p>
      <textarea value={comment} onChange={handleCommentChange} placeholder='Any comment?'></textarea> */}

      </div>
    </>
  );

}

export default App
