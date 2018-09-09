/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '../filter-panel/filter-panel.js';

import '../collapse-button/collapse-button.js';
import './ht-pat-admin-card.js';
import './ht-pat-he-tree-detail.js';
import './ht-pat-detail-ctc-detail-panel.js';
import '../icons/icure-icons.js';
import '../../icpc-styles.js';
import '../dynamic-form/entity-selector.js';
import '../dynamic-form/health-problem-selector.js';

import moment from 'moment/src/moment';
import _ from 'lodash/lodash';
import styx from '../../../scripts/styx';
import { AccessLogDto } from "icc-api/icc-api/model/AccessLogDto";

class HtPatDetail extends Polymer.TkLocalizerMixin(Polymer.Element) {
  static get template() {
    return Polymer.html`
		<style include="iron-flex iron-flex-alignment"></style>
		<!--suppress CssUnusedSymbol -->
		<style include="icpc-styles">
			:host {
				height: 100%;
			}

			.container {
				width: 100%;
				height: calc(100vh - 64px);
				display:grid;
				grid-template-columns: 20% 30% 50%;
				grid-template-rows: 100%;
				position: fixed;
				top: 64px;
				left: 0;
				bottom: 0;
				right: 0;
			}

			.zone {
				height: 100%;
			}


			.padding-0{
				padding:0;
			}

			.one-line-menu {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-weight: 400;
				padding-left:0;
			}

			#first {
				height: calc(100% - 36px);
			}

			paper-fab {
				--paper-fab-mini: {
					height: 28px;
					width: 28px;
					padding: 4px;
				};

				margin-right: 4px;
			}

			.first-panel{
				/*width:20%;
				height:calc(100% - 64px);*/
				height:100%;
				background: var(--app-background-color-dark);
				/*position:fixed;*/
				top:64px;
				left:0;
				@apply --shadow-elevation-3dp;
				grid-column: 1 / 1;
				grid-row:1 / 1;
				z-index:3;
				overflow:hidden;
			}

			#_contacts_listbox {
				padding: 0;
			}

			paper-listbox{
				background:transparent;
				padding: 0;
			}

			paper-item{
				background:transparent;
				outline:0;
				--paper-item-selected:{

				};

				--paper-item-disabled-color:{
					color: red;
				};

				--paper-item-focused: {
					background:transparent;
				};
				--paper-item-focused-before: {
					background:transparent;
				};

			}

			paper-listbox {
				outline:0;
				--paper-listbox-selected-item: {
					color:var(--app-text-color-light);
					background:var(--app-primary-color);
				};
				--paper-listbox-disabled-color:{
					color: red;
				};
			}

			#adminFileMenu paper-item.iron-selected {
				color:var(--app-text-color-light);
				background:var(--app-primary-color);
				@apply --text-shadow;
			}

			collapse-button {
				outline:0;
				--paper-listbox-selected-item: {
					color:var(--app-text-color-light);
					background:var(--app-primary-color);
				}
			}

			collapse-button > .menu-item.iron-selected {
				@apply --padding-right-left-16;
				color:var(--app-text-color-light);
				background:var(--app-primary-color);
				@apply --text-shadow;
			}

			paper-item.opened{
				padding-top: 8px;

			}
			.opened{
				color:var(--app-text-color);
				background:var(--app-text-color-light);
				border-radius:2px 2px 0 0;
				box-shadow: 0 4px 0 0 white,
							0 -2px 0 0 white,
							0 2px 2px 0 rgba(0, 0, 0, 0.14),
							0 1px 5px 0 rgba(0, 0, 0, 0.12),
							0 3px 1px -2px rgba(0, 0, 0, 0.2);

			}

			.opened.iron-selected{
				box-shadow: 0 4px 0 0 white,
							0 -2px 0 0 var(--app-primary-color),
							0 2px 2px 0 rgba(0, 0, 0, 0.14),
							0 1px 5px 0 rgba(0, 0, 0, 0.12),
							0 3px 1px -2px rgba(0, 0, 0, 0.2);
			}

			.sublist{
				background:var(--app-light-color);
				margin:0 0 8px -30px;
				padding:0;
				padding-bottom:4px;
				border-radius:0 0 2px 2px;
				@apply --shadow-elevation-2dp;
			}

			paper-item.sublist-footer {
				height:48px;
				font-weight: normal;
			}

			.sublist-footer paper-icon-button.menu-item-icon, .list-info paper-icon-button.menu-item-icon {
				padding: 2px;
				height: 24px;
				width:24px;
				-webkit-border-radius: 12px;
				-moz-border-radius: 12px;
				border-radius: 12px;
				background:var(--app-secondary-color);
				color:var(--app-text-color);
				margin-right:8px;
			}

			paper-item.list-info {
				font-weight: lighter;
				font-style: italic;
				height:48px;
			}

			.list-title {
				font-weight: bold;
			}

			.menu-item{
				@apply --padding-right-left-16;
				height:48px;
				@apply --paper-font-button;
				text-transform: inherit;
				justify-content: space-between;
				cursor: pointer;
				@apply --transition;
			}

			.sublist .menu-item {
				font-size: 13px;
				min-height:32px;
				height:32px;
			}

			.menu-item:hover{
				/*background: var(--app-dark-color-faded);*/
				@apply --transition;
			}

			.menu-item .iron-selected{
				background:var(--app-primary-color);

			}

			.menu-item .opened{
				background:white!important;
				width:80%;
				border-radius:2px;
			}

			.menu-item-icon--selected{
				width:0;
			}

			.opened .menu-item-icon--selected{
				width: 18px;
			}

			.opened > .menu-item-icon{
				transform: scaleY(-1);
			}

			paper-item.menu-item.opened {
				@apply --padding-right-left-16;
			}

			.submenu-item{
				cursor:pointer;
			}

			.submenu-item.iron-selected{
				background:var(--app-primary-color-light);
				color:var(--app-text-color-light);
				@apply --text-shadow;
			}

			.submenu-item-icon{
				height:14px;
				width:14px;
				color:var(--app-text-color-light);
				margin-right:10px;
			}

			.add-btn-container{
				width:20%;
				position: absolute;
				bottom: 16px;
				/*display:none;*/
				display:flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}

			.new-ctc-btn-container {
				width:30%;
				left:20%;
				position: absolute;
				bottom: 16px;
				/*display:none;*/
				display:flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}

			.add-btn{
				--paper-button-ink-color: var(--app-secondary-color-dark);
				background:var(--app-secondary-color);
				color:var(--app-text-color);
				font-weight:bold;
				font-size:12px;
				height:40px;
				min-width:100px;
				@apply --shadow-elevation-2dp;
				padding: 10px 1.2em;
			}
			.patient-info-container{
				height:96px;
				@apply --padding-right-left-32;
				cursor:pointer;
			}

			.patient-info-container:hover{
				background: var(--app-dark-color-faded);
				@apply --transition;
			}

			.patient-info{
				@apply --padding-left-16;
				display:flex;
				flex-direction:column;
				align-items: flex-start;
				justify-content: center;
			}
			.patient-name{
				font-weight:700;
				line-height:14px;
			}
			.patient-birthdate{
				font-size: 13px;
			}

			.btn-close{
				position: absolute;
				left: 26px;
				top: 18px;
				background:var(--app-secondary-color);
				color:var(--app-text-color);
				height:20px;
				width:20px;
				z-index: 4;
			}

			.btn-close:hover{
				@apply --transition;
				top: 17px;
				@apply --shadow-elevation-2dp;
			}

			.patient-picture-container{
				height:60px;
				width:60px;
				border-radius:50%;
				overflow: hidden;
			}

			.patient-picture-container img{
				width:100%;
				margin:50%;
				transform: translate(-50%,-50%);
			}

			.submenus-container{
				overflow-y: auto;
				height: calc(100% - 146px);
				margin-bottom:16px;
			}



			[hidden] {
				display:none!important;
			}
			/* END FIRST PANEL */

			/* SECOND PANEL  */
			.second-panel{
				/*width:30%;*/
				height:100%;
				background: var(--app-background-color);
				/*position:fixed;*/
				top:64px;
				left:20%;
				@apply --shadow-elevation-2dp;
				margin:0;
				grid-column: 2 / 2;
				grid-row:1 / 1;

				z-index:2;

			}


			.fit-bottom{
				bottom:0;
				left:20%!important;
				width:30%;
				height:48px;
				z-index:4;
				@apply --padding-right-left-32;
				display:flex;
				flex-direction: row;
				justify-content: center;
				flex-wrap: nowrap;
				padding-top:8px;
			}

			.selection-toast-button{
				height:32px;
				@apply --paper-font-button;
				text-transform:lowercase;
			}

			.selection-toast-icon{
				height:16px;
				margin-right:4px;
			}

			div.extraDialogFields {
				margin-top: 0;
			}

			.contact{
				margin: 0 32px 16px;
				background: var(--app-light-color);
				color:var(--app-text-color);
				outline:0;
				padding:0;
				align-items: flex-start !important;
				@apply --shadow-elevation-2dp;
				position:relative;
			}

			.contact.iron-selected{
				background: var(--app-primary-color);
				color:var(--app-light-color);
				@apply --text-shadow;
			}
			.contact h4{
				font-size:14px;
				font-weight: 600;
				margin:0;
				-webkit-user-select: none; /* Chrome/Safari */
				-moz-user-select: none; /* Firefox */
				-ms-user-select: none; /* IE10+ */

				/* Rules below not implemented in browsers yet */
				-o-user-select: none;
				user-select: none;

			}

			.contact .contact-text-row{
				width:calc(100% - 32px);
				display: flex;
				flex-flow: row wrap;
				justify-content: flex-start;
				align-items: center;
				@apply --padding-right-left-16;
			}

			.contact:nth-of-type(1) .contact-text-row p {
				padding-right: 32px;
			}

			.contact .contact-text-row:first-child, .contact .contact-text-row:last-child{
				height:24px;
			}
			/*.contact .contact-text-row:nth-child(2){
				height:48px;
			}*/

			.contact-text-row p {
				width: 100%;
				text-overflow: ellipsis;
				overflow-x: hidden;
				white-space: nowrap;
			}

			.contact-text-date{
				justify-content: space-between!important;
				position: relative;
				top: 0;
				left: 0;
				right: 0;
				background: rgba(0,0,0,.1);
				@apply --padding-right-left-16;
				color: var(--app-text-color-disabled);
				height:24px;
			}

			.contact .label-container {
				display: flex;
				flex-flow: row nowrap;
			}

			.contact label{
				font-size:12px;
				font-weight: 400;
				margin:0;
				display: block;

				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;

				-webkit-user-select: none; /* Chrome/Safari */
				-moz-user-select: none; /* Firefox */
				-ms-user-select: none; /* IE10+ */

				/* Rules below not implemented in browsers yet */
				-o-user-select: none;
				user-select: none;

			}

			.colour-code{
				line-height: 12px;
				margin-right:4px;
				color: black;
			}

			.iron-selected .colour-code{
				color: var(--app-light-color);
			}

			.iron-selected .colour-code span{
				background: var(--app-light-color);
			}
			.colour-code:hover{
				font-weight:600;
			}

			.colour-code:hover:before{
				height:8px;
				width:8px;
				margin-bottom:0;
				border-radius:4px;
			}

			.colour-code span{
				content: '';
				display: inline-block;
				height: 6px;
				width: 6px;
				border-radius: 3px;
				margin-right: 3px;
				margin-bottom: 1px;
				background: lightgrey;
			}

			.contact .colour-code:not(:first-child) {
				margin-left: 4px;
			}

			.contact p{
				@apply --paper-font-body1;
				margin:0;
				-webkit-user-select: none; /* Chrome/Safari */
				-moz-user-select: none; /* Firefox */
				-ms-user-select: none; /* IE10+ */

				/* Rules below not implemented in browsers yet */
				-o-user-select: none;
				user-select: none;
			}

			.contact-icon{
				position: absolute;
				right: 8px;
				margin: auto;
				top: 20px;
			}

			paper-material.iron-selected > .contact-icon{
				color:var(--app-text-color-light);
			}

			paper-material.iron-selected > .contact-text > .contact-text-date{
				color:var(--app-text-color-light)!important;
			}

			.current-contact {
				color:var(--app-secondary-color-dark);
				margin-bottom: 16px;
			}


			.current-contact.iron-selected{
				border-bottom:1px solid var(--app-primary-color);
			}

			.contact--big{
				min-height: 96px;
				/*@apply --padding-16;*/
				/*border-bottom: 1px solid var(--app-background-color-dark);*/
			}

			.contact--small{
				min-height: 32px;
				/*@apply --padding-right-left-16;*/
				padding-bottom: 8px;
			}

			.contact--small .contact-text-row:nth-child(2){
				justify-content: space-between;
			}

			.contact--small .contact-text-row:last-child{
				display: none;
			}

			.contact--small .he-dots-container{
				display:none;
			}

			.he-dots-container{
				display:flex;
				flex-flow:row wrap;
				justify-content: flex-end;
			}

			.contact-year{
				display:block;
				@apply --paper-font-body2;
				@apply --padding-32;
				padding-bottom:8px;
			}
			.contact-year:first-child{
				padding-top:0;
			}

			.contact-text{
				background:transparent;
				flex-direction:column;
				justify-content: space-between;
				align-items: flex-start;
				width:100%;
				height: 100%;
				padding:0;
			}

			.contact-text:focus::before, .contact-text:focus::after{
				background:transparent;
			}

			.contacts-container{
				overflow-y: auto;
				height: calc(100% - 80px);
				padding-bottom: 32px;
			}

			.layout.vertical {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				flex-wrap:nowrap;
			}

			.todo-list{
				border:1px dashed rgba(0,0,0,0.1);
				margin: 0 32px;
				border-radius:4px;
			}

			.todo-item{
				font-size:14px;
				--paper-item-min-height:32px;
				color:var(--app-text-color);
				display:flex;
				flex-flow: row wrap;
				align-items: center;
				justify-content: space-between;
			}

			.todo-item h4{
				margin:0.5em 0;
			}

			.todo-due-date{
				font-size:14px;
				font-weight:300;
				margin-right:4px;
			}

			.todo-actions paper-icon-button{
				height:24px;
				width:24px;
				padding:2px;
				--paper-icon-button-hover:{
					color:var(--app-secondary-color);
				};
			}

			.todo-item--late{
				color:var(--paper-red-500)
			}
			/* END SECOND PANEL */

			.second-third-panel{
				grid-column: 2 / span 2;
    			grid-row: 1 / 1;
				background: var(--app-background-color);

				z-index:2;
			}

			ht-pat-detail-ctc-detail-panel {
				grid-column: 3 / 3;
				grid-row: 1 / 1;
			}

			.statusContainer {
				display:inline-flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;
				padding-top: 4px;
				padding-bottom: 4px;
				width: 100%;
				height: 24px;
				overflow: hidden;
			}

			#insuranceStatus, #hubStatus, #tlStatus, #consentStatus  {
				--paper-fab-background: var(--app-background-color-dark);
				--paper-fab-keyboard-focus-background: var(--app-background-color);
				color: var(--app-primary-color-dark);
				box-shadow: none;
				--paper-fab-iron-icon: {
					height:16px;
					width:16px;
				}

			}

			#insuranceStatus.medicalHouse {
				--paper-fab-background: var(--app-status-color-pending);
			}

			#insuranceStatus.noInsurance, #hubStatus.noAccess, #tlStatus.noTl, #consentStatus.noConsent {
				--paper-fab-background: var(--app-status-color-nok);
			}

			#insuranceStatus.insuranceOk, #hubStatus.accessOk, #tlStatus.tlOk, #consentStatus.consentOk {
				--paper-fab-background: var(--app-status-color-ok);
			}

			.display-left-menu{
				display:none;
				position:fixed;
				top: 50%;
				left: 0;
				z-index: 120;
				background: var(--app-background-color-dark);
				transform:translateY(-50%) rotate(0);
				border-radius:0 50% 50% 0;
				transition: transform 0.2s ease-in;

			}
			.display-left-menu.open{
				left:20%;
				border-radius:50% 0 0  50% ;
				transform:translateY(-50%) rotate(180deg);
				transition: transform 0.2s ease-in;
			}


			@media screen and (max-width:1025px){
				.container{
					grid-template-columns: 0% 40% 60%;

				}
				.container .fit-bottom{
					left:0%!important;
					width:40%;
				}
				.container.expanded{
					grid-template-columns: 20% 30% 50%;
				}

				.container.expanded .fit-bottom {
					left:20%!important;
					width:30%;
				}
				.selection-toast-button{
					@apply --paper-font-caption;
					text-transform:lowercase;
				}
				.second-third-panel{
					grid-column: 1 / span 3;
    				grid-row: 1 / 1;
				}
				.patient-info-container{
					@apply --padding-right-left-16;
				}
				.patient-picture-container{
					display:none;
				}
				.btn-close{
					left: 8px;
   					top: 16px;
				}
				.display-left-menu{
					display:inherit;
				}
			}

			.extraDialogFields paper-input, .extraDialogFields tk-token-field{
				--paper-input-container-focus-color: var(--app-primary-color);
			}

			.toast-detector {
				position: relative;
				height: 48px;
				bottom:48px;
				width:100%;
			}
			#savedIndicator{
				position: fixed;
				top:50%;
				right: 0;
				z-index:1000;
				color: white;
				font-size: 13px;
				background:rgba(0,0,0,0.42);
				height: 24px;
				padding: 0 8px 0 12px;
				border-radius: 3px 0 0 3px;
				width: 0;
				opacity: 0;
			}
			.saved{
				animation: savedAnim 2.5s ease-in;
			}
			.saved iron-icon{
				margin-left: 4px;
				padding: 4px;
			}

			@keyframes savedAnim {
				0%{
					width: 0;
					opacity: 0;
				}
				20%{
					width: 114px;
					opacity: 1;
				}
				25%{
					width: 96px;
					opacity: 1;
				}
				75%{
					width: 96px;
					opacity: 1;
				}
				100%{
					width: 0;
					opacity: 0;
				}
			}

            #therLinkDialog, #hubDialog{
                width: 80%;
            }

            #transactionDialog{
                width: 75%;
                height: 80%;
            }
			#kmehr_slot{
				overflow-y: scroll;
				height: 90%;
			}

			paper-tooltip{
				--paper-tooltip-delay-in:100;
			}

			.history{
				height: 48px;
				width: calc(100% - 48px);
				color: var(--app-text-color);
				background-color: var(--app-background-color-dark);
				padding: 0 24px;
				font-weight: 700;
				display: flex;
				flex-flow: row wrap;
				justify-content: flex-start;
				align-items: center;
			}

			.history-icon {
				height: 24px;
				width: 24px;
				opacity: .5;
			}

			.history-txt {
				padding-left: 8px;
			}
		</style>

		<div class="container">
			<paper-item id="savedIndicator">[[localize('sav','SAVED',language)]]
				<iron-icon icon="icons:check"></iron-icon>
			</paper-item>
			<template is="dom-if" if="[[isAdminSelected(selectedAdminOrCompleteFileIndex)]]">
				<ht-pat-admin-card class="second-third-panel" id="pat-admin-card" api="[[api]]" user="[[user]]" patient="{{patient}}" i18n="[[i18n]]" resources="[[resources]]" language="[[language]]"></ht-pat-admin-card>
			</template>
			<paper-icon-button class="display-left-menu" icon="chevron-right" on-tap="_expandColumn"></paper-icon-button>
			<div class="first-panel">
				<paper-material class="zone compact-menu">
					<paper-listbox class="padding-0" id="adminFileMenu" selected="{{selectedAdminOrCompleteFileIndex}}" selectable="paper-item">
						<paper-item id="_admin_info" class="horizontal layout patient-info-container">
							<paper-fab class="btn-close" mini="" icon="close" on-tap="close"></paper-fab>
							<div class="patient-picture-container"><img src\$="[[picture(patient)]]"></div>
							<div class="patient-info">
								<div class="patient-name">[[patient.firstName]] [[patient.lastName]]</div>
								<div class="patient-birthdate">°[[patient.dateOfBirth]]</div>
								<div class="statusContainer">
									<paper-fab id="insuranceStatus" mini="" icon="hardware:security"></paper-fab>
									<paper-tooltip for="insuranceStatus">[[localize('adm_ins','insurance',language)]]</paper-tooltip>
									<paper-fab id="consentStatus" mini="" icon="icons:thumb-up" on-tap="_openConsentDialog"></paper-fab>
									<paper-tooltip for="consentStatus">[[localize('consent','insurance',language)]]</paper-tooltip>
									<paper-fab id="tlStatus" mini="" icon="vaadin:specialist" on-tap="_openTherLinkDialog"></paper-fab>
									<paper-tooltip for="tlStatus">[[localize('tl','insurance',language)]]</paper-tooltip>
									<paper-fab id="hubStatus" mini="" icon="hardware:device-hub" on-tap="_openHubDialog"></paper-fab>
									<paper-tooltip for="hubStatus">Hub</paper-tooltip>
								</div>
							</div>
						</paper-item>
						<paper-item class="menu-item" id="_complete_file">[[localize('com_fil','Complete file',language)]]<iron-icon class="menu-item-icon" icon="icons:arrow-forward"></iron-icon></paper-item>
					</paper-listbox>
					<div class="submenus-container">
							<collapse-button id="cb_ahelb">
								<paper-item slot="sublist-collapse-item" class="menu-trigger menu-item" id="_ht_active_hes" on-tap="toggleSelectAll" elevation="">
									<div class="one-line-menu list-title"><span>[[localize('act_hea_pro','Active Health Problems',language)]]</span></div>
									<paper-icon-button class="menu-item-icon" icon="hardware:keyboard-arrow-down" on-tap="toggleMenu" hover="none"></paper-icon-button>
								</paper-item>
								<paper-listbox id="ahelb" class="menu-content sublist" selectable="ht-pat-he-tree-detail" multi="" toggle-shift="" on-selected-items-changed="selectedMainElementItemsChanged">
									<template is="dom-if" if="[[!activeHealthElements.length]]">
										<paper-item class="menu-item  list-info"><div class="one-line-menu">[[localize('no_act_hea_ele','No active health elements',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addHealthElement"></paper-icon-button></paper-item>
									</template>
									<template id="activeHesDomRepeat" is="dom-repeat" items="[[activeHealthElements]]" as="he">
										<ht-pat-he-tree-detail api="[[api]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" id="[[getHeId(he)]]" he="[[he]]" selected="[[_isItemInArray(he,selectedHealthcareElements,selectedHealthcareElements.*)]]" on-selection-change="handleSelectionChange" on-edit-he="_editHealthElement" on-activate-he="_activate" on-archive-he="_archive" on-inactivate-he="_inactivate"></ht-pat-he-tree-detail>
									</template>
									<template is="dom-if" if="[[activeHealthElements.length]]">
									<paper-item class="menu-item sublist-footer"><div class="one-line-menu">[[localize('add_hea_ele','Add health element',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addHealthElement"></paper-icon-button></paper-item>
									</template>
								</paper-listbox>
							</collapse-button>
							<collapse-button id="cb_ihelb">
								<paper-item slot="sublist-collapse-item" class="menu-trigger menu-item" id="_ht_inactive_hes" on-tap="toggleSelectAll" elevation="">
									<div class="one-line-menu list-title"><span>[[localize('med_ant','Medical antecedents',language)]]</span></div>
									<paper-icon-button class="menu-item-icon" icon="hardware:keyboard-arrow-down" on-tap="toggleMenu"></paper-icon-button>
								</paper-item>
								<paper-listbox id="ihelb" class="menu-content sublist" selectable="ht-pat-he-tree-detail" multi="" toggle-shift="" on-selected-items-changed="selectedMainElementItemsChanged">
									<template is="dom-if" if="[[!inactiveHealthElements.length]]">
										<paper-item class="menu-item list-info"><div class="one-line-menu">[[localize('no_med_ant','No medical antecedent',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addInactiveHealthElement"></paper-icon-button></paper-item>
									</template>
									<template id="inactiveHesDomRepeat" is="dom-repeat" items="[[inactiveHealthElements]]" as="he">
										<ht-pat-he-tree-detail api="[[api]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" id="[[getHeId(he)]]" he="[[he]]" selected="[[_isItemInArray(he,selectedHealthcareElements,selectedHealthcareElements.*)]]" on-selection-change="handleSelectionChange" on-edit-he="_editHealthElement" on-activate-he="_activate" on-archive-he="_archive" on-inactivate-he="_inactivate"></ht-pat-he-tree-detail>
									</template>
									<template is="dom-if" if="[[inactiveHealthElements.length]]">
									<paper-item class="menu-item sublist-footer"><div class="one-line-menu">[[localize('add_med_ant','Add medical antecedent',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addInactiveHealthElement"></paper-icon-button></paper-item>
									</template>
								</paper-listbox>
							</collapse-button>
							<collapse-button id="cb_frhelb">
								<paper-item slot="sublist-collapse-item" id="_svc_group_familyrisks" class="menu-trigger menu-item" on-tap="toggleSelectAll">
									<div class="one-line-menu list-title">[[localize('fam_ris','Family risks',language)]]</div>
									<paper-icon-button class="menu-item-icon" icon="hardware:keyboard-arrow-down" on-tap="toggleMenu"></paper-icon-button>
								</paper-item>
								<paper-listbox id="frhelb" class="menu-content sublist" selectable="ht-pat-he-tree-detail" multi="" toggle-shift="" on-selected-items-changed="selectedMainElementItemsChanged">
									<template is="dom-if" if="[[!familyrisks.length]]">
										<paper-item class="menu-item list-info"><div class="one-line-menu">[[localize('no_fam_ris','No family risks',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addHealthElement" data-label="Family risk" data-tags="CD-ITEM|familyrisk|1.0"></paper-icon-button></paper-item>
									</template>
									<template is="dom-repeat" items="[[familyrisks]]" as="risk">
										<ht-pat-he-tree-detail api="[[api]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" id="[[getHeId(risk)]]" he="[[risk]]" selected="[[_isItemInArray(risk,selectedHealthcareElements,selectedHealthcareElements.*)]]" on-selection-change="handleSelectionChange" on-edit-he="_editHealthElement" on-activate-he="_activate" on-archive-he="_archive" on-inactivate-he="_inactivate"></ht-pat-he-tree-detail>
									</template>
									<template is="dom-if" if="[[familyrisks.length]]">
										<paper-item class="menu-item sublist-footer"><div class="one-line-menu">[[localize('add_fam_ris','Add family risk',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addHealthElement" data-label="Family risk" data-tags="CD-ITEM|familyrisk|1.0"></paper-icon-button></paper-item>
									</template>
								</paper-listbox>
							</collapse-button>
							<collapse-button id="cb_rhelb">
								<paper-item slot="sublist-collapse-item" id="_svc_group_risks" class="menu-trigger menu-item" on-tap="toggleSelectAll">
									<div class="one-line-menu list-title">[[localize('ris','Risks',language)]]</div>
									<paper-icon-button class="menu-item-icon" icon="hardware:keyboard-arrow-down" on-tap="toggleMenu"></paper-icon-button>
								</paper-item>
								<paper-listbox id="rhelb" class="menu-content sublist" selectable="ht-pat-he-tree-detail" multi="" toggle-shift="" on-selected-items-changed="selectedMainElementItemsChanged">
									<template is="dom-if" if="[[!risks.length]]">
										<paper-item class="menu-item list-info"><div class="one-line-menu">[[localize('no_ris','No risks',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addHealthElement" data-label="Risks" data-tags="CD-ITEM|risk|1.0"></paper-icon-button></paper-item>
									</template>
									<template is="dom-repeat" items="[[risks]]" as="risk">
										<ht-pat-he-tree-detail api="[[api]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" id="[[getHeId(risk)]]" he="[[risk]]" selected="[[_isItemInArray(risk,selectedHealthcareElements,selectedHealthcareElements.*)]]" on-selection-change="handleSelectionChange" on-edit-he="_editHealthElement" on-activate-he="_activate" on-archive-he="_archive" on-inactivate-he="_inactivate"></ht-pat-he-tree-detail>
									</template>
									<template is="dom-if" if="[[risks.length]]">
									<paper-item class="menu-item sublist-footer"><div class="one-line-menu">[[localize('add_ris','Add risk',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addHealthElement" data-label="Risks" data-tags="CD-ITEM|risk|1.0"></paper-icon-button></paper-item>
									</template>
								</paper-listbox>
							</collapse-button>
							<collapse-button id="cb_alhelb">
								<paper-item slot="sublist-collapse-item" id="_svc_group_allergies" class="menu-trigger menu-item" on-tap="toggleSelectAll">
									<div class="one-line-menu list-title">[[localize('aller','Allergies',language)]]</div>
									<paper-icon-button class="menu-item-icon" icon="hardware:keyboard-arrow-down" on-tap="toggleMenu"></paper-icon-button>
								</paper-item>
								<paper-listbox id="alhelb" class="menu-content sublist" selectable="ht-pat-he-tree-detail" multi="" toggle-shift="" on-selected-items-changed="selectedMainElementItemsChanged">
									<template is="dom-if" if="[[!allergies.length]]">
										<paper-item class="menu-item list-info"><div class="one-line-menu">[[localize('no_all','No allergies',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addHealthElement" data-label="Allergies" data-tags="CD-ITEM|allergy|1.0"></paper-icon-button></paper-item>
									</template>
									<template is="dom-repeat" items="[[allergies]]" as="allergy">
										<ht-pat-he-tree-detail api="[[api]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" id="[[getHeId(allergy)]]" he="[[allergy]]" selected="[[_isItemInArray(allergy,selectedHealthcareElements,selectedHealthcareElements.*)]]" on-selection-change="handleSelectionChange" on-edit-he="_editHealthElement" on-activate-he="_activate" on-archive-he="_archive" on-inactivate-he="_inactivate"></ht-pat-he-tree-detail>
									</template>
									<template is="dom-if" if="[[allergies.length]]">
										<paper-item class="menu-item sublist-footer"><div class="one-line-menu">[[localize('add_all','Add allergy',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addHealthElement" data-label="Allergies" data-tags="CD-ITEM|allergy|1.0"></paper-icon-button></paper-item>
									</template>
								</paper-listbox>
							</collapse-button>
							<collapse-button>
								<paper-item slot="sublist-collapse-item" id="_svc_group_medications" class="menu-trigger menu-item" on-tap="toggleSelectAll">
									<div class="one-line-menu list-title">[[localize('med','Medication',language)]]</div>
									<paper-icon-button class="menu-item-icon" icon="hardware:keyboard-arrow-down" on-tap="toggleMenu"></paper-icon-button>
								</paper-item>
								<paper-listbox id="mhelb" class="menu-content sublist" multi="" toggle-shift="" selected-items="{{selectedMedications}}">
									<template is="dom-if" if="[[!medications.length]]">
										<paper-item class="menu-item list-info"><div class="one-line-menu">[[localize('no_med','No medications',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addService" data-label="Medications" data-tags="CD-ITEM|medication|1.0"></paper-icon-button></paper-item>
									</template>
									<template is="dom-repeat" items="[[medications]]" as="medication">
										<paper-item class="menu-item" id="_svc_[[medication.id]]">
											<div class="one-line-menu">
												[[shortServiceDescription(medication, language)]]
											</div>
										</paper-item>
									</template>
									<template is="dom-if" if="[[medications.length]]">
										<paper-item class="menu-item sublist-footer"><div class="one-line-menu">[[localize('add_med','Add medication',language)]]</div><paper-icon-button class="menu-item-icon" icon="icons:add" on-tap="_addService" data-label="Medications" data-tags="CD-ITEM|medication|1.0"></paper-icon-button></paper-item>
									</template>
								</paper-listbox>
							</collapse-button>
							<collapse-button>
								<paper-item slot="sublist-collapse-item" class="menu-trigger menu-item" id="_ht_archived_hes" on-tap="toggleSelectAll" elevation="">
									<div class="one-line-menu list-title"><span>[[localize('arc','Archive',language)]]</span></div>
									<paper-icon-button class="menu-item-icon" icon="hardware:keyboard-arrow-down" on-tap="toggleMenu"></paper-icon-button>
								</paper-item>
								<paper-listbox id="arhelb" class="menu-content sublist" selectable="ht-pat-he-tree-detail" multi="" toggle-shift="" on-selected-items-changed="selectedMainElementItemsChanged">
									<template is="dom-if" if="[[!archivedHealthElements.length]]">
										<paper-item class="menu-item list-info"><div class="one-line-menu">[[localize('no_arc_hea_ele','No archived health elements',language)]]</div></paper-item>
									</template>
									<template id="archivedHesDomRepeat" is="dom-repeat" items="[[archivedHealthElements]]" as="he">
										<ht-pat-he-tree-detail api="[[api]]" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" id="[[getHeId(he)]]" he="[[he]]" selected="[[_isItemInArray(he,selectedHealthcareElements,selectedHealthcareElements.*)]]" on-selection-change="handleSelectionChange" on-edit-he="_editHealthElement" on-activate-he="_activate" on-archive-he="_archive" on-inactivate-he="_inactivate"></ht-pat-he-tree-detail>
									</template>
								</paper-listbox>
							</collapse-button>
					</div>
				</paper-material>
				<div class="add-btn-container"><paper-button class="add-btn" on-tap="_addHealthElement">[[localize('add_heal_elem','Add Health Element',language)]]</paper-button></div>
			</div>
			<template is="dom-if" if="[[!isAdminSelected(selectedAdminOrCompleteFileIndex)]]" restamp="">
				<div class="second-panel">
					<div><filter-panel id="contactFilterPanel" items="[[secondPanelItems]]" search-string="{{contactSearchString}}" selected-filters="{{contactFilters}}" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]"></filter-panel></div>
					<div class="contacts-container" on-scroll="openToast">
						<paper-listbox id="_contacts_listbox" focused="" multi="" toggle-shift="" selectable="paper-material" selected-values="{{selectedContactIds}}" attr-for-selected="id">
							<template is="dom-if" if="[[events.length]]">
								<span class="contact-year" on-click="openToast">[[localize('to_do','To Do',language)]]</span>
								<paper-listbox id="_events_listbox" class="todo-list">
									<template is="dom-repeat" items="[[events]]" as="e">
										<paper-item id="_svc_[[e.id]]" class\$="todo-item [[_lateEventCssClass(e)]]">
											<h4><label class="todo-due-date">[[_dateFormat(e.valueDate)]]</label>[[shortServiceDescription(e)]]</h4>
											<div class="todo-actions">
												<paper-icon-button icon="clear" on-tap="clearEvent"></paper-icon-button>
												<paper-icon-button icon="done" on-tap="completeEvent"></paper-icon-button>
											</div>
										</paper-item>
									</template>
								</paper-listbox>
							</template>
							<template is="dom-if" if="[[!events.length]]">
							</template>
							<template is="dom-repeat" items="[[contactYears]]" as="contactYear">
								<span class="contact-year" on-click="openToast">
									[[contactYear.year]]
								</span>
								<template is="dom-repeat" items="[[contactYear.contacts]]" as="contact" filter="[[contactFilter(selectedHealthcareElements, selectedHealthcareElements.*, timeSpanStart, timeSpanEnd, contactSearchString, contactFilters, contactFilters.*, currentContact,contactStatutChecked.*)]]" sort="compareContacts">
									<paper-material id="ctc_[[contact.id]]" elevation="0" class\$="layout vertical contact [[_isLatestYearContact(contactYear, contactYears)]] [[_contactClasses(contact, contact.closingDate)]]" on-click="openToast">
										<paper-item class="contact-text">
											<div class="contact-text-row contact-text-date">
												<label>[[_timeFormat(contact.openingDate)]] ([[_shortId(contact.id)]])</label>
												<label>[[hcp(contact)]]</label>
											</div>
											<div class="contact-text-row grey">
												<h4>[[contact.userDescr]]</h4>
												<template is="dom-repeat" items="[[highlightedServiceLabels(user)]]" as="label">
													<p>
														<template is="dom-repeat" items="[[serviceDescriptions(contact,label)]]" as="svcDesc">
															<template is="dom-if" if="[[!index]]">[[label]]:</template>
															<template is="dom-if" if="[[index]]"> ,</template>
															[[svcDesc]]
														</template>
													</p>

												</template>
											</div>
											<div class="contact-text-row label-container">
												<template is="dom-repeat" items="[[contact.healthElements]]" as="he">
													<label id="label_[[contact.id]]_[[getHeId(he)]]" class\$="colour-code [[he.colour]]"><span></span>[[he.descr]]</label>
													<paper-tooltip for="label_[[contact.id]]_[[getHeId(he)]]">[[he.descr]]</paper-tooltip>
												</template>
											</div>
										</paper-item>
										<template is="dom-if" if="[[!contact.closingDate]]">
											<paper-icon-button id="close-[[contact.id]]" class="menu-item-icon contact-icon" icon="icons:cancel" on-tap="closeContact"></paper-icon-button>
										</template>
									</paper-material>
								</template>
							</template>
						</paper-listbox>
					</div>
					<div class="toast-detector" on-mousemove="openToast"></div>
					<paper-toast id="selectionToast" class="fit-bottom">
						<paper-button class="selection-toast-button" name="select-today" role="button" tabindex="0" animated="" aria-disabled="false" elevation="0" on-tap="_selectToday">
							<iron-icon class="selection-toast-icon" icon="icure-svg-icons:select-today"></iron-icon>
							Select Today
						</paper-button>
						<paper-button class="selection-toast-button" name="select-six-months" role="button" tabindex="0" animated="" aria-disabled="false" elevation="0" on-tap="_select6Months">
							<iron-icon class="selection-toast-icon" icon="icure-svg-icons:select-six-months"></iron-icon>
							Last 6 Months
						</paper-button>
						<paper-button class="selection-toast-button" name="select-all" role="button" tabindex="0" animated="" aria-disabled="false" elevation="0" on-tap="_selectAll">
							<iron-icon class="selection-toast-icon" icon="icure-svg-icons:select-all"></iron-icon>
							Select All
						</paper-button>
						<paper-button class="selection-toast-button" name="select-all" role="button" tabindex="0" animated="" aria-disabled="false" elevation="0" on-tap="_selectMoreOptions">
							<iron-icon class="selection-toast-icon" icon="icons:add"></iron-icon>
							{{localize("more","More",language)}}
						</paper-button>
					</paper-toast>
					<template is="dom-if" if="[[!currentContact]]">
						<div class="new-ctc-btn-container"><paper-button class="add-btn" on-tap="newContact">[[localize('new_con','New Contact',language)]]</paper-button></div>
					</template>
				</div>
				<ht-pat-detail-ctc-detail-panel id="ctcDetailPanel" contacts="[[selectedContacts]]" all-contacts="[[contacts]]" health-elements="[[healthElements]]" main-health-elements="[[_concat(activeHealthElements, allergies, risks, inactiveHealthElements, familyrisks)]]" api="[[api]]" i18n="[[i18n]]" user="[[user]]" patient="[[patient]]" language="[[language]]" resources="[[resources]]" current-contact="[[currentContact]]" hidden-sub-contacts-id="[[hiddenSubContactsId]]" on-select-current-contact="_selectCurrentContact" on-change="formsChanged" on-must-save-contact="_saveContact"></ht-pat-detail-ctc-detail-panel>
			</template>

		</div>

		<health-problem-selector id="add-healthelement-dialog" api="[[api]]" i18n="[[i18n]]" resources="[[resources]]" language="[[language]]" data-provider="[[_healthElementsSelectorDataProvider()]]" on-entity-selected="_addedHealthElementSelected" entity-type="[[localize('hp','Health Problem',language)]]" entity="{{heEntity}}" ok-label="[[localize('cre','Create',language)]]">
			<div class="extraDialogFields" slot="suffix">

			</div>
		</health-problem-selector>

		<health-problem-selector id="edit-healthelement-dialog" api="[[api]]" i18n="[[i18n]]" resources="[[resources]]" language="[[language]]" on-open-health-problem="_composeHistory" data-provider="[[_healthElementsSelectorDataProvider()]]" on-entity-selected="_editedHealthElementSelected" entity-type="[[localize('hp','Health Problem',language)]]" entity="{{heEntity}}" ok-label="[[localize('modify','Modify',language)]]">
			<div class="extraDialogFields" slot="suffix">
					<div class="history">
						<div class="history-icon">
							<iron-icon icon="history"></iron-icon>
						</div>
						<div class="history-txt">
							[[localize('his','History',language)]]
						</div>
					</div>
					<template is="dom-repeat" items="[[historyElement]]" as="hhe">
						<h4>{{hhe.modified}} {{hhe.descr}}</h4>
						<div>
							<b>[[localize('st_da','Start Date',language)]]:</b> {{hhe.openingDate}}
							<template is="dom-if" if="[[_checkClosingDate(hhe.closingDate)]]">
								<b>[[localize('en_da','End Date',language)]]:</b> {{hhe.closingDate}}
							</template>

						</div>
						<div>
							<template is="dom-if" if="[[_checkIfPresent(hhe.nature)]]">
								<b>[[localize('nat','Nature',language)]]:</b> {{_getDataTrad(hhe.nature)}};
							</template>

							<template is="dom-if" if="[[_checkIfPresent(hhe.certainty)]]">
								<b>[[localize('cert','Certainty',language)]]:</b> {{_getDataTrad(hhe.certainty)}};
							</template>

							<template is="dom-if" if="[[_checkIfPresent(hhe.severity)]]">
								<b>[[localize('sev','Severity',language)]]:</b> {{_getDataTrad(hhe.severity)}};
							</template>

							<template is="dom-if" if="[[_checkIfPresent(hhe.temporality)]]">
								<b>[[localize('temp','Temporality',language)]]:</b> {{_getDataTrad(hhe.temporality)}};
							</template>
						</div>
					</template>
			</div>
		</health-problem-selector>

		<entity-selector id="add-service-dialog" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" columns="[[_servicesSelectorColumns()]]" data-provider="[[_servicesSelectorDataProvider(editedSvcLabel)]]" on-entity-selected="_addedOrEditedServiceSelected" entity-type="[[editedSvcLabel]]" entity="{{svcEntity}}" ok-label="[[localize('cre','Create',language)]]">
			<div class="extraDialogFields" slot="suffix">
				<paper-input label="Description" value="[[shortServiceDescription(svcEntity, language)}}" on-value-changed="_svcEntityContentChanged"></paper-input>
			</div>
		</entity-selector>

		<entity-selector id="edit-service-dialog" i18n="[[i18n]]" language="[[language]]" resources="[[resources]]" columns="[[_servicesSelectorColumns()]]" data-provider="[[_servicesSelectorDataProvider(editedSvcLabel)]]" on-entity-selected="_addedOrEditedServiceSelected" entity-type="[[editedSvcLabel]]" entity="{{svcEntity}}" ok-label="[[localize('modify','Modify',language)]]">
			<div class="extraDialogFields" slot="suffix">
				<paper-input label="Description" value="[[shortServiceDescription(svcEntity, language)}}" on-value-changed="_svcEntityContentChanged"></paper-input>
			</div>
		</entity-selector>

		<paper-dialog id="consentDialog">
			<h2 class="modal-title">[[localize('cons_req','Patient informed consent',language)]]</h2>
			<template is="dom-if" if="{{!patientConsent.consent}}">
				<div id="legaltext"></div>
			</template>
			<paper-input id="idCardNo" label="[[localize('eid_no','eID Card Number',language)]]" value="{{eidCardNumber}}"></paper-input>
			<paper-input id="isiCardNo" label="[[localize('isi_no','ISI+ Card Number',language)]]" value="{{isiCardNumber}}"></paper-input>
			<!--<paper-button on-tap="_getConsent">[[localize('get_cons','Get consent',language)]]</paper-button>-->
			<div class="buttons">
				<template is="dom-if" if="{{patientConsent.consent}}">
					<paper-button on-tap="_revokeConsent" dialog-confirm="">[[localize('revoke_cons','Revoke consent',language)]]</paper-button>
				</template>
				<template is="dom-if" if="{{!patientConsent.consent}}">
					<paper-button on-tap="_registerConsent" dialog-confirm="">[[localize('register_cons','Register consent',language)]]</paper-button>
				</template>
				<paper-button class="modal-button--save" dialog-confirm="" autofocus="">[[localize('can','Cancel',language)]]</paper-button>
			</div>
		</paper-dialog>

		<paper-dialog id="therLinkDialog">
			<h2 class="modal-title">[[localize('tl_req','Therapeutic Link',language)]]</h2>
			<div id="legaltextTL"></div>
            <vaadin-grid id="ther-link-list" class="material" overflow="bottom" items="[[currentTherLinks]]" active-item="{{selectedTherLink}}">
                <vaadin-grid-column width="120px">
                    <template class="header">
                        <vaadin-grid-sorter path="description">[[localize('hcp_ident','Hcp',language)]]</vaadin-grid-sorter>
                    </template>
                    <template>
                        <div class="cell frozen">[[_hcpIdent(item)]]</div>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column width="120px">
                    <template class="header">[[localize('pat_ident','Patient',language)]]</template>
                    <template>
                        <div class="cell frozen">[[_patIdent(item)]]</div>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column width="80px">
                    <template class="header">[[localize('sta_dat','Start Date',language)]]</template>
                    <template>
                        <div class="cell frozen">[[_startDate(item)]]</div>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column width="80px">
                    <template class="header">[[localize('end_dat','End Date',language)]]</template>
                    <template>
                        <div class="cell frozen">[[_endDate(item)]]</div>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column width="80px">
                    <template class="header">[[localize('tl_type','Type',language)]]</template>
                    <template>
                        <div class="cell frozen">[[_tlType(item)]]</div>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column width="80px">
                    <template class="header">[[localize('status','Status',language)]]</template>
                    <template>
                        <div class="cell frozen">[[_tlStatus(item)]]</div>
                    </template>
                </vaadin-grid-column>
            </vaadin-grid>
			<template is="dom-if" if="[[!haveTherLinks]]">
				<paper-input id="idCardNo" label="[[localize('eid_no','eID Card Number',language)]]" value="{{eidCardNumber}}"></paper-input>
				<paper-input id="isiCardNo" label="[[localize('isi_no','ISI+ Card Number',language)]]" value="{{isiCardNumber}}"></paper-input>
			</template>
			<!--<paper-button on-tap="_getTherLinks">[[localize('get_TL','Get Therapeutic link',language)]]</paper-button>-->
			<div class="buttons">
				<paper-button on-tap="_revokeTherLink" hidden="[[!haveTherLinks]]" dialog-confirm="">[[localize('revoke_tl','Revoke Therapeutic Link',language)]]</paper-button>
				<paper-button enabled="false" on-tap="_registerTherLink" hidden="[[haveTherLinks]]" dialog-confirm="">[[localize('reg_tl','Register Therapeutic Link',language)]]</paper-button>
				<paper-button class="modal-button--save" dialog-confirm="" autofocus="">[[localize('can','Cancel',language)]]</paper-button>
			</div>
		</paper-dialog>

		<paper-dialog id="hubDialog">
			<h2 class="modal-title">[[localize('hub','Hubs',language)]]</h2>
			<!--<paper-input id="hcpHubConsent" label="[[localize('hub_hcp_cons','Hcp Hub consent',language)]]" value="{{_getHubHcpConsentDesc(hcpHubConsent)}}"></paper-input>-->
			<template is="dom-if" if="[[_patientHasHubConsent(patientHubConsent)]]">
				<paper-input id="patientHubConsent" label="[[localize('pat_hub_cons','Pat Hub consent',language)]]" value="{{_getHubPatientConsentDesc(patientHubConsent)}}"></paper-input>
				<paper-input id="patientHubTherLink" label="[[localize('hub_tl','Hub therapeutic link',language)]]" value="{{patientHubTherLink}}"></paper-input>

				<vaadin-grid id="transaction-list" class="material" overflow="bottom" items="[[hubTransactionList]]" active-item="{{selectedTransaction}}">
					<vaadin-grid-column width="120px">
						<template class="header">[[localize('trans_typ','Type',language)]]</template>
						<template>
							<div class="cell frozen">[[_transactionType(item)]]</div>
						</template>
					</vaadin-grid-column>
					<vaadin-grid-column width="120px">
						<template class="header">
							<vaadin-grid-sorter path="description">[[localize('trans_id','Id',language)]]</vaadin-grid-sorter>
						</template>
						<template>
							<div class="cell frozen">[[_transactionId(item)]]</div>
						</template>
					</vaadin-grid-column>
					<vaadin-grid-column width="80px">
						<template class="header">[[localize('trans_dat','Date',language)]]</template>
						<template>
							<div class="cell frozen">[[_transactionDate(item)]]</div>
						</template>
					</vaadin-grid-column>
					<vaadin-grid-column width="80px">
						<template class="header">[[localize('trans_aut','Author',language)]]</template>
						<template>
							<div class="cell frozen">[[_transactionAuthor(item)]]</div>
						</template>
					</vaadin-grid-column>
				</vaadin-grid>

				<paper-input id="currentTrans" label="[[localize('hub_sel_tra','Selected transaction',language)]]" value="{{_transactionId(selectedTransaction)}}"></paper-input>
				<paper-button on-tap="_showTransaction">get transaction</paper-button>
			</template>
			<template is="dom-if" if="[[!_patientHasHubConsent(patientHubConsent)]]">
				<paper-input id="idCardNo" label="[[localize('eid_no','eID Card Number',language)]]" value="{{eidCardNumber}}"></paper-input>
				<paper-input id="isiCardNo" label="[[localize('isi_no','ISI+ Card Number',language)]]" value="{{isiCardNumber}}"></paper-input>
			</template>
			<!--<paper-button on-tap="_getConsent">[[localize('get_cons','Get consent',language)]]</paper-button>-->
			<div class="buttons">
				<!--<paper-button on-tap="_revokeConsent" dialog-confirm>[[localize('revoke_cons','Revoke consent',language)]]</paper-button>-->
				<template is="dom-if" if="[[!_patientHasHubConsent(patientHubConsent)]]">
					<paper-button on-tap="_registerHubPatConsent" dialog-confirm="">[[localize('register_cons','Register consent',language)]]</paper-button>
					<paper-button on-tap="_registerHubPatientTherapeuticLink" dialog-confirm="">[[localize('register_therlink','Register therapeutic link',language)]]</paper-button>
				</template>

				<template is="dom-if" if="[[_patientHasHubConsent(patientHubConsent)]]">
					<paper-button on-tap="_revokeHubPatientTherapeuticLink" dialog-confirm="">[[localize('revoke_therlink','Revoke therapeutic link',language)]]</paper-button>
				</template>

				<paper-button class="modal-button--save" dialog-dismiss="" autofocus="">[[localize('can','Cancel',language)]]</paper-button>
			</div>
		</paper-dialog>

		<paper-dialog id="transactionDialog">
			<h2 class="modal-title">[[localize('trn','Transaction',language)]] [[_transactionId(selectedTransaction)]]</h2>
            <div id="kmehr_slot"></div>
		</paper-dialog>

		<paper-dialog id="select-more-options-dialog">
			<div class="horizontal">
				<label style="display:flex;"><b>[[localize("slctBtw2Date","Select between 2 dates",language)]]</b></label>
				<vaadin-date-picker label="[[localize('startDate','Start date',language)]]" i18n="[[i18n]]" value="{{dateStartAsString}}"></vaadin-date-picker>
				<vaadin-date-picker label="[[localize('endDate','End date',language)]]" i18n="[[i18n]]" value="{{dateEndAsString}}"></vaadin-date-picker>
			</div>
			<div class="horizontal">
				<label style="display:flex;"><b>[[localize('sta','Status',language)]]</b></label>
				<paper-radio-group selected="{{statutFilter}}">
					<paper-radio-button name="all">[[localize('all','All',language)]]</paper-radio-button>
					<paper-radio-button name="active-relevant">[[localize('act_rel','Active relevant',language)]]</paper-radio-button>
					<paper-radio-button name="active-irrelevant">[[localize('act_irr','Active irrelevant',language)]]</paper-radio-button>
					<paper-radio-button name="inactive">[[localize('ina','Inactive',language)]]</paper-radio-button>
					<paper-radio-button name="archived">[[localize('archiv','Archived',language)]]</paper-radio-button>
				</paper-radio-group>
			</div>
		</paper-dialog>
`;
  }

