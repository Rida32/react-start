import React from 'react'


const Retail = ({img,description }) => {
  return (
    <div className="row section-container m-0 p-0 mt-3">
            <div className="col-md-6 p-0 d-flex">
                <img src={img} alt="dress" className="img-fluid rounded shadow-sm"/>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h2 className="fw-bold mb-3">
                    <span className="highlight" style={{color: "red", fontWeight: "extraBold",}}>Retail</span> shop owners
                </h2><br/>
                <p className="text-muted mb-6">
                    {description}
                </p><br/>
                <p><a href="#" classNmae="quick-links" target="_blank">
                        EXPLORE PRODUCTS
                        <span className="arrow">→</span>
                    </a>
                </p>
            </div>
        </div>
  )
}

export default Retail