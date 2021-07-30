import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 1px;
  top: 0px;

  height: 100vh;
  width: 35%;

  backdrop-filter: blur(1.5rem);
  background-color: rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 1rem 2rem;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.large};
    margin-bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery[915]}) {
    display: none;
  }
`;

export const WeatherDetails = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 15rem;
  width: 100%;

  > h1 {
    font-size: ${({ theme }) => theme.fontSize.normal};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media (max-width: ${({ theme }) => theme.mediaQuery[915]}) {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }
`;

export const NextDaysTitle = styled.h1`
  margin-top: 10rem;
`;

export const NextDaysContainer = styled.section`
  display: flex;
  max-width: 30rem;
  width: 100%;
  justify-content: space-between;
`;

export const NextDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-right: 1rem;
  }
`;
