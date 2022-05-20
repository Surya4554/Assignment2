import React, { useState } from 'react'
import './style.css';
import productData from './productApi.js';
import ProductCard from './ProductCard';
import Filter from './Filter';

const uniqueList = [
  ...new Set(productData.map((curElem) =>{
      return curElem.category;
   })
  ),
  "All"
];


const Ecommerce = () => {
  const [data, setData] = useState(productData);
  const [filterList, setFilterList] = useState(uniqueList);

  const filterItem = (category) => {
     if(category === 'All'){
       setData(productData);
       return;
     }
     const updatedList = productData.filter((curElem) =>{
       return curElem.category === category;
     });
     setData(updatedList);
  };

  return (
    <>
       <Filter filterItem={filterItem} filterList={filterList}/>
       < ProductCard data={data}/>
    </>
  );
};

export default Ecommerce;