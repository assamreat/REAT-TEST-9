import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <Fragment>
            <div class="ripple-background">
                <div class="circle circle-xxlarge circle-shade1"></div>
                <div class="circle circle-xlarge circle-shade2"></div>
                <div class="circle circle-large circle-shade3"></div>
                <div class="circle circle-mediun circle-shade4"></div>
                <div class="circle circle-small circle-shade5"></div>
            </div>

            <div class="home-links">
                <Link to="/appellant/login" class="login-link appellant-link">
                    <p>Appellant Login</p>
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
                <Link to="/official/login" class="login-link reat-link">
                    <p>REAT Login</p>
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
            </div>
        </Fragment>
    );
};

export default Home;
