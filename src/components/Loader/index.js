import React from 'react';

import { LoadContainer, Load, LoadCut, LoadShape } from './styles';

const Loader = () => (
  <LoadContainer className="Loader">
    <Load>
      <LoadCut>
        <LoadShape />
      </LoadCut>
    </Load>
  </LoadContainer>
);

export { Loader };
