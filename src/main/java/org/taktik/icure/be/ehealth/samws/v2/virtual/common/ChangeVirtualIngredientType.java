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


package org.taktik.icure.be.ehealth.samws.v2.virtual.common;

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
import org.taktik.icure.be.ehealth.samws.v2.core.IngredientTypeType;
import org.taktik.icure.be.ehealth.samws.v2.core.StrengthRangeType;


/**
 * <p>Java class for ChangeVirtualIngredientType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="ChangeVirtualIngredientType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:virtual:common}VirtualIngredientKeyType">
 *       &lt;sequence>
 *         &lt;sequence minOccurs="0">
 *           &lt;group ref="{urn:be:fgov:ehealth:samws:v2:virtual:common}VirtualIngredientFields"/>
 *           &lt;group ref="{urn:be:fgov:ehealth:samws:v2:virtual:common}VirtualIngredientReferences"/>
 *         &lt;/sequence>
 *         &lt;element name="RealVirtualIngredient" type="{urn:be:fgov:ehealth:samws:v2:virtual:common}ChangeRealVirtualIngredientType" maxOccurs="unbounded" minOccurs="0"/>
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
@XmlType(name = "ChangeVirtualIngredientType", propOrder = {
    "type",
    "strength",
    "substanceCode",
    "realVirtualIngredients"
})
public class ChangeVirtualIngredientType
    extends VirtualIngredientKeyType
    implements Serializable
{

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "Type")
    @XmlSchemaType(name = "string")
    protected IngredientTypeType type;
    @XmlElement(name = "Strength")
    protected StrengthRangeType strength;
    @XmlElement(name = "SubstanceCode")
    protected String substanceCode;
    @XmlElement(name = "RealVirtualIngredient")
    protected List<ChangeRealVirtualIngredientType> realVirtualIngredients;
    @XmlAttribute(name = "action", required = true)
    protected ChangeNoChangeActionType action;
    @XmlAttribute(name = "from")
    protected XMLGregorianCalendar from;
    @XmlAttribute(name = "to")
    protected XMLGregorianCalendar to;

    /**
     * Gets the value of the type property.
     *
     * @return
     *     possible object is
     *     {@link IngredientTypeType }
     *
     */
    public IngredientTypeType getType() {
        return type;
    }

    /**
     * Sets the value of the type property.
     *
     * @param value
     *     allowed object is
     *     {@link IngredientTypeType }
     *
     */
    public void setType(IngredientTypeType value) {
        this.type = value;
    }

    /**
     * Gets the value of the strength property.
     *
     * @return
     *     possible object is
     *     {@link StrengthRangeType }
     *
     */
    public StrengthRangeType getStrength() {
        return strength;
    }

    /**
     * Sets the value of the strength property.
     *
     * @param value
     *     allowed object is
     *     {@link StrengthRangeType }
     *
     */
    public void setStrength(StrengthRangeType value) {
        this.strength = value;
    }

    /**
     * Gets the value of the substanceCode property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getSubstanceCode() {
        return substanceCode;
    }

    /**
     * Sets the value of the substanceCode property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setSubstanceCode(String value) {
        this.substanceCode = value;
    }

    /**
     * Gets the value of the realVirtualIngredients property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the realVirtualIngredients property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getRealVirtualIngredients().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ChangeRealVirtualIngredientType }
     *
     *
     */
    public List<ChangeRealVirtualIngredientType> getRealVirtualIngredients() {
        if (realVirtualIngredients == null) {
            realVirtualIngredients = new ArrayList<ChangeRealVirtualIngredientType>();
        }
        return this.realVirtualIngredients;
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
