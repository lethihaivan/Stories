import React, { Component } from 'react'
import UserService from "../services/user.service";

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

    componentDidMount() {
        UserService.updateUser(this.state.id).then((res) => {
            let user = res.data;
            this.setState({
                username: user.username,
                fullName: user.fullName,
                role: user.role
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = { username: this.state.username, fullName: this.state.fullName, role: this.state.role };
        console.log('users => ' + JSON.stringify(user));
        UserService.updateUser(user).then(res => {
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
                                        <label> User Name: </label>
                                        <input placeholder="User Name" name="userName" className="form-control"
                                            value={this.state.username} onChange={this.changeUserNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Full Name: </label>
                                        <input placeholder="Full Name" name="fullName" className="form-control"
                                            value={this.state.fullName} onChange={this.changeFullNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Role: </label>
                                        <input placeholder="Role" name="role" className="form-control"
                                            value={this.state.role} onChange={this.changeRolelHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default EditProfile