import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendForm extends React.Component {
    state = {
        info: {
            name: "",
            age: "",
            email: ""
        }
    };




    handleChange = e => {
        this.setState({
            info: {
                ...this.state.info,
                [e.target.name]: e.target.value
            }
        });
    };

    newFriend = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("/api/friends", this.state.info)
            .then(res => {

                this.setState(this.state.info)

                // localStorage.setItem("token", res.data.payload);
                // this.props.history.push("/protected");
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.newFriend}>
                    <input
                        type="text"
                        name="name"
                        placeholder='Name'
                        value={this.state.info.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder='Age'
                        value={this.state.info.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder='E-Mail'
                        value={this.state.info.email}
                        onChange={this.handleChange}
                    />
                    <button>+ New Friend</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;