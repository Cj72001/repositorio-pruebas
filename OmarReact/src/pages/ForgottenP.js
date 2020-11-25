import React from "react";
import {
    Link
} from "react-router-dom";
import "../css/main.css";

export default function ForgottenP() {
    return (
        <div>
            <div class="box">
                <img src="/img/logoSettings.png" class="logo" alt="logo" />
                <h1>Password Recovery</h1>
                <form class="box-form" action="#" method="GET">
                    <label for="username">User Name</label>
                    <input type="text" id="username" placeholder="Enter User Name" required />
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter Recovery Email" required />
                    <input type="submit" value="send email" />
                    <Link to="/login">Login</Link>
                </form>
            </div>

        </div>
    );
}