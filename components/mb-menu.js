/**
 * motherbox menu component
 * @class MbMenu
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class MbMenu extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.createShadowRoot();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.setAttribute(name, newValue);
            this.render();
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML = `
            <style type="text/css">
                :host {
                    display: block;
                    margin-top: 20px;
                }
                :host ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
            </style>
            <ul class="mb-menu" role="menu">
                <content></content>
            </ul>
        `;
    }
}

customElements.define('mb-menu', MbMenu);
