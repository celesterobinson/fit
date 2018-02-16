import React, { Component } from 'react';
// import { Modal } from "react-bootstrap";

import SearchForm from "../shared/SearchForm";
import NewExerciseForm from "../shared/NewExerciseForm";
import ExerciseList from "./ExerciseList/index";
import "../styles/Modals.css";

class Search extends Component {
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
                </div>
            )
        } else {
            return (
                <div>
                    <SearchForm />
                    <ExerciseList />
                    <button onClick={this.showCreateForm}>Create New Exercise</button>
                </div>
            )
        }


    }
}

export default Search;
