import styled from 'styled-components';
export const StyledAbout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 90vh;
  padding: 5rem 10rem;
  color: white;
`;
export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
  }
`;
export const StyledHide = styled.div`
  overflow: hidden;
`;