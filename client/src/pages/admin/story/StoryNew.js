import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { StoryForm } from '.';

function StoryNew({ history }) {
  return (
    <div>
      <h1 className="title">Quản lý truyện</h1>
      <Breadcrumb>
        <LinkContainer to="/admin/stories">
          <Breadcrumb.Item>Danh sách truyện</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Thêm truyện</Breadcrumb.Item>
      </Breadcrumb>
      <StoryForm history={history}></StoryForm>
    </div>
  )
}

export default StoryNew

