/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '../dynamic-form/ckmeans-grouping.js';

import moment from 'moment/src/moment'
import _ from 'lodash/lodash'
import filterExParser from '../../../scripts/filterExParser'
import {FilterExPrinter} from '../icc-x-api/filterExPrinter'

class HtPatList extends Polymer.TkLocalizerMixin(Polymer.Element) {
  static get template() {
    return Polymer.html`
        <custom-style>
            <style is="custom-style">
                :host {
                    display: block;
                    height: 100%;
                    @apply --padding-right-left-32;
                }

                :host #patients-list {
                    height: calc(100% - 140px);
                    outline: none;
                }

                paper-input {
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

                .horizontal {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    flex-basis: 100%;
                    align-items: center;
                }

                .horizontal paper-input {
                    @apply --padding-right-left-16
                }

                .horizontal paper-input-container {
                    @apply --padding-right-left-16;
                    padding:0;
                }

                .horizontal paper-menu-button{
                    padding:0;
                }

                .horizontal vaadin-date-picker {
                    @apply --padding-right-left-16;
                    padding-top: 4px;
                }

                vaadin-grid.material {

                    font-family: Roboto, sans-serif;
                    --divider-color: rgba(0, 0, 0, var(--dark-divider-opacity));

                    --vaadin-grid-cell: {
                        padding: 8px;
                    };

                    --vaadin-grid-header-cell: {
                        height: 64px;
                        color: rgba(0, 0, 0, var(--dark-secondary-opacity));
                        font-size: 12px;
                    };

                    --vaadin-grid-body-cell: {
                        height: 48px;
                        color: rgba(0, 0, 0, var(--dark-primary-opacity));
                        font-size: 13px;
                    };

                    --vaadin-grid-body-row-hover-cell: {
                        background-color: var(--paper-grey-200);
                    };

                    --vaadin-grid-body-row-selected-cell: {
                        background-color: var(--paper-grey-100);
                    };

                    --vaadin-grid-focused-cell: {
                        box-shadow: none;
                        font-weight: bold;
                    };
                }

                vaadin-grid.material .cell {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-right: 56px;
                }

                vaadin-grid.material .cell.last {
                    padding-right: 24px;
                }

                vaadin-grid.material .cell.numeric {
                    text-align: right;
                }

                vaadin-grid.material paper-checkbox {
                    --primary-color: var(--paper-indigo-500);
                    margin: 0 24px;
                }

                vaadin-grid.material vaadin-grid-sorter .cell {
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                vaadin-grid.material vaadin-grid-sorter iron-icon {
                    transform: scale(0.8);
                }

                vaadin-grid.material vaadin-grid-sorter:not([direction]) iron-icon {
                    color: rgba(0, 0, 0, var(--dark-disabled-opacity));
                }

                vaadin-grid.material vaadin-grid-sorter[direction] {
                    color: rgba(0, 0, 0, var(--dark-primary-opacity));
                }

                vaadin-grid.material vaadin-grid-sorter[direction=desc] iron-icon {
                    transform: scale(0.8) rotate(180deg);
                }

                .show-all-patients {
                    left: calc(20% + 32px);
                    position: absolute;
                    bottom: 20px;
                }

                .add-btn-container {
                    width: 80%;
                    left: 20%;
                    position: absolute;
                    bottom: 16px;

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    margin-top: 2px;
                }

                .add-btn {
                    --paper-button-ink-color: var(--app-secondary-color-dark);
                    background: var(--app-secondary-color);
                    color: var(--app-text-color);
                    font-weight: bold;
                    font-size: 14px;
                    height: 40px;
                    min-width: 100px;
                    @apply --shadow-elevation-2dp;
                    padding: 10px 1.2em;
                }

                .exportcsv-btn {
                    --paper-button-ink-color: var(--app-secondary-color-dark);
                    background: var(--app-secondary-color);
                    color: var(--app-text-color);
                    font-weight: bold;
                    font-size: 14px;
                    height: 40px;
                    min-width: 100px;
                    @apply --shadow-elevation-2dp;
                    padding: 10px 1.2em;
                }

                .save-btn-container {
                    width: 20%;
                    left: 0;
                    position: absolute;
                    bottom: 16px;

                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    margin-top: 2px;
                }

                .save-btn {
                    --paper-button-ink-color: var(--app-secondary-color-dark);
                    background: var(--app-secondary-color);
                    color: var(--app-text-color);
                    font-weight: bold;
                    font-size: 14px;
                    height: 40px;
                    min-width: 100px;
                    @apply --shadow-elevation-2dp;
                    padding: 10px 1.2em;
                }

                .patient-photo {
                    background: rgba(0, 0, 0, 0.1);
                    height: 26px;
                    width: 26px;
                    min-width: 26px;
                    border-radius: 50%;
                    margin-right: 8px;
                    overflow: hidden !important;
                    padding-right: 0 !important;
                }

                .patient-photo img {
                    width: 100%;
                    margin: 50%;
                    transform: translate(-50%, -50%);
                }

                .container {
                    width: 100%;
                    height: calc(100vh - 64px);
                    display: grid;
                    grid-template-columns: 20% 30% 50%;
                    grid-template-rows: 100%;
                    position: fixed;
                    top: 64px;
                    left: 0;
                    bottom: 0;
                    right: 0;
                }

                .first-filter-panel {
                    /*width:20%;
                    height:calc(100% - 64px);*/
                    height: 100%;
                    background: var(--app-background-color-dark);
                    /*position:fixed;*/
                    top: 64px;
                    left: 0;
                    @apply --shadow-elevation-3dp;
                    grid-column: 1 / 1;
                    grid-row: 1 / 1;
                    z-index: 3;
                    overflow: hidden;
                    padding: 5px;
                }

                .second-filter-panel {
                    height: 100%;
                    background: var(--app-background-color);
                    top: 64px;
                    left: 20%;
                    @apply --shadow-elevation-2dp;
                    margin: 0;
                    grid-column: 2 / 4;
                    grid-row: 1 / 1;

                    z-index: 2;
                    @apply --padding-right-left-32;
                }

                .display-left-menu {
                    display: inherit;
                }

                .submenus-container {
                    overflow-x: auto;
                    height: calc(100% - 140px);
                    margin-bottom: 16px;
                }

                collapse-button > .menu-item.iron-selected {
                    @apply --padding-right-left-16;
                    color: var(--app-text-color-light);
                    background: var(--app-primary-color);
                    @apply --text-shadow;
                }

                .menu-item {
                    @apply --padding-right-left-16;
                    height: 48px;
                    @apply --paper-font-button;
                    text-transform: inherit;
                    justify-content: space-between;
                    cursor: pointer;
                    @apply --transition;
                }

                .menu-item:hover {
                    background: var(--app-dark-color-faded);
                    @apply --transition;
                }

                .menu-item .iron-selected {
                    background: var(--app-primary-color);
                }

                .filterNameInput {
                    width: 400px;
                }

                .deleteFilterIcon {
                    color: var(--app-text-color-disabled);
                }
                .deleteFilterIcon:hover {
                    color: var(--app-text-color);
                    transition: all 0.24s ease-in-out;
                }
                .deleteFilterIcon iron-icon{
                    height:14px;
                    width: 14px;
                }

                paper-item.iron-selected {
                    background-color: var(--app-primary-color);
                    color: var(--app-text-color-light);
                }

                paper-item.iron-selected:hover {
                    background: #5a6d75;
                }

                #selectPatientOption {
                    height: 34px;
                    padding: 14px;
                    background: #edf4fd;
                    -webkit-transition: background .15s;
                    transition: background .15s;
                    z-index: 2;
                    display : flex;

                }

                #selectPatientOption_back {
                    min-width: 80px;
                    cursor: pointer;
                }

                #selectPatientOption_text {
                    margin: auto;
                }

                #selectPatientOption_option {
                    cursor: pointer;
                }

                paper-listbox {
                    background: none;
                }

                #sharePatientDialog {
                    height: 550px;
                    width: 1000px;
                }

                #inputGender {
                    border:none;
                    width: calc(100% - 24px);
                    outline: 0;
                    background:none;
                    font-size: var(--form-font-size);
                }
                #fusionPatSelect{
                    border:none;
                    width: calc(100% - 24px);
                    outline: 0;
                    background:none;
                    font-size: var(--form-font-size);
                }
                #fusionDialog {
                    height: 200px;
                    width: 700px;
                }

                #duplicate-list{
                    max-height: 200px;
                }
                #sharePatientDelegationDialog{
                    width : 920px;
                }
                .delegationCheckBox {
                    width: 220px;
                }
                .filter-panel-title {
                    display:block;
                    @apply --paper-font-body2;
                    @apply --padding-32;
                    padding-top: 8px;
                    padding-bottom: 8px;
                    margin: 0;
                }

                .modal-title{
                    background: var(--app-background-color-dark);
                    margin-top: 0;
                    margin-bottom: 0;
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
                paper-dialog > div {
                    margin-top:0;
                }
            </style>
        </custom-style>

        <div class="container">
            <div class="first-filter-panel">
                <h4 class="filter-panel-title">Filtres sauvegardés</h4>
                <div class="submenus-container">
                    <paper-listbox selected-values="[[_selectedFilterIndexes(selectedFilters, selectedFilters.*)]]" focused="" on-selected-values-changed="selectFilter" multi="">
                        <template is="dom-repeat" items="[[_activeFilters(user.properties.*)]]" as="filter" id="filterMenu">
                            <paper-item class="menu-trigger menu-item" id="[[filter.name]]" api="[[api]]" user="[[user]]" language="[[language]]" data-item\$="[[filter.filter]]">
                                <div class="one-line-menu list-title">
                                    [[filter.name]]
                                </div>
                                <div class="deleteFilterIcon">
                                    <iron-icon icon="vaadin:close-circle" id="[[filter.name]]" on-tap="deleteFilter"></iron-icon>
                                </div>
                            </paper-item>
                        </template>
                    </paper-listbox>
                </div>
                <div class="save-btn-container">
                    <paper-button class="add-btn" on-tap="_saveFilter">[[localize('save_filter','Save
                        Filter',language)]]
                    </paper-button>
                </div>
            </div>

            <div class="second-filter-panel">

                <template is="dom-if" if="{{_isPatientsSelected(nbPatientSelected.*)}}">
                    <div id="selectPatientOption">
                        <div id="selectPatientOption_back" on-tap="_deselectAllSelectedPatients">
                            <iron-icon icon="vaadin:arrow-left"></iron-icon>
                            <span>Back</span>
                        </div>
                        <div id="selectPatientOption_text">
                            [[nbPatientSelected]] patient(s) selected
                        </div>
                        <div id="selectPatientOption_option">
                            <iron-icon icon="icons:check" on-tap="_openPatientActionDialog"></iron-icon>
                        </div>
                    </div>
                </template>
                <template is="dom-if" if="{{!_isPatientsSelected(nbPatientSelected.*)}}">
                    <paper-input id="filter" label="[[localize('fil','Filter',language)]]" value="{{filterValue}}" on-keydown="refresh"></paper-input>
                </template>



                <vaadin-grid id="patients-list" class="material" multi-sort="[[multiSort]]" active-item="{{activeItem}}" on-tap="click">
                    <vaadin-grid-column width="32px">
                        <template class="header">
                            <div class="cell frozen">[[localize('pic','Picture',language)]]</div>
                        </template>
                        <template>
                            <template is="dom-if" if="[[!_optionsChecked(shareOption.*,exportOption.*,fusionOption.*)]]">
                                <div class="cell frozen patient-photo"><img src\$="[[picture(item)]]"></div>
                            </template>
                            <template is="dom-if" if="[[_optionsChecked(shareOption.*,exportOption.*,fusionOption.*)]]">
                                <vaadin-checkbox id="[[item.id]]" patient="[[item]]" checked="[[_patientSelected(item, patientSelected.*)]]" on-checked-changed="_checkSharePatient"></vaadin-checkbox>
                            </template>
                        </template>
                    </vaadin-grid-column>

                    <vaadin-grid-column width="100px">
                        <template class="header">
                            <vaadin-grid-sorter path="lastName">[[localize('las_nam','Last name',language)]]
                            </vaadin-grid-sorter>
                        </template>
                        <template>
                            <div class="cell frozen">[[item.lastName]]</div>
                        </template>
                    </vaadin-grid-column>
                    <vaadin-grid-column width="100px">
                        <template class="header">
                            <vaadin-grid-sorter path="firstName">[[localize('fir_nam','First name',language)]]
                            </vaadin-grid-sorter>
                        </template>
                        <template>
                            <div class="cell frozen">[[item.firstName]]</div>
                        </template>
                    </vaadin-grid-column>
                    <vaadin-grid-column width="100px">
                        <template class="header">
                            <vaadin-grid-sorter path="dateOfBirth">[[localize('dat_of_bir','Date of birth',language)]]
                            </vaadin-grid-sorter>
                        </template>
                        <template>
                            <div class="cell frozen">[[formatDateOfBirth(item.dateOfBirth)]]</div>
                        </template>
                    </vaadin-grid-column>
                    <vaadin-grid-column width="100px">
                        <template class="header">
                            <div class="cell frozen">[[localize('ema','Email',language)]]</div>
                        </template>
                        <template>
                            <div class="cell frozen">[[item.email]]</div>
                        </template>
                    </vaadin-grid-column>
                    <vaadin-grid-column>
                        <template class="header">
                            <div class="cell numeric">[[localize('pho','Phone',language)]]</div>
                        </template>
                        <template>
                            <div class="cell numeric">[[item.phone]]</div>
                        </template>
                    </vaadin-grid-column>
                    <vaadin-grid-column>
                        <template class="header">
                            <div class="cell numeric">[[localize('mob','Mobile',language)]]</div>
                        </template>
                        <template>
                            <div class="cell numeric">[[item.mobile]]</div>
                        </template>
                    </vaadin-grid-column>
                </vaadin-grid>
                <div class="add-btn-container">
                    <template is="dom-if" if="[[!_optionsChecked(shareOption.*,exportOption.*,fusionOption.*)]]">
                        <paper-button class="add-btn" on-tap="_addPatient">[[localize('add_pat','Add Patient',language)]]
                        </paper-button>

                        <template is="dom-if" if="[[btnSelectionPatient]]">
                            <paper-button class="add-btn" on-tap="_sharePatient">[[localize('share_pat','Share
                                patients',language)]]
                            </paper-button>
                            <paper-button class="add-btn" on-tap="_exportPatient">[[localize('export_pat','Export
                                patients',language)]]
                            </paper-button>
                            <paper-button class="add-btn" on-tap="_fusionPatient">[[localize('fusion_pat','Fusion
                                patients',language)]]
                            </paper-button>
                        </template>
                        <paper-button class="exportcsv-btn" on-tap="_exportListToCsv">[[localize('export_csv','Export to CSV',language)]]
                        </paper-button>
                    </template>
                    <template is="dom-if" if="[[_optionsChecked(shareOption.*,exportOption.*,fusionOption.*)]]">
                        <paper-button class="add-btn" on-tap="_cancelSelecting">[[localize('canc','Cancel',language)]]
                        </paper-button>
                    </template>
                </div>
                <vaadin-checkbox class="show-all-patients" checked="{{showInactive}}">
                    [[localize('show_inactive_patients','Show inactive patients',language)]]
                </vaadin-checkbox>
            </div>
        </div>

        <paper-dialog id="add-patient-dialog">
            <div class="horizontal">
                <paper-input label="Last name" style="min-width:200px" value="{{lastName}}"></paper-input>
                <paper-input label="First name" value="{{firstName}}"></paper-input>
                <vaadin-date-picker label="Date of Birth" i18n="[[i18n]]" value="{{dateAsString}}"></vaadin-date-picker>
                <paper-input label="Ssin" value="{{ssin}}" on-keyup="_searchDuplicate"></paper-input>
                <paper-input-container>
                    <label slot="label">[[localize("gender","Gender",language)]]
                    </label>
                    <iron-input slot="input" bind-value="{{valueGender}}">
                        <input id="inputGender" readonly="" value="{{valueGender::input}}" on-tap="_openPopupMenu">
                    </iron-input>
                    <paper-menu-button id="paper-menu-button" slot="suffix" horizontal-offset="[[listBoxOffsetWidth]]">
                        <iron-icon icon="paper-dropdown-menu:arrow-drop-down" slot="dropdown-trigger"></iron-icon>
                        <paper-listbox id="dropdown-listbox" slot="dropdown-content" selected="{{selected}}">
                            <paper-item>[[localize('auc','Aucun',language)]]</paper-item>
                            <template is="dom-repeat" items="[[option]]">
                                <paper-item>[[item]]</paper-item>
                            </template>
                        </paper-listbox>
                    </paper-menu-button>
                </paper-input-container>
            </div>
            <div>
                <template is="dom-if" if="[[displayResult]]">
                    <vaadin-grid id="duplicate-list" class="material" items="[[listResultPatients]]">
                        <vaadin-grid-column>
                            <template class="header">
                                [[localize('las_nam','Last name',language)]]
                            </template>
                            <template>
                                <div>[[item.lastName]]</div>
                            </template>
                        </vaadin-grid-column>
                        <vaadin-grid-column>
                            <template class="header">
                                [[localize('fir_nam','First name',language)]]
                            </template>
                            <template>
                                <div>[[item.firstName]]</div>
                            </template>
                        </vaadin-grid-column>
                        <vaadin-grid-column>
                            <template class="header">
                                [[localize('dat_of_bir','Date of birth',language)]]
                            </template>
                            <template>
                                <div>[[formatDateOfBirth(item.dateOfBirth)]]</div>
                            </template>
                        </vaadin-grid-column>
                        <vaadin-grid-column>
                            <template class="header">
                                [[localize('ssin','SSIN',language)]]
                            </template>
                            <template>
                                <div>[[item.ssin]]</div>
                            </template>
                        </vaadin-grid-column>
                        <vaadin-grid-column>
                            <template class="header">
                                [[localize('remark','Remarks',language)]]
                            </template>
                            <template>
                                <div>[[item.remarks]]</div>
                            </template>
                        </vaadin-grid-column>
                    </vaadin-grid>
                </template>
            </div>
            <div class="buttons">
                <paper-button class="modal-button" dialog-dismiss="">[[localize('can','Cancel',language)]]</paper-button>
                <paper-button class="modal-button modal-button--save" dialog-confirm="" autofocus="" on-tap="confirm">[[localize('cre','Create',language)]]
                </paper-button>
            </div>
        </paper-dialog>

        <paper-dialog id="saveFilterDialog">
            <h4 class="modal-title">[[localize('save_filter','Save Filter',language)]]</h4>
            <div>
                <paper-input class="filterNameInput" label="Filter name" value="{{filterName}}"></paper-input>
            </div>
            <div class="buttons">
                <paper-button class="modal-button" dialog-dismiss="">[[localize('can','Cancel',language)]]</paper-button>
                <paper-button class="modal-button modal-button--save" dialog-confirm="" autofocus="" on-tap="confirmFilter">[[localize('cre','Create',language)]]
                </paper-button>
            </div>
        </paper-dialog>

        <paper-dialog id="sharePatientDialog">
            <h4>Avec quel prestataire souhaitez-vous partager ces patients ?</h4>
            <paper-input id="hcpFilter" label="[[localize('fil','Filter',language)]]" value="{{hcpFilterValue}}" on-keydown="_hcpFilterChanged"></paper-input>
            <div>
                <vaadin-grid id="hcp-list" class="material" multi-sort="[[multiSort]]" items="[[hcp]]" active-item="{{activeHcp}}">
                    <vaadin-grid-column width="100px">
                        <template class="header">
                        </template>
                        <template>
                            <vaadin-checkbox id="[[item.id]]" checked="[[_sharingHcp(item, hcp.*)]]" on-checked-changed="_checkHcp"></vaadin-checkbox>
                        </template>
                    </vaadin-grid-column>
                    <vaadin-grid-column width="100px">
                        <template class="header">
                            <vaadin-grid-sorter path="lastName">[[localize('las_nam','Last name',language)]]
                            </vaadin-grid-sorter>
                        </template>
                        <template>
                            <div class="cell frozen">[[item.lastName]]</div>
                        </template>
                    </vaadin-grid-column>
                    <vaadin-grid-column width="100px">
                        <template class="header">
                            <vaadin-grid-sorter path="firstName">[[localize('fir_nam','First name',language)]]
                            </vaadin-grid-sorter>
                        </template>
                        <template>
                            <div class="cell frozen">[[item.firstName]]</div>
                        </template>
                    </vaadin-grid-column>
                    <vaadin-grid-column width="100px">
                        <template class="header">
                            <vaadin-grid-sorter path="speciality">[[localize('spe','Speciality',language)]]
                            </vaadin-grid-sorter>
                        </template>
                        <template>
                            <div class="cell frozen">[[item.speciality]]</div>
                        </template>
                    </vaadin-grid-column>
                    <vaadin-grid-column width="100px">
                        <template class="header">
                            <vaadin-grid-sorter path="email">[[localize('ema','Email',language)]]
                            </vaadin-grid-sorter>
                        </template>
                        <template>
                            <div class="cell frozen">[[item.email]]</div>
                        </template>
                    </vaadin-grid-column>
                </vaadin-grid>
            </div>
            <div class="buttons">
                <paper-button dialog-dismiss="">[[localize('can','Cancel',language)]]</paper-button>
                <paper-button dialog-confirm="" autofocus="" on-tap="confirmSharingNextStep">[[localize('share_pat','Share
                    patients',language)]]
                </paper-button>
            </div>
        </paper-dialog>

        <paper-dialog id="sharePatientDelegationDialog">
            <h4>[[localize("titleSharPatDelDia","Quels sont les droits d'accès à partager ?",language)]]</h4>
            <div>
                <vaadin-grid items="[[hcpSelectedForSharing]]">
                    <vaadin-grid-column width="150px">
                        <template class="header">
                            Prestataires
                        </template>
                        <template>
                            [[getNamesWithHcpId(item.id)]]
                        </template>
                    </vaadin-grid-column>
                    <vaadin-grid-column width="700px">
                        <template class="header">
                            Droits d'accès
                        </template>
                        <template>
                            <div>
                                <template is="dom-repeat" items="[[delegation]]" as="delegationTag">
                                    <template is="dom-if" if="{{_showAllDelegation(delegationTag,item.id,hcpSelectedForSharing.*)}}">
                                        <vaadin-checkbox class="delegationCheckBox" id="[[item.id]][[delegationTag]]" checked="{{checkingDelegation(delegationTag,item.delegation,hcpSelectedForSharing.*)}}" on-checked-changed="_checkDelegation">[[localize(delegationTag,delegationTag,language)]]</vaadin-checkbox>
                                        <template is="dom-if" if="{{_neededBr(delegationTag)}}">
                                            <br>
                                        </template>
                                    </template>
                                </template>
                            </div>
                        </template>
                    </vaadin-grid-column>
                </vaadin-grid>
            </div>
            <div class="buttons">
                <paper-button dialog-dismiss="">[[localize('can','Cancel',language)]]</paper-button>
                <paper-button dialog-confirm="" autofocus="" on-tap="confirmSharing">[[localize('share_pat','Share
                    patients',language)]]
                </paper-button>
            </div>
        </paper-dialog>

        <paper-dialog id="fusionDialog">
            <div>
                <label slot="label">[[localize('fir_pat_fus','Selectionner le patient qui restera',language)]]
                </label>
                <paper-input-container>
                    <iron-input slot="input">
                        <input id="fusionPatSelect" value="{{getNamePat(idFusionPat,idFusionPat.*)}}" readonly="" on-tap="_openPopupMenu">
                    </iron-input>
                    <paper-menu-button id="paper-menu-button" slot="suffix" horizontal-offset="[[listBoxOffsetWidth]]">
                        <iron-icon icon="paper-dropdown-menu:arrow-drop-down" slot="dropdown-trigger"></iron-icon>
                        <paper-listbox id="dropdown-listbox" slot="dropdown-content" selected="{{fusionSelected}}">
                            <template is="dom-repeat" items="{{patientSelected}}">
                                <paper-item>{{item.names}}</paper-item>
                            </template>
                        </paper-listbox>
                    </paper-menu-button>
                </paper-input-container>

            </div>
            <div class="buttons">
                <paper-button dialog-dismiss="">[[localize('can','Cancel',language)]]</paper-button>
                <paper-button dialog-confirm="" autofocus="" on-tap="confirmFusion">[[localize('fus_pat','Fusion
                    patients',language)]]
                </paper-button>
            </div>
        </paper-dialog>
`;
  }

