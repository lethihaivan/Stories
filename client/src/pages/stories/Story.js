
import React, { useEffect, useState } from "react";
import * as StoryAPI from "../../services/stories";
import "./Story.css";

import GetChapterOfStory from "./GetChapterOfStory"

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

  console.log(story && story);
  return (
    <div>
      {
        isLoading.story ? (
          <div>Loading ...</div>
        ) : (
            <div>
              <div className="col-xs-12 col-info-desc">
                <div className="title-list book-intro"><h2>Thông tin truyện
                <h3 className="title" itemprop="name">{story.name} </h3>
                </h2>
                </div>

                <div style={{ "display": "flex" }}>
                  <div className="imgstory info-holder">
                    <div className="book" style={{ "top": "20px" }} >
                      <img src="https://static.8cache.com/cover/eJzLyTDW9_FJz4kMC_I1LarKSa4KDTJ3TzZOtsgwLQ02CyitMs11T_FLDS8tDIhIdDIMCUkvNjY3MTXOz0k3KiooT_Z0Ks7O0K0qyAjyKMvSLYp0SncODci2LTcyNNXNMDYyAgBIQyAx/xuyen-thanh-qua-tim-nho-cua-nam-phu.jpg" alt={story.name}
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
                        <h3>Trạng thái: <span class="text-primary">Đang ra</span> </h3>
                      </div>
                    </div>
                  </div>
                  <div className="infor-story" style={{
                    "justifyContent": "space-between",
                    "width": "500px",
                    "height": "50px",
                    "marginRight": "0px"
                  }}>
                    <div className="desc-text desc-text-full"  >
                      <p>Truyện Vũ Luyện Điên Phong là một tác phẩm truyện thuộc thể loại Đông phương
                    <a target="_blank" href="https://truyenfull.vn/the-loai/huyen-huyen/">huyền huyễn</a>
                     của tác giả <a target="_blank" href="https://truyenfull.vn/tac-gia/mac-mac/">Mạc Mặc</a>
                      nổi tiếng. Nội dung câu chuyện trong Vũ Luyện Điên Phong xoay quanh Dương Khai - một đệ tử thí luyện của Lăng Tiêu Các. Khởi đầu, Dương Khai chỉ là một gã quét rác, sai vặt ... vì vô tình mặt được một cuốn Hắc thư thần bí, từ đó chàng bước vào con đường võ đạo dài đằng đẵng nhưng cũng lắm gian truân trắc trở và đau thương...”</p>
                      <p>Vì sao mà một tên quét rác lại có thể thành anh hùng trứ danh thiên hạ, vì sao mà một tên hàu sai vặt lại chiếm được những mỹ nữ sắc nước hương trời trong thiên hạ ?&nbsp;Trong thế giới của Vũ Luyện Điên Phong, đỉnh cao nhất của võ đạo, chính là cô độc, là tịch mịch, là đằng đẵng miệt mài, cao xứ bất thắng hàn.</p>
                      <p>Sống trong nghịch cảnh, phát triển trong tuyệt địa, bất khuất không bỏ cuộc, mới có thể phá vỡ được cực đạo của võ thuật. Có thể nói dưới bút văn giản dị nhưng vô cùng súc tích đầy hình ảnh của tác giả Mạc Mặc, những trận quyết đấu máu lửa trong Vũ Luyện Điên Phong như diễn ra hết sức sống động trước mắt độc giả...</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )
      }
      <div id="list-chapter">
        <div className="title-list">
          <h2>Danh sách chương</h2>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <ul className="list-chapter">
                <h1></h1>
                <GetChapterOfStory storyId={story && story && story.id} > </GetChapterOfStory>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};


export default Story;