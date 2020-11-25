import React from "react";
import {
    Link
} from "react-router-dom";
import "../css/main.css";

export default function AdminstradorMenu() {
    return (
        <div>
            <header className="header-menu">
                <div className="div-menu">
                    <input type="checkbox" id="btn-menu" />
                    <label for="btn-menu"><img src="/img/menu (2).png" alt="btn-menu" /></label>
                    <nav className="menu">
                        <ul>
                            <li><Link to="container.html">Menu</Link></li>
                            <li><Link to="">Rooms</Link></li>
                            <li><Link to="">Create new Room</Link></li>
                            <li><Link to="">Exit</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="user">
                    <p>Chepe</p>
                    <img src="/img/avatares/Avatar01.jpg" alt="avatar" />
                </div>
            </header>

            <div className="container-padre">

                <div className="card-menu">
                    <div className="card-header">
                        <img src="/img/users-icon.png" className="group" alt="group" />
                    </div>

                    <div className="card-name">
                        <p>USERS</p>
                    </div>


                    <div className="card-button">
                        <Link to="users.html">GO</Link>
                    </div>
                </div>


                <div className="card-menu">
                    <div className="card-header">
                        <img src="/img/dashboard-icon.png" className="score" alt="score" />
                    </div>

                    <div className="card-name">
                        <p>DASHBOARD</p>
                    </div>

                    <div className="card-button">
                        <Link to="#">VIEW</Link>
                    </div>
                </div>


                <div className="card-menu">
                    <div className="card-header">
                        <img src="/img/score-icon.png" alt="group" />
                    </div>


                    <div className="card-name">
                        <p>SCORES</p>
                    </div>


                    <div className="card-button">
                        <Link to="#">VIEW</Link>
                    </div>
                </div>

                <div className="card-menu">
                    <div className="card-header">
                        <img src="/img/newroom-icon.png" className="group" alt="group" />
                    </div>


                    <div className="card-name">
                        <p>ROOMS</p>
                    </div>


                    <div className="card-button">
                        <Link to="rooms.html">GO</Link>
                    </div>
                </div>

                <div className="card-menu">
                    <div className="card-header">
                        <img src="/img/logoSettings.png" className="group" alt="group" />
                    </div>


                    <div className="card-name">
                        <p>SETTINGS</p>
                    </div>


                    <div className="card-button">
                        <Link to="#">GO</Link>
                    </div>
                </div>

            </div>

        </div>
    );
}
