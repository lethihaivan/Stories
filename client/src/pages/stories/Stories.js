
import React, { Component } from 'react';

import Pagination from '../../components/Pagination';
import Story from './Story';
//import StoryAPI from ".../services/storyAPI";

import { storyAPI } from '../../services';
// export const Story = (props) => {
//  const { match, location } = props
//  const [stories, setStories] = useState([])

//  useEffect(() => {
//     console.log(match, location, 'story')
//    StoryAPI.getAll()
//        .then(res => setStories(res))
//  }, [])
class Stories extends Component {
  state = { allStories: [], currentStories: [], currentPage: null, totalPages: null };
  componentDidMount() {
    const { data: allStories = [] } = storyAPI.list();
    this.setState({ allStories });
  }
  onPageChanged = data => {
    const { allStories } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentStories = allStories.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentStories, totalPages });
  }

  render() {
    const { allStories, currentStories, currentPage, totalPages } = this.state;
    const totalStories = allStories.length;
    console.log(currentStories);
    if (totalStories === 0) return null;
    return (
      <div className="container mb-5">
        <div className="row d-flex flex-row py-5">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              {currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{currentPage}</span> / <span className="font-weight-bold">{totalPages}</span>
                </span>
              )}
            </div>
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination /*totalRecords={totalStories}*/ pageLimit={10} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
          </div>
          {currentStories.map(story => <Story key={story.id} story={story} />)}
        </div>
      </div>
    );
  }

}

export default Stories;

