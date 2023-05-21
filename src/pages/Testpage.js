import React, { useState } from "react";
function Testpage() {
  const [email,setEmail] = useState ("");
  const [password,setPassword]=useState("");
  function login()
  {
    console.warn(email,password)
  }

return (
    <section>
    <div>
        <input  type="text"
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                className="login__input"
                placeholder="Password"/>
        <input  type="text"
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                className="login__input"
                placeholder="User name / Email"/>
        <button onClick={login}>Login</button>
    </div></section>
);
}
export default Testpage;
