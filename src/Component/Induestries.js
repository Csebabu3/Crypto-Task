import React from 'react';

function Industries() {
    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-md-3 mb-4'>
                    <div className="card">
                        <div className="card-body" style={{backgroundColor:"red"}}>
                            <h5 className="card-title p-4 text-white">Pharmoceuticals</h5>
                        </div>
                        <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2022/8/GU/NY/SK/5038817/vibration-analysis-consultancy-500x500.jpg" alt="Card image cap" />
                    </div>
                </div>
                <div className='col-md-3 mb-4'>
                    <div className="card">
                        <div className="card-body" style={{backgroundColor:"red"}}>
                            <h5 className="card-title text-white p-4">Shipping</h5>
                        </div>
                        <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2022/8/GU/NY/SK/5038817/vibration-analysis-consultancy-500x500.jpg" alt="Card image cap" />
                    </div>
                </div>
                <div className='col-md-3 mb-4'>
                    <div className="card">
                        <div className="card-body" style={{backgroundColor:"red"}}>
                            <h5 className="card-title text-white p-4">oil & Gas Production</h5>
                        </div>
                        <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2022/8/QL/IG/HZ/5038817/vibration-measuring-systems-analysis-services-500x500.webp" alt="Card image cap" />
                    </div>
                </div>
                <div className='col-md-3 mb-4'>
                    <div className="card">
                        <div className="card-body" style={{backgroundColor:"red"}}>
                            <h5 className="card-title text-white p-4">Engineering Induestries</h5>
                        </div>
                        <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2022/8/GU/NY/SK/5038817/vibration-analysis-consultancy-500x500.jpg" alt="Card image cap" />
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row bg-danger p-4 rounded' >
                    <div className='col-md-6 text-white'>
                        <h2>WE ARE ALWAYS THERE TO HELP</h2>
                        <p>Get in touch with us today</p>
                    </div>
                    <div className='col-md-6 d-flex align-items-center justify-content-md-end mt-3 gap-3'>
                        <button className='btn btn-light'>Email Us</button>
                        <button className='btn btn-danger' style={{ border: "1px solid white" }}>Send Enquiry</button>
                    </div>
                </div>
            </div>
            <div className='container mt-5 bg-dark text-white p-4 rounded'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h6 style={{ textDecoration: "underline", textDecorationColor: "red" }}>INFORMATION</h6>
                        <ul>
                            <li>Home</li>
                            <li>Career</li>
                            <li>About us</li>
                            <li>Contact Us</li>
                        </ul>
                        <h6 style={{ textDecoration: "underline", textDecorationColor: "red" }}>CONDITION MONITORING SERVICES</h6>
                        <ul>
                            <li>Home</li>
                            <li>Career</li>
                            <li>About us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h6 style={{ textDecoration: "underline", textDecorationColor: "red" }}>VIBRATION INSTRUMENTS</h6>
                        <ul>
                            <li>Home</li>
                            <li>Career</li>
                            <li>About us</li>
                            <li>Contact Us</li>
                        </ul>
                        <h6 style={{ textDecoration: "underline", textDecorationColor: "red" }}>TRAINING CERTIFICATION</h6>
                        <ul>
                            <li>Home</li>
                            <li>Career</li>
                            <li>About us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h6 style={{ textDecoration: "underline", textDecorationColor: "red" }}>INDUSTRIES WE SERVE</h6>
                        <ul>
                            <li>Home</li>
                            <li>Career</li>
                            <li>About us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h6 style={{ textDecoration: "underline", textDecorationColor: "red" }}>GET IN TOUCH</h6>
                        <ul>
                            <li>Home</li>
                            <li>Career</li>
                            <li>About us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 text-danger'>
                        @2024 Vibritech consult and training private limited.All right Reserved
                    </div>
                    <div className='col-md-2 d-flex justify-content-end'>
                        <i className="fa fa-facebook ms-4" aria-hidden="true"></i>
                        <i className="fa fa-youtube-play ms-4" aria-hidden="true"></i>
                        <i className="fa fa-linkedin ms-4" aria-hidden="true"></i>
                    </div>
                    <div className='col-md-4 text-success'>
                        Designed By Cryptography Solution
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industries;
