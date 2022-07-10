import React, { Dispatch, SetStateAction } from 'react';
import { StyledLabel } from './product.styled';

interface ProductFilterProps {
  filters: string[];
  name: string;
  onChange: Dispatch<SetStateAction<string>>;
  defaultChecked: string;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({ filters, name, onChange, defaultChecked }) => {
  return (
    <div>
      {filters.map((filter) => {
        return (
          <StyledLabel key={filter} htmlFor={filter}>
            <input
              type="radio"
              name={name}
              id={filter}
              value={filter}
              onChange={(e) => onChange(e.target.value)}
              checked={filter === defaultChecked}
            />
            <span className="visual-label">{filter}</span>
          </StyledLabel>
        );
      })}
    </div>
  );
};
