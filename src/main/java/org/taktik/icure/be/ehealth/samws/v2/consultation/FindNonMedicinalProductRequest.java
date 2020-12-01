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
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for FindNonMedicinalProductRequestType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="FindNonMedicinalProductRequestType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;choice>
 *         &lt;element name="FindByCNK" type="{urn:be:fgov:ehealth:samws:v2:core}DmppCodeType"/>
 *         &lt;element name="FindByName" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/choice>
 *       &lt;attribute ref="{http://www.w3.org/XML/1998/namespace}lang use="required""/>
 *       &lt;attribute name="searchDate" type="{http://www.w3.org/2001/XMLSchema}date" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "FindNonMedicinalProductRequestType", propOrder = {
    "findByName",
    "findByCNK"
})
@XmlRootElement(name = "FindNonMedicinalProductRequest")
public class FindNonMedicinalProductRequest
    implements Serializable
{

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "FindByName")
    protected String findByName;
    @XmlElement(name = "FindByCNK")
    protected String findByCNK;
    @XmlAttribute(name = "lang", namespace = "http://www.w3.org/XML/1998/namespace", required = true)
    protected String lang;
    @XmlAttribute(name = "searchDate")
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar searchDate;

    /**
     * Gets the value of the findByName property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getFindByName() {
        return findByName;
    }

    /**
     * Sets the value of the findByName property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setFindByName(String value) {
        this.findByName = value;
    }

    /**
     * Gets the value of the findByCNK property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getFindByCNK() {
        return findByCNK;
    }

    /**
     * Sets the value of the findByCNK property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setFindByCNK(String value) {
        this.findByCNK = value;
    }

    /**
     * Gets the value of the lang property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getLang() {
        return lang;
    }

    /**
     * Sets the value of the lang property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setLang(String value) {
        this.lang = value;
    }

    /**
     * Gets the value of the searchDate property.
     *
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *
     */
    public XMLGregorianCalendar getSearchDate() {
        return searchDate;
    }

    /**
     * Sets the value of the searchDate property.
     *
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *
     */
    public void setSearchDate(XMLGregorianCalendar value) {
        this.searchDate = value;
    }

}
