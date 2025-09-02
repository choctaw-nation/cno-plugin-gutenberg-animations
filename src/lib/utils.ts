import { canAnimate as allowedBlocks } from './consts';

/**
 * Utility function to check if a block can be reversed
 *
 * @param name the name of the block
 */
export function canAnimate( name: string ): boolean {
	return allowedBlocks.includes( name );
}
