/**
 * Adds  styles to the block in the Editor view
 */
export default function addAnimationOnSave(
	extraProps,
	blockType,
	attributes
) {
	const { animationEffect, animationMode } = attributes;

	if ( animationEffect && 'none' !== animationEffect ) {
		extraProps[ 'data-animation' ] = animationEffect;
		extraProps[ 'data-animation-mode' ] = animationMode;
	}

	return extraProps;
}
