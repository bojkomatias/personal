"use client";
import { useRef, useEffect } from "react";

export function useTimeout(
	callback: (...callbackParams: any[]) => void,
	delay: number,
) {
	const timeoutRef = useRef<number>(null);

	const start = (...callbackParams: any[]) => {
		if (!timeoutRef.current) {
			timeoutRef.current = window.setTimeout(() => {
				callback(callbackParams);
				timeoutRef.current = null;
			}, delay);
		}
	};

	const clear = () => {
		if (timeoutRef.current) {
			window.clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	};

	useEffect(() => {
		return clear;
	}, [delay]);

	return { start, clear };
}
