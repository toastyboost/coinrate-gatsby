import styled from 'styled-components';
import { Cta } from 'components';
import { MEDIA } from 'styles/common';

const NotFoundCta = styled(Cta)`
  margin: 0 auto;
  padding: 12px 48px;
`;

const NotFoundWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0;
`;

const NotFoundTitle = styled.h1`
  margin-bottom: 6px;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

const NotFoundDesc = styled.div`
  text-transform: uppercase;
  color: var(--secondary-text);
  font-size: 1.2rem;
  line-height: 1em;
  width: 100%;
  text-align: center;
`;

const NotFoundRelevant = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  ${MEDIA.PHONE`
    padding: 24px 0 12px 0;
  `};

  ${MEDIA.DESKTOP`
  padding: 36px 36px 12px 36px;
 `};
`;

export {
  NotFoundWrap,
  NotFoundTitle,
  NotFoundDesc,
  NotFoundRelevant,
  NotFoundCta,
};
