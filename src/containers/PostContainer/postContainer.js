import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postListSelector } from '../../store/selectors';

import { Post } from '../../components/Post/post';

class PostContainer extends Component {
    render() {
        const postList = this.props.posts ? <ul>
            {this.props.posts.map(post => (
                <Post key={post.num} {...post} />
            ))}
        </ul> : <ul />;
        return (
            <div>{postList}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: postListSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const PostList = connect(mapStateToProps, mapDispatchToProps)(PostContainer);

export default PostList;