import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import Beer from './components/Beer'

class Home extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/allbeer">
                            <img src="images/beers.png" alt="first beers"/>
                            <h1> All Beers </h1> 
                            <p>Have you ever heard the phrase "it's always 5 'oclock somewhere"? Well, it's always 5 'oclock here at Iron Beers. Feast your eyes on all the beers of this virtual pub database.</p>
                        
                        </Link>
                    </li>
                    <li>
                        <Link to="/randombeer">
                            <img src="images/random-beer.png" alt="random beers"/>
                            <h1> Random Beer</h1>
                            <p>One beer, two beer, red beer, blue beer. If you're asking for a red or blue beer, maybe it's time to get home. For now, get your sober fix with a random beer. Click here to check out a random beer!</p>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/newbeer">
                            <img src="images/new-beer.png" alt="random beers"/>
                            <h1> New Beer</h1>
                            <p> All the fun of beer with 0 of the hangover the next day. And wait...There's more (beer)! Click here to add a new beer our yeasty collection.</p>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;