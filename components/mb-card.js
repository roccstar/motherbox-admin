/**
 * motherbox card component
 * @class MbCard
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class MbCard extends HTMLElement {
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

    set title(n) {
        this.setAttribute('title', n);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <style type="text/css">
                :host {
                    display: flex;
                    flex-direction: column;
                    flex: 1 0 calc(100% - 0px);
                    position: relative;
                    background: #fff;
                    border-radius: 3px;
                    overflow: hidden;
                }

                .mb-card {
                    display:block;
                    height: auto;
                }

                .mb-card .title {
                    font-size: 16px;
                    line-height: 36px;
                    width: calc(100% - 20px);
                    display: block;
                    padding: 0 10px;
                    background: #666;
                    color: #fff;
                    letter-spacing: 2;
                }

                @media (max-width: 768px) {
                    .mb-card .title {
                        font-size: 14px;
                    }
                }

                @media (max-width: 380px) {
                    .mb-card .title {
                        font-size: 12px;
                    }
                }
            </style>
            <div class="mb-card">
                ${this.title ? `<div class="title">${this.title}</div>` : ''}
                <content></content>
            </div>
        `;
    }
}
customElements.define('mb-card', MbCard);
