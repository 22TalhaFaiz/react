import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    let go = useNavigate();

    function userlogin() {
        if (user === "admin@gmail.com" && password === "123") {
            go("/arr", { state: { uname: user } });

        } else {
            alert("Invalid Credentials")
        }

    }



    return (
        <>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user} onChange={(e) => setUser(e.target.value)} />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={userlogin}>Submit</button>

        </>


    )
}

export default Login
