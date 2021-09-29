import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';

const RestaurantList = ({ title, results, navigation }) => {
	if (!results.length) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				keyExtractor={(item) => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('ResultInfo', { id: item.id })}>
							<ResultDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default withNavigation(RestaurantList);

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 6,
	},
});
