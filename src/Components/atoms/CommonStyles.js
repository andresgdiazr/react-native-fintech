import { StyleSheet } from 'react-native';

const CommonStyles = StyleSheet.create({
  barTitle: {
    marginTop: -10,
    margin: 0,
    fontSize: 24,
    fontWeight: 'medium',
    color: '#ffffff',
  },
  barContainer: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 0,
    marginHorizontal: -20,
    marginVertical: 0,
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0, 
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#3cae8b'
  },
  generalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 30,
    color: "#000000",
  },
});


export default CommonStyles;