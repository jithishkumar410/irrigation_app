'use client'


import React, { useEffect, useState } from 'react';
import { firestore } from '@/app/firebase'; 
import { collection, getDocs } from 'firebase/firestore'; 

const MyComponent: React.FC = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, '1'));
        const newData = querySnapshot.docs.map(doc => doc.data());
        setData(newData);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}><h1>{item.msg}</h1></div>
      ))}
    </div>
  );
};

export default MyComponent;
