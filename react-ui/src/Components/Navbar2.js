import React from "react";

class Navbar2 extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                                Menu <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand page-scroll" href="#page-top">
                                <i className="fa fa-play-circle"></i> <span className="light">The DMC:'</span> Dispensary Marketplace Community
                            </a>
                        </div>

                        {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                        <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                            <ul className="nav navbar-nav">
                                {/*<!-- Hidden li included to remove active class from about link when scrolled up past about section -->*/}
                                <li className="hidden">
                                    <a href="#page-top"></a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="#about">About</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        {/*<!-- /.navbar-collapse -->*/}
                    </div>
                    {/*<!-- /.container -->*/}
                </nav>
        );
    }
}

export default Navbar2;