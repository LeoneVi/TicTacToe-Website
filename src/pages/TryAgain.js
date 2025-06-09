import '../styles/Welcome.css';
import {useNavigate} from "react-router-dom";


export default function Welcome() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/game');

    return (
        <div className="Welcome">
            <h1>Try again? 🚀</h1>
            <button onClick={handleClick}>Start</button>
        </div>
    );
}
