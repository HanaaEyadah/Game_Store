import { Link, Redirect, useParams } from "react-router-dom";
import DeleteButton from "../Buttons/DeleteButton";
import { DetailWrapper } from "../styles";
import productStore from "../Stores/productStore"
import { observer } from "mobx-react";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const product = productStore.products.find((product) => product.slug === productSlug);

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <Link to="/products">Back to Products</Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default observer(ProductDetail);




