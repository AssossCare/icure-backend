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
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import org.taktik.icure.be.ehealth.samws.v2.refdata.SubstanceKeyType;


/**
 * <p>Java class for SubstanceWithStandardsType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="SubstanceWithStandardsType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:refdata}SubstanceKeyType">
 *       &lt;sequence>
 *         &lt;element name="ChemicalForm" type="{urn:be:fgov:ehealth:samws:v2:core}String10Type" minOccurs="0"/>
 *         &lt;element name="Name" type="{urn:be:fgov:ehealth:samws:v2:consultation}ConsultTextType"/>
 *         &lt;element name="Note" type="{urn:be:fgov:ehealth:samws:v2:consultation}ConsultTextType" minOccurs="0"/>
 *         &lt;element name="StandardSubstance" type="{urn:be:fgov:ehealth:samws:v2:consultation}ConsultStandardSubstanceType" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SubstanceWithStandardsType", propOrder = {
    "chemicalForm",
    "name",
    "note",
    "standardSubstances"
})
public class SubstanceWithStandardsType
    extends SubstanceKeyType
    implements Serializable
{

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "ChemicalForm")
    protected String chemicalForm;
    @XmlElement(name = "Name", required = true)
    protected ConsultTextType name;
    @XmlElement(name = "Note")
    protected ConsultTextType note;
    @XmlElement(name = "StandardSubstance")
    protected List<ConsultStandardSubstanceType> standardSubstances;

    /**
     * Gets the value of the chemicalForm property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getChemicalForm() {
        return chemicalForm;
    }

    /**
     * Sets the value of the chemicalForm property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setChemicalForm(String value) {
        this.chemicalForm = value;
    }

    /**
     * Gets the value of the name property.
     *
     * @return
     *     possible object is
     *     {@link ConsultTextType }
     *
     */
    public ConsultTextType getName() {
        return name;
    }

    /**
     * Sets the value of the name property.
     *
     * @param value
     *     allowed object is
     *     {@link ConsultTextType }
     *
     */
    public void setName(ConsultTextType value) {
        this.name = value;
    }

    /**
     * Gets the value of the note property.
     *
     * @return
     *     possible object is
     *     {@link ConsultTextType }
     *
     */
    public ConsultTextType getNote() {
        return note;
    }

    /**
     * Sets the value of the note property.
     *
     * @param value
     *     allowed object is
     *     {@link ConsultTextType }
     *
     */
    public void setNote(ConsultTextType value) {
        this.note = value;
    }

    /**
     * Gets the value of the standardSubstances property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the standardSubstances property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getStandardSubstances().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ConsultStandardSubstanceType }
     *
     *
     */
    public List<ConsultStandardSubstanceType> getStandardSubstances() {
        if (standardSubstances == null) {
            standardSubstances = new ArrayList<ConsultStandardSubstanceType>();
        }
        return this.standardSubstances;
    }

}
