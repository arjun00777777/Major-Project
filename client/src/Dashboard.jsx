import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutAdmin, logoutMerchant, logoutUser } from "./Auth";
import { isAdminAuthenticated, isUserAuthenticated, isMerchantAuthenticated } from "./Auth";


function Dashboard(){

    const navigate = useNavigate();

    function handleClick(){
        logoutAdmin();
        logoutMerchant();
        logoutUser();

        navigate('/login')
        
    }

    return(
        <>
        <main className="dash-page">
        {/* <h1>Home Component</h1> */}
        <div className="dash-dash">
        <section className="content-edu ">
                <h2>Secure Transaction</h2>
            </section>
            <section className="nav-edu">
            <ul className="nav-links">
            {isAdminAuthenticated() || isMerchantAuthenticated() || isUserAuthenticated() ?
           <li><Link to={'/'} className="admin" >Dashboard</Link></li> : null}
           {isAdminAuthenticated() ? <li><Link to={'/admin'} className="admin" >Admin</Link></li> : null}
           {isAdminAuthenticated() || isMerchantAuthenticated() || isUserAuthenticated() ?
           <li><Link to={'/merchant/details'} className="admin"  >Merchant</Link></li> : null }
           {isAdminAuthenticated() || isMerchantAuthenticated() || isUserAuthenticated() ?
           <li><Link to={'/user/details'}  className="admin" >User</Link></li> : null }
           {isAdminAuthenticated() || isMerchantAuthenticated() || isUserAuthenticated() ?
           <li><Link to={'/transaction'}  className="admin" >Transaction</Link></li> : null}
           {!isAdminAuthenticated() && !isMerchantAuthenticated() && !isUserAuthenticated() ?
           <li><Link to={'/login'}  className="admin" >Login</Link></li> : null }
           {!isAdminAuthenticated() && !isMerchantAuthenticated() && !isUserAuthenticated() ?
           <li><Link to={'/register'} className="admin"  >Register</Link></li> : null }
           {isMerchantAuthenticated()?
           <li><Link to={'/email'}  className="admin" >Email</Link></li> : null}
           {isAdminAuthenticated() || isMerchantAuthenticated() || isUserAuthenticated() ?
           <li><a href="#" className="admin"  onClick={handleClick}>Logout</a></li>: null }
            </ul>
            </section>
        </div>

        </main>
        </>
    )
}

export default Dashboard;