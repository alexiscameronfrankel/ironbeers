import React, { Component } from 'react';
import Header from './Header'

class Newbeers extends Component {

    showTheBeers = () => {
        return this.state.beers.map(eachBeer => {
          return (<li>
          <h2>{eachBeer.name}
          </h2>
          <img src={eachBeer.image_url } alt={eachBeer.name}/>
          <p>{eachBeer.tagline}</p>
          <p>{eachBeer.contributed_by}</p>
          
          </li>)
        })
      }


    render() {
        return (
            <div>
                <Header/>
                <p>NEW BEER PAGE</p>
            </div>
        );
    }
}

export default Newbeers;