import React from 'react';
import ReactDOM from 'react-dom';

var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">This is a comment</div>
        );
    }
});

var Search = React.createClass({
    render: function () {
        return (
            <div>Search will go here</div>
        );
    }
});

var ChatWindow = React.createClass({
    render: function () {
        return (
            <div className="chat-window">
                <Comment/>
            </div>
        );
    }
});

var Header = React.createClass({
    render: function () {
        return (
            <div className="header">
                <h1>Chat Box</h1>
                <Search/>
            </div>
        );
    }
});

var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer row">
                <input type="text" className="col-md-8" />
                <button className="btn btn-success col-md-4">Submit Here!</button>
            </div>
        );
    }
});

var Container = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <ChatWindow/>
                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(
    <Container/>,
    document.getElementById('main')
);