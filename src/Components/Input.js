import { View, Text, TextInput, StyleSheet, Pressable, Platform } from 'react-native';

const Input = ({Change, value, placeholder, secureTextEntry = false}) =>{
    return(
        <View>
            <TextInput
                style={styles.TextInput}
                onchangeText= {Change}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: Platform.OS === 'web' ? '2rem' : 40,
        padding: Platform.OS === 'web' ? '0.5rem' : 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        opacity: 0.8,
      },
});

export default Input;