import React, { Component } from 'react';
import {connect} from "react-redux";
import {addExercise} from "../redux/exercises";

class NewExerciseForm extends Component {
    constructor(props) {
        super(props);
        let { name, category, instructions } = props
        this.state = {
            inputs: {
                name: name || "",
                category: category || "Abs",
                instructions: instructions || ""
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
        this.props.addExercise(this.state.inputs);
    }

    render() {
        let { name, category, instructions } = this.state.inputs;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="new-name-search">
                        Name
                        <input onChange={this.handleChange} value={name} name="name" type="text" placeholder="ex. Plank" />
                    </div>
                    <div className="new-category-dropdown">
                        Category <select onChange={this.handleChange} value={category} name="category">
                            <option value="Abs">Abs</option>
                            <option value="Arms">Arms</option>
                            <option value="Back">Back</option>
                            <option value="Chest">Chest</option>
                            <option value="Legs">Legs</option>
                        </select>
                    </div>
                    <textarea onChange={this.handleChange} value={instructions} name="instructions" id="" cols="30" rows="10"></textarea>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addExercise})(NewExerciseForm);
