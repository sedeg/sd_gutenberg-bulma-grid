import { registerBlockType } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	ColorPalette
} from '@wordpress/components';
import classNames from 'classnames';
import { colors } from '../../utils/colors';

class SDBulmaColumn extends Component {
	static getInitialState(
		editFullHD,
		widthFullHD,
		editWidescreen,
		widthWidescreen,
		editDesktop,
		widthDesktop,
		editTablet,
		widthTablet,
		editMobile,
		widthMobile,
		colorBG
	) {
		return {
			editFullHD,
			widthFullHD,
			editWidescreen,
			widthWidescreen,
			editDesktop,
			widthDesktop,
			editTablet,
			widthTablet,
			editMobile,
			widthMobile,
			colorBG
		};
	}

	constructor() {
		super(...arguments);
		const {
			editFullHD,
			widthFullHD,
			editWidescreen,
			widthWidescreen,
			editDesktop,
			widthDesktop,
			editTablet,
			widthTablet,
			editMobile,
			widthMobile,
			colorBG
		} = this.props.attributes;
		this.state = this.constructor.getInitialState(
			editFullHD,
			widthFullHD,
			editWidescreen,
			widthWidescreen,
			editDesktop,
			widthDesktop,
			editTablet,
			widthTablet,
			editMobile,
			widthMobile,
			colorBG
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

	calcWidth = size => {
		return Math.round((100 / 12) * size);
	};

	render() {
		const {
			editFullHD,
			widthFullHD,
			editWidescreen,
			widthWidescreen,
			editDesktop,
			widthDesktop,
			editTablet,
			widthTablet,
			editMobile,
			widthMobile,
			colorBG
		} = this.state;
		const colClass = classNames({ column: true });

		const styles = {
			backgroundColor: colorBG
		};
		return (
			<>
				{
					<InspectorControls key="inspector">
						<PanelBody title="Column Sizes">
							<ToggleControl
								label="Edit column width on mobile devices"
								checked={editMobile}
								help={editFullHD ? 'custom' : 'auto'}
								onChange={editMobile =>
									this.changeValue('editMobile', editMobile)
								}
							/>
							{editMobile ? (
								<RangeControl
									label="space used for viewports <= 768"
									value={widthMobile}
									onChange={widthMobile =>
										this.changeValue('widthMobile', widthMobile)
									}
									help={`${this.calcWidth(widthMobile)}%`}
									min={1}
									max={12}
								/>
							) : null}
							<ToggleControl
								label="Edit column width on tablet devices"
								checked={editTablet}
								help={editTablet ? 'custom' : 'auto'}
								onChange={editTablet =>
									this.changeValue('editTablet', editTablet)
								}
							/>
							{editTablet ? (
								<RangeControl
									label="space used for viewports >= 769px"
									value={widthTablet}
									onChange={widthTablet =>
										this.changeValue('widthTablet', widthTablet)
									}
									min={1}
									max={12}
								/>
							) : null}
							<ToggleControl
								label="Edit column width on desktop devices"
								checked={editDesktop}
								help={editDesktop ? 'custom' : 'auto'}
								onChange={editDesktop =>
									this.changeValue('editDesktop', editDesktop)
								}
							/>
							{editDesktop ? (
								<RangeControl
									label="Space used for viewports >= 1024px"
									value={widthDesktop}
									onChange={widthDesktop =>
										this.changeValue('widthDesktop', widthDesktop)
									}
									min={1}
									max={12}
								/>
							) : null}
							<ToggleControl
								label="Edit width on widescreen devices"
								checked={editWidescreen}
								help={editWidescreen ? 'custom' : 'auto'}
								onChange={editWidescreen =>
									this.changeValue('editWidescreen', editWidescreen)
								}
							/>
							{editWidescreen ? (
								<RangeControl
									label="Space used for viewports >= 1216px"
									value={widthWidescreen}
									onChange={widthWidescreen =>
										this.changeValue('widthWidescreen', widthWidescreen)
									}
									min={1}
									max={12}
								/>
							) : null}
							<ToggleControl
								label="Edit width for full HD devices"
								checked={editFullHD}
								help={editFullHD ? 'custom width' : 'auto width'}
								onChange={editFullHD =>
									this.changeValue('editFullHD', editFullHD)
								}
							/>
							{editFullHD ? (
								<RangeControl
									label="Space used for viewports >= 1408px"
									value={widthFullHD}
									onChange={widthFullHD =>
										this.changeValue('widthFullHD', widthFullHD)
									}
									min={1}
									max={12}
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
					</InspectorControls>
				}
				<div className={`${colClass}`} style={styles}>
					<InnerBlocks />
				</div>
			</>
		);
	}
}

registerBlockType('sd/bulma-column', {
	title: 'SD Bulma Column',
	icon: 'layout',
	category: 'sd-gutenberg-bulma-grid',
	attributes: {
		editFullHD: {
			type: 'boolean',
			default: false
		},
		widthFullHD: {
			type: 'string',
			default: '6'
		},
		editWidescreen: {
			type: 'boolean',
			default: false
		},
		widthWidescreen: {
			type: 'string',
			default: '6'
		},
		editDesktop: {
			type: 'boolean',
			default: false
		},
		widthDesktop: {
			type: 'string',
			default: '6'
		},
		editTablet: {
			type: 'boolean',
			default: false
		},
		widthTablet: {
			type: 'string',
			default: '6'
		},
		editMobile: {
			type: 'boolean',
			default: false
		},
		widthMobile: {
			type: 'string',
			default: '12'
		},
		colorBG: {
			type: 'string',
			default: 'transparent'
		}
	},
	edit: SDBulmaColumn,
	save() {
		return <InnerBlocks.Content />;
	},
	parent: ['sd/bulma-columns']
});
