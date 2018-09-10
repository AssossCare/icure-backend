import '../filter-panel/filter-panel.js';
import '../dynamic-form/dynamically-loaded-form.js';
import './ht-pat-detail-table.js';
import './ht-pat-detail-list.js';
import '../dynamic-form/dynamic-doc.js';
import '../dynamic-form/entity-selector.js';

import jsPDF from 'jspdf/dist/jspdf.min';
import 'lodash';
import JsBarcode from 'jsbarcode';
import 'moment';

import {PolymerElement, html} from '@polymer/polymer';
class HtPatDetailCtcDetailPanel extends TkLocalizerMixin(PolymerElement) {
  static get template() {
    return html`
		<style>
			.notification-panel {
				position: fixed;
				top:50%;
				right: 0;
				z-index:1000;
				color: white;
				font-size: 13px;
				background: rgba(255, 0, 0, 0.55);
				height: 96px;
				padding: 0 8px 0 12px;
				border-radius: 3px 0 0 3px;
				overflow: hidden;
				white-space: nowrap;
				width: 0;
				opacity: 0;
			}

			.notification {
				animation: notificationAnim 7.5s ease-in;
			}

			@keyframes notificationAnim {
				0%{
					width: 0;
					opacity: 0;
				}
				5%{
					width: 440px;
					opacity: 1;
				}
				7%{
					width: 420px;
					opacity: 1;
				}
				95%{
					width: 420px;
					opacity: 1;
				}
				100%{
					width: 0;
					opacity: 0;
				}
			}

			.prescription-progress-bar {
				width: calc( 100% - 40px );
			}

			.details-panel {
				/*width: calc(50% + 1px);*/
				height: 100%;
				background: var(--app-background-color-light);
				/*position: fixed;*/
				top: 64px;
				width:100%;
				/*left: calc(50% - 1px);
				grid-column: 3 / 3;
				grid-row:1 / 1;*/
				z-index:1;
			}

			.contact-title{
				display:block;
				@apply --paper-font-body2;
				@apply --padding-32;
				padding-bottom:8px;
				padding-top: 32px;
			}
			/*.contact-title:first-child{
				padding-top:0;
			}*/
			.pat-details-card > .card-content {
				padding: 16px 16px 32px !important;
			}

			.pat-details-card {
				width: calc(100% - 64px);
				margin: 0 32px;
			}

			.horizontal {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				flex-basis: 100%;
			}

			.justified {
				justify-content: space-between;
			}

			.pat-details-input {
				flex-grow: 1;
				margin: 16px;
			}

			input {
				border: none;
				width: 100%;
			}

			paper-dialog {
				margin: 0;
			}

			.contact-card-container {
				position: relative;
				overflow-y: auto;
				height: calc(100% - 48px);
				padding-bottom: 32px;
			}

			paper-dialog {
				min-width:30%;
			}

			.extra-info{
				color:var(--app-text-color-disabled);
				font-style: italic;
				font-size: 80%;
			}

			vaadin-upload{
				margin:16px;
				min-height:280px;
				background: var(--app-background-color);
				--vaadin-upload-buttons-primary: {
					padding:16px;
				};
				--vaadin-upload-button-add: {
					background: var(--app-secondary-color);
					color:var(--app-text-color);
				};
				--vaadin-upload-file-progress: {
					--paper-progress-active-color:var(--app-secondary-color);
				};
				--vaadin-upload-file-commands: {
					color: var(--app-primary-color);
				}

			}

			.close-button-icon{
				position: absolute;
				top: 0;
				right: 0;
				margin: 0;
				transform: translate(50%, -50%);
				height: 32px;
				width: 32px;
				padding: 8px;
				background: var(--app-primary-color);
			}

			paper-dialog {
				width: 80%;
			}

			vaadin-grid {
				max-height:100%;
				border: none;
				--vaadin-grid-body-row-hover-cell: {
					/* background-color: var(--app-primary-color); */
					color: white;
				};
				--vaadin-grid-body-row-selected-cell: {
					background-color: var(--app-primary-color);
					color: white;
				};
			}

			paper-input{
				--paper-input-container-focus-color: var(--app-primary-color);
			}

			.modal-title{
				background:  var(--app-background-color-dark);
				margin-top: 0;
				padding: 16px 24px;
			}

			.modal-button{
				--paper-button-ink-color: var(--app-secondary-color-dark);
				color: var(--app-text-color);
				font-weight: 400;
				font-size: 14px;
				height: 40px;
				min-width: 100px;
				padding: 10px 1.2em;
			}

			.modal-button--save{
				box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
				background: var(--app-secondary-color);
				color: var(--app-primary-color-dark);
				font-weight: 700;
			}

			filter-panel{
				flex-grow: 9;
				/* --panel-width: 60%; */
			}

			.layout-bar{
				flex-grow: 1;
				display: inline-flex;
				flex-flow: row nowrap;
				align-items: center;
				justify-content: space-around;
				height:48px;
				background: var(--app-secondary-color);
				border-left: 1px solid var(--app-secondary-color-dark);
			}

			.layout-bar .list, .layout-bar .graphique, .layout-bar .doc, .layout-bar .table{
				height: 32px;
				width: 32px;
				padding: 6px;
				color: var(--app-text-color-disabled);
			}

			.icn-selected {
				color: var(--app-primary-color-dark) !important;
			}

			.floating-action-bar{
				display: flex;
				position: absolute;
				height: 40px;
				bottom: 16px;
				background: var(--app-secondary-color);
				border-radius: 3px;
				grid-column: 3/3;
				grid-row: 1/1;
				z-index: 1000;
				left: 50%;
				transform: translate(-50%, 0);
				box-shadow: var(--app-shadow-elevation-2);
			}

			.add-forms-container {
				position: absolute;
				bottom: 48px;
				left: 0;
				background-color: var(--app-background-color-light);
				opacity: .8;
				padding: 8px 0;
				border-radius: 2px;
				max-width: 253px;
			}
			.floating-action-bar paper-fab-speed-dial-action {
				--paper-fab-speed-dial-action-label-background: transparent;
				--paper-fab-iron-icon: {
					transform: scale(0.8);
					
				};
				--paper-fab: {
					background: var(--app-primary-color-dark);
				}
			}

			.floating-action-bar paper-button{
				--paper-button-ink-color: var(--app-secondary-color-dark);
				background: var(--app-secondary-color);
				color: var(--app-text-color);
				font-weight: bold;
				font-size: 12px;
				height: 40px;
				min-width: 130px;
				padding: 10px 1.2em;
				border-radius: 0;
				margin:0;
			}

			.floating-action-bar paper-button:hover{
				background: var(--app-dark-color-faded);
    			transition: var(--transition_-_transition);
			}

			.floating-action-bar paper-button:not(:first-child){
				border-left: 1px solid var(--app-secondary-color-dark);
			}

			.close-add-forms-btn{
				background: var(--app-secondary-color-dark) !important;
			}

			.floating-action-bar iron-icon{
				box-sizing: border-box;
				padding: 2px;
				margin-right: 8px;
			}

			.horizontal{
				flex-flow: row nowrap;
			}


		</style>

		<paper-item id="prescriptionError" class="notification-panel prescriptionError">
			<template is="dom-if" if="[[!api.tokenId]]">[[localize('you_mus_be_con_to_ehe_to_be_all_to_pre','You must be connected to eHealth to be allowed to prescribe',language)]]<br></template>
			<template is="dom-if" if="[[!_validSsin(patient.ssin)]]">[[localize('the_ni_of_the_pat_is_not_val_or_mis','The niss of the patient is not valid or missing ',language)]]([[patient.ssin]])<br></template>
			<template is="dom-if" if="[[!_hasDrugsToBePrescribed(servicesMap.*,currentContact,currentContact.services,currentContact.services.*)]]">[[localize('add_pre_dru_to_cur_con_to_pre','Add prescription drugs to current contact to prescribe',language)]]</template>
			<iron-icon icon="icons:warning"></iron-icon>
		</paper-item>

		<div class="details-panel" on-dragover="_onDrag">
			<div class="layout horizontal">
				<filter-panel id="serviceFilterPanel" items="[[detailPanelItems]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]"></filter-panel>
				<div class="layout-bar">
						<paper-icon-button id="list_icn" class\$="list [[_activeIconClass(list)]]" icon="vaadin:list" on-tap="_list"></paper-icon-button>
						<paper-icon-button id="table_icn" class\$="table [[_activeIconClass(table)]]" icon="vaadin:table" on-tap="_table"></paper-icon-button>
						<paper-icon-button id="form_icn" class\$="doc [[_activeIconClass(doc)]]" icon="icons:assignment" on-tap="_default"></paper-icon-button>

						<paper-tooltip for="list_icn" position="bottom" animation-delay="0">[[localize('lis_vie','List view',language)]]</paper-tooltip>
						<paper-tooltip for="table_icn" position="bottom" animation-delay="0">[[localize('tab_vie','Table view',language)]]</paper-tooltip>
						<paper-tooltip for="graph_icn" position="bottom" animation-delay="0">[[localize('gra','Graph view',language)]]</paper-tooltip>
						<paper-tooltip for="form_icn" position="bottom" animation-delay="0">[[localize('forms','Forms view',language)]]</paper-tooltip>
				</div>
			</div>
			<div class="contact-card-container">
                <template is="dom-if" if="[[list]]">
				    <ht-pat-detail-list id="dynamicallyListForm" api="[[api]]" user="[[user]]" patient="[[patient]]" contact="[[dof.ctc]]" health-elements="[[healthElements]]" contacts="[[contacts]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]"></ht-pat-detail-list>
                </template>
                <template is="dom-if" if="[[table]]">
                    <ht-pat-detail-table id="dynamicallyTableForm" api="[[api]]" user="[[user]]" patient="[[patient]]" contact="[[dof.ctc]]" health-elements="[[healthElements]]" contacts="[[contacts]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]"></ht-pat-detail-table>
                </template>
                <template is="dom-if" if="[[graphique]]">
                </template>
                <template is="dom-if" if="[[doc]]">
                <template is="dom-repeat" items="[[contactsFormsAndDocuments]]" as="dof">
					<span class="contact-title">[[dof.ctc.descr]] ([[dof.ctc.openingDate]])</span>
					<template id="formsRepeat" is="dom-repeat" items="[[dof.forms]]" as="form">
						<template is="dom-if" if="[[form.id]]">
							<dynamically-loaded-form id="dynamicallyLoadedForm" api="[[api]]" user="[[user]]" patient="[[patient]]" form-id="[[form.id]]" contact="[[dof.ctc]]" current-contact="[[currentContact]]" main-health-elements="[[mainHealthElements]]" health-elements="[[healthElements]]" contacts="[[allContacts]]" services-map="[[servicesMap]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" on-edit-form="edit" on-form-deleted="formDeleted" on-new-service="_newService" on-data-change="_refreshDrugs"></dynamically-loaded-form>
						</template>
						<template is="dom-repeat" items="[[form.docs]]">
							<dynamic-doc api="[[api]]" user="[[user]]" patient="[[patient]]" service="[[item]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" title="[[item.label]]"></dynamic-doc>
						</template>
					</template>
				</template>
                </template>
			</div>
			<div class="floating-action-bar">
				<div id="prescribeBtnCtnr" on-tap="_displayPrescriptionError">
						<paper-button id="prescribeBtn" class="prescribe-btn" on-tap="_prescribe" disabled="[[!_canPrescribe(api.tokenId,patient.ssin,servicesMap.*,currentContact.services.*,_drugsRefresher)]]">
								<iron-icon icon="vaadin:pills"></iron-icon>
								[[localize('pre','Prescribe',language)]]
						</paper-button>
				</div>
				<template is="dom-if" if="[[_hasCurrentContact(contacts)]]">
					<template is="dom-if" if="[[!showAddFormsContainer]]">
						<paper-button class="add-forms-btn" on-tap="_toggleAddActions"><iron-icon icon="[[_actionIcon(showAddFormsContainer)]]"></iron-icon>[[localize('add_for','Add forms',language)]]</paper-button>
					</template>
					<template is="dom-if" if="[[showAddFormsContainer]]">
						<paper-button class="close-add-forms-btn" on-tap="_toggleAddActions"><iron-icon ic="" on="[[_actionIcon(showAddFormsContainer)]]"></iron-icon>[[localize('clo','Close',language)]]</paper-button>
					</template>
					<div class="add-forms-container" hidden\$="[[!showAddFormsContainer]]">
						<paper-fab-speed-dial-action icon="vaadin:doctor-briefcase" on-tap="addConsultation">[[localize('con','Consultation',language)]]</paper-fab-speed-dial-action>
						<paper-fab-speed-dial-action icon="vaadin:chart-line" on-tap="addMedicalHistory">[[localize('med_his','Medical history',language)]]</paper-fab-speed-dial-action>
						<paper-fab-speed-dial-action icon="vaadin:records" on-tap="addOther">[[localize('oth_for','Other form',language)]]</paper-fab-speed-dial-action>
						<paper-fab-speed-dial-action icon="editor:attach-file" on-tap="addDocument">[[localize('add_doc','Add document',language)]]</paper-fab-speed-dial-action>
					</div>
				</template>
			</div>
			<paper-tooltip for="prescribeBtnCtnr" position="top">
				<template is="dom-if" if="[[_canPrescribe(api.tokenId,patient.ssin,servicesMap.*,currentContact,currentContact.services,currentContact.services.*)]]">[[localize('pre_thi_but_to_pre','Press this button to prescribe',language)]]<br></template>
				<template is="dom-if" if="[[!api.tokenId]]">[[localize('you_mus_be_con_to_ehe_to_be_all_to_pre','You must be connected to eHealth to be allowed to prescribe',language)]]<br></template>
				<template is="dom-if" if="[[!_validSsin(patient.ssin)]]">[[localize('the_ni_of_the_pat_is_not_val_or_mis','The niss of the patient is not valid or missing ',language)]]([[patient.ssin]])<br></template>
				<template is="dom-if" if="[[!_hasDrugsToBePrescribed(servicesMap.*,currentContact,currentContact.services,currentContact.services.*)]]">[[localize('add_pre_dru_to_cur_con_to_pre','Add prescription drugs to current contact to prescribe',language)]]</template>
			</paper-tooltip>
		</div>

		<entity-selector id="add-form-dialog" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" columns="[[formTemplatesSelectorColumns()]]" data-provider="[[formTemplatesSelectorDataProvider()]]" on-entity-selected="_addedFormSelected"></entity-selector>
		<paper-dialog id="upload-dialog">
			<h2>[[localize('upl_fil','Upload files',language)]]<span class="extra-info">(PDF, images and videos)</span></h2>
			<paper-fab class="close-button-icon" icon="icons:close" dialog-dismiss=""></paper-fab>
			<vaadin-upload id="vaadin-upload" no-auto="" files="{{files}}" accept="video/*,image/*,application/pdf,text/xml,application/xml" target="[[api.host]]/document/{documentId}/attachment/multipart" method="PUT" form-data-name="attachment" on-upload-success="_fileUploaded"></vaadin-upload>
		</paper-dialog>

		<paper-dialog id="loadingPrescriptionDialog">
			<h2>[[localize('loa_pre','Loading prescription...',language)]]</h2>
			<paper-progress class="prescription-progress-bar" indeterminate=""></paper-progress>
		</paper-dialog>

		<paper-dialog id="prescriptionDialog">
			<h2 class="modal-title">[[localize('pri_pre','Print prescription',language)]]</h2>
			<vaadin-grid id="entities-list" class="material" overflow="bottom" items="[[_drugsToBePrescribed(currentContact.services.*,_drugsOnPrescriptions.*,servicesMap.*,_drugsRefresher)]]" active-item="{{activeDrug}}">
				<vaadin-grid-column width="100px">
					<template class="header">
						<vaadin-grid-sorter path="description">[[localize('dru_des','Drug descr.',language)]]</vaadin-grid-sorter>
					</template>
					<template>
						<div class="cell frozen">[[_drugDescription(item)]]</div>
					</template>
				</vaadin-grid-column>
				<vaadin-grid-column width="200px">
					<template class="header">
						Posology
					</template>
					<template>
						<div class="cell frozen">[[_drugPosology(item)]]</div>
					</template>
				</vaadin-grid-column>
				<template is="dom-repeat" items="[[_splitColumns(currentContact.services.*,_drugsOnPrescriptions,_drugsOnPrescriptions.*, servicesMap.*)]]" as="column" index-as="columnIndex">
					<vaadin-grid-column flex-grow="0" width="50px">
						<template class="header">
							[[_columnName(columnIndex)]]
						</template>
						<template>
							<vaadin-checkbox id="[[item.id]]:[[columnIndex]]" disabled="[[!_enabled(columnIndex,index,_drugsOnPrescriptions,_drugsOnPrescriptions.*)]]" checked="[[_drugOnPrescription(item,columnIndex)]]" on-checked-changed="_setDrugOnPrescription"></vaadin-checkbox>
						</template>
					</vaadin-grid-column>
				</template>
			</vaadin-grid>
			<div>
				<vaadin-date-picker id="deliveryDate" label="Date de délivrance" value="[[deliveryDateString]]" i18n="[[i18n]]"></vaadin-date-picker>
			</div>
			<div class="buttons">
				<paper-button class="modal-button" dialog-dismiss="">[[localize('can','Cancel',language)]]</paper-button>
				<paper-button class="modal-button--save" dialog-confirm="" autofocus="" on-tap="_printPrescriptions">[[localize('pri','Print',language)]]</paper-button>
			</div>
		</paper-dialog>

		<canvas id="barCode"></canvas>
`;
  }

