/**
 * The page template for `#/settings`
 * @class page/settings
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class PageSettings extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.createShadowRoot();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <div class="page-settings">
                <mb-toolbar title="System settings"></mb-toolbar>
            </div>
        `;
    }
}

customElements.define('page-settings', PageSettings);
