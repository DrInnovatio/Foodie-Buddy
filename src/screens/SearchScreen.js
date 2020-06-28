import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hook/useResults';
import ResultsLists from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={ term }
        onTermChange={ setTerm }
        onTermSubmit={ () => searchApi(term) }
      />
      { errorMessage ? <Text>{ errorMessage }</Text> : null }

      <ScrollView>
        <ResultsLists results={ filterResultsByPrice('$') } title="Cost Effective" navigation={ navigation } />
        <ResultsLists results={ filterResultsByPrice('$$') } title="Bit Pricier" navigation={ navigation } />
        <ResultsLists results={ filterResultsByPrice('$$$') } title="Big Spender" navigation={ navigation } />
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;