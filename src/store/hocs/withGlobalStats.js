import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  getGlobalStats,
  selectGlobalStats,
} from 'store/ducks/global/globalStats';

const withGlobalStats = WrappedComponent => {
  const Wrapper = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => ({
    GlobalStats: selectGlobalStats(state),
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getGlobalStats,
      },
      dispatch
    );
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);
};

export { withGlobalStats };
