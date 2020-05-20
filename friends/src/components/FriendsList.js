import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from './FriendForm'

class FriendsList extends React.Component {

    state = {
        friends: [],
    }


    componentDidMount() {
        this.friendsList();
    }


    friendsList = () => {



        axiosWithAuth()
            .get("/api/friends")
            .then(res => {

                console.log(res.data)

                this.setState({
                    friends: res.data,



                })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h3>Add New Friend</h3>
                <FriendForm />
                <h2>Your usual friends:</h2>
                {
                    this.state.friends.map(friend => {
                        return (
                            <div className='friendsList'>
                                <h3>{friend.name}</h3>
                                <p>Age: {friend.age}</p>
                                <p>E-mail: {friend.email}</p>
                            </div>
                        )
                    })



                }
            </div>
        );
    }
}
export default FriendsList;