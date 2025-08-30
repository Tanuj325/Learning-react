import React from 'react'
import { useNavigate,Link,Outlet } from 'react-router-dom'

export const ContactUs = () => {
  const nav = new useNavigate()
  return (
    <>
    <Link to='whatsapp'><h3>Contact via Whatsapp</h3></Link>
    <Link to='instagram'><h3>Contact via Instagram</h3></Link>
    <Outlet />
    {/* <button onClick={()=>nav(-1)}>Go back</button> */}
  </>
  )
}
