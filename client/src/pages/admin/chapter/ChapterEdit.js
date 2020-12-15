import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ChapterForm } from '.';
import { getById } from '../../../services/ChapterAPI';

function ChapterEdit({ history, match }) {
  const id = match.params.id
  const [chapter, setChapter] = useState({ name: '', index: '', storyId: '', content: '' })

  useEffect(() => {
    getById(id)
      .then((response) => {
        console.log(response, '123')
        setChapter(response)
      })
  }, [])

  return (
    <div>
      <h1 className="title">Quản lý chương</h1>
      <Breadcrumb>
        <LinkContainer to="/admin/chapters">
          <Breadcrumb.Item>Danh sách chương</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Chỉnh sửa chương</Breadcrumb.Item>
      </Breadcrumb>
      <ChapterForm history={history} chapter={chapter} isEdit={true}></ChapterForm>
    </div>
  )
}

export default ChapterEdit

