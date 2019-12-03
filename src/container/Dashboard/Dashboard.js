import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <>
     
        <div>This is dashboard</div>
        <button onClick={()=> localStorage.removeItem("token")} >LogOut</button>
      </>
    );
  }
}

export default Dashboard;
