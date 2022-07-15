import styled from 'styled-components';

export const StyledSlide = styled.div<{ src: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
  height: 400px;
  background-image: url(${(props) => props.src});
  background-position: center;
  .category-btn {
    position: absolute;
    top: 70%;
    left: 20px;
    right: 20px;
    width: auto;
    z-index: 1;
  }
`;

export const StyledTitle = styled.div`
  color: black;
  text-transform: uppercase;
  font-size: 23px;
  padding: 10px;
`;
