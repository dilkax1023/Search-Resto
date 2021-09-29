import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ResultDetail = ({ result }) => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: result.image_url }} style={styles.image} />
			<Text style={styles.name}>{result.name}</Text>
			<Text>
				{result.rating} Stars, {result.review_count} Reviews
			</Text>
		</View>
	);
};

export default ResultDetail;

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
	},
	image: {
		width: 250,
		borderRadius: 4,
		height: 120,
		marginBottom: 5,
	},
	name: {
		fontWeight: 'bold',
	},
});
