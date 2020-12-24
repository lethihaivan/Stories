import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import JoditEditor from "jodit-react";

import StoryAPI from '../../../services/storyAPI';
import { create, update } from '../../../services/ChapterAPI';

function UserForm(props) {
  const [chapter, setChapter] = useState({ name: '', index: '', storyId: '', content: '' })
  const [options, setOptions] = useState([])
  const [content, setContent] = useState('')
  useEffect(() => {
    StoryAPI.getAll().then(stories => setOptions([...stories.data]))
  }, [])

  const submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    if (props.isEdit) {
      update(props.chapter.id, { ...chapter, content, index: +chapter.index, })
        .then(res => props.history.push('/admin/chapters'))
    } else {
      create({ ...chapter, content, index: +chapter.index, })
        .then(res => props.history.push('/admin/chapters'))
    }

  };

  useEffect(() => {
    if (props.isEdit && props.chapter) {
      setChapter({
        name: props.chapter.name,
        index: props.chapter.index,
        storyId: props.chapter.storyId,
        content: props.chapter.content,
      })
      setContent(props.chapter.content)
    }
  }, [props.chapter])

  const changeHandler = event => {
    setChapter({ ...chapter, [event.target.name]: event.target.value });
  };

  const handleInputText = (value, nameField) => {
    // setChapter({ ...chapter, [nameField]: value });
    setContent(value)
  };
  return (
    <div>
      <form
        className="needs-validation"
        onSubmit={submitHandler}
        noValidate
      >
        <MDBRow>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="selectStory"
              className="grey-text"
            >
              Truyện <span style={{ color: 'red' }}>(*) </span>
            </label>
            <select id="selectStory" name="storyId" className="browser-default custom-select" onChange={changeHandler} value={chapter.storyId} disabled={props.isEdit}>
              <option>Chọn tên truyện</option>
              {options.map((op, index) => {
                return (
                  <option key={op.id} value={op.id}>{op.name}</option>
                )
              })}
            </select>
            <div className="invalid-feedback">
              Vui lòng chọn truyện.
              </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="nameChapter"
              className="grey-text"
            >
              Tên chương <span style={{ color: 'red' }}>(*) </span>
            </label>
            <input
              value={chapter.name}
              name="name"
              onChange={changeHandler}
              type="text"
              id="nameChapter"
              className="form-control"
              placeholder="Tên chương"
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="indexChapter"
              className="grey-text"
            >
              Chỉ mục(Số chương) <span style={{ color: 'red' }}>(*) </span>
            </label>
            <input
              value={chapter.index}
              onChange={changeHandler}
              type="number"
              id="indexChapter"
              className="form-control"
              name="index"
              placeholder="Chỉ mục"
              required
            />
            <div className="invalid-feedback">
              Vui lòng nhập chương thứ
              </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="contentChapter"
              className="grey-text"
            >
              Nội dung <span style={{ color: 'red' }}>(*) </span>
            </label>
            <JoditEditor
              tabIndex={1}
              name="content"
              value={content}
              onChange={(value) => handleInputText(value, 'content')}
            />
            <div className="invalid-feedback">
              Vui lòng nhập nội dung truyện
              </div>
          </MDBCol>
        </MDBRow>

        <MDBBtn color="primary" type="submit">
          {props.isEdit ? 'Cập nhật' : 'Tạo mới'}
        </MDBBtn>
      </form>
    </div >
  );
}

export default UserForm;