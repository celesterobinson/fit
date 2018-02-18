import React from "react";  
import {connect} from "react-redux";

function Workouts(props) {  
    return (
        <div>
            <h2>Welcome, <i>@{props.username}</i></h2>
        </div>
    )
}

const mapStateToProps = (state) => {  
    return state.user;
}

export default connect(mapStateToProps, {})(Workouts);
