import React, { Component } from "react";
import axios from 'axios';
import "./Pagination.css";
import ReactPaginate from 'react-paginate';
//import Pagination from "../../components/Pagination";
import ItemChapter from "./ItemChapter"
import { withRouter } from 'react-router-dom';
class GetChapterOfStory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataChapter: {},

        };
    }
    componentDidMount() {
        axios.get(`http://localhost:9091/api/stories/${this.props.storyId}/chapters?page=1&limit=5`)
            .then(res => {

                this.setState({ dataChapter: res.data });

            })
        // use chapters: ->  this.state.dataChapter.data
        console.log(this.state.dataChapter.data);
    }

    onPageChanged = (currentPage, args, args2) => {
        // currentPage = this.state.dataChapter.currentPage;
        console.log(currentPage, args, args2)
        // this.setState({ currentPage });
    }

    handlePageClick = ({ selected },) => {
        const pageSelected = selected + 1
        this.props.history.push(`?page=${pageSelected}`)
    }


    render() {
        const offset = this.state.dataChapter.currentPage * 10;
        const listChapter = this.state.dataChapter.data;
        const currentPageData = listChapter && listChapter
            .slice(offset, offset + 10)
            .map(({ chapter }) => <ItemChapter key={chapter.index} {...chapter} />
            );

        const pageCount = Math.ceil(listChapter && listChapter.length / 10);

        // console.log(this.state.dataChapter && listChapter);
        return (
            <div>

                <div className="Container" style={{ "top": "900px" }}>
                    {currentPageData}
                    <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={2}

                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"} />

                </div>
            </div>
        );
    }
}


export default withRouter(GetChapterOfStory);

