import React, { Component, Fragment } from 'react';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            Email:"",
            password:""
        }
        }
        handleChange = (e) => {
            this.setState({
                [e.target.name]:e.target.value,
            })
        }
        handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state);
        }

    render() { 
       
        return (
            <Fragment>
                <div className="col-md-4 my-2 card mx-auto ">
                    <h4 className="h4 my-2 pb-2 text-success font-weight-bold text-center">Login</h4>
                <div className="card-body text-light"></div>
                <form action="/" onSubmit={this.handleSubmit}>
                    <div className="form-group a">
                        <label  htmlFor="username">username</label>
                        <input type="text" id="username" className="form-control" 
                         name="username" value={this.state.username} onChange={this.handleChange}
                         placeholder= "Enter username" required />
                    </div>
                    <div className="form-group b">
                        <label htmlFor="Email">Email</label>
                        <input type="Email" id="Email" className="form-control" 
                         name="Email" value={this.state.Email} onChange={this.handleChange}
                         placeholder= "Enter Email" required />
                    </div>
                    <div className="form-group c">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" className="form-control" 
                         name="password" value={this.state.password} onChange={this.handleChange}
                         placeholder= "Enter password" required />
                    </div>
                    
                <div className="form-group">
                    <button className="btn btn-success btn-block">Login</button>
                </div>
                </form>
                </div>
            </Fragment>
          );
    }
}
 
export default Form;