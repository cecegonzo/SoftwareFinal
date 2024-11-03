import React, { useState } from "react";
import './contact.css'

const contact =() => {
    return
{
<section className="contact">
    <form>
        <h2> Contact Form </h2>
        <div className="input-box">
            <label>Full Name</label>
            <input type="text" className="field" placeholder="Enter you name please" required />

        </div>
         <div className="input-box">
        <label>Email Adress</label>
        <input type="text" className="field" placeholder="Enter your email please" required />

        </div>
        <div className="input-box">
        <label>Your question?</label>
        <textarea name="" id="" className="field" placeholder="Enter your question" required></textarea>
    </div>
    <button type="submit">Send Message</button>
    </form>
</section>


}
}