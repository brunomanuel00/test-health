// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import curita from "../assets/curita.png"
import botiquin from "../assets/botiquin.png"
import cardio from "../assets/cardiograma.png"
import pastillas from "../assets/pastillas.png"

function Cards() {
    return (
        <div className='container text-center mt-lg-5 pt-lg-5 '>
            <div className='row mt-lg-5 pt-lg-5 justify-content-arround'>
                <div className='col-6 col-lg-3'>
                    <Card style={{ width: '14rem', alignItems: 'center', paddingTop: "12px" }} className='Cards'>
                        <div className='cnt-card' >
                            <Card.Img variant="top" src={curita} className='cards-img' />
                        </div>
                        <Card.Body>
                            <Card.Title>Atención de{<br />} lesiones</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-6 col-lg-3'>
                    <Card style={{ width: '14rem', alignItems: 'center', paddingTop: "12px" }} className='Cards'>
                        <div className='cnt-card'>
                            <Card.Img variant="top" src={pastillas} className='cards-img' />
                        </div>
                        <Card.Body>
                            <Card.Title>Prebas de {<br />}drogas y alcohol</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-6 col-lg-3'>
                    <Card style={{ width: '14rem', alignItems: 'center', paddingTop: "12px" }} className='Cards'>
                        <div className='cnt-card'>
                            <Card.Img variant="top" src={cardio} className='cards-img' />
                        </div>
                        <Card.Body>
                            <Card.Title>Exámenes {<br />} físicos</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-6 col-lg-3'>
                    <Card style={{ width: '14rem', alignItems: 'center', paddingTop: "12px" }} className='Cards'>
                        <div className='cnt-card'>
                            <Card.Img variant="top" src={botiquin} className='cards-img' />
                        </div>
                        <Card.Body>
                            <Card.Title>Medicina {<br />} preventiva</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>


        </div>

    );
}

export default Cards;