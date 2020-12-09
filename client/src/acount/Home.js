import React, { useState, useEffect } from "react";
import Chapter from "../pages/chapters/Chapter";
import Category from "../pages/categories/Category";
import StoryItem from "../pages/stories/StoryItem";
import GetChapterOfStory from "../pages/stories/GetChapterOfStory";
import UserService from "../services/user.service";
import { Link } from "react-router-dom";
import SearchStory from "../components/Search/SearchStory"
const Home = () => {
  // const [content, setContent] = useState("");
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
          {/*  {stories.map((c) => <Link to={`/stories/${c.id}`} key={c.id}>{c.name}</Link>)} */}
          {stories.data && stories.data.map(story => <StoryItem key={story.id} {...story}
            style={{ "bottom": "1000px" }} />)}
          <div className="container" id="list-index">
            <div class="row text-center"></div>
            <div className="list list-truyen list-new list-new-col col-truyen-main" >
              <h2><a href="" >Truyện mới cập nhật</a></h2>
              <div className="title-list"
                style={{ "top": "150px" }}
              >
                {stories.data && stories.data.map(story =>
                  <div class="row">

                  </div>
                )}

              </div>





            </div>

          </div>
        </div>
      </body>

    </div >

  );
};

export default Home;
//className="jumbotron"


/*
<div class="col-xs-9 col-sm-6 col-md-5 col-title"
style={{ " color": "#4E4E4E" }}>
<span class="glyphicon glyphicon-chevron-right">
  <Link>{story.name}</Link>
</span>     </div>
<div class="hidden-xs col-sm-3 col-md-3 col-cat text-888">
<a href="" ></a>
</div>
<div class="col-xs-3 col-sm-3 col-md-2 col-chap text-info">

</div>
<div class="hidden-xs hidden-sm col-md-2 col-time text-888">18 phút trước </div> */