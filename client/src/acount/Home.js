import React, { useState, useEffect } from "react";
import Chapter from "../pages/chapters/Chapter";
import Category from "../pages/categories/Category";
import StoryItem from "../pages/stories/StoryItem";
//import { storyAPI } from "../services";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";
import "../pages/stories/Story.css";
//import "./Acount.css";
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
      <body>
        <div id="wrap">
          <div className="title-list"
            style={{ "display": "flex" }}>
            <h2><a href="" title="Truyện hot">
              Truyện hot <span className="glyphicon glyphicon-fire"></span></a>
            </h2>
            <Category />


          </div>

          <div className="index-intro" style={{ display: 'block' }} >
            <div className="item  story" >
              <a href="" >
                <img src="https://static.8cache.com/cover/o/eJzLyTDT1y0KTEpNdQkIzi3O1w8LMA9I8tdNSy_y1HeEgly3ZP0CXRe34CxD50iPZP1yIzNT3QxjSzMAZpUSoA==/chua-te-chi-vuong.jpg"
                  class="img-responsive item-img" />
              </a>
            </div></div>


          {/*  {stories.map((c) => <Link to={`/stories/${c.id}`} key={c.id}>{c.name}</Link>)} */}
          {stories.data && stories.data.map(story => <StoryItem key={story.id} {...story} />)}

          <div className="container" id="list-index">
            <div class="row text-center"></div>
            <div className="list list-truyen list-new list-new-col col-truyen-main" >
              <div className="title-list">
                <h2><a href="" >Truyện mới cập nhật</a></h2>
                <a href="">
                  <span className="glyphicon glyphicon-menu-right"></span>
                </a><select id="new-select" className="form-control new-select" >
                  <option value="all">Tất cả</option></select>
              </div>
              <div className="row" >
                <div className="col-name  col-title">
                  <h3 itemprop="name"><a href="" title="" >
                    <span className="glyphicon glyphicon-chevron-right"></span>
                Ten Truyen</a>
                  </h3><span className="label-title label-hot">
                  </span>
                </div>
                <div className="catalogy-name ">
                  <a href="" title="Ngôn Tình">Ngôn Tình</a>
                  <a href="" title="Trọng Sinh">Trọng Sinh</a>
                </div>
                <div className="chapter-name">
                  <a href="truyen/chuong" title="">
                    <span className="chapter-text"><span>Chương </span></span>167</a></div>
                <div className="">8 phút trước </div>
              </div>

            </div>
            <div className="text-center col-truyen-side"
              style={{ "top": "510px" }}
            >
              <div className="list list-truyen list-history">

                <div className="list list-truyen list-cat wrap">
                  <div className="title-list">
                    <h4>Thể loại truyện</h4>
                  </div><div className="row">
                    <div className="row-catalogy">
                      <a href="the loai " title="Truyện Tiên Hiệp">Tiên Hiệp</a>
                    </div><div className="row-catalogy">
                      <a href="the loai" title="Truyện Kiếm Hiệp">Kiếm Hiệp</a>
                    </div>
                  </div></div>
              </div>
            </div>
          </div>

        </div>
      </body>
    </div>

  );
};

export default Home;
//className="jumbotron"
