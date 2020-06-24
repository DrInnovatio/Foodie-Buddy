import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hook/useResults';
import ResultsLists from '../components/ResultsList';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={ term }
        onTermChange={ setTerm }
        onTermSubmit={ () => searchApi(term) }
      />
      { errorMessage ? <Text>{ errorMessage }</Text> : null }
      <Text>We have found { results.length } results.</Text>
      <ResultsLists title="Cost Effective" />
      <ResultsLists title="Bit Pricier" />
      <ResultsLists title="Big Spender" />
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;