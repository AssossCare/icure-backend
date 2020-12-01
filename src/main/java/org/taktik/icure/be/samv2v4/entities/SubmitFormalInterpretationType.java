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
// Generated on: 2020.05.12 at 04:36:37 PM CEST
//


package org.taktik.icure.be.samv2v4.entities;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for SubmitFormalInterpretationType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="SubmitFormalInterpretationType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:reimbursementlaw:submit}FormalInterpretationType">
 *       &lt;sequence>
 *         &lt;element name="ReimbursementCondition" type="{urn:be:fgov:ehealth:samws:v2:reimbursementlaw:submit}SubmitReimbursementConditionType" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="ReimbursementTerm" type="{urn:be:fgov:ehealth:samws:v2:reimbursementlaw:submit}SubmitReimbursementTermType" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attGroup ref="{urn:be:fgov:ehealth:samws:v2:core}allActionsMetadata"/>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SubmitFormalInterpretationType", namespace = "urn:be:fgov:ehealth:samws:v2:reimbursementlaw:submit", propOrder = {
    "reimbursementCondition",
    "reimbursementTerm"
})
public class SubmitFormalInterpretationType
    extends FormalInterpretationType
{

    @XmlElement(name = "ReimbursementCondition")
    protected List<SubmitReimbursementConditionType> reimbursementCondition;
    @XmlElement(name = "ReimbursementTerm")
    protected List<SubmitReimbursementTermType> reimbursementTerm;
    @XmlAttribute(name = "action", required = true)
    protected AllActionsType action;
    @XmlAttribute(name = "from")
    protected XMLGregorianCalendar from;
    @XmlAttribute(name = "to")
    protected XMLGregorianCalendar to;

    /**
     * Gets the value of the reimbursementCondition property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the reimbursementCondition property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getReimbursementCondition().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link SubmitReimbursementConditionType }
     *
     *
     */
    public List<SubmitReimbursementConditionType> getReimbursementCondition() {
        if (reimbursementCondition == null) {
            reimbursementCondition = new ArrayList<SubmitReimbursementConditionType>();
        }
        return this.reimbursementCondition;
    }

    /**
     * Gets the value of the reimbursementTerm property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the reimbursementTerm property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getReimbursementTerm().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link SubmitReimbursementTermType }
     *
     *
     */
    public List<SubmitReimbursementTermType> getReimbursementTerm() {
        if (reimbursementTerm == null) {
            reimbursementTerm = new ArrayList<SubmitReimbursementTermType>();
        }
        return this.reimbursementTerm;
    }

    /**
     * Gets the value of the action property.
     *
     * @return
     *     possible object is
     *     {@link AllActionsType }
     *
     */
    public AllActionsType getAction() {
        return action;
    }

    /**
     * Sets the value of the action property.
     *
     * @param value
     *     allowed object is
     *     {@link AllActionsType }
     *
     */
    public void setAction(AllActionsType value) {
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
