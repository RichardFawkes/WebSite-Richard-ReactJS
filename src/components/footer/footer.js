import React from 'react';
import './footer.css';



const Footer = () => (
    
    <footer class="footer-distributed">
    
                <div class="footer-left">
    
                    {/* <h3>Company<span>logo</span></h3> */}
    
                    <p class="footer-links">
                        <a href="/home" class="link-1">Home</a>
                        
                        <a href="#">Blog</a>
                    
                    
                        
                        <a href="/contact">Contact</a>
                    </p>
    
                    <p class="footer-company-name">Richard Web Developer © <span id="year">{new Date().getFullYear()}</span></p>
                </div>
    
                <div class="footer-center">
    
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span> Jd Europa</span> Sao Paulo - SP</p>
                    </div>
    
                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+55 (11) 97441-5837</p>
                    </div>
    
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:richard.chekpoint@gmail.com">richard.web@singular.com</a></p>
                    </div>
    
                </div>
    
                <div class="footer-right">
    
                    <p class="footer-company-about">
                        <span>Sobre a empresa</span>
                        Richard Geraldo, desenvolvedor web. Sou apaixonado por tecnologia. Tenho mais de 10 anos de experiência com desenvolvimento front end e back end.
                    </p>
    
                    <div class="footer-icons">
    
                        <a href="#"> <i class="fab fa-facebook-square"></i></a>
                        <a href="#"><i class="fab fa-twitter-square"></i></a>
                        <a href="https://www.linkedin.com/in/richardfdev/"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/RichardFawkes"><i class="fab fa-github-square"></i></a>
    
                    </div>
    
                </div>
    
            </footer>
  

);

export default Footer;
