/**
 * motherbox textarea component
 * @class MbTextarea
 * @extends HTMLElement
 * @author Rocco Augusto <rocco@roccstar.com>
*/

'use strict';

class MbTextarea extends HTMLElement {
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
                :host, .mb-textarea, textarea {
                    width: 100%;
                    height:100%;
                    display: block;
                    border: none;

                }

                textarea {
                    padding: 10px;
                    min-height: 100px;
                    display: block;
                    width: calc(100% - 20px);
                    resize: vertical;
                }

                textarea:active, textarea:focus {
                    outline: none;
                }
            </style>
            <div class="mb-textarea" role="textbox"><textarea id="textarea"></textarea></div>
        `;

        this.shadow.getElementById('textarea').value = this.childNodes[0].nodeValue;
    }
}

customElements.define('mb-textarea', MbTextarea);
