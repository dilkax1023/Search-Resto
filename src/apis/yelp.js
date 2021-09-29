import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer HMusn1y3ACubfVruZO2mNy0EqHrrWiHmVhg_khi99n6c7r5PwwPTYb-eEZE7pOVk0k7pRLg_pGvy92N6Ir_0O9xeSZE7tUbP1lHHqmSPfCcVat46o6GyL5jQLBfAX3Yx',
	},
});
