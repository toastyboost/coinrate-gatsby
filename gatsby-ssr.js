const React = require('react');
const GlobalStyleComponent = require('./src/styles/defaults');

export const onRenderBody = ({ setHeadComponents }) => {
  const str = GlobalStyleComponent.default.join('');

  setHeadComponents([
    <style
      key="global-styles"
      type="text/css"
      dangerouslySetInnerHTML={{ __html: str }}
    />,
  ]);
};

export { default as wrapRootElement } from './src/store/configureStore.js';
