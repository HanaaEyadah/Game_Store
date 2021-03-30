import DeleteButton from "../Buttons/DeleteButton";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../styles";
import { observer } from "mobx-react";


const ProductItem = ({product} ) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton productId={product.id}  />
    </ProductWrapper>

  );

 
};

export default observer(ProductItem);




