import { getValue } from '@testing-library/user-event/dist/utils'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import React, { use, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("")
  const [gender, setGender] = useState("")
  const [hobby, setHobby] = useState([])
  let [file, setFile] = useState("")
  let [showimg, setShowImg] = useState("")

  function getValue() {
    console.log(`Username is ${name}`)
    console.log(`Email is ${email}`)
    console.log(`Address is ${address}`)
    console.log(`Phone is ${phone}`)
    console.log(`City is ${city}`)
    console.log(`Gender is ${gender}`)
    console.log(`Hobbies Are ${hobby.join(" , ")}`)
    console.log(`file is ${file} `)


  }
  function radiobtn(abc) {
    setGender(abc.target.value)


  }
  function checkbox(e) {
    let { checked, value } = e.target

    if (checked) {
      setHobby([...hobby, value])

    }
    else {
      setHobby(hobby.filter((a) => a != value))
    }

  }
  function clear(){
    setName("");
    setEmail("");
    setPassword("");
    setGender("");
    setHobby("");
    setCity("");
  }

  function FileUpload(e) {
    let image = e.target.files[0]
    if (image) {
      setFile(image)
      setShowImg(URL.createObjectURL(image))
    }

  }

  function save_data(){ 
try {
  let url = "https://685b889b89952852c2d9dd3d.mockapi.io/users";
  let uname_regex = /^[a-zA-Z_]{3,16}$/
  let passw_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


  if(!name || !email || !password || !phone || !gender || !hobby){
    toast.error("All Fields Are Required");
    return;
  }

  if (!uname_regex.test(name)){
    toast.error("Username is invalid");
    return;
  }
  if (!passw_regex.test(password)){
    toast.error("Password must be greater than or 8 , must be special number")
    return;
  }
  axios.post(url,{
    name: name,
    email : email,
    password: password,
    phone: phone,
    gender:gender,
    hobby:hobby,

  }

  ).then(() => {
    toast.success("Data Saved Successfully")
    clear();
  })

  
} catch (error) {
  console.log(error.message)
  
}
  }


  return (
    
    <div className="container">
      <ToastContainer/>
      <h1>Registration Form</h1>
      <hr />
      <div> 
      <Link
          type="button"
          class="btn btn-primary"
          to="/fr"
        >Show Records</Link>
          
      </div>
      <div className="form-control">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">User Name</label>
          <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(a) => setName(a.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(a) => setEmail(a.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">phone</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} onChange={(a) => setPhone(a.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Address</label>
          <input type="text-area" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={address} onChange={(a) => setAddress(a.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(a) => setPassword(a.target.value)} />
        </div>

        <div class="mb-3">
          <label for="" className="form-label">City</label>
          <select
            className="form-select form-select-lg" onChange={(a) => setCity(a.target.value)}
          >
            <option selected>Select one</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islambad</option>
            <option value="Lahore">Lahore</option>
          </select>
        </div>

        <div class="btn-group" data-bs-toggle="buttons">
          <label
            class="btn btn-primary active"
          >
            <input
              type="radio"
              class="me-2"
              name="gender"
              value="male"
              id=""
              checked={gender === "male"}
              onChange={radiobtn}
            />
            Male
          </label>
          <label
            class="btn btn-primary"
          >
            <input type="radio" name="gender" id="" value="female" checked={gender === "female"}
              onChange={radiobtn} /> Female
          </label>
          <label
            class="btn btn-primary"
          >
            <input type="radio" name="gender" id="" value="others" checked={gender === "others"}
              onChange={radiobtn} /> Others
          </label>
        </div>
        <br />
        <br />
        <p> Select Your Hobbies</p>
        <div class="list-group">
          <label class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="Cricket" name="cricket" onChange={checkbox} />
            Cricket
          </label>
          <label class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="Gaming" name="gaming" onChange={checkbox} />
            Gaming
          </label>
          <label class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="Football" name="football" onChange={checkbox} />
            Football
          </label>
          <label class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="Reading" name="reading" onChange={checkbox} />
            Reading
          </label>
        </div>

        <p> Upload Image</p>
        <input type="file" onChange={FileUpload} />
        <img src={showimg} alt="" height="100" />
        <br />




        <button className="btn btn-primary" onClick={save_data}>Submit</button>
      </div>
    </div>
  )
}

export default Form

