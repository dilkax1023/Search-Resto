import { useState } from 'react';
import yelp from '../apis/yelp';

export default function useResults() {
	const [results, setResults] = useState([]);
	const [error, setError] = useState('');

	const search = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'new york',
				},
			});
			setResults(response.data.businesses);
		} catch (error) {
			setError('Somthing went wrong! Please try again later');
		}
	};

	return [search, results, error];
}
