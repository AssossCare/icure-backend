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
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;
import org.taktik.icure.be.ehealth.samws.v2.core.AddActionType;


/**
 * <p>Java class for AddAmppFamhpType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="AddAmppFamhpType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:actual:common}AmppFamhpType">
 *       &lt;sequence>
 *         &lt;element name="AmppComponent" type="{urn:be:fgov:ehealth:samws:v2:actual:common}AddAmppComponentType" maxOccurs="unbounded"/>
 *         &lt;element name="Commercialization" type="{urn:be:fgov:ehealth:samws:v2:actual:common}AddCommercializationType" minOccurs="0"/>
 *         &lt;element name="SupplyProblem" type="{urn:be:fgov:ehealth:samws:v2:actual:common}AddSupplyProblemType" minOccurs="0"/>
 *         &lt;element name="DerogationImport" type="{urn:be:fgov:ehealth:samws:v2:actual:common}AddDerogationImportType" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attGroup ref="{urn:be:fgov:ehealth:samws:v2:core}addMetadata"/>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AddAmppFamhpType", propOrder = {
    "amppComponents",
    "commercialization",
    "supplyProblem",
    "derogationImports"
})
public class AddAmppFamhpType
    extends AmppFamhpType
    implements Serializable
{

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "AmppComponent", required = true)
    protected List<AddAmppComponentType> amppComponents;
    @XmlElement(name = "Commercialization")
    protected AddCommercializationType commercialization;
    @XmlElement(name = "SupplyProblem")
    protected AddSupplyProblemType supplyProblem;
    @XmlElement(name = "DerogationImport")
    protected List<AddDerogationImportType> derogationImports;
    @XmlAttribute(name = "action", required = true)
    protected AddActionType action;
    @XmlAttribute(name = "from", required = true)
    protected XMLGregorianCalendar from;
    @XmlAttribute(name = "to")
    protected XMLGregorianCalendar to;

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
     * {@link AddAmppComponentType }
     *
     *
     */
    public List<AddAmppComponentType> getAmppComponents() {
        if (amppComponents == null) {
            amppComponents = new ArrayList<AddAmppComponentType>();
        }
        return this.amppComponents;
    }

    /**
     * Gets the value of the commercialization property.
     *
     * @return
     *     possible object is
     *     {@link AddCommercializationType }
     *
     */
    public AddCommercializationType getCommercialization() {
        return commercialization;
    }

    /**
     * Sets the value of the commercialization property.
     *
     * @param value
     *     allowed object is
     *     {@link AddCommercializationType }
     *
     */
    public void setCommercialization(AddCommercializationType value) {
        this.commercialization = value;
    }

    /**
     * Gets the value of the supplyProblem property.
     *
     * @return
     *     possible object is
     *     {@link AddSupplyProblemType }
     *
     */
    public AddSupplyProblemType getSupplyProblem() {
        return supplyProblem;
    }

    /**
     * Sets the value of the supplyProblem property.
     *
     * @param value
     *     allowed object is
     *     {@link AddSupplyProblemType }
     *
     */
    public void setSupplyProblem(AddSupplyProblemType value) {
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
     * {@link AddDerogationImportType }
     *
     *
     */
    public List<AddDerogationImportType> getDerogationImports() {
        if (derogationImports == null) {
            derogationImports = new ArrayList<AddDerogationImportType>();
        }
        return this.derogationImports;
    }

    /**
     * Gets the value of the action property.
     *
     * @return
     *     possible object is
     *     {@link AddActionType }
     *
     */
    public AddActionType getAction() {
        return action;
    }

    /**
     * Sets the value of the action property.
     *
     * @param value
     *     allowed object is
     *     {@link AddActionType }
     *
     */
    public void setAction(AddActionType value) {
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
