import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import binart from './binart.css';

export default class bin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bin: [],
            binnamefield: [],
            binvaluefield: [],
            edit: true
        }
        this.changeButton = this.changeButton.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/getonebin/${this.props.match.params.shelve}/${this.props.match.params.id}`).then(res => {
                console.log(res.data, "resdatainfo")
            this.setState({
                bin: res.data,
                binnamefield: res.data[0].name,
                binvaluefield: res.data[0].price
            })
        })
    }
    changeButton() {

        this.setState({
            edit: false
        })
    }




    render() {
        console.log(`/api/${this.props.match.params.shelve}/${this.props.match.params.id}`, "bin1 info")
        console.log(this.state.bin, "state of dat bin")

        console.log(this.state.bin[0], "whats in it?")

        console.log(this.state.binnamefield, "binname data state")
        

        const binname =
            this.state.bin.map((bin, i) =>
                <h3 key={i}> {bin.name}  </h3>
            )

        const binprice =
            this.state.bin.map((bin, i) =>
                <h3 key={i}> {bin.price} </h3>
            )

        const show =
            this.state.bin[0]

        const shelfish = this.props.match.params.shelve
        const binish = "Bin " + this.props.match.params.id

        return (
            <div>
                
                <div className="everything">
                    <div className="binback">
                        <Link to='/home'> <div className="top-left">   <div className="logo2"> </div> </div> </Link>

                        <div className="topshelf">     <div className="shelf-name">   {shelfish}      </div>           </div>

                        <div className="bin-name"> {binish} </div>
                    </div>
                </div>

                <div class="Bottom">

                    <div className="DataContainer">
                        <p class="Nametitle"> Name </p>

                        {this.state.edit ? 
                        <p class="NameContainer"> {binname} </p> :
                            <input class="NameContainer" value = "binname" />
                    }

                        <p class="Nametitle"> Price </p>
                            {this.state.edit ?
                        <p class="NameContainer"> {binprice} </p> :
                            <input class="NameContainer" value = "binprice" /> }
                        


                    </div>
                    <button class="Detail_btn"> Delete </button>

                    {this.state.edit ?
                        <button class="Detail_btn" onClick={() => this.changeButton()}> Edit </button> :
                        <button class="save_btn"> Save </button>
                    }
                </div>

            </div>
        )
    }
}
