import React, { Component } from 'react';
// import { Modal } from "react-bootstrap";
import SearchForm from "./SearchForm";
import NewExerciseForm from "../shared/NewExerciseForm";
import ExerciseList from "./ExerciseList/index";
// import "../styles/Modals.css";
import { getExercise } from "../redux/exercises"
import { connect } from "react-redux";

import "../styles/Search.css";

class Search extends Component {
    componentDidMount() {
            this.props.getExercise();       
    }
    constructor(props) {
        super(props);
        this.state = {
            isCreating: false
        }
        this.showCreateForm = this.showCreateForm.bind(this);
        this.hideCreateForm = this.hideCreateForm.bind(this);
    }
    showCreateForm() {
        this.setState({
            isCreating: true
        })
    }

    hideCreateForm() {
        this.setState({
            isCreating: false
        })
    }

    render() {
        if (this.state.isCreating) {
            return (
                <div className="create-form">
                    {/* <Modal className="modal-style" show={this.state.showCreateForm} animation={true}>
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>One fine body...</Modal.Body>

                            <Modal.Footer>
                                <button>Close</button>
                                <button bsStyle="primary">Save changes</button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal> */}
                    <NewExerciseForm />
                    <button onClick={this.hideCreateForm}>Close</button>
                </div>
            )
        } else {
            return (
                <div className="search">
                    <div className="sidebar">
                        <SearchForm />
                        <ExerciseList />
                        <button onClick={this.showCreateForm}>Create New Exercise</button>
                    </div>
                    <div className="new-workout">
                        WorkoutList
                    </div>
                </div>
            )
        }


    }
}

export default connect(null, {getExercise})(Search);
