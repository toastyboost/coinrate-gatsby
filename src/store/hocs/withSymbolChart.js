import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getSymbolChart, selectSymbolChart } from 'store/ducks/cryptos/chart';

const withSymbolChart = WrappedComponent => {
  const Wrapper = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => ({
    selectSymbolChart: selectSymbolChart(state),
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getSymbolChart,
      },
      dispatch
    );
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper);
};

export { withSymbolChart };
