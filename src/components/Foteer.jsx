// import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import spain from '../assets/Spain (ES).png'
import desp from '../assets/Vector.png'
import logo from '../assets/Company.png'

function CustomTitle() {
    return (
        <div className=' idioma'>
            <img src={spain} alt="Logo" width="25" height="25" className="d-inline-block align-text-top me-2" />
            <img src={desp} alt="Logo" width="10" height="7" className="d-inline-block align-text-center me-2" />

        </div>
    );
}
function Footer() {
    return (

        <nav class="footer navBarbg">
            <div className="container-fluid">
                <img src={logo} alt="LOGO" width="225" height="35" className=' mx-md-5' />

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-1 px-1 "><a className="nav-link a-link" href="#">Nuestra Compañía</a></li>
                        <li className="nav-item mx-1 px-1 "><a className="nav-link a-link " href="#">Nuestros Servicios</a></li>
                        <NavDropdown title={<CustomTitle />} id="basic-nav-dropdown" className=''>
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <li className="nav-item mx-1 px-1"><a className="nav-link a-link" href="#">Contáctanos</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Footer;