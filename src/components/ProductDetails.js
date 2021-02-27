import { ProductWrapper } from "../styles";

const ProductDetails = (props) => {
  const product = props.products;
  return (
    <ProductWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
    </ProductWrapper>
  );
};

export default ProductDetails;