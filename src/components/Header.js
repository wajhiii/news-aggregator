import React from 'react';

function Header() {
  return (
    <header className="tech-header header">
            <div className="container-fluid">
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="tech-index.html"></a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">News Api</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/home">Gadgets</a>
                            </li>                   
                            <li className="nav-item">
                                <a className="nav-link" href="/home">Videos</a>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </div>
        </header>
  );
}

export default Header;