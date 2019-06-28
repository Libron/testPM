import React, {Component} from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';

import {FAKEDATA} from "../../fakeData";

import '../../assets/css/Default.css';
import './MessagesList.css';
import Message from "./Message";
import Spinner from "../Spinner/Spinner";

class MessagesList extends Component {
    state={
      isLoading: true
    };

    render() {
        const accordionItems = Object.keys(FAKEDATA.messages).map((date, idx) => {
            const messages = FAKEDATA.messages[date].map(msg => (
                <Message
                    key={msg.id}
                    time={msg.time}
                    email={msg.email}
                    label={msg.label}
                    text={msg.text}
                    author={msg.author}
                    files={msg.files}
                />
            ));

            return (
                <AccordionItem title={date} key={idx}>
                    {messages}
                </AccordionItem>
            );
        });

        setTimeout(() => {
            this.setState({isLoading: false})
        }, 1500);

        if(this.state.isLoading) {
            return <Spinner/>
        }

        return (
            <div className="pm-component">
                <h3 className="pm-title">Filtered data:</h3>
                <h4>Synced dates: {Object.keys(FAKEDATA.messages).length}</h4>
                <Accordion atomic={false}>
                    {accordionItems}
                </Accordion>
            </div>
        );


    }
}

export default MessagesList;