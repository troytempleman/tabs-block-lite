# Tabs Block Lite

**Contributors:** troytempleman \
**Donate link:** https://www.buymeacoffee.com/troytempleman \
**Tags:** tabs, tab, panel, panels, block, show, hide, sections, accessible, responsive \
**Requires at least:** 6.0 \
**Tested up to:** 6.4.1 \
**Stable tag:** 0.1.1 \
**Requires PHP:** 7.4 \
**License:** GPLv2 or later \
**License URI:** https://www.gnu.org/licenses/gpl-2.0.html

A block that displays horizontal list items that can be selected to show their associated sections of content.

## Description

Tabs Block Lite adds an accessible and responsive Tabs block to the block editor inserter that can be added to display horizontal list items that can be selected to show their associated sections of content.

Ideal for condensing longform or complex content. Also useful for reducing page scrolling.

Upgrade to Pro at [https://troytempleman.com/wordpress/blocks/tabs-block/](https://troytempleman.com/wordpress/blocks/tabs-block/).

### Features

* Accessible
* Responsive
* Inserter button for adding tabs
* Settings
  * Block alignment
  * Text alignment
  * Item justification
* Styles
  * Color
     * Text
     * Background
     * Link
     * Button text **[Pro]** 
     * Button text hover **[Pro]** 
     * Button text active **[Pro]** 
     * Button background **[Pro]** 
     * Button background hover **[Pro]** 
     * Header background active **[Pro]** 
     * Panel text **[Pro]** 
     * Panel background **[Pro]** 
  * Typography
     * Font family
     * Font size
     * Appearance
     * Line height
     * Letter spacing
     * Text decoration
     * Letter case
  * Dimensions
     * Padding
     * Margin
     * Header padding **[Pro]** 
     * Header margin **[Pro]** 
     * Button padding **[Pro]** 
     * Button margin **[Pro]** 
     * Panel padding **[Pro]** 
     * Panel margin **[Pro]** 
  * Border **[Pro]** 
     * Button border **[Pro]** 
     * Button border hover **[Pro]** 
     * Button border active **[Pro]** 
     * Button border radius **[Pro]** 
     * Panel border **[Pro]** 
     * Panel border radius **[Pro]** 
* Variations **[Pro]** 
  * Folder **[Pro]** 
  * Pills **[Pro]** 
  * Underline **[Pro]** 

### Demo

[https://troytempleman.com/wordpress/blocks/tabs-block/](https://troytempleman.com/wordpress/blocks/tabs-block/)

### HTML

Tabs Block Lite will output a Tabs block with the following HTML structure:

    <div class="wp-block-tt-tabs wp-block-tt-tabs-1 wp-block-tt-tabs-folder">
        <ul class="wp-block-tt-tabs-header" role="tablist">
            <li class="wp-block-tt-tab-header" role="presentation">
                <button class="wp-block-tt-tab-header-button" id="wp-block-tt-tab-header-button-df856e31-e01a-46c3-bca3-be8041d3c416" aria-controls="wp-block-tt-tab-panel-df856e31-e01a-46c3-bca3-be8041d3c416" type="button" role="tab" aria-selected="true">
                    <span class="wp-block-tt-tab-header-button-text">Tab</span>
                </button>
            </li>
        </ul>
        <div class="wp-block-tt-tab-panel wp-block-tt-tab-panel-1” id="wp-block-tt-tab-panel-df856e31-e01a-46c3-bca3-be8041d3c416" role="tabpanel" tabindex="0" aria-labelledby="wp-block-tt-tab-header-button-df856e31-e01a-46c3-bca3-be8041d3c416">
            <p>Panel</p>
        </div>
    </div>
	
## Support

If you need help with Tabs Block Lite, please submit a ticket on the [Support](https://wordpress.org/support/plugin/tabs-block-lite) forum.

## Donate

If you like Tabs Block Lite and would like to support it's future development, how about [buying me a coffee](https://www.buymeacoffee.com/troytempleman)?

## Contribute

If you would like to contribute to the development of Tabs Block Lite, the repository is located on [GitHub](https://github.com/troytempleman/tabs-block-lite).

## License

Tabs Block Lite is released under the [GNU General Public License, version 2 (GPLv2)](https://www.gnu.org/licenses/gpl-2.0.html). 

## Requirements

* WordPress 6.0 or greater
* PHP version 7.4 or greater
* MySQL version 5.7 or greater or MariaDB version 10.3 or greater.

## Installation

Tabs Block Lite can be installed in one of the following four ways:

### Automatic

To install with the built-in plugin installer:

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Plugins**.
3. On the **Plugins** page, click **Add New Plugin**.
4. On the **Add Plugins** page, in the **Search plugins...** field, type **Tabs Block Lite**.
5. In the **Search Results**, locate **Tabs Block Lite**, click **Install Now** and **Activate**.

### Upload

To install with a .zip file:

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Plugins**.
3. On the **Plugins** page, click **Add New Plugin**.
3. On the **Add Plugins** page, click **Upload Plugin**.
4. Click **Choose File**, locate the **.zip file** and click **Open**. 
5. Click **Install Now**.
6. On the **Installing Plugin from uploaded file** page, click **Activate**.

### Manual

To install with a SFTP client:

1. If you have a **.zip file**, unzip it with archiving software such as [WinZip](https://www.winzip.com/) or [Archive Utility](https://apps.apple.com/us/app/archive-utility/id1409613331).
2. In a **SFTP client** such as [WinSCP](https://winscp.net/) or [FileZilla](https://filezilla-project.org/), connect to your WordPress site directory on your server.
3. In the **unzipped files**, copy the **tabs-block-lite** folder and paste on your server, in your site’s **wp-content/plugins** folder.
4. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
5. On the **Dashboard** page, in the left menu, click **Plugins**.
6. On the **Plugins** page, locate **Tabs Block Lite** and click **Activate**.

### Theme

To install in your theme instead of a plugin:

1. If you have a **.zip file**, unzip it with archiving software such as [WinZip](https://www.winzip.com/) or [Archive Utility](https://apps.apple.com/us/app/archive-utility/id1409613331).
2. In the **unzipped files**, copy the **tabs-block-lite** folder and paste in your site’s theme folder, such as **wp-content/themes/your-theme/inc/tabs-block-lite/**, where **your-theme** is your theme folder.
3. In a **code editor** such as [Visual Studio Code](https://code.visualstudio.com/) or [Notepad++](https://notepad-plus-plus.org/), open your theme's **functions.php** file.
4. In your **functions.php** file, add the path from Step 2, such as **require get_stylesheet_directory() . '/inc/tabs-block-lite/tabs-block-lite.php';**.
5. Save and close your **functions.php** file.

## FAQ

### What are tabs?

Tabs are a common UI/UX pattern that can help reduce or condense the amount of information presented to users. 

They are a set of layered sections of content with interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal their associated sections of content. Tabs are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

The term stems from tabs on file folders in a filing cabinet that are used for separation and organization.

To learn more, see [Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

### How do I install Tabs Block Lite?

Please see **Installation** section.

### How do I add a Tabs block?

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Posts** or **Pages**.
3. On the **Posts** or **Pages** page, either click **Add New**, search for and/or click the desired post or page title.
4. In the **block editor**, either:
   * Click the block inserter **+** icon in the top toolbar
   * Click the block inserter **+** icon to the right of an empty block, or
   * Click the block inserter **+** icon between blocks
5. In the block inserter pop-up modal window, search for and/or click **Tabs** to add a Tabs block. 

### How do I edit a Tabs block?

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Posts** or **Pages**.
3. On the **Posts** or **Pages** page, search for and/or click the desired post or page title.
4. In the **block editor**, click the desired **Tabs** block.
5. To edit the whole **Tabs** block:
   1. In the block toolbar above, click the **Tabs** icon, select the desired position, block alignment, justification, text formatting and/or other options. 
   2. In the settings sidebar, in the **Block** tab, select the desired **Color**, **Typography**, **Dimensions** and/or **Border** settings. 
6. To edit a **Tab** within a Tabs block:
   1. Click the desired **Tab** title and/or panel to edit.
   2. In the block toolbar above, select the desired position, justification, text alignment, text formatting and/or other options. 
   3. In the settings sidebar, in the **Block** tab, select the desired **Color**, **Typography**, **Dimensions** and/or **Advanced** settings. 
7. To add a **Tab**, click the **+** button below the Tabs block.	

### How do I setup a development environment?

1. Install WordPress on a local server such as [Local](https://localwp.com/), [Docker](https://www.docker.com/), [MAMP](https://www.mamp.info/) or [XAMPP](https://www.apachefriends.org/).
2. To install Tabs Block Lite on your local site, see **Installation** section.
3. If node.js is not already installed locally, go to [https://nodejs.org/](https://nodejs.org/) to install.
4. In a **Command Line Interface (CLI)** such as Command Prompt or Terminal, navigate to the **tabs-block-lite** folder. For example, **cd localhost/your-site/wp-content/plugins/tabs-block-lite**.
5. To install project dependencies, type **npm install**.
6. In the **tabs-block-lite** folder, edit the desired file or files.
7. To create or update the production **build** directory, type **npm run build**. For other commands, type **npm run**.

## Screenshots

1. Tabs block added from the block inserter.
2. Tabs block variations **[Pro]**.
3. Tabs block settings sidebar **[Pro]**.
4. Tabs block settings sidebar **[Pro]**. 
5. Tabs block on the front end.

## Changelog

### 0.1.1 - April 2, 2024

* Added: Security improvement by adding `wp_kses_post` filter to `$block_content` in `build/tab/render.php`, `build/tabs/render.php`, `src/tab/render.php`, and `src/tabs/render.php`.
* Added: Code to prevent direct file access in `build/tab/render.php`, `build/tabs/render.php`, `src/tab/render.php`, and `src/tabs/render.php`.
* Updated: Version in `build/tab/block.json`, `build/tabs/block.json`, `src/tab/block.json`, and `src/tabs/block.json`.
* Updated: Stable tag and changelog in `readme.md` and `readme.txt`.
* Updated: Version in `tabs-block-lite.php` and `package.json`.

### 0.1.0 - November 15, 2023

* Initial release

## Credits

* [W3C Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
* [Tabs: It’s Complicated™](https://css-tricks.com/tabs-its-complicated/)
* [Tabbed Interfaces](https://inclusive-components.design/tabbed-interfaces/)
* [Building accessible user interface tabs in JavaScript](https://blog.logrocket.com/build-accessible-user-interface-tabs-javascript/)
* [Wordpress Gutenberg Tabs](https://medium.com/@naumanahmed19/wordpress-gutenberg-tabs-block-aee06970b128)
* [Building a Gutenberg Block for Tabbed Content](https://www.amberalter.com/2021/11/20/building-a-gutenberg-block-for-tabbed-content/)
