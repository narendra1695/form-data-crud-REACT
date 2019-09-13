import React from 'react';

//this component as the name suggests, represents the heading of the app
const Header = props => {
    return (
        <header>
            <div className="container-fluid pl-0 pr-0">
                <h4 className="text-center text-white bg-primary py-5">Form Data App | <span className="text-uppercase font-weight-bold">react</span></h4>
            </div>
        </header>
    );
};

export default Header;
