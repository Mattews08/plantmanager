
import { RectButtonProps } from 'react-native-gesture-handler';

export interface IPlant extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}
