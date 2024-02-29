import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

interface InputMoneyProps {
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: (value: string) => void;
  placeholder: string;
}

const InputMoney: React.FC<InputMoneyProps> = ({
  value,
  onChangeText,
  onBlur,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInputMask
        style={styles.input}
        type='money'
        placeholder={placeholder}
        onBlur={(field: NativeSyntheticEvent<TextInputFocusEventData>) =>
          onBlur && onBlur(field?.nativeEvent?.text)
        }
        options={{
          precision: 2,
          separator: '.',
          delimiter: ',',
          unit: '$ ',
          suffixUnit: '',
        }}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
});

export default InputMoney;
