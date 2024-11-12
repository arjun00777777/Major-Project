import React, { useState } from 'react';
import axios from 'axios';

function EmailForm() {
    const [emailData, setEmailData] = useState({ to: '', subject: '', text: '' });
    const [emaildata,setEmaildata] = useState();
    const [send,setSend] = useState(false);

    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/api/send/mail', emailData)
            .then(response => setEmailData(JSON.parse(response.config.data)))
            .catch(error => console.error(error));

            setSend(true)
    };

    if(send){
        axios.post('http://127.0.0.1:5000/api/email/save/data', {
            to : emailData.to,
            subject : emailData.subject,
            text : emailData.text
        })
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }

    return (
        <main className='email-page'>
            <h1 ><a className="seller-page" href="/">DASHBOARD</a></h1>
        <form className='email-form' onSubmit={handleSubmit}>
              <div className="email-inputs">
            <input type="email" name="to" placeholder='Email' value={emailData.to} onChange={handleChange} />
            <br/>
            <input type="text" name="subject" placeholder='Subject' value={emailData.subject} onChange={handleChange} />
            <br/>
            <textarea name="text" value={emailData.text} onChange={handleChange} placeholder='Enter-Text' />
            <br/>
            <button type="submit" className='email-submit'>Send Email</button>
            </div>
        </form>
        </main>
    );
}

export default EmailForm;
