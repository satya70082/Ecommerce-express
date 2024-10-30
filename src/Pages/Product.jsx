import React,{useContext} from 'react'
import {ShopContext}  from '../Context/ShopConext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const {all_product}=useContext(ShopContext)
  const {productId} = useParams();
 const productIdNumber = Number(productId);
  const product = all_product.find((e)=>e.id === productIdNumber);

  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <RelatedProducts/>

      
    </div>
  )
}

export default Product