  static get is() {
      return 'ht-pat-list'
  }

  static get properties() {
      return {
          api: {
              type: Object
          },
          user: {
              type: Object
          },
          selectedPatient: {
              type: Object,
              notify: true
          },
          activeItem: {
              type: Object
          },
          hcp:{
            type: Object
          },
          hcpSelectedForSharing: {
              type: Object,
              notify: true,
              value: () => []
          },
          showInactive: {
              type: Boolean,
              value: false
          },
          shareOption: {
              type: Boolean,
              value: false
          },
          btnSelectionPatient: {
              type: Boolean,
              value: false,
              notify: true
          },
          nbPatientSelected:{
              type: Number,
              value: 0
          },
          i18n: {
              Type: Object,
              value: function () {
                  moment.locale('fr')
                  const res = {
                      monthNames: moment.months(),
                      weekdays: moment.weekdays(),
                      weekdaysShort: moment.weekdaysShort(),
                      firstDayOfWeek: moment.localeData().firstDayOfWeek(),
                      week: 'Semaine',
                      calendar: 'Calendrier',
                      clear: 'Clear',
                      today: 'Aujourd\'hui',
                      cancel: 'Annuler',
                      formatDate: function (d) {
                          //return moment(d).format(moment.localeData().longDateFormat('L'))
                          return moment(d).format('DD/MM/YYYY')
                      },
                      parseDate: function (s) {
                          return moment(s, 'DD/MM/YYYY').toDate()
                      },
                      formatTitle: function (monthName, fullYear) {
                          return monthName + ' ' + fullYear
                      }
                  }
                  return res
              }
          },
          selectedFilters: {
              type: Array,
              notify: true,
              value: () => []
          },
          patientSelected: {
              type: Array,
              notify: true,
              value: () => []
          },
          displayResult: {
              type: Boolean,
              value: false
          },
          listResultPatients :{
              type: Object,
              value: () => []
          },
          form:{
              type: Object,
              value: function () {
                  return require('./rsrc/PatientAdministrativeForm.json');
              }
          },
          listBoxOffsetWidth: {
              type: Number,
              value: -100
          },
          selected: {
              type: Number,
              observer: '_selectedChanged'
          },
          option:{
              type: Array
          },
          valueGender: {
              type: String,
              notify: true
          },
          lastName : {
              type : String,
              value : null,
              observer : '_searchDuplicate'
          },
          firstName : {
              type : String,
              value : null,
              observer : '_searchDuplicate'
          },
          dateAsString : {
              type : String,
              value : null,
              observer : '_searchDuplicate'
          },
          ssin : {
              type : String,
              value : null,
              observer : '_searchDuplicate'
          },
          delegation : {
              type : Array,
              value : [
                  "all",
                  "administrativeData",
                  "generalInformation",
                  "financialInformation",
                  "medicalInformation",
                  "sensitiveInformation",
                  "confidentialInformation",
                  "cdItemRisk",
                  "cdItemFamilyRisk",
                  "cdItemHealthcareelement",
                  "cdItemHealthcareapproach",
                  "cdItemAllergy",
                  "cdItemDiagnosis",
                  "cdItemLab",
                  "cdItemResult",
                  "cdItemParameter",
                  "cdItemMedication",
                  "cdItemTreatment",
                  "cdItemVaccine"
              ]
          },
          exportOption :{
              type : Boolean,
              value : false
          },
          fusionOption :{
              type : Boolean,
              value : false
          },
          idFusionPat : {
              type : String,
              notify: true
          },
          fusionSelected : {
              type: Number,
              observer: '_fusionSelectedChanged'
          },
          hcpFilterValue: {
              type: String
          }
      }
  }

  static get observers() {
      return ['_filterValueChanged(filterValue)', '_showInactivePatientsChanged(showInactive)', '_hcpFilterChanged(hcpFilterValue)']
  }

  constructor() {
      super()
  }

  _showInactivePatientsChanged() {
      this.$['patients-list'].clearCache()
  }

  ready() {
      super.ready()

      var grid = this.$['patients-list']

      grid.lastParams = null //Used to prevent double calls
      grid.size = 0
      grid.pageSize = 50
      grid.dataProvider = function (params, callback) {
          const sort = params.sortOrders && params.sortOrders[0] && params.sortOrders[0].path || 'lastName'
          const desc = params.sortOrders && params.sortOrders[0] && params.sortOrders[0].direction === 'desc' || false

          const pageSize = params.pageSize || grid.pageSize
          const startIndex = (params.page || 0) * pageSize
          const endIndex = ((params.page || 0) + 1) * pageSize

          const thisParams = this.filterValue + "|" + sort + "|" + (desc ? "<|" : ">|") + startIndex + ":" + pageSize + ":"

          let latestSearchValue = this.filterValue
          this.latestSearchValue = latestSearchValue

          if (!latestSearchValue || latestSearchValue.length < 2) {
              console.log("Cancelling empty search")
              this.btnSelectionPatient = false
              this.shareOption = false
              this.exportOption = false
              this.fusionOption = false
              grid.set("size", 0)
              callback([])
              return
          }

          let svcFilter = null
          try {
              svcFilter = filterExParser.parse(latestSearchValue, {hcpId: this.user.healthcarePartyId})
          } catch (ignored) {
          }

          const filter = svcFilter ? null : /^[0-9]{11}$/.test(latestSearchValue) ? {
              '$type': 'PatientByHcPartyAndSsinFilter',
              'healthcarePartyId': this.user.healthcarePartyId,
              'ssin': latestSearchValue
          } : /^[0-3]?[0-9][\/-](1[0-2]|0?[0-9])[\/-]([1-2][89012])?[0-9][0-9]$/.test(latestSearchValue) ? {
              '$type': 'PatientByHcPartyDateOfBirthFilter',
              'healthcarePartyId': this.user.healthcarePartyId,
              'dateOfBirth': latestSearchValue.replace(/([0-3]?[0-9])[\/-](1[0-2]|0?[0-9])[\/-]((?:[1-2][89012])?[0-9][0-9])/g, (correspondance, p1, p2, p3, decalage, chaine )=>(p3.length===4 ? p3 : (p3 >20) ? "19"+p3 : "20"+p3)+(p2.length===2 ? p2 : "0"+p2)+(p1.length===2 ? p1 : "0"+p1))
          } : {
              '$type': 'PatientByHcPartyNameContainsFuzzyFilter',
              'healthcarePartyId': this.user.healthcarePartyId,
              'searchString': latestSearchValue
          }

          if (grid.lastParams !== thisParams) {
              grid.lastParams = thisParams
              console.log("Starting search for " + thisParams)
              grid.latestPromise = svcFilter ? this.api.contact().filterServicesBy(null, null, 10000, {filter: svcFilter}).then(out => {
                  let rows = out.rows

                  const svcDict = rows.reduce((acc, s) => {
                      const cs = acc[s.id]
                      if (!cs || !cs.modified || s.modified && this.api.after(s.modified, cs.modified)) {
                          acc[s.id] = s
                      }
                      return acc
                  }, {})
                  const services = _.sortBy(Object.values(svcDict).filter(s => !s.endOfLife), [s => +this.api.moment(s.modified || s.created || s.valueDate)])
                  const hcpId = this.user.healthcarePartyId

                  const ownersOfDelegations = services.reduce((acc, s) => {
                      s.cryptedForeignKeys[hcpId].forEach(d => acc[d.owner] = 1)
                      return acc
                  }, {})
                  const importedAESHcPartyKeys = {}
                  return this.api.hcparty().getHcPartyKeysForDelegate(hcpId).then(keys => Promise.all(Object.keys(ownersOfDelegations).map(ownerId => this.api.crypto().decryptHcPartyKey(ownerId, hcpId, keys[ownerId]).then(importedAESHcPartyKey => importedAESHcPartyKeys[ownerId] = importedAESHcPartyKey)))).then(() => Promise.all(services.map(s => Promise.all(s.cryptedForeignKeys[hcpId].map(k => this.api.crypto().AES.decrypt(importedAESHcPartyKeys[k.owner].key, this.api.crypto().utils.hex2ua(k.key))))))).then(arraysOfArraysOfPatIdsAsUa => {
                      return this.api.patient().filterBy(null, null, endIndex || grid.pageSize, params.index, sort, desc, {
                          filter: {
                              '$type': 'PatientByIdsFilter',
                              'ids': _.uniqBy(_.compact(_.flatMap(arraysOfArraysOfPatIdsAsUa).map(ua => this.api.crypto().utils.ua2text(ua).split(':')[1])))
                          }
                      })
                  })
              }) : this.api.patient().filterBy(null, null, endIndex || grid.pageSize, params.index, sort, desc, {filter: filter})
          }

          grid.latestPromise.then(function (res) {
              if (this.filterValue !== latestSearchValue) {
                  console.log("Cancelling obsolete search")
                  return
              }

              const keptPatients = _.slice(res.rows, startIndex, endIndex).filter(p => this.showInactive || p.active)

              if (keptPatients.length > 0) {
                  this.btnSelectionPatient = true
              }

              if (grid.size !== res.totalSize - (res.rows.length - keptPatients.length)) {
                  grid.set("size", res.totalSize - (res.rows.length - keptPatients.length))
              }
              callback(keptPatients.map(this.pimpPatient))
          }.bind(this))
      }.bind(this)

      //get Genders
      let jsonGender;
      this.form.sections.forEach(s => s.formColumns.forEach(c => c.formDataList.forEach(d =>{ if(d.label === "Gender"){jsonGender = d.editor.menuOptions}})));
      this.set("option", jsonGender ? jsonGender : [])

  }

  _hcpFilterChanged(e){
      let latestSearchValue = this.hcpFilterValue || e && e.detail.value;
      this.latestSearchValue = latestSearchValue;
      if (!latestSearchValue || latestSearchValue.length < 2) {
          console.log("Cancelling empty search");
          this.set('hcp', _.values(_.orderBy(this.api.hcParties, ['lastName'], ['asc'])));
          return;
      }
      this._hcpDataProvider() && this._hcpDataProvider().filter(latestSearchValue).then(res => {
          if (latestSearchValue !== this.latestSearchValue) {
              console.log("Cancelling obsolete search");
              return;
          }
          this.set('hcp', res.rows);
      });
  }

  _hcpDataProvider() {
      return {
          filter: function (hcpFilterValue) {
              const desc = 'desc';
              let count = 15;
              return Promise.all([this.api.hcparty().findByName(hcpFilterValue, null,  null, count, desc)]).then(results => {
                  const hcpList = results[0];
                  const filtered = _.flatten(hcpList.rows.filter(hcp => hcp.lastName && hcp.lastName !== "" || hcp.firstName && hcp.firstName !== "").map(hcp => ({id: hcp.id , lastName: hcp.lastName, firstName: hcp.firstName, speciality: hcp.speciality, email: hcp.email}) ));
                  return { totalSize: filtered.length, rows: filtered };
              });

          }.bind(this)
      };
  }


  formatDateOfBirth(dateOfBirth) {
      return dateOfBirth ? ("" + dateOfBirth).replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$3/$2/$1') : 'N/A'
  }

  refresh() {
      //Give the gui the time to update the field
      setTimeout(function () {
          let currentValue = this.filterValue

          if (this.latestSearchValue === currentValue) {
              return
          }
          setTimeout(function () {
              if (currentValue === this.filterValue) {
                  console.log("Triggering search for " + this.filterValue)
                  this.$['patients-list'].clearCache()
              } else {
                  console.log("Skipping search for " + this.filterValue + " != " + currentValue)
              }
          }.bind(this), 500) //Wait for the user to stop typing
      }.bind(this), 100)
  }



  pimpPatient(p) {
      p.email = p.addresses && p.addresses.map(a => a.telecoms && a.telecoms.filter(t => t.telecomType === 'email').map(t => t.telecomNumber).join()).filter(a => a).join() || ''
      p.phone = p.addresses && p.addresses.map(a => a.telecoms && a.telecoms.filter(t => t.telecomType === 'phone').map(t => t.telecomNumber).join()).filter(a => a).join() || ''
      p.mobile = p.addresses && p.addresses.map(a => a.telecoms && a.telecoms.filter(t => t.telecomType === 'mobile').map(t => t.telecomNumber).join()).filter(a => a).join() || ''
      return p
  }

  click(e) {
      if(this.shareOption || this.exportOption || this.fusionOption) return;
      const selected = this.activeItem
      console.log('selected ' + selected + ' - ' + this.latestSelected)
      this.set('selectedPatient', selected)
  }

  _addPatient() {
      this.$['add-patient-dialog'].open()
  }

  _exportListToCsv() {
      var columns = ["lastName", "firstName", "gender", "dateOfBirth", "ssin", "email", "phone", "mobile"];
      var csv = columns.join(";") + "\n";
      var grid = this.$['patients-list'];
      grid.dataProvider({pageSize:10000}, function(items) {
          items.forEach( item =>
              csv += columns.map(col => item[col]).join(";") + '\n'
          );

          var file = new Blob([csv] ,{type: "text/csv"});
          var a = document.createElement("a");
          document.body.appendChild(a);
          a.style = "display: none";

          var url = window.URL.createObjectURL(file);
          a.href = url;
          a.download = "patients-list.csv";
          a.click();
          window.URL.revokeObjectURL(url)
      })

  }

  confirm() {
      this.api.patient().newInstance(this.user, {
          lastName: this.lastName,
          firstName: this.firstName,
          active: true,
          dateOfBirth: this.dateAsString && parseInt(this.dateAsString.replace(/-/g, '')),
          ssin : this.ssin,
          gender : this.valueGender,
      }).then(p => this.api.patient().createPatient(p)).then(p => this.api.register(p,'patient')).then(p => this.set('selectedPatient', p))
  }

  confirmFilter() {
      const filtersProperty = this.user.properties.find(p => p.type && p.type.identifier === 'org.taktik.icure.datafilters') ||
          (this.user.properties[this.user.properties.length] = {
              type: {identifier: 'org.taktik.icure.datafilters'},
              typedValue: {type: 'STRING', stringValue: '{}'}
          })

      if (!filtersProperty.typedValue) {
          filtersProperty.typedValue = {type: 'STRING', stringValue: '{}'}
      }
      if (!filtersProperty.typedValue.stringValue) {
          filtersProperty.typedValue.type = 'STRING'
          filtersProperty.typedValue.stringValue = '{}'
      }

      const filters = JSON.parse(filtersProperty.typedValue.stringValue)
      try {
          filters[this.filterName] = filterExParser.parse(this.filterValue, {hcpId: this.user.healthcarePartyId})
      } catch (e) {
          filters[this.filterName] = {
              '$type': 'PatientByHcPartyNameContainsFuzzyFilter',
              'healthcarePartyId': this.user.healthcarePartyId,
              'searchString': this.filterValue
          }
      }

      filtersProperty.typedValue.stringValue = JSON.stringify(filters)

      this.set('user.properties', this.user.properties.map(x => x))

      this.api.user().modifyUser(this.user).then(user => this.dispatchEvent(new CustomEvent('user-saved', {
          detail: user,
          bubbles: true,
          composed: true
      })))
  }

  picture(pat) {
      if (!pat) {
          return require('../../../images/Male-128.jpg')
      }
      return pat.picture ? 'data:image/jpeg;base64,' + pat.picture : pat.gender === 'female' ? require('../../../images/Female-128.jpg') : require('../../../images/Male-128.jpg')
  }

  _saveFilter(e) {
      this.$['saveFilterDialog'].open()
  }

  deleteFilter(e) {
      e.stopPropagation()

      const filtersProperty = this.user.properties.find(p => p.type && p.type.identifier === 'org.taktik.icure.datafilters') ||
          (this.user.properties[this.user.properties.length] = {
              type: {identifier: 'org.taktik.icure.datafilters'},
              typedValue: {type: 'STRING', stringValue: '{}'}
          })

      const filters = JSON.parse(filtersProperty.typedValue.stringValue)
      delete(filters[e.target.id])

      filtersProperty.typedValue.stringValue = JSON.stringify(filters)

      this.set('user.properties', this.user.properties.map(x => x))

      this.api.user().modifyUser(this.user).then(user => this.dispatchEvent(new CustomEvent('user-saved', {
          detail: user,
          bubbles: true,
          composed: true
      })))
  }

  _activeFilters() {
      const filters = this.user.properties.find(p => p.type && p.type.identifier === 'org.taktik.icure.datafilters')
      if (filters) {
          const parsedFilters = JSON.parse(filters.typedValue.stringValue)
          return _.sortBy(Object.keys(parsedFilters).map(k => ({name: k, filter: parsedFilters[k]})))
      }
      return []
  }

  _selectedFilterIndexes() {
      const activeFilters = this._activeFilters()
      return this.selectedFilters ? this.selectedFilters.map(f => activeFilters.map(ff => ff.name).indexOf(f.name)) : []
  }

  _selectedFiltersAsString() {
      const filterPrinter = new FilterExPrinter()
      return filterPrinter.print(this.selectedFilters.length > 1 ?
          {"$type": "IntersectionFilter", filters: this.selectedFilters.map(f => f.filter)} :
          this.selectedFilters[0].filter)
  }

  _filterValueChanged(filterValue) {
      if (this.selectedFilters[0] && this._selectedFiltersAsString() !== this.filterValue) {
          this.set('selectedFilters', [])
      }
  }

  selectFilter(e) {
      const activeFilters = this._activeFilters()

      this.set('selectedFilters', e.target.selectedValues.map(idx => activeFilters[idx]))
      if (this.selectedFilters[0]) {
          this.set('filterValue', this._selectedFiltersAsString())
          this.previouslySetFilterValue = this.filterValue
      } else {
          if (this.filterValue === this.previouslySetFilterValue) {
              this.set('filterValue', '')
          }
      }

      this.refresh(e)
  }

