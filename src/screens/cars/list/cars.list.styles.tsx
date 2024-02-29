import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing.around.xs}px;
  padding-right: ${({ theme }) => theme.spacing.around.xs}px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SafeAreaViewContent = styled(SafeAreaView)`
  flex: 1;
`;

export const CardContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.color.base.white};
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  shadow-color: ${({ theme }) => theme.color.base.black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  flex-direction: row;
  align-items: center;
`;

export const CarName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing.around.nano}px;
`;

export const CarDetails = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.color.base.text};
  margin-top: ${({ theme }) => theme.spacing.around.nano}px;
`;

export const CarItemText = styled.Text`
  color: ${({ theme }) => theme.color.base.white};
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.color.alert.error};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 0px 10px 10px 0px;
  margin-vertical: ${({ theme }) => theme.spacing.around.xs}px;
`;

export const EmptyText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.color.base.text};
  text-align: center;
  margin-top: 20px;
`;

export const EmptyButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.color.primary.brand};
  padding: 10px 20px;
  border-radius: 5px;
  align-self: center;
  margin-top: ${({ theme }) => theme.spacing.around.md}px;
`;

export const EmptyButtonText = styled.Text`
  color: ${({ theme }) => theme.color.base.white};
  font-weight: bold;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.color.primary.brand};
  height: 120px;
  align-items: center;
  justify-content: flex-end;
`;

export const SubHeader = styled.View`
  background-color: ${({ theme }) => theme.color.primary.brand};
  height: 75px;
  position: absolute;
  left: 0;
  top: 120px;
  right: 0;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.color.base.white};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AddCarButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.color.primary.brand};
  padding: 10px 20px;
  height: 50px;
  width: 100%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const AddCarButtonContainer = styled.View`
  padding-left: ${({ theme }) => theme.spacing.around.md}px;
  padding-right: ${({ theme }) => theme.spacing.around.md}px;
  padding-top: ${({ theme }) => theme.spacing.around.xs}px;
  padding-bottom: ${({ theme }) =>
    Platform.OS === 'android'
      ? theme.spacing.around.sm
      : theme.spacing.around.nano}px;
`;

export const ArrowContainer = styled.View`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.View`
  flex: 1;
`;
