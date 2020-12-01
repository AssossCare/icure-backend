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
// Generated on: 2020.10.15 at 03:32:18 PM CEST
//


package org.taktik.icure.be.samv2v5.entities;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for ChangeAmpComponentFamhpType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="ChangeAmpComponentFamhpType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:actual:common}AmpComponentKeyType">
 *       &lt;sequence>
 *         &lt;sequence minOccurs="0">
 *           &lt;group ref="{urn:be:fgov:ehealth:samws:v2:actual:common}AmpComponentFamhpReferences"/>
 *         &lt;/sequence>
 *         &lt;element name="RealActualIngredient" type="{urn:be:fgov:ehealth:samws:v2:actual:common}ChangeRealActualIngredientType" maxOccurs="unbounded" minOccurs="0"/>
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
@XmlType(name = "ChangeAmpComponentFamhpType", namespace = "urn:be:fgov:ehealth:samws:v2:actual:common", propOrder = {
    "pharmaceuticalFormCode",
    "routeOfAdministrationCode",
    "realActualIngredient"
})
public class ChangeAmpComponentFamhpType
    extends AmpComponentKeyType
{

    @XmlElement(name = "PharmaceuticalFormCode")
    protected List<String> pharmaceuticalFormCode;
    @XmlElement(name = "RouteOfAdministrationCode")
    protected List<String> routeOfAdministrationCode;
    @XmlElement(name = "RealActualIngredient")
    protected List<ChangeRealActualIngredientType> realActualIngredient;
    @XmlAttribute(name = "action", required = true)
    protected ChangeNoChangeActionType action;
    @XmlAttribute(name = "from")
    protected XMLGregorianCalendar from;
    @XmlAttribute(name = "to")
    protected XMLGregorianCalendar to;

    /**
     * Gets the value of the pharmaceuticalFormCode property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the pharmaceuticalFormCode property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getPharmaceuticalFormCode().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     *
     *
     */
    public List<String> getPharmaceuticalFormCode() {
        if (pharmaceuticalFormCode == null) {
            pharmaceuticalFormCode = new ArrayList<String>();
        }
        return this.pharmaceuticalFormCode;
    }

    /**
     * Gets the value of the routeOfAdministrationCode property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the routeOfAdministrationCode property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getRouteOfAdministrationCode().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     *
     *
     */
    public List<String> getRouteOfAdministrationCode() {
        if (routeOfAdministrationCode == null) {
            routeOfAdministrationCode = new ArrayList<String>();
        }
        return this.routeOfAdministrationCode;
    }

    /**
     * Gets the value of the realActualIngredient property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the realActualIngredient property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getRealActualIngredient().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ChangeRealActualIngredientType }
     *
     *
     */
    public List<ChangeRealActualIngredientType> getRealActualIngredient() {
        if (realActualIngredient == null) {
            realActualIngredient = new ArrayList<ChangeRealActualIngredientType>();
        }
        return this.realActualIngredient;
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
