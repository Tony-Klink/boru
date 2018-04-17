import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './post.css';

export class Post extends Component {
    render() {
        return (
            <div class="post-element">
                {this.props.subject ? <h4>this.props.subject</h4> : null}
                {this.props.files[0] ? <a href={`https://2ch.hk${this.props.files[0].path}`}><img src={this.props.files[0].thumbnail} /></a>: null}
                <p>{ReactHtmlParser(this.props.comment)}</p>
            </div>
        );
    }
}