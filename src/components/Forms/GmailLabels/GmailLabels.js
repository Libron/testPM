import React, {Component} from 'react';
import './GmailLabels.css';

class GmailLabels extends Component {
    state = {
        labels: [
            {
                title: 'meeting_notes',
                url: 'http://confluence.com',
                key: Math.random().toString()
            },
            {
                title: 'daily_report',
                url: 'http://confluence.com',
                key: Math.random().toString()
            }
        ]
    };

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.labels);
    };

    addTags = e => {
        e.preventDefault();
        this.setState({
            labels: [...this.state.labels,
                {title: '', url: '', key: Math.random().toString()}
            ]
        })
    };

    tagInputChangeHandler = (e, ndx) => {
        const label = {...this.state.labels[ndx]};
        label[e.target.name] = e.target.value;
        const labels = [...this.state.labels];
        labels[ndx] = label;
        this.setState({labels});
    };

    removeTag = ndx => {
        const labels = this.state.labels;

        labels.splice(ndx, 1);
        this.setState({labels});
    };

    render() {
        return (
            <div className="pm-component" id="gmail-labels">
                <form>
                    <h3 className="pm-title">Label Management <span className="pm-badge">{this.state.labels.length}</span></h3>
                    <div className="fixed">
                    {this.state.labels.map((label, ndx) => (
                        <div key={label.key} className="pm-row-inline row">
                            <input
                                type="text"
                                name="title"
                                value={label.title}
                                className="pm-input"
                                placeholder="Label title"
                                onChange={e => this.tagInputChangeHandler(e, ndx)}
                                required
                            />
                            <input type="url"
                                   name="url"
                                   value={label.url}
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
                            Add label
                        </button>
                        <button
                            className="pm-button"
                            type="submit"
                            onClick={this.props.save}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default GmailLabels;