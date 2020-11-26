import axios from 'axios';
import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
//import { Query } from 'react-apollo';
import "./Story.css";


const Stories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:9091/api/stories`).then(res => {
      const stories = res.data;
      setStories(stories);
    });
  }, []);
  console.log(stories.image);



  return (
    <div className="App">
      <div>

      </div>
    </div>
  )

};


export default Stories;