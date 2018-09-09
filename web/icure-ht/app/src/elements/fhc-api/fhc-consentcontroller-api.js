const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="fhc-consentcontroller-api">
		<style>
		</style>

		<template>
				<iron-ajax id="getPatientConsentUsingGET" method="GET" headers="[[headers]]" url="/consent/{patientSsin}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="registerPatientConsentUsingPOST" method="POST" headers="[[headers]]" url="/consent/{patientSsin}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="revokePatientConsentUsingPOST" method="POST" headers="[[headers]]" url="/consent/revoke/{patientSsin}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
		</template>
	</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
    is: 'fhc-consentcontroller-api',
    properties: {
        headers: {
						type: Object,
						value: {"Content-Type": "application/json"}
        },
        host: {
						type: String
        }
    },
    behaviors: [],
    getPatientConsentUsingGET: function (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientFirstName, patientLastName) {
        var xhr = this.$.getPatientConsentUsingGET
        
        xhr.url = this.host+"/consent/{patientSsin}".replace("{patientSsin}", patientSsin) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (patientFirstName ? "&patientFirstName=" + patientFirstName : "") + (patientLastName ? "&patientLastName=" + patientLastName : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    registerPatientConsentUsingPOST: function (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientFirstName, patientLastName, eidCardNumber, isiCardNumber) {
        var xhr = this.$.registerPatientConsentUsingPOST
        
        xhr.url = this.host+"/consent/{patientSsin}".replace("{patientSsin}", patientSsin) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (patientFirstName ? "&patientFirstName=" + patientFirstName : "") + (patientLastName ? "&patientLastName=" + patientLastName : "") + (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") + (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    revokePatientConsentUsingPOST: function (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, existingConsent, eidCardNumber, isiCardNumber) {
        var xhr = this.$.revokePatientConsentUsingPOST
        xhr.body = existingConsent
        xhr.url = this.host+"/consent/revoke/{patientSsin}" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") + (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    handleError: function (e) {
        if (e.detail.request.status === 401) this.dispatchEvent(new CustomEvent('auth-failed', { bubbles: true, composed: true })); else this.dispatchEvent(new CustomEvent('api-error', { detail: e, bubbles: true, composed: true }))
    }
});
