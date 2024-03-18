import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       direction: 'rtl',
       alignItems: 'center',
       marginTop: 50 // Remove 'px' from marginTop
   },
   checkBoxContainer: {
       flexDirection: 'row-reverse',
   },
   checkbox: {
       borderWidth: 0, // Use borderWidth instead of border
       backgroundColor: 'transparent',
       direction: 'rtl'
   },
   icon: {
       fontSize: 25 // Remove 'px' from fontSize
   },
   textInput: {
       height: 40,
       width: '100%',
       direction: 'rtl',
       textAlign: 'right'
   },
   errorInput: {
       borderWidth: 1, // Use borderWidth instead of border
       borderColor: 'red', // Add borderColor property
       borderRadius: 5,
   },
   textError: {
       textAlign: 'right',
       fontSize: 12,
       color: 'red',
       marginBottom: 10
   },
   mapContainer: {
       height: 200,
       marginTop: 20,
       width: '90%'
   },
   map: {
       flex: 1,
   }
});

export default styles;
