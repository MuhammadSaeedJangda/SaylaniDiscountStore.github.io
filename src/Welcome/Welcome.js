import { Link } from 'react-router-dom';
import "./Welcome.css"

function WelcomeScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <img src="../Logo.png" alt="Welcome Image" />
      <h1>SAYLANI WELFARE</h1>
      <p>ONLINE DISCOUNT STORE</p>
      <Link to="/signup"><button>Start Shopping</button></Link>
    </div>
  );
}

export default WelcomeScreen;
