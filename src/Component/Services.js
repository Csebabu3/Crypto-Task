import React from 'react';

function Services() {
    return (
        <div className='container mt-2'>
            <h2 style={{textAlign:"center"}}>Our Services</h2>
            <div className='row' style={{borderTopRightRadius:"20px"}}>
                <div className='col-md-4 col-sm-6 shadow mb-4'>
                    <div className="card">
                        <img className="card-img-top" src="https://www.vibrotech.co.in/images/condition.webp" alt="Card image cap" style={{height:"200px"}}/>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 shadow mb-4'>
                    <div className="card">
                        <img className="card-img-top" src="https://www.vibrotech.co.in/images/vibration%20tiny.jpg" alt="Card image cap"  style={{height:"200px"}}/>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 shadow mb-4'>
                    <div className="card">
                        <img className="card-img-top" src="https://www.vibrotech.co.in/images/instruments.webp" alt="Card image cap" style={{height:"200px"}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
