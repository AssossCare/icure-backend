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
// Generated on: 2019.06.14 at 03:48:29 PM CEST
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20120401.org.w3.xmlenc;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for EncryptedKeyType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="EncryptedKeyType">
 *   &lt;complexContent>
 *     &lt;extension base="{http://www.w3.org/2001/04/xmlenc#}EncryptedType">
 *       &lt;sequence>
 *         &lt;element ref="{http://www.w3.org/2001/04/xmlenc#}ReferenceList" minOccurs="0"/>
 *         &lt;element name="CarriedKeyName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attribute name="Recipient" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "EncryptedKeyType", propOrder = {
    "referenceList",
    "carriedKeyName"
})
@XmlRootElement(name = "EncryptedKey")
public class EncryptedKey
    extends EncryptedType
    implements Serializable
{

    private final static long serialVersionUID = 20120401L;
    @XmlElement(name = "ReferenceList")
    protected ReferenceList referenceList;
    @XmlElement(name = "CarriedKeyName")
    protected String carriedKeyName;
    @XmlAttribute(name = "Recipient")
    protected String recipient;

    /**
     * Gets the value of the referenceList property.
     *
     * @return
     *     possible object is
     *     {@link ReferenceList }
     *
     */
    public ReferenceList getReferenceList() {
        return referenceList;
    }

    /**
     * Sets the value of the referenceList property.
     *
     * @param value
     *     allowed object is
     *     {@link ReferenceList }
     *
     */
    public void setReferenceList(ReferenceList value) {
        this.referenceList = value;
    }

    /**
     * Gets the value of the carriedKeyName property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getCarriedKeyName() {
        return carriedKeyName;
    }

    /**
     * Sets the value of the carriedKeyName property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setCarriedKeyName(String value) {
        this.carriedKeyName = value;
    }

    /**
     * Gets the value of the recipient property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getRecipient() {
        return recipient;
    }

    /**
     * Sets the value of the recipient property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setRecipient(String value) {
        this.recipient = value;
    }

}
