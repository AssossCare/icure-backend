/*
 *  iCure Data Stack. Copyright (c) 2020 Taktik SA
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as
 *     published by the Free Software Foundation, either version 3 of the
 *     License, or (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful, but
 *     WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *     Affero General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public
 *     License along with this program.  If not, see
 *     <https://www.gnu.org/licenses/>.
 */

//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a>
// Any modifications to this file will be lost upon recompilation of the source schema.
// Generated on: 2019.05.22 at 08:11:32 PM CEST
//


package org.taktik.icure.be.ehealth.samws.v2.actual.common;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;
import org.taktik.icure.be.ehealth.samws.v2.core.ChangeNoChangeActionType;
import org.taktik.icure.be.ehealth.samws.v2.core.Text255Type;


/**
 * <p>Java class for ChangeAmppFamhpType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="ChangeAmppFamhpType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:actual:common}AmppKeyType">
 *       &lt;sequence>
 *         &lt;sequence minOccurs="0">
 *           &lt;group ref="{urn:be:fgov:ehealth:samws:v2:actual:common}AmppFamhpFields"/>
 *           &lt;group ref="{urn:be:fgov:ehealth:samws:v2:actual:common}AmppFamhpReferences"/>
 *         &lt;/sequence>
 *         &lt;element name="AmppComponent" type="{urn:be:fgov:ehealth:samws:v2:actual:common}ChangeAmppComponentType" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="SupplyProblem" type="{urn:be:fgov:ehealth:samws:v2:actual:common}ChangeSupplyProblemType" minOccurs="0"/>
 *         &lt;element name="DerogationImport" type="{urn:be:fgov:ehealth:samws:v2:actual:common}ChangeDerogationImportType" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attGroup ref="{urn:be:fgov:ehealth:samws:v2:core}changeNoChangeMetadata"/>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ChangeAmppFamhpType", propOrder = {
    "authorisationNr",
    "orphan",
    "leafletLink",
    "spcLink",
    "rmaPatientLink",
    "rmaProfessionalLink",
    "parallelCircuit",
    "parallelDistributor",
    "packMultiplier",
    "packAmount",
    "packDisplayValue",
    "status",
    "gtin",
    "atcCodes",
    "deliveryModusCode",
    "deliveryModusSpecificationCode",
    "distributorCompanyActorNr",
    "amppComponents",
    "supplyProblem",
    "derogationImports"
})
public class ChangeAmppFamhpType
    extends AmppKeyType
    implements Serializable
{

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "AuthorisationNr")
    protected String authorisationNr;
    @XmlElement(name = "Orphan")
    protected Boolean orphan;
    @XmlElement(name = "LeafletLink")
    protected Text255Type leafletLink;
    @XmlElement(name = "SpcLink")
    protected Text255Type spcLink;
    @XmlElement(name = "RmaPatientLink")
    protected Text255Type rmaPatientLink;
    @XmlElement(name = "RmaProfessionalLink")
    protected Text255Type rmaProfessionalLink;
    @XmlElement(name = "ParallelCircuit")
    @XmlSchemaType(name = "integer")
    protected Integer parallelCircuit;
    @XmlElement(name = "ParallelDistributor")
    protected String parallelDistributor;
    @XmlElement(name = "PackMultiplier")
    protected Short packMultiplier;
    @XmlElement(name = "PackAmount")
    protected PackAmountType packAmount;
    @XmlElement(name = "PackDisplayValue")
    protected String packDisplayValue;
    @XmlElement(name = "Status")
    @XmlSchemaType(name = "string")
    protected AmpStatusType status;
    @XmlElement(name = "GTIN")
    protected String gtin;
    @XmlElement(name = "AtcCode")
    protected List<String> atcCodes;
    @XmlElement(name = "DeliveryModusCode")
    protected String deliveryModusCode;
    @XmlElement(name = "DeliveryModusSpecificationCode")
    protected String deliveryModusSpecificationCode;
    @XmlElement(name = "DistributorCompanyActorNr")
    protected String distributorCompanyActorNr;
    @XmlElement(name = "AmppComponent")
    protected List<ChangeAmppComponentType> amppComponents;
    @XmlElement(name = "SupplyProblem")
    protected ChangeSupplyProblemType supplyProblem;
    @XmlElement(name = "DerogationImport")
    protected List<ChangeDerogationImportType> derogationImports;
    @XmlAttribute(name = "action", required = true)
    protected ChangeNoChangeActionType action;
    @XmlAttribute(name = "from")
    protected XMLGregorianCalendar from;
    @XmlAttribute(name = "to")
    protected XMLGregorianCalendar to;

    /**
     * Gets the value of the authorisationNr property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getAuthorisationNr() {
        return authorisationNr;
    }

    /**
     * Sets the value of the authorisationNr property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setAuthorisationNr(String value) {
        this.authorisationNr = value;
    }

    /**
     * Gets the value of the orphan property.
     *
     * @return
     *     possible object is
     *     {@link Boolean }
     *
     */
    public Boolean isOrphan() {
        return orphan;
    }

    /**
     * Sets the value of the orphan property.
     *
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *
     */
    public void setOrphan(Boolean value) {
        this.orphan = value;
    }

    /**
     * Gets the value of the leafletLink property.
     *
     * @return
     *     possible object is
     *     {@link Text255Type }
     *
     */
    public Text255Type getLeafletLink() {
        return leafletLink;
    }

    /**
     * Sets the value of the leafletLink property.
     *
     * @param value
     *     allowed object is
     *     {@link Text255Type }
     *
     */
    public void setLeafletLink(Text255Type value) {
        this.leafletLink = value;
    }

    /**
     * Gets the value of the spcLink property.
     *
     * @return
     *     possible object is
     *     {@link Text255Type }
     *
     */
    public Text255Type getSpcLink() {
        return spcLink;
    }

    /**
     * Sets the value of the spcLink property.
     *
     * @param value
     *     allowed object is
     *     {@link Text255Type }
     *
     */
    public void setSpcLink(Text255Type value) {
        this.spcLink = value;
    }

    /**
     * Gets the value of the rmaPatientLink property.
     *
     * @return
     *     possible object is
     *     {@link Text255Type }
     *
     */
    public Text255Type getRmaPatientLink() {
        return rmaPatientLink;
    }

    /**
     * Sets the value of the rmaPatientLink property.
     *
     * @param value
     *     allowed object is
     *     {@link Text255Type }
     *
     */
    public void setRmaPatientLink(Text255Type value) {
        this.rmaPatientLink = value;
    }

    /**
     * Gets the value of the rmaProfessionalLink property.
     *
     * @return
     *     possible object is
     *     {@link Text255Type }
     *
     */
    public Text255Type getRmaProfessionalLink() {
        return rmaProfessionalLink;
    }

    /**
     * Sets the value of the rmaProfessionalLink property.
     *
     * @param value
     *     allowed object is
     *     {@link Text255Type }
     *
     */
    public void setRmaProfessionalLink(Text255Type value) {
        this.rmaProfessionalLink = value;
    }

    /**
     * Gets the value of the parallelCircuit property.
     *
     * @return
     *     possible object is
     *     {@link Integer }
     *
     */
    public Integer getParallelCircuit() {
        return parallelCircuit;
    }

    /**
     * Sets the value of the parallelCircuit property.
     *
     * @param value
     *     allowed object is
     *     {@link Integer }
     *
     */
    public void setParallelCircuit(Integer value) {
        this.parallelCircuit = value;
    }

    /**
     * Gets the value of the parallelDistributor property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getParallelDistributor() {
        return parallelDistributor;
    }

    /**
     * Sets the value of the parallelDistributor property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setParallelDistributor(String value) {
        this.parallelDistributor = value;
    }

    /**
     * Gets the value of the packMultiplier property.
     *
     * @return
     *     possible object is
     *     {@link Short }
     *
     */
    public Short getPackMultiplier() {
        return packMultiplier;
    }

    /**
     * Sets the value of the packMultiplier property.
     *
     * @param value
     *     allowed object is
     *     {@link Short }
     *
     */
    public void setPackMultiplier(Short value) {
        this.packMultiplier = value;
    }

    /**
     * Gets the value of the packAmount property.
     *
     * @return
     *     possible object is
     *     {@link PackAmountType }
     *
     */
    public PackAmountType getPackAmount() {
        return packAmount;
    }

    /**
     * Sets the value of the packAmount property.
     *
     * @param value
     *     allowed object is
     *     {@link PackAmountType }
     *
     */
    public void setPackAmount(PackAmountType value) {
        this.packAmount = value;
    }

    /**
     * Gets the value of the packDisplayValue property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getPackDisplayValue() {
        return packDisplayValue;
    }

    /**
     * Sets the value of the packDisplayValue property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setPackDisplayValue(String value) {
        this.packDisplayValue = value;
    }

    /**
     * Gets the value of the status property.
     *
     * @return
     *     possible object is
     *     {@link AmpStatusType }
     *
     */
    public AmpStatusType getStatus() {
        return status;
    }

    /**
     * Sets the value of the status property.
     *
     * @param value
     *     allowed object is
     *     {@link AmpStatusType }
     *
     */
    public void setStatus(AmpStatusType value) {
        this.status = value;
    }

    /**
     * Gets the value of the gtin property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getGTIN() {
        return gtin;
    }

    /**
     * Sets the value of the gtin property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setGTIN(String value) {
        this.gtin = value;
    }

    /**
     * Gets the value of the atcCodes property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the atcCodes property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getAtcCodes().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     *
     *
     */
    public List<String> getAtcCodes() {
        if (atcCodes == null) {
            atcCodes = new ArrayList<String>();
        }
        return this.atcCodes;
    }

    /**
     * Gets the value of the deliveryModusCode property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getDeliveryModusCode() {
        return deliveryModusCode;
    }

    /**
     * Sets the value of the deliveryModusCode property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setDeliveryModusCode(String value) {
        this.deliveryModusCode = value;
    }

    /**
     * Gets the value of the deliveryModusSpecificationCode property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getDeliveryModusSpecificationCode() {
        return deliveryModusSpecificationCode;
    }

    /**
     * Sets the value of the deliveryModusSpecificationCode property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setDeliveryModusSpecificationCode(String value) {
        this.deliveryModusSpecificationCode = value;
    }

    /**
     * Gets the value of the distributorCompanyActorNr property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getDistributorCompanyActorNr() {
        return distributorCompanyActorNr;
    }

    /**
     * Sets the value of the distributorCompanyActorNr property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setDistributorCompanyActorNr(String value) {
        this.distributorCompanyActorNr = value;
    }

    /**
     * Gets the value of the amppComponents property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the amppComponents property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getAmppComponents().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ChangeAmppComponentType }
     *
     *
     */
    public List<ChangeAmppComponentType> getAmppComponents() {
        if (amppComponents == null) {
            amppComponents = new ArrayList<ChangeAmppComponentType>();
        }
        return this.amppComponents;
    }

    /**
     * Gets the value of the supplyProblem property.
     *
     * @return
     *     possible object is
     *     {@link ChangeSupplyProblemType }
     *
     */
    public ChangeSupplyProblemType getSupplyProblem() {
        return supplyProblem;
    }

    /**
     * Sets the value of the supplyProblem property.
     *
     * @param value
     *     allowed object is
     *     {@link ChangeSupplyProblemType }
     *
     */
    public void setSupplyProblem(ChangeSupplyProblemType value) {
        this.supplyProblem = value;
    }

    /**
     * Gets the value of the derogationImports property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the derogationImports property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDerogationImports().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ChangeDerogationImportType }
     *
     *
     */
    public List<ChangeDerogationImportType> getDerogationImports() {
        if (derogationImports == null) {
            derogationImports = new ArrayList<ChangeDerogationImportType>();
        }
        return this.derogationImports;
    }

    /**
     * Gets the value of the action property.
     *
     * @return
     *     possible object is
     *     {@link ChangeNoChangeActionType }
     *
     */
    public ChangeNoChangeActionType getAction() {
        return action;
    }

    /**
     * Sets the value of the action property.
     *
     * @param value
     *     allowed object is
     *     {@link ChangeNoChangeActionType }
     *
     */
    public void setAction(ChangeNoChangeActionType value) {
        this.action = value;
    }

    /**
     * Gets the value of the from property.
     *
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *
     */
    public XMLGregorianCalendar getFrom() {
        return from;
    }

    /**
     * Sets the value of the from property.
     *
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *
     */
    public void setFrom(XMLGregorianCalendar value) {
        this.from = value;
    }

    /**
     * Gets the value of the to property.
     *
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *
     */
    public XMLGregorianCalendar getTo() {
        return to;
    }

    /**
     * Sets the value of the to property.
     *
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *
     */
    public void setTo(XMLGregorianCalendar value) {
        this.to = value;
    }

}
