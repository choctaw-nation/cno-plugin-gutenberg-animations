import { addFilter } from '@wordpress/hooks';
import addAnimationAttributes from './editor/addAnimationAttributes';
import addAnimationOnSave from './editor/addAnimationOnSave';
import { addAnimationControls as GutenbergControls } from './editor/addAnimationControls';
import domReady from '@wordpress/dom-ready';

domReady( () => {
	const namespace = 'cno-gutenberg-animations';
	const hooks = [
		{
			hook: 'blocks.registerBlockType',
			namespace: `${ namespace }/add-animation-attributes`,
			callback: addAnimationAttributes,
		},
		{
			hook: 'editor.BlockEdit',
			namespace: `${ namespace }/add-animation-controls`,
			callback: GutenbergControls,
		},
		{
			hook: 'blocks.getSaveContent.extraProps',
			namespace: `${ namespace }/add-animation-on-save`,
			callback: addAnimationOnSave,
		},
	];
	hooks.forEach( ( { hook, namespace, callback } ) => {
		addFilter( hook, namespace, callback );
	} );
} );
