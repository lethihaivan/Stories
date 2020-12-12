import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const propTypes = {
    items: PropTypes.object.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number
}

const defaultProps = {
    initialPage: 1
}

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pager: {}
        };
        console.log(this.props)
    }

    componentWillMount() {

        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
            console.log(this.props.items && this.props.items.length)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        var items = this.props.items && this.props.items;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }
        pager = this.getPager(this.props.items && this.props.items.length, page, 4, 4);
        var pageOfItems = this.props.items && this.props.items.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({ pager: pager });
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize, maxPagesToDisplay) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 4;
        maxPagesToDisplay = maxPagesToDisplay || 4;
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= maxPagesToDisplay) {
            startPage = 1;
            endPage = totalPages;
        } else {
            var halfwayPoint = Math.ceil(maxPagesToDisplay / 2);
            var pastHalfwayPoint = Math.floor(maxPagesToDisplay / 2) + 1;
            var beforeHalfwayPoint = halfwayPoint - 1;
            if (currentPage <= pastHalfwayPoint) {
                startPage = 1;
                endPage = maxPagesToDisplay;
            } else if (currentPage + beforeHalfwayPoint >= totalPages) {
                startPage = totalPages - (maxPagesToDisplay - 1);
                endPage = totalPages;
            } else {
                startPage = currentPage - halfwayPoint;
                endPage = currentPage + beforeHalfwayPoint;
            }
        }

        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {

            return null;
        }

        return (
            <div className="pagination">
                <ul style={{
                    "display": "flex",
                    "justifyContent": " center"
                }}  >
                    <ol className={pager.currentPage === 1 ? 'disabled' : ''} >
                        <a onClick={() => this.setPage(1)}>First</a>
                    </ol>
                    <ol className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                    </ol>
                    {pager.pages.map((page, index) =>
                        <ol key={index} className={pager.currentPage === page ? 'active' : ''} >
                            <a onClick={() => this.setPage(page)}>{page}</a>
                        </ol>
                    )}
                    <ol className={pager.currentPage === pager.totalPages ? 'disabled' : ''} >
                        <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                    </ol>
                    <ol className={pager.currentPage === pager.totalPages ? 'disabled' : ''} >
                        <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                    </ol>
                </ul>
            </div>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
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
