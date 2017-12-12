import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Product Detail for {this.props.match.params.pid}</h2>
                <button onClick={()=>this.props.history.push('/home')}>Back</button>
            </div>
        );
    }
}

ProductDetail.propTypes = {};

export default ProductDetail;
