import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Leaderboard = (props) => {
    let [record, setRecord] = useState([])

    useEffect(() => {
        axios
            .get("https://type-app-1.herokuapp.com/record/")
            .then((response) => {
                setRecord(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score (seconds)</th>
                </tr>
            </thead>
            <tbody>
                {record.length > 0 ? (
                    record.map((user) => (
                        <tr key={user._id}>
                            <td>{user.person_name}</td>
                            <td>{user.person_score}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={2}>No users</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Leaderboard