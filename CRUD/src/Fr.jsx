import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Fr = () => {
    const[getd , setGetD] = useState([]);
    const[search , setSearch]= useState();
    const [sort,setSort] = useState();
    useEffect(()=> {
        try {
            let url = "https://685b889b89952852c2d9dd3d.mockapi.io/users";
            axios.get(url).then((abc)=>{
                setGetD(abc.data)
            }).catch((e)=>{
                console.log(e)
            })
                } 
        catch (error) {
            console.log(error.message)
        }
    },[])

    let filter_users = search ? getd.filter((a) => a.name.toLowerCase().includes(search.toLowerCase())) :
        getd

        if(sort === "1"){
            filter_users = filter_users.sort((a,b) => a.name.localeCompare(b.name))

        }
        else if(sort === "2"){
            filter_users = filter_users.sort((a,b) => b.name.localeCompare(a.name))
        }
        else if (sort === "3"){
            filter_users = filter_users.sort((a,b) => a.email.localeCompare(b.email))
        }
        else if (sort === "4"){
            filter_users = filter_users.sort((a,b) => b.email.localeCompare(a.email))
        }


    
  return (
    <div className="container">
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
                        <th scope="col">Gender</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Hobby</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filter_users.length > 0 ?  

                        filter_users.map((a)=> (
                            <tr>
                            <td>{a.id}</td>
                            <td>{a.name}</td>
                            <td>{a.email}</td>
                            <td>{a.phone}</td>
                            <td>{a.hobby}</td>
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
        </div>
        
    </div>
  )
}
