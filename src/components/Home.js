import { Description, ShopImage, Title } from "../styles";
import img from "../Images/img.png"

const Home = () => {
  return (
    <>
      <Title>Game_Store</Title>
      <ShopImage
        alt="Game_Store"
        src={img}
      />
      <Description>Our Best Seller</Description>
   
    </>
  );
};

export default Home;