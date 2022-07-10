import React, { useState } from 'react';
import { StyledFilters, StyledSelectedFilters } from './filters.styled';
import { Button } from '../button';

const selected = ['s', 'gray', 'white'];

export const Filters: React.FC = () => {
  const [selectedFilters] = useState<string[]>(selected);
  return (
    <StyledFilters>
      <div className="filters-select">selectElem </div>
      <StyledSelectedFilters>
        {selectedFilters.length > 0 &&
          selectedFilters.map((filter, i) => (i > selectedFilters.length - 2 ? filter : `${filter}, `))}
      </StyledSelectedFilters>
      {selectedFilters.length > 0 && <Button className="monochrome" text="reset all" />}
    </StyledFilters>
  );
};
