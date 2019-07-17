import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  getExchangeMarkets,
  selectExchangeMarkets,
} from 'store/ducks/exchange/markets';

const withExchangeMarkets = WrappedComponent => {
  const Wrapper = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => ({
    data: selectExchangeMarkets(state),
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getExchangeMarkets,
      },
      dispatch
    );
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);
};

export { withExchangeMarkets };
