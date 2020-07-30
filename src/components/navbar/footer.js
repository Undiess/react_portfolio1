import React from 'react';

function Footer(){

    return( 
        <div className= "myfooter"> 
          <div className="container">
           
            <div className="row">
              <div className="col-md-12 py-3">
                <div className="mb-5 flex-center">

                  
                  <a href="https://www.facebook.com/Andiess/" target="_blank" rel="noopener noreferrer" className="fb-ic">
                    <i className="fab fa-facebook-f fa-lg orange-text mr-md-5 mr-3 fa-2x"></i>
                  </a>
                  
                  <a href="https://github.com/Undiess" target="_blank" rel="noopener noreferrer" className="tw-ic">
                    <i className="fab fa-github fa-lg orange-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                 
                  <a href="https://www.linkedin.com/in/andy-nguyen-4422011a4/" target="_blank" rel="noopener noreferrer" className="li-ic">
                    <i className="fab fa-linkedin-in fa-lg orange-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
    )
}
export default Footer 