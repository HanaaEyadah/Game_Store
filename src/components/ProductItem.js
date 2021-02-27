import DeleteButton from "../Buttons/DeleteButton";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../styles";

const ProductItem = ({ product, deleteProduct }) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton productId={product.id} deleteProduct={deleteProduct} />
    </ProductWrapper>
  );
};

export default ProductItem;





// import DeleteButton from "../Buttons/DeleteButton"
// import { ProductWrapper } from "../styles";

// const ProductItem = (props) => {
//   const product = props.product;

//   return (
//     <ProductWrapper>
//       <img
//         alt={product.name}
//         src={product.image}
//         onClick={() => props.selectProduct(product.id)}
//       />
//       <p>{product.name}</p>
//       <p className="product-price">{product.price} KD</p>
//       <DeleteButton
//         productId={product.id}
//         deleteProduct={props.deleteProduct}
//       />
//     </ProductWrapper>
//   );
// };

// export default ProductItem;