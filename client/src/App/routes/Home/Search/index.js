import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import SearchForm from "./SearchForm";
import NewExerciseForm from "../../../shared/NewExerciseForm";
import ExerciseList from "./ExerciseList";
import NewWorkout from "./NewWorkout";
import "../../../styles/Search.css";
import { getExercise } from "../../../redux/exercises"
import { connect } from "react-redux";

import "../../../styles/Search.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreating: false
        }
        this.toggleCreateForm = this.toggleCreateForm.bind(this);
    }
    componentDidMount() {
        this.props.getExercise();
    }
    toggleCreateForm() {
        this.setState({
            isCreating: !this.state.isCreating
        })
    }

    render() {
        
        return (
            <div className="search">
                <div className="sidebar">
                    <SearchForm />
                    <ExerciseList />
                    <button onClick={this.toggleCreateForm}>Create New Exercise</button>
                </div>
                <div className="new-workout-wrapper background">
                    <div className="new-workout-layer">
                        <NewWorkout />
                    </div>
                </div>
                {this.state.isCreating ? <div className="create-form">
                    <Modal className="create-backdrop-style" show={this.state.isCreating} animation={true}>
                        <div className="create-modal">
                            <Modal.Dialog>
                                <Modal.Header >
                                    <Modal.Title>Create New Title</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <NewExerciseForm />
                                </Modal.Body>

                                <Modal.Footer>
                                    <button onClick={this.toggleCreateForm}>Close</button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>
                    </Modal>
                </div> :
                    null}
            </div>
        )
    }
}

export default connect(null, { getExercise })(Search);
