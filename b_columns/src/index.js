import { registerBlockType } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	ColorPalette,
	SelectControl
} from '@wordpress/components';
import classNames from 'classnames';
import { colors } from '../../utils/colors';

const allowedBlocks = [];
const template = [
	['sd/bulma-column', { widthFullHD: '' }],
	['sd/bulma-column', { widthFullHD: '' }]
];

class SDBulmaColumns extends Component {
	static getInitialState(isGapless, gapSize, colorBG, alignment) {
		return {
			isGapless,
			gapSize,
			colorBG,
			alignment
		};
	}

	constructor() {
		super(...arguments);
		const { isGapless, gapSize, colorBG, alignment } = this.props.attributes;
		this.state = this.constructor.getInitialState(
			isGapless,
			gapSize,
			colorBG,
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
		const { isGapless, gapSize, colorBG, alignment } = this.state;
		const gap = !isGapless ? `is-${gapSize}` : '';
		const colClass = classNames('columns', gap);
		const styles = {
			backgroundColor: colorBG
		};
		return (
			<>
				{
					<InspectorControls key="inspector">
						<PanelBody title="Columns options">
							<ToggleControl
								label="Gapless"
								checked={isGapless}
								help={isGapless ? 'is-gapless' : null}
								onChange={isGapless => this.changeValue('isGapless', isGapless)}
							/>
							{!isGapless ? (
								<RangeControl
									label=""
									value={gapSize}
									onChange={gapSize => this.changeValue('gapSize', gapSize)}
									min={1}
									max={8}
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
							<ToggleControl
								label="content vertically centered?"
								checked={alignment}
								help={alignment ? 'is-vcentered' : null}
								onChange={isGapless => this.changeValue('alignment', alignment)}
							/>
						</PanelBody>
					</InspectorControls>
				}
				<section className={colClass} style={styles}>
					<InnerBlocks allowedBlocks={allowedBlocks} template={template} />
				</section>
			</>
		);
	}
}

registerBlockType('sd/bulma-columns', {
	title: 'SD Bulma Columns',
	icon: 'layout',
	category: 'sd-gutenberg-bulma-grid',
	attributes: {
		isGapless: {
			type: 'boolean',
			default: false
		},
		gapSize: {
			type: 'number',
			default: '3'
		},
		colorBG: {
			type: 'string',
			default: 'transparent'
		},
		alignment: {
			type: 'boolean',
			default: false
		}
	},
	edit: SDBulmaColumns,
	save() {
		return <InnerBlocks.Content />;
	}
});
