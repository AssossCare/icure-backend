import {PolymerElement, html} from '@polymer/polymer';
class DynamicNumberField extends TkLocalizerMixin(PolymerElement) {
  static get template() {
    return html`
		<style>
			:host {
				position: relative;
				flex-grow: var(--dynamic-field-width, 25);
				min-width: calc(var(--dynamic-field-width-percent, '25%') - 32px);
				margin: 0 16px;
			}

			dynamic-link {
				position: absolute;
				right: 0;
				top: 4px;
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

			input{
				border:none;
				width: 100%;
				outline: 0;
				background:none;
				font-size: var(--form-font-size);
			}

			.label-span{
				display: block;
				max-width: 39%;
				text-overflow: ellipsis;
				float: left;
				overflow: hidden;
			}
		</style>

		<template is="dom-if" if="[[readOnly]]">
			<paper-input-container always-float-label="true">
				<label slot="label">
					<span class="label-span">[[label]]</span>
					<template is="dom-if" if="[[wasModified]]">
						<span class="modified-before-out">[[localize('mod','modified',language)]] [[lastModified]] <iron-icon class="modified-icon" icon="schedule"></iron-icon></span>
					</template>
					<template is="dom-if" if="[[isModifiedAfter]]">
						<span class="modified-after-out">[[localize('obs_val','obsolete value',language)]]<iron-icon class="modified-icon" icon="report-problem"></iron-icon></span>
					</template>
				</label>
				<iron-input slot="input" bind-value="{{inputValue}}">
					<input value="{{inputValue::input}}" readonly="">
				</iron-input>
			</paper-input-container>
		</template>
		<template is="dom-if" if="[[!readOnly]]">
			<paper-input-container always-float-label="true">
				<label slot="label">
					<span class="label-span">[[label]]</span>
					<template is="dom-if" if="[[wasModified]]">
						<span class="modified-before-out">[[localize('mod','modified',language)]] [[lastModified]] <iron-icon class="modified-icon" icon="schedule"></iron-icon></span>
					</template>
					<template is="dom-if" if="[[isModifiedAfter]]">
						<span class="modified-after-out">[[localize('obs_val','obsolete value',language)]]<iron-icon class="modified-icon" icon="report-problem"></iron-icon></span>
					</template>
				</label>
				<iron-input slot="input" bind-value="{{inputValue}}">
					<input value="{{inputValue::input}}">
				</iron-input>
			</paper-input-container>
			<dynamic-link i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" linkables="[[linkables]]" api="[[api]]" represented-object="[[label]]"></dynamic-link>
		</template>
`;
  }

  static get is() {
      return 'dynamic-number-field';
	}

  static get properties() {
      return {
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
          value: {
              type: Number,
              notify: true,
              observer: '_valueChanged'
          },
          inputValue: {
              type: String,
              observer: '_inputValueChanged'
          },
          width: {
              type: Number,
              value: 24,
              observer: '_widthChanged'
          }
      };
	}

  constructor() {
      super();
	}

  _widthChanged(width) {
      this.updateStyles({ '--dynamic-field-width': width, '--dynamic-field-width-percent': '' + width + '%' });
	}

  _valueChanged(value) {
      const normalizedInputValue = this.value || this.value === 0 ? '' + this.value : '';
      if ((this.inputValue || '').trim() !== normalizedInputValue) {
          this.set('inputValue', normalizedInputValue);
      }
	}

  _inputValueChanged(value) {
      if (this.inputValue !== '' + this.value) {
          const match = /^ *([+-]?[0-9]+(?:[.,][0-9]*)?) *$/.exec(this.inputValue);
          if (!this.inputValue.match(/^ *([+-]?[0-9]+(?:[.,]0*)) *$/) /*intermediate situation*/) {
                  const newValue = match && (match[1] ? parseFloat(match[1].replace(/([0-9]),([0-9])/, "$1.$2")) : null) || (isNaN(parseFloat(this.inputValue)) ? null : parseFloat(this.inputValue));
                  if ((newValue || this.value) && newValue !== this.value) {
                      this.set('value', newValue);
                      this.dispatchEvent(new CustomEvent('field-changed', { detail: { context: this.context, value: this.value } }));
                  }
              }
      }
	}
}

customElements.define(DynamicNumberField.is, DynamicNumberField);
