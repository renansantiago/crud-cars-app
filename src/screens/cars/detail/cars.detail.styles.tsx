import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.View`
  padding-horizontal: 20px;
`;

export const SafeAreaViewContent = styled(SafeAreaView)`
  flex: 1;
`;

export const FormContainer = styled.View`
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing.around.sm}px;
  padding-top: ${({ theme }) => theme.spacing.around.xs}px;
  padding-right: ${({ theme }) => theme.spacing.around.sm}px;
  padding-bottom: ${({ theme }) => theme.spacing.around.sm}px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.base.white};
  shadow-color: ${({ theme }) => theme.color.base.black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.base.input};
  margin-top: ${({ theme }) => theme.spacing.around.xs}px;
`;

export const InputMoneyContainer = styled.View`
  margin-top: ${({ theme }) => theme.spacing.around.xs}px;
`;

export const ErrorText = styled.Text`
  color: red;
  margin-bottom: 10px;
`;

export const AddCarButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.color.primary.brand};
  padding: 10px 20px;
  height: 50px;
  width: 100%;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.around.xs}px;
`;

export const AddCarButtonContainer = styled.View`
  padding-left: ${({ theme }) => theme.spacing.around.md}px;
  padding-right: ${({ theme }) => theme.spacing.around.md}px;
  padding-bottom: ${({ theme }) => theme.spacing.around.nano}px;
  padding-top: ${({ theme }) => theme.spacing.around.xs}px;
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
  margin-bottom: 24px;
`;

export const ArrowContainer = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  position: absolute;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  top: 60px;
  left: 0;
  right: 0;
`;

export const AddCarButtonText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.color.base.white};
  font-weight: bold;
  text-align: center;
`;
