import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 3rem 5rem;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }

  text-shadow: 1px 1px 20px ${({ theme }) => theme.colors.black};
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.huge};
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
`;