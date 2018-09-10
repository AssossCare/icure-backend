import './dynamic-link.js';
import {PolymerElement, html} from '@polymer/polymer';
class DynamicTokenField extends TkLocalizerMixin(PolymerElement) {
  static get template() {
    return html`
		<style>


			:host {
				display: block;
				position: relative;
				flex-grow: var(--dynamic-field-width, 100);
				min-width: calc(var(--dynamic-field-width-percent, '100%') - 32px);
				margin: 0 16px;
			}

			dynamic-link {
				position: absolute;
				right: 0;
				bottom: 8px;
			}

			.modified-icon {
				width: 18px;
			}

			.modified-previous-value {
				color: var(--app-text-color-disabled);
				text-decoration: line-through;
				font-style: italic;
			}

			.modified-before-out {
				color: var(--app-secondary-color-dark);
				text-align: right;
				float: right;
				font-style: italic;
				border-bottom: 1px dotted var(--app-secondary-color-dark);
			}

			.modified-after-out {
				color: var(--app-secondary-color-dark);
				text-align: right;
				float: right;
				font-style: italic;
				border-bottom: 1px dotted var(--app-secondary-color-dark);
			}

			paper-input-container {
				--paper-input-container-focus-color: var(--app-primary-color);
				--paper-input-container-label: {
					color: var(--app-text-color);
					opacity: 1;
				};
				--paper-input-container-underline-disabled: {
					border-bottom: 1px solid var(--app-text-color);

				};
				--paper-input-container-color: var(--app-text-color);
			}

			.tokens {
				margin-right: 6px;
				min-height: 24px;
			}

			.tokens paper-button {
				background: var(--exm-token-input-badge-color, --default-primary-color);
				margin: 2px 0;
				color: var(--exm-token-input-badge-text-color, --text-primary-color);
				height: 18px;
				font-size: 13px;
				min-width: initial;
			}

			.tokens paper-button iron-icon {
				height: 16px;
				width: 16px;
			}

			input {
				font: inherit;
				outline: 0;
				box-shadow: none;
				border: none;
				width: auto;
				max-width: 100%;
				min-width: 1.8em;
				font-size: var(--form-font-size);
			}

			.container {
				@apply(--layout-horizontal);
			}

			iron-selector > * {
				padding: 16px 16px;
			}

			label, .container {
				cursor: text;
			}

		</style>

		<tk-token-field label="[[label]]" value="{{localizedValue}}" on-value-splices-change="_localizedValueChanged" data-value-path="id" data-label-path="stringValue" data-source="[[dataSource]]" always-float-label="">
			<span slot="label-suffix">
				<template is="dom-if" if="[[wasModified]]">
					<span class="modified-before-out">[[localize('mod','modified',language)]] [[lastModified]] <iron-icon class="modified-icon" icon="schedule"></iron-icon></span>
				</template>
				<template is="dom-if" if="[[isModifiedAfter]]">
					<span class="modified-after-out">[[localize('obs_val','obsolete value',language)]]<iron-icon class="modified-icon" icon="report-problem"></iron-icon></span>
				</template>
			</span>
		</tk-token-field>
		<dynamic-link i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" linkables="[[linkables]]" represented-object="[[label]]" api="[[api]]"></dynamic-link>
`;
  }

  static get is() {
      return 'dynamic-token-field';
	}

  static get properties() {
      return {
          api: {
              type: Object
          },
          wasModified: {
              type: Boolean
          },
          isModifiedAfter: {
              type: Boolean
          },
          readOnly: {
              type: Boolean,
              value: false
          },
          lastModified: {
              type: String
          },
          label: {
              type: String
          },
          context: {
              type: String
          },
          dataSource: {
              type: Object,
              value: null
          },
          value: {
              type: Array,
              notify: true,
              value: function () {
                  return [];
              }
          },
          shelf: { //Where the items from value are stored during a move
              type: Array,
              notify: true,
              value: function () {
                  return [];
              }
          },
          localizedValue: {
              type: Array,
              value: function () {
                  return [];
              }
          },
          input: {
              type: String
          },
          width: {
              type: Number,
              value: 48,
              observer: '_widthChanged'
          },
          linkables: {
              type: Array
          }
      };
	}

  static get observers() {
      return ['_valueChanged(value.*)'];
	}

  constructor() {
      super();
	}

  _localizedValueChanged(change) {
      const current = this.value;
      const modified = this.localizedValue;
      const newValue = [];

      modified.forEach((m, idx) => {
          const existing = current.find(e => m.id === e.id) || this.shelf.find(e => m.id === e.id);
          if (existing) {
              newValue.push(_.extend(existing, { index: idx }));
              _.pull(current, existing);
          } else {
              newValue.push({ id: this.api.crypto().randomUuid(), index: idx, content: _.fromPairs([[this.language, { stringValue: m.stringValue }]]), codes: m.codes || [] });
          }
      });

      this.shelf = current;
      this.set('value', newValue);
	}

  _widthChanged(width) {
      this.updateStyles({ '--dynamic-field-width': width, '--dynamic-field-width-percent': '' + width + '%' });
	}

  _localizedValue(value) {
      return value && _.compact(_.sortBy(value, 'index').map(v => v && v.content && this.localizedStringValueWithId(v.id, v.content, this.language))) || [];
	}

  _valueChanged(value) {
      let localizedValue = this._localizedValue(this.value);
      if (!_.isEqual(localizedValue, this.localizedValue)) {
          this.set('localizedValue', localizedValue);
      }
      this.dispatchEvent(new CustomEvent('field-changed', { detail: { context: this.context, value: this.value } }));
	}

  localizedStringValueWithId(id, e, lng) {
      if (!e) {
          return null;
      }
      let content = e[lng] || e.fr || e.en || e.nl;
      return content && { id: id, stringValue: '' + content.stringValue };
	}
}

customElements.define(DynamicTokenField.is, DynamicTokenField);
