import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody } from '@wordpress/components';
import { canAnimate } from '../lib/utils';

export const addAnimationControls = createHigherOrderComponent(
	( BlockEdit ) => {
		return ( props: any ) => {
			const { name, attributes, setAttributes } = props;

			if ( ! canAnimate( name ) ) {
				return <BlockEdit { ...props } />;
			}
			const { animationEffect, animationMode } = attributes;

			return (
				<>
					<BlockEdit { ...props } />
					<InspectorControls>
						<PanelBody title="Animation Settings">
							<SelectControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								__shouldNotWarnDeprecated36pxSize
								label="Effect"
								value={ animationEffect }
								options={ [
									{ label: 'None', value: '' },
									{ label: 'Fade In', value: 'fade-in' },
									{ label: 'Fade Up', value: 'fade-up' },
									{ label: 'Fade Down', value: 'fade-down' },
									{
										label: 'Fade Left',
										value: 'fade-left',
									},
									{
										label: 'Fade Right',
										value: 'fade-right',
									},
								] }
								onChange={ ( val ) =>
									setAttributes( { animationEffect: val } )
								}
							/>
							<SelectControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								__shouldNotWarnDeprecated36pxSize
								label="Mode"
								value={ animationMode }
								options={ [
									{ label: 'Fire Once', value: 'once' },
									{ label: 'Scroll-driven', value: 'scroll' },
								] }
								onChange={ ( val ) =>
									setAttributes( { animationMode: val } )
								}
							/>
						</PanelBody>
					</InspectorControls>
				</>
			);
		};
	},
	'addAnimationControls'
);
