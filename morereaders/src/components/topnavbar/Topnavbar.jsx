import { Home, Notifications, Chat, Person } from '@mui/icons-material';
import './topnavbar.css';

export default function Topnavbar() {
    return (
        <>
            <nav class="menu" id="nav">
                <span class="nav-item active">
                    <span class="icon">
                        <Home />
                    </span>
                    <a href="#">Home</a>
                </span>
                <span class="nav-item">
                    <span class="icon">
                        <span className="subicon">2</span>
                        <Chat />
                    </span>
                    <a href="#">Chat</a>
                </span>
                <span class="nav-item">
                    <span class="icon">
                        <span class="subicon">13</span>
                        <Notifications className="notificationIcon" />
                    </span>
                    <a href="#">Notifications</a>
                </span>
                <span class="nav-item">
                    <span class="icon">
                        <i data-feather="star"></i>
                    </span>
                    <a href="#">Favorites</a>
                </span>
                <span class="nav-item">
                    <span class="icon">
                        <span class="subicon">1</span>
                        <Person />
                    </span>
                    <a href="#">Your Profile</a>
                </span>
            </nav>
            <div className="profileImage">
                <img src="/assets/intro.png" alt="" className="profileImageIcon" />
            </div>
        </>
    );
}