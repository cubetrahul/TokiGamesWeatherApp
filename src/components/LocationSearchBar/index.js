import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';

import LoadingIndicator from '../LoadingIndicator';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  height: 50px;
`;

function LocationSearchBar({autocompleteData, onSelect, onSearch, isLoading}) {
  const options = autocompleteData.map(data => {
    const area = [];
    if (data.AdministrativeArea && data.AdministrativeArea.LocalizedName) {
      area.push(data.AdministrativeArea.LocalizedName);
    }
    if (data.Country && data.Country.LocalizedName) {
      area.push(data.Country.LocalizedName);
    }
    return {
      locationKey: data.Key,
      value: `${data.LocalizedName} (${area.join(", ")})`,
    };
  });
  return (
    <Wrapper>
      <AutoComplete
        options={options}
        style={{
          width: 500,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="Search Location"
      />
      {isLoading ? <LoadingIndicator /> : ""}
    </Wrapper>
  );
}

LocationSearchBar.propTypes = {
  autocompleteData: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LocationSearchBar;
