import React, { useState } from 'react';
import { StyledFilters, StyledSelectedFilters } from './catalog-filters.styled';
import { Button } from '../../components';

const selected = ['s', 'gray', 'white'];

export const CatalogFilters = () => {
  const [selectedFilters] = useState<string[]>(selected);

  return (
    <div>
      <div className="filter">
        <StyledFilters>
          <div className="filters-select">selectElem </div>
          <StyledSelectedFilters>
            {selectedFilters.length > 0 &&
              selectedFilters.map((filter, i) => (i > selectedFilters.length - 2 ? filter : `${filter}, `))}
          </StyledSelectedFilters>
          {selectedFilters.length > 0 && <Button className="monochrome" text="reset all" />}
        </StyledFilters>
      </div>
      <div className="sort"></div>
    </div>
  );
};
