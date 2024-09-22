// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { 
	AlignmentToolbar, 
	BlockControls, 
	InnerBlocks, 
	RichText, 
	useBlockProps
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

// Edit
export default function Edit( { attributes, setAttributes, context, clientId } ) {

	// Attributes
	const { 
		uid,
		textAlign,
		activeTab,
		headerButtonText
	} = attributes;
	
	// Set attributes with parent values
	setAttributes( {
		activeTab: context[ "tabs/activeTab" ]
	} );
	
	// Unique ID
	setAttributes( { uid: clientId } );
	
	// Block content
	const blockContent = () => {	
		
		// Wrapper 
		const wrapperAttributes = useBlockProps( {
			className: classnames( {
				'wp-block-tt-tab-panel': true,
				[ `has-text-align-${ textAlign }` ]: textAlign
			} ),
		} );
		
		// Index
		const { index } = useSelect( 
			( select ) => {
				return {
					index: select( 'core/block-editor' ).getBlockIndex( uid )
				}
			}, 
			[ uid ]
		);
		
		// All other blocks
		const allOtherBlocks = wp.blocks.getBlockTypes().map( block => block.name ).filter( name => name !== 'tt/tab' );
		
		return(	
			<div 
				{ ...wrapperAttributes }
				id={ "wp-block-tt-tab-panel-" + uid } 
				aria-labelledby={ "wp-block-tt-tab-header-button-" + uid } 
				role="tabpanel"
				{...( activeTab === index ? {} : { hidden: 'true' } ) }
			>
				<InnerBlocks 
					allowedBlocks={ allOtherBlocks } 
					template={ [[ 'core/paragraph', { placeholder: 'Add content' } ]] }
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