// External dependencies
import classnames from 'classnames';

// WordPress dependencies
import { Inserter } from '@wordpress/block-editor';
import { 
	IconButton, 
	Path, 
	SVG, 
	ToolbarDropdownMenu 
} from '@wordpress/components';
import { 
	__, 
	sprintf 
} from '@wordpress/i18n';
import { plus } from '@wordpress/icons';

// Appender
export const Appender = ( { rootClientId } ) => {
    return (
        <Inserter
            rootClientId={ rootClientId }
            renderToggle={ ( { onToggle, disabled } ) => (
                <IconButton
                    className="block-editor-button-block-appender"
                    onClick={ onToggle }
                    disabled={ disabled }
                    label="Add tab"
                    icon={ plus }
                />
            ) }
            isAppender
        />
    );
}
