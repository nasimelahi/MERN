import React, { Component } from 'react';



class AppNavbar extends Component{
    

    render(){
        return(
        <div>
           <nav className="navbar mb-5 navbar-dark bg-dark navbar-expand-lg">
               <div className="container">
                <a className="navbar-brand" href="#">Shopping List</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href={"https://github.com/nasimelahi/MERN"}>Github</a>
                            </li>
                        </ul>
                    </div>
               </div>
           </nav>
        </div>
        )
    }


}

  export default AppNavbar;