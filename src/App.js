import React, {Component} from 'react';
import Header from './Header';
import "./App.css";
import List from "./List";
import AddItem from "./AddItem";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fruits: ["Apple", "Banana", "Chikoo"],
            cars: ['BMW', 'SKODA', 'BENZ'],
            isLoggedIn: true
        };

        setTimeout(() => {
            let fruits = new Array(...this.state.fruits);
            console.log(fruits);
            fruits.push('Orange');
            console.log(fruits === this.state.fruits);
            this.setState(
                {fruits}
            )


        }, 2000);

        setTimeout(() => {
            let fruits = new Array(...this.state.fruits);
            console.log(fruits);
            fruits.push('peach');
            console.log(fruits === this.state.fruits);
            this.setState(
                {fruits}
            )


        }, 3000)
    }


    handleLastItemClicked = (item) => {
        this.setState({lastItemClicked: item})
    };

    render() {

        //let {fruits, cars} = this.state;
        return (<div className="container root">
            {/*<h3>Last clicked Item : {this.state.lastItemClicked}</h3>
            <Header/>
            <AddItem/>
            <List data={this.state.fruits} f1={this.handleLastItemClicked}/>
            <List data={this.state.cars} f1={this.handleLastItemClicked}/>*/}
            <Header/>

            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route path="/products/:pid" component={ProductDetail}/>
                <Route path="/products" render={props => this.state.isLoggedIn ? <Products {...props}/> : <Redirect to="/home"/>}/>
                <Route exact path="/about" component={About}/>
                <Route component={NotFound}/>
            </Switch>

        </div>)

    }


}

export default App