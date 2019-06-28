import React, {Component} from "react";
import "./SlackTags.css";

class SlackTags extends Component {
    state = {
        tags: [
            {
                title: '',
                url: '',
                key: Math.random().toString()
            }
        ]
    };

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.tags);
    };

    addTags = e => {
        e.preventDefault();
        this.setState({
            tags: [...this.state.tags,
                {title: '', url: '', key: Math.random().toString()}
            ]
        })
    };

    tagInputChangeHandler = (e, ndx) => {
        const tag = {...this.state.tags[ndx]};
        tag[e.target.name] = e.target.value;
        const tags = [...this.state.tags];
        tags[ndx] = tag;
        this.setState({tags});
    };

    removeTag = ndx => {
        const tags = this.state.tags;

        tags.splice(ndx, 1);
        this.setState({tags});
    };

    render() {
        return (
            <div className="pm-component" id="slack-tags">
                <form>
                    <h3 className="pm-title">Tag Managment <span className="pm-badge">{this.state.tags.length}</span></h3>
                    <div className="fixed">
                    {this.state.tags.map((tag, ndx) => (
                        <div key={tag.key} className="pm-row-inline row">
                            <input
                                type="text"
                                name="title"
                                value={tag.title}
                                className="pm-input"
                                placeholder="Tag title"
                                onChange={e => this.tagInputChangeHandler(e, ndx)}
                                required
                            />
                            <input type="url"
                                   name="url"
                                   value={tag.url}
                                   className="pm-input"
                                   placeholder="Confluence URL"
                                   onChange={e => this.tagInputChangeHandler(e, ndx)}
                                   required
                            />

                            {ndx > 0 && <button className="pm-remove-button" onClick={() => this.removeTag(ndx)} />}
                        </div>
                    ))}
                    </div>
                    <div className="pm-row-inline">
                        <button
                            className="pm-button"
                            type="button"
                            onClick={this.addTags}
                        >
                            Add Tag
                        </button>
                        <button
                            className="pm-button"
                            type="submit"
                            onClick={this.submitHandler}
                        >
                            SAVE
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SlackTags;