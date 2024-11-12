import React, { useEffect, useState } from "react";;
import axios from "axios";

function UserDetails(){

    const [users,setUser] = useState([])

    useEffect(()=>{
        let url = "http://127.0.0.1:5000/api/users/all/user"
        axios.get(url)
        .then((res)=>setUser(res.data))
        .catch((err)=> console.log(err))
    },[]);

    return(
        <>
         <main className="user-details">
         <h1 ><a href="/" className="seller-page">DASHBOARD</a></h1>
        <section>
            <ul className="lists-merchant">
                {
                    users.map((user)=>(
                    <li key={user._id} className="inside-list">
                        <h3>{`Username : ${user.username}`}</h3>
                        <h3>{`Email : ${user.email}`}</h3>
                        <h3>{`Img : ${user.img}`}</h3>
                        <h3>{`Limit : ${user.limit}`}</h3>
                        <h3>{`Number : ${user.number}`}</h3>
                        <h3>{`Card : ${user.card}`}</h3>
                        <h3>{`CreatedAt : ${user.createdAt}`}</h3>
                        <h3>{`UpdatedAt : ${user.updatedAt}`}</h3>
                    </li>
                    ))
                }
            </ul>
        </section>
       </main>
        </>
    )
}

export default UserDetails;