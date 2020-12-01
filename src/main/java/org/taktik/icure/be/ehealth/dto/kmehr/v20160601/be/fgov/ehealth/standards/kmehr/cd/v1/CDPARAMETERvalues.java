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
// Generated on: 2019.06.14 at 03:50:05 PM CEST
//


package org.taktik.icure.be.ehealth.dto.kmehr.v20160601.be.fgov.ehealth.standards.kmehr.cd.v1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CD-PARAMETERvalues.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-PARAMETERvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="weight"/>
 *     &lt;enumeration value="height"/>
 *     &lt;enumeration value="bmi"/>
 *     &lt;enumeration value="sbp"/>
 *     &lt;enumeration value="dbp"/>
 *     &lt;enumeration value="pulsecharacter"/>
 *     &lt;enumeration value="heartrate"/>
 *     &lt;enumeration value="peakflow"/>
 *     &lt;enumeration value="gpa"/>
 *     &lt;enumeration value="headcircumference"/>
 *     &lt;enumeration value="hipcircumference"/>
 *     &lt;enumeration value="apgar"/>
 *     &lt;enumeration value="katz"/>
 *     &lt;enumeration value="belrai"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 *
 */
@XmlType(name = "CD-PARAMETERvalues")
@XmlEnum
public enum CDPARAMETERvalues {

    @XmlEnumValue("weight")
    WEIGHT("weight"),
    @XmlEnumValue("height")
    HEIGHT("height"),
    @XmlEnumValue("bmi")
    BMI("bmi"),
    @XmlEnumValue("sbp")
    SBP("sbp"),
    @XmlEnumValue("dbp")
    DBP("dbp"),
    @XmlEnumValue("pulsecharacter")
    PULSECHARACTER("pulsecharacter"),
    @XmlEnumValue("heartrate")
    HEARTRATE("heartrate"),
    @XmlEnumValue("peakflow")
    PEAKFLOW("peakflow"),
    @XmlEnumValue("gpa")
    GPA("gpa"),
    @XmlEnumValue("headcircumference")
    HEADCIRCUMFERENCE("headcircumference"),
    @XmlEnumValue("hipcircumference")
    HIPCIRCUMFERENCE("hipcircumference"),
    @XmlEnumValue("apgar")
    APGAR("apgar"),
    @XmlEnumValue("katz")
    KATZ("katz"),
    @XmlEnumValue("belrai")
    BELRAI("belrai");
    private final String value;

    CDPARAMETERvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDPARAMETERvalues fromValue(String v) {
        for (CDPARAMETERvalues c: CDPARAMETERvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
