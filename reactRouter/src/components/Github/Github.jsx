import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData]=useState({})
  // useEffect(()=>{
  //     fetch("https://api.github.com/users/Tanuj325")
  //     .then((res)=>res.json())
  //     .then((data)=> (setData(data)))
  // },[])

  // if(!data){
  //     return <h2 className='text-center m-4 text-xl'>Loading...</h2>
  // }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Username: {data.login}
      <img src={data.avatar_url} alt="Github Image" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/Tanuj325"); 
  return res.json();
};
