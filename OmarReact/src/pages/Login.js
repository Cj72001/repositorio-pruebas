import React from "react"
import {
    Link
} from "react-router-dom";
import "../css/main.css";

export default function Login() {
    return (
        <div>
            <div class="box">
                <img src="/img/user_icon.png" class="logo" alt="logo" />
                <h1>Login</h1>
                <form class="box-form" action="#" method="GET">
                    <label for="username">User Name</label>
                    <input type="text" maxlength="10" id="username" name="username" placeholder="Enter User Name" required />
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter Password" required pattern=".{5,10}" title="Write your password account of more than 5 digits" />
                    <input type="submit" value="ENTER" />
                    <Link to="forgottenp.html">Password Forgotten</Link>
                </form>
            </div>

            <div class="sidenav">
                <div class="colaboration-box">
                    <img src="/img/uca-logo.png" class="ucaLogo" alt="ucaLoco" />
                    <img src="/img/pmief-logo.png" class="pmifLogo" alt="pmifLogo" />
                </div>
            </div>
        </div>
    );
}