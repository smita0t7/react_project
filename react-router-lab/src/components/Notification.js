import React from 'react';
import axios from 'axios';

const notification = () => {
  const output = axios.get("https://3000-smita0t7-reactproject-4epurg3xfpn.ws-us116.gitpod.io/persons");
  console.log(output);
  
  const API_URL=process.env.REACT_APP_API_URL
  console.log(API_URL);

 return (
        <div>
        <h2>this is the notification page</h2>
        </div>
      );
    };
    
    export default notification;