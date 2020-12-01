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
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import org.taktik.icure.be.ehealth.samws.v2.core.QuantityType;


/**
 * <p>Java class for FindByIngredientType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="FindByIngredientType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;choice>
 *           &lt;element name="SubstanceCode" type="{urn:be:fgov:ehealth:samws:v2:consultation}StandardSubstanceCodeCriterionType"/>
 *           &lt;element name="SubstanceName" type="{urn:be:fgov:ehealth:samws:v2:consultation}StandardSubstanceNameCriterionType"/>
 *         &lt;/choice>
 *         &lt;element name="Strength" type="{urn:be:fgov:ehealth:samws:v2:core}QuantityType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "FindByIngredientType", propOrder = {
    "substanceName",
    "substanceCode",
    "strength"
})
public class FindByIngredientType
    implements Serializable
{

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "SubstanceName")
    protected StandardSubstanceNameCriterionType substanceName;
    @XmlElement(name = "SubstanceCode")
    protected StandardSubstanceCodeCriterionType substanceCode;
    @XmlElement(name = "Strength")
    protected QuantityType strength;

    /**
     * Gets the value of the substanceName property.
     *
     * @return
     *     possible object is
     *     {@link StandardSubstanceNameCriterionType }
     *
     */
    public StandardSubstanceNameCriterionType getSubstanceName() {
        return substanceName;
    }

    /**
     * Sets the value of the substanceName property.
     *
     * @param value
     *     allowed object is
     *     {@link StandardSubstanceNameCriterionType }
     *
     */
    public void setSubstanceName(StandardSubstanceNameCriterionType value) {
        this.substanceName = value;
    }

    /**
     * Gets the value of the substanceCode property.
     *
     * @return
     *     possible object is
     *     {@link StandardSubstanceCodeCriterionType }
     *
     */
    public StandardSubstanceCodeCriterionType getSubstanceCode() {
        return substanceCode;
    }

    /**
     * Sets the value of the substanceCode property.
     *
     * @param value
     *     allowed object is
     *     {@link StandardSubstanceCodeCriterionType }
     *
     */
    public void setSubstanceCode(StandardSubstanceCodeCriterionType value) {
        this.substanceCode = value;
    }

    /**
     * Gets the value of the strength property.
     *
     * @return
     *     possible object is
     *     {@link QuantityType }
     *
     */
    public QuantityType getStrength() {
        return strength;
    }

    /**
     * Sets the value of the strength property.
     *
     * @param value
     *     allowed object is
     *     {@link QuantityType }
     *
     */
    public void setStrength(QuantityType value) {
        this.strength = value;
    }

}
