import React, { useState } from "react";
import axios from "axios";

const AddFriend = (props) => {
    const [form, setForm] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                props.history.push("/friends")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input onChange={handleChange} type="text" name="name" id="name"/>
                </div>
                <div>
                    <label>Age:</label>
                    <input onChange={handleChange} type="text" name="age" id="age"/>
                </div>
                <div>
                    <label>Email:</label>
                    <input onChange={handleChange} type="email" name="email" id="email"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
        
    )
}

export default AddFriend