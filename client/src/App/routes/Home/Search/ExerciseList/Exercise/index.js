import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { addExToWorkout } from "../../../../../redux/workouts";
import "../../../../../styles/Exercise.css";

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        }
        this.toggleDetails = this.toggleDetails.bind(this);
        this.newExercise = this.newExercise.bind(this);
    }

    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    newExercise() {      
        this.props.addExToWorkout(this.props._id);
    }

    render() {
        let { name, category, instructions } = this.props;
        let style = { color: "black", fontWeight: "900" };
        if (this.state.showDetails) {
            return (
                <div className="exercise-details">
                    <Modal className="backdrop-style" show={this.state.showDetails} animation={true}>
                        <div className="details-modal">
                            <Modal.Dialog>
                                <Modal.Header className="details-header">
                                    <Modal.Title className="details-title">{name}</Modal.Title>
                                </Modal.Header>

                                <Modal.Body className="details-body">
                                    <h2 style={{ color: "#F45D01" }}>{category}</h2>
                                    <p><span style={style}>Instructions:</span> {instructions}</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <button style={{ cursor: "pointer" }} onClick={this.toggleDetails}>Close</button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>
                    </Modal>
                </div>
            )
        }
        return (
            <div className="exercise">
                <div className="info">
                    <h3>{name}</h3>
                    <h5>{category}</h5>
                </div>
                <div className="exercise-buttons">
                    <button onClick={this.toggleDetails}>Details</button>
                    <button onClick={this.newExercise}>Add</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { addExToWorkout })(Exercise);
