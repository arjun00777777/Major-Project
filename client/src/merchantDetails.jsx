import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function MerchantDetails(){

    const [merchant,setMerchant] = useState([])

    useEffect(()=>{
        let url = "http://127.0.0.1:5000/api/merchants/all/merchants"
        axios.get(url)
        .then((res)=>setMerchant(res.data))
        .catch((err)=> console.log(err))
    },[]);

    return(
        <>
       <main className="merchant-details">
        <h1 ><a href="/" className="seller-page">DASHBOARD</a></h1>
        <section >
            <ul className="lists-merchant">
                {
                    merchant.map((merchant)=>(
                    <li key={merchant._id} className="inside-list">
                        <h3>{`Username : ${merchant.username}`}</h3>
                        <h3>{`Email : ${merchant.email}`}</h3>
                        <h3>{`Img : ${merchant.img}`}</h3>
                        <h3>{`Limit : ${merchant.limit}`}</h3>
                        <h3>{`Number : ${merchant.number}`}</h3>
                        <h3>{`Card : ${merchant.card}`}</h3>
                        <h3>{`CreatedAt : ${merchant.createdAt}`}</h3>
                        <h3>{`UpdatedAt : ${merchant.updatedAt}`}</h3>
                    </li>
                    ))
                }
            </ul>
        </section>
       </main>
        </>
    )
}

export default MerchantDetails;