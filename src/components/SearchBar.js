import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ setTerm, term, onTermSubmit }) => {
	return (
		<View style={styles.searchBar}>
			<Feather name='search' size={36} color='black' />
			<TextInput
				onChangeText={(newTerm) => setTerm(newTerm)}
				value={term}
				style={styles.input}
				placeholder='Search'
				autoCapitalize='none'
				autoCorrect={false}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	searchBar: {
		backgroundColor: '#F0EE6E',
		marginHorizontal: 15,
		borderRadius: 5,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		marginVertical: 10,
	},
	input: {
		flex: 1,
		marginLeft: 10,
		alignSelf: 'stretch',
		fontSize: 18,
	},
});