  static get is() {
      return 'ht-pat-detail-ctc-detail-panel';
	}

  static get properties() {
      return {
          contacts: {
              type: Array,
              value: function () {
                  return [];
              },
              observer: '_contactsChanged'
          },
          allContacts: {
              type: Array,
              value: function () {
                  return [];
              },
              observer: '_allContactsChanged'
          },
          servicesMap: {
              type: Object,
              value: null
          },
          api: {
              type: Object
          },
          list: {
              type: Boolean,
              value: false
          },
          table: {
              type: Boolean,
              value: false
          },
          graphique: {
              type: Boolean,
              value: false
          },
          doc: {
              type: Boolean,
              value: true
          },
          user: {
              type: Object
          },
          patient: {
              type: Object
          },
          currentContact: {
              type: Object,
              value: null
          },
          contactsFormsAndDocuments: {
              type: Array,
              value: function () {
                  return [];
              }
          },
          healthElements: {
              type: Array,
              value: function () {
                  return [];
              }
          },
          showDetailsFiltersPanel: {
              type: Boolean,
              value: false
          },
          detailPanelItems: {
              type: Array,
              value: function () {
                  return [{ icon: "icure-svg-icons:laboratory",filter:[{type:'CD-ITEM',code:['parameter']}], title: {en: "Lab Results", fr:"Résultats du laboratoires", nl:"Lab Results"}, id: "LabResults" },
                          { icon: "icure-svg-icons:prescription", filter:[{type:'CD-ITEM',code:['treatment']}],  title: {en: "Prescription", fr:"Prescription", nl:"Prescription"}, id: "Prescription" },
                          { icon: "icure-svg-icons:blood-sugar", filter:[{type:'CD-PARAMETER',code:['bloodsugar']}],  title: {en: "BloodSugar", fr:"Analyse de sang", nl:"BloodSugar"}, id: "BloodSugar" },
                          { icon: "icure-svg-icons:blood-pressure", filter:[{type:'CD-PARAMETER',code:['sbp','dbp']}],  title: {en: "BloodPressure", fr:"Pression sanguine", nl:"BloodPressure"}, id: "BloodPressure" },
                        	{ icon: "icure-svg-icons:blood-pressure", filter:[{type:'CD-PARAMETER',code:['weight','height','bmi']}],  title: {en: "Biometries", fr:"Biométries", nl:"Biometries"}, id: "Biometry" }];
              }
          },

          files: {
              type: Array
          },
          _drugsOnPrescriptions: {
              type: Array
          },
          showAddFormsContainer: {
              type: Boolean,
              value: false
          },
          deliveryDateString: {
              type: String,
              value: moment().format("YYYY-MM-DD")
          },
          _drugsRefresher: {
              type: Number,
              value: 0
          },
          hiddenSubContactsId: {
              type: Object,
              value: {}
          }
      };
	}

