import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hook/useResults';
import ResultsLists from '../components/ResultsList';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={ term }
        onTermChange={ setTerm }
        onTermSubmit={ () => searchApi(term) }
      />
      { errorMessage ? <Text>{ errorMessage }</Text> : null }
      <Text>We have found { results.length } results.</Text>
      <ScrollView>
        <ResultsLists results={ filterResultsByPrice('$') } title="Cost Effective" />
        <ResultsLists results={ filterResultsByPrice('$$') } title="Bit Pricier" />
        <ResultsLists results={ filterResultsByPrice('$$$') } title="Big Spender" />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;