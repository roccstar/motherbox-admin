/**
 * motherbox sidebar component
 * @class MbSidebar
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class MbSidebar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.createShadowRoot();
    }

    static get observedAttributes() {
        return ['title'];
    }

    get title() {
        return this.getAttribute('title');
    }

    set title(t) {
        this.setAttribute('title', t);
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
                    display:block;
                    width: 220px;
                    height: 100%;
                    color: #fff;
                    font-size: 16px;
                    background: #292929;
                }

                .mb-sidebar {
                    width: 100%;
                    background: inherit;
                }

                .mb-sidebar .title {
                    font-size: 28px;
                    line-height: 48px;
                    padding: 0 20px;
                }

                .mb-sidebar .title a {
                    display: block;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
                }

                .mb-sidebar a {
                    text-decoration: none;
                    color: #fff;
                }

                mb-icon {
                    filter: invert(1);
                }

                @media (max-width: 768px) {
                    :host {
                        width: 100%;
                    }

                    .mb-sidebar .title {
                        font-size: 22px;
                    }

                    .mb-sidebar mb-icon::shadow img {
                        width: 16px;
                    }

                    .mb-sidebar .title, .mb-sidebar .title a {
                        display: inline-block;
                    }

                    .mb-sidebar .title a {
                        border-bottom: none;
                    }
                }

                @media (max-width: 368px) {
                    .mb-sidebar .title {
                        font-size: 16px;
                    }

                    .mb-sidebar mb-icon {
                        display:none;
                    }
                }
            </style>
            <div class="mb-sidebar">
                <div class="title">
                    <a href="/"
                        title="${this.title}"
                        aria-label="${this.title}">
                        <mb-icon src="/icons/motherbox.svg" size="20"></mb-icon>
                        ${this.title}
                    </a>
                </div>
                <content></content>
            </div>
        `;
    }
}

customElements.define('mb-sidebar', MbSidebar);
