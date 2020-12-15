
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { StoryForm } from '.';
import StoryAPI from '../../../services/storyAPI';

function StoryEdit({ history, match }) {
  const id = match.params.id

  const [stories, setStories] = useState({
    name: '', description: '', categories: '', author: '', image: '', status: 'unfulfilled'
  })

  useEffect(() => {
    StoryAPI.getById(id)
      .then((response) => {
        // console.log(response)
        setStories(response)})
  }, [])

  return (
    <div>
      <h1 className="title">Quản lý truyện</h1>
      <Breadcrumb>
        <LinkContainer to="/admin/stories">
          <Breadcrumb.Item>Danh sách truyện</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Chỉnh sửa truyện</Breadcrumb.Item>
      </Breadcrumb>
      <StoryForm history={history} stories={stories} isEdit={true}></StoryForm>
    </div >
  )
}

export default StoryEdit

