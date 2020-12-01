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

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>Java class for RootObjectFullDataType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="RootObjectFullDataType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Data" type="{urn:be:fgov:ehealth:samws:v2:export}RootObjectDataType" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="SomeChildObject" type="{urn:be:fgov:ehealth:samws:v2:export}RootObjectFullDataType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RootObjectFullDataType", propOrder = {
        "datas",
        "someChildObject"
})
public class RootObjectFullDataType
        implements Serializable {

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "Data")
    protected List<RootObjectDataType> datas;
    @XmlElement(name = "SomeChildObject")
    protected RootObjectFullDataType someChildObject;

    /**
     * Gets the value of the datas property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the datas property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDatas().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link RootObjectDataType }
     */
    public List<RootObjectDataType> getDatas() {
        if (datas == null) {
            datas = new ArrayList<RootObjectDataType>();
        }
        return this.datas;
    }

    /**
     * Gets the value of the someChildObject property.
     *
     * @return possible object is
     * {@link RootObjectFullDataType }
     */
    public RootObjectFullDataType getSomeChildObject() {
        return someChildObject;
    }

    /**
     * Sets the value of the someChildObject property.
     *
     * @param value allowed object is
     *              {@link RootObjectFullDataType }
     */
    public void setSomeChildObject(RootObjectFullDataType value) {
        this.someChildObject = value;
    }

}
