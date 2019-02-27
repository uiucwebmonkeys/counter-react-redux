import React from 'react';
import { connect } from 'react-redux';

const Count = (props) => {
  return <p id="count">{props.count}</p>;
};

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(Count);
