import './Footer.css';
import logo from './logo-hres.png';

const Footer = ()=>{
    return (
        <footer className = "footer-container ">
            <div className = "text-center">
                <img src={logo} className = "footer-logo" alt="footer-logo"/>
                
            </div>
        </footer>
    )
}
export default Footer;