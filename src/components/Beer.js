import React, { Component } from 'react';
import Header from './Header'
import {
   Link
  } from "react-router-dom";

class Beer extends Component {



    //this passes the info from app.js about the data into here...searches the data for the respective property //

    showTheBeers = (aParameter) => { 
        return aParameter.map(eachBeer => {
          return (
          <li>
          <Link key={eachBeer} to={`/beers/${eachBeer._id}`}>
          <h2>{eachBeer.name}
          </h2>
          <img src={eachBeer.image_url } alt={eachBeer.name}/>
          <p>{eachBeer.tagline}</p>
          <p>{eachBeer.contributed_by}</p>
          </Link>
          </li>)
        })
      }


    


    render() {
        console.log(this.props)
        return (
            <div>
                 
                <Header/>
                {this.showTheBeers(this.props.allBeers)}
            </div>
        );
    }
}

export default Beer;