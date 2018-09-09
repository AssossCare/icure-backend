import '../qrcode-manager/qrcode-printer.js';
class HtExportKey extends Polymer.TkLocalizerMixin(Polymer.mixinBehaviors([Polymer.IronResizableBehavior], Polymer.Element)) {
  static get template() {
    return Polymer.html`
		<style>
			paper-dialog {
				width: 60%;
				height: 90%;
			}

			qrcode-printer {
				width: 100%;
				height: 100%;
			}
		</style>

		<paper-dialog id="dialog" opened="{{opened}}">
			<h2>[[localize('sca_the_fol_cod_wit_you_tab','Scan the following code with your tablet',language)]]</h2>
			<div id="printable"><qrcode-printer i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" id="qrcode" text="[[privateKeyPart]]" size="[[qrCodeWidth]]" ecl="H"></qrcode-printer></div>
			<div class="buttons">
				<paper-button dialog-dismiss="">[[localize('can','Cancel',language)]]</paper-button>
				<paper-button dialog-confirm="" autofocus="" on-tap="confirm">[[localize('sel','Select',language)]]</paper-button>
			</div>
		</paper-dialog>
`;
  }

  static get is() {
      return 'ht-export-key';
	}

  static get properties() {
      return {
          api: {
              type: Object,
              value: null
          },
          user: {
              type: Object,
              value: null
          },
          privateKey: {
              type: String
          },
          qrCodeWidth: {
              type: Number,
              value: 200
          },
          privateKeyPart: {
              type: String,
              value: null,
              observer: ''
          },
          opened: {
              type: Boolean,
              value: false
          },
          segments: {
              type: Number,
              value: 8
          },
          verbose: {
              type: Boolean,
              value: true
          }
      };
	}

  static get observers() {
      return ['apiReady(api,user,opened)'];
	}

  ready() {
      super.ready();
      this.addEventListener('iron-resize', () => this.onWidthChange());
	}

  apiReady() {
      if (!this.api || !this.user || !this.user.id || !this.opened) return;

      try {
          const pair = this.api.crypto().RSA.loadKeyPairNotImported(this.user.healthcarePartyId);
          if (pair) {
              const pk = _.cloneDeep(pair.privateKey);
              delete pk.n;
              delete pk.e;

              if (this.verbose) {
                  this.set('privateKey', JSON.stringify(pk).replace(/ /g, ''));
              } else {
                  const a = this.api.crypto().utils.text2ua([pk.d, pk.dp, pk.dq, pk.p, pk.q, pk.qi].join(' '));
                  this.set('privateKey', this.api.crypto().utils.ua2hex(pako.deflate(a)));
                  //const jwk = {alg: 'RSA-OAEP', key_ops: ['decrypt'], kty: 'RSA', ext: true};
                  //[jwk.d,jwk.dp,jwk.dq,jwk.p,jwk.q,jwk.qi] = String.fromCharCode.apply(null, pako.inflate(this.api.crypto().utils.text2ua(this.privateKey))).split(' ')
                  console.log("Check code: ", this.privateKey);
              }
              this._privateKeyChanged(); //Force even if the key hasn't changed
          }
      } catch (e) {
          console.log(e);
      }
	}

  _switchKey() {
      if (!this.privateKeyPart) {
          this.set('privateKeyPart', '1' + this.segments + this.privateKey.substr(0, this.privateKey.length / this.segments));
      } else {
          const step = parseInt(this.privateKeyPart.substr(0, 1)) % this.segments + 1;
          this.set('privateKeyPart', '' + step + this.segments + (step === this.segments ? this.privateKey.substr((step - 1) * this.privateKey.length / this.segments) : this.privateKey.substr((step - 1) * this.privateKey.length / this.segments, this.privateKey.length / this.segments)));
      }
      if (this.opened) {
          setTimeout(this._switchKey.bind(this), 2000);
      }
	}

  _privateKeyChanged() {
      if (this.privateKey) {
          this._switchKey();
      }
	}

  attached() {
      super.attached();
      this.async(this.notifyResize, 1);
	}

  onWidthChange() {
      const offsetWidth = this.$.dialog.offsetWidth;
      const offsetHeight = this.$.dialog.offsetHeight;
      if (!offsetWidth || !offsetHeight) {
          return;
      }
      this.set('qrCodeWidth', Math.min(offsetWidth - 32, offsetHeight - 160));
	}

  open() {
      this.$.dialog.open();
	}

  close() {
      this.$.dialog.close();
	}
}
customElements.define(HtExportKey.is, HtExportKey);
