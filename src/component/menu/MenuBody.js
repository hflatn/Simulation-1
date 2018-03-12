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
                        <Link to='./shelf/Shelf A'> Shelf A  </Link>  </div>
                </div>
                
                <div className='boxy'>
                    <div className='boxy-text'>
                       <Link to='./shelf/Shelf B'> Shelf B </Link>  </div>
                </div>
                
                <div className='boxy'>
                    <div className='boxy-text'>
                      <Link to='./shelf/Shelf C'>  Shelf C </Link>  </div>
                </div>
               
                <div className='boxy'>
                    <div className='boxy-text'>
                      <Link to='./shelf/Shelf D'>  Shelf D </Link> </div>
               
                </div>
            </div>
</div>
        )
    }
}