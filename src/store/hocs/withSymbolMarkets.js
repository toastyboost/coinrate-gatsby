import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  getSymbolMarkets,
  selectSymbolMarkets,
} from 'store/ducks/cryptos/symbolMarkets';

const withSymbolMarkets = WrappedComponent => {
  const Wrapper = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => ({
    selectSymbolMarkets: selectSymbolMarkets(state),
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getSymbolMarkets,
      },
      dispatch
    );
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);
};

export { withSymbolMarkets };
