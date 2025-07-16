import axios from 'axios'
import React, { useState } from 'react'

export const Create = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [passw, setPassw] = useState("")
  const [age, setAge] = useState(1)

  async function SubmitFunc(){
    try {
      await axios.post("http://localhost:3008/save",{
      Name: name,
      Email: email,
      Passw: passw,
      Age:age


      }).then(() => {
        alert("Data Saved Succesfully")
      }).catch((e)=> {
        console.log(e.message)
      })
      
    } catch (error) {
      console.log(error)
      
    }

  }
  return (
    <div>
         <div class="container mt-5">
    <h2>Registration Form</h2>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your password" value={passw} onChange={(e)=> setPassw(e.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input type="number" class="form-control" id="age" placeholder="Enter your age" value={age} onChange={(e)=> setAge(e.target.value)}/>
      </div>
      <button type="button" class="btn btn-primary" onClick={SubmitFunc}>Submit</button>
    </form>
  </div>

    </div>
  )
}
