import React, { Component } from 'react';
import topshelf from './topshelf.css';
import bodshelf from './bodshelf.css';
import {Link} from 'react-router-dom';

export default class shelfD extends Component {
    constructor() {
        super()
    }


    render() {


        return (
            <div class="everything">
            <div class="top">
            <Link to="./">    <div class="top-left">   <div class="logo2"> </div> </div> </Link>
                <div class="shelf-name"> Shelf D </div>
            </div>
            <div> 
            </div>
            <Link to="./bin1d"> <div class="boxin"> <div class='boxy-text'> Bin 1 </div> </div> </Link>
                <Link to="./bin2d"> <div class="boxin"> <div class='boxy-text'> Bin 2 </div> </div> </Link>
                <Link to="./bin3d"> <div class="boxin"> <div class='boxy-text'> Bin 3 </div> </div> </Link>
                <Link to="./bin4d"> <div class="boxin"> <div class='boxy-text'> Bin 4 </div> </div> </Link>
                <Link to="./bin5d"> <div class="boxin"> <div class='boxy-text'> Bin 5 </div> </div> </Link>
        </div>

        )
    }
}
