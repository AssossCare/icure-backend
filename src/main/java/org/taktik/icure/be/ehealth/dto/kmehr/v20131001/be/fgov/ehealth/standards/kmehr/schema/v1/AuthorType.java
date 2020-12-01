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
// Generated on: 2019.06.14 at 03:48:36 PM CEST
//


package org.taktik.icure.be.ehealth.dto.kmehr.v20131001.be.fgov.ehealth.standards.kmehr.schema.v1;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * the author assumes the medical responsibility of the content of the transaction. It can be specified by a combination of hcparty elements (organisation, medical specialty, person), but it must necessarily contain one hcparty identifying one person. The author is not the transcriptionist that has typed the report. The author is not necessarily the performer of the act that is reported by the transaction. In that case, the author of the transaction can be overwritten at the level of the item
 *
 * <p>Java class for authorType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="authorType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="hcparty" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}hcpartyType" maxOccurs="unbounded"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "authorType", propOrder = {
    "hcparties"
})
public class AuthorType
    implements Serializable
{

    private final static long serialVersionUID = 20131001L;
    @XmlElement(name = "hcparty", required = true)
    protected List<HcpartyType> hcparties;

    /**
     * Gets the value of the hcparties property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the hcparties property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getHcparties().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link HcpartyType }
     *
     *
     */
    public List<HcpartyType> getHcparties() {
        if (hcparties == null) {
            hcparties = new ArrayList<HcpartyType>();
        }
        return this.hcparties;
    }

}
