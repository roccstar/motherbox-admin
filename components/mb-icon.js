/**
 * motherbox icon component
 * @class MbIcon
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class MbIcon extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.createShadowRoot();
    }

    static get observedAttributes() {
        return ['src'];
    }

    get size() {
        return this.getAttribute('size');
    }

    /**
     * @param {string} dimensions the value to be used as height and width of icon
     */
    set size(dimensions) {
        this.setAttribute('src', dimensions);
    }

    get src() {
        return this.getAttribute('src');
    }

    set src(img) {
        this.setAttribute('src', img);
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
        const size = `${this.size
            ? this.size
            : '18'}`;

        this.shadow.innerHTML = this.src ? `
            <style type="text/css">
                :host span {
                    display: inline-block;
                }

                :host img {
                    width: ${size}px;
                    height: auto;
                    vertical-align: middle;
                }
            </style>
            <span class="mb-icon">
                <img src="${this.src}" width="${size}" height="${size}" alt=""  />
            </span> `
            : `<content></content>`;
    }
}

customElements.define('mb-icon', MbIcon);
