import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';

class MessageContainer extends Component {

  render() {
    var { message } = this.props;
    return (
      <div>
        <Message message={message} />
        </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    message: state.message
  });



export default connect(mapStateToProps, null)(MessageContainer);
