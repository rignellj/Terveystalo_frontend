import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState<null | string>(null);

	const activeHttpRequest = useRef<AbortController[]>([]);

	const sendRequest = useCallback(async (url: string, method = 'GET', credentials = 'omit', body = null, headers = {}) => {
		setIsloading(true);
		const httpAbortCtrl = new AbortController();
		activeHttpRequest.current.push(httpAbortCtrl);

		try {
			const response = await fetch(url, {
				method,
				credentials,
				body,
				headers,
				signal: httpAbortCtrl.signal
			});
			const responseData = await response.json();

			activeHttpRequest.current = activeHttpRequest.current.filter(
				reqCtrl => reqCtrl !== httpAbortCtrl
			);

			if (!response.ok) {
				throw new Error(responseData.message);
			}
			setIsloading(false);
			return responseData;
		} catch (error) {
			if (error instanceof Error) {
				if (error.name === 'AbortError') {
					setIsloading(false);
					console.log('Fetch aborted');
				} else {
					setIsloading(false);
					setError(error.message);
					throw error;
				}
			}
		}
	}, []);

	const clearError = () => setError(null);

	useEffect(() => {
		return () => {
			activeHttpRequest.current.forEach(abortCtrl => abortCtrl.abort());
		};
	}, []);

	return { isLoading, error, sendRequest, clearError };
};
