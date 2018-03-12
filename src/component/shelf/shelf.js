import React, { Component } from 'react';
import axios from 'axios';
import topshelf from './topshelf.css';
import bodshelf from './bodshelf.css';
import { Link, Redirect } from 'react-router-dom';
import create from '../create/create.js';
import bin from '../bin/bin.js';

export default class shelf extends Component {
    constructor(){
        super();
        this.state = {
            bins:[]
        }
    }

componentDidMount(){
    axios.get(`/api/${ this.props.match.params.shelve }/getall`).then( res =>{
       console.log(res.data, "res.data!!!!")
    this.setState({
            bins: res.data 
        })
    })
}






render(){

const fullbin = <div className="boxin"> <div className='boxy-text'> bin1 </div> </div>


const shelfish = this.props.match.params.shelve

const bin1 = `./${this.props.match.params.shelve}/bin/1`
const bin2 = `./${this.props.match.params.shelve}/bin/2`
const bin3 = `./${this.props.match.params.shelve}/bin/3`
const bin4 = `./${this.props.match.params.shelve}/bin/4`

const createbin = `./${this.props.match.params.shelve}/create`

console.log(this.state.bins, "state of bins")

const disp = <div className="boxin"> <div className='boxy-text'> Bin 888 </div> </div> 

return (
    
<div className="everything">
                
                <div className="top">
                <Link to='/home'> <div className="top-left">   <div className="logo2"> </div> </div> </Link> 
                <div className="shelf-name"> {shelfish} </div>
                </div>
                <div> 
                </div>
            
                {this.state.bins[0] ? 
                <Link to={bin1}> <div className='boxin'> <div className='boxy-text'> bin1 </div> </div> </Link>  :
                <Link to={createbin}> <div className='addstuff'> + Add inventory to bin  </div> </Link> }

                {this.state.bins[1] ? 
                <Link to={bin2}> <div className='boxin'> <div className='boxy-text'> bin2 </div> </div> </Link>  :
                <Link to={createbin}> <div className='addstuff'> + Add inventory to bin  </div> </Link> }

                {this.state.bins[2] ? 
                <Link to={bin3}> <div className='boxin'> <div className='boxy-text'> bin3 </div> </div> </Link>  :
                <Link to={createbin}> <div className='addstuff'> + Add inventory to bin  </div> </Link> }

                {this.state.bins[3] ? 
                <Link to={bin4}> <div className='boxin'> <div className='boxy-text'> bin4 </div> </div> </Link>  :
                <Link to={createbin}> <div className='addstuff'> + Add inventory to bin  </div> </Link> }

            </div>
)
}}