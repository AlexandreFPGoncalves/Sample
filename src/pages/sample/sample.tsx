import React from 'react';
import { Block, InitialPage, Titles } from '../../components';
import { rem } from '../../helpers';
import { useSampleHelper } from './sample.helper';

export const Sample: React.FC = () => {
	const { resources } = useSampleHelper();
	return (
		<InitialPage style={{ backgroundColor: 'var(--grey-900)' }}>
			<Block
				stack
				style={{
					height: '100%',
					justifyContent: 'space-evenly',
				}}
			>
				<Block align={{ horizontal: 'center' }} style={{ color: 'var(--white)' }}>
					<Block style={{ border: `1px solid var(--grey-100)`, borderRadius: '5px', padding: rem(50) }}>
						<Block stack align={{ horizontal: 'center' }}>
							{/* Title & Subtitle */}
							<Titles
								title={resources.title}
								titleStyle={{ textAlign: 'center' }}
								subtitle={resources.subtitle}
								horizontalAlign="center"
							/>
						</Block>
					</Block>
				</Block>
			</Block>
		</InitialPage>
	);
};
