const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="fhc-recipecontroller-api">
		<style>
		</style>

		<template>
				<iron-ajax id="createPrescriptionUsingPOST" method="POST" headers="[[headers]]" url="/recipe" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="getGalToAdministrationUnitUsingGET" method="GET" headers="[[headers]]" url="/recipe/gal/{galId}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="getPrescriptionUsingGET" method="GET" headers="[[headers]]" url="/recipe/{rid}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="listFeedbacksUsingGET" method="GET" headers="[[headers]]" url="/recipe/all/feedbacks" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="listOpenPrescriptionsUsingGET" method="GET" headers="[[headers]]" url="/recipe" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="revokePrescriptionUsingDELETE" method="DELETE" headers="[[headers]]" url="/recipe/{rid}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="sendNotificationUsingPOST" method="POST" headers="[[headers]]" url="/recipe/notify/{rid}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
				<iron-ajax id="updateFeedbackFlagUsingPUT" method="PUT" headers="[[headers]]" url="/recipe/{rid}/feedback/{feedbackFlag}" handle-as="json" on-error="handleError" with-credentials=""></iron-ajax>
		</template>
	</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
    is: 'fhc-recipecontroller-api',
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
    createPrescriptionUsingPOST: function (keystoreId, tokenId, hcpQuality, hcpNihii, hcpSsin, hcpName, passPhrase, prescription) {
        var xhr = this.$.createPrescriptionUsingPOST
        xhr.body = prescription
        xhr.url = this.host+"/recipe" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (hcpQuality ? "&hcpQuality=" + hcpQuality : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpName ? "&hcpName=" + hcpName : "") + (passPhrase ? "&passPhrase=" + passPhrase : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    getGalToAdministrationUnitUsingGET: function (galId) {
        var xhr = this.$.getGalToAdministrationUnitUsingGET
        
        xhr.url = this.host+"/recipe/gal/{galId}".replace("{galId}", galId) + "?ts=" + new Date().getTime() 
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    getPrescriptionUsingGET: function (rid) {
        var xhr = this.$.getPrescriptionUsingGET
        
        xhr.url = this.host+"/recipe/{rid}".replace("{rid}", rid) + "?ts=" + new Date().getTime() 
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    listFeedbacksUsingGET: function (keystoreId, tokenId, hcpQuality, hcpNihii, hcpSsin, hcpName, passPhrase) {
        var xhr = this.$.listFeedbacksUsingGET
        
        xhr.url = this.host+"/recipe/all/feedbacks" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (hcpQuality ? "&hcpQuality=" + hcpQuality : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpName ? "&hcpName=" + hcpName : "") + (passPhrase ? "&passPhrase=" + passPhrase : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    listOpenPrescriptionsUsingGET: function (keystoreId, tokenId, hcpQuality, hcpNihii, hcpSsin, hcpName, passPhrase) {
        var xhr = this.$.listOpenPrescriptionsUsingGET
        
        xhr.url = this.host+"/recipe" + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (hcpQuality ? "&hcpQuality=" + hcpQuality : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpName ? "&hcpName=" + hcpName : "") + (passPhrase ? "&passPhrase=" + passPhrase : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    revokePrescriptionUsingDELETE: function (keystoreId, tokenId, hcpQuality, hcpNihii, hcpSsin, hcpName, passPhrase, rid, reason) {
        var xhr = this.$.revokePrescriptionUsingDELETE
        
        xhr.url = this.host+"/recipe/{rid}".replace("{rid}", rid) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (hcpQuality ? "&hcpQuality=" + hcpQuality : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpName ? "&hcpName=" + hcpName : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (reason ? "&reason=" + reason : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    sendNotificationUsingPOST: function (keystoreId, tokenId, hcpQuality, hcpNihii, hcpSsin, hcpName, passPhrase, rid, patientId, executorId, text) {
        var xhr = this.$.sendNotificationUsingPOST
        
        xhr.url = this.host+"/recipe/notify/{rid}".replace("{rid}", rid) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (hcpQuality ? "&hcpQuality=" + hcpQuality : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpName ? "&hcpName=" + hcpName : "") + (passPhrase ? "&passPhrase=" + passPhrase : "") + (patientId ? "&patientId=" + patientId : "") + (executorId ? "&executorId=" + executorId : "") + (text ? "&text=" + text : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    updateFeedbackFlagUsingPUT: function (keystoreId, tokenId, hcpQuality, hcpNihii, hcpSsin, hcpName, passPhrase, rid, feedbackFlag) {
        var xhr = this.$.updateFeedbackFlagUsingPUT
        
        xhr.url = this.host+"/recipe/{rid}/feedback/{feedbackFlag}".replace("{rid}", rid).replace("{feedbackFlag}", feedbackFlag) + "?ts=" + new Date().getTime()  + (keystoreId ? "&keystoreId=" + keystoreId : "") + (tokenId ? "&tokenId=" + tokenId : "") + (hcpQuality ? "&hcpQuality=" + hcpQuality : "") + (hcpNihii ? "&hcpNihii=" + hcpNihii : "") + (hcpSsin ? "&hcpSsin=" + hcpSsin : "") + (hcpName ? "&hcpName=" + hcpName : "") + (passPhrase ? "&passPhrase=" + passPhrase : "")
        return xhr.generateRequest().completes.then(function (req) {
						return req.response
        })
    },
    handleError: function (e) {
        if (e.detail.request.status === 401) this.dispatchEvent(new CustomEvent('auth-failed', { bubbles: true, composed: true })); else this.dispatchEvent(new CustomEvent('api-error', { detail: e, bubbles: true, composed: true }))
    }
});
