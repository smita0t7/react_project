import react from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL
const output = axios.get("https://5000-smita0t7-reactproject-4epurg3xfpn.ws-us116.gitpod.io/persons")


const PersonList = () => {
    console.log(output);
    console.log(API_URL)

    return(
        <div>
            <h2>to add list of the person</h2>
        </div>
    )
}
export default PersonList;