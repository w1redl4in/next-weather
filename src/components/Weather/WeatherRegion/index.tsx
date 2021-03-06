import * as WeatherRegionStyles from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';
import { capitalizeTheFirstLetterOfEachWord } from '../../../utils/capitilizeFirstLetter';
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
            {moment().locale('pt-br').format('HH:mm - dddd - D MMMM')}
          </span>
        </WeatherRegionStyles.TimeAndRegionContainer>
        <WeatherRegionStyles.IconAndDescriptionContainer>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
          <strong>{capitalizeTheFirstLetterOfEachWord(description)}</strong>
        </WeatherRegionStyles.IconAndDescriptionContainer>
      </WeatherRegionStyles.WeatherInfoContainer>
      <WeatherRegionStyles.Introduction>
        <h2>Made with 💖 by Felipe Austríaco</h2>
        <a href="https://felipeaustriaco.dev" target="_blank">
          https://felipeaustriaco.dev
        </a>
      </WeatherRegionStyles.Introduction>
    </WeatherRegionStyles.Container>
  );
};
