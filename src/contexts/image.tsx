import { createContext, useCallback, useContext, useState } from 'react';
import { getFromLocalStorage } from '../utils/localStorage';

interface ImageContextProps {
  image: string;
  handleImage: (isMobile: boolean, temp: number) => Promise<void>;
}

interface ImageState {
  image: string;
}

const ImageContext = createContext<ImageContextProps>({} as ImageContextProps);

const ImageProvider: React.FC = ({ children }) => {
  const [image, setImage] = useState<ImageState | any>();

  const handleImage = useCallback(async (isMobile: boolean, temp: number) => {
    const response = await getFromLocalStorage(
      'imagem',
      isMobile,
      undefined,
      undefined,
      temp
    );
    setImage(response);
  }, []);

  return (
    <ImageContext.Provider value={{ image, handleImage }}>
      {children}
    </ImageContext.Provider>
  );
};

const useImage = () => {
  const context = useContext(ImageContext);

  if (!context)
    throw new Error('useImage can only be used within ImageProvider');

  return context;
};

export { ImageProvider, useImage };