  static get is() {
      return 'ht-pat-detail';
	}

  static get properties() {
      return {
          api: {
              type: Object
          },
          user: {
              type: Object
          },
          patient: {
              type: Object,
              notify: true
          },
          patientInsurance: {
              type: Object,
              value: function () {
                  return {};
              }
          },
          patientInsurability: {
              type: Object,
              value: function () {
                  return {};
              }
          },
          patientConsent:{
              type: Object,
              value: function(){
                  return{};
              }
          },
          eidCardNumber:{
              type: String
          },
          isiCardNumber:{
              type: String
          },
          hubEndPoint:{
              type: String,
              value:'https://acchub.reseausantewallon.be/HubServices/IntraHub/V3/IntraHub.asmx'
          },
          hcpHubConsent:{
              type: Object
          },
          patientHubConsent:{
              type: Object
          },
          patientHubTherLink:{
              type: Object
          },
          hcpZip:{
              type:String,
              value:'1000'
          },
          hubTransactionList:{
              type: Array,
              value: function(){
                  return [];
              }
          },
          selectedTransaction:{
              type: Object
          },
          selectedAdminOrCompleteFileIndex: {
              type: Object,
              observer: 'selectedAdminFileChanged',
              value: null
          },
          selectedHealthcareElements: {
              type: Array,
              value: function () {
                  return [];
              }
          },
          selectedFamily: {
              type: Array,
              value: function () {
                  return [];
              }

          },
          events: {
              type: Array,
              value: function () {
                  return [];
              }

          },
          selectedRisks: {
              type: Array,
              value: function () {
                  return [];
              }

          },
          selectedAllergies: {
              type: Array,
              value: function () {
                  return [];
              }

          },
          selectedLocalize: {
              type: Array,
              value: function () {
                  return [];
              }
          },
          selected: {
              type: Boolean,
              value: false
          },
          showFiltersPanel: {
              type: Boolean,
              value: false
          },
          currentContact: {
              type: Object,
              value: null
          },
          contactSearchString: {
              type: String,
              value: null
          },
          showDetailsFiltersPanel: {
              type: Boolean,
              value: false
          },
          isLatestYear: {
              type: Boolean,
              value: false
          },
          selectedContactIds: {
              type: Array,
              value: function () {
                  return [];
              }
          },
          itemSelected: {
              type: Boolean,
              value: false
          },
          currentTherLinks: {
              type: Array,
              observer: 'currentTherLinksChanged',
              value: function () {
                  return [];
              }
          },
          haveTherLinks:{
              type: Boolean,
              value: false
          },
          selectedTherLink: {
              type: Object,
              value: null
          },
          secondPanelItems: {
              type: Array,
              value: function () {
                  return [{ icon: "icure-svg-icons:laboratory", filter:[{type:'CD-TRANSACTION',code:['labresult']}] , title: {en: "Lab Results", fr:"Résultats du laboratoires", nl:"Lab Results"}, id: "LabResults" },
                          { icon: "icure-svg-icons:imaging", filter:[{type:'CD-TRANSACTION',code:['result']},{type:'CD-HCPARTY',code:['deptradiology']}], title: {en: "Imaging", fr:"Imaging", nl:"Imaging"}, id: "Imaging" },
                          { icon: "icure-svg-icons:stethoscope", filter:[{type:'CD-ENCOUNTER',code:['consultation']}], title: {en: "Consultation", fr:"Consultation", nl:"Consultation"}, id: "Consultation" },
                          { icon: "editor:insert-drive-file", filter:[{type:'CD-TRANSACTION',code:['contactreport']}], title: {en: "Protocol", fr:"Protocol", nl:"Protocol"}, id: "Protocol" },
                          { icon: "icure-svg-icons:prescription", filter:[{type:'CD-ITEM',code:['treatment']}], title: {en: "Prescription",  fr:"Prescription", nl:"Prescription"}, id: "Prescription" }];
              }
          },
          i18n: {
              type: Object
          },
          dateStartAsString :{
              type : String,
              value : null,
              observer: '_selectBetweenTwoDates'
          },
          dateEndAsString :{
              type : String,
              value : null,
              observer: '_selectBetweenTwoDates'
          },
          statutFilter :{
              type : String,
              value : "all",
              observer : 'checkingStatus'
          },
          contactStatutChecked : {
              type: Array,
              value: []
          },
          hiddenSubContactsId: {
              type: Object,
              value: {}
          },
          historyElement:{
              type: Object
          }
      };
	}

