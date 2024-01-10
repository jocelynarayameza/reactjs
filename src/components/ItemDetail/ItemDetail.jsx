import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import classes from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Context";

const ItemDetail = ({ id, name, price, img, stock, category, description }) => {

  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <article>
      <header>
        <h2 className={classes.title}> {name} </h2>
      </header>
      <picture className={classes.imgContainer}>
        <img className={classes.img} src={img} alt={name} />
      </picture>
      <section className={classes.descriptionContainer}>
        <p className={classes.description}> {description} </p>
        <p className={classes.p}> Category: {category} </p>
        <p className={classes.p}> Price: {price} </p>
      </section>
      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart">
              <button className={classes.finishButton}>
                <h2>Finalizar</h2>
              </button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
