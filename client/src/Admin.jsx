import axios from "axios";
import React, { useEffect, useState } from "react";


function Admin(props){

    const [activeuser,setActiveuser] = useState(false);
    const [activemerchant,setActivemerchant] = useState(false);

    const initialUserValues = {img:"",name:"",email:"",limit:"",number:"",card:""}
    const initialMerchantValues = {img:"",name:"",email:"",limit:"",number:"",card:""}

    const [inputUser,setInputuser] = useState(initialUserValues);
    const [imageuser,setImageuser] = useState();
    const [click,setClick] = useState(false);


    const [inputMerchant,setInputmerchant] = useState(initialMerchantValues);
    const [imagemerchant,setImagemerchant] = useState();
    const [click1,setClick1] = useState(false);

    function handleUser(){
        setActiveuser(true);
    }

    function hanldeMerchant(){
        setActivemerchant(true)
    }

    function handleChange(e){
        const {name,value} = e.target;
        setInputuser({...inputUser,[name]:value})
    }

    function handleImagechange(e){
        setImageuser(e.target.files[0])
        console.log(e.target.files[0].name)
        setInputuser({...inputUser,[e.target.name] : e.target.files[0].name})
    }

    function handleSubmit(e){
        e.preventDefault();
        setImageuser("")
        setClick(true)
    }


    function handleChangemerchant(e){
        const {name,value} = e.target;
        setInputmerchant({...inputMerchant,[name]:value})
    }

    function handleImagemerchantchange(e){
        setImagemerchant(e.target.files[0])
        console.log(e.target.files[0].name)
        setInputmerchant({...inputMerchant,[e.target.name] : e.target.files[0].name})
    }

    function handleSubmitmerchant(e){
        e.preventDefault();
        setImagemerchant("")
        setClick1(true)
    }

    if(click){
        let url = "http://127.0.0.1:5000/api/users/new/register"
        axios.post(url,{
            username : inputUser.name,
            email : inputUser.email,
            img:inputUser.img,
            limit : inputUser.limit,
            number : inputUser.number,
            card : inputUser.number
        })
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
    }

    if(click1){
        let url = "http://127.0.0.1:5000/api/merchants/new/register"
        axios.post(url,{
            username : inputMerchant.name,
            email : inputMerchant.email,
            img:inputMerchant.img,
            limit : inputMerchant.limit,
            number : inputMerchant.number,
            card : inputMerchant.number
        })
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
    }

    return(
        <>
        <main className="dash-page" >
        <h1><a href="/" className="seller-page">DASHBOARD</a></h1>
            <section style={{textAlign:"center"}} className="two-btns">
                <button onClick={handleUser}>Add User</button>
                <button onClick={hanldeMerchant}>Add Merchant</button>
            </section>
            
            {
                activeuser ? 
            <section>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-inputs">
                    <div>
                        {imageuser ? <img src={URL.createObjectURL(imageuser)} alt="loading" width={200} height={200} /> : null}
                        <input type="file" className="img" name="img" onChange={handleImagechange}/>
                    </div>

                   
                    <input type="text" className="name" placeholder="Name" value={inputUser.name} id="name" name="name" onChange={handleChange} />

                    <br/>
                    <input type="text" className="email" value={inputUser.email} id="email" name="email" placeholder="Email"
                    onChange={handleChange} />
<br/>
                    
                    <input type="number" className="limit" value={inputUser.limit} id="limit" name="limit" placeholder="Amount-Limit"
                    onChange={handleChange} />

<br/>
                    <input type="number" className="number" value={inputUser.number} id="number" name="number" placeholder="Acc-Num" 
                    onChange={handleChange} />
<br/>
                  
                    <input type="number" className="card" value={inputUser.card} id="card" name="card" placeholder="Card-Num" 
                    onChange={handleChange} />
<br/>
                    <button className="btn-submit">Submit</button>
                    </div>
                </form>
            </section> :null
            }



            {
                activemerchant ?
            <section>
                <form onSubmit={handleSubmitmerchant} className="form">
                    <div className="form-inputs">
                    <div>
                        {imagemerchant ? <img src={URL.createObjectURL(imagemerchant)} alt="loading" width={200} height={200} /> : null}
                        <input type="file" className="img" name="img" onChange={handleImagemerchantchange}/>
                    </div>

                    <br/>
                    <input type="text" className="name" value={inputMerchant.name} id="name" name="name" onChange={handleChangemerchant} />

                    <br/>
                    <input type="text" className="email" value={inputMerchant.email} id="email" name="email" placeholder="Email"
                    onChange={handleChangemerchant} />

<br/>
                    <input type="number" className="limit" value={inputMerchant.limit} id="limit" name="limit" placeholder="Amount-Limit"
                    onChange={handleChangemerchant} />

<br/>
                    <input type="number" className="number" value={inputMerchant.number} id="number" name="number" placeholder="Acc-Num" 
                    onChange={handleChangemerchant} />

<br/>
                    <input type="number" className="card" value={inputMerchant.card} id="card" name="card" placeholder="Card-Num" 
                    onChange={handleChangemerchant} />
<br/>
                    <button className="btn-submit">Submit</button>
                    </div>
                </form>
            </section> : null
            } 
        </main>
        </>
    )
}

export default Admin;