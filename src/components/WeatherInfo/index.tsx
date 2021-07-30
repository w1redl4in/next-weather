import * as WeatherInfoStyles from "./styles";
export const WeatherInfo = () => {
  const details = [
    {
      name: "Nuvens",
      number: "86%",
    },
    {
      name: "Humidade",
      number: "62%",
    },
    {
      name: "Vento",
      number: "8km/h",
    },
    {
      name: "Chuva",
      number: "8mm",
    },
  ];

  const nextDays = [
    {
      day: "Segunda",
      temp: "5°",
    },
    {
      day: "Terça",
      temp: "1°",
    },
    {
      day: "Quarta",
      temp: "12°",
    },
    {
      day: "Quinta",
      temp: "17°",
    },
    {
      day: "Sexta",
      temp: "21°",
    },
  ];

  return (
    <WeatherInfoStyles.Container>
      <h1>Detalhes do clima</h1>
      {details.map((detail) => (
        <WeatherInfoStyles.WeatherDetails key={detail.name}>
          <h1>{detail.name}</h1>
          <span>{detail.number}</span>
        </WeatherInfoStyles.WeatherDetails>
      ))}

      <WeatherInfoStyles.NextDaysTitle>
        Próximos dias
      </WeatherInfoStyles.NextDaysTitle>
      <WeatherInfoStyles.NextDaysContainer>
        {nextDays.map((nextDay) => (
          <WeatherInfoStyles.NextDay key={nextDay.day}>
            <span>{nextDay.day}</span>
            <span>{nextDay.temp}</span>
          </WeatherInfoStyles.NextDay>
        ))}
      </WeatherInfoStyles.NextDaysContainer>
    </WeatherInfoStyles.Container>
  );
};
