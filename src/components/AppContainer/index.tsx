import { useEffect, useState } from 'react';
import * as AppContainerStyles from './styles';

export const AppContainer: React.FC = ({ children }) => {
  const [userPosition, setUserPosition] = useState<any>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      setUserPosition(position);
    });
  }, []);

  console.log('userPosition', userPosition);

  return (
    <AppContainerStyles.Container>
      {userPosition}
      {children}
    </AppContainerStyles.Container>
  );
};
