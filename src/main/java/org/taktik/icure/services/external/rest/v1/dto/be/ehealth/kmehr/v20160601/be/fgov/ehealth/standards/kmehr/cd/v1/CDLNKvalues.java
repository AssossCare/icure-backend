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
// Generated on: 2019.06.14 at 03:50:06 PM CEST
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20160601.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-LNKvalues.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-LNKvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="isachildof"/>
 *     &lt;enumeration value="isaconsequenceof"/>
 *     &lt;enumeration value="isanewversionof"/>
 *     &lt;enumeration value="isareplyto"/>
 *     &lt;enumeration value="multimedia"/>
 *     &lt;enumeration value="thumbnail"/>
 *     &lt;enumeration value="isanappendixof"/>
 *     &lt;enumeration value="isaservicefor"/>
 *     &lt;enumeration value="isrealisationof"/>
 *     &lt;enumeration value="isapproachfor"/>
 *     &lt;enumeration value="isplannedfor"/>
 *     &lt;enumeration value="isattestationof"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 *
 */
@XmlType(name = "CD-LNKvalues")
@XmlEnum
public enum CDLNKvalues {

    @XmlEnumValue("isachildof")
    ISACHILDOF("isachildof"),
    @XmlEnumValue("isaconsequenceof")
    ISACONSEQUENCEOF("isaconsequenceof"),
    @XmlEnumValue("isanewversionof")
    ISANEWVERSIONOF("isanewversionof"),
    @XmlEnumValue("isareplyto")
    ISAREPLYTO("isareplyto"),
    @XmlEnumValue("multimedia")
    MULTIMEDIA("multimedia"),
    @XmlEnumValue("thumbnail")
    THUMBNAIL("thumbnail"),
    @XmlEnumValue("isanappendixof")
    ISANAPPENDIXOF("isanappendixof"),
    @XmlEnumValue("isaservicefor")
    ISASERVICEFOR("isaservicefor"),
    @XmlEnumValue("isrealisationof")
    ISREALISATIONOF("isrealisationof"),
    @XmlEnumValue("isapproachfor")
    ISAPPROACHFOR("isapproachfor"),
    @XmlEnumValue("isplannedfor")
    ISPLANNEDFOR("isplannedfor"),
    @XmlEnumValue("isattestationof")
    ISATTESTATIONOF("isattestationof");
    private final String value;

    CDLNKvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDLNKvalues fromValue(String v) {
        for (CDLNKvalues c: CDLNKvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
