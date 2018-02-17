import React, { Component } from 'react';
import MenuBod from './MenuBod.css';
import { Link } from 'react-router-dom'
import MenuHeader from './MenuHeader.js'


export default class MenuBody extends Component {
    constructor() {
        super()
    }


    render() {

        return (
           <div>
               <MenuHeader />
            <div className='flexin'>
               
                <div className='boxy'>
                    <div className='boxy-text'>
                        <Link to='./shelfA' style={{textDecoration: 'none'}}> <span> Shelf A  </span> </Link>  </div>
                </div>
                
                <div className='boxy'>
                    <div className='boxy-text'>
                       <Link to='./shelfB'> Shelf B </Link>  </div>
                </div>
                
                <div className='boxy'>
                    <div className='boxy-text'>
                      <Link to='./shelfC'>  Shelf C </Link>  </div>
                </div>
               
                <div className='boxy'>
                    <div className='boxy-text'>
                      <Link to='./shelfD'>  Shelf D </Link> </div>
               
                </div>
            </div>
</div>

        )
    }
}