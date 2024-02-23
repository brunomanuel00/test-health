import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assets/Doctor.png';
import image2 from '../assets/footer bg.png';
import image3 from '../assets/Doctor.png';


//esto se puedo hacer de forma dnamica pasandole las fotos como parametro en un arreglo y utilizando el metodo map
const MyCarousel = () => {
    return (

        <div className='carrusel'>
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block w-100 redondeo"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 redondeo"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 redondeo"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MyCarousel;