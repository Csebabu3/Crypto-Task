import React from 'react';

function Header() {
    return (
        <div className='container-fluid bg-light'>
            <div className='row'>
                <div className='col-md-2 col-sm-6' style={{ fontWeight: "bold" }}>
                    <p>For Training Enquiry</p>
                    <p>+91 8889086787</p>
                    <p>+91 8889 086787/64</p>
                </div>
                <div className='col-md-2 col-sm-6' style={{ fontWeight: "bold" }}>
                    <p>For other Services</p>
                    <p>+91 8889086787</p>
                </div>
                <div className='col-md-2 col-sm-6' style={{ fontWeight: "bold" }}>
                    <p>Email Us</p>
                    <p>Services@vibritech.co.in</p>
                </div>
                <div className='col-md-2 col-sm-6 mt-2'>
                    <img src='https://www.vibrotech.co.in/images/ISO-9001.webp' alt='ISO 9001' className='img-fluid' />
                    <img src='https://www.vibrotech.co.in/images/ISO-9001.webp' alt='ISO 9001' className='img-fluid' />
                </div>
                <div className='col-md-1 col-sm-6 mt-2'>
                    <img src='https://www.vibrotech.co.in/images/VMI-International-Sweden.jpg' alt='VMI International Sweden' style={{ maxWidth: "150px", height: "auto" }} className='img-fluid' />
                </div>
                <div className='col-md-1 col-sm-6 mt-2'>
                    <img src='https://www.vibrotech.co.in/images/Vibraquipo-SLU-Spain.jpg' alt='Vibraquipo SLU Spain' style={{ maxWidth: "150px", height: "auto", marginLeft: "60px" }} className='img-fluid' />
                </div>
            </div>
        </div>
    );
}

export default Header;
