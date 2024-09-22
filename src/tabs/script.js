window.addEventListener( 'load', function() {
	
	// Tabs
	const allTabs = document.querySelectorAll( '.wp-block-tt-tabs' );
	allTabs.forEach( tabs => { 
	
		// Tabs headers
		const tabsHeaders = tabs.querySelectorAll( '.wp-block-tt-tabs-header' );	
		tabsHeaders.forEach( tabsHeader => {
			tabsHeader.setAttribute( 'role', 'tablist' );
		} )
	
		// Tab headers
		const tabHeaders = tabs.querySelectorAll( '.wp-block-tt-tab-header' );
		tabHeaders.forEach( tabHeader => {
			tabHeader.setAttribute( 'role', 'presentation' );	
		} )
	
		// Tab panels
		const tabPanels = tabs.querySelectorAll( '.wp-block-tt-tab-panel' );
		tabPanels.forEach( ( tabPanel, index ) => {	
			tabPanel.setAttribute( 'role', 'tabpanel' );
			tabPanel.setAttribute( 'tabindex', '0' );
			tabPanel.setAttribute( 'hidden', '' );
			if ( index == 0 ) {
				tabPanel.removeAttribute( 'hidden' );
			}
		} )
	
		// Tab buttons
		const tabButtons = tabs.querySelectorAll( '.wp-block-tt-tab-header-button' );
		tabButtons.forEach( ( tabButton, index ) => {
			const tabButtonId = tabButton.getAttribute( 'id' ).replace( 'wp-block-tt-tab-header-button-', '' );
			const tabButtonPanel = document.getElementById( `wp-block-tt-tab-panel-${tabButtonId}` );
			tabButton.setAttribute( 'aria-controls', `wp-block-tt-tab-panel-${tabButtonId}` );
			tabButton.setAttribute( 'type', 'button' );
			tabButton.setAttribute( 'role', 'tab' );	
			tabButton.setAttribute( 'tabindex', '-1' );	
			tabButton.removeAttribute( 'aria-selected' );
			tabButtonPanel.setAttribute( 'aria-labelledby', `wp-block-tt-tab-header-button-${tabButtonId}` );
			if ( index == 0 ) {
				tabButton.setAttribute( 'aria-selected', true );
				tabButton.removeAttribute( 'tabindex' );
				tabButtonPanel.removeAttribute( 'hidden' );
			}
			
			// Button focus
			tabButton.addEventListener( 'focus', () => {		
		
				// Tab buttons
				tabButtons.forEach( tabButton => {
					tabButton.removeAttribute( 'aria-selected' );
					tabButton.setAttribute( 'tabindex', '-1' );
				} )
			
				// Tab panels
				tabPanels.forEach( tabPanel => {
					tabPanel.setAttribute( 'hidden', '' );
				} )
		
				// Focused tab button
				tabButton.setAttribute( 'aria-selected', true );
				tabButton.removeAttribute( 'tabindex' );
				tabButtonPanel.removeAttribute( 'hidden' );			
			} )
		
	        // Button keydown
	        tabButton.addEventListener( 'keydown', e => {

	            // Tab index
	            let index = Array.prototype.indexOf.call( tabButtons, e.currentTarget );
			
	            // Key index direction
	            let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
            
				// Key down focuses open panel
				if ( dir !== null ) {
	                dir === 'down' ? tabPanels[index].focus() : tabButtons[dir] ? switchTab( e.currentTarget, tabButtons[dir] ) : void 0;
	            }
	        } ) ;
		
			// Switch tab
		    const switchTab = ( oldTab, newTab ) => {
	      	
				// Old tab
		    	oldTab.removeAttribute( 'aria-selected' );
		    	oldTab.setAttribute( 'tabindex', '-1' );
			
				// New tab
		    	newTab.focus();
		    	newTab.removeAttribute( 'tabindex' );
		    	newTab.setAttribute( 'aria-selected', 'true' );
		    };
		} )
	} )

} );