import React, { useState } from 'react';
import { StyledFilter, StyledFilterTrigger, StyledFilterDropdown } from './filters.styled';
import { CheckList } from '../checklist';

export const Filter: React.FC = () => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <StyledFilter>
      <StyledFilterTrigger onClick={() => toggleOpen(!isOpen)}>Filters</StyledFilterTrigger>
      {isOpen && (
        <StyledFilterDropdown>
          <CheckList title={'size'} />
          <CheckList title={'color'} />
        </StyledFilterDropdown>
      )}
    </StyledFilter>
  );
};
