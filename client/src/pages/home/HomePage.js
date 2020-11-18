//import logo from "../image/004.jpg"
import React, { Component } from "react";
//import Pagination from "./components/Pagination";
export default class Home_page extends Component {
    constructor() {
        super();
        var storiseItems = [];

        this.state = {
            storiseItems: storiseItems,
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        {this.state.pageOfItems.map(item =>
                            <div>
                                <div key={item.id}>    {item.name}</div>
                                <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a class="thumbnail" href="{item.url}">
                                        <img src={item.image}></img>
                                    </a></div>
                            </div>
                        )}
                        <p items={this.state.storiseItems} onChangePage={this.onChangePage} />
                        Pagination
                    </div>
                </div>
                <hr />

                <div>
                    <ul className="slides" style={{ width: "1000%", transitionDuration: "0s", transform: "translate3d(-476px, 0px, 0px);" }}>
                        <li className="clone" style={{ width: "476px", float: "left", display: "block" }}>
                            <a href="">
                                <img src="https://i.pinimg.com/564x/af/99/2c/af992cf4e2fa626a82412e8fb97728de.jpg" 
                                style={{width: "250px" , height: "300px"}}></img>
                            </a>
                        </li>
                        <li className="flex-active-slide" style={{ width: "770px", float: "left", display: "block" }} >
                        </li>
                    </ul>

                </div>
            </div>

        );
    }
}

/* Render Call
-------------------------------------------------*/
//ReactDOM.render(<App />, document.getElementById('app'));
