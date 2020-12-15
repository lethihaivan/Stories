import React, { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBBtn, } from "mdbreact";
import JoditEditor from "jodit-react";

import StoryAPI from '../../../services/storyAPI';
// import { create } from '../../../services/ChapterAPI';

function StoryForm(props) {
  const [stories, setStories] = useState({
    name: '', description: '', categories: '', author: '', image: '', status: 'unfulfilled'
  })
  const [options, setOptions] = useState({ categories: [], authors: [] })
  const [content, setContent] = useState('')
  useEffect(() => {
    fetchDataOptions()
  }, [])

  useEffect(() => {
    if (props.stories) {
      console.log()
      setStories({
        name: props.stories.name,
        description: props.stories.description,
        image: props.stories.image,
        status: props.stories.status,
        author: props.stories.author.id,
        categories: props.stories.categories[0] ? props.stories.categories[0].id : ''
      })
      setContent(props.stories.description)
    }
  }, [props.stories])

  const fetchDataOptions = async () => {
    const [authors, categories] = await Promise.all([StoryAPI.getAuthors(), StoryAPI.getCategories()])
    console.log(authors, categories)
    setOptions({ categories, authors })
  }


  const submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    if (props.isEdit) {
      StoryAPI.update(props.stories.id, { ...stories, description: content })
        .then(res => props.history.push('/admin/stories'))
    } else {
      StoryAPI.create({ ...stories, description: content })
        .then(res => props.history.push('/admin/stories'))
    }
  };

  const changeHandler = event => {
    setStories({ ...stories, [event.target.name]: event.target.value });
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
              htmlFor="nameStories"
              className="grey-text"
            >
              Tên truyện <span style={{ color: 'red' }}>(*) </span>
            </label>
            <input
              value={stories.name}
              name="name"
              onChange={changeHandler}
              type="text"
              id="nameStories"
              className="form-control"
              placeholder="Nhập tên truyện"
              required
            />
            <div className="invalid-feedback">
              Vui lòng nhập tên truyện.
              </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="selectAuthor"
              className="grey-text"
            >
              Tên tác giả <span style={{ color: 'red' }}>(*) </span>
            </label>
            <select id="selectAuthor" name="author" className="browser-default custom-select" onChange={changeHandler} value={stories.author}>
              <option>Chọn tên tác giả</option>
              {options.authors.map((op, index) => {
                return (
                  <option key={op.id} value={op.id} >{op.fullName}</option>
                )
              })}
            </select>
            <div className="invalid-feedback">
              Vui lòng chọn tác giả.
              </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>

          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="selectCategories"
              className="grey-text"
            >
              Thể loại <span style={{ color: 'red' }}>(*) </span>
            </label>

            {/* <MDBSelect id="selectCategories" name="categories">
              <MDBSelectInput selected="Choose your option" />
              <MDBSelectOptions>
                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                {options.categories.map((op, index) => {
                  return (
                    <MDBSelectOption key={op.id} value={op.id}>{op.title}</MDBSelectOption>
                  )
                })}

              </MDBSelectOptions>
            </MDBSelect> */}
            <select id="selectCategories" name="categories" className="browser-default custom-select" value={stories.categories} onChange={changeHandler}>
              <option>Chọn thể loại</option>
              {options.categories.map((op, index) => {
                return (
                  <option key={op.id} value={op.id}>{op.title}</option>
                )
              })}
            </select>
            <div className="invalid-feedback">
              Vui lòng chọn thể loại.
              </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="imageStories"
              className="grey-text"
            >
              Link ảnh
            </label>
            <input
              value={stories.image}
              name="image"
              onChange={changeHandler}
              type="text"
              id="imageStories"
              className="form-control"
              placeholder="Tên truyện"
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" className="mb-3">
            <label
              htmlFor="contentChapter"
              className="grey-text"
            >
              Mô tả
            </label>
            <JoditEditor
              tabIndex={1}
              name="description"
              value={content}
              onChange={(value) => handleInputText(value, 'description')}
            />
          </MDBCol>
        </MDBRow>

        <MDBBtn color="primary" type="submit">
          {props.isEdit ? 'Cập nhật' : 'Tạo mới'}
        </MDBBtn>
      </form>
    </div >
  );
}

export default StoryForm;