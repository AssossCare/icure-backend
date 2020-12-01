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


package org.taktik.icure.be.samv2.entities;

import org.taktik.icure.be.ehealth.samws.v2.core.TextType;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;
import java.io.Serializable;


/**
 * <p>Java class for SupplyProblemDataType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="SupplyProblemDataType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:export}DataPeriodType">
 *       &lt;sequence>
 *         &lt;group ref="{urn:be:fgov:ehealth:samws:v2:actual:common}SupplyProblemFields"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SupplyProblemDataType", propOrder = {
        "expectedEndOn",
        "reportedBy",
        "reportedOn",
        "contactName",
        "contactMail",
        "contactCompany",
        "phone",
        "reason",
        "additionalInformation"
})
public class SupplyProblemDataType
        extends DataPeriodType
        implements Serializable {

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "ExpectedEndOn", namespace = "urn:be:fgov:ehealth:samws:v2:actual:common")
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar expectedEndOn;
    @XmlElement(name = "ReportedBy", namespace = "urn:be:fgov:ehealth:samws:v2:actual:common")
    protected String reportedBy;
    @XmlElement(name = "ReportedOn", namespace = "urn:be:fgov:ehealth:samws:v2:actual:common")
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar reportedOn;
    @XmlElement(name = "ContactName", namespace = "urn:be:fgov:ehealth:samws:v2:actual:common")
    protected String contactName;
    @XmlElement(name = "ContactMail", namespace = "urn:be:fgov:ehealth:samws:v2:actual:common")
    protected String contactMail;
    @XmlElement(name = "ContactCompany", namespace = "urn:be:fgov:ehealth:samws:v2:actual:common")
    protected String contactCompany;
    @XmlElement(name = "Phone", namespace = "urn:be:fgov:ehealth:samws:v2:actual:common")
    protected String phone;
    @XmlElement(name = "Reason", namespace = "urn:be:fgov:ehealth:samws:v2:actual:common")
    protected TextType reason;
    @XmlElement(name = "AdditionalInformation", namespace = "urn:be:fgov:ehealth:samws:v2:actual:common")
    protected TextType additionalInformation;

    /**
     * Gets the value of the expectedEndOn property.
     *
     * @return possible object is
     * {@link XMLGregorianCalendar }
     */
    public XMLGregorianCalendar getExpectedEndOn() {
        return expectedEndOn;
    }

    /**
     * Sets the value of the expectedEndOn property.
     *
     * @param value allowed object is
     *              {@link XMLGregorianCalendar }
     */
    public void setExpectedEndOn(XMLGregorianCalendar value) {
        this.expectedEndOn = value;
    }

    /**
     * Gets the value of the reportedBy property.
     *
     * @return possible object is
     * {@link String }
     */
    public String getReportedBy() {
        return reportedBy;
    }

    /**
     * Sets the value of the reportedBy property.
     *
     * @param value allowed object is
     *              {@link String }
     */
    public void setReportedBy(String value) {
        this.reportedBy = value;
    }

    /**
     * Gets the value of the reportedOn property.
     *
     * @return possible object is
     * {@link XMLGregorianCalendar }
     */
    public XMLGregorianCalendar getReportedOn() {
        return reportedOn;
    }

    /**
     * Sets the value of the reportedOn property.
     *
     * @param value allowed object is
     *              {@link XMLGregorianCalendar }
     */
    public void setReportedOn(XMLGregorianCalendar value) {
        this.reportedOn = value;
    }

    /**
     * Gets the value of the contactName property.
     *
     * @return possible object is
     * {@link String }
     */
    public String getContactName() {
        return contactName;
    }

    /**
     * Sets the value of the contactName property.
     *
     * @param value allowed object is
     *              {@link String }
     */
    public void setContactName(String value) {
        this.contactName = value;
    }

    /**
     * Gets the value of the contactMail property.
     *
     * @return possible object is
     * {@link String }
     */
    public String getContactMail() {
        return contactMail;
    }

    /**
     * Sets the value of the contactMail property.
     *
     * @param value allowed object is
     *              {@link String }
     */
    public void setContactMail(String value) {
        this.contactMail = value;
    }

    /**
     * Gets the value of the contactCompany property.
     *
     * @return possible object is
     * {@link String }
     */
    public String getContactCompany() {
        return contactCompany;
    }

    /**
     * Sets the value of the contactCompany property.
     *
     * @param value allowed object is
     *              {@link String }
     */
    public void setContactCompany(String value) {
        this.contactCompany = value;
    }

    /**
     * Gets the value of the phone property.
     *
     * @return possible object is
     * {@link String }
     */
    public String getPhone() {
        return phone;
    }

    /**
     * Sets the value of the phone property.
     *
     * @param value allowed object is
     *              {@link String }
     */
    public void setPhone(String value) {
        this.phone = value;
    }

    /**
     * Gets the value of the reason property.
     *
     * @return possible object is
     * {@link TextType }
     */
    public TextType getReason() {
        return reason;
    }

    /**
     * Sets the value of the reason property.
     *
     * @param value allowed object is
     *              {@link TextType }
     */
    public void setReason(TextType value) {
        this.reason = value;
    }

    /**
     * Gets the value of the additionalInformation property.
     *
     * @return possible object is
     * {@link TextType }
     */
    public TextType getAdditionalInformation() {
        return additionalInformation;
    }

    /**
     * Sets the value of the additionalInformation property.
     *
     * @param value allowed object is
     *              {@link TextType }
     */
    public void setAdditionalInformation(TextType value) {
        this.additionalInformation = value;
    }

}
