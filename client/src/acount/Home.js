import React, { useState, useEffect } from "react";
import Category from "../pages/categories/Category";
import ListStory from "../pages/stories/ListStory";
import StoryItem from "../pages/stories/StoryItem";
import Pagination from "../components/Pagination/Pagination"
import UserService from "../services/user.service";
import StoryFull from "../pages/stories/StoryFull";
import StoryOfCatelogies from "../pages/categories/StoryOfCatelogies";

const Home = (match) => {
  const [stories, setStories] = useState([]);
  const [activePage, setactivePage] = useState([]);
  const onChangePage = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setactivePage(pageNumber);

  };


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

      }
    );
  }, []);

  const listStory = stories.data && stories.data.map((story, index) => {
    return story.status == "unfulfilled" && <ListStory stt={index + 1} key={story.id} {...story} author={story.author.fullName} />
  })
  return (
    <div >
      <body >
        <div id="wrap"  >
          <div className="title-list"
            style={{ "display": "flex" }}>
            <h2><a href="" title="Truyện hot">
              Truyện hot <span className="glyphicon glyphicon-fire"></span></a>
            </h2>

          </div>
          <div className="index-intro" style={{ display: 'block' }} >
            <div className="item  story" >
              <a href="" >
                <img src="https://static.8cache.com/cover/o/eJzLyTDT1y0KTEpNdQkIzi3O1w8LMA9I8tdNSy_y1HeEgly3ZP0CXRe34CxD50iPZP1yIzNT3QxjSzMAZpUSoA==/chua-te-chi-vuong.jpg"
                  class="img-responsive item-img" />
              </a>
            </div></div>
          {stories.data && stories.data.map(story => story.status == "unfulfilled" && <StoryItem key={story.id} {...story}
            style={{ "bottom": "1000px" }} />)}

        </div>

      </body>

      <div >

        <div className="list"
          style={
            {
              "display": "flex",
              "display": "-webkit-flex",

            }}>

          <table className="content-table">
            <thead>
              <tr>
                <th>TRUYỆN MỚI CẬP NHẬT</th>
                <th>Thể loại</th>
                <th>Tác giả</th>
                <th>Cập Nhật</th>
              </tr>
            </thead>
            <tbody>
              {listStory}
            </tbody>

          </table>
          <div style={{

            "marginTop": "35px",
            "fontSize": "18px",
            "height": "80px",
            "width": "200px",
            "marginLeft": "20px",
            "background": "#A9A9A9",
            "marginBottom": "80px",
            "boxSizing": "border-box"

          }}><Category style={{

          }}>

            </Category></div>



        </div>

        {/* <Pagination items={stories.data} onChangePage={this.props.onChangePage} /> */}

        <div>

        </div>
      </div>
      <div>
        <h3>TRUYỆN ĐÃ HOÀN THÀNH
        <span class="glyphicon glyphicon-menu-right"></span>
        </h3>
        <div className="row">
          {stories.data && stories.data.map(story =>

            story.status == "full" && <StoryItem key={story.id} {...story}
              style={{ "bottom": "1000px" }} />)}
        </div>
      </div>
    </div >

  );
};

export default Home;
