import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl, // Import RefreshControl
} from 'react-native';

const Profile = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  const [refreshing, setRefreshing] = useState(false); // Add refreshing state

  const showAllProduct = () => {
    return fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => setProduct(json.products));
  };

  useEffect(() => {
    showAllProduct();
  }, []);

  // Implement onRefresh function
  const onRefresh = () => {
    setRefreshing(true);
    showAllProduct()
      .then(() => {
        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        setRefreshing(false);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        numColumns={2}
        renderItem={(item) => {
          return (
            <TouchableOpacity
            onPress={() => navigation.navigate('SingalProduct', { item : item })}
            style={styles.productItem}
          >
             
                <Image
                  source={{ uri: item.item.thumbnail }}
                  style={styles.productImage}
                />
                <Text style={styles.productBrand}>{item.item.brand}</Text>
                <Text style={styles.productCategory}>category: {item.item.category}</Text>
                <Text style={styles.productPrice}>price: {item.item.price}</Text>
                <Text style={styles.productStock}>price: {item.item.stock}</Text>
         
            </TouchableOpacity>
          );
        }}
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh} // Function to call when refreshing
          />
        )}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  productItem: {
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
    margin: 10,
    padding: 10,
    width: '46%',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  productImage: {
    width: '80%',
    aspectRatio: 1, // Maintain aspect ratio
  },
  productBrand: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  productCategory: {
    color: '#555',
  },
  productPrice: {
    color: 'green',
  },
  productStock: {
    color: 'red',
  },
});
