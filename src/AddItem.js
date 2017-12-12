import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {item: '', isItemValid: true}
    }

    componentWillMount() {
        console.log('componentWillMount', this._priceEle);
    }

    componentDidMount() {
        console.log('componentDidMount', this._priceEle);
    }

    handleChange = (e) => {
        this.setState({item: e.target.value});
        if (e.target.value === "Berry") {
            this.setState({isItemValid: false});
        } else {
            this.setState({isItemValid: true});
        }
        console.dir(this._priceEle);
    };

    render() {
        return (
            <div>
                <form>
                    {!this.state.isItemValid && <p style={{color: 'red'}}>Invalid value</p>}
                    <label>Item Name : </label>
                    <input type="text" value={this.state.item} onChange={this.handleChange}></input>

                    <label>Item Price : </label>
                    <input type="text" defaultValue={0.00} ref={(ele) => this._priceEle = ele}></input>
                </form>
            </div>
        );
    }
}

AddItem.propTypes = {};

export default AddItem;
