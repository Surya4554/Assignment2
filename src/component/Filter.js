import React from 'react'

const Filter = ({filterItem, filterList}) => {
  return (
    <>
       <nav className='navbar'>
           <div className='btn-group'>
              {filterList.map((curElem) => {
                  return (
                      <button className='btn-group-item' onClick={() => filterItem(curElem)}>{curElem}</button>
                  )
              })}
           </div>
       </nav>  
    </>
  )
}

export default Filter;