import React, { useState, useEffect } from 'react';
import matchSorter from 'match-sorter';
import Autosuggest from 'react-autosuggest';

import {
  SearchContainer,
  SearchItem,
  SearchIcon,
  SearchWrap,
  SearchTitle,
  SearchName,
  SearchCap,
  SearchVolume,
  SearchResultLength,
} from './styles';

import { Value } from 'components';
import { withSearchData } from 'store/hocs';

const Search = ({ getSearchData, searchData }) => {
  useEffect(() => {
    getSearchData();
  }, []);

  const [suggestValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [length, setLength] = useState(0);

  const getSuggestions = value => {
    const sortResult =
      value.length >= 2
        ? matchSorter(searchData, value, {
            keys: ['TICKER', 'NAME', 'ID'],
            threshold: matchSorter.rankings.CONTAINS,
          })
        : [];

    setLength(sortResult.length);
    return sortResult.slice(0, 5);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    const suggs = getSuggestions(value);
    setSuggestions(suggs);
  };

  const onSuggestionsClearRequested = () => {
    setLength(0);
    setSuggestions([]);
  };

  const getSuggestionValue = seggestionObject => seggestionObject;

  const onChange = (e, { newValue, method }) => {
    const strValue = typeof newValue !== 'string' ? newValue.NAME : newValue;
    setInputValue(strValue);

    if (method === 'click' || method === 'enter') {
      const { ID } = newValue;
      window.open(`/cryptocurrencies/${ID}/`, '_blank');
    }
  };

  const renderSuggestion = ({
    ID,
    TICKER,
    RANK,
    NAME,
    PRICE,
    VOLUME24HOUR,
  }) => (
    <SearchItem>
      <SearchIcon id={ID} ticker={TICKER} />
      <SearchWrap>
        <SearchTitle>
          {TICKER} <span>#{RANK}</span>
        </SearchTitle>
        <SearchName>{NAME}</SearchName>
      </SearchWrap>
      <SearchVolume>
        <Value value={VOLUME24HOUR} prefix="$" type="simple" />
        <span className="title">Volume</span>
      </SearchVolume>
      <SearchCap>
        <Value value={PRICE} prefix="$" />
        <span className="title">Price</span>
      </SearchCap>
    </SearchItem>
  );

  const inputProps = React.useMemo(
    () => ({
      placeholder: 'Search cryptocurrency',
      value: suggestValue ? suggestValue : '',
      onChange,
      onBlur: onSuggestionsClearRequested,
    }),
    [suggestValue, onChange]
  );

  return (
    <SearchContainer>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      {length > 0 && <SearchResultLength>{length}</SearchResultLength>}
    </SearchContainer>
  );
};

const MarketSearch = withSearchData(Search);

export { MarketSearch };
