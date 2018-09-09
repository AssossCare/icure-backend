const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="fhc-ehboxcontroller-api">
		<style>
		</style>

		<template>
				<iron-ajax id="deleteMessagesUsingPOST" method="POST" headers="[[headers]]" url="/ehbox/move/from/{source}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="getFullMessageUsingGET" method="GET" headers="[[headers]]" url="/ehbox/{boxId}/{messageId}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="getInfosUsingGET" method="GET" headers="[[headers]]" url="/ehbox" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="loadMessagesUsingGET" method="GET" headers="[[headers]]" url="/ehbox/{boxId}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="moveMessagesUsingPOST" method="POST" headers="[[headers]]" url="/ehbox/move/from/{source}/to/{destination}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="sendMessageUsingPOST" method="POST" headers="[[headers]]" url="/ehbox" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
		</template>
	</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
    is: 'fhc-ehboxcontroller-api',
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
    deleteMessagesUsingPOST: function (keystoreId, tokenId, passPhrase, messageIds, source) {
        var xhr = this.$.deleteMessagesUsingPOST
        xhr.body = messageIds
        xhr.url = this.host+"/ehbox/move/from/{source}".replace("{source}", source) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    getFullMessageUsingGET: function (keystoreId, tokenId, passPhrase, boxId, messageId) {
        var xhr = this.$.getFullMessageUsingGET
        
        xhr.url = this.host+"/ehbox/{boxId}/{messageId}".replace("{boxId}", boxId).replace("{messageId}", messageId) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    getInfosUsingGET: function (keystoreId, tokenId, passPhrase) {
        var xhr = this.$.getInfosUsingGET
        
        xhr.url = this.host+"/ehbox" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    loadMessagesUsingGET: function (keystoreId, tokenId, passPhrase, boxId, limit) {
        var xhr = this.$.loadMessagesUsingGET
        
        xhr.url = this.host+"/ehbox/{boxId}".replace("{boxId}", boxId) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (limit ? "&limit=" + limit : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    moveMessagesUsingPOST: function (keystoreId, tokenId, passPhrase, messageIds, source, destination) {
        var xhr = this.$.moveMessagesUsingPOST
        xhr.body = messageIds
        xhr.url = this.host+"/ehbox/move/from/{source}/to/{destination}".replace("{source}", source).replace("{destination}", destination) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    sendMessageUsingPOST: function (keystoreId, tokenId, passPhrase, publicationReceipt, receptionReceipt, readReceipt) {
        var xhr = this.$.sendMessageUsingPOST
        
        xhr.url = this.host+"/ehbox" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (publicationReceipt ? "&publicationReceipt=" + publicationReceipt : "") + (receptionReceipt ? "&receptionReceipt=" + receptionReceipt : "") + (readReceipt ? "&readReceipt=" + readReceipt : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    handleError: function (e) {
        if (e.detail.request.status === 401) this.dispatchEvent(new CustomEvent('auth-failed', { bubbles: true, composed: true })); else this.dispatchEvent(new CustomEvent('api-error', { detail: e, bubbles: true, composed: true }))
    }
});
