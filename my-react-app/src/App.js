import React from 'react';
import './App.css';

function App() {
    return (

            <div>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src="https://static.wikia.nocookie.net/worldofmayhem_gamepedia_en/images/a/a1/Foghorn_Leghorn_%28artwork%29.png" height="70"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Resume</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>

                {/*<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="https://i.ytimg.com/vi/KvZT3etZIsw/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://burst.shopifycdn.com/photos/laptop-from-above.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://traveloregon.com/wp-content/uploads/2016/10/MtHoodVillages-07-2000.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>*/}

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://traveloregon.com/wp-content/uploads/2016/10/MtHoodVillages-07-2000.jpg" className="d-block w-100" alt="Goodbye"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://burst.shopifycdn.com/photos/laptop-from-above.jpg" className="d-block w-100" alt="Hello"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ytimg.com/vi/KvZT3etZIsw/maxresdefault.jpg" className="d-block w-100" alt="Who Cares"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="container pt-4">
                    <div class="row">
                        <div class="col-lg">
                            <h3 class="mb-4">Civilian Life</h3>
                            <img src="https://avatars.githubusercontent.com/u/21879454?v=4"
                                 className="img-fluid mb-4 rounded"/>
                            <p>Welcome to NajebJohnson.com where you can learn all about software developing and life transitioning out of the Marine Core.</p>
                        </div>
                        <div className="col-lg">
                            <h3 class="mb-4">Coding for Money</h3>
                            <p>Coding for money is all about learning to freelance as a software developer, journey towards the coolest techniques in software development for Cloud platforms such as AWS, Azure, and Google Cloud</p>
                        </div>
                        <div className="col-lg">
                            <h3 class="mb-4">Upcoming Video Tutorials</h3>
                            <a href="#" className="list-group-item list-group-item-action">
                                <strong className="text-primary">Coding</strong>: Programming Languages to learn for 2022?
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <strong className="text-success">Money</strong>: Is Crypto Currency still a worthy investment?
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <strong className="text-success">Coding</strong>: Certifications, which ones will land the best consulting opportunity?
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <strong class="text-success">Money</strong>: Invest or Save, which is the best bang in the long term
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <strong className="text-primary">Health</strong>: How to maximize your workout routine>
                            </a>
                        </div>
                    </div>

                </div>

                <div>
                    <h1 class="display-3 text-center text-muted my-4">Videos</h1>
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="card mb-3">
                                <img src="https://media.vanityfair.com/photos/5420615f2e32fc85609d7542/master/w_1272,h_834,c_limit/image.jpg" class="card-img-top" alt="Yes"/>
                                <div className="card-body">
                                    <h5 className="card-title">A Must See!</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card mb-3">
                                <img
                                    src="https://cdn.vox-cdn.com/thumbor/4SO86WrYXSIe9Cupmy2pv9LazCM=/0x0:1080x608/1200x800/filters:focal(454x218:626x390)/cdn.vox-cdn.com/uploads/chorus_image/image/64830063/lionsgate_2000890_100040_Full_Image_GalleryBackground_en_US_1484349161702._SX1080_.0.jpg"
                                    className="card-img-top" alt="Yes"/>
                                <div className="card-body">
                                    <h5 className="card-title">Yet Another Classic</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card mb-3">
                                <img
                                    src="https://cdn.kpbs.org/dims4/default/ea10364/2147483647/strip/true/crop/1240x651+80+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fkpbs-brightspot.s3.amazonaws.com%2Fimg%2Fphotos%2F2012%2F12%2F31%2F03.jpg"
                                    className="card-img-top" alt="Yes"/>
                                <div className="card-body">
                                    <h5 className="card-title">Epic Blacksploitation</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">

                        </div>
                        <div className="col-md-6 col-lg-4">

                        </div>
                        <div className="col-md-6 col-lg-4">

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default App;
