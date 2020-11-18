import React from 'react';
import PropTypes from 'prop-types';
//import Flag from 'react-flags';

const Story = props => {
  const { id: code = '', imageUrl = null, author = {}, name  } = props.name || {};
  return (
    <div className="col-sm-6 col-md-4 story-card">
      <div className="story-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
        <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
        
          <img story={code} format="png" style= {{width: "200px" , height:"300px"}} src ={imageUrl} className="d-block h-100" />
        </div>
        <div className="px-3">
          <span className="story-name text-dark d-block font-weight-bold">{ author.name }</span>

          <span className="story-description text-secondary text-uppercase">{ name }</span>

        </div>

      </div>
    </div>
  )
}

Story.propTypes = {
  story: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    categories: PropTypes.shape({
        title: PropTypes.string.isRequired,
        __v: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired,
    chapters: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.shape({
        role: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    updatedAt: PropTypes.instanceOf(Date).isRequired,
    comments: PropTypes.array.isRequired
  }).isRequired
};

export default Story;