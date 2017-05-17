/**
 * The page template for `#/wireless`
 * @class page/wireless
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class PageWireless extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.createShadowRoot();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <style type="text/css">
                :host {
                    display: block;
                }
            </style>
            <div class="page-wireless">
                <mb-toolbar title="Wireless configuration"></mb-toolbar>

            </div>
        `;
    }
}

customElements.define('page-wireless', PageWireless);
