import React from 'react';
import github from "../assets/github.png"
import linked from "../assets/linked.png"
function Footer(){

    return( 
        <div className= "myfooter"> 
          <div className="container">
           
            <div className="row">
              <div className="col-md-12 py-3">
                <div className="mb-5 flex-center">

                  
                  
                  <a href="https://github.com/Undiess" target="_blank" rel="noopener noreferrer" className="tw-ic">
                    <img className= "gitlogo"src={github}></img>
                  </a>
                 
                  <a href="https://www.linkedin.com/in/andy-nguyen-4422011a4/" target="_blank" rel="noopener noreferrer" className="li-ic">
                  <img className= "gitlogo"src={linked}></img>
                  </a>

                  

                </div>
              </div>
            </div>
          </div>
          </div>
    )
}
export default Footer 