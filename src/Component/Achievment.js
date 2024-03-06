// import React from 'react'

// function Achievment() {
//     return (
//         <>
//             <div className='container mt-5'>
//                 <img src='Achievements.png' style={{ width: '1100px', height: "400px" }} />
//             </div>
//             <div className='container'>
//                 <img src='Credentials.png' style={{ width: "1100px", height: "300px" }} />
//             </div>
//             <div className='container mt-4'>
//                 <div className='row gap-4 ms-5' style={{color:"red", fontWeight:"bold"}}>
//                     <div className='col-md-2'>
//                         <h1>98%</h1>
//                         <p>CUSTOMER SATISFACTION</p>
//                     </div>
//                     <div className='col-md-2'>
//                         <h1>98%</h1>
//                         <p>TIMELY EMERGENCY CALL ATTENDANCE</p>
//                     </div>
//                     <div className='col-md-2'>
//                         <h1>98.5%</h1>
//                         <p>IN-SITU DYNAMIC BALANCING SUCCESS RATE</p>
//                     </div>
//                     <div className='col-md-2'>
//                         <h1>100%</h1>
//                         <p>AMC - TIMELY ATTENDANCE</p>
//                     </div>
//                     <div className='col-md-2'>
//                         <h1>73%</h1>
//                         <p>INCREASE IN CUSTOMER BASE</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Achievment

import React from 'react'

function Achievment() {
    return (
        <div className='container '>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='Achievements.png' className='img-fluid' alt='Achievements' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <img src='Credentials.png' className='img-fluid' alt='Credentials' />
                </div>
            </div>
            <div className='row mt-4 d-flex justify-content-center align-items-center' style={{color:"red"}}>
                <div className='col-md-2'>
                    <h1>98%</h1>
                    <p>CUSTOMER SATISFACTION</p>
                </div>
                <div className='col-md-2'>
                    <h1>98%</h1>
                    <p>TIMELY EMERGENCY CALL ATTENDANCE</p>
                </div>
                <div className='col-md-2'>
                    <h1>98.5%</h1>
                    <p>IN-SITU DYNAMIC BALANCING SUCCESS RATE</p>
                </div>
                <div className='col-md-2'>
                    <h1>100%</h1>
                    <p>AMC - TIMELY ATTENDANCE</p>
                </div>
                <div className='col-md-2'>
                    <h1>73%</h1>
                    <p>INCREASE IN CUSTOMER BASE</p>
                </div>
            </div>
        </div>
    )
}

export default Achievment

