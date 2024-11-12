import axios from "axios";
import React, { useEffect, useState } from "react";;


function Transaction(){

    const [transaction , setTransaction] = useState([])

    useEffect(()=>{
        let url = "http://127.0.0.1:5000/api/email/all/payments";
        axios.get(url)
        .then((res)=>setTransaction(res.data))
        .catch((err)=>console.error(err))
    },[])

    return(
        <>
        <main className="transaction-details">
        <h1 ><a href="/" className="seller-page">DASHBOARD</a></h1>
        <section>
            <ul className="lists-merchant">
                {
                    transaction.map((transaction)=>(
                    <li key={transaction._id} className="inside-list">
                        <h3>{`Email : ${transaction.to}`}</h3>
                        <h3>{`Subject : ${transaction.subject}`}</h3>
                        <h3>{`Amount : ${transaction.text}`}</h3>
                        <h3>{`CreatedAt : ${transaction.createdAt}`}</h3>
                        <h3>{`UpdatedAt : ${transaction.updatedAt}`}</h3>
                    </li>
                    ))
                }
            </ul>
        </section>
       </main>
        </>
    )
}

export default Transaction;