  static get observers() {
      return ['_filesChanged(files.*)'];
	}

  constructor() {
      super();
	}

  _activeIconClass(selected) {
	    return selected ? 'icn-selected' : ''
	}

  _onDrag(e) {
      if (this._hasCurrentContact(this.contacts) && e && e.dataTransfer && e.dataTransfer.items && _.find(e.dataTransfer.items, i => i.kind === 'file')) {
          this.addDocument();
      }
	}

  _toggleAddActions() {
      this.showAddFormsContainer = !this.showAddFormsContainer;
	}

  _refreshDrugs() {
	    this.set('_drugsRefresher', this._drugsRefresher + 1)
	}

  _actionIcon(showAddFormsContainer) {
      return showAddFormsContainer ? 'icons:close' : 'icons:add';
	}

  shouldSave() {
      const dynamicallyLoadedForm = this.shadowRoot.querySelector('#dynamicallyLoadedForm');
      return dynamicallyLoadedForm && dynamicallyLoadedForm.shouldSave();
  }

  flushSave() {
      const dynamicallyLoadedForm = this.shadowRoot.querySelector('#dynamicallyLoadedForm');
      dynamicallyLoadedForm && dynamicallyLoadedForm.flushSave();
	}

  _filesChanged() {
      if (!this.currentContact) {
          return;
      }
      const files = _.clone(this.files);
      const vaadinUpload = this.$['vaadin-upload'];

      Promise.all(files.filter(f => !f.attached).map(f => {
          f.attached = true;
          return this.api.document().newInstance(this.user, null, { documentType: 'result', mainUti: this.api.document().uti(f.type), name: f.name }).then(d => this.api.document().createDocument(d)).then(d => {
              f.doc = d;
              f.uploadTarget = (f.uploadTarget || vaadinUpload.target).replace(/\{documentId\}/, d.id);
              return f;
          });
      })).then(files => {
          files.length && vaadinUpload.uploadFiles(files);
      });
	}

  _fileUploaded(e) {
      if (!this.currentContact) {
          return;
      }
      const vaadinUpload = this.$['vaadin-upload'];
      const f = e.detail.file;
      const d = f.doc;

      let sc = this.currentContact.subContacts.find(sbc => (sbc.status || 0) & 64);
      if (!sc) {
          sc = { status: 64, services: [] };
          this.currentContact.subContacts.push(sc);
      }
      const svc = this.api.contact().service().newInstance(this.user, { content: _.fromPairs([[this.language, { documentId: d.id, stringValue: f.name }]]), label: 'document' });
      this.currentContact.services.push(svc);
      sc.services.push({ serviceId: svc.id });
      if (!vaadinUpload.files.find(f => !f.complete && !f.error)) {
          this.saveCurrentContact().then(c => this._contactsChanged());
      }
	}

  addForm(templateGuid) {
      this.set('showAddFormsContainer', false);
      this.api.hcparty().getCurrentHealthcareParty().then(hcp => this.api.form().getFormTemplatesByGuid(templateGuid, ((hcp.specialityCodes||[])[0] && hcp.specialityCodes[0].code || 'deptgeneralpractice').replace(/persphysician/, 'deptgeneralpractice'))).then(formTemplates => {
          console.log("FTs: " + formTemplates.size + " FTs loaded");
          if (formTemplates[0] && formTemplates[0].id) {
              //Create a new form and link it to the currentContact
              this.api.form().newInstance(this.user, this.patient, { contactId: this.currentContact.id, formTemplateId: formTemplates[0].id, descr: formTemplates[0].name }).then(f => this.api.form().createForm(f)).then(f => {
                  this.currentContact.subContacts.push({ formId: f.id, services: [] });
                  return this.saveCurrentContact();
              }).then(c => this._contactsChanged());
          }
      }).catch(e => console.log("FTs: error " + e));
	}

  addConsultation() {
      this.set('showAddFormsContainer', false);
      const prefForms = this.user.properties.find(p => p.type.identifier === 'org.taktik.icure.preferred.forms');
      if (prefForms && prefForms.typedValue) {
          const formsMap = JSON.parse(prefForms.typedValue.stringValue);
          this.addForm(formsMap['org.taktik.icure.form.standard.consultation']);
      }
	}

  addMedicalHistory() {
      this.set('showAddFormsContainer', false);
      const prefForms = this.user.properties.find(p => p.type.identifier === 'org.taktik.icure.preferred.forms');
      if (prefForms && prefForms.typedValue) {
          const formsMap = JSON.parse(prefForms.typedValue.stringValue);
          this.addForm(formsMap['org.taktik.icure.form.standard.medicalhistory']);
      }
	}

  addOther() {
      this.set('showAddFormsContainer', false);
      this.$['add-form-dialog'].open();
	}

  addDocument() {
      this.set('showAddFormsContainer', false);
      this.$['upload-dialog'].open();
	}

  _validSsin(ssin) {
      return ssin && ssin.length > 9;
	}

  _hasDrugsToBePrescribed(ssin) {
      return this._drugsToBePrescribed().length > 0;
	}

  _canPrescribe(tokenId, ssin) {
      return tokenId && this._validSsin(ssin) && this._hasDrugsToBePrescribed();
	}

  _drugsToBePrescribed() {
      return this.api && this.currentContact && this.currentContact.services && this.currentContact.services.filter(s => s.tags.find(t => t.type === 'CD-ITEM' && t.code === 'treatment') && !s.endOfLife && !s.tags.find(t => t.type === 'CD-LIFECYCLE' && ['ordered', 'completed', 'delivered'].includes(t.code)) && this.api.contact().medicationValue(s, this.language)) || [];
	}

  _prescribe(e) {
      e.stopPropagation();
      this.$.prescriptionDialog.open();
	}

  hideAll() {
      this.set('list', false);
      this.set('table', false);
      this.set('doc', false);
      this.set('graphique', false);
	}

  _list(e) {
      this.hideAll();
      this.set('list', true);
	}

  _table(e) {
      this.hideAll();
      this.set('table', true);
	}

  _graphique(e) {
      this.hideAll();
      this.set('graphique', true);
	}

  _default(e) {
      this.hideAll();
      this.set('doc', true);
	}

  _drugDescription(svc) {
      return svc && this.api.contact().medication().medicationNameToString(this.api.contact().medicationValue(svc, this.language), this.language) || "N/A";
	}

  _drugPosology(svc) {
      return svc && this.api.contact().medication().posologyToString(this.api.contact().medicationValue(svc, this.language), this.language) || "N/A";
	}

  _safeDrugsOnPrescriptions() {
      return this._drugsOnPrescriptions || this._drugsToBePrescribed().map((s, idx) => ({ id: s.id, column: Math.floor(idx / 5) }));
	}

  _splitColumns() {
      const drugs = this._drugsToBePrescribed();
      const columns = this._safeDrugsOnPrescriptions().reduce((columns, mark) => {
          const id = mark.id;
          const column = mark.column;(columns[column] || (columns[column] = [])).push(id);
          return columns;
      }, [[]]);

      if (!columns.find(c => !c || !c.length) && columns.length < drugs.length) {
          columns.push([]);
      }
      return columns;
	}

  _drugOnPrescription(svc, index) {
      const col = this._splitColumns()[index];
      return svc && col && col.includes(svc.id);
	}

  _setDrugOnPrescription(e) {
      const id = e.target.id.split(':')[0];
      const column = parseInt(e.target.id.split(':')[1]);

      if (!id || id.length === 0 || !column && column !== 0) {
          return;
      }

      const current = this._safeDrugsOnPrescriptions().map(x => ({ id: x.id, column: x.column }));

      const mark = current.find(m => m.id === id);

      if (mark) {
          mark.column = column;
      } else {
          current.push({ id: id, column: column });
      }

      if (!_.isEqual(current, this._drugsOnPrescriptions)) {
          this.set('_drugsOnPrescriptions', current);
      }
	}

  _enabled(column, line) {
      if (line === undefined) {
          return true;
      }

      const dop = this._safeDrugsOnPrescriptions();
      if (dop.length < 5) {
          return true;
      }

      const sums = dop.reduce((sums, i) => {
          sums[i.column] = (sums[i.column] || 0) + 1;return sums;
      }, []);

      if ((sums[column] || 0) < 5) {
          return true;
      }

      const ids = this._drugsToBePrescribed().map(d => d.id);
      const id = ids[line];
      return dop.find(x => x.id === id && x.column === column) || false;
	}

  _displayPrescriptionError() {
      this.$.prescriptionError.classList.add("notification");
      setTimeout(() => this.$.prescriptionError.classList.remove("notification"), 8000);
	}

  _printPrescriptions(e) {
      if (this.patient.ssin && this.api.tokenId) {
          this.$.loadingPrescriptionDialog.open();
          const drugsToBePrescribed = this._drugsToBePrescribed();
          let splitColumns = this._splitColumns().filter(c => c && c.length > 0);
          this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId).then(hcp => Promise.all(splitColumns.map(c => this.api.fhc().Recipecontroller().createPrescriptionUsingPOST(this.api.keystoreId, this.api.tokenId, "persphysician", hcp.nihii, hcp.ssin, hcp.lastName, this.api.credentials.ehpassword, {
              patient: this.patient,
              hcp: hcp,
              feedback: false,
              medications: drugsToBePrescribed.filter(s => c.includes(s.id)).map(s => this.api.contact().medicationValue(s, this.language)),
              deliveryDate: moment(this.deliveryDateString).format("YYYYMMDD")
          }))).then(rids => {
              const width = 297.576,
                    height = 566.928;

              const center = function (pdf, x, txt, fontSize) {
                  return x - pdf.getStringUnitWidth(txt) * fontSize / pdf.internal.scaleFactor / 2;
              };

              //const pdf = new jsPDF('p', 'pt', [width, height])

              //pdf.addFont('ArialMS', 'Arial', 'normal')
              //pdf.addFont('Times', 'Serif', 'normal')

              const pdf = new jsPDF('p', 'pt', [width, height]);

              splitColumns.forEach((c, idx) => {
                  if (idx) {
                      pdf.addPage();
                  }
                  const element = this.root.querySelector("#barCode");
                  JsBarcode(element, rids[idx].rid, { format: "CODE128A", displayValue: false, height: 75 });
                  var jpegUrl = element.toDataURL("image/jpeg");

                  pdf.addImage(jpegUrl, 'JPEG', 20, 10, 257.576, 57);
                  pdf.setFontSize(7);
                  pdf.setFont('Arial');
                  pdf.text(center(pdf, 148.56, rids[idx].rid, 7), 69, rids[idx].rid);
                  pdf.setFontSize(9);
                  pdf.setFont('Arial');
                  pdf.text(center(pdf, 148.56, "PREUVE DE PRESCRIPTION ÉLECTRONIQUE", 9), 87.5, "PREUVE DE PRESCRIPTION ÉLECTRONIQUE");
                  pdf.setFontSize(9);
                  pdf.setFont('Serif');
                  pdf.text(center(pdf, 148.56, "Veuillez présenter ce document au pharmacien pour scanner le ", 9), 105, "Veuillez présenter ce document au pharmacien pour scanner le ");
                  pdf.setFontSize(9);
                  pdf.setFont('Serif');
                  pdf.text(center(pdf, 148.56, "code-barres et délivrer les médicaments prescrits", 9), 116, "code-barres et délivrer les médicaments prescrits");
                  pdf.setFontSize(9);
                  pdf.setFont('Serif');
                  pdf.text(18, 141.5, `${hcp.firstName} ${hcp.lastName}`);
                  pdf.setFontSize(7);
                  pdf.setFont('Serif');
                  pdf.text(18, 129, "Nom et prénom du prescripteur:");
                  pdf.setFontSize(9);
                  pdf.setFont('Serif');
                  pdf.text(18, 153.5, `INAMI: ${hcp.nihii}`);
                  pdf.setFontSize(7);
                  pdf.setFont('Serif');
                  pdf.text(18, 162.5, "Nom et prénom du patient:");
                  pdf.setFontSize(9);
                  pdf.setFont('Serif');
                  pdf.text(18, 174, `${this.patient.firstName} ${this.patient.lastName}`);
                  pdf.setFontSize(9);
                  pdf.setFont('Serif');
                  pdf.text(18, 187.5, `NISS: ${this.patient.ssin}`);
                  pdf.setFontSize(9);
                  pdf.setFont('Arial');
                  pdf.text(center(pdf, 148.56, "CONTENU DE LA PRESCRIPTION ÉLECTRONIQUE", 9), 204, "CONTENU DE LA PRESCRIPTION ÉLECTRONIQUE");

                  pdf.text(18, 240, _.flatMap(drugsToBePrescribed.filter(s => c.includes(s.id)), s => {
                      const medicationApi = this.api.contact().medication();
                      const med = this.api.contact().medicationValue(s, this.language);
                      return ["S/ " + medicationApi.medicationNameToString(med, this.language), "R/ " + medicationApi.posologyToString(med, this.language), ""];
                  }));

                  pdf.setFontSize(9);
                  pdf.setFont('Arial');
                  pdf.text(center(pdf, 148.56, "Aucun ajout manuscrit ne sera pris en compte", 9), 474, "Aucun ajout manuscrit ne sera pris en compte");
                  pdf.setFontSize(7);
                  pdf.setFont('Serif');
                  pdf.text(center(pdf, 148.56, "Date:", 7), 487, "Date:");

                  pdf.setFontSize(9);
                  pdf.setFont('Serif');
                  pdf.text(center(pdf, 148.56, moment().format("DD/MM/YYYY"), 9), 501, moment().format("DD/MM/YYYY"));
                  pdf.setFontSize(7);
                  pdf.setFont('Serif');
                  pdf.text(center(pdf, 148.56, "Délivrable à partir du:", 7), 521, "Délivrable à partir du:");
                  pdf.setFontSize(9);
                  pdf.setFont('Serif');
                  pdf.text(center(pdf, 148.56, moment(this.deliveryDateString).format("DD/MM/YYYY"), 9), 533, moment(this.deliveryDateString).format("DD/MM/YYYY"));
                  pdf.lines([[0, 0], [286, 0]], 5.788, 76);
                  pdf.lines([[0, 0], [286, 0]], 5.788, 94);
                  pdf.lines([[0, 0], [286, 0]], 5.788, 122);
                  pdf.lines([[0, 0], [286, 0]], 5.788, 156);
                  pdf.lines([[0, 0], [286, 0]], 5.788, 192);
                  pdf.lines([[0, 0], [286, 0]], 5.788, 210);
                  pdf.lines([[0, 0], [286, 0]], 5.788, 464);
                  pdf.lines([[0, 0], [286, 0]], 5.788, 480);
                  pdf.lines([[0, 0], [286, 0]], 5.788, 513);
              });

              this.$.loadingPrescriptionDialog.close();

              pdf.autoPrint();
              //pdf.output("dataurlnewwindow")
              pdf.save(`presc_${this.patient.lastName || 'Doe'}_${this.patient.firstName || 'John'}_${this.patient.dateOfBirth || '00000000'}.pdf`);

              drugsToBePrescribed.forEach(s=>{
                  const tag = s.tags.find(t=>t.type==='CD-LIFECYCLE')
                  if (tag) { tag.id = 'CD-LIFECYCLE|ordered|1'; tag.code = 'ordered' } else { s.tags.push(this.api.code().normalize({id:'CD-LIFECYCLE|ordered|1'})) }
              })
              this.saveCurrentContact().then(()=>this._refreshDrugs())

          }));
      }
	}

  _columnName(idx) {
      return `#${idx + 1}`;
	}

  saveCurrentContact() {
      return (this.currentContact.rev ? this.api.contact().modifyContactWithUser(this.user, this.currentContact) : this.api.contact().createContactWithUser(this.user, this.currentContact)).then(c=>this.api.register(c,'contact')).then(c => (this.currentContact.rev = c.rev) && c);
	}

  _addedFormSelected(e, formTemplate) {
      formTemplate && this.addForm(e.detail.guid);
	}

  edit(e, form) {
      if (!this.currentContact.subContacts.find(sc => sc.formId === form.id)) {
          this.push('currentContact.subContacts',{ formId: form.id, services: [], healthElementId: form.healthElementId, planOfActionId: form.planOfActionId });
      }
	}

  formDeleted(e, form) {
      this.saveCurrentContact().then(c => this._contactsChanged());
	}

  _hasCurrentContact() {
      return this.contacts.find(c => !c.closingDate) && true;
	}

  _newService(event, detail) {
      if (detail && detail.svc) {
          if (this.servicesMap[detail.svc.label]) {
              this.push(`servicesMap.${detail.svc.label}`, detail);
          } else {
              this.set(`servicesMap.${detail.svc.label}`, [detail]);
          }
      }
	}

  _allContactsChanged() {
      this.set('servicesMap', this.allContacts.reduce((map, ctc) => {
          const svcMap = ctc.subContacts.reduce((svcMap, subContact) => {
              subContact.services.reduce((svcMap, svcLink) => {
                  (svcMap[svcLink.serviceId] || (svcMap[svcLink.serviceId] = [])).push(subContact);
                  return svcMap;
              }, svcMap);
              return svcMap;
          }, {});

          ctc.services.reduce((map, svc) => {
              (map[svc.label] || (map[svc.label] = [])).push({ svc: svc, scs: svcMap[svc.id], ctc: ctc });
              return map;
          }, map);

          Object.values(map).forEach(arr => arr.sort((a, b) => b.svc.modified - a.svc.modified));

          return map;
      }, {}));
	}

  _contactsChanged() {
      this.set('contactsFormsAndDocuments', []);
      if (!this.contacts) {
          return;
      }

      const seenForms = {}
      const formGroups = this.contacts.map(contact => ({
          ctc: contact, forms: _.sortBy((contact.subContacts.filter(sc => !(sc.formId && seenForms[sc.formId]) && !(sc.id && this.hiddenSubContactsId[sc.id])) || []).map(sc => {
              const serviceIds = sc.services.map(s => s.serviceId);
              return {
                  id: sc.formId,
                  docs: contact.services.filter(s => serviceIds.includes(s.id) && Object.values(s.content).filter(c => c.documentId).length)
              };
          }), f => -f.created)
      }));

      const climbFormHierarchy = function (formIds, formsCache) {
          return (formIds.length ? this.api.form().getForms({ ids: formIds }) : Promise.resolve([])).then(forms => {
              forms.forEach(f => {
                  formsCache[f.id] = f;
              });
              const formIds = _.uniq(_.flatten(formGroups.map(fg => fg.forms.filter(f => f.id).map(f => {
                  const theForm = formsCache[f.id];
                  if (theForm.parent) {
                      f.id = theForm.parent;
                  } else {
                      f.form = formsCache[f.id];
                  }
                  return f;
              }).filter(f => !f.form).map(f => f.id))));

              return formIds.length ? climbFormHierarchy(formIds.filter(id => !formsCache[id]), formsCache) : formsCache;
          });
      }.bind(this);

      climbFormHierarchy(_.chain(formGroups).map(fg => fg.forms.filter(f => f.id).map(f => f.id)).flatten().uniq().value(), {}).then(() => {
          formGroups.forEach(fg => {
              fg.forms = _.chain(fg.forms.reduce((acc, form) => {
                  const slot = acc.find(f => f.id === form.id);
                  if (slot) {
                      _.concat(slot.docs, form.docs);
                  } else {
                      acc.push(form);
                  }
                  return acc;
              }, [])).sortBy(f=>-f.created).value()
          });
          this.set('contactsFormsAndDocuments', _.sortBy(formGroups, fg => -fg.ctc.openingDate));
      });
	}

  toggleDetailsFiltersPanel() {
      this.showDetailsFiltersPanel = !this.showDetailsFiltersPanel;
      this.root.querySelector('#detailsFiltersPanel').classList.toggle('filters-panel--collapsed');
	}

  formTemplatesSelectorColumns() {
      return [{ key: 'group.name', title: 'Groupe' }, { key: 'name', title: 'Nom' }, { key: 'guid', title: 'GUID' }];
	}

  formTemplatesSelectorDataProvider() {
      return {
          filter: function (filterValue, limit, offset, sortKey, descending) {
              const regExp = filterValue && new RegExp(filterValue, "i");

              return Promise.all([
                  this.api.form().findFormTemplates(),
                  this.api.form().findFormTemplatesBySpeciality(((this.api.hcParties[this.user.healthcarePartyId]||{}).specialityCodes||[])[0] || 'deptgeneralpractice')
              ])
                  .then(res=>_.uniqBy(_.flatMap(res),'id'))
                  .then(fts => {
                  const filtered = fts.filter(ft => !regExp || ft.name && ft.name.match(regExp) || ft.group && ft.group.name && ft.group.name.match(regExp) || ft.guid && ft.guid.match(regExp));
                  return { totalSize: fts.length, rows: (descending ? _.reverse(_.sortBy(filtered, sortKey)) : _.sortBy(filtered, sortKey)).slice(offset, limit) };
              });
          }.bind(this)
      };
	}

  refreshIcons() {
      this.root.querySelector("#serviceFilterPanel").refreshIcons();
	}
}

customElements.define(HtPatDetailCtcDetailPanel.is, HtPatDetailCtcDetailPanel);
