import React from 'react'

function Vibrotech() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <img src='data:image/png;base64,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' style={{ width: "150px", height: "150px" }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto gap-3" style={{fontWeight:"bold"}}>
                            <li className="nav-item">
                                <a className="btn btn-danger" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Industries We serve</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Career</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Vibrotech
