// Item.js
import styles from "./Item.module.css";
import { useParams, useNavigate } from "react-router-dom";

function Item({ list, handlerDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = list.find((item) => item.id === id);
  return (
    <div className={styles.container}>
      {product ? (
        <>
          <h3>Product ID: {id}</h3>
          <p>Name: {product.name}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Price: {product.price}</p>
          <p>Discount: {product.discount}</p>
          <button
            onClick={() => {
              handlerDelete(id);
              navigate('/view')
            }}
          >
            Delete
          </button>
        </>
      ) : (
        <>Product not found!</>
      )}
    </div>
  );
}
export default Item;
