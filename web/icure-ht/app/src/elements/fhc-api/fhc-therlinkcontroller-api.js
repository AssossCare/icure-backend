const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="fhc-therlinkcontroller-api">
		<style>
		</style>

		<template>
				<iron-ajax id="doesLinkExistUsingPOST" method="POST" headers="[[headers]]" url="/therlink/check" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="getAllTherapeuticLinksUsingGET" method="GET" headers="[[headers]]" url="/therlink/{patientSsin}/{hcpNihii}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="getAllTherapeuticLinksWithQueryLinkUsingPOST" method="POST" headers="[[headers]]" url="/therlink/query" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="registerTherapeuticLinkUsingPOST1" method="POST" headers="[[headers]]" url="/therlink/register" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="revokeLinkUsingPOST" method="POST" headers="[[headers]]" url="/therlink/revoke/{patientSsin}/{hcpNihii}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="revokeLinkUsingPOST1" method="POST" headers="[[headers]]" url="/therlink/revoke" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
		</template>
	</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
    is: 'fhc-therlinkcontroller-api',
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
    doesLinkExistUsingPOST: function (keystoreId, tokenId, passPhrase, therLink) {
        var xhr = this.$.doesLinkExistUsingPOST
        xhr.body = therLink
        xhr.url = this.host+"/therlink/check" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    getAllTherapeuticLinksUsingGET: function (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientFirstName, patientLastName, eidCardNumber, isiCardNumber, startDate, endDate, type, sign) {
        var xhr = this.$.getAllTherapeuticLinksUsingGET
        
        xhr.url = this.host+"/therlink/{patientSsin}/{hcpNihii}".replace("{hcpNihii}", hcpNihii).replace("{patientSsin}", patientSsin) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (patientFirstName ? "&patientFirstName=" + patientFirstName : "") + (patientLastName ? "&patientLastName=" + patientLastName : "") + (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") + (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "") + (startDate ? "&startDate=" + startDate : "") + (endDate ? "&endDate=" + endDate : "") + (type ? "&type=" + type : "") + (sign ? "&sign=" + sign : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    getAllTherapeuticLinksWithQueryLinkUsingPOST: function (keystoreId, tokenId, passPhrase, queryLink, sign) {
        var xhr = this.$.getAllTherapeuticLinksWithQueryLinkUsingPOST
        xhr.body = queryLink
        xhr.url = this.host+"/therlink/query" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (sign ? "&sign=" + sign : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    registerTherapeuticLinkUsingPOST1: function (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientFirstName, patientLastName, eidCardNumber, isiCardNumber, start, end, therLinkType, comment, sign) {
        var xhr = this.$.registerTherapeuticLinkUsingPOST1
        
        xhr.url = this.host+"/therlink/register" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (patientSsin ? "&patientSsin=" + patientSsin : "") + (patientFirstName ? "&patientFirstName=" + patientFirstName : "") + (patientLastName ? "&patientLastName=" + patientLastName : "") + (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") + (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "") + (start ? "&start=" + start : "") + (end ? "&end=" + end : "") + (therLinkType ? "&therLinkType=" + therLinkType : "") + (comment ? "&comment=" + comment : "") + (sign ? "&sign=" + sign : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    revokeLinkUsingPOST: function (keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpFirstName, hcpLastName, patientSsin, patientFirstName, patientLastName, eidCardNumber, isiCardNumber, start, end, therLinkType, comment, sign) {
        var xhr = this.$.revokeLinkUsingPOST
        
        xhr.url = this.host+"/therlink/revoke/{patientSsin}/{hcpNihii}".replace("{hcpNihii}", hcpNihii).replace("{patientSsin}", patientSsin) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") + (hcpLastName ? "&hcpLastName=" + hcpLastName : "") + (patientFirstName ? "&patientFirstName=" + patientFirstName : "") + (patientLastName ? "&patientLastName=" + patientLastName : "") + (eidCardNumber ? "&eidCardNumber=" + eidCardNumber : "") + (isiCardNumber ? "&isiCardNumber=" + isiCardNumber : "") + (start ? "&start=" + start : "") + (end ? "&end=" + end : "") + (therLinkType ? "&therLinkType=" + therLinkType : "") + (comment ? "&comment=" + comment : "") + (sign ? "&sign=" + sign : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    revokeLinkUsingPOST1: function (keystoreId, tokenId, passPhrase, therLink, sign) {
        var xhr = this.$.revokeLinkUsingPOST1
        xhr.body = therLink
        xhr.url = this.host+"/therlink/revoke" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (sign ? "&sign=" + sign : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    handleError: function (e) {
        if (e.detail.request.status === 401) this.dispatchEvent(new CustomEvent('auth-failed', { bubbles: true, composed: true })); else this.dispatchEvent(new CustomEvent('api-error', { detail: e, bubbles: true, composed: true }))
    }
});
