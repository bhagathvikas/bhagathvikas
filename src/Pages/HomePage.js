import React from 'react';
import { faLinkedinIn,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> VIKAS BHAGATH</span>
                </h1>
                <p className="h-sub-text">
                I am a Mobile App Developer , and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success.I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.
                </p>
                <div className="icons">
                    <Link to= {{ pathname: "https://www.linkedin.com/in/vikas-bhagath-339385193/"}} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn}  className="icon lk"  />
                    </Link>
                    
                    <Link to={{ pathname: "https://github.com/bhagathvikas" }} target="_blank" className="icon-holder">
                    
                        
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                    <Link to={{pathname: "https://www.instagram.com/vikas.bhagath/"}} target="_balnk" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
