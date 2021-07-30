import * as WeatherRegionStyles from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';

export const WeatherRegion = () => {
  return (
    <WeatherRegionStyles.Container>
      <h1>next.Weather</h1>
      <WeatherRegionStyles.WeatherInfoContainer>
        <h1>08°</h1>
        <WeatherRegionStyles.TimeAndRegionContainer>
          <h1>São Paulo</h1>
          <span>
            {moment().locale('pt-br').format('HH:MM - dddd - M MMM  "D')}
          </span>
        </WeatherRegionStyles.TimeAndRegionContainer>
        <WeatherRegionStyles.IconAndDescriptionContainer>
          <span>Icon</span>
          <p>Chovendo</p>
        </WeatherRegionStyles.IconAndDescriptionContainer>
      </WeatherRegionStyles.WeatherInfoContainer>
    </WeatherRegionStyles.Container>
  );
};
