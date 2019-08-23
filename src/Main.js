import React, { Component } from 'react';
// import { thisExpression } from '@babel/types';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList : this.props.users,
      user : '',
      pass : '',
      cuser:'',
      cpass:'',
      flag : false
    }
  } 
  
    check = (users) =>{
      // console.log(this.state.user)
      for(var i=0;i<users.length;i++){
        if(this.state.user === users[i].name && this.state.pass === users[i].pass){
          // console.log('Yes')
          this.setState({
            flag :true
          })
        }
      }
     //console.log(this.refs.name2.value)
    //console.log(this.props.user[0].name)
    // for (let user of this.props.users) {
    //   if ((this.state.name===user.name)&&(this.state.password===user.password)){
    //     console.log("Login Valid");
    //   }
    //   else{
    //     console.log("die hey")
    //   }
    // }
  }
  add(){
    fetch('http://localhost:3000/buddy', {
            method: 'POST',
            body: JSON.stringify({name:this.state.cuser,pass:this.state.cpass}),
            headers: {
                "Content-Type": "application/json"
            }
        })
  }

  handleChange=event=>{
    this.setState({
      user:event.target.value
    });
  }
  handleChange1=event=>{
    this.setState({
      pass:event.target.value
    }); 
  }
  handleChange2=event=>{
    this.setState({
      cuser:event.target.value
    }); 
  }
  handleChange3=event=>{
    this.setState({
      cpass:event.target.value
    }); 
  }
  render() {
    let p = this.props.users
    let success = <div>Success</div>
    // let failure=<div>Riya</div>
    return (
      <div>
         <input type="text" name="name" value={this.state.user} onChange={this.handleChange}/>
        <input type="password" name="pass" value={this.state.pass} onChange={this.handleChange1}/> 
       {/* Props :  {this.props.users[0].name} */}
        {/* <input type ="text" name = "name1"  ref = "name2"/> */}
         <button onClick={() => this.check(p)}>Login</button> 
         {this.state.flag?success:<div></div>}
         <br/>
         <input type="text" name="name" value={this.state.cuser} onChange={this.handleChange2}/>
        <input type="password" name="pass" value={this.state.cpass} onChange={this.handleChange3}/> 
        <button onClick={()=>this.add()}>Add</button>
      </div>
    );
  }
}