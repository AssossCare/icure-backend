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
 * <p>Java class for CD-TRANSACTION-TYPEvalues.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CD-TRANSACTION-TYPEvalues">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="incapacity"/>
 *     &lt;enumeration value="incapacityextension"/>
 *     &lt;enumeration value="incapacityrelapse"/>
 *     &lt;enumeration value="nursing"/>
 *     &lt;enumeration value="physiotherapy"/>
 *     &lt;enumeration value="intermediarynursing"/>
 *     &lt;enumeration value="intermediaryphysiotherapy"/>
 *     &lt;enumeration value="transferdocument"/>
 *     &lt;enumeration value="childrecord"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 *
 */
@XmlType(name = "CD-TRANSACTION-TYPEvalues")
@XmlEnum
public enum CDTRANSACTIONTYPEvalues {

    @XmlEnumValue("incapacity")
    INCAPACITY("incapacity"),
    @XmlEnumValue("incapacityextension")
    INCAPACITYEXTENSION("incapacityextension"),
    @XmlEnumValue("incapacityrelapse")
    INCAPACITYRELAPSE("incapacityrelapse"),
    @XmlEnumValue("nursing")
    NURSING("nursing"),
    @XmlEnumValue("physiotherapy")
    PHYSIOTHERAPY("physiotherapy"),
    @XmlEnumValue("intermediarynursing")
    INTERMEDIARYNURSING("intermediarynursing"),
    @XmlEnumValue("intermediaryphysiotherapy")
    INTERMEDIARYPHYSIOTHERAPY("intermediaryphysiotherapy"),
    @XmlEnumValue("transferdocument")
    TRANSFERDOCUMENT("transferdocument"),
    @XmlEnumValue("childrecord")
    CHILDRECORD("childrecord");
    private final String value;

    CDTRANSACTIONTYPEvalues(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static CDTRANSACTIONTYPEvalues fromValue(String v) {
        for (CDTRANSACTIONTYPEvalues c: CDTRANSACTIONTYPEvalues.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
