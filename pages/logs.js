/**
 * The page template for `#/logs`
 * @class page/logs
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class PageLogs extends HTMLElement {
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
                    display: flex;
                    flex-wrap: wrap;
                    width: calc(100% - 10px);
                }
                .content > mb-card {
                    flex: 1 0 calc(50% - 20px);
                    margin: 10px 0 0 10px;
                }

                @media (max-width: 768px) {
                    .content > mb-card {
                        flex: 1 0 calc(100% - 10px);
                    }
                }
            </style>
            <div class="page-logs">
                <mb-toolbar title="View logs"></mb-toolbar>
                <div class="content">
                    <mb-card title="/var/log/nodejs" aria-label="Modify the '/etc/hosts' file">
                        <mb-textarea>${`127.0.0.1\t\texample.com\n127.0.0.1\t\tdev.example.com`}</mb-textarea>
                    </mb-card>
                    <mb-card title="/var/log/syslog" aria-label="Modify the '/etc/hosts' file">
                        <mb-textarea>${`127.0.0.1\t\texample.com\n127.0.0.1\t\tdev.example.com`}</mb-textarea>
                    </mb-card>
                    <mb-card title="/var/log/auth" aria-label="Modify the '/etc/hosts' file">
                        <mb-textarea>${`127.0.0.1\t\texample.com\n127.0.0.1\t\tdev.example.com`}</mb-textarea>
                    </mb-card>
                </div>
            </div>
        `;
    }
}

customElements.define('page-logs', PageLogs);
