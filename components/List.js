import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const List = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    if (countries === null) {
        return null
    } else {
        return (
            <>
                <View style={styles.containerBig}>
                    <FlatList  data={countries} renderItem={Country} />
                </View>
            </>
        );
    }
};

const Country = ({ item}) => {
    return (
     <View style={styles.container}>
         <Text style={styles.text}>Name : {item.name}</Text>
         <Text style={styles.text}>Region :{item.region}</Text>
     </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
    text: {
        textAlign: 'center'
    },
    containerBig : {
        margin: 40,
    }
}) 

export default List;