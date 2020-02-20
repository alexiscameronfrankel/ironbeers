import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'

class Randombeers extends Component {

    state={
        beers: {}
    }


async componentDidMount(){
    //console.log('happens once on mount')


    //.then promise --- SETS YOUR STATE TO THE INDIVIDUAL BEER BASED ON THE ID
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(res => { 
        this.setState({
          beers:res.data 
        }) 
    })


  }
    render() {
        return (
            <div>
            <Header/>
            <ul>
                <li><img src={this.state.beers.image_url} alt={this.state.beers.name}/></li>
                <li>{this.state.beers.name}</li>
                <li>{this.state.beers.tagline}</li>
                <li>{this.state.beers.first_brewed}</li>
                <li>{this.state.description}</li>
                <li>{this.state.contributed_by}</li>
            </ul>
            </div>
        );
    }
}

export default Randombeers;