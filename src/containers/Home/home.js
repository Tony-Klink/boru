import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postListSelector } from '../../store/selectors';
import PostList from '../PostContainer/postContainer';

class HomeContainer extends Component {
    componentWillMount() {
        this.props.getThread();
    }
    render() {
        return (
            <div>
                <p>Honey, I'm home!</p>
                <PostList />
                <button onClick={() => this.props.getThread()}>Update</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getThread: () => dispatch({type: 'FETCH_POSTS',payload: {board: 'b', postId: '174532183'}})
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default Home;

/*
{type: 'FETCH_POSTS',
payload: {board: 'b', postId: '174525843'}
}
*/