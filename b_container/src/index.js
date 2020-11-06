import { registerBlockType } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import {
	InnerBlocks,
	InspectorControls,
	MediaUpload
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ColorPalette,
	ToggleControl,
	ButtonGroup,
	Button,
	TextControl
} from '@wordpress/components';
import { colors } from '../../utils/colors';
import classNames from 'classnames';

class SDBulmaContainer extends Component {
	static getInitialState(
		width,
		colorBG,
		removePadding,
		backgroundImage,
		minHeight
	) {
		return {
			width,
			colorBG,
			removePadding,
			backgroundImage,
			minHeight
		};
	}

	constructor() {
		super(...arguments);
		const {
			width,
			colorBG,
			removePadding,
			backgroundImage,
			minHeight
		} = this.props.attributes;
		this.state = this.constructor.getInitialState(
			width,
			colorBG,
			removePadding,
			backgroundImage,
			minHeight
		);
	}

	changeValue = (style, definition) => {
		const { setAttributes } = this.props;

		const stateObject = function() {
			const returnObj = {};
			returnObj[style] = definition;
			return returnObj;
		}.bind(style)();

		this.setState(stateObject);
		setAttributes(stateObject);
	};

	render() {
		const {
			width,
			colorBG,
			removePadding,
			alignment,
			minHeight,
			backgroundImage
		} = this.state;
		const size = width !== 'default' ? `is-${width}` : '';
		const containerClass = classNames('container', size);
		const styles = {
			backgroundColor: colorBG,
			minHeight
		};
		return (
			<>
				{
					<InspectorControls key="inspector">
						<PanelBody title="Layout options">
							<TextControl
								label="min. height"
								value={minHeight}
								onChange={minHeight => {
									this.changeValue('minHeight', minHeight);
								}}
							/>
							<SelectControl
								value={width}
								options={[
									{ label: 'Default', value: 'default' },
									{ label: 'Fluid, stretch content', value: 'fluidc' },
									{ label: 'Fluid, keep content width', value: 'fluid' }
								]}
								onChange={width => {
									this.changeValue('width', width);
								}}
							/>
							{width === 'fluidc' ? (
								<ToggleControl
									label="Remove container padding-left and -right?"
									checked={removePadding}
									help={removePadding ? 'no padding' : 'padding'}
									onChange={removePadding =>
										this.changeValue('removePadding', removePadding)
									}
								/>
							) : null}
						</PanelBody>
						<PanelBody title="Color options">
							<ColorPalette
								colors={colors}
								value={colorBG}
								onChange={colorBG => this.changeValue('colorBG', colorBG)}
							/>
						</PanelBody>
						<PanelBody title="Background Image">
							<MediaUpload
								onSelect={backgroundImage =>
									this.changeValue('backgroundImage', backgroundImage)
								}
								type="image"
								value={backgroundImage}
								render={({ open }) => (
									<>
										{Object.keys(backgroundImage).length !== 0 ? (
											<img
												src={backgroundImage.sizes.thumbnail.url}
												width="150"
												height="150"
											/>
										) : null}
										<button className="button is-secondary" onClick={open}>
											upload Image
										</button>
									</>
								)}
							/>
							<div>
								<button
									onClick={() => this.changeValue('backgroundImage', {})}
									className="button is-red is-small"
								>
									remove Image
								</button>
							</div>
						</PanelBody>
					</InspectorControls>
				}
				<section className={containerClass} style={styles}>
					<InnerBlocks />
				</section>
			</>
		);
	}
}

registerBlockType('sd/bulma-container', {
	title: 'SD Bulma Container',
	icon: 'layout',
	category: 'sd-gutenberg-bulma-grid',
	attributes: {
		width: {
			type: 'string',
			default: 'default'
		},
		colorBG: {
			type: 'string',
			default: 'transparent'
		},
		removePadding: {
			type: 'boolean',
			default: true
		},
		alignment: {
			type: 'string',
			default: 'center'
		},
		minHeight: {
			type: 'string',
			default: 'auto'
		},
		backgroundImage: {
			type: 'object',
			default: {}
		}
	},
	edit: SDBulmaContainer,
	save() {
		return <InnerBlocks.Content />;
	}
});
