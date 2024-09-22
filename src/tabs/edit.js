// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { 
	AlignmentToolbar, 
	BlockControls, 
	InnerBlocks, 
	InspectorControls, 
	JustifyContentControl, 
	RichText, 
	useBlockProps
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

// Internal dependencies
import { Appender } from './utils';
import icons from './icons';

// Editor styles
import './editor.scss';

// Edit
export default function Edit( { attributes, setAttributes, clientId } ) {
	
	// Attributes
	const { 
		uid,
		textAlign,
		activeTab
	} = attributes;
	
	// Unique ID
	setAttributes( { uid: clientId } );

	// Block content
	const blockContent = () => {	
		
		// Wrapper 
		const wrapperAttributes = useBlockProps( {
			className: classnames( {
				[ `has-text-align-${ textAlign }` ]: textAlign
			} ),
		} );
				
		// Child blocks
		const childBlocks = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks );
			
		return(	
			<div { ...wrapperAttributes }>
				<ul 
					className={ "wp-block-tt-tabs-header" }
					role="tablist"
				>
					{ childBlocks.map( ( childBlock, index ) => {
						
						// Tab button click
						const tabButtonClick = () => {
							setAttributes( { activeTab: index } );
						};

						return ( 
							<li
								key={ index }
								className={ "wp-block-tt-tab-header" }
								role="presentation"
							>
								<button
									className={ "wp-block-tt-tab-header-button"}
									id={ "wp-block-tt-tab-header-button-" + childBlock.attributes.uid } 
									aria-controls={ "wp-block-tt-tab-panel-" + childBlock.attributes.uid }
									type="button"
									role="tab"
									onClick={ tabButtonClick }
									aria-selected={ `${ activeTab === index ? "true" : "false" }` }
									{...( activeTab === index ? { tabindex: null } : { tabindex: -1 } ) }
								>
									<RichText
										tagName="span"
										className="wp-block-tt-tab-header-button-text"
										value={ childBlock.attributes.headerButtonText }
										allowedFormats={ ['core/bold', 'core/italic'] }
										placeholder={ __( 'Add title', 'tab' ) }
										onChange={ ( value ) => {
											childBlocks[index].attributes.headerButtonText = value;
											setAttributes( { childBlocks } )
										} }
									/>
								</button>
							</li>
						)
					} ) }
				</ul>
				<InnerBlocks
					allowedBlocks={ ['tt/tab'] }
					template={ [['tt/tab']] }
					renderAppender={ () => (
                        <Appender rootClientId={ uid } />
                    ) }
				/>
			</div>
		)
	}

	// Block controls
	const blockControls = () => {
		return(	
			<BlockControls group="block">
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( value ) => setAttributes( { textAlign: value } ) }
				/>
			</BlockControls>
		)
	}
	
	return (
		<>
			{ blockControls() }
			{ blockContent() }
		</>
	);
};