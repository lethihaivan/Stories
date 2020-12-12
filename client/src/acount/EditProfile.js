import React, { Component } from 'react'
import updateUser from "../services/auth.service";
import axios from "axios"
class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //  id: this.props.match.params.id,
            username: '',
            fullName: '',
            role: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeRolelHandler = this.changeRolelHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }
    componentDidMount = () => {
        const usera = JSON.parse(localStorage.getItem('user'));
        axios.put("http://localhost:9091/api/users", {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Authorization": "Bearer " + usera.token
            }
        }).then(res => {
            let user = res.data;
            this.setState({
                username: user.username,
                fullName: user.fullName,
                role: user.role
            });
        })
    }
    updateUser = (e) => {
        e.preventDefault();
        const usera = JSON.parse(localStorage.getItem('user'));
        let user = { username: this.state.username, fullName: this.state.fullName, role: this.state.role };
        console.log('users => ' + JSON.stringify(user));
        axios.put("http://localhost:9091/api/users", {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Authorization": "Bearer " + usera.token
            }
        }).then(res => {
            console.log(res);
            this.props.history.push('/profile');
        });
    }
    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changeFullNameHandler = (event) => {
        this.setState({ fullName: event.target.value });
    }

    changeRolelHandler = (event) => {
        this.setState({ role: event.target.value });
    }
    cancel() {
        this.props.history.push('/profile');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update User</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Full Name: </label>
                                        <input placeholder="Full Name" name="fullName" className="form-control"
                                            value={this.state.fullName} onChange={this.changeFullNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Url Image: </label>
                                        <input placeholder="Url Image" name="image" className="form-control"
                                            value={this.state.username} onChange={this.changeUserNameHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default EditProfile