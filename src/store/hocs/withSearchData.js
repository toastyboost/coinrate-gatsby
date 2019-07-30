import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getSearchData, selectSearchData } from 'store/ducks/search/market';

const withSearchData = WrappedComponent => {
  const Wrapper = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => {
    const objectData = selectSearchData(state);
    const arrayData = Object.keys(objectData).map(name => objectData[name]);

    return {
      searchData: arrayData,
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getSearchData,
      },
      dispatch
    );
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);
};

export { withSearchData };
