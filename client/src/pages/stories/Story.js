import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import * as StoryAPI from "../../services/stories";
import "./Story.css";
import ChapterDetail from "../chapters/ChapterDetail"

//import Flag from 'react-flags';
const Story = ({ match }) => {
  console.log(match.params.id);
  const [story, setStories] = useState([]);

  useEffect(() => {
    StoryAPI.getById(match.params.id).then(res => {
      const story = res.data;
      setStories(story);
    });
  }, []);
  console.log(match.params.id);
  return (
    <div>

      {/* {stories.map(story => (
          <li key={story.id}>
            {story.name}, {story.description},{" "}
            <img src={story.url} alt={story.title} />
          </li> */}

      {/* ))} */}
      <div className="col-xs-12 col-info-desc">
        <div className="title-list book-intro"><h2>Thông tin truyện</h2></div>
        <h3 className="title" itemprop="name">{story.name} Ten truyen</h3>
        <div className="info-holder">
          <div className="book" style={{ "top": "-70px" }} >
            <img src="" alt={story.name}
            />
          </div>
          <div className="info">
            <div>
              <h3>Tác giả:<a href="" > {/* {story.author.name} */}Mạc Mặc</a></h3>
            </div>
            <div>
              <h3>Thể loại: <a href="" >{/* {story.catalogies.title} */}Tiên Hiệp</a></h3>
            </div>
            <div>
              <h3>Trạng thái: <span class="text-primary">Đang ra</span> </h3>
            </div>
          </div>
        </div>
        <div className="infor-story">
          <div className="desc-text" style={{ "height": "auto" }} >
            <p>Truyện Vũ Luyện Điên Phong là một tác phẩm truyện thuộc thể loại Đông phương
                  <a target="_blank" href="https://truyenfull.vn/the-loai/huyen-huyen/">huyền huyễn</a>
                   của tác giả <a target="_blank" href="https://truyenfull.vn/tac-gia/mac-mac/">Mạc Mặc</a>
                    nổi tiếng. Nội dung câu chuyện trong Vũ Luyện Điên Phong xoay quanh Dương Khai - một đệ tử thí luyện của Lăng Tiêu Các. Khởi đầu, Dương Khai chỉ là một gã quét rác, sai vặt ... vì vô tình mặt được một cuốn Hắc thư thần bí, từ đó chàng bước vào con đường võ đạo dài đằng đẵng nhưng cũng lắm gian truân trắc trở và đau thương...”</p>
            <p>Vì sao mà một tên quét rác lại có thể thành anh hùng trứ danh thiên hạ, vì sao mà một tên hàu sai vặt lại chiếm được những mỹ nữ sắc nước hương trời trong thiên hạ ?&nbsp;Trong thế giới của Vũ Luyện Điên Phong, đỉnh cao nhất của võ đạo, chính là cô độc, là tịch mịch, là đằng đẵng miệt mài, cao xứ bất thắng hàn.</p>
            <p>Sống trong nghịch cảnh, phát triển trong tuyệt địa, bất khuất không bỏ cuộc, mới có thể phá vỡ được cực đạo của võ thuật. Có thể nói dưới bút văn giản dị nhưng vô cùng súc tích đầy hình ảnh của tác giả Mạc Mặc, những trận quyết đấu máu lửa trong Vũ Luyện Điên Phong như diễn ra hết sức sống động trước mắt độc giả...</p>
          </div>
        </div>
      </div>
      <ChapterDetail ></ChapterDetail>
    </div>
  );
};


export default Story;