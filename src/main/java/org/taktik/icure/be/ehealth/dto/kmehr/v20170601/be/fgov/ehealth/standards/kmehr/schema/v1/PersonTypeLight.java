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
// Generated on: 2019.06.14 at 03:50:09 PM CEST
//


package org.taktik.icure.be.ehealth.dto.kmehr.v20170601.be.fgov.ehealth.standards.kmehr.schema.v1;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import org.taktik.icure.be.ehealth.dto.kmehr.v20170601.be.fgov.ehealth.standards.kmehr.id.v1.IDPATIENT;


/**
 * <p>Java class for personTypeLight complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="personTypeLight">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="id" type="{http://www.ehealth.fgov.be/standards/kmehr/id/v1}ID-PATIENT" maxOccurs="unbounded"/>
 *         &lt;element name="firstname" type="{http://www.w3.org/2001/XMLSchema}string" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="familyname" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="address" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}addressType" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="telecom" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}telecomType" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "personTypeLight", propOrder = {
    "ids",
    "firstnames",
    "familyname",
    "addresses",
    "telecoms"
})
public class PersonTypeLight
    implements Serializable
{

    private final static long serialVersionUID = 20170601L;
    @XmlElement(name = "id", required = true)
    protected List<IDPATIENT> ids;
    @XmlElement(name = "firstname")
    protected List<String> firstnames;
    protected String familyname;
    @XmlElement(name = "address")
    protected List<AddressType> addresses;
    @XmlElement(name = "telecom")
    protected List<TelecomType> telecoms;

    /**
     * Gets the value of the ids property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the ids property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getIds().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link IDPATIENT }
     *
     *
     */
    public List<IDPATIENT> getIds() {
        if (ids == null) {
            ids = new ArrayList<IDPATIENT>();
        }
        return this.ids;
    }

    /**
     * Gets the value of the firstnames property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the firstnames property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getFirstnames().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     *
     *
     */
    public List<String> getFirstnames() {
        if (firstnames == null) {
            firstnames = new ArrayList<String>();
        }
        return this.firstnames;
    }

    /**
     * Gets the value of the familyname property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getFamilyname() {
        return familyname;
    }

    /**
     * Sets the value of the familyname property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setFamilyname(String value) {
        this.familyname = value;
    }

    /**
     * Gets the value of the addresses property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the addresses property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getAddresses().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link AddressType }
     *
     *
     */
    public List<AddressType> getAddresses() {
        if (addresses == null) {
            addresses = new ArrayList<AddressType>();
        }
        return this.addresses;
    }

    /**
     * Gets the value of the telecoms property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the telecoms property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getTelecoms().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link TelecomType }
     *
     *
     */
    public List<TelecomType> getTelecoms() {
        if (telecoms == null) {
            telecoms = new ArrayList<TelecomType>();
        }
        return this.telecoms;
    }

}
