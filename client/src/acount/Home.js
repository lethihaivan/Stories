import React, { useState, useEffect } from "react";
import Category from "../pages/categories/Category";
import StoryItem from "../pages/stories/StoryItem";
import UserService from "../services/user.service";

const Home = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setStories(response.data);
      },
      (error) => {
        const stories =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        console.log(stories);
      }
    );
  }, []);
  console.log(stories);
  return (
    <div >
      <body >
        <div id="wrap"  >
          <div className="title-list"
            style={{ "display": "flex" }}>
            <h2><a href="" title="Truyện hot">
              Truyện hot <span className="glyphicon glyphicon-fire"></span></a>
            </h2>
            {<Category style={{ 'fontSize': '13px' }} />}
          </div>
          <div className="index-intro" style={{ display: 'block' }} >
            <div className="item  story" >
              <a href="" >
                <img src="https://static.8cache.com/cover/o/eJzLyTDT1y0KTEpNdQkIzi3O1w8LMA9I8tdNSy_y1HeEgly3ZP0CXRe34CxD50iPZP1yIzNT3QxjSzMAZpUSoA==/chua-te-chi-vuong.jpg"
                  class="img-responsive item-img" />
              </a>
            </div></div>
          {stories.data && stories.data.map(story => <StoryItem key={story.id} {...story}
            style={{ "bottom": "1000px" }} />)}

        </div>
      </body>
    </div >

  );
};

export default Home;
