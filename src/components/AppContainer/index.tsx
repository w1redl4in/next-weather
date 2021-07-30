import * as AppContainerStyles from './styles';

export const AppContainer: React.FC = ({ children }) => {
  return (
    <AppContainerStyles.Container>{children}</AppContainerStyles.Container>
  );
};
