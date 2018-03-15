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
            bins:[null,null,null,null,null]
        }
    }

componentDidMount(){
    axios.get(`/api/${ this.props.match.params.shelve }/getall`).then( res =>{
       let newbins = [null,null,null,null,null]
        for(var i=0; i < newbins.length; i++){
            for(var j=0; j < res.data.length; j++){
              if (res.data[j].id == [i+1]) {
                 newbins[i] = res.data[j];
                    console.log(newbins)
        }
        }
    }
            this.setState({
                    bins: newbins
                })
        console.log(res.data, "res.data!!!!")
    })
}

// 0:{id: 2, shelf: "Shelf A", name: "gre", price: 66}
// 1:{id: 6, shelf: "Shelf A", name: "smith", price: 53}





render(){

const fullbin = <div className="boxin"> <div className='boxy-text'> bin1 </div> </div>


const shelfish = this.props.match.params.shelve

const bin1 = `./${this.props.match.params.shelve}/bin/1`
const bin2 = `./${this.props.match.params.shelve}/bin/2`
const bin3 = `./${this.props.match.params.shelve}/bin/3`
const bin4 = `./${this.props.match.params.shelve}/bin/4`
const bin5 = `./${this.props.match.params.shelve}/bin/5`

const createbin1 = `./${this.props.match.params.shelve}/create/1`
const createbin2 = `./${this.props.match.params.shelve}/create/2`
const createbin3 = `./${this.props.match.params.shelve}/create/3`
const createbin4 = `./${this.props.match.params.shelve}/create/4`
const createbin5 = `./${this.props.match.params.shelve}/create/5`

console.log(this.state.bins, "state of bins")

const disp = <div className="boxin"> <div className='boxy-text'> Bin 888 </div> </div> 

return (
    
<div className="everything">
                
                <div className="top">
                <Link to='/'> <div className="top-left">   <div className="logo2"> </div> </div> </Link> 
                <div className="shelf-name"> {shelfish} </div>
                </div>
                <div> 
                </div>
            
                {this.state.bins[0] ? 
                <Link to={bin1}> <div className='boxin'> <div className='boxy-text'> Bin 1 </div> </div> </Link>  :
                <Link to={createbin1}> <div className='addstuff'> + Add inventory to bin  </div> </Link> }
                
                {this.state.bins[1] ? 
                <Link to={bin2}> <div className='boxin'> <div className='boxy-text'> Bin 2 </div> </div> </Link>  :
                <Link to={createbin2}> <div className='addstuff'> + Add inventory to bin  </div> </Link> }

                {this.state.bins[2] ? 
                <Link to={bin3}> <div className='boxin'> <div className='boxy-text'> Bin 3 </div> </div> </Link>  :
                <Link to={createbin3}> <div className='addstuff'> + Add inventory to bin  </div> </Link> }

                {this.state.bins[3] ? 
                <Link to={bin4}> <div className='boxin'> <div className='boxy-text'> Bin 4 </div> </div> </Link>  :
                <Link to={createbin4}> <div className='addstuff'> + Add inventory to bin  </div> </Link> }

                {this.state.bins[4] ? 
                <Link to={bin5}> <div className='boxin'> <div className='boxy-text'> Bin 5 </div> </div> </Link>  :
                <Link to={createbin5}> <div className='addstuff'> + Add inventory to bin  </div> </Link> }
            </div>
)
}}
