import React, { Component } from 'react';
import topshelf from './topshelf.css';
import bodshelf from './bodshelf.css';
import {Link} from 'react-router-dom';

export default class shelfC extends Component {
    constructor() {
        super()
    }


    render() {


        return (
            <div class="everything">
            <div class="top">
            <Link to="./">    <div class="top-left">   <div class="logo2"> </div> </div> </Link>
                <div class="shelf-name"> Shelf C </div>
            </div>
            <div> 
            </div>
            <Link to="./bin1c"> <div class="boxin"> <div class='boxy-text'> Bin 1 </div> </div> </Link>
                <Link to="./bin2c"> <div class="boxin"> <div class='boxy-text'> Bin 2 </div> </div> </Link>
                <Link to="./bin3c"> <div class="boxin"> <div class='boxy-text'> Bin 3 </div> </div> </Link>
                <Link to="./bin4c"> <div class="boxin"> <div class='boxy-text'> Bin 4 </div> </div> </Link>
                <Link to="./bin5c"> <div class="boxin"> <div class='boxy-text'> Bin 5 </div> </div> </Link>
        </div>

        )
    }
}