import React from 'react'

export default function index() {
    return (
        <div className="mini container-fluid">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/carousel/00.jpg" alt="First slide"/>
                <div class="carousel-caption">
                    <h5>Welcome to Stained Art Glass Denver</h5>
                    <p> Ramazan Kayacan &copy; 2021 </p>
                </div>
            </div>
                { Array.from({length:20}).map( (n,i) => {
                    return <div className="carousel-item">
                        <img className="d-block w-100" src={ "https://raw.githubusercontent.com/attila5287/stainedglassimg/main/carousel/" + i + ".jpg" } alt={"no "+ i + " slide" } />
                        <div class="carousel-caption">
                            <h5> References, awards and work</h5>
                            <p>&middot; Stained Art Glass Denver, Ramazan Kayacan</p>
                        </div>
                    </div>
            })}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>  
        </div>
    )
}
