import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer-content container">
            <div className="footer-column">
                <h4>Little Fashion</h4>
                <p>Fashion is an instant language.</p>
            </div>
            <div className="footer-column">
                <h4>Quick Links</h4>
                <ul class="quick-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Follow Us</h4>
                <ul className="social-links">
                    <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer