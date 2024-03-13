
import React from 'react'
import DonutChart from 'react-donut-chart';

function Pie() {
  return (
    <div className='w-[35rem] h-[18rem] flex justify-center items-center'>
<DonutChart 
  
  data={[
    {
      label: 'Rice',
      value: 5,
      
    },
    {
      label: 'Tomato',
      value: 3,
    },
    {
        label: 'Wheat',
        value: 4,
      },
  ]}
  height={250}
  width={375}
  colors={['darkgreen', '#e91e63','yellow']}
/>
</div>
  )
}

export default Pie
