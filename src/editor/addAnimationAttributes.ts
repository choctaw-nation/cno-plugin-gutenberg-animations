import type { BlockAttributes } from '@wordpress/blocks';
import { canAnimate } from '../lib/utils';

/**
 * Add animation attribute to the block settings
 * @param settings the block settings
 * @param name     the name of the block
 */
export default function addAnimationAttributes(
	settings: BlockAttributes,
	name: string
): {} {
	if ( canAnimate( name ) ) {
		settings.attributes = {
			...settings.attributes,
			animationEffect: {
				type: 'string',
				enum: [
					'none',
					'fade-in',
					'fade-up',
					'fade-down',
					'fade-left',
					'fade-right',
				],
				default: 'none',
			},
			animationMode: {
				type: 'string',
				enum: [ 'scroll', 'once' ],
				default: 'once',
			},
		};
	}
	return settings;
}
