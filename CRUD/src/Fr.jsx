import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const Fr = () => {
    const [getd, setGetD] = useState([]);
    const [search, setSearch] = useState();
    const [sort, setSort] = useState();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [hobby,setHobby] = useState();
    const [gender, setGender] = useState();
    const [phone, setPhone] = useState();
    const [id, setId] = useState();

    function setInput(name, email, password, phone, hobby, gender,  id) {
        setName(name)
        setEmail(email)
        setPassword(password)
        setPhone(phone)
        setHobby(hobby)
        setGender(gender)
        setId(id)
    }

    function update_data(id){
        try {
            let url = "https://685b889b89952852c2d9dd3d.mockapi.io/users";
            axios.put(`${url}/${id}`,{
                name:name,
                email:email,
                password:password,
                phone:phone,
                hobby:hobby,
                gender:gender,

            }).then(() => {
                show_data();
                toast.success("Record Updated")
            }).catch((e) => {
                toast.error(e.message)
            })
            
        } catch (error) {
            
        }
    }



    function show_data() {
        try {
            let url = "https://685b889b89952852c2d9dd3d.mockapi.io/users";
            axios.get(url).then((abc) => {
                setGetD(abc.data)
            }).catch((e) => {
                console.log(e)
            })
        }
        catch (error) {
            console.log(error.message)
        }



    }
    useEffect(() => {
        show_data()
    }, [])


    function delete_data(id) {
        try {
            let url = "https://685b889b89952852c2d9dd3d.mockapi.io/users";
            if (window.confirm("Are You Sure?") === true) {
                axios.delete(`${url}/${id}`).then(() => {
                    show_data();
                    toast.success("Record Delete Succesfully")
                }).catch((e) => {
                    toast.error(e.message)
                })
            }
        } catch (error) {
            toast.error(error.message)

        }
    }



    let filter_users = search ? getd.filter((a) => a.name.toLowerCase().includes(search.toLowerCase())) :
        getd

    if (sort === "1") {
        filter_users = filter_users.sort((a, b) => a.name.localeCompare(b.name))

    }
    else if (sort === "2") {
        filter_users = filter_users.sort((a, b) => b.name.localeCompare(a.name))
    }
    else if (sort === "3") {
        filter_users = filter_users.sort((a, b) => a.email.localeCompare(b.email))
    }
    else if (sort === "4") {
        filter_users = filter_users.sort((a, b) => b.email.localeCompare(a.email))
    }



    return (
        <div className="container">
            <ToastContainer />
            <div className="d-grid gap-2 d-md flex justify-content-md-end">
                <Link className="btn btn-primary me-md-2" type="button" to="/f" >ADD</Link>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <input type="search" name="" id="" value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="col-md-6">

                    <select
                        class="form-select form-select-lg"
                        name=""
                        id=""
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option selected>Select one</option>
                        <option value="1">Sort Name(A - Z)</option>
                        <option value="2">Sort Name(Z - A)</option>
                        <option value="3">Sort Email(A - Z)</option>
                        <option value="4">Sort Email(Z - A)</option>
                    </select>
                </div>
            </div>
            <div
                class="table-responsive"
            >
                <table
                    class="table table-primary table-dark"
                >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Hobby</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filter_users.length > 0 ?

                                filter_users.map((a) => (
                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.name}</td>
                                        <td>{a.email}</td>
                                        <td>{a.gender}</td>
                                        <td>{a.phone}</td>
                                        <td>{a.hobby}</td>
                                        <td><i className="bi bi-pencil" style={{ color: "green" }} data-bs-toggle="modal"
                                            data-bs-target="#modalId" onClick={() => setInput(a.name, a.email, a.password, a.phone, a.hobby,)}></i></td>
                                        <td><i className="bi bi-trash" style={{ color: "red" }} onClick={() => delete_data(a.id)}></i></td>
                                    </tr>
                                ))
                                :
                                <div>
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        No Users were found
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button>
                                    </div>

                                </div>
                        }
                    </tbody>
                </table>

                <div
                    class="modal fade"
                    id="modalId"
                    tabindex="-1"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"

                    role="dialog"
                    aria-labelledby="modalTitleId"
                    aria-hidden="true"
                >
                    <div
                        class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
                        role="document"
                    >
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalTitleId">
                                    Edit Form
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(a) => setName(a.target.value)} />
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(a) => setEmail(a.target.value)} />
                                <input type="text" className="form-control" id="exampleInputPassword1" value={password} onChange={(a) => setPassword(a.target.value)} />
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} onChange={(a) => setPhone(a.target.value)} />
                                <input
                                    type="radio"
                                    class="me-2"
                                    name="gender"
                                    value="male"
                                    id=""
                                    checked={gender === "male"}
                                    onChange={(e) => setGender(e.target.value)}
                                /> Male
                                <input type="radio" name="gender" id="" value="female" checked={gender === "female"}
                                    onChange={(e) => setGender(e.target.value)} /> Female
                                <input type="radio" name="gender" id="" value="others" checked={gender === "others"}
                                    onChange={(e) => setGender(e.target.value)}  /> Others




                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary close"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" class="btn btn-primary" onClick={()=> {
                                    update_data();
                                    document.querySelector(".close").click();
                                }}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>








            </div>

        </div>
    )
}
