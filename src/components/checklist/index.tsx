import React, { useEffect, useState } from 'react';
import { StyledCheckList, StyledList, StyledItem, StyledCheckLabel, StyledVisualCheck } from './checklist.styled';
import { filters } from '../../mock/mockFilters';
import { useAppDispatch } from '../../hooks';
import { setFilters } from '../../store/filter/filter.slice';

type FilterType = keyof typeof filters;

export const CheckList: React.FC<{ title?: FilterType }> = ({ title }) => {
  const dispatch = useAppDispatch();
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    if (title) {
      setList(filters[title]);
    }
  }, [filters]);

  const onChangeHandler = (item: string) => {
    if (title !== undefined) {
      dispatch(setFilters({ param: title, value: item }));
    }
  };

  return (
    <StyledCheckList>
      {title && <span>{title}</span>}
      <StyledList>
        {list.map((item, i) => {
          return (
            <StyledItem key={i}>
              <StyledCheckLabel htmlFor={item}>
                <input type="checkbox" name={item} id={item} className="input-check" onChange={() => onChangeHandler(item)} />
                <StyledVisualCheck />
                {item}
              </StyledCheckLabel>
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledCheckList>
  );
};
