import { DeleteButtonStyled } from "../styles";
import productStore from "../Stores/productStore"

const DeleteButton = ({productId}) => {
  return (
    <DeleteButtonStyled onClick={() => productStore.deleteProduct(productId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;