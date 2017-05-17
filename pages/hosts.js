/**
 * The page template for `#/hosts`
 * @class page/hosts
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class PageHosts extends HTMLElement {
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
                .content {
                    padding:10px;
                    display: flex;
                    flex-wrap: wrap;
                    width: calc(100% - 20px);
                }
            </style>
            <div class="page-hosts">
                <mb-toolbar title="Domain forwarding"></mb-toolbar>
                <div class="content">
                    <mb-card title="/etc/hosts" aria-label="Modify the '/etc/hosts' file">
                        <mb-textarea>${`127.0.0.1\t\texample.com\n127.0.0.1\t\tdev.example.com`}</mb-textarea>
                    </mb-card>
                </div>
            </div>
        `;
    }
}

customElements.define('page-hosts', PageHosts);
