import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

export default class Create extends Component {
    // This is the constructor that stores the data.
    constructor(props) {
        super(props);

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: "",
            person_score: "",
        };
    }

    // These methods will update the state properties.
    onChangePersonName(e) {
        this.setState({
            person_name: e.target.value,
        });
    }

    // This function will handle the submission.
    onSubmit(e) {
        e.preventDefault();

        // When post request is sent to the create url, axios will add a new record(newperson) to the database.
        const newperson = {
            person_name: this.state.person_name,
            person_score: this.props.time,
        };

        axios
            .post("http://localhost:5000/record/add", newperson)
            .then((res) => console.log(res.data));

        // We will empty the state after posting the data to the database
        this.setState({
            person_name: "",
            person_score: "",
        });
    }

    // This following section will display the form that takes the input from the user.
    render() {
        const gameEnded = this.props.gameEnded
        return (
            <div>
                {/* true && expression is expression, false && expression is false
                Ref: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator */}
                {gameEnded === 1 &&
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <label for="username">Name for leaderboard: </label>
                            <p>
                                <input
                                    type="text"
                                    id="username"
                                    value={this.state.person_name}
                                    onChange={this.onChangePersonName}
                                />
                            </p>
                        </div>
                    </form>
                }
            </div>
        );
    }
}