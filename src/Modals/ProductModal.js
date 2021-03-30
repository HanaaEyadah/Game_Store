import React from 'react';
import productStore from "../Stores/productStore";
import { useState } from "react";
import {CreateButtonStyled} from "../styles";
import Modal from "react-modal";



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
          contentLabel="Dish Modal"
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
                <input
                  name="price"
                  type="number"
                  min="1"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                className="form-control"
                name="image"
                onChange={handleChange}
              />
            </div>
  <CreateButtonStyled className="btn float-right">Create</CreateButtonStyled>
  
</form>
      </Modal>
          );
    
}

export default ProductModal;