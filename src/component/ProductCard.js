import React from 'react'

const ProductCard = ({data,}) => {
  return (
    <>
    <section className='main-card-container'>
    {data.map((curElem) => {
      const { id, name, price, image, description } = curElem;
    return (
      <>
        <div className='card-container' key={id}>
            <div className='card'>
                    <img src={image} alt="images" className='card-media' />
                    <div className='card-body'>
                      <h2 className='card-title'>{name}</h2>
                      <span className='card-description subtitle'>{description}</span>
                    </div>
                    <div><span className='card-tag subtitle'>Buy Now</span>
                    <span className='subtitle price'>{price}</span> </div>
            </div>
        </div>
      </> 
     ); 
    })}
    </section>        
    </>
   );
}

export default ProductCard;