import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const StyledFilters = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const StyledSelectedFilters = styled.div`
  margin: 0 20px;
`;

const filters = [
  {
    size: ['xs', 's', 'm', 'l', 'xl'],
  },
  {
    color: ['white', 'black', 'blue', 'beige', 'red', 'pink', 'gray', 'multicolor'],
  },
];

const selected = ['s', 'gray', 'white'];

export const Filters: React.FC = () => {
  const [selectedFilters, updateSelectedFilters] = useState<string[]>(selected);
  return (
    <StyledFilters>
      <div className="filters-select">selectElem </div>
      <StyledSelectedFilters>
        {selectedFilters.length > 0 &&
          selectedFilters.map((filter, i) => (i > selectedFilters.length - 2 ? filter : `${filter}, `))}
      </StyledSelectedFilters>
      {selectedFilters.length > 0 && <Button label="reset all" />}
    </StyledFilters>
  );
};
