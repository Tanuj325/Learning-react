// import Student from "./PropsUse";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProjextUptoProps } from "./ProjextUptoProps";
import Whatsapp from "./Whatsapp";
import Instagram from "./instagram";
import Header from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { ContactUs } from "./ContactUs";
import movies from "./movie.json";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function App() {
  const [count, setCount] = useState(1); //useState Hooke

  // const [count, setCount] = useState(0);
  const [count1, setCount1] = useState([]);

  // useEffect(()=>{             //useEffect Hooke
  //   async function getData(){
  //     const data = await fetch(`https://dummyjson.com/users`)   //api fetching
  //     const res = await data.json();
  //     setCount1(res.users)
  //   }
  //   getData();
  //   document.title=`(${count1.length}) Online`
  // },[count])

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [data, setData] = useState([]);
  // let arr = data;

  return (
    <Router>
      <div className="App">
        {/* Agr java script ka code JSX file me likhna hai toh jese neeche syntax diya hai vese likhna pdega  */}

        {/* {
      (() => {
        //JS Code
      })()
      } */}

        {/* <Student 
      name="Tanuj"
      age={20}
      course="B.tech"
      /> */}

        <Header />

        {/* <div className="main">
        {movies.map((element, index) => {
          return (
            <ProjextUptoProps
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div> */}

        {/* Use of useState Hooke */}

        {/* <h1 className="heading">Count = {count}</h1>
      <button type="button" onClick={()=>setCount(count+1)}>Increament</button>
      <button type="button" onClick={()=>setCount(count-1)}>Decreament</button> */}

        {/* Use of useEffect Hooke */}
        {/* <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increament by 1</button>
      {Array.isArray(count1) &&
        count1.map((element, index) => {
          return (
            <div key={index}>
              <h4>
                {element.firstName} {element.age}
              </h4>
            </div>
          );
        })} */}

        {/* <div className="project2">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />

          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setData(
                [
                  ...data,
                  {
                    name: name,
                    email: email,
                  },
                ],
                setName(""),
                setEmail("")
              );
            }}
          >
            <AddIcon />
          </Button>
        </Stack>
        <div className="data">
          <div className="datainside">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
          {data.map((element, index) => {
            return (
              <div key={index} className="datainside">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Button
                  variant="contained"
                  color="error"
                  onClick={(index) => {
                    arr.splice(index,1)
                    setData([...arr])
                    
                  }}
                >
                  <DeleteForeverIcon />
                </Button>
              </div>
            );
          })}
        </div>
      </div> */}

        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<ContactUs />}>
            <Route index element={<Whatsapp />} />
            <Route path="Whatsapp" element={<Whatsapp />} />
            <Route path="Instagram" element={<Instagram />} />
          </Route>
        </Routes> */}




        
      </div>
    </Router>
  );
}

export default App;
