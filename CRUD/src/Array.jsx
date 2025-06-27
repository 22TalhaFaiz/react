import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Array = () => {

    const recv = useLocation();
    const user_email = recv.state?.uname || "Guest"

    const product = [
        { id: 1, name: "Zero Luna", price: 15000, productCat: "Smart Watch", brand: "Zero", image: "https://zerolifestyle.co/cdn/shop/files/Luna-_5_2.webp?v=1734558242&width=1250" },
        { id: 2, name: "Polo T-Shirt", price: 3000, productCat: "T-Shirt", brand: "Polo", image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1266719_lifestyle?$rl_4x5_pdp$" },
        { id: 3, name: "Rayban Glasses", price: 2000, productCat: "Glasses", brand: "Rayban", image: "data:image/jpeg;base64,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" },
        { id: 4, name: "Samsung S23 Ultra", price: 120000, productCat: "Mobile Phone", brand: "Samsung", image: "https://high.com.pk/wp-content/uploads/2023/05/Samsung-S23-Ultra-Master-Copy-Replica-01.jpg" },
        { id: 5, name: "AirJordan Max", price: 50000, productCat: "Shoes", brand: "Jordans", image: "https://speedsports.pk/cdn/shop/files/CZ4167-006-PHSLH000-1000_19.jpg?v=1706026626" },
        { id: 6, name: "Razer Airbuds", price: 15000, productCat: "Airbuds", brand: "Razer", image: "https://static3.webx.pk/files/19643/Images/razer-hammerhead-true-wireless-earbuds-price-in-pakistan-1-19643-668220-060824070023004.png" },
    ]

    const [search, setSearch] = useState("");
    const [sort,setSort] = useState("");
    



    let filter_product = search ? product.filter((a) => a.name.toLowerCase().includes(search.toLowerCase())) :
        product

        if(sort === "1"){
            filter_product = filter_product.sort((a,b) => a.price - b.price)

        }
        else if(sort === "2"){
            filter_product = filter_product.sort((a,b) => b.price - a.price)
        }
        else if (sort === "3"){
            filter_product = filter_product.sort((a,b) => a.name.localeCompare(b.name))
        }
        else if (sort === "4"){
            filter_product = filter_product.sort((a,b) => b.name.localeCompare(a.name))
        }

    return (
        <div className="container">

            <div className="row">
                <h1 className="">{user_email}</h1>
                <h1 className="">Product </h1>
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
                        <option value="1">Price Ascending</option>
                        <option value="2">Price Descending</option>
                        <option value="3">Sort Name(A - Z)</option>
                        <option value="4">Sort Name(Z - A)</option>
                    </select>
              </div>
         

                <hr />
                {
                    filter_product.length > 0 ?

                        filter_product.map((a) => (
                            <div className="col-md-4 my-3 " key={a.id}>
                                <div class="card h-100">
                                    <img class="card-img-top" src={a.image} alt="Title" />
                                    <div class="card-body">
                                        <h4 class="card-title">{a.name}</h4>
                                        <p class="card-text">{a.brand}</p>
                                        <p class="card-text">{a.price}</p>
                                        <p class="card-text">{a.productCat}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            No Products Were Found With Name
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button>
                        </div>

                }
            </div>
        </div>
    )
}

export default Array
