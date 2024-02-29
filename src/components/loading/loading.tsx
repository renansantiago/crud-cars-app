import { ActivityIndicator } from 'react-native';
import theme from '../../theme';

type LoadingProps = {
  size?: 'small' | 'large';
  color?: string;
};

const Loading = ({ size = 'large', color }: LoadingProps) => {
  return (
    <ActivityIndicator
      testID='activity-indicator'
      size={size}
      color={color || theme.color.base.black}
    />
  );
};

export default Loading;
