import React from 'react'
import axios from 'axios';
//import { ChapterAPI } from '../../services'
//import Icon from '@material-ui/core/Icon';
import './Chapter.css'
import { Link } from "react-router-dom";
//  chapter {chapter.id} / {chapter.chapter_name}
class ChapterDetail extends React.Component {
    state = {
        id: "",
        story: {},
        activeChapter: '',
        modalTitle: '',
        modalDescription: '',
        isLoading: false,
        errors: null
    }
    getStory() {
        axios
            .get(`http://localhost:9091/api/stories/${this.state.id}`)
            .then(response => {
                this.setState({
                    story: response.data, /// .story,
                    isLoading: true
                });
                console.log(response.data)
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
        console.log(this.props.id)
        // this.getStory(id);
    }

    handleModalOpen = (idx) => {
        this.setState({
            activeChapter: idx,
            modalTitle: this.state.story.chapters[idx].name,
            modalDescription: this.state.story.chapters[idx].description
        });
    };


    handleChange(event) {
        this.setState({ story: event.target.value, id: event.target.value });
    }


    handleNextProject = () => {

        var arr = this.state.story.chapters.length;
        var idx = this.state.activeChapter + 1;
        var idx = idx % arr;

        this.setState({
            activeChapter: idx,
            modalTitle: this.state.story.chapters[idx].name,
            modalDescription: this.state.story.chapters[idx].description
        });
    }

    handlePrevProject = () => {
        var arr = this.state.story.chapters.length;
        var idx = this.state.activeChapter;
        if (idx === 0) {
            var idx = arr - 1;
        } else {
            var idx = idx - 1;
        }
        this.setState({
            activeChapter: idx,
            modalTitle: this.state.story.chapters[idx].name,
            modalDescription: this.state.story.chapters[idx].description
        });
    }

    render() {
        console.log(this.state)

        const { story, isLoading } = this.state;
        function nextTitle(idx, arr) {
            var i = idx + 1;
            var i = i % arr.length;
            return arr[i];
        }

        function prevTitle(idx, arr) {
            if (idx === 0) {
                var i = arr.length - 1;
            } else {
                var i = idx - 1;
            }
            return arr[i];
        }
        return (
            <div>
                <div className="nav-chapter" >
                    <ul>
                        <li><a href="#"></a></li>
                        <li><a href="#"> </a></li>
                        <li><a href="#"></a></li>
                    </ul>

                </div >
                <div>
                    <div className="content-chapter">
                        <h3>Ten Truyen </h3>
                        <h5><Link> Ten chuong</Link></h5>
                        <div>
                            <Modal
                                title={this.state.modalTitle}
                                description={this.state.modalDescription}
                                previousTitle={prevTitle(this.state.activeProject, story)}
                                nextTitle={nextTitle(this.state.activeProject, story)}
                                onModalClose={this.handleModalClose}
                                onNext={this.handleNextProject}
                                onPrev={this.handlePrevProject}
                            />

                        </div>
                    </div>
                </div>

            </div>

        );

    }
}

class Modal extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.description}</h3>
                <button onClick={this.props.onPrev}>{'\u2B05'} {this.props.previousTitle}</button>
                <button onClick={this.props.onNext}>{this.props.nextTitle} {'\u27A1'}</button>

            </div>
        );
    }
}



export default ChapterDetail;