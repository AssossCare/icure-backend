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


package org.taktik.icure.be.ehealth.samws.v2.refdata;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import org.taktik.icure.be.ehealth.samws.v2.core.Text255Type;
import org.taktik.icure.be.ehealth.samws.v2.core.TextType;


/**
 * <p>Java class for StandardRouteBcpiType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="StandardRouteBcpiType">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:be:fgov:ehealth:samws:v2:refdata}StandardRouteKeyBcpiType">
 *       &lt;sequence>
 *         &lt;group ref="{urn:be:fgov:ehealth:samws:v2:refdata}StandardRouteFields"/>
 *         &lt;element name="RouteOfAdministration" type="{urn:be:fgov:ehealth:samws:v2:refdata}RouteOfAdministrationKeyType" maxOccurs="unbounded"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "StandardRouteBcpiType", propOrder = {
    "name",
    "definition",
    "url",
    "routeOfAdministrations"
})
public class StandardRouteBcpiType
    extends StandardRouteKeyBcpiType
    implements Serializable
{

    private final static long serialVersionUID = 2L;
    @XmlElement(name = "Name")
    protected Text255Type name;
    @XmlElement(name = "Definition")
    protected TextType definition;
    @XmlElement(name = "URL")
    protected String url;
    @XmlElement(name = "RouteOfAdministration", required = true)
    protected List<RouteOfAdministrationKeyType> routeOfAdministrations;

    /**
     * Gets the value of the name property.
     *
     * @return
     *     possible object is
     *     {@link Text255Type }
     *
     */
    public Text255Type getName() {
        return name;
    }

    /**
     * Sets the value of the name property.
     *
     * @param value
     *     allowed object is
     *     {@link Text255Type }
     *
     */
    public void setName(Text255Type value) {
        this.name = value;
    }

    /**
     * Gets the value of the definition property.
     *
     * @return
     *     possible object is
     *     {@link TextType }
     *
     */
    public TextType getDefinition() {
        return definition;
    }

    /**
     * Sets the value of the definition property.
     *
     * @param value
     *     allowed object is
     *     {@link TextType }
     *
     */
    public void setDefinition(TextType value) {
        this.definition = value;
    }

    /**
     * Gets the value of the url property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getURL() {
        return url;
    }

    /**
     * Sets the value of the url property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setURL(String value) {
        this.url = value;
    }

    /**
     * Gets the value of the routeOfAdministrations property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the routeOfAdministrations property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getRouteOfAdministrations().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link RouteOfAdministrationKeyType }
     *
     *
     */
    public List<RouteOfAdministrationKeyType> getRouteOfAdministrations() {
        if (routeOfAdministrations == null) {
            routeOfAdministrations = new ArrayList<RouteOfAdministrationKeyType>();
        }
        return this.routeOfAdministrations;
    }

}
