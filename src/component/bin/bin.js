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
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
      
    }

    componentDidMount() {
        axios.get(`/api/getonebin/${this.props.match.params.shelve}/${this.props.match.params.id}`).then(res => {
                console.log(res.data, "resdatainfo")
            this.setState({
                bin: res.data,
                binnamefield: res.data[0].name,
                binvaluefield: res.data[0].price
            })
            console.log(this.state.binnamefield, "name of the state")
        })
    }

update(){
    let body = { name: this.state.binnamefield, value: this.state.binvaluefield }
    axios.patch(`/api/${this.props.match.params.shelve}/${this.props.match.params.id}`, body) .then(body =>{
        console.log(body.data, "body.datainfo")
    })

}


delete(){
    axios.delete(`/api/delete/${this.props.match.params.shelve}/${this.props.match.params.id}`).then(res => {
        console.log(res.data, "resdatainfo")
        this.props.history.push(`/shelf/${this.props.match.params.shelve}`)
    })
}

    changeButton() {

        this.setState({
            edit: false
        })
    }

    handleName(e){
        let input = e.target.value
        this.setState({
            binnamefield: input
        })
    }

    handlePrice(e){
        let input = e.target.value
        this.setState({
            binvaluefield: input
        })
    }



    render() {
        console.log(`/api/${this.props.match.params.shelve}/${this.props.match.params.id}`, "bin1info")

        console.log(this.state.bin, "state of dat bin")

        console.log(this.state.bin[0], "whats in it?")

        console.log(this.state.binnamefield, "binname data state")

        const binnamefield =
            this.state.bin.map((bin, i) =>
                <h3 key={i}> {bin.name}  </h3>
            )

        const binvaluefield=
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
                        <Link to='/'> <div className="top-left">   <div className="logo2"> </div> </div> </Link>

                     <Link to={`/shelf/${this.props.match.params.shelve}`}> <div className="topshelf"> <div className="shelf-name">   {shelfish}</div>  </div> </Link>

                        <div className="bin-name"> {binish} </div>
                    </div>
                </div>

                <div class="Bottom">

                    <div className="DataContainer">
                        <p class="Nametitle"> Name </p>

                        {this.state.edit ? 
                        <p class="NameContainer"> {binnamefield} </p> :
                            <input class="NameContainer" onChange={(e) => this.handleName(e) } value = {this.state.binnamefield}
                             />
                    }

                        <p class="Nametitle"> Price </p>
                            {this.state.edit ?
                        <p class="NameContainer"> {binvaluefield} </p> :
                            <input class="NameContainer" onChange={(e) => this.handlePrice(e) } value = {this.state.binvaluefield} 
                             /> 
                            }

                    </div>
                   <button class="Detail_btn" onClick={() => this.delete()}> Delete </button>

                    {this.state.edit ?
                        <button class="Detail_btn" onClick={() => this.changeButton()}> Edit </button> :
                        <button class="save_btn" onClick={() => this.update()}> Save </button>
                    }
                </div>

            </div>
        )
    }
}