  _sharePatient(e) {
      e.stopPropagation()
      this.set('shareOption', true)
      this.set('exportOption', false)
      this.set('fusionOption', false)

  }

  _exportPatient(e) {
      e.stopPropagation()
      this.set('exportOption', true)
      this.set('shareOption', false)
      this.set('fusionOption', false)
  }

  _fusionPatient(e){
      e.stopPropagation()
      this.set('fusionOption', true)
      this.set('shareOption', false)
      this.set('exportOption', false)
  }

  _checkSharePatient(e) {
      const targetId = e.target.id

      if (targetId !== "") {
          const mark = this.patientSelected.find(m => m.id === targetId)
          if (!mark) {
              this.api.patient().getPatient(targetId).then(result =>{
                  this.push('patientSelected',{id:targetId, check:true, names : result.firstName+" "+result.lastName})
                  this.set('nbPatientSelected',this.patientSelected.filter(patient => patient.check).length)
              })
          } else {
              mark.check = !mark.check
              this.notifyPath('patientSelected.*')
              this.set('nbPatientSelected',this.patientSelected.filter(patient => patient.check).length)
          }
      }

  }

  _patientSelected(item) {

      if (item) {
          const mark = this.patientSelected.find(m => m.id === item.id)
          return mark && mark.check
      } else {
          return false
      }
  }

  _openPatientActionDialog() {
      if(this.shareOption) {
          this.$['sharePatientDialog'].open()
          this.set('hcp', _.values(_.orderBy(this.api.hcParties, ['lastName'], ['asc'])))
      }
      if(this.exportOption){
          //export here
          let p = Promise.resolve([])
          this.patientSelected.forEach(patient =>{
              p = p.then(acc =>
                  this.api.patient().getPatient(patient.id)
                      .then(patientDto =>{
                          this.api.crypto()
                              .extractDelegationsSFKs(patientDto, this.user.healthcarePartyId)
                              .then(secretForeignKeys => {
                              this.api.bekmehr().generateSmfExportWithEncryptionSupport(patientDto.id, this.user.healthcarePartyId, "fr", {
                                  secretForeignKeys: secretForeignKeys,
                                  comment: null
                              }).then(output => {
                                  //creation of the xml file
                                  var file = typeof output === "string" ? new Blob([output] ,{type: "application/xml"}) : output

                                  //creation the downloading link
                                  var a = document.createElement("a");
                                  document.body.appendChild(a);
                                  a.style = "display: none";

                                  //download the new file
                                  var url = window.URL.createObjectURL(file);
                                  a.href = url;
                                  a.download = patient.names.replace(" ","_")+"_"+(moment().format("x"))+".xml";
                                  a.click();
                                  window.URL.revokeObjectURL(url);

                                  document.body.removeChild(a);
                              }).catch( error=> console.log(error))
                      })
              }))
          })
      }
      if(this.fusionOption){
          this.set("patientSelected",this.patientSelected.filter(element => element.check===true))
          if(this.patientSelected.length>1)
              this.$['fusionDialog'].open()
      }
  }

  _deselectAllSelectedPatients() {
      this.set('patientSelected', [])
      this.notifyPath('patientSelected.*')

      this.set('nbPatientSelected', 0)
  }

  _cancelSelecting(){
      this._deselectAllSelectedPatients()
      this.set('shareOption', false)
      this.set('exportOption', false)
      this.set('fusionOption', false)
  }

  _checkHcp(e){
      if (e.target.id !== "") {
          const mark = this.hcpSelectedForSharing.find(m => m.id === e.target.id)
          if (!mark) {
              this.push('hcpSelectedForSharing',{
                  id:e.target.id,
                  check:true,
                  delegation : ["all"]
              })
          } else {
              mark.check = !mark.check
              this.notifyPath('hcpSelectedForSharing.*')
          }
      }

  }

  _sharingHcp(item){
      if (item) {
          const mark = this.hcpSelectedForSharing.find(m => m.id === item.id)
          return mark && mark.check
      } else {
          return false
      }
  }

  confirmSharingNextStep(){

      let pPromise = Promise.resolve([])
      const hcpId = this.user.healthcarePartyId
      this.patientSelected.filter(pat => pat.check && pat.id).forEach(pat => {
          pPromise = pPromise.then(pats =>
              this.api.patient().share(pat.id, hcpId, this.hcpSelectedForSharing.filter(hcp => hcp.check && hcp.id).map(hcp => hcp.id))
                  .then(pat => _.concat(pats, pat))
          )
      })

      this.$['sharePatientDialog'].close();

      //erase uncheck user
      const tab = _.differenceBy(this.hcpSelectedForSharing,[{'check' : false}], 'check')
      this.set("hcpSelectedForSharing",tab)

      //loading existing delegation of shared users
      this.hcpSelectedForSharing.forEach( (userShared,index)  => {
          let delegationTag = [];
          const keys = Object.keys(this.user.autoDelegations)
          keys.forEach(key => {
              if(this.user.autoDelegations[key].find(x => x===userShared.id))
                  delegationTag.push(key)
          })
          if(delegationTag.length!==0)
              this.set("hcpSelectedForSharing."+index+".delegation",delegationTag);
      })

      this.$['sharePatientDelegationDialog'].open();

      return pPromise
  }

  confirmSharing() {
      this.updateDelegation();
      this.$['sharePatientDelegationDialog'].close();
  }

  _openPopupMenu() {
      if (this.readOnly) {
          return;
      }
      this.shadowRoot.querySelector('#paper-menu-button').open();
  }

  _selectedChanged(selected) {
      if (this.readOnly) {
          return;
      }
      this.set('valueGender', this.option[selected - 1] || null);
  }

