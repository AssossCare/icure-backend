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
// Generated on: 2019.06.14 at 03:50:02 PM CEST
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20130710.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-STENT-SEGMENTvalues.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-STENT-SEGMENTvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="proxrca"/>
 *     &lt;enumeration value="midrca"/>
 *     &lt;enumeration value="distrca"/>
 *     &lt;enumeration value="rightposteriordescending"/>
 *     &lt;enumeration value="leftmain"/>
 *     &lt;enumeration value="proxlad"/>
 *     &lt;enumeration value="midlad"/>
 *     &lt;enumeration value="distlad"/>
 *     &lt;enumeration value="d1"/>
 *     &lt;enumeration value="d2"/>
 *     &lt;enumeration value="d3"/>
 *     &lt;enumeration value="proxcx"/>
 *     &lt;enumeration value="intermediatebissectrice"/>
 *     &lt;enumeration value="m1"/>
 *     &lt;enumeration value="m2"/>
 *     &lt;enumeration value="distcx"/>
 *     &lt;enumeration value="pl1"/>
 *     &lt;enumeration value="pl2"/>
 *     &lt;enumeration value="pl3"/>
 *     &lt;enumeration value="leftposteriordescending"/>
 *     &lt;enumeration value="rv"/>
 *     &lt;enumeration value="rightpl2"/>
 *     &lt;enumeration value="rightpl3"/>
 *     &lt;enumeration value="pl4"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 *
 */
@XmlType(name = "CD-STENT-SEGMENTvalues")
@XmlEnum
public enum CDSTENTSEGMENTvalues {

    @XmlEnumValue("proxrca")
    PROXRCA("proxrca"),
    @XmlEnumValue("midrca")
    MIDRCA("midrca"),
    @XmlEnumValue("distrca")
    DISTRCA("distrca"),
    @XmlEnumValue("rightposteriordescending")
    RIGHTPOSTERIORDESCENDING("rightposteriordescending"),
    @XmlEnumValue("leftmain")
    LEFTMAIN("leftmain"),
    @XmlEnumValue("proxlad")
    PROXLAD("proxlad"),
    @XmlEnumValue("midlad")
    MIDLAD("midlad"),
    @XmlEnumValue("distlad")
    DISTLAD("distlad"),
    @XmlEnumValue("d1")
    D_1("d1"),
    @XmlEnumValue("d2")
    D_2("d2"),
    @XmlEnumValue("d3")
    D_3("d3"),
    @XmlEnumValue("proxcx")
    PROXCX("proxcx"),
    @XmlEnumValue("intermediatebissectrice")
    INTERMEDIATEBISSECTRICE("intermediatebissectrice"),
    @XmlEnumValue("m1")
    M_1("m1"),
    @XmlEnumValue("m2")
    M_2("m2"),
    @XmlEnumValue("distcx")
    DISTCX("distcx"),
    @XmlEnumValue("pl1")
    PL_1("pl1"),
    @XmlEnumValue("pl2")
    PL_2("pl2"),
    @XmlEnumValue("pl3")
    PL_3("pl3"),
    @XmlEnumValue("leftposteriordescending")
    LEFTPOSTERIORDESCENDING("leftposteriordescending"),
    @XmlEnumValue("rv")
    RV("rv"),
    @XmlEnumValue("rightpl2")
    RIGHTPL_2("rightpl2"),
    @XmlEnumValue("rightpl3")
    RIGHTPL_3("rightpl3"),
    @XmlEnumValue("pl4")
    PL_4("pl4");
    private final String value;

    CDSTENTSEGMENTvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDSTENTSEGMENTvalues fromValue(String v) {
        for (CDSTENTSEGMENTvalues c: CDSTENTSEGMENTvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
