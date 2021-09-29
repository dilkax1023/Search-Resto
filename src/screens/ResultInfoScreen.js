import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../apis/yelp';

const ResultInfoScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);
	const id = navigation.getParam('id');

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View>
			<Text>ResultInfoScreen</Text>
			<FlatList
				keyExtractor={(photo) => photo}
				data={result.photos}
				renderItem={({ item }) => {
					return <Image style={{ width: 300, height: 200 }} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
};

export default ResultInfoScreen;

const styles = StyleSheet.create({});
