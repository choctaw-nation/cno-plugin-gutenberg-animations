import type { BlockAttributes as BaseAttributes } from '@wordpress/blocks';

export interface BlockAttributes extends BaseAttributes {
	animationEffect:
		| 'none'
		| 'fade-in'
		| 'fade-up'
		| 'fade-down'
		| 'fade-left'
		| 'fade-right';
	animationMode: 'scroll' | 'once';
}
