import {PolymerElement, html} from '@polymer/polymer';
class FhcBasicerrorcontrollerApi extends PolymerElement {
  static get template() {
    return html`
    		<style>
	    	</style>

				<iron-ajax id="errorHtmlUsingDELETE" method="DELETE" headers="[[headers]]" url="/error" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="errorHtmlUsingGET" method="GET" headers="[[headers]]" url="/error" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="errorHtmlUsingHEAD" method="HEAD" headers="[[headers]]" url="/error" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="errorHtmlUsingOPTIONS" method="OPTIONS" headers="[[headers]]" url="/error" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="errorHtmlUsingPATCH" method="PATCH" headers="[[headers]]" url="/error" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="errorHtmlUsingPOST" method="POST" headers="[[headers]]" url="/error" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="errorHtmlUsingPUT" method="PUT" headers="[[headers]]" url="/error" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
`;
  }

  static get is() {
      return "fhc-basicerrorcontroller-api";
	}

  static get properties() {
      return {
          headers: {
              type: Object,
              value: { "Content-Type": "application/json" }
          },
          host: {
              type: String
          }
      };
	}

  constructor() {
      super();
	}

  errorHtmlUsingDELETE() {
      var xhr = this.$.errorHtmlUsingDELETE;

      xhr.url = this.host + "/error" + "?ts=" + new Date().getTime();
      return xhr.generateRequest().completes.then(function (req) {
          return req.response;
      });
	}

  errorHtmlUsingGET() {
      var xhr = this.$.errorHtmlUsingGET;

      xhr.url = this.host + "/error" + "?ts=" + new Date().getTime();
      return xhr.generateRequest().completes.then(function (req) {
          return req.response;
      });
	}

  errorHtmlUsingHEAD() {
      var xhr = this.$.errorHtmlUsingHEAD;

      xhr.url = this.host + "/error" + "?ts=" + new Date().getTime();
      return xhr.generateRequest().completes.then(function (req) {
          return req.response;
      });
	}

  errorHtmlUsingOPTIONS() {
      var xhr = this.$.errorHtmlUsingOPTIONS;

      xhr.url = this.host + "/error" + "?ts=" + new Date().getTime();
      return xhr.generateRequest().completes.then(function (req) {
          return req.response;
      });
	}

  errorHtmlUsingPATCH() {
      var xhr = this.$.errorHtmlUsingPATCH;

      xhr.url = this.host + "/error" + "?ts=" + new Date().getTime();
      return xhr.generateRequest().completes.then(function (req) {
          return req.response;
      });
	}

  errorHtmlUsingPOST() {
      var xhr = this.$.errorHtmlUsingPOST;

      xhr.url = this.host + "/error" + "?ts=" + new Date().getTime();
      return xhr.generateRequest().completes.then(function (req) {
          return req.response;
      });
	}

  errorHtmlUsingPUT() {
      var xhr = this.$.errorHtmlUsingPUT;

      xhr.url = this.host + "/error" + "?ts=" + new Date().getTime();
      return xhr.generateRequest().completes.then(function (req) {
          return req.response;
      });
	}

  handleError(e) {
      if (e.detail.request.status === 401) this.dispatchEvent(new CustomEvent('auth-failed', { bubbles: true, composed: true })); else this.dispatchEvent(new CustomEvent('api-error', { detail: e, bubbles: true, composed: true }))
	}
}

customElements.define(FhcBasicerrorcontrollerApi.is, FhcBasicerrorcontrollerApi);
