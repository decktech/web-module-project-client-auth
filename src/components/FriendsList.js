import React, { useState, useEffect } from "react";
// import axios from "axios";    USING WITHAUTH -->
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token");

        axiosWithAuth().get('/friends')
            .then(res=> {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err=> {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h2>Friends List</h2>
        <ul>
            {
                friends.map(friend => {
                    return <li>{friend.name}, {friend.age}, {friend.email}</li>
                })
            }
        </ul>
        </div>
        
    )
}

export default FriendsList