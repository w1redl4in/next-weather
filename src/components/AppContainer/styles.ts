import styled from 'styled-components';

type ContainerProps = {
  image: string | undefined;
};

export const Container = styled.div<ContainerProps>`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  background-color: grey;

  @media (max-width: ${({ theme }) => theme.mediaQuery[915]}) {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: bottom;
  }
`;
