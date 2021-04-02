import { json } from 'body-parser';
import React, {Component} from 'react'
import Hero from './Hero';


export default class Herores extends Component{
constructor(){
    super();
    this.state = {heroes:[]}
}

componentDidMount(){
    fetch('/api/heroes').then(result=> result.json()).then(json =>{
        this.setState({herores:json })
    })
}

    render(){
        return(
            <div>
                hola
                <ul>
                    {
                      this.state.heroes.map(hero=>{
                       return  <Hero hero={hero}></Hero>
                      })
                    }
                </ul>
                <div className="editarea">
                    {

                    }

                </div>
            </div>
        );
    }
}