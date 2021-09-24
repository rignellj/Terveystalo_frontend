import { useState, useCallback } from 'react';
import axios, { Method } from 'axios';

export const useHttpClient = () => {
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState<null | string>(null);

	const sendRequest = useCallback(async (url: string | undefined, method: Method | undefined = 'get',
		withCredentials: boolean | undefined = false, params: any = {}, data: any = {},
		headers: any = {}
	) => {
		setIsloading(true);

		const CancelToken = axios.CancelToken;
		const { token, cancel } = CancelToken.source();

		try {
			const response = await axios({
				method,
				url,
				withCredentials,
				params,
				data,
				headers,
				cancelToken: token
			});
			setIsloading(false);
			return response;
		} catch (error: any) {
			if (axios.isCancel(error)) {
				setIsloading(false);
				console.log('Request canceled');
			}
			else if (error.response) {
				setIsloading(false);
				setError(error.response.data.message);
			} else if (error.request) {
				setIsloading(false);
				setError('Response was not received.');
			} else {
				setIsloading(false);
				setError('Something went wrong.');
			}
		}
		cancel('Operation canceled by the user.');
	}, []);

	const clearError = () => setError(null);

	return { isLoading, error, sendRequest, clearError };
};
