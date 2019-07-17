import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getExchanges, selectExchanges } from 'store/ducks/exchange/exchanges';

const withExchanges = WrappedComponent => {
  const Wrapper = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => ({
    data: selectExchanges(state),
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getExchanges,
      },
      dispatch
    );
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);
};

export { withExchanges };
