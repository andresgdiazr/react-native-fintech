import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');

const Home = () => {

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bienvenido, Lorem</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.amountText}>$50,00</Text>
          <Text style={styles.statusText}>Endeudado</Text>
        </View>
      </View>

      <View style={styles.operations}>
        <TouchableOpacity style={styles.operationButtonRed}>
          <Text style={styles.operationText}>Deudas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operationButtonBlue}>
          <Text style={styles.operationText}>Movimientos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operationButtonYellow}>
          <Text style={styles.operationText}>Tiendas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.billsContainer}>
        <Text style={styles.billsTitle}>Cuentas por pagar</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>Ver más</Text>
        </TouchableOpacity>
        {Array(4).fill().map((_, index) => (
          <View key={index} style={styles.billItem}>
            <Text style={styles.billText}>Ciro Sánchez</Text>
            <Text style={styles.billAmount}>$100,00</Text>
            <Text style={styles.billDate}>25, Diciembre</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    height: height * 0.20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  welcomeText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amountText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 16,
    color: 'white',
  },
  operations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  operationButtonRed: {
    flex: 1,
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  operationButtonBlue: {
    flex: 1,
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  operationButtonYellow: {
    flex: 1,
    backgroundColor: '#FFEB3B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  operationText: {
    color: 'white',
    fontWeight: 'bold',
  },
  billsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  billsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  viewMore: {
    color: '#2196F3',
    marginBottom: 20,
  },
  billItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  billText: {
    fontSize: 16,
  },
  billAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  billDate: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Home;
