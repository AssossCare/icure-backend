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
 * <p>Java class for CD-IMPLANTATION-TYPEvalues.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-IMPLANTATION-TYPEvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="unimedial"/>
 *     &lt;enumeration value="unilateral"/>
 *     &lt;enumeration value="bicompartimental"/>
 *     &lt;enumeration value="femoropatellar"/>
 *     &lt;enumeration value="totalcr"/>
 *     &lt;enumeration value="totalps"/>
 *     &lt;enumeration value="totalcck"/>
 *     &lt;enumeration value="hinge"/>
 *     &lt;enumeration value="totaluc"/>
 *     &lt;enumeration value="other"/>
 *     &lt;enumeration value="totalprosthesis"/>
 *     &lt;enumeration value="totalprosthesisdualmobility"/>
 *     &lt;enumeration value="hemiprosthesismonoblock"/>
 *     &lt;enumeration value="hemiprosthesisbipolar"/>
 *     &lt;enumeration value="bicruciateretaining"/>
 *     &lt;enumeration value="hemiprosthesismodular"/>
 *     &lt;enumeration value="resurfacingfemhemi"/>
 *     &lt;enumeration value="resurfacingfemcup"/>
 *     &lt;enumeration value="resurfacingpartial"/>
 *     &lt;enumeration value="resurfacingpartialfemcondyle"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 *
 */
@XmlType(name = "CD-IMPLANTATION-TYPEvalues")
@XmlEnum
public enum CDIMPLANTATIONTYPEvalues {

    @XmlEnumValue("unimedial")
    UNIMEDIAL("unimedial"),
    @XmlEnumValue("unilateral")
    UNILATERAL("unilateral"),
    @XmlEnumValue("bicompartimental")
    BICOMPARTIMENTAL("bicompartimental"),
    @XmlEnumValue("femoropatellar")
    FEMOROPATELLAR("femoropatellar"),
    @XmlEnumValue("totalcr")
    TOTALCR("totalcr"),
    @XmlEnumValue("totalps")
    TOTALPS("totalps"),
    @XmlEnumValue("totalcck")
    TOTALCCK("totalcck"),
    @XmlEnumValue("hinge")
    HINGE("hinge"),
    @XmlEnumValue("totaluc")
    TOTALUC("totaluc"),
    @XmlEnumValue("other")
    OTHER("other"),
    @XmlEnumValue("totalprosthesis")
    TOTALPROSTHESIS("totalprosthesis"),
    @XmlEnumValue("totalprosthesisdualmobility")
    TOTALPROSTHESISDUALMOBILITY("totalprosthesisdualmobility"),
    @XmlEnumValue("hemiprosthesismonoblock")
    HEMIPROSTHESISMONOBLOCK("hemiprosthesismonoblock"),
    @XmlEnumValue("hemiprosthesisbipolar")
    HEMIPROSTHESISBIPOLAR("hemiprosthesisbipolar"),
    @XmlEnumValue("bicruciateretaining")
    BICRUCIATERETAINING("bicruciateretaining"),
    @XmlEnumValue("hemiprosthesismodular")
    HEMIPROSTHESISMODULAR("hemiprosthesismodular"),
    @XmlEnumValue("resurfacingfemhemi")
    RESURFACINGFEMHEMI("resurfacingfemhemi"),
    @XmlEnumValue("resurfacingfemcup")
    RESURFACINGFEMCUP("resurfacingfemcup"),
    @XmlEnumValue("resurfacingpartial")
    RESURFACINGPARTIAL("resurfacingpartial"),
    @XmlEnumValue("resurfacingpartialfemcondyle")
    RESURFACINGPARTIALFEMCONDYLE("resurfacingpartialfemcondyle");
    private final String value;

    CDIMPLANTATIONTYPEvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDIMPLANTATIONTYPEvalues fromValue(String v) {
        for (CDIMPLANTATIONTYPEvalues c: CDIMPLANTATIONTYPEvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
