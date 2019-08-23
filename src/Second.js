import  React from 'react';
import Main from './Main';
// import Axios from 'axios';
import axios from 'axios';

export default class Second extends React.Component {
    
  constructor(props){
    super(props);
    this.state = {
      flag:true,
    //   data:[],
      userlist: [
        // { name: "america", pass: "united" },
        // { name: "elevation", pass: "worship" }
      ]
    }
    // axios.get('http://localhost:3000/buddy')
    // .then(response=>{
    //     let data=JSON.parse(JSON.stringify(response.data));
    //     this.setState({
    //         userlist:data.splice()
    //     })
    // })
    fetch("http://localhost:3000/buddy")
        .then(r=>r.json())
        .then(userlist=>this.setState({userlist}))

  }
  render() {
    return (
      <div>
      <Main users={this.state.userlist} />
      </div>
    )
  }
}