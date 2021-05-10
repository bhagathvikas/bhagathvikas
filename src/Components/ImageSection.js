import React from 'react';


function ImageSection() {
    return (
        <div className="ImageSection">
            
            <div className="about-info">
                <h4>I am<span> VIKAS BHAGATH </span></h4>
                <p className="about-text">
                   
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Phone NO</p>
                        <p>Email Id</p>
                    </div>
                    <div className="right-section">
                        <p>: VIKAS BHAGATH</p>
                        <p>: 19</p>
                        <p>: Indian</p>
                        <p>: English, Telugu , Hindi</p>
                        <p>: Hyderabad Telangana</p>
                        <p>: 7989948209 </p>
                        <p>: vikasbhagath@gmail.com </p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
