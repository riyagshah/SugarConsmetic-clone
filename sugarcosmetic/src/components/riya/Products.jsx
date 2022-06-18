
import list from "../../data";
// import Card from "./Card";
import HomePage from "./HomePage";
import "./products.css";

const Products = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <HomePage key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Products;