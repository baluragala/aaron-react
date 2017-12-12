import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {id: 1, title: 'keybaord', price: 200},
                {id: 2, title: 'mouse', price: 200},
                {id: 3, title: 'stylus', price: 200},
                {id: 4, title: 'monitor', price: 200}
            ]
        }
    }

    render() {
        return (
            <div style={{marginLeft: 30}}>
                {this.state.products.map(p => (
                    <div key={p.id} style={{backgroundColor: 'lightgreen', padding: 3, margin: 2}}>
                        <h2>{p.title}</h2>
                        <h4>{p.price}</h4>
                    </div>
                ))}

            </div>
        );
    }
}

Products.propTypes = {};

export default Products;
