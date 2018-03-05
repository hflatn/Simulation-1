import React, { Component } from 'react';
import topshelf from './topshelf.css';
import bodshelf from './bodshelf.css';
import {Link} from 'react-router-dom';

export default class shelfA extends Component {
    constructor() {
        super()
    }


    render() {

        return (

            <div class="everything">
                <div class="top">
                <Link to="./">    <div class="top-left">   <div class="logo2"> </div> </div> </Link>
                <div class="shelf-name"> Shelf A </div>
                </div>
                <div> 
                </div>
                
                <Link to="./bin1a"> <div class="boxin"> <div class='boxy-text'> Bin 1 </div> </div> </Link>
                <Link to="./bin2a"> <div class="boxin"> <div class='boxy-text'> Bin 2 </div> </div> </Link>
                <Link to="./bin3a"> <div class="boxin"> <div class='boxy-text'> Bin 3 </div> </div> </Link>
                <Link to="./bin4a"> <div class="boxin"> <div class='boxy-text'> Bin 4 </div> </div> </Link>
                <Link to="./bin5a"> <div class="boxin"> <div class='boxy-text'> Bin 5 </div> </div> </Link>
            </div>
        )
    }
}
