import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [search, results, error] = useResults();

	useEffect(() => {
		search('pasta');
	}, []);

	const filterResults = (price) => {
		return results.filter((result) => result.price === price);
	};

	return (
		<>
			<SearchBar term={term} setTerm={setTerm} onTermSubmit={() => search(term)} />
			{error ? <Text>{error}</Text> : null}
			<ScrollView>
				<RestaurantList title='Cost Effective' results={filterResults('$')} />
				<RestaurantList title='Bit Price' results={filterResults('$$')} />
				<RestaurantList title='Bit Price' results={filterResults('$$')} />
				<RestaurantList title='Bit Price' results={filterResults('$$')} />
				<RestaurantList title='Big Splender' results={filterResults('$$$')} />
			</ScrollView>
		</>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});