  static get observers() {
      return ['patientOpened(patient.id,api,user)', 'patientChanged(api,user,patient)', 'selectedHealthcareElementsSpliced(selectedHealthcareElements.splices)', 'selectedContactIdsChanged(selectedContactIds.*)'];
	}

  constructor() {
      super();
	}

  ready() {
      super.ready();
  }

  selectedContactIdsChanged() {
      const ctcDetailPanel = this.shadowRoot.querySelector('#ctcDetailPanel');
      ctcDetailPanel && ctcDetailPanel.flushSave();

      const allContacts = _.concat(this.currentContact ? [this.currentContact] : [], this.contacts)
      this.set('selectedContacts', this.selectedContactIds.map(i => allContacts.find(c => c && c.id === i.substr(4) /* skip ctc_ */)))
	}

  _shortId(id) {
      return id && id.substr(0, 8);
	}

  _timeFormat(date) {
      return this.api.moment(date).format(date > 99991231 ? 'DD/MM/YYYY HH:mm' : 'DD/MM/YYYY');
	}

  _dateFormat(date) {
      return this.api.moment(date).format('DD/MM/YYYY');
	}

  _contactClasses(contact) {
      return contact.closingDate ? '' : 'current-contact';
	}

  _openConsentDialog(e) {
      e.stopPropagation();
      var legaltext = this.root.querySelector('#legaltext')
      if(legaltext != null) {
          legaltext.innerHTML = this.localize('cons_legal', 'Informed consent legal text ...', this.language)
      }
      this.$.consentDialog.open();
  }

  _openTherLinkDialog(e) {
	    e.stopPropagation();
      this.selectedTherLink = null;
	    this._getTherLinks();
      //this.root.querySelector('#legaltext').innerHTML = this.localize('cons_legal', 'Informed consent legal text ...', this.language)
      this.$.therLinkDialog.open();
	}

  _openHubDialog(e){
      e.stopPropagation();
      this._getHubHcpConsent();
      this._getHubPatientConsent();
      this._getHubTherapeuticLinks();
      this._getHubTransactionList();
      this.$.hubDialog.open();
  }

  _hcpIdent(tl){
	    return tl.therapeuticLink.hcParty.nihii || ''
  }

  _patIdent(tl){
      return tl.therapeuticLink.patient.inss || ''
  }

  _startDate(tl){
      return tl.therapeuticLink.startDate || ''
  }

  _endDate(tl){
      return tl.therapeuticLink.endDate || ''
  }

  _tlStatus(tl){
      return tl.therapeuticLink.status || ''
  }

  _tlType(tl){
      return tl.therapeuticLink.type || ''
  }

  _transactionId(tr){
	    this.set('selectedTransaction', tr);
	    if(tr) {
          const idLocal = tr.ids.find(id => id.s === "LOCAL");
          if (idLocal) {
              return idLocal.value;
          }
          else {
              return "--";
          }
      }
      else
      {
          return "";
      }
	}

  _transactionType(tr){
      const cdTransType = tr.cds.find(cd => cd.s === "CD-TRANSACTION");
      if(cdTransType){
          return cdTransType.value;
      }
      else {
          return "--";
      }
	}

  _transactionDate(tr){
      var d = new Date(0);
      d.setUTCMilliseconds(tr.date);
      return d.toDateString();
  }

  _transactionAuthor(tr){
	    var authorRes = "--";
	    const author = tr.author.hcparties.find(hcp => hcp.familyname);
      if(author) {
          authorRes = author.familyname + ' ' + author.firstname;
      }

      const dept = tr.author.hcparties.find(hcp => hcp.cds.find(cd => cd.s === "CD-HCPARTY"))
      if(dept){
          const cd = dept.cds.find(cd => cd.s === "CD-HCPARTY")
          authorRes += "/" + cd.value;
      }

      return authorRes;
      // if(tr.author.hcparties[1]){
      //     return tr.author.hcparties[1].familyname + ' ' + tr.author.hcparties[1].firstname;
      // }
      // else {
      //     return "author";
      // }
  }

  _patientHasHubConsent(cs){
	    if(cs.author.hcparties[0]){
	       return true;
      }
      else{
          return false;
      }
	}

  _getHubHcpConsentDesc(cs){
	    var desc = '';
	    //hub
      if(cs.author.hcparties[0]){
          desc += cs.author.hcparties[0].name + ' ';
      }
      //hcp
      desc += '[' + cs.hcparty.ids.find(id => id.s === 'ID-HCPARTY').value + '] ';
      desc += cs.hcparty.ids.find(id => id.s === 'INSS').value;
      //sign
      desc += ' ' + this.api.moment( cs.signdate).format('DD/MM/YYYY');
      //revoke
      desc += ' ' + this.api.moment( cs.revokedate).format('DD/MM/YYYY');
      return desc;
	}

  _getHubHcpConsent(){
      //getHcpConsentUsingGET: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip)
      if (this.patient.ssin && this.api.tokenId) {
          return this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId)
                  .then(hcp =>
              this.api.fhc().Hubcontroller().getHcpConsentUsingGET(this.hubEndPoint, this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                  hcp.nihii, hcp.lastName, hcp.firstName, hcp.ssin, this.hcpZip)
      ).then(consentResp => {
              if (consentResp) {
                  this.set('hcpHubConsent', consentResp)
                  return consentResp;
              } else {
                  return null;
      }
      }
      )
      } else {
          return Promise.resolve(null)
      }
  }

  _getHubPatientConsentDesc(cs){
	    var desc = '';
	    // author - sign date - type
      // author - fname lname niss nihii

      if(cs.cds.find(cd => cd.s === 'CD_CONSENTTYPE')){
          desc += cs.cds.find(cd => cd.s === 'CD_CONSENTTYPE').value + " : " ;
      }

      if(cs.author.hcparties[0]) {
          const hcp = cs.author.hcparties[0]
          desc += hcp.familyname + ' ' + hcp.firstname;
          desc += ' [' + hcp.ids.find(id => id.s === 'ID-HCPARTY').value + ']';
      }
      desc += ' ' + this.api.moment( cs.signdate).format('DD/MM/YYYY');
	    return desc;
	}

  _getHubPatientConsent(){
      //getPatientConsentUsingGET1: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, patientSsin)
      if (this.patient.ssin && this.api.tokenId) {
          return this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId)
                  .then(hcp =>
              this.api.fhc().Hubcontroller().getPatientConsentUsingGET1(this.hubEndPoint, this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                  hcp.nihii, hcp.lastName, hcp.firstName, hcp.ssin, this.hcpZip,
                  this.patient.ssin)
      ).then(consentResp => {
              if (consentResp) {
                  this.set('patientHubConsent', consentResp);
                  return consentResp;
              } else {
                  return null;
      }
      }
      )
      } else {
          return Promise.resolve(null)
      }
  }

  _registerHubPatientConsent(){
      //registerPatientConsentUsingPOST1: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, patientSsin, patientEidCardNumber)

  }

  _getHubTherapeuticLinks(){
      //getTherapeuticLinksUsingGET: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, patientSsin, therLinkType, from, to)
      if (this.patient.ssin && this.api.tokenId) {
          return this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId)
                  .then(hcp =>
              this.api.fhc().Hubcontroller().getTherapeuticLinksUsingGET(this.hubEndPoint, this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                  hcp.nihii, hcp.lastName, hcp.firstName, hcp.ssin, this.hcpZip,
                  this.patient.ssin, null, null, null)
      ).then(tlResp => {
              if (tlResp) {
                  this.set('patientHubTherLinks', tlResp);
                  return tlResp;
              } else {
                  return null;
      }
      }
      )
      } else {
          return Promise.resolve(null)
      }
  }

  _registerHubPatientTherapeuticLink(){
      //registerTherapeuticLinkUsingPOST: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, patientSsin, patientEidCardNumber)
      if (this.patient.ssin && this.api.tokenId) {
          this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId).then(hcp =>
              this.api.fhc().Hubcontroller().registerTherapeuticLinkUsingPOST(this.hubEndPoint, this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                  hcp.nihii, hcp.ssin, hcp.firstName, hcp.lastName,
                  this.patient.ssin, this.patient.firstName, this.patient.lastName, this.eidCardNumber)
          ).then(therLinkResp => {
                  if(therLinkResp.therapeuticLink) {
                      this.showPatientTherLinkState()
                      return(therLinkResp.therapeuticLink)
                  }
                  else{
                      return Promise.resolve(null)
                  }
              }
          )
      }
      else
      {
          return Promise.resolve(null)
      }
  }

  _revokeHubPatientTherapeuticLink(){
	    //not implemented yet
	}

  _getHubTransactionList(){
      //getTransactionsListUsingGET: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, patientSsin, from, to, authorNihii, authorSsin, isGlobal)
      if (this.patient.ssin && this.api.tokenId) {
          return this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId)
                  .then(hcp =>
              this.api.fhc().Hubcontroller().getTransactionsListUsingGET(this.hubEndPoint, this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                  hcp.nihii, hcp.lastName, hcp.firstName, hcp.ssin, this.hcpZip,
                  this.patient.ssin, null, null, null, null, null)
      ).then(tranResp => {
              if (tranResp) {
                  this.set('hubTransactionList', tranResp);
                  return tranResp;
              } else {
                  return null;
              }
        	}
        	)
      } else {
          return Promise.resolve(null)
      }
  }

  _showTransaction(){
	    this.$.transactionDialog.open();
      //this.shadowRoot.querySelector("#transaction_name").innerHTML = "" // erase previous title
      this.shadowRoot.querySelector("#kmehr_slot").innerHTML = "Loading..." // erase previous content
	    this._getHubTransaction().then(tranResp =>
	    {
          var slot = this.shadowRoot.querySelector("#kmehr_slot");
	        if(tranResp) {

              //this.shadowRoot.querySelector("#transaction_name").innerHTML = this._transactionId(this.selectedTransaction)

              const req = new XMLHttpRequest();

              req.onreadystatechange = function(event) {
                  if (this.readyState === XMLHttpRequest.DONE) {
                      if (this.status === 200) {

                          var xsltProcessor = new XSLTProcessor();
                          var xslStylesheet = this.responseXML;
                          xsltProcessor.importStylesheet(xslStylesheet);

                          var fragment = xsltProcessor.transformToFragment(tranResp, document);

                          slot.innerHTML = "";
                          slot.appendChild(fragment);

                      } else {
                          slot.innerHTML = "ERROR: XSLT not found";
                      }
                  }
              };

              var transtype =  this._transactionType(this.selectedTransaction);
              var xslt;
              if(transtype == "sumehr") {
                  xslt = "sumehr_to_html.xslt"
                  req.open("GET", xslt, true);
                  req.send(null);
              } else {
                  var slot = this.shadowRoot.querySelector("#kmehr_slot");
                  slot.innerHTML = "No visualizer implemented for transaction of type " + transtype
              }

          } else {
              slot.innerHTML = "No transaction found";
          }
      }
      )
	}

  _isTransactionSet(tr){
	   var cd = tr.cds.find(cd => cd.value==='gettransactionset');
	   if(cd){
	       return true;
	   } else {
	      return false;
	   }
	}

  _getHubTransaction(){
      //getTransactionUsingGET: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, ssin, sv, sl, value)
      if(this._isTransactionSet(this.selectedTransaction)) {
          return this._getHubTransactionSet();
      } else {
          if (this.patient.ssin && this.api.tokenId) {
              return this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId)
                  .then(hcp =>
                      this.api.fhc().Hubcontroller().getTransactionUsingGET(this.hubEndPoint, this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                          hcp.nihii, hcp.lastName, hcp.firstName, hcp.ssin, this.hcpZip,
                          this.patient.ssin, this.selectedTransaction.ids.find(id => id.s === 'LOCAL').sv, this.selectedTransaction.ids.find(id => id.s === 'LOCAL').sl,
                          this.selectedTransaction.ids.find(id => id.s === 'LOCAL').value)
                  ).then(tranResp => {
                          if (tranResp) {


                              return tranResp;
                          } else {
                              return null;
                          }
                      }
                  )
          } else {
              return Promise.resolve(null)
          }
      }
  }

  _getHubPatient(){
      //getPatientUsingGET: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, patientSsin)
  }

  _putHubPatient(){
      //putPatientUsingPOST: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, patientSsin, firstName, lastName, gender, dateOfBirth)
  }

  _putTransaction(){
      //putTransactionUsingPOST: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, hubId, patientSsin, message, hubApplication)
  }

  _getHubTransactionSet(){
      //getTransactionSetUsingGET: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, ssin, sv, sl, value)
      if (this.patient.ssin && this.api.tokenId) {
          return this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId)
              .then(hcp =>
                  this.api.fhc().Hubcontroller().getTransactionSetUsingGET(this.hubEndPoint, this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                      hcp.nihii, hcp.lastName, hcp.firstName, hcp.ssin, this.hcpZip,
                      this.patient.ssin, this.selectedTransaction.ids.find(id => id.s==='LOCAL').sv, this.selectedTransaction.ids.find(id => id.s==='LOCAL').sl,
                      this.selectedTransaction.ids.find(id => id.s==='LOCAL').value)
              ).then(tranResp => {
                      if (tranResp) {


                          return tranResp;
                      } else {
                          return null;
                      }
                  }
              )
      } else {
          return Promise.resolve(null)
      }
  }

  _putHubTransactionSet(){
      //putTransactionSetUsingPOST: function (endpoint, keystoreId, tokenId, passPhrase, hcpNihii, hcpSsin, hcpZip, hubId, patientSsin, message, hubApplication)
  }

  currentTherLinksChanged(){
      this.set('haveTherLinks', this.currentTherLinks.length > 0)
	}

  _getTherLinks(){
      if (this.patient.ssin && this.api.tokenId) {
          return this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId)
              .then(hcp =>
                  this.api.fhc().Therlinkcontroller().getAllTherapeuticLinksUsingGET(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                      hcp.nihii, hcp.ssin, hcp.firstName, hcp.lastName,
                      this.patient.ssin, this.patient.firstName, this.patient.lastName, this.eidCardNumber, this.isiCardNumber,
                      null, null,null,null ) //returns Array of therapeuticLink
              ).then(therLinkResp => {
                      if (therLinkResp) {
                          this.set('currentTherLinks', therLinkResp);
                          return therLinkResp;
                      } else {
                          return null;
                      }
                  }
              )
      } else {
          return Promise.resolve(null)
      }
	}

  _registerTherLink(){
      if (this.patient.ssin && this.api.tokenId) {
          this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId).then(hcp =>
              this.api.fhc().Therlinkcontroller().registerTherapeuticLinkUsingPOST1(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                  hcp.nihii, hcp.ssin, hcp.firstName, hcp.lastName,
                  this.patient.ssin, this.patient.firstName, this.patient.lastName, this.eidCardNumber, this.isiCardNumber, null, null, null, null, null)
          ).then(therLinkResp => {
                  if(therLinkResp.therapeuticLink) {
                      this.showPatientTherLinkState()
                      return(therLinkResp.therapeuticLink)
                  }
                  else{
                      return Promise.resolve(null)
                  }
              }
          )
      }
      else
      {
          return Promise.resolve(null)
      }
  }

  _revokeTherLink(){
      if (this.patient.ssin && this.api.tokenId && this.selectedTherLink) {
          this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId).then(hcp => {
              this.api.fhc().Therlinkcontroller().revokeLinkUsingPOST1(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
              this.selectedTherLink.therapeuticLink, null)
          }).then(consentResp => {
                      this.showPatientTherLinkState()
                      return consentResp
            	}
          )
      } else{
          return Promise.resolve(null)
      }
  }

  _getConsent(){
      if (this.patient.ssin && this.api.tokenId) {
          return this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId)
              .then(hcp =>
                  this.api.fhc().Consentcontroller().getPatientConsentUsingGET(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                      hcp.nihii, hcp.ssin, hcp.firstName, hcp.lastName,
                      this.patient.ssin, this.patient.firstName, this.patient.lastName)
              ).then(consentResp => {
                      this.set('patientConsent', consentResp);
                      if (consentResp.consent) {
                          return consentResp.consent;
                      } else {
                          return null;
                      }
                  }
              )
      } else {
          return Promise.resolve(null)
      }
  }

  _revokeConsent(){
      if (this.patient.ssin && this.api.tokenId) {
          this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId).then(hcp =>
                  this._getConsent().then(patientConsent => {
                      if(patientConsent){
                    	this.api.fhc().Consentcontroller().revokePatientConsentUsingPOST(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                        	hcp.nihii, hcp.ssin, hcp.firstName, hcp.lastName,
                          patientConsent, this.eidCardNumber, this.isiCardNumber).then(consentResp => {
                              this.showPatientConsentState()
                              return consentResp
                          }
                      )
                      }
                      else {
                          return Promise.resolve(null)
                      }
                  }
              )
          )
      } else{
          return Promise.resolve(null)
      }
  }

  _registerConsent(){
      if (this.patient.ssin && this.api.tokenId) {
          this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId).then(hcp =>
                  this.api.fhc().Consentcontroller().registerPatientConsentUsingPOST(this.api.keystoreId, this.api.tokenId, this.api.credentials.ehpassword,
                      hcp.nihii, hcp.ssin, hcp.firstName, hcp.lastName,
                      this.patient.ssin, this.patient.firstName, this.patient.lastName, this.eidCardNumber, this.isiCardNumber)
              ).then(consentResp => {
                  if(consentResp.consent) {
                      this.showPatientConsentState()
                      return(consentResp.consent)
                  }
                  else{
                      return Promise.resolve(null)
                  }
              }
          )
      }
      else
      {
          return Promise.resolve(null)
      }
  }

  clearEvent(el) {
      const svcId = el.target.parentElement.parentElement.id.substr(5);
      const svc = this.get('events').find(s => s.id === svcId);

      const t = svc.tags.find(t => t.type === 'CD-LIFECYCLE');
      if (t) {
          t.code = 'cancelled';
          if (!this.currentContact) {
              return;
          }
          this.saveService(svc).then(c => this.filterEvents());
      }
	}

  completeEvent(el) {
      const svcId = el.target.parentElement.parentElement.id.substr(5);
      const svc = this.get('events').find(s => s.id === svcId);

      const t = svc.tags.find(t => t.type === 'CD-LIFECYCLE');
      if (t) {
          t.code = 'completed';
          if (!this.currentContact) {
              return;
          }
          this.saveService(svc).then(c => this.filterEvents());
      }
	}

  saveService(svc) {
      svc.modified = +new Date();
      if (!svc.id) {
          svc.id = this.api.crypto().randomUuid();
      }
      if (!svc.valueDate) {
          svc.valueDate = parseInt(moment().format('YYYYMMDDHHmmss'));
      }
      if (!svc.openingDate) {
          svc.openingDate = svc.valueDate;
      }
      if (!svc.created) {
          svc.created = svc.modified;
      }
      const ctc = this.api.contact().contactOfService(this.get('contacts'), svc.id) || this.currentContact;
      let sc = this.currentContact.subContacts.find(sc => sc.services.find(sId => svc.id));
      if (!sc) {
          sc = ctc.subContacts.find(sc => sc.services.find(sId => svc.id)) || {};
          this.currentContact.subContacts.push(sc = { formId: sc.formId, planOfActionId: sc.planOfActionId, healthElementId: sc.healthElementId, services: [] });
          sc.services.push({ serviceId: svc.id });
      }
      const oldSvcIdx = this.currentContact.services.findIndex(s => s.id === svc.id);
      if (oldSvcIdx > -1) {
          this.currentContact.services.splice(oldSvcIdx, 1);
      }
      this.currentContact.services.push(svc);
      return this.saveCurrentContact();
	}

  saveContact(ctc) {
      return (ctc.rev ? this.api.contact().modifyContactWithUser(this.user, ctc) : this.api.contact().createContactWithUser(this.user, ctc)).then(c=>this.api.register(c,'contact')).then(c => {
          ctc.rev = c.rev;
          console.log("contact saved: " + ctc.id + ":" + ctc.rev);

          setTimeout(() => this.$.savedIndicator.classList.remove("saved"), 2000);
          this.$.savedIndicator.classList.add("saved");

          if (ctc.services.find(s => s.tags.find(t => t.type === 'CD-ITEM' && ['allergy', 'risk', 'familyrisk', 'healthcareelement', 'healthissue', 'medication'].indexOf(t.code) >= 0))) {
              this.patientChanged();
          }
          return c;
      });
	}

  saveCurrentContact() {
      return this.saveContact(this.currentContact);
	}

  _saveContact(event) {
      this.saveContact(event.detail);
	}

  filterEvents() {
      this.set('events', _.sortBy(this.api.contact().filteredServices(this.contacts, s => s.tags.some(t => t.type === 'CD-LIFECYCLE')).filter(s => s.tags.some(t => t.type === 'CD-LIFECYCLE' && t.code === 'planned')), it => -this.api.moment(it.valueDate)));
	}

  _lateEventCssClass(e) {
      return this.api.moment(e.valueDate).isBefore(moment()) ? 'todo-item--late' : '';
	}

  _isLatestYearContact(contactYear, contactYears) {
      if (contactYear.year === contactYears[Object.keys(contactYears)[0]].year) {
          this.isLatestYear = true;
          return "contact--big";
      } else {
          this.isLatestYear = false;
          return "contact--small";
      }
	}

  openToast() {
      Polymer.dom(this.root).querySelector('#selectionToast').show();
	}

  toggleFiltersPanel() {
      this.showFiltersPanel = !this.showFiltersPanel;
      this.root.querySelector('#filtersPanel').classList.toggle('filters-panel--collapsed');
	}

  selectedItemsSubmenu(list, selectedItems) {
      if (!selectedItems || selectedItems.length === 0) {
          return 'icons:check-box-outline-blank';
      } else if (selectedItems.length < list.length) {
          return 'icons:indeterminate-check-box';
      } else {
          return 'icons:check-box';
      }
	}

  checkedUncheckedIcon(item, selectedItems) {
      if (selectedItems && selectedItems.find(i => i && i.id && i.id.endsWith(item.id))) {
          return 'icons:check-box';
      } else {
          return 'icons:check-box-outline-blank';
      }
	}

  patientOpened(patientId, api, user) {
      if (api && user && patientId && patientId !== this.latestPatientId) {
          this.api.unregisterAll('contact')

          this.latestPatientId = patientId;
          this.api.accesslog().createAccessLog(new AccessLogDto({
              id: this.api.crypto().randomUuid(),
              patientId: patientId,
              user: user.id,
              date: +new Date(),
              accessType: 'USER_ACCESS'
          }));
      } else if (api && user) {
          this.api.unregisterAll('contact')
      }
	}

  patientChanged(api, user, patient, forceCreate = true) {
      if (this.api && this.user && this.patient) {
          const patient = this.patient;
          const currentlySelectedContactsIds = (this.selectedContactIds || []).map(id=>id && id.substr(4) /* format is ctc_... see DOM */);
          Promise.all([this.api.contact().findBy(this.user.healthcarePartyId, patient).then(ctcs => ctcs.map(ctc => this.api.register(ctc,'contact'))), this.api.helement().findBy(this.user.healthcarePartyId, patient, true)]).then(([ctcs, allHes]) => {
              const hesByHeId = {}
              allHes.forEach(he => {
                  if (he.healthElementId) { (hesByHeId[he.healthElementId] || (hesByHeId[he.healthElementId] = [])).push(he) }
              })
              _.values(hesByHeId).forEach(a => a.sort((he1,he2) => (he2.modified || 0) - (he1.modified || 0)))
              const hes = _.values(hesByHeId).map(a => a[0]).filter((s) => s && !s.endOfLife)

              ctcs.sort((a,b) => (a.created||0)-(b.created||0))
              const descrPattern = this.user.properties.find(p => p.type.identifier === 'org.taktik.icure.preferred.contactDescription') || "{Motifs de contact}";
              const sorter = x => [
                  ((x.codes||[]).find(c =>  c.type === 'ICPC' || c.type === 'ICPC2') || {}).code || "\uff0f",
                  -(x.valueDate || x.openingDate || 0),
                  -(x.closingDate || 0)
              ];
              const idServicesInHes = _.compact(hes.map(he => he.idService));

              this.api.contact().filterServices(ctcs, s => s.tags.find(c => c.type === 'CD-ITEM' && ['healtcarehelement', 'healthissue', 'familyrisk', 'risk', 'allergy'].includes(c.code)) && !idServicesInHes.includes(s.id)).then(hesAsServices => {
                  const svcHes = hesAsServices.map(svc => ({
                      created: svc.created,
                      modified: svc.modified,
                      endOfLife: svc.endOfLife,
                      author: svc.author,
                      responsible: svc.responsible,
                      codes: svc.codes,
                      tags: svc.tags,
                      valueDate: svc.valueDate,
                      openingDate: svc.openingDate,
                      closingDate: svc.closingDate,
                      descr: this.shortServiceDescription(svc, this.language),
                      idService: svc.id,
                      status: svc.status,
                      svc: svc,
                      plansOfAction: [] }))

                  const combinedHes = _.sortBy(_.concat(svcHes, hes.filter(it => it.descr && !it.descr.startsWith('Etat g') && !it.descr.startsWith('Algemeen t') && it.descr !== 'INBOX')), sorter);
                  const combinedHesWithHistory = _.sortBy(_.concat(svcHes, allHes.filter(it => it.descr && !it.descr.startsWith('Etat g') && !it.descr.startsWith('Algemeen t') && it.descr !== 'INBOX')), sorter);

                  combinedHes.forEach(e => {
                      e.selectedItems = [];
                  });

                  this.api.code().icpcChapters(_.compact(combinedHesWithHistory.map(he => he.codes.find(c => c.type === 'ICPC' || c.type === 'ICPC2'))).map(x => x.code)).then(codes => {
                      codes.forEach(cc => {
                          cc.healthElements = _.sortBy(combinedHesWithHistory.filter(he => {
                              let heIcpc = he.codes.find(c => c.type === 'ICPC' || c.type === 'ICPC2');
                              return he.healthElementId && heIcpc && cc.subCodes.includes(heIcpc.code);
                          }), sorter);
                          cc.healthElements.forEach(he => he.colour = cc.descr.colour);
                      });
                      this.set('healthTopics', _.sortBy(codes.filter(ht => ht.healthElements.length > 1), it => this.api.contact().localize(it, this.language)));

                      this.set('healthElements', combinedHesWithHistory);

                      this.set('activeHealthElements', combinedHes.filter(it => !it.closingDate && (it.status & 1) === 0 && it.tags.find(c => c.type === 'CD-ITEM' && (c.code === 'healthissue' || c.code === 'healthcareelement'))));
                      this.set('inactiveHealthElements', combinedHes.filter(it => (it.closingDate || (it.status & 1) === 1) && (it.status & 2) === 0 && it.tags.find(c => c.type === 'CD-ITEM' && (c.code === 'healthissue' || c.code === 'healthcareelement'))));
                      this.set('archivedHealthElements', combinedHes.filter(it => (it.status & 2) === 2));
                      this.set('allergies', combinedHes.filter(it => (it.status & 2) === 0 && it.tags.find(c => c.type === 'CD-ITEM' && c.code === 'allergy')));
                      this.set('risks', combinedHes.filter(it => (it.status & 2) === 0 && it.tags.find(c => c.type === 'CD-ITEM' && c.code === 'risk')));
                      this.set('familyrisks', combinedHes.filter(it => (it.status & 2) === 0 && it.tags.find(c => c.type === 'CD-ITEM' && c.code === 'familyrisk')));

                      this.activeHealthElements.length && (this.root.querySelector('#cb_ahelb').opened = true)
                      this.inactiveHealthElements.length && (this.root.querySelector('#cb_ihelb').opened = true)
                      this.allergies.length && (this.root.querySelector('#cb_alhelb').opened = true)
                      this.risks.length && (this.root.querySelector('#cb_rhelb').opened = true)


                      this.set('selectedHealthcareElements', (this.selectedHealthcareElements || []).filter(he => this.activeHealthElements.concat(this.inactiveHealthElements).concat(this.archivedHealthElements).concat(this.allergies).concat(this.risks).concat(this.familyrisks).includes(he)))
                  });

                  const unclosedContact = ctcs.find(c => !c.closingDate);
                  const allContacts = unclosedContact ? ctcs.concat([unclosedContact]) : ctcs;

                  const templateKeys = descrPattern.match(/\{.+?\}/g).map(s => s.substring(1, s.length - 1)).reduce((acc, s) => {
                      acc[s] = true;return acc;
                  }, {});
                  allContacts.forEach(ctc => {
                      ctc.healthElements = _.uniq(ctc.subContacts.map(sc => sc.planOfActionId && combinedHesWithHistory.find(he => he.plansOfAction.find(poa => poa.id === sc.planOfActionId)) || sc.healthElementId && combinedHesWithHistory.find(he => he.id === sc.healthElementId)).map(he => he && he.healthElementId)).filter(id => !!id).map(id => hesByHeId[id][0]);
                      ctc.userDescr = this.api.template(descrPattern, ctc.services.filter(s => templateKeys[s.label] && !s.endOfLife).reduce((acc, v) => {
                          acc[v.label] = !acc[v.label] ? this.shortServiceDescription(v, this.language) : acc[v.label] + "," + this.shortServiceDescription(v, this.language);return acc;
                      }, {}));
                      if (!ctc.userDescr || ctc.userDescr.length < 3) {
                          ctc.userDescr = ctc.descr;
                      }
                  })
                  ;(unclosedContact && Promise.resolve(unclosedContact) || this.api.contact().newInstance(this.user, patient, { descr: 'Contact du jour', userDescr: 'Contact du jour' })).then(newCtc => {
                      const thisYear = moment().year();

                      this.set('contacts', Object.values(ctcs.reduce((acc,it) => {
                          const prev = acc[it.groupId || it.id]
                          if (prev) {
                              const target = (it.created || it.modified) > (prev.created || prev.modified) ? it : prev
                              const source = (it.created || it.modified) > (prev.created || prev.modified) ? prev : it

                              acc[it.groupId || it.id] = target

                              target.subContacts = (target.subContacts || []).concat(source.subContacts)
                              target.services = (target.services || []).concat(source.services)
                          } else {
                              acc[it.groupId || it.id] = it
                          }
                          return acc
                      },{})));

                      this.set('currentContact', newCtc);
                      const formIds = {}
                      this.hiddenSubContactsId = _.reduce(ctcs, (acc, ctc) => {
                          ctc.subContacts.forEach(sc => {
                              if (sc.formId && formIds[sc.formId]) {
                                  if (!sc.id) {sc.id = this.api.crypto().randomUuid()}
                                  acc[sc.id] = 1
                              } else if (sc.formId) {
                                  formIds[sc.formId] = true
                              }
                          })
                          return acc
                      }, {})
                      this.set('contactYears', _.sortBy(_.values(_.reduce(this.contacts, (acc, ctc) => {
                          if (ctc.subContacts && ctc.subContacts.filter(sc=>!this.hiddenSubContactsId[sc.id]).length ||
                              ctc.services.some(s => !ctc.subContacts.some(sc=>sc.services.some(scs=>scs.idService === s.id)) && _.values(s.content).find(this.contentHasData.bind(this)))) {
                              let year = parseInt((ctc.openingDate || 2000).toString().substr(0, 4));
                              const contacts = (acc[year] || (acc[year] = { year: year, contacts: [] })).contacts;
                              if (!contacts.includes(ctc)) {
                                  contacts.push(ctc);
                              }
                          }
                          return acc;
                      }, _.fromPairs([[thisYear, { year: thisYear, contacts: [newCtc] }]]))).map(x => {
                          x.contacts = _.sortBy(x.contacts, sorter);return x;
                      }), x => -x.year));
                      this.filterEvents();

                      if (currentlySelectedContactsIds.some(cId => !ctcs.some(c=>c.id === cId))) {
                          this.set('selectedContactIds',_.compact(ctcs.filter(c=>currentlySelectedContactsIds.includes(c.id)).map(c=>`ctc_${c.id}`)))
                      }
                      setTimeout(() =>
                      this.selectedContactIds.forEach(cDomId => {
                          const pm = this.root.querySelector(`#${cDomId}`)
                          if (pm) {
                              pm.setAttribute("aria-selected", "true")
                              pm.classList.add('iron-selected')
                          }
                      }), 0)
                  });
              });

              this.api.contact().filterServices(ctcs, s => s.tags.find(c => c.type === 'CD-ITEM' && c.code === 'medication')).then(medications => this.set('medications', _.sortBy(medications, sorter)));
              this._updateFilterPanels();
          });

          //eHealth stuff
          if (patient.ssin && this.api.tokenId) {
              this.api.hcparty().getHealthcareParty(this.user.healthcarePartyId).then(hcp => this.api.fhc().Geninscontroller().getGeneralInsurabilityUsingGET(patient.ssin, this.api.tokenId, this.api.keystoreId, this.api.credentials.ehpassword, hcp.nihii, hcp.ssin, hcp.lastName, "doctor", null, null).then(gi => {
                  const genInsOk = !gi.faultCode && gi.insurabilities && gi.insurabilities.length && gi.insurabilities[0].ct1 && !(gi.generalSituation && gi.generalSituation.length);
                  const medicalHouse = gi.medicalHouseInfo && gi.medicalHouseInfo.medical && this.api.before(gi.medicalHouseInfo.periodStart, +new Date()) && (!gi.medicalHouseInfo.periodEnd || this.api.after(gi.medicalHouseInfo.periodEnd + 24 * 3600 * 1000, +new Date()));

                  this.$.insuranceStatus.classList.remove('medicalHouse');
                  this.$.insuranceStatus.classList.remove('noInsurance');
                  this.$.insuranceStatus.classList.remove('insuranceOk');

                  this.$.insuranceStatus.classList.add(genInsOk ? medicalHouse ? 'medicalHouse' : 'insuranceOk' : 'noInsurance');
                  Polymer.updateStyles(this.$.insuranceStatus);

                  if (genInsOk) {
                      //set gen ins info on patient
                      const pi = patient.insurabilities && _.assign({}, patient.insurabilities[0] || {});
                      const ins = gi.insurabilities[0];
                      this.api.insurance().listInsurancesByCode(ins.mutuality).then(out => {
                          if (out && out.length) {
                              pi.insuranceId = out[0].id;
                          }
                          if (ins.ct1 && (!pi.parameters || pi.parameters.tc1 !== ins.ct1)) {
                              pi.parameters = _.assign(pi.parameters || {}, { tc1: ins.ct1, preferentialstatus: parseInt(ins.ct1) % 2 === 1 ? 'true' : 'false' });
                          }
                          ins.ct2 && pi.parameters.tc2 !== ins.ct2 && (pi.parameters = _.assign(pi.parameters || {}, { tc2: ins.ct2 }));
                          ins.paymentApproval ? pi.parameters = _.assign(pi.parameters || {}, { paymentapproval: 'true' }) : delete pi.parameters.paymentapproval;
                          if (patient === this.patient) {
                              this.set('patient.insurabilities.0', pi);
                          }
                      });
                  }
                  this.selectedTherLink = null;
                  this.showPatientConsentState();
                  this.showPatientTherLinkState();
                  this.showHubState();
              }));

          }
      }
	}

  showPatientTherLinkState(){
      this._getTherLinks().then(therLinks => {
              var tlOk = false;
              this.$.tlStatus.classList.remove('noTl');
              this.$.tlStatus.classList.remove('tlOk');

              if(therLinks[0]) {
                  tlOk = true;
              }
              this.$.tlStatus.classList.add(tlOk ? 'tlOk' : 'noTl');
              Polymer.updateStyles(this.$.tlStatus)
          }
      )
	}

  showPatientConsentState(){
      this._getConsent().then(patientConsent => {
              var consentOk = false;
              this.$.consentStatus.classList.remove('noConsent');
              this.$.consentStatus.classList.remove('consentOk');

              if(patientConsent) {
                  consentOk = !patientConsent.error;
              }
              this.$.consentStatus.classList.add(consentOk ? 'consentOk' : 'noConsent');
              Polymer.updateStyles(this.$.consentStatus)
          }
      )
	}

  showHubState(){
      this.$.hubStatus.classList.remove('noAccess');
      this.$.hubStatus.classList.remove('accessOk');

      var hcpHubCons = false;

      this._getHubHcpConsent().then(consentResp => {
          if(consentResp.author.hcparties[0]) {
              hcpHubCons = true;
          }
          this.$.hubStatus.classList.add(hcpHubCons ? 'accessOk' : 'noAccess');
          Polymer.updateStyles(this.$.hubStatus)
      }
      )
  }

  unselectAdminFile() {
      this.$.adminFileMenu.select(null);
	}

  newContact(e) {
      this.patientChanged();
	}

  closeContact(e) {
      e.stopPropagation();
      e.preventDefault();

      const ctcId = e.target.id.substr(6);
      const year = this.contactYears.find(y => y.contacts.find(c => c.id === ctcId));
      const contact = year.contacts.find(c => c.id === ctcId);

      const ctcDetailPanel = this.shadowRoot.querySelector('#ctcDetailPanel');

      (ctcDetailPanel && ctcDetailPanel.shouldSave() && this.saveCurrentContact() || Promise.resolve(this.currentContact)).then(() => {
          if (contact) {
              if (!contact.rev && (!contact.services || contact.services.length === 0)) {
                  const idx = this.contactYears[0].contacts.indexOf(this.currentContact);
                  if (idx >= 0) {
                      this.splice('contactYears.0.contacts', idx, 1);
                  }
                  this.set('currentContact', null);
              } else {
                  this.api.contact().getContactWithUser(this.user, contact.id).then(c => {
                      c.closingDate = parseInt(moment().format('YYYYMMDDHHmmss'));
                      (c.rev ? this.api.contact().modifyContactWithUser(this.user, c) : this.api.contact().createContact(c)).then(c=>this.api.register(c,'contact')).then(() => this.patientChanged())
                      //this.notifyPath('currentContact.closingDate')
                  });
              }
          }
      })
  }

  _archive(event) {
      const model = event.detail;
      if (model.he.id) {
          this.api.helement().getHealthElement(model.he.id).then(he => {
              if (!he.closingDate && he.closingDate !== 0) {
                  he.closingDate = parseInt(moment().format('YYYYMMDDHHmmss'));
              }
              if ((he.status & 1) === 0) {
                  he.status = he.status | 1;
              }
              if ((he.status & 2) === 0) {
                  he.status = he.status | 2;
              }
              this.api.helement().modifyHealthElement(he).then(() => {
                  this.patientChanged();
              });
          });
      } else if (model.he.idService) {
          if (!this.currentContact) {
              return;
          }
          const svc = model.he.svc;

          if (!svc.closingDate && svc.closingDate !== 0) {
              svc.closingDate = parseInt(moment().format('YYYYMMDDHHmmss'));
          }
          if ((svc.status & 2) === 0) {
              svc.status = svc.status | 2;
          }
          this.saveService(svc).then(c => this.patientChanged());
      }
	}

  _activate(event) {
      const model = event.detail;
      if (model.he.id) {
          this.api.helement().getHealthElement(model.he.id).then(he => {
              if (he.closingDate || he.closingDate === 0) {
                  he.closingDate = null;
              }
              if ((he.status & 1) === 1) {
                  he.status = he.status - 1;
              } //activate
              if ((he.status & 2) === 2) {
                  he.status = he.status - 2;
              } //unarchive
              this.api.helement().modifyHealthElement(he).then(he => {
                  this.patientChanged();
              });
          });
      } else if (model.he.idService) {
          if (!this.currentContact) {
              return;
          }
          const svc = model.he.svc;

          if (svc.closingDate || svc.closingDate === 0) {
              svc.closingDate = null;
          }
          if ((svc.status & 1) === 1) {
              svc.status = svc.status - 1;
          } //activate
          if ((svc.status & 2) === 2) {
              svc.status = svc.status - 2;
          } //unarchive
          this.saveService(svc).then(c => this.patientChanged());
      }
	}

  _inactivate(event) {
      const model = event.detail;
      if (model.he.id) {
          this.api.helement().getHealthElement(model.he.id).then(he => {
              if (!he.closingDate && he.closingDate !== 0) {
                  he.closingDate = parseInt(moment().format('YYYYMMDDHHmmss'));
              }
              if ((he.status & 2) === 2) {
                  he.status = he.status - 2;
              } //unarchive
              this.api.helement().modifyHealthElement(he).then(he => {
                  this.patientChanged();
              });
          });
      } else if (model.he.idService) {
          if (!this.currentContact) {
              return;
          }
          const svc = model.he.svc;

          if (!svc.closingDate && svc.closingDate !== 0) {
              svc.closingDate = parseInt(moment().format('YYYYMMDDHHmmss'));
          }
          if ((svc.status & 2) === 2) {
              svc.status = svc.status - 2;
          } //unarchive

          this.saveService(svc).then(c => this.patientChanged());
      }
	}

  _selectToday() {
      this.$.adminFileMenu.select(1);

      this.set('timeSpanStart', parseInt(moment().startOf('day').format('YYYYMMDD')));
      this.set('timeSpanEnd', null);

      this.updateContactYears();
	}

  _select6Months() {
      this.set('timeSpanStart', parseInt(moment().subtract(6, 'month').format('YYYYMMDD')));
      this.set('timeSpanEnd', null);

      this.updateContactYears();
	}

  _selectAll() {
      this.set('timeSpanStart', null);
      this.set('timeSpanEnd', null);

      this.updateContactYears();
	}

  _selectMoreOptions() {
      this.$['select-more-options-dialog'].open()
  }

  _selectBetweenTwoDates() {

      this.set('timeSpanStart', moment(this.dateStartAsString).format('YYYYMMDD')==="Invalid date" ? null :parseInt(moment(this.dateStartAsString).format('YYYYMMDD')));
      this.set('timeSpanEnd', moment(this.dateEndAsString).format('YYYYMMDD')==="Invalid date" ? null : parseInt(moment(this.dateEndAsString).format('YYYYMMDD')));

      this.updateContactYears();
  }

  _selectCurrentContact() {
      this.currentContact && this.currentContact.id && this.shadowRoot.querySelector('#_contacts_listbox').set('selectedValues', [this.currentContact.id]);
	}

  updateContactYears() {
      this.notifyPath('contactYears');
	}

  getHeId(he) {
      return he.id ? `_he_${he.id}` : `_svc_${he.idService}`;
	}

  contactFilter() {
      return (ctc) => {
          const regExp = this.contactSearchString && new RegExp(this.contactSearchString, "i");

          const heHeIds = this.selectedHealthcareElements.map(he => he.healthElementId).filter(x=>!!x);
          const heIds = _.uniq(this.selectedHealthcareElements.map(he => he.id).concat((this.healthElements || []).filter(h => h.healthElementId && heHeIds.includes(h.healthElementId)).map(he => he.id)));
          const poaIds = _.flatMap(this.selectedHealthcareElements, he => he.selectedPlansOfAction ? he.selectedPlansOfAction.map(p => p.id) : []);
          const svcIds = this.selectedHealthcareElements.filter(he => !he.id).map(he => he.idService);

          return this.api.after(ctc.openingDate, this.timeSpanStart)
              && this.api.before(ctc.openingDate, this.timeSpanEnd)
              && (!regExp || ctc.subContacts.some(sc => sc.descr && sc.descr.match(regExp) && sc.services.length)
                  || ctc.services.some(s => this.shortServiceDescription(s, this.language).match(regExp))
                  || this.hcp(ctc).match(regExp) )
              && (!heIds.length && !poaIds.length && !svcIds.length
                  || ctc.subContacts.some(sc => (sc.healthElementId && heIds.includes(sc.healthElementId) || sc.planOfActionId && poaIds.includes(sc.planOfActionId)))
                  || ctc.services.some(s => svcIds.includes(s.id)))
              && (!this.contactFilters || !this.contactFilters.length
                  || ctc.services.some(s => s.tags && s.tags.some(t => this.contactFilters.some(cf=>
                      cf.every(f=>f.code.some(c=>f.type === t.type && c === t.code)))))
                  || ctc.tags.some(t => this.contactFilters.some(cf=>
                      cf.every(f=>f.code.some(c=>f.type === t.type && c === t.code))))
                  || ctc.subContacts.some(s => s.tags && s.tags.some(t => this.contactFilters.some(cf=>
                      cf.every(f=>f.code.some(c=>f.type === t.type && c === t.code)))))
              )
              && (
                  this.statutFilter==="all" || this.contactStatutChecked.some(id => id===ctc.id)
              )
              || !ctc.closingDate;

      }
	}

  compareContacts(a, b) {
      return b.created - a.created;
	}

  close() {
      this.set('patient', null);
	}

  _editHealthElement(event) {
      const model = event.detail;(model.he.codes && model.he.codes.length && this.api.code().getCodes(model.he.codes.map(c => this.api.code().normalize(c).id).join(',')) || Promise.resolve([])).then(codes => {
          this.editedHealthElementModel = model;
          this.$['edit-healthelement-dialog'].set('entity', _.assign(_.assign({ plansOfAction: [] }, model.he), { codes: codes }));
          this.$['edit-healthelement-dialog'].open();
      });
	}

  toggleMenu(e) {
      e.stopPropagation();
      e.preventDefault();
      styx.parent(e.target, el => el.tagName.toLowerCase() === 'collapse-button').toggle();
      styx.parent(e.target, el => el.tagName.toLowerCase() === 'paper-item').classList.toggle('opened');

      this._updateFilterPanels();
	}

  getPaperItemParentForEvent(e) {
      let tgt = e.target;
      while (tgt && tgt.tagName && tgt.tagName.toLowerCase() !== 'paper-item') {
          tgt = tgt.parentElement;
      }
      return tgt && tgt.tagName ? tgt : null;
	}

  getPaperListboxParent(tgt) {
      while (tgt && tgt.tagName && tgt.tagName.toLowerCase() !== 'paper-listbox') {
          tgt = tgt.parentElement;
      }
      return tgt && tgt.tagName ? tgt : null;
	}

  handleSelectionChange(e) {
      const selections = e.detail.selections;
      const selChanges = {}; // Map with new selected indexes for each listbox id

      selections.forEach(s => {
          if (s.action === 'unselect') {
              this.set('selectedAdminOrCompleteFileIndex',null);
          }
          (s.items || this.selectedHealthcareElements.map(he => this.getHeId(he))).forEach(id => {
              const item = this.root.querySelector('#' + id);
              if (item) {
                  const listBox = this.getPaperListboxParent(item);
                  if (listBox) {
                      const selChangesEntry = selChanges[listBox.id] || (selChanges[listBox.id] = { el: listBox, selectedValues: listBox.selectedValues });
                      if (s.action === 'select') {
                          selChangesEntry.selectedValues = _.uniq(selChangesEntry.selectedValues.concat([listBox.items.indexOf(item)]));
                      } else if (s.action === 'unselect') {
                          const delValue = listBox.items.indexOf(item);
                          selChangesEntry.selectedValues = selChangesEntry.selectedValues.filter(it => it !== delValue);
                      }
                  }
              }
          });
      });
      Object.values(selChanges).forEach(c => c.el.set('selectedValues', c.selectedValues));
      if (this.selectedHealthcareElements.length === 0 && this.selectedAdminOrCompleteFileIndex !== 0) {
          this.set('selectedAdminOrCompleteFileIndex', 1)
      }
  }

  selectedAdminFileChanged(el) {
      if (el && this.selectedHealthcareElements && this.selectedHealthcareElements.length && this.selectedAdminOrCompleteFileIndex === 1) {
          //this.set("selectedHealthcareElements", []);
          this.root.querySelectorAll('paper-listbox.menu-content').forEach(plb =>
              plb.set('selectedValues',[])
          )
      }
      this._updateFilterPanels();
  }

  selectedMainElementItemsChanged(event) {
      const domRepeat = event.target.querySelector("dom-repeat");
      const selectedModels = _.compact(event.target.selectedItems.map(el => {
          const model = domRepeat.modelForElement(el)
          return model && (model.he || model.risk || model.allergy)
      }));

      if (!domRepeat || !selectedModels) {
          return;
      }
      const allModels = domRepeat.items || [];

      let finalSelection = this.selectedHealthcareElements.filter(he => !allModels.includes(he)).concat(selectedModels)
      console.log(finalSelection.map(he=>he.descr).join(","))
      this.set('selectedHealthcareElements', finalSelection);
  }

  _isItemInArray(item, selectedItems) {
      return selectedItems && selectedItems.includes(item);
  }

  selectedHealthcareElementsSpliced(changeRecord) {
      if (changeRecord) {
          this.updateContactYears();
      }
  }

  isNotEmpty(a) {
      return a && a.length > 0;
	}

  isEmpty(a) {
      return !a || a.length === 0;
	}

  isAdminSelected(el) {
      return el === 0;
	}

  highlightedServiceLabels(user) {
      try {
          return user.properties.filter(p => p.type.identifier === 'org.taktik.icure.highlightedServiceLabels').map(p => JSON.parse(p.typedValue.stringValue))[0] || ['Examen clinique', 'Diagnostics', 'Prescription'];
      } catch (e) {}
      return ['Examen clinique', 'Diagnostics', 'Prescription'];
	}

  hcp(ctc) {
      const usr = this.api.users && this.api.users[ctc.author];
      const hcp = usr ? this.api.hcParties[usr.healthcarePartyId] : null;
      return hcp && hcp.lastName + " " + (hcp.firstName && hcp.firstName.length && hcp.firstName.substr(0, 1) + ".") || usr && usr.login || "N/A";
	}

  picture(pat) {
      if (!pat) {
          return require('../../../images/Male-128.jpg');
      }
      return pat.picture ? 'data:image/jpeg;base64,' + pat.picture : pat.gender === 'F' || pat.gender === 'f' ? require('../../../images/Female-128.jpg') : require('../../../images/Male-128.jpg');
	}

  serviceDescriptions(ctc, label) {
      return this.api && this.api.contact().services(ctc, label).filter(s => !s.endOfLife).map(s => this.shortServiceDescription(s, this.language)).filter(desc => desc) || [];
	}

  shortServiceDescription(svc, lng) {

      let rawDesc = svc && this.api && this.api.contact().shortServiceDescription(svc, lng);
      return rawDesc && '' + rawDesc || '';
	}

  contentHasData(c) {
      return this.api && this.api.contact().contentHasData(c) || false;
	}

  _addHealthElement(e) {
      this.$['add-healthelement-dialog'].open();
      this.$['add-healthelement-dialog'].set('entity', { plansOfAction: [], tags: (e.target.dataset.tags ? e.target.dataset.tags.split(',') : []).map(c => ({ id: c, type: c.split('|')[0], code: c.split('|')[1], version: c.split('|')[2] })) });
	}

  _addInactiveHealthElement(e) {
      this.$['add-healthelement-dialog'].open();
      this.$['add-healthelement-dialog'].set('entity', { plansOfAction: [], closingDate: parseInt(moment().format('YYYYMMDDHHmmss')), tags: (e.target.dataset.tags ? e.target.dataset.tags.split(',') : []).map(c => ({ id: c, type: c.split('|')[0], code: c.split('|')[1], version: c.split('|')[2] })) });
	}

  _addService(e) {
      this.set('editedSvcLabel', e.target.dataset.label);
      this.$['add-service-dialog'].open();
      this.$['add-service-dialog'].set('entity', { 'label': e.target.dataset.label, 'tags': (e.target.dataset.tags ? e.target.dataset.tags.split(',') : []).map(c => ({ id: c, type: c.split('|')[0], code: c.split('|')[1], version: c.split('|')[2] })) });
	}

  _healthElementsSelectorColumns() {
      return [{ key: 'descr', title: 'Description' }, { key: 'plansOfActionDescr', title: 'Plans of action' }];
	}

  _healthElementsSelectorDataProvider() {
      return {
          filter: function (filterValue, limit, offset, sortKey, descending) {
              const noDiacFilterValue = filterValue && filterValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")

              const regExp = noDiacFilterValue && new RegExp(noDiacFilterValue.replace(/\s+/,'.*'), "i");
              const words = noDiacFilterValue && noDiacFilterValue.toLowerCase().split(/\s+/);
              const sorter = x => [x.descr && x.descr.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(words[0]) || x.name && x.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().startsWith(words[0]) ? 0 : 1, x.descr, x.name]

              return Promise.all([this.api.code().findPaginatedCodesByLabel('be', 'BE-THESAURUS', 'fr', words[0], null, null, 1000), this.api.entitytemplate().findEntityTemplates(this.user.id, 'org.taktik.icure.entities.HealthElementTemplate', null, true)]).then(results => {
                  const codes = results[0];
                  const entityTemplates = results[1];
                  const filtered = _.flatten(entityTemplates.map(et => et.entity)).filter(he => [he].concat(he.plansOfAction || []).some(it => it.descr && it.descr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").match(regExp) || it.name && it.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").match(regExp)))
                      .map(it => ({ descr: it.descr || it.name, healthElement: it, plansOfAction: it.plansOfAction || [], plansOfActionDescr: (it.plansOfAction && it.plansOfAction.map(poa => poa.descr || poa.name) || []).join(',') }))
                      .concat(codes.rows.filter(c=> words.every(w => this.api.localize(c.label).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(w))).map(code => ({ descr: this.api.localize(code.label), codes: [code.id].concat(code.links), plansOfAction: [], plansOfActionDescr: 'N/A' })));
                  return { totalSize: filtered.length, rows: (descending ? _.reverse(_.sortBy(filtered, sorter)) : _.sortBy(filtered, sorter)).slice(offset, limit) };
              });
          }.bind(this)
      };
	}

  _normalizedHealthElement(healthElement) {
      return {
          descr: healthElement.descr,
          openingDate: healthElement.openingDate || +new Date(),
          closingDate: healthElement.closingDate,
          status: healthElement.status || 0,
          plansOfAction: (healthElement.plansOfAction || []).map(poa => _.extend(poa, { id: this.api.crypto().randomUuid(), openingDate: parseInt(moment().format('YYYYMMDDHHmmss')) })),
          tags: (healthElement.tags || []).map(c => this.api.code().normalize(c)),
          codes: (healthElement.codes || []).map(c => this.api.code().normalize(c)),
          idService: healthElement.idService
      };
	}

  _addedHealthElementSelected(event, healthElement) {
      this.api.helement().newInstance(this.user, this.patient, this._normalizedHealthElement(healthElement)).then(he => this.api.helement().createHealthElement(he)).then(he => this.patientChanged());
	}

  _editedHealthElementSelected(event, healthElement) {
      if (this.editedHealthElementModel.he.id) {
          this.api.helement().getHealthElement(this.editedHealthElementModel.he.id).then(he => {
              delete healthElement.plansOfActionDescr;
              _.assign(he, this._normalizedHealthElement(healthElement));
              he.id = this.api.crypto().randomUuid();
              delete he.rev;
              return he;
          }).then(he => this.api.helement().createHealthElement(he)).then(he => this.patientChanged());
      } else if (this.editedHealthElementModel.he.idService) {
          const svc = this.editedHealthElementModel.he.svc;
          return this.api.helement().serviceToHealthElement(this.user, this.patient, svc,
              this.api.contact().shortServiceDescription(svc, language)).then(he => {
              if (this.currentContact) {
                  this.api.contact().promoteServiceInContact(this.currentContact, this.user, this.contacts, svc, undefined, null, [he.id], null);
                  this.saveCurrentContact().then(c => this.patientChanged());
              }

              this.editedHealthElementModel.he = he;
              return this._editedHealthElementSelected(event, healthElement);
          });
      }
	}

  _servicesSelectorColumns() {
      return [{ key: svc => svc && svc.content && this.shortServiceDescription(svc, this.language) || '', sortKey: 'content.' + this.language + '.stringValue', title: 'Description' }, { key: svc => svc && svc.codes && svc.codes.map(c => (c.type || c.id && c.id.split('|')[0]) + ':' + (c.code || c.id && c.id.split('|')[1])).join(',') || '', sortKey: 'codes.0.code', title: 'Codes' }];
	}

  _servicesSelectorDataProvider(label) {
      return {
          filter: function (filterValue, limit, offset, sortKey, descending) {
              const regExp = filterValue && new RegExp(filterValue, "i");

              return this.api.code().findPaginatedCodesByLabel('be', 'BE-THESAURUS', 'fr', filterValue, null, null, 1000).then(results => {
                  const filtered = results.rows.map(code => ({ label: label, content: _.mapValues(code.label, v => ({ stringValue: v })), codes: code.links && code.links.map(c => ({ id: c, type: c.split('|')[0], code: c.split('|')[1], version: c.split('|')[2] })) || [] }));
                  return { totalSize: filtered.length, rows: (descending ? _.reverse(_.sortBy(filtered, sortKey)) : _.sortBy(filtered, sortKey)).slice(offset, limit) };
              });
          }.bind(this)
      };
	}

  _addedOrEditedServiceSelected(event, svc) {
      if (!this.currentContact) {
          return;
      }
      this.saveService(svc).then(c => this.patientChanged());
	}

  _svcEntityContentChanged(e, value) {
      const svc = styx.parent(e.target, el => el.tagName.toLowerCase() === 'entity-selector').entity;
      const content = svc.content || (svc.content = {});(content[this.language] || (content[this.language] = {})).stringValue = value;
	}

  _updateFilterPanels() {
      setTimeout(() => {
          const cfp = Polymer.dom(this.root).querySelector("#contactFilterPanel");
          cfp && cfp.refreshIcons();
          const hpd = Polymer.dom(this.root).querySelector("ht-pat-detail-ctc-detail-panel");
          hpd && hpd.refreshIcons();
      }, 10);
	}

  _expandColumn(e) {
      this.root.querySelector('.display-left-menu').classList.toggle('open');
      this.root.querySelector('.container').classList.toggle('expanded');
      this._updateFilterPanels();
	}

  _concat(a, b, c, d, e) {
      return (a || []).concat(b || []).concat(c || []).concat(d || []).concat(e || []);
	}

  checkingStatus(){
      let promises=[];
      const table = ["all", "active-relevant","active-irrelevant","inactive","archived"]

      this.set("contactStatutChecked",[]);

      if(this.statutFilter!=="all")
          this.contactYears.map(
              contactYear =>{
                  contactYear.contacts.map( ctc =>{
                      ctc.subContacts.map(sbct => {
                          let value;
                          if(sbct.healthElementId){
                              this.api.helement().getHealthElement(sbct.healthElementId).then(element => {
                                  value = element.status===table.findIndex( row => row===this.statutFilter)
                                  if(value && !this.contactStatutChecked.find(id => id===ctc.id)){
                                      this.push("contactStatutChecked",ctc.id);
                                  }
                              })
                          }

                      })
                  })
              }
          )

	}

  _composeHistory(e){
      const heId = e.detail.entity.healthElementId

      let hhe = _.sortBy(this.healthElements.filter(eh => eh.healthElementId === heId), ['modified'])


      hhe.map(e => {

          e.modified = this.api.moment(e.modified).format('DD/MM/YYYY')
          e.openingDate = this.api.moment(e.openingDate).format('DD/MM/YYYY')
          e.closingDate ? e.closingDate = this.api.moment(e.closingDate).format('DD/MM/YYYY') : e.closingDate = ""

          let temporality = 	e.tags.find(tmp => tmp.type === 'CD-TEMPORALITY')
          let severity = 		e.tags.find(sev => sev.type === 'CD-SEVERITY')
          let certainty = 	e.tags.find(cert => cert.type === 'CD-CERTAINTY')
          let nature = 		e.tags.find(nat => nat.type === 'CD-ITEM')

          e.nature 		= nature && nature.code ? nature.code : ""
          e.certainty		= certainty && certainty.code ? certainty.code : ""
          e.temporality	= temporality && temporality.code ? temporality.code : ""
          e.severity		= severity && severity.code ? severity.code : ""

      })

      this.set('historyElement', hhe)
	}

  _checkClosingDate(date){
	    return date !== "" ? true : false
	}

  _checkIfPresent(data){
      return data !== "" && data !== 'null' && data !== null ? true : false
	}

  _getDataTrad(data){
      return this.localize(data, data, this.language)
	}
}

customElements.define(HtPatDetail.is, HtPatDetail);
