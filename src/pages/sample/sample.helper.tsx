import { useMemo } from 'react';

interface SampleProprs {
	resources: SampleScreenResources;
}

export interface SampleScreenResources {
	title: string;
	subtitle: string;
}

export const useSampleHelper = (): SampleProprs => {
	const resources = useMemo((): SampleScreenResources => {
		return {
			title: 'Sample Title',
			subtitle: 'Sample Subtitle',
		};
	}, []);

	return {
		resources,
	};
};
