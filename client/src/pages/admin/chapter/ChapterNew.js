import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ChapterForm } from '.';

function ChapterNew({ history }) {
  return (
    <div>
      <h1 className="title">Quản lý chương</h1>
      <Breadcrumb>
        <LinkContainer to="/admin/chapters">
          <Breadcrumb.Item>Danh sách chương</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Thêm chương</Breadcrumb.Item>
      </Breadcrumb>
      <ChapterForm history={history}></ChapterForm>
    </div>
  )
}

export default ChapterNew

