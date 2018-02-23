import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteWorkout } from "../../../../redux/workouts";
import { Modal } from "react-bootstrap";
import WorkoutExercise from "./WorkoutExercise";
import "../../../../styles/Workout.css";

class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seeWorkout: false
        }
        this.toggleWorkout = this.toggleWorkout.bind(this);
    }

    toggleWorkout(e) {
        if (e.target.id === "delete-workout") {
            return
        }
        this.setState({
            seeWorkout: !this.state.seeWorkout
        })
    }

    render() {
        let { name, data, loading, _id, exercises, deleteWorkout } = this.props;

        return (
            (this.state.seeWorkout) ?
                !loading ?
                    <div>
                        <div className="exercise-details">
                            <Modal className="backdrop-style" show={this.state.seeWorkout} animation={true}>
                                <div className="details-modal">
                                    <Modal.Dialog>
                                        <Modal.Header className="details-header">
                                            <Modal.Title className="details-title"><h1>{name}</h1></Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body className="details-body">
                                            {exercises.map(wrkEx => {
                                                let exMatch = data.filter(dataEx => wrkEx.exerciseId === dataEx._id)[0];
                                                let displayEx = { ...wrkEx, ...exMatch };
                                                return <WorkoutExercise key={wrkEx._id} {...displayEx} />
                                            })}
                                        </Modal.Body>

                                        <Modal.Footer>
                                            <button style={{ cursor: "pointer" }} onClick={this.toggleWorkout}>Close</button>
                                        </Modal.Footer>
                                    </Modal.Dialog>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    :
                    <div>...Loading</div>
                :
                !loading ?
                    <div onClick={this.toggleWorkout} className="individual-workout">
                        <h1>{name}</h1>
                        <button id="delete-workout" onClick={(e) => { e.preventDefault(); deleteWorkout(_id) }}>X</button>
                    </div>

                    :
                    <div>...Loading</div>
        )
    }
}

export default connect(state => state.exercises, { deleteWorkout })(Workout);
