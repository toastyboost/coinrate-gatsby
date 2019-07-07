import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getSymbol, selectSymbol } from 'store/ducks/cryptos/symbol';

const withSymbol = WrappedComponent => {
  const Wrapper = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => ({
    selectSymbol: selectSymbol(state),
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getSymbol,
      },
      dispatch
    );
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);
};

export { withSymbol };
