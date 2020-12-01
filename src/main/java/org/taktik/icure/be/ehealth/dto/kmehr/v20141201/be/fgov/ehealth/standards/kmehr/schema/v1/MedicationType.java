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
// Generated on: 2019.06.14 at 03:49:29 PM CEST
//


package org.taktik.icure.be.ehealth.dto.kmehr.v20141201.be.fgov.ehealth.standards.kmehr.schema.v1;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import org.taktik.icure.be.ehealth.dto.kmehr.v20141201.be.fgov.ehealth.standards.kmehr.cd.v1.CDMEDICATION;
import org.taktik.icure.be.ehealth.dto.kmehr.v20141201.be.fgov.ehealth.standards.kmehr.dt.v1.TextType;


/**
 * Deprecated at 01/01/2009, this complex type has been retained for backward compatibility only
 *
 * <p>Java class for medicationType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="medicationType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;choice>
 *           &lt;element name="cd" type="{http://www.ehealth.fgov.be/standards/kmehr/cd/v1}CD-MEDICATION"/>
 *           &lt;element name="inn" type="{http://www.ehealth.fgov.be/standards/kmehr/dt/v1}textType"/>
 *           &lt;element name="magistral" type="{http://www.ehealth.fgov.be/standards/kmehr/dt/v1}textType"/>
 *         &lt;/choice>
 *         &lt;element name="tradename" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="presentation" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}presentationType" minOccurs="0"/>
 *         &lt;element name="strength" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}strengthType" minOccurs="0"/>
 *         &lt;element name="route" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}routeType" minOccurs="0"/>
 *         &lt;element name="batch" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;sequence minOccurs="0">
 *           &lt;element name="numberofpackage" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *           &lt;element name="package" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}packageType" minOccurs="0"/>
 *           &lt;element name="quantityperpackage" type="{http://www.w3.org/2001/XMLSchema}decimal" minOccurs="0"/>
 *         &lt;/sequence>
 *         &lt;element name="instructionforoverdosing" type="{http://www.ehealth.fgov.be/standards/kmehr/dt/v1}textType" minOccurs="0"/>
 *         &lt;element name="instructionforpatient" type="{http://www.ehealth.fgov.be/standards/kmehr/dt/v1}textType" minOccurs="0"/>
 *         &lt;element name="instructionforreimbursement" type="{http://www.ehealth.fgov.be/standards/kmehr/dt/v1}textType" minOccurs="0"/>
 *         &lt;element name="issubstitutionallowed" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "medicationType", propOrder = {
    "magistral",
    "inn",
    "cd",
    "tradename",
    "presentation",
    "strength",
    "route",
    "batch",
    "numberofpackage",
    "_package",
    "quantityperpackage",
    "instructionforoverdosing",
    "instructionforpatient",
    "instructionforreimbursement",
    "issubstitutionallowed"
})
public class MedicationType
    implements Serializable
{

    private final static long serialVersionUID = 20141201L;
    protected TextType magistral;
    protected TextType inn;
    protected CDMEDICATION cd;
    protected String tradename;
    protected PresentationType presentation;
    protected StrengthType strength;
    protected RouteType route;
    protected String batch;
    protected BigDecimal numberofpackage;
    @XmlElement(name = "package")
    protected PackageType _package;
    protected BigDecimal quantityperpackage;
    protected TextType instructionforoverdosing;
    protected TextType instructionforpatient;
    protected TextType instructionforreimbursement;
    protected Boolean issubstitutionallowed;

    /**
     * Gets the value of the magistral property.
     *
     * @return
     *     possible object is
     *     {@link TextType }
     *
     */
    public TextType getMagistral() {
        return magistral;
    }

    /**
     * Sets the value of the magistral property.
     *
     * @param value
     *     allowed object is
     *     {@link TextType }
     *
     */
    public void setMagistral(TextType value) {
        this.magistral = value;
    }

    /**
     * Gets the value of the inn property.
     *
     * @return
     *     possible object is
     *     {@link TextType }
     *
     */
    public TextType getInn() {
        return inn;
    }

    /**
     * Sets the value of the inn property.
     *
     * @param value
     *     allowed object is
     *     {@link TextType }
     *
     */
    public void setInn(TextType value) {
        this.inn = value;
    }

    /**
     * Gets the value of the cd property.
     *
     * @return
     *     possible object is
     *     {@link CDMEDICATION }
     *
     */
    public CDMEDICATION getCd() {
        return cd;
    }

    /**
     * Sets the value of the cd property.
     *
     * @param value
     *     allowed object is
     *     {@link CDMEDICATION }
     *
     */
    public void setCd(CDMEDICATION value) {
        this.cd = value;
    }

    /**
     * Gets the value of the tradename property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getTradename() {
        return tradename;
    }

    /**
     * Sets the value of the tradename property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setTradename(String value) {
        this.tradename = value;
    }

    /**
     * Gets the value of the presentation property.
     *
     * @return
     *     possible object is
     *     {@link PresentationType }
     *
     */
    public PresentationType getPresentation() {
        return presentation;
    }

    /**
     * Sets the value of the presentation property.
     *
     * @param value
     *     allowed object is
     *     {@link PresentationType }
     *
     */
    public void setPresentation(PresentationType value) {
        this.presentation = value;
    }

    /**
     * Gets the value of the strength property.
     *
     * @return
     *     possible object is
     *     {@link StrengthType }
     *
     */
    public StrengthType getStrength() {
        return strength;
    }

    /**
     * Sets the value of the strength property.
     *
     * @param value
     *     allowed object is
     *     {@link StrengthType }
     *
     */
    public void setStrength(StrengthType value) {
        this.strength = value;
    }

    /**
     * Gets the value of the route property.
     *
     * @return
     *     possible object is
     *     {@link RouteType }
     *
     */
    public RouteType getRoute() {
        return route;
    }

    /**
     * Sets the value of the route property.
     *
     * @param value
     *     allowed object is
     *     {@link RouteType }
     *
     */
    public void setRoute(RouteType value) {
        this.route = value;
    }

    /**
     * Gets the value of the batch property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getBatch() {
        return batch;
    }

    /**
     * Sets the value of the batch property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setBatch(String value) {
        this.batch = value;
    }

    /**
     * Gets the value of the numberofpackage property.
     *
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *
     */
    public BigDecimal getNumberofpackage() {
        return numberofpackage;
    }

    /**
     * Sets the value of the numberofpackage property.
     *
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *
     */
    public void setNumberofpackage(BigDecimal value) {
        this.numberofpackage = value;
    }

    /**
     * Gets the value of the package property.
     *
     * @return
     *     possible object is
     *     {@link PackageType }
     *
     */
    public PackageType getPackage() {
        return _package;
    }

    /**
     * Sets the value of the package property.
     *
     * @param value
     *     allowed object is
     *     {@link PackageType }
     *
     */
    public void setPackage(PackageType value) {
        this._package = value;
    }

    /**
     * Gets the value of the quantityperpackage property.
     *
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *
     */
    public BigDecimal getQuantityperpackage() {
        return quantityperpackage;
    }

    /**
     * Sets the value of the quantityperpackage property.
     *
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *
     */
    public void setQuantityperpackage(BigDecimal value) {
        this.quantityperpackage = value;
    }

    /**
     * Gets the value of the instructionforoverdosing property.
     *
     * @return
     *     possible object is
     *     {@link TextType }
     *
     */
    public TextType getInstructionforoverdosing() {
        return instructionforoverdosing;
    }

    /**
     * Sets the value of the instructionforoverdosing property.
     *
     * @param value
     *     allowed object is
     *     {@link TextType }
     *
     */
    public void setInstructionforoverdosing(TextType value) {
        this.instructionforoverdosing = value;
    }

    /**
     * Gets the value of the instructionforpatient property.
     *
     * @return
     *     possible object is
     *     {@link TextType }
     *
     */
    public TextType getInstructionforpatient() {
        return instructionforpatient;
    }

    /**
     * Sets the value of the instructionforpatient property.
     *
     * @param value
     *     allowed object is
     *     {@link TextType }
     *
     */
    public void setInstructionforpatient(TextType value) {
        this.instructionforpatient = value;
    }

    /**
     * Gets the value of the instructionforreimbursement property.
     *
     * @return
     *     possible object is
     *     {@link TextType }
     *
     */
    public TextType getInstructionforreimbursement() {
        return instructionforreimbursement;
    }

    /**
     * Sets the value of the instructionforreimbursement property.
     *
     * @param value
     *     allowed object is
     *     {@link TextType }
     *
     */
    public void setInstructionforreimbursement(TextType value) {
        this.instructionforreimbursement = value;
    }

    /**
     * Gets the value of the issubstitutionallowed property.
     *
     * @return
     *     possible object is
     *     {@link Boolean }
     *
     */
    public Boolean isIssubstitutionallowed() {
        return issubstitutionallowed;
    }

    /**
     * Sets the value of the issubstitutionallowed property.
     *
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *
     */
    public void setIssubstitutionallowed(Boolean value) {
        this.issubstitutionallowed = value;
    }

}