  _searchDuplicate() {
      const fingerPrint = this.firstName + '|' + this.lastName + '|' + this.dateAsString + '|' + this.ssin
      //creation of filters
      const totalChars = (this.firstName && this.firstName.length || 0) + (this.lastName && this.lastName.length || 0)
      const firstNameFilter = this.firstName && this.firstName.length >= 2 && totalChars >= 4 && ({
          '$type': 'PatientByHcPartyNameContainsFuzzyFilter',
          'healthcarePartyId': this.user.healthcarePartyId,
          'searchString': this.firstName
      })
      const lastNameFilter = this.lastName && this.lastName.length >= 2 && totalChars >= 4 && ({
          '$type': 'PatientByHcPartyNameContainsFuzzyFilter',
          'healthcarePartyId': this.user.healthcarePartyId,
          'searchString': this.lastName
      })
      const dateOfBirthFilter = (/^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$/.test(this.dateAsString)) && ({
          '$type': 'PatientByHcPartyDateOfBirthFilter',
          'healthcarePartyId': this.user.healthcarePartyId,
          'dateOfBirth': this.dateAsString.replace(/-/g,"")
      })
      const ssinFilter = /^[0-9]{11}$/.test(this.ssin) && ({
          '$type': 'PatientByHcPartyAndSsinFilter',
          'healthcarePartyId': this.user.healthcarePartyId,
          'ssin': this.ssin
      })

      const intersectionFilters = [firstNameFilter, lastNameFilter, dateOfBirthFilter].filter(x => !!x)
      const unionFilters = [intersectionFilters.length > 1 ? ({
          '$type': 'IntersectionFilter',
          filters: intersectionFilters
      }) : intersectionFilters[0], ssinFilter].filter(x => !!x)

      const unionFilter = unionFilters.length>1 ? ({
          '$type': 'UnionFilter',
          filters: unionFilters
      }) : unionFilters[0]

      clearTimeout(this.checkDuplicateTimeout)
      if (unionFilter) {
          this.checkDuplicateTimeout = setTimeout(() => {
              if (fingerPrint !== this.firstName + '|' + this.lastName + '|' + this.dateAsString + '|' + this.ssin) {
                  return
              }
              console.log(unionFilter)
              //research
              this.api.patient().filterBy(null, null, 50, 0, 1, 'desc', {filter: unionFilter}).then(tb => {
                  console.log("result of the research : " + JSON.stringify(tb))

                  //construct of the table
                  if (tb["totalSize"] !== 0) {
                      tb["rows"].map(row => {
                          row["remarks"] = this.localize("rem_Ty5_CreatPat", "Ressemblance !", language)
                          let flagRem = false;
                          if (row["firstName"].toUpperCase() === this.firstName.toUpperCase() && row["lastName"].toUpperCase() === this.lastName.toUpperCase()) {
                              row["remarks"] = this.localize("rem_Ty1_CreatPat", "Même nom et prénom!", language)

                              if (row["dateOfBirth"].toString() === this.dateAsString.replace(/-/g, '')) {
                                  flagRem = true;
                                  row["remarks"] = this.localize("rem_Ty4_CreatPat", "Même nom, prénom et date de naissance!", language)
                              }
                          }

                          if (row["ssin"] === this.ssin && this.ssin != "") {
                              row["remarks"] = this.localize("rem_Ty2_CreatPat", "Même NISS!", language)
                              if (flagRem) {
                                  row["remarks"] = this.localize("rem_Ty3_CreatPat", "Même patient!", language)
                              }
                          }

                      })

                      this.set("listResultPatients", tb["rows"])
                      this.set("displayResult", true)
                  } else {
                      this.set("listResultPatients", [])
                      this.set("displayResult", false)
                  }
              })
          }, 300)
      } else {
          this.set("listResultPatients", [])
          this.set("displayResult", false)
      }
  }

  getNamesWithHcpId(id){
      const element = this.hcp.find( x => x.id===id)
      return element.lastName+" "+element.firstName
  }

  _checkDelegation(event){

      const index = this.hcpSelectedForSharing.indexOf(event.model.__data.item)
      const tag = event.target.id.substr(event.model.__data.item.id.length)
      const value = event.detail.value

      //idem of checkingDelegation

      if(this.hcpSelectedForSharing[index].delegation.find(x => x==='all')){
          this.set("hcpSelectedForSharing."+index+".delegation",this.delegation.filter(x=> true))
          this.hcpSelectedForSharing[index].delegation.shift()
      }
      if(value===true){//check
          if(tag==="all"){
              this.set("hcpSelectedForSharing."+index+".delegation",[])
          }
          this.push("hcpSelectedForSharing."+index+".delegation",tag)
          
          if(this.hcpSelectedForSharing[index].delegation.filter(x => x.includes("cdItem")).length === 12){
              this.push("hcpSelectedForSharing."+index+".delegation","medicalInformation")
          }

          if(this.hcpSelectedForSharing[index].delegation.find(x => x === "medicalInformation")){
              this.set("hcpSelectedForSharing."+index+".delegation",this.hcpSelectedForSharing[index].delegation.filter(x => !x.includes("cdItem")))
          }

          if(this.hcpSelectedForSharing[index].delegation.filter(element=> !(element.includes("cdItem")||element==="all")).length===6){
              this.set("hcpSelectedForSharing."+index+".delegation",["all"])
          }
      }
      else{//uncheck
          if(tag==="all"){
              this.set("hcpSelectedForSharing."+index+".delegation",this.delegation.filter( (element,index,array) => (index<=4 && element!=="all")))
          }
          else{
              this.set("hcpSelectedForSharing."+index+".delegation",
                  this.hcpSelectedForSharing[index].delegation.filter(x => x!==tag))
          }
      }
  }

  checkingDelegation(tagInput,delegations){
      if(!delegations)return ;
      return delegations.find( x => x===tagInput );
  }

  updateDelegation(){
      let userDelegation = this.user.autoDelegations

      this.hcpSelectedForSharing.forEach( userShared =>{
          //delete old delegations for this user
          Object.keys(userDelegation).forEach(key => {
              userDelegation[key]= userDelegation[key].filter( x => x!==userShared.id)
              if(userDelegation[key].length===0) delete userDelegation[key]
          })

          userShared.delegation.forEach( delegationTag => {
              //add news delegations for this user
              if(userDelegation.hasOwnProperty(delegationTag)){
                  userDelegation[delegationTag].push(userShared.id)
              }
              else{
                  userDelegation[delegationTag]=[userShared.id]
              }
          })}
      )
      this.set("user.autoDelegations",userDelegation)

      this.api.user().modifyUser(this.user).then(user =>{
          this.dispatchEvent(new CustomEvent('user-saved', {
              detail: user,
              bubbles: true,
              composed: true
          }))
      }).catch( e => {
          console.log(e)
      }).finally(e => {
          this.api.user().getUser(this.user.id).then(x => {
              this.set("user",x)
          })
      })
  }

  _neededBr(tag){
      return tag==="all";
  }

  _showAllDelegation(tag,id){

      if(tag==="all") return true;
      const index = this.hcpSelectedForSharing.findIndex( x => x.id===id)
      if(index===-1) return false;

      let value = !this.hcpSelectedForSharing[index].delegation.find(x =>x==="all")
      if(tag.includes("cdItem") && this.hcpSelectedForSharing[index].delegation.find(x =>x==="medicalInformation"))
          value = false;
      return value
  }

  _optionsChecked(){
      return this.shareOption || this.exportOption || this.fusionOption
  }

  _fusionSelectedChanged(selected) {
      if (this.readOnly) {
          return;
      }
      this.set('idFusionPat', this.patientSelected[selected].id || null);
  }

  getNamePat(id){
      const pat = this.patientSelected.find(patient => patient.id===id)
      return pat.names;
  }

  confirmFusion(){
      let listIds = "";
      this.patientSelected.forEach(patient => {
          if(patient.id!==this.idFusionPat)
              listIds +=patient.id+",";
      })
      listIds = listIds.substring(0, listIds.length-1)
      //console.log(listIds)
      if(this.idFusionPat)
          this.api.patient().mergeInto(this.idFusionPat,listIds).then(response => {
              console.log(response)
              this.set('selectedPatient', response)
          })
  }

  _isPatientsSelected(){
      return this.patientSelected.filter( x => x.check==true).length;
  }
}

customElements.define(HtPatList.is, HtPatList)
