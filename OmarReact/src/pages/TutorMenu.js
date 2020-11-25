import React from "react";
import {
    Link
} from "react-router-dom";
import "../css/main.css";

export default function TutorMenu() {
    return (
        <div>
            <header class="header-menu">
                <div class="div-menu">
                    <input type="checkbox" id="btn-menu" />
                    <label for="btn-menu"><img src="/img/menu (2).png" alt="This is the btn menu img" /></label>
                    <nav class="menu">
                        <ul>
                            <li><Link to="">Login</Link></li>
                            <li><Link to="">Rooms</Link></li>
                            <li><Link to="">Create new Room</Link></li>
                            <li><Link to="">Settings</Link></li>
                        </ul>
                    </nav>
                </div>

                <div class="user">
                    <p>Chepe</p>
                    <img src="/img/avatares/Avatar01.jpg" alt="avatar" />
                </div>
            </header>

            <div class="container-padre">

                <div class="card-menu">
                    <div class="card-header">
                        <img src="/img/newroom-icon.png" class="group" alt="group" />
                    </div>

                    <div class="card-name">
                        <p>ROOMS</p>
                    </div>

                    <div class="card-button">
                        <Link to="#">GO</Link>
                    </div>
                </div>


                <div class="card-menu">
                    <div class="card-header">
                        <img src="/img/score-icon.png" class="score" alt="score" />
                    </div>

                    <div class="card-name">
                        <p>SCORES</p>
                    </div>

                    <div class="card-button">
                        <Link to="#">VIEW</Link>
                    </div>
                </div>

            </div>

        </div>
    );
}