import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 100vh;

  padding: 3rem 5rem;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }

  text-shadow: 1px 1px 20px ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.mediaQuery[915]}) {
    padding: 0 2rem;
    text-align: center;
  }
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.huge};
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery[915]}) {
    flex-direction: column;
  }
`;

export const TimeAndRegionContainer = styled.div`
  text-align: center;
  margin: 0 1rem;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.large};
  }

  > span {
    letter-spacing: -1px;
  }
`;

export const IconAndDescriptionContainer = styled.div`
  text-align: center;

  img {
    filter: drop-shadow(0 0 0.8rem black);
  }
`;
