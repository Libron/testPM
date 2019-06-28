import React from 'react';
import PropTypes from 'prop-types'

import './Message.css'

const Message = (props) => {
    const { time, email, label, text, author, files } = props;
    console.log(files)
    return (
        <div className="message">
            <div className="message-info">
                <p><b>{time}</b></p>
                <p><i>{label}</i></p>
                <p><b>{email}</b></p>
            </div>
            <div className="message-content">
                <p>{author}</p>
                <p>{text}</p>
                {files ? <div>
                    <b>Attachments</b>
                    <ul className="message-attachments-list">
                        {files.map((file, idx) => (
                            <li key={idx}><a href={file.url}>{file.title}</a></li>
                        ))}
                    </ul>
                </div> : null }
            </div>
        </div>
    );
};

Message.propTypes = {
    time: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    files: PropTypes.array,
};

export default Message;