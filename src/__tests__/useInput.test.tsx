import { renderHook, act } from '@testing-library/react-hooks';

import useInput from '../hooks/useInput';

describe('useInput hook', () => {
	it('has initial state: {value: \'\', isTouched: false}, there is reset(), inputBlurHandler() and valueChangeHandler() functions available', () => {
		const { result } = renderHook(() => useInput(value => value.length === 0));
		expect(result.current.value).toBe('');
		expect(result.current.hasError).toBe(false);
		expect(typeof result.current.reset).toBe('function');
		expect(typeof result.current.inputBlurHandler).toBe('function');
		expect(typeof result.current.valueChangeHandler).toBe('function');
	});
	it('works with initial value', () => {
		const { result } = renderHook(() => useInput(value => value.length >= 12, 'initialvalue'));
		expect(result.current.value).toBe('initialvalue');
		expect(result.current.hasError).toBe(false);
	});
	it('has error if validation function is returning false', () => {
		const { result } = renderHook(() => useInput(value => value.length >= 13));
		act(() => result.current.inputBlurHandler());
		expect(result.current.value).toBe('');
		expect(result.current.hasError).toBe(true);
	});
	it('\'s input field is cleared when reset() is called', () => {
		const { result } = renderHook(() => useInput(value => value.length > 0, 'initialvalue'));
		act(() => result.current.reset());
		expect(result.current.value).toBe('');
		expect(result.current.hasError).toBe(false);
	});
});
