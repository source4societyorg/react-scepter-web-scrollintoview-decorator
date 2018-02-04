import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

export default function (WrappedComponent) {
  class ResetWindowScroll extends Component {
    componentDidMount() {
      return window.scrollTo(0, 0);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  ResetWindowScroll.propTypes = {
    location: PropTypes.object,
  };
  return withRouter(ResetWindowScroll);
}
