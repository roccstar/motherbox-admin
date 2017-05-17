/**
 * `mb-menu-item` custom element
 * @class MbMenuItem
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
 * @example
 * <mb-menu-item href="/test" icon="test.svg" title="Foo">Bar</mb-menu-item>
 */

'use strict';

class MbMenuItem extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.createShadowRoot();
        this.render = this.render.bind(this);

        // check if active menu item
        window.addEventListener('hashchange', this.render, false);
    }

    static get observedAttributes() {
        return ['title', 'href', 'icon'];
    }

    get title() {
        return this.getAttribute('title');
    }

    set title(t) {
        this.setAttribute('title', t);
    }

    get href() {
        return this.getAttribute('href');
    }

    set href(url) {
        this.setAttribute('href', url);
    }

    get icon() {
        return this.getAttribute('icon');
    }

    set icon(img) {
        this.setAttribute('icon', img);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.setAttribute(name, newValue);
            this.render();
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
        const active = window.location.hash === this.href ? true : false;
        const classes = active ? 'mb-menu-item active' : 'mb-menu-item';

        this.shadow.innerHTML = `
             <style type="text/css">
                 :host li {
                     margin: 10px 0;
                     padding: 0 20px;
                     list-style: none;
                     display: flex;
                     justify-content: center;
                     flex-direction: column;
                 }
                 :host li a {
                     line-height: 48px;
                     display: inline-block;
                     color: inherit;
                     text-decoration: inherit;
                 }

                 :host li.active {
                     background: #d96d00;
                 }

                 ${this.icon ? `
                    :host .icon:before {
                         content: "";
                         width: 18px;
                         height: 48px;
                         line-height: 48px;
                         margin-right: 10px;
                         display: inline-block;
                         background: url(${this.icon}) no-repeat;
                         background-position: left center;
                         background-size: 18px 18px;
                         float: left;
                         filter: invert();
                     }

                     @media (max-width: 380px) {
                         :host li {
                             padding:0 5px;
                             margin: 0;
                         }
                         :host .icon:before {
                             width: 12px;
                             background-size: 12px 12px;
                             margin-right: 0;
                         }
                     }`
                    : ''
                }
             </style>

             <li class="${classes}" role="menuitem">
                 <a href="${this.href}"
                     title="${this.title}"
                     aria-label="${this.title}"
                     ${this.icon ? `class="icon"` : ''}>
                     <content></content>
                 </a>
             </li>
         `;
    }
}

customElements.define('mb-menu-item', MbMenuItem);
