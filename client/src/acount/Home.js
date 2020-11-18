import React, { useState, useEffect } from "react";
import Stories from "../pages/stories/Stories";
import { storyAPI } from "../services";
import UserService from "../services/user.service";
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{ }</h3>
        <Stories />
        <button onClick={() => storyAPI.create()}
        >create story</button>
      </header>
    </div>
  );
};

export default Home;
