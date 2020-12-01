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
import org.taktik.icure.be.ehealth.samws.v2.reimbursementlaw.submit.LegalTextTypeType;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;
import java.io.Serializable;


/**
 * <p>Java class for LegalTextDataType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="LegalTextDataType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:export}DataPeriodType">
 *       &lt;sequence>
 *         &lt;group ref="{urn:be:fgov:ehealth:samws:v2:reimbursementlaw:submit}LegalTextFields"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "LegalTextDataType", propOrder = {
        "content",
        "type",
        "sequenceNr",
        "lastModifiedOn"
})
public class LegalTextDataType
        extends DataPeriodType
        implements Serializable {

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "Content", namespace = "urn:be:fgov:ehealth:samws:v2:reimbursementlaw:submit", required = true)
    protected TextType content;
    @XmlElement(name = "Type", namespace = "urn:be:fgov:ehealth:samws:v2:reimbursementlaw:submit", required = true)
    @XmlSchemaType(name = "string")
    protected LegalTextTypeType type;
    @XmlElement(name = "SequenceNr", namespace = "urn:be:fgov:ehealth:samws:v2:reimbursementlaw:submit")
    protected short sequenceNr;
    @XmlElement(name = "LastModifiedOn", namespace = "urn:be:fgov:ehealth:samws:v2:reimbursementlaw:submit")
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar lastModifiedOn;

    /**
     * Gets the value of the content property.
     *
     * @return possible object is
     * {@link TextType }
     */
    public TextType getContent() {
        return content;
    }

    /**
     * Sets the value of the content property.
     *
     * @param value allowed object is
     *              {@link TextType }
     */
    public void setContent(TextType value) {
        this.content = value;
    }

    /**
     * Gets the value of the type property.
     *
     * @return possible object is
     * {@link LegalTextTypeType }
     */
    public LegalTextTypeType getType() {
        return type;
    }

    /**
     * Sets the value of the type property.
     *
     * @param value allowed object is
     *              {@link LegalTextTypeType }
     */
    public void setType(LegalTextTypeType value) {
        this.type = value;
    }

    /**
     * Gets the value of the sequenceNr property.
     */
    public short getSequenceNr() {
        return sequenceNr;
    }

    /**
     * Sets the value of the sequenceNr property.
     */
    public void setSequenceNr(short value) {
        this.sequenceNr = value;
    }

    /**
     * Gets the value of the lastModifiedOn property.
     *
     * @return possible object is
     * {@link XMLGregorianCalendar }
     */
    public XMLGregorianCalendar getLastModifiedOn() {
        return lastModifiedOn;
    }

    /**
     * Sets the value of the lastModifiedOn property.
     *
     * @param value allowed object is
     *              {@link XMLGregorianCalendar }
     */
    public void setLastModifiedOn(XMLGregorianCalendar value) {
        this.lastModifiedOn = value;
    }

}
