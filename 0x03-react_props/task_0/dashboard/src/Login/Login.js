import React from 'react';
import './Login.css';


function Login() {
    return(
<body className="App-body">
<p
  style={{
    display: "inline-block",
    position: "absolute",
    top: "30%" ,
    left: "-2%",
  }}
>
  Login to access the full dashboard
</p>
<label
  For="email"
  style={{
    display: "inline-block",
    position: "absolute",
    top: "55%",
    left: "1.3%",
    fontWeight: "bold",
  }}
>
  Email:
</label>
<input
  type="email"
  id="email"
  style={{
    display: "inline-block",
    position: "absolute",
    top: "55%",
    left: "4%",
  }}
/>
<label
  For="pwd"
  style={{
    display: "inline-block",
    position: "absolute",
    top: "55%",
    left: "15%",
    fontWeight: "bold",
  }}
>
  Password:{" "}
</label>
<input
  type="password"
  id="pwd"
  style={{
    display: "inline-block",
    position: "absolute",
    top: "55%",
    left: "19.5%",
  }}
/>
<button
  style={{
    display: "inline-block",
    position: "absolute",
    top: "55%",
    left: "30%",
  }}
>
  OK
</button>
</body>
    );
}

export default Login;