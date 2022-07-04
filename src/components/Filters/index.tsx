import React, { useState } from 'react';
import { StyledFilters, StyledSelectedFilters } from './StyledFilters';
import { Button } from '../Button';

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
