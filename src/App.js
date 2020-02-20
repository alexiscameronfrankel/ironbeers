import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Home from './components/Home'
import {
  Switch,
  Route
} from "react-router-dom";
import Beer from './components/Beer'
import Newbeers from './components/Newbeers'
import Randombeers from './components/Randombeers'
import Beerdetails from './components/Beerdetails'





class App extends Component {

  state = {
    beers: [], //fill this array of beers with beers from the api 
    ready: false
  }

  //below is another way to get all the data from beers //

  // getAllTheBeers = () => {
  //     axios.get('thislink')
  //     .then(response => {console.log(response.data)
  //     this.setState({
  //       allBeers: response.data, 
  //       ready: true
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

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

  render() { //Never set state in here 
    //console.log('render may happen more than once', this)
    

    return (
      <div>
          {/* <Home/> */}
          {/* {this.getAllTheBeers()} */}
          <Switch>
            <Route exact path="/" render={props => <Home/>}/> {/* says if url is homepage (/) then just show the home */}
            <Route exact path="/allbeer" render={props => <Beer {...props} allBeers={this.state.beers} alexis="superAlexis"/>}/>
            <Route exact path="/randombeer" render={props => <Randombeers {...props}/>}/>
            <Route exact path="/newbeer" render={props => <Newbeers/>}/>
            <Route exact path="/beers/:happyBeer" render={props => <Beerdetails {...props}/>}/>
          </Switch>
      </div>
    );
  }
}

export default App;

// props is an object and when you pass a prop to a component that prop become a property of the props object
// let props = {
//    allBeers: []
//    alexis: "SuperAlexis"
// }
// this.props.alexis