import React, { Component } from 'react';
import Header from './Header'
import Axios from 'axios';

class Newbeers extends Component {

    state={
    
    }

    addNewBeer = (event) => {
        event.preventDefault() //prevents reredndering

        // let holyBeer ={
        //     name:'The Holy Gr-Ale',
        //     tagline: 'Malty and holy',
        //     description:'Brewed with barley, blessed by Christ',
        //     first_brewed: '1200',
        //     brewers_tips:'Brew in 12th century Glastonbury',
        //     attenuation_level: 7,
        //     contributed_by:'Alexis'
        // }



        Axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }


// setting the key...tagline
    handlePersonTyping = (e) => {
        console.log(e.target.value)
        this.setState({
            
            
            [e.target.name]:e.target.value,
            
        
        
        }) 

    }


    render() {
        return (
            <div>
                <Header/>
                <form onSubmit={this.addNewBeer}> 
                <p>NAME</p>
                    <input type="text" name="name" onChange={this.handlePersonTyping}/>
                <p>TAGLINE</p>
                    <input type="text" name="tagline" onChange={this.handlePersonTyping}/>
                <p>DESCRIPTION</p>
                    <input type="text" name="description" onChange={this.handlePersonTyping}/>
                <p>FIRST BREWED</p>
                    <input type="text" name="first_brewed" onChange={this.handlePersonTyping}/>
                <p>BREWERS TIPS</p>
                    <input type="text" name="brewers_tips" onChange={this.handlePersonTyping}/>
                <p>ATTENUATION LEVEL</p>
                    <input type="number" name="attenuation_level" onChange={this.handlePersonTyping}/>
                <p>CONTRIBUTED BY</p>
                    <input type="text" name="contributed_by" onChange={this.handlePersonTyping}/>
                
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Newbeers;