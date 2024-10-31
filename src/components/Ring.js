import React from 'react'


const Ring = ({img,description1, description2 }) => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-3">
                <ul className="nav flex-column sidebar">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Introduction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">How we work?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Capabilities</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-6 d-flex">
                <img src={img} alt="Fashion" classNmae="img-fluid rounded"/>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                <h2 className="fw-bold mb-3"><span classNmae="text-highlight">Good</span> Design <br/> Ideas for <span
                        className="text-highlight">your</span> fashion</h2>
                <p className="text-muted mb-3">
                {description1}
                </p>
                <p className="text-muted mb-4">
                {description2}
                </p>
                <a href="#" className="text-uppercase fw-bold learn-more">Learn more about us</a>
            </div>
        </div>
    </div>
  )
}

export default Ring