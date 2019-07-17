import styled from 'styled-components';
import { MEDIA } from 'styles/common';

const SearchContainer = styled.div`
  position: relative;

  ${MEDIA.PHONE`
    width: 100%;
  `};

  ${MEDIA.DESKTOP`
    width: auto;
    margin-left: auto;
 `};

  .react-autosuggest {
    &__container {
      &:before,
      &:after {
        content: '';
        position: absolute;
        z-index: 1;
      }

      &:before {
        width: 10px;
        height: 10px;
        border: 2px solid #8e8e90;
        border-radius: 100%;
        left: 14px;
        top: 24px;
      }

      &:after {
        left: 26px;
        height: 5px;
        width: 2px;
        background-color: #8e8e90;
        transform: rotate(-45deg);
        top: 35px;
      }

      &:hover {
        &:before {
          border: 2px solid var(--blue);
        }
        &:after {
          background-color: var(--blue);
        }
      }
    }

    &__input {
      padding: 0 45px 0 45px;
      background-color: transparent;
      box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.05);

      font-size: 1.4rem;
      line-height: 6.3rem;
      transition: 0.3s;

      ${MEDIA.PHONE`
        width: 100%;
      `};

      ${MEDIA.DESKTOP`
        width: 300px;
      `};

      &--focused {
        box-shadow: inset 0 3px 0 0 var(--blue);

        ${MEDIA.PHONE`
          width: 100%;
        `};

        ${MEDIA.DESKTOP`
          width: 320px;
        `};
      }

      &_cancel {
        position: absolute;
        z-index: 100;
        right: 9px;
        top: 0;
        bottom: 0;
        margin: auto;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 900;
        color: var(--blue);
        height: 9px;
        opacity: 0;
        cursor: pointer;

        &.active {
          opacity: 1;
        }
      }
    }

    &__suggestion {
      transition: 0.3s;

      &--highlighted {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }

    &__suggestions {
      &-container {
        position: absolute;
        width: 100%;
        z-index: 10000;
        transition: 0.3s;
        opacity: 0;
        transform: translateY(-20px);
        background-color: #fff;
        box-shadow: -1px 9px 15px rgba(0, 0, 0, 0.05), inset 0 4px 0 transparent;
        border-top: 1px solid var(--border-color);
        border-radius: 0 0 3px 3px;
        overflow: hidden;

        &--open {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }
  }
`;

const SearchItem = styled.div`
  padding: 12px 8px 11px 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid var(--border-color);

  .title {
    font-size: 1rem;
    line-height: 1em;
    width: 100%;
    color: var(--secondary-text);
    text-transform: uppercase;
    margin-top: 4px;
  }

  .value {
    font-size: 1.2rem;
    line-height: 1em;
    font-weight: 700;

    width: 100%;
  }
`;

const SearchIcon = styled.div`
  background-image: ${({ ticker, id }) =>
    `url(https://coinrate.com/static/crypto/${ticker.toLowerCase()}-${id.toLowerCase()}.svg?v=1)`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  height: 24px;
  width: 24px;
  min-width: 24px;
  float: left;
  margin-right: 12px;
`;

const SearchWrap = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  width: 105px;
  margin-right: auto;
`;

const SearchTitle = styled.div`
  font-size: 1.6rem;
  line-height: 1em;
  font-weight: 700;
  margin-right: auto;

  span {
    font-size: 1rem;
    line-height: 1em;
    font-weight: 400;
    color: var(--secondary-text);
    position: relative;
    top: -2px;
  }
`;

const SearchName = styled.div`
  font-size: 1rem;
  color: var(--secondary-text);
  width: 100%;
`;

const SearchCap = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: right;
  padding-right: 6px;
  width: 86px;
`;

const SearchVolume = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: right;
`;

const SearchResultLength = styled.div`
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  font-size: 1.2rem;
  color: var(--secondary-text);
  line-height: 1em;
  height: 1em;
`;

export {
  SearchContainer,
  SearchItem,
  SearchIcon,
  SearchWrap,
  SearchTitle,
  SearchName,
  SearchCap,
  SearchVolume,
  SearchResultLength,
};
