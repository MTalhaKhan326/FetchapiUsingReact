import './index.css';
import React, { useEffect, useState } from 'react';
//import Sdata from './Sdata';
import ReactDOM from 'react-dom';
import Cards from './card';
//console.warn(Sdata[0].name)
function App() {
    const [data, setdata] = useState([])
    console.log(data)
    useEffect(() => {
        fetch("/students").then((result) => {
            result.json().then((result) => {
                //console.warn("result",result)
                setdata(result)
            })
        })
    }, [])
    ReactDOM.render(
        <>
            <Cards
                name={data[0] && data[0].name ? data[0].name: 'loading'} // ya ha Ternary operator use kiya ha 
                email={data[0] && data[0].email ? data[0].email: 'loading'}
            />
            <Cards
                name={data[1] && data[1].name ? data[1].name: 'loading'}
                email={data[1] && data[1].email ? data[1].email: 'loading'}
            />
            <Cards
                name={data[2] && data[2].name ? data[2].name: 'loading'}
                email={data[2] && data[2].email ? data[2].email: 'loading'}
            />
            <Cards
               name={data[3] && data[3].name ? data[3].name: 'loading'}
               email={data[3] && data[3].email ? data[3].email: 'loading'}
            />
            <Cards
               name={data[4] && data[4].name ? data[4].name: 'loading'}
               email={data[4] && data[4].email ? data[4].email: 'loading'}
            />
        </>,
        document.getElementById('root')
    )
}

export default App;
  /*
function App1() {
 
const [data,setdata]= useState([])
useEffect(() =>{
 
fetch("/students").then((result)=>{
result.json().then((result) =>{
 //console.warn("result",result)
 setdata(result)
})
})
}, [])
console.warn(data)


return(
 
 
<div className="App">
 
<h1>Get API call</h1>
 
<table border="1" cellSpacing="5" backgroundColor="blue">
 
<tr>
  <td>Name</td>
  <td>email</td>
  <td>Phone</td>
</tr>
{
  data.map((item1)=>

  <tr>
  <td>{item1.name}</td>
  <td>{item1.email}</td>
  <td>{item1.phone}</td>
</tr>)
}
</table>
 
</div>

);
}

export default App1;
*/