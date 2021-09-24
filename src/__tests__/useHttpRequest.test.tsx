import { renderHook } from '@testing-library/react-hooks';

import { useHttpClient } from '../hooks/useHttpRequest';

describe('useHttpClient hook', () => {
	it('returns isLoading, clearError(), sendRequest() and error properties', () => {
		const { result } = renderHook(() => useHttpClient());
		expect(result.current.isLoading).toBe(false);
		expect(typeof result.current.clearError).toBe('function');
		expect(typeof result.current.sendRequest).toBe('function');
		expect(typeof result.current.error).toBe('object');
	});
});
