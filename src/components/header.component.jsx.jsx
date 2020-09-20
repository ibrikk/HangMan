import React from 'react';
import './HomePage.styles.css';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
    return(
        <div>
        <button onClick={() => {
            history.push('/marvel');
        }}
            >
             Marvel </button>
        <button onClick={() => {
            history.push('/dc');
        }}
        >
         DC </button>
        </div>
    );
}

export default withRouter(Header);