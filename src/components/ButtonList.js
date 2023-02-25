import React from 'react'
import Button from "./Button"

const items =["All","Gaming","Songs","Live","Cricket","News",
"Love","Cinema","Tom",
"React","NTR","Marriages"];

const ButtonList = () => {
  return (
    <div className='flex justify-center overflow-y-scrollcr'>
      
      
        {items.map((item,i) => (<Button key={item} name={item}/>))}
      
    
    </div>
  )
}

export default ButtonList