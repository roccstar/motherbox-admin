/**
 * motherbox page component
 * @class MbPage
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class MbPage extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.createShadowRoot();
        this.render = this.render.bind(this);

        // check if active menu item
        window.addEventListener('hashchange', this.render, false);
    }

    static get observedAttributes() {
        return ['route', 'src'];
    }

    get route() {
        return this.getAttribute('route');
    }

    set route(path) {
        this.setAttribute('route', path);
    }

    get src() {
        return this.getAttribute('src');
    }

    set src(file) {
        this.setAttribute('src', file);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.setAttribute(name, newValue);
        }
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        // clean up events
        window.removeEventListener('hashchange', this.render, false);
    }

    render() {
        const active = window.location.hash === this.route ? true : false;

        this.shadow.innerHTML = active ? `
            <style type="text/css">
                @media (min-width: 769px) {
                    :host {
                        display: block;
                        overflow-y: scroll;
                        height: calc(100% - 22px);
                    }

                    :host::-webkit-scrollbar {
                        width: 2px;
                    }

                    :host::-webkit-scrollbar-thumb {
                        background: #292929;
                        border-radius: 10px;
                    }
                }
            </style>
            <content></content>
        ` : '';
    }
}

customElements.define('mb-page', MbPage);
