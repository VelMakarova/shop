import styled from 'styled-components';
import caret from '../../assets/bottom_caret.svg';

export const StyledAccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  .accordion-trigger {
    height: 10px;
    width: 14px;
    border: none;
    background-color: transparent;
    background-image: url(${caret});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }
`;

export const StyledAccordionDropdown = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? '150px' : '0')};
  transition: all 0.3s ease;
`;
