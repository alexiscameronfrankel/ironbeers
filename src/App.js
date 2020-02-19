import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Home from './components/Home'




class App extends Component {

  state = {
    beers: [], //fill this array of beers with beers from the api 
  }

  async componentDidMount(){
    //console.log('happens once on mount')


    //.then promise 
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/`).then(res => { //This takes some time by the time it gets back 
        this.setState({
          beers:res.data 
        }) 
    })



    // //async await promise 
    // let response = await axios.get(`https://dog.ceo/api/breed/boxer/images/random/30`)
    // this.setState({
    //     dogs:response.data.message 
    // })


  }

  showTheBeers = () => {
    return this.state.beers.map(eachBeer => {
      return <li>{eachBeer.name}</li>
    })
  }

  render() { //Never set state in here 
    //console.log('render may happen more than once', this)
    

    return (
      <div>
          <Home/>
          {/* {this.showTheBeers()} */}
      </div>
    );
  }
}

export default App;
