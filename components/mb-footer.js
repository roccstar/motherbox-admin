/**
 * motherbox footer component
 * @class MbFooter
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class MbFooter extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.createShadowRoot();
    }

    static get observedAttributes() {
        return ['author'];
    }

    get author() {
        return this.getAttribute('author');
    }

    set author(a) {
        this.setAttribute('author', a);
    }

    get href() {
        return this.getAttribute('href');
    }

    set href(url) {
        this.setAttribute('href', url);
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
        if (this.author) {
            const date = new Date().getFullYear();
            const author = this.href
                ? `<a href="${this.href}"
                    title="${this.author}"
                    aria-label="${this.author}"
                    target="_blank">
                    ${this.author}
                </a>`
                : this.author;

            this.shadow.innerHTML = `
                <style type="text/css">
                    :host {
                        display:block;
                        font-size: 12px;
                        line-height: 22px;
                        padding: 0 20px;
                        text-align: right;
                    }

                    :host a {
                        color: inherit;
                        text-decoration: inherit;
                    }

                    @media (max-width: 768px) {
                        :host {
                            opacity: 0;
                        }
                    }
                </style>
                <div class="mb-footer">&copy; ${date} ${author}</div>
            `;
        }
    }
}

customElements.define('mb-footer', MbFooter);
