import React from 'react';
import Modal from "react-modal";
import productStore from "../Stores/productStore";
import { useState } from "react";
import {CreateButtonStyled} from "../styles";




const ProductModal = ({ isOpen, closeModal, createProduct }) => {
  
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: "",
        image: "",
        
      }
      );
      const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        productStore.createProduct(product);
        closeModal();
      };

      

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Product Modal"
      >
        <form onSubmit={handleSubmit}>
  <div className="form-group row">
    <div className="col-6">
      <label>Name</label>
      <input
  required
  name="name"
  type="text"
  className="form-control"
  onChange={handleChange}
/>
    </div>
    <div className="col-6">
      <label>Price</label>
      <input type="number" min="1" className="form-control" />
    </div>
  </div>
  <div className="form-group">
    <label>Description</label>
    <input type="text" className="form-control" name="description" />
  </div>
  <div className="form-group">
    <label>Image</label>
    <input type="text" className="form-control" />
  </div>
  <CreateButtonStyled className="btn float-right">Create</CreateButtonStyled>
  
</form>
      </Modal>
          );
    
}

export default ProductModal;