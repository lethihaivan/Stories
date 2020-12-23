import Pagination from "./Pagination";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class AppPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataChapter: [],
            filteredItems: [],
            pageOfItems: []
        };

        console.log(props)
        this.onChangePage = this.onChangePage.bind(this);

    }
    componentDidMount() {

        axios.get(`http://localhost:9091/api/stories/${this.props.storyId}/chapters?page=1&limit=5`)
            .then(res => {

                this.setState({ dataChapter: res.data });
                this.setState({ filteredItems: res.data });
                console.log(res.data);
            })
        // use chapters: ->  this.state.dataChapter.data
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        const List = this.state.filteredItems && this.state.filteredItems.data && this.state.filteredItems.data;

        console.log(List);

        return (
            <div >
                <div className=""//
                    tyle={{
                        "textAlign": " center",
                    }}>
                    <div className={`table `}>
                        {this.state.pageOfItems.map((chapter) => (
                            <ol key={chapter.id} className='' >
                                <span class="glyphicon glyphicon-certificate"></span>
                                <Link to={`${chapter.storyId}/${chapter.index}`} className='chapter' key={chapter.index}>
                                    <span class="chapter-text"><span> Chuong {chapter.index} :  {chapter.name} </span></span></Link>
                            </ol>
                        ))}
                    </div>
                    <Pagination items={List} onChangePage={this.onChangePage} />
                </div>
            </div>

        );
    }
}
