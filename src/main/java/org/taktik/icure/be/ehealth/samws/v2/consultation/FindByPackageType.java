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


package org.taktik.icure.be.ehealth.samws.v2.consultation;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for FindByPackageType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="FindByPackageType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;choice>
 *           &lt;element name="AuthorisationNr" type="{urn:be:fgov:ehealth:samws:v2:core}String50Type"/>
 *           &lt;element name="CtiExtendedCode" type="{urn:be:fgov:ehealth:samws:v2:core}CtiExtendedType"/>
 *           &lt;element name="AtcCode" type="{urn:be:fgov:ehealth:samws:v2:core}String7Type"/>
 *           &lt;element name="AnyNamePart" type="{urn:be:fgov:ehealth:samws:v2:core}SearchStringType"/>
 *         &lt;/choice>
 *         &lt;element name="Commercialised" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="InSupplyProblem" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="ComponentEquivalent" type="{urn:be:fgov:ehealth:samws:v2:consultation}ComponentEquivalentType" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "FindByPackageType", propOrder = {
    "anyNamePart",
    "atcCode",
    "ctiExtendedCode",
    "authorisationNr",
    "commercialised",
    "inSupplyProblem",
    "componentEquivalents"
})
public class FindByPackageType
    implements Serializable
{

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "AnyNamePart")
    protected String anyNamePart;
    @XmlElement(name = "AtcCode")
    protected String atcCode;
    @XmlElement(name = "CtiExtendedCode")
    protected String ctiExtendedCode;
    @XmlElement(name = "AuthorisationNr")
    protected String authorisationNr;
    @XmlElement(name = "Commercialised")
    protected Boolean commercialised;
    @XmlElement(name = "InSupplyProblem")
    protected Boolean inSupplyProblem;
    @XmlElement(name = "ComponentEquivalent")
    protected List<ComponentEquivalentType> componentEquivalents;

    /**
     * Gets the value of the anyNamePart property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getAnyNamePart() {
        return anyNamePart;
    }

    /**
     * Sets the value of the anyNamePart property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setAnyNamePart(String value) {
        this.anyNamePart = value;
    }

    /**
     * Gets the value of the atcCode property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getAtcCode() {
        return atcCode;
    }

    /**
     * Sets the value of the atcCode property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setAtcCode(String value) {
        this.atcCode = value;
    }

    /**
     * Gets the value of the ctiExtendedCode property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getCtiExtendedCode() {
        return ctiExtendedCode;
    }

    /**
     * Sets the value of the ctiExtendedCode property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setCtiExtendedCode(String value) {
        this.ctiExtendedCode = value;
    }

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
     * Gets the value of the commercialised property.
     *
     * @return
     *     possible object is
     *     {@link Boolean }
     *
     */
    public Boolean isCommercialised() {
        return commercialised;
    }

    /**
     * Sets the value of the commercialised property.
     *
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *
     */
    public void setCommercialised(Boolean value) {
        this.commercialised = value;
    }

    /**
     * Gets the value of the inSupplyProblem property.
     *
     * @return
     *     possible object is
     *     {@link Boolean }
     *
     */
    public Boolean isInSupplyProblem() {
        return inSupplyProblem;
    }

    /**
     * Sets the value of the inSupplyProblem property.
     *
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *
     */
    public void setInSupplyProblem(Boolean value) {
        this.inSupplyProblem = value;
    }

    /**
     * Gets the value of the componentEquivalents property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the componentEquivalents property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getComponentEquivalents().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ComponentEquivalentType }
     *
     *
     */
    public List<ComponentEquivalentType> getComponentEquivalents() {
        if (componentEquivalents == null) {
            componentEquivalents = new ArrayList<ComponentEquivalentType>();
        }
        return this.componentEquivalents;
    }

}
