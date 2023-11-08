import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AllProduct = ({ route, navigation }) => {
  const { item } = route.params;
  const [productDetails, setProductDetails] = useState(item);

  useEffect(() => {
    console.log(productDetails, 'productDetails');
    console.log(item.item, 'product');
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.item.thumbnail }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.item.title}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Brand Name:</Text>
          <Text style={styles.value}>{item.item.brand}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Category Name:</Text>
          <Text style={styles.value}>{item.item.category}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    width: 120,
  },
  value: {
    fontSize: 18,
  },
});

export default AllProduct;
