import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
`;
export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const StyledListItem = styled.li`
  width: 150px;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
