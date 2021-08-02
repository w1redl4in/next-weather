import * as WeatherInfoStyles from './styles';

type WeatherInfoProps = {
  feelsLike?: number;
  minTemp?: number;
  maxTemp?: number;
  humidity?: number;
  wind?: number;
  clouds?: number;
};
export const WeatherInfo: React.FC<WeatherInfoProps> = ({
  clouds,
  feelsLike,
  humidity,
  maxTemp,
  minTemp,
  wind,
}) => {
  const nextDays = [
    {
      day: 'Segunda',
      temp: '5°',
    },
    {
      day: 'Terça',
      temp: '1°',
    },
    {
      day: 'Quarta',
      temp: '12°',
    },
    {
      day: 'Quinta',
      temp: '17°',
    },
    {
      day: 'Sexta',
      temp: '21°',
    },
  ];

  const details = {
    'Sensação térmica': {
      value: feelsLike,
      format: '°',
    },
    Máxima: {
      value: maxTemp,
      format: '°',
    },
    Mínima: {
      value: minTemp,
      format: '°',
    },
    Humidade: {
      value: humidity,
      format: '°',
    },
    Nuvens: {
      value: clouds,
      format: 'km',
    },
    Vento: {
      value: wind,
      format: 'km',
    },
  };

  return (
    <WeatherInfoStyles.Container>
      <h1>Detalhes do clima</h1>

      {Object.entries(details).map(([key, value]) => (
        <WeatherInfoStyles.WeatherDetails key={key}>
          <h1>{key}</h1>
          <span>
            {value.value?.toFixed(0)}
            {value.format}
          </span>
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
