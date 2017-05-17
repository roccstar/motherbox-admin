/**
 * motherbox toolbar component
 * @class MbToolbar
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class MbToolbar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.createShadowRoot();
    }

    static get observedAttributes() {
        return ['title', 'menu'];
    }

    get title() {
        return this.getAttribute('title');
    }

    set title(t) {
        this.setAttribute('title', t);
    }

    get menu() {
        return this.hasAttribute('menu');
    }

    set menu(value) {
        if(value) {
            this.setAttribute('menu', '');
        }
        else {
            this.removeAttribute('menu');
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.setAttribute(name, newValue);
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <style type="text/css">
                :host {
                    display: flex;
                    font-size: 24px;
                    height: 48px;
                    line-height: 48px;
                    padding: 0 20px;
                    background: #d96d00;
                    color: #fff;
                }

                :host .title {
                    display: inline-block;
                }
                :host content {
                    text-align: right;
                    display: flex;
                }

                @media (max-width: 768px) {
                    :host {
                        font-size: 16px;
                    }
                }

                @media (max-width: 380px) {
                    :host {
                        font-size: 14px;
                    }
                }
            </style>
            <div class="mb-toolbar">
                <span class="title">${this.title}</span>
                <content></content>
            </div>
        `;

    }
}

customElements.define('mb-toolbar', MbToolbar);
