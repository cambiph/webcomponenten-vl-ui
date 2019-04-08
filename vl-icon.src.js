import { VlElement } from '/node_modules/vl-ui-core/vl-core.src.js';

/**
 * vl-icon
 * De wrapper class "vl-icon-wrapper" wordt NIET in deze Web Component geïmplementeerd
 * ### Attributen
 * Attribuut | Uitleg | Waarde
 * ----------|--------|--------
 * `icoon` | Wordt gebruikt om aan te geven welk icoon getoond moet worden. | { string }
 * `size` | Wordt gebruikt om het icoon te verkleinen (80%) of te vergroten (120%) ten opzichte van de parent. | { string } small - large
 * `ligt`| Wordt gebruikt om het icoon een lichte kleur te geven? | { boolean }
 * `before` | Wordt gebruikt wanneer het icoon voor een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden. | { boolean }
 * `after` | Wordt gebruikt wanneer het icoon achter een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden. | { boolean }
 *
 * @demo demo/vl-icon.html
 */
export class VlIcon extends VlElement(HTMLElement) {
    static get _observedAttributes() {
        return ['icon', 'size'];
    }

    static get _observedChildClassAttributes() {
        return ['before', 'after', 'light'];
    }

    constructor() {
        super(`
            <style>
                @import "../style.css";

                .vl-icon:before {
                    vertical-align: middle;
                }
            </style>
            <span class="vl-icon vl-vi" aria-hidden="true"></span>
        `);
    }

    get _classPrefix() {
        return 'vl-icon--';
    }

    _iconChangedCallback(oldValue, newValue) {
        this._changeClass(this._element, oldValue, newValue, 'vl-vi-');
    };

    _sizeChangedCallback(oldValue, newValue) {
        if (['small', 'large'].indexOf(newValue) >= 0) {
            this._changeClass(this._element, oldValue, newValue);
        } else {
            this._element.classList.remove(this._prefix + oldValue);
        }
    };
}

customElements.define('vl-icon', VlIcon);