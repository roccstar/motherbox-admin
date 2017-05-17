/**
 * The Motherbox Admin app container
 * @class MbApp
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
 */

'use strict';

class MbApp extends HTMLElement {
    constructor(self) {
        super(self);
        this.shadow = this.createShadowRoot();
    }

    static get observedAttributes() {
        return ['name','defaultRoute'];
    }

    get name() {
        return this.getAttribute('name');
    }

    set name(n) {
        this.setAttribute('name', n);
    }

    get defaultRoute() {
        return this.getAttribute('defaultRoute');
    }

    set defaultRoute(route) {
        this.setAttribute('defaultRoute', route);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.setAttribute(name, newValue);
        }
    }

    connectedCallback() {
        this.render();

        // trigger the default route
        if(this.defaultRoute && window.location.hash === '') {
            window.location.hash = this.defaultRoute;
        }
    }

    render() {
        this.shadow.innerHTML = `
            <style type="text/css">
                :host {
                    display: flex;
                    height: 100%;
                    width: 100%;
                }

                .mb-app {
                    display: flex;
                    width: 100%;
                }

                section.content {
                    height: 100%;
                    width: calc(100% - 220px);
                    position: relative;
                }

                mb-menu {
                    background: inherit;
                    position: relative;
                    z-index: 100;
                }

                @media (max-width: 768px) {
                    :host, .mb-app {
                        display: block;
                    }

                    section.content {
                        height: 100%;
                        width: 100%;
                        position: relative;
                    }


                    mb-sidebar mb-menu {
                        display: inline-block;
                        margin: 0;
                        float: right;
                    }

                    mb-sidebar mb-menu-item {
                        display: inline-block;
                    }

                    mb-menu-item::shadow, mb-menu-item::shadow li {
                        margin: 0;
                        padding: 0;
                    }

                    mb-menu-item::shadow li a {
                        width: 0;
                        display: block;
                        text-indent: -999999px;
                        padding: 0 20px;
                    }

                    mb-menu-item::shadow li a:before {
                        margin-right:0;
                        margin-left: -10px;
                    }

                    @media (max-width: 380px) {
                        mb-menu-item::shadow li a {
                            padding: 0 18px;

                        }
                        mb-menu-item::shadow li a:before {
                            margin-right:0;
                            margin-left: -6px;
                        }
                    }
                }
            </style>
            <div class="mb-app">
                <mb-sidebar title="${this.name}">
                    <mb-menu>
                        <mb-menu-item
                            title="Change network settings"
                            href="#/network"
                            icon="/icons/network.svg">
                            Network
                        </mb-menu-item>
                        <mb-menu-item
                            title="Change access point settings"
                            href="#/wireless"
                            icon="/icons/wifi.svg">
                            Access Point
                        </mb-menu-item>
                        <mb-menu-item
                            title="Modify host redirects"
                            href="#/hosts"
                            icon="/icons/globe.svg">
                            Hosts
                        </mb-menu-item>
                        <mb-menu-item
                            title="View logs"
                            href="#/logs"
                            icon="/icons/notepad.svg">
                            Logs
                        </mb-menu-item>
                        <mb-menu-item
                            title="Modify your settings"
                            href="#/settings"
                            icon="/icons/settings.svg">
                            Settings
                        </mb-menu-item>
                    </mb-menu>
                </mb-sidebar>
                <section class="content">
                    <mb-page route="#/network">
                        <page-network></page-network>
                    </mb-page>
                    <mb-page route="#/wireless">
                        <page-wireless></page-wireless>
                    </mb-page>
                    <mb-page route="#/hosts">
                        <page-hosts></page-hosts>
                    </mb-page>
                    <mb-page route="#/logs">
                        <page-logs></page-logs>
                    </mb-page>
                    <mb-page route="#/settings">
                        <page-settings></page-settings>
                    </mb-page>
                    <mb-footer
                        author="Roccstar, Inc."
                        href="https://roccstar.com">
                    </mb-footer>
                </section>
            </div>
        `;
    }
}

customElements.define('mb-app', MbApp);
