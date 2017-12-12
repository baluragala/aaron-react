import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor')
    }

    static propTypes = {
        data: PropTypes.array.isRequired,
        f1: PropTypes.func.isRequired
    };

    static defaultProps = {
        data: ["Data is mandatory, please supply an array of string"],
        f1: function () {
            alert('callback from parent is needed. Please supply one...')
        }
    };


    componentWillMount() {
        console.log('componentWillMount')
    }


    render() {
        console.log('render', this.props.data);
        return (<ol style={{fontSize: '32px', color: 'red'}}>
            {this.props.data.map(f => <li onClick={(e) => {
                this.props.f1(f)
            }} key={f}>{f}</li>)}
        </ol>)
    }


    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }


    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

};

export default List;