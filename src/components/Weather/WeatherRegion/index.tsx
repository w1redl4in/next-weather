import * as WeatherRegionStyles from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';
type WeatherRegionProps = {
  mainTemp: number;
  name: string;
  icon: string;
  description: string;
};

export const WeatherRegion: React.FC<WeatherRegionProps> = ({
  description,
  icon,
  mainTemp,
  name,
}) => {
  return (
    <WeatherRegionStyles.Container>
      <h1>next.weather</h1>
      <WeatherRegionStyles.WeatherInfoContainer>
        <h1>{mainTemp.toFixed(0)}°</h1>
        <WeatherRegionStyles.TimeAndRegionContainer>
          <h1>{name}</h1>
          <span>
            {moment().locale('pt-br').format('HH:mm - dddd - M MMM  "D')}
          </span>
        </WeatherRegionStyles.TimeAndRegionContainer>
        <WeatherRegionStyles.IconAndDescriptionContainer>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
          <p>{description}</p>
        </WeatherRegionStyles.IconAndDescriptionContainer>
      </WeatherRegionStyles.WeatherInfoContainer>
    </WeatherRegionStyles.Container>
  );
};
