import React, { Component } from 'react';
import topshelf from './topshelf.css';
import bodshelf from './bodshelf.css';
import {Link} from 'react-router-dom';

export default class shelfB extends Component {
    constructor() {
        super()
    }


    render() {


        return (
            <div class="everything">
            <div class="top">
            <Link to="./">    <div class="top-left">   <div class="logo2"> </div> </div> </Link>
                <div class="shelf-name"> Shelf B </div>
            </div>
            <div> 
            </div>
                <Link to="./bin1b"> <div class="boxin"> <div class='boxy-text'> Bin 1 </div> </div> </Link>
                <Link to="./bin2b"> <div class="boxin"> <div class='boxy-text'> Bin 2 </div> </div> </Link>
                <Link to="./bin3b"> <div class="boxin"> <div class='boxy-text'> Bin 3 </div> </div> </Link>
                <Link to="./bin4b"> <div class="boxin"> <div class='boxy-text'> Bin 4 </div> </div> </Link>
                <Link to="./bin5b"> <div class="boxin"> <div class='boxy-text'> Bin 5 </div> </div> </Link>
        </div>
        )
    }
}