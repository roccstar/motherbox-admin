/**
 * The page template for `#/network`
 * @class page/network
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class PageNetwork extends HTMLElement {
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
            <div class="page-network">
                <mb-toolbar title="Network configuration"></mb-toolbar>
            </div>
        `;
    }
}

customElements.define('page-network', PageNetwork);
