import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMarketData, selectMarketData } from 'store/ducks/cryptos/market';

const withMarketData = WrappedComponent => {
  const Wrapper = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => ({
    data: selectMarketData(state),
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getMarketData,
      },
      dispatch
    );
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);
};

export { withMarketData };
