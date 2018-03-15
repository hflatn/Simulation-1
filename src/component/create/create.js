import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import create3 from './create3.css'

export default class create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            binnamefield: [],
            binvaluefield: [],
            newbin:[]
        }
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.create = this.create.bind(this);
    }


create () {
    let body = { name: this.state.binnamefield, value: this.state.binvaluefield }
    axios.post(`/api/create/${this.props.match.params.shelve}/${this.props.match.params.id}`, body).then (res => {
    
        this.props.history.push(`/shelf/${this.props.match.params.shelve}`)
    })
    }


    handleName(e) {
        let input = e.target.value
        this.setState({
            binnamefield: input
        })
    }

    handlePrice(e) {
        let input = e.target.value
        this.setState({
            binvaluefield: input
        })
    }

    render() {
        console.log(`/api/${this.props.match.params.shelve}/${this.props.match.params.id}`, "bin1info")

        console.log(this.state.binnamefield, "binname data state")

        console.log(this.state.binvaluefield, "binnamevaluue data state")

        const shelfish = this.props.match.params.shelve

        const binish = "Add to Bin " + this.props.match.params.id

        return (
            <div>
                <div>

                    <div className="everything">
                        <div className="binback">
                            <Link to='/'> <div className="top-left">   <div className="logo2"> </div> </div> </Link>

                            <Link to={`/shelf/${this.props.match.params.shelve}`}> <div className="topshelf"> <div className="shelf-name">   {shelfish}</div>  </div> </Link>

                            <div className="bin-name"> {binish} </div>
                        </div>
                    </div>

                    <div class="Bottom">

                        <div className="DataContainer">

                            <p class="Nametitle"> Name </p>
                            <input class="NameContainer" onChange={(e) => this.handleName(e)} />

                            <p class="Nametitle"> Price </p>
                            <input class="NameContainer" onChange={(e) => this.handlePrice(e)} />

                        </div>

                       <button class="Detail_btn" class="green" onClick={() => this.create()}> + Add to inventory </button>

                    </div>

                </div>

            </div>
        )
    }
}
