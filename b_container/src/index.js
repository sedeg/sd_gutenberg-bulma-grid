import { registerBlockType } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import {
	InnerBlocks,
	InspectorControls,
	BlockControls
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ColorPalette,
	ToggleControl,
	ButtonGroup,
	Button
} from '@wordpress/components';
import { colors } from '../../utils/colors';
import classNames from 'classnames';

class SDBulmaContainer extends Component {
	static getInitialState(width, colorBG, removePadding, alignment) {
		return {
			width,
			colorBG,
			removePadding,
			alignment
		};
	}

	constructor() {
		super(...arguments);
		const { width, colorBG, removePadding, alignment } = this.props.attributes;
		this.state = this.constructor.getInitialState(
			width,
			colorBG,
			removePadding,
			alignment
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
		const { width, colorBG, removePadding, alignment } = this.state;
		const size = width !== 'default' ? `is-${width}` : '';
		const containerClass = classNames('container', size);
		const styles = {
			backgroundColor: colorBG
		};
		return (
			<>
				{
					<InspectorControls key="inspector">
						<PanelBody title="Container Width">
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
						<PanelBody title="Content alignment">
							<ButtonGroup label="Vertical alignment">
								<Button isSecondary>Top</Button>
								<Button isSecondary>center</Button>
								<Button isSecondary>Bottom</Button>
							</ButtonGroup>
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
			default: 'center center'
		}
	},
	edit: SDBulmaContainer,
	save() {
		return <InnerBlocks.Content />;
	}
});
