import React, { Component } from 'react'
import axios from "axios"
import { EditMe, getMe } from '../services/auth-header';
class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            fullName: '',
            avatarUrl: '',


        }
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeavatarUrlHandler = this.changeavatarUrlHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
        console.log(this.props.match.params.fullName);
    }

    componentDidMount = () => {
        getMe().then(res => {
            const user = res;
            this.setState({
                fullName: user.fullName,
                avatarUrl: user.avatarUrl
            });
            console.log(user);
        })
    }
    updateUser = (e) => {
        e.preventDefault();

        let user = {
            fullName: this.state.fullName,
            avatarUrl: this.state.avatarUrl
        };
        console.log('users => ' + JSON.stringify(user));
        EditMe(this.state.id, user).then(res => {

            this.props.history.push('/profile');
        });
    }
    changeFullNameHandler = (event) => {
        this.setState({
            fullName: event.target.value,

        });
    }
    changeavatarUrlHandler = (event) => {
        this.setState({
            avatarUrl: event.target.value
        });
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
                                        <label> Url Image: </label>
                                        <input placeholder={this.state.avatarUrl} name={this.state.avatarUrl} className="form-control"
                                            value={this.state.avatarUrl} onChange={this.changeavatarUrlHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Full Name: </label>
                                        <input placeholder={this.state.fullName} name={this.state.fullName} className="form-control"
                                            value={this.state.fullName} onChange={this.changeFullNameHandler} />
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