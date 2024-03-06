import React from 'react';

function Slider() {
    return (
        <div className='container'>
            <div className='row' style={{ textAlign: "justify" }}>
                <div className='col-md-4 mt-5'>
                    <h2>Measuring Instruments</h2>
                    <p>Vibration meters</p>
                    <p>Online Continues Monitoring System</p>
                    <p>Portable Analyser cum balancer</p>
                    <p>Ground & Building vibration Instruments</p>
                    <button className='btn btn-danger'>More Details</button>
                </div>
                <div className='col-md-8'>
                    <img src='Slider.png' className='img-fluid' alt='Slider' />
                </div>
            </div>
        </div>
    );
}

export default Slider;
