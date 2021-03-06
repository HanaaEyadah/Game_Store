// import { AddButtonStyled } from "../styles";
import React, { useState } from "react";
import ProductModal from "../Modals/ProductModal";
import {CreateButtonStyled} from "../styles"
import productStore from "../Stores/productStore"


function AddButton(productId){
    const [isOpen , setIsOpen]=  useState(false);
    const closeModal =() => isOpen(false);
    const openModal = () => setIsOpen(true);
    return(
<>
<CreateButtonStyled className="float-right" size="2em" onClick={openModal} />

  <ProductModal isOpen={isOpen} closeModal={closeModal} />
</>
    )
    
    } 

    export default AddButton;
