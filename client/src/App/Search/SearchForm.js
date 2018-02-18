import React, { Component } from 'react';
import { populateFilter } from "../redux/exercises";
import { connect } from 'react-redux';
import "../styles/SearchForm.css";


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: "",
                category: "All"
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.populateFilter(this.state.inputs);
        
    }

    render() {
        let { name, category } = this.state.inputs;
        return (
            <div className="search-form">
                <h4>Find Exercise</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="name-search">
                        Name
                        <input onChange={this.handleChange} value={name} name="name" type="text" placeholder="ex. Plank" />
                    </div>
                    <div className="category-dropdown">
                        Category <select onChange={this.handleChange} value={category} name="category">
                            <option value="All">All</option>
                            <option value="Abs">Abs</option>
                            <option value="Arms">Arms</option>
                            <option value="Back">Back</option>
                            <option value="Chest">Chest</option>
                            <option value="Legs">Legs</option>
                        </select>
                    </div>
                    <button >Search</button>
                </form>
            </div>
        )
    }
}


export default connect(null, { populateFilter })(SearchForm)