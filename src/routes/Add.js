import { useState } from "react";
import './Add.css'
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from 'react-router-dom'

// Add.js
function Add({setList}) {

  const navigate = useNavigate();

  const handlerAddProduct = (newItem) => {
    newItem.id = uuidv4();
    setList((prevState) => [...prevState , newItem]);
    navigate(`/view/${newItem.id}`)
  }

  const [inputValue, setInputValue] = useState({
    name: "",
    count: "",
    price: "",
    count: "",
  });

  const handlerInputChange = (e) => {
    const {name, value} = e.target
    setInputValue((prevInputValue) => {
      return {...prevInputValue, [name]: value}
    })
  }

  return (
    <div className="stack-vertical">
      <label>
        Name:
        <input name="name" value={inputValue.name} onChange={(e) => handlerInputChange(e)} />
      </label>
      <label>
      Quantity:
        <input name="count" value={inputValue.count} onChange={(e) => handlerInputChange(e)} />
      </label>
      <label>
        Price:
        <input name="price" value={inputValue.price} onChange={(e) => handlerInputChange(e)} />
      </label>
      <label>
        Discount:
        <input name="discount" value={inputValue.discount} onChange={(e) => handlerInputChange(e)} />
      </label>
      <button onClick={(e) => handlerAddProduct(inputValue)}>Add</button>
    </div>
  );
}
export default Add;
