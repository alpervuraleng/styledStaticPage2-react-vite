import './navbar.css';
import icon from '../assets/react-icon-small.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={icon}
                width="29"
                height="29">
            </img>
            <h1 className="mainTitle">ReactFacts</h1>
            <h2 className="subtitle">React Course - Project 1</h2>
        </div>
    );
}