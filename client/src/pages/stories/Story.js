
import React, { useEffect, useState } from "react";
import * as StoryAPI from "../../services/stories";
import "./Story.css";
//import ItemChapter from "./ItemChapter"
import GetChapterOfStory from "./GetChapterOfStory"
//import Chapter from "../chapters/Chapter";
import { Link } from "react-router-dom";
import AppPagination from "../../components/Pagination/AppPagination";
import UserComment from "../comments/UserComment";

//import Flag from 'react-flags';
const Story = ({ match, location }) => {
  console.log(match.params.id);
  const storyId = match.params.id
  const [story, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState({ story: false, chapter: false });
  const [chapters, setChapters] = useState([])

  useEffect(() => {
    setIsLoading({ ...isLoading, story: true });
    StoryAPI.getById(storyId).then(res => {
      const story = res;
      setStories(story);
    })
      .catch(err => console.log(err))
      .finally(() => setIsLoading({ ...isLoading, story: false }))
  }, []);

  /* 
    useEffect(() => {
      // Call again each when history.push query params. -> chapter updated
      setIsLoading({ ...isLoading, chapter: true });
      ChapterAPI.getChaptersOfStory(storyId)
        .then(chapters => setChapters(chapters))
        .catch(err => console.log(err))
        .finally(() => setIsLoading({ ...isLoading, chapter: false }))
    }, [location.search]) */

  return (
    <div>
      {
        isLoading.story ? (
          <div>Loading ...</div>
        ) : (
            <div>
              <div className="col-xs-12 col-info-desc">
                <div className="title-list book-intro"><h2>Thông tin truyện
                <h3 className="title" >{story.name} </h3>
                </h2>
                </div>

                <div style={{ "display": "flex" }}>
                  <div className="imgstory info-holder">
                    <div className="book" style={{ "top": "20px" }} >
                      <img src={story && story.description} alt={story.name}
                        style={{
                          "width": '220px',
                          "height": "330px"
                        }}
                      />
                    </div>
                    <div className="info">
                      <div >
                        <h3>Tác giả:<a href="" > {story && story.author && story.author.fullName}  </a></h3>
                      </div>
                      <div>
                        <h3>Thể loại: <a href="" >{story && story.categories && story.categories.title} </a></h3>
                      </div>
                      <div>
                        <h3>Trạng thái: <span class="text-primary">{story && story.status}</span> </h3>
                      </div>
                    </div>
                  </div>
                  <div className="infor-story" style={{
                    'top': '200px',
                    "justifyContent": "space-between",
                    "width": "500px",
                    "height": "50px",
                    "marginRight": "0px"
                  }}>
                    <div className="desc-text desc-text-full" style={{ 'fontSize': '13px' }}  >
                      <br>
                      </br>
                      <br>
                      </br>
                      <p>Truyện THẦN ĐẠO ĐAN TÔN là một tác phẩm truyện thuộc thể loại Đông phương
                    <a target="_blank" href="">huyền huyễn</a>
                     của tác giả <a target="_blank" href="">Mạc Mặc</a>
                      nổi tiếng. Nội dung câu chuyện trong Vũ Luyện Điên Phong xoay quanh Dương Khai - một đệ tử thí luyện của Lăng Tiêu Các. Khởi đầu, Dương Khai chỉ là một gã quét rác, sai vặt ... vì vô tình mặt được một cuốn Hắc thư thần bí, từ đó chàng bước vào con đường võ đạo dài đằng đẵng nhưng cũng lắm gian truân trắc trở và đau thương...”</p>
                      <p>Vì sao mà một tên quét rác lại có thể thành anh hùng trứ danh thiên hạ, vì sao mà một tên hàu sai vặt lại chiếm được những mỹ nữ sắc nước hương trời trong thiên hạ ?&nbsp;Trong thế giới của Vũ Luyện Điên Phong, đỉnh cao nhất của võ đạo, chính là cô độc, là tịch mịch, là đằng đẵng miệt mài, cao xứ bất thắng hàn.</p>
                      <p>Sống trong nghịch cảnh, phát triển trong tuyệt địa, bất khuất không bỏ cuộc, mới có thể phá vỡ được cực đạo của võ thuật. Có thể nói dưới bút văn giản dị nhưng vô cùng súc tích đầy hình ảnh của tác giả Mạc Mặc, những trận quyết đấu máu lửa trong Vũ Luyện Điên Phong như diễn ra hết sức sống động trước mắt độc giả...</p>
                    </div>
                  </div>

                  <div className="title-list">

                  </div>
                  {/*   <GetChapterOfStory storyId={story && story && story.id} > </GetChapterOfStory> */}

                </div>
                <div className="title-list" style={{
                  "marginBottom": "15px",
                  "marginTop": "50px"
                }} ><h2>Danh sach chuong</h2></div>
                <AppPagination storyId={story && story && story.id} />
                <div className="title-list" style={{
                  "marginBottom": "15px",
                  "marginTop": "50px"
                }} ><h2>Bình luận truyện</h2></div>
                <div>
                  <UserComment storyId={story && story && story.id}></UserComment>
                </div>
              </div>

            </div>
          )
      }

    </div>

  );
};


export default Story;