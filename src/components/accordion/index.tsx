import React, { useState } from 'react';
import { StyledAccordionDropdown, StyledAccordionHeader } from './accordion.styled';

interface AccordionProps {
  title: string;
  content: string;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <StyledAccordionHeader>
        {title}
        <button className="accordion-trigger" onClick={() => setOpen(!isOpen)} />
      </StyledAccordionHeader>
      {<StyledAccordionDropdown isOpen={isOpen}>{content}</StyledAccordionDropdown>}
    </div>
  );
};
