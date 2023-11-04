import React from 'react'
import { useState,useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()

    
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then((response)=>response.json())
    //  .then((data)=>{
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center text-white text-3xl bg-gray-600 p-4'>
        Github followers:{data.followers}
        <img src={data.avatar_url} alt='Git Pictures' width={300}/>
        </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response =  await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}