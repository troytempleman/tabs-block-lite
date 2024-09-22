// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';

// Internal dependencies
import metadata from './block.json';
import icons from './icons';
import Edit from './edit';
import Save from './save';

// Editor and front end styles
import './style.scss';

// Get block name from json file
const { name } = metadata;

// Register block
registerBlockType( name, {
	
	// Icon
	icon: icons.tabs,
	
	// Edit
	edit: Edit,

	// Save
	save: Save,
	
} );

