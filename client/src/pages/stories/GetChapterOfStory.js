import React, { Component } from "react";
import axios from 'axios';
import "./Pagination.css";
import ReactPaginate from 'react-paginate';
//import Pagination from "../../components/Pagination";
import ItemChapter from "./ItemChapter"
const PER_PAGE = 10;
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
    }


    onPageChanged = currentPage => {
        currentPage = this.state.dataChapter.currentPage;
        this.setState({ currentPage });
    }

    render() {
        const offset = this.state.dataChapter.currentPage * PER_PAGE;
        const listChapter = this.state.dataChapter.data;
        const currentPageData = listChapter && listChapter
            .slice(offset, offset + PER_PAGE)
            .map(({ chapter }) => <ItemChapter key={chapter.index} {...chapter} />
            );

        const pageCount = Math.ceil(listChapter && listChapter.length / PER_PAGE);

        console.log(this.state.dataChapter && listChapter);
        return (

            <div className="Container" style={{ "top": "900px" }}>
                {currentPageData}
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pageCount}
                    onPageChange={this.onPageChanged}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"} />

            </div>

        );
    }
}



export default GetChapterOfStory;

