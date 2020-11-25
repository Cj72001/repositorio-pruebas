import React from "react-router-dom";
import {
    Link
} from "react-router-dom";
import "../css/main.css";

export default function Rooms() {
    return (
        <div>
            <header class="header-menu">
                <div class="div-menu">
                    <input type="checkbox" id="btn-menu" />
                    <label for="btn-menu"><img src="/img/menu (2).png" alt="This is the btn menu img" /></label>
                    <nav class="menu">
                        <ul>
                            <li><Link href="">Login</Link></li>
                            <li><Link href="">Rooms</Link></li>
                            <li><Link href="">Create new Room</Link></li>
                            <li><Link href="">Settings</Link></li>
                        </ul>
                    </nav>
                </div>

                <div class="user">
                    <p>Chepe</p>
                    <img src="/img/avatares/Avatar01.jpg" alt="avatar" />
                </div>

            </header>

            <h1 style={{ textAlign: "center" }}>ROOMS</h1>
            <div class="container-rooms">


                <div class="card-rooms">
                    <div class="card-rooms-header">
                        <h3>ROOM NAME</h3>
                    </div>

                    <div class="card-rooms-button enter">
                        <Link href="#">Enter</Link>
                    </div>

                    <div class="card-rooms-button end">
                        <Link href="#">End</Link>
                    </div>
                </div>

                <div class="card-rooms">
                    <div class="card-rooms-header">
                        <h3>ROOM NAME</h3>
                    </div>

                    <div class="card-rooms-button enter">
                        <Link href="#">Enter</Link>
                    </div>

                    <div class="card-rooms-button end">
                        <Link href="#">End</Link>
                    </div>
                </div>

                <div class="card-rooms">
                    <div class="card-rooms-header">
                        <h3>ROOM NAME</h3>
                    </div>

                    <div class="card-rooms-button enter">
                        <Link href="#">Enter</Link>
                    </div>

                    <div class="card-rooms-button end">
                        <Link href="#">End</Link>
                    </div>
                </div>

                <div class="card-rooms">
                    <div class="card-rooms-header">
                        <h3>ROOM NAME</h3>
                    </div>

                    <div class="card-rooms-button enter">
                        <Link href="#">Enter</Link>
                    </div>

                    <div class="card-rooms-button end">
                        <Link href="#">End</Link>
                    </div>
                </div>

                <div class="card-rooms">
                    <div class="card-rooms-header">
                        <h3>ROOM NAME</h3>
                    </div>

                    <div class="card-rooms-button enter">
                        <Link href="#">Enter</Link>
                    </div>

                    <div class="card-rooms-button end">
                        <Link href="#">End</Link>
                    </div>
                </div>

                <div class="card-rooms">
                    <div class="card-rooms-header">
                        <h3>ROOM NAME</h3>
                    </div>

                    <div class="card-rooms-button enter">
                        <Link href="#">Enter</Link>
                    </div>

                    <div class="card-rooms-button end">
                        <Link href="#">End</Link>
                    </div>
                </div>

            </div>

            <div class="room-pages" style={{ display: "none" }}>
                <nav class="pages">
                    <ul>
                        <li><Link href="#">1</Link></li>
                        <li><Link href="#">2</Link></li>
                        <li><Link href="#">3</Link></li>
                        <li><Link href="#">4</Link></li>
                    </ul>
                </nav>
            </div>

            <div class="card-button">
                <Link href="RoomCreation.html">Add Room</Link>
            </div>

        </div>
    );
}