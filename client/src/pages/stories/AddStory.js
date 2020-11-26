import React, { useState } from 'react';
//import { storyAPI } from "../services";
import CKEditor from 'react-ckeditor-component';
import axios from 'axios';
import { useSelector } from "react-redux";

const AddStory = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const initialState = {
        name: '',
        imageUrl: '',
        categories: 'Kiem Hiep',
        description: '',
        chapters: [],
        instructions: '',
        username: ''
    };
    /* useEffect(() => {
         this.setState({
             username: this.props.auth.currentUser.username
         })
     });*/
    const [story, setStory] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setStory({ ...story, [name]: value });
    };
    const handleEditorChange = event => {
        const newContent = event.editor.getData();
        story.instructions = newContent;
    }


    const validateForm = () => {
        const { name, imageUrl, categories, description, chapters } = story;
        const isInvalid = !name || !categories || !description || !imageUrl;
        return isInvalid;
    }
    const saveTutorial = () => {
        var data = {
            title: story.title,
            description: story.description
        };
        const create = (data) => axios.post('/stories', data)

        create(data)
            .then(response => {
                setStory({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    imageUrl: response.data.imageUrl,
                    categories: response.data.categories,

                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    }
    return (
        <div className="App">
            <h2 className="App">Add Story</h2>
            <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Story Name" value={story.name} onChange={handleInputChange} />
                <input type="text" name="imageUrl" placeholder="Story Image" value={story.imageUrl} onChange={handleInputChange} />
                <select name="category" value={story.categories} onChange={handleInputChange}>
                    <option value="Thriller">Thriller</option>
                    <option value="Horror">Horror</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                </select>
                <input type="text" name="description" placeholder="Add Description" value={story.description} onChange={handleInputChange} />
                <label htmlFor="instructions">Add Story</label>
                <CKEditor
                    name="instructions"
                    content={story.instructions}
                    events={{ "change": handleEditorChange }}
                />
                {/* <textarea name="instructions" placeholder="Add Your Story" rows="100" cols="80" value={instructions} onChange={this.handleChange}></textarea> */}
                <button disabled={validateForm()} onClick={saveTutorial} type="submit" className="button-primary">Submit</button>

            </form>
        </div>
    );

}

/*  newTutorial = () => {
      setStory(initialState);
      setSubmitted(false);

  }*/





export default AddStory;
