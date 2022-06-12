import "./styles.css";
import React,{useState} from "react";
export default function App() {
  const[name,setName]=useState("");
  const[sub,setsub]=useState("");
  const[email,setemail]=useState("");
  const[sel,setselect]=useState("");
 function display(event){
   setName(event.target.value);
 }
  return (
    <div className="App">
      <div>
        <h3>{sub}</h3>
    name:<input type="text" onChange={display}/>
    </div>
    <div>
    Email:<input type="text" onChange={function display1(event){
    setemail(event.target.value);
    }}/>
      </div>
      course:<select onChange={function select(event){
        setselect(event.target.value);
      }}>
      <option>eln</option>
      <option>cse</option>
      <option>mech</option>
      </select>
      <div>
      <button onClick={function show(event){
        event.preventDefault();
setsub(name +" "+email+" "+sel);}}>submit</button>
      </div>
     
    </div>
  );
}
