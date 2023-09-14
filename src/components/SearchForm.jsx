import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import {
  CustomRadio,
  StyledInput,
  StyledButtonWrapper,
  StyledRadioWrapper,
} from './StyleSearchForm';
const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInput
        type="text"
        placeholder="Search for something"
        value={searchStr}
        onChange={onSearchInputChange}
      ></StyledInput>
      <StyledRadioWrapper>
        <CustomRadio
          label="Shows"
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption == 'shows'}
          onChange={onRadioChange}
        />
        <CustomRadio
          label="Actors"
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption == 'actors'}
          onChange={onRadioChange}
        />
      </StyledRadioWrapper>
      <StyledButtonWrapper>
        <button type="submit">Search</button>
      </StyledButtonWrapper>
    </form>
  );
};
export default SearchForm;
