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
// Generated on: 2019.06.14 at 03:48:45 PM CEST
//


package org.taktik.icure.services.external.rest.v1.dto.be.ehealth.kmehr.v20121001.be.fgov.ehealth.standards.kmehr.schema.v1;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for holterType complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="holterType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="FCAVG" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="FCMAX" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}FCMAXType" minOccurs="0"/>
 *         &lt;element name="FCMIN" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}FCMINType" minOccurs="0"/>
 *         &lt;element name="FCAVGD" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="FCAVGN" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RRMAX" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}RRMAXType" minOccurs="0"/>
 *         &lt;element name="RRMIN" type="{http://www.ehealth.fgov.be/standards/kmehr/schema/v1}RRMINType" minOccurs="0"/>
 *         &lt;element name="QRSTOT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="BRADY" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="PAUSE" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="LONG" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="ESV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="DBLV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="SALVV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="BGV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TGV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TACHY" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="ESSV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="DBLSV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="SALVSV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="BGSV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TGSV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="TACHYSV" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RRINST" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 *
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "holterType", propOrder = {
    "fcavg",
    "fcmax",
    "fcmin",
    "fcavgd",
    "fcavgn",
    "rrmax",
    "rrmin",
    "qrstot",
    "brady",
    "pause",
    "_long",
    "esv",
    "dblv",
    "salvv",
    "bgv",
    "tgv",
    "tachy",
    "essv",
    "dblsv",
    "salvsv",
    "bgsv",
    "tgsv",
    "tachysv",
    "rrinst"
})
public class HolterType
    implements Serializable
{

    private final static long serialVersionUID = 20121001L;
    @XmlElement(name = "FCAVG")
    protected String fcavg;
    @XmlElement(name = "FCMAX")
    protected FCMAXType fcmax;
    @XmlElement(name = "FCMIN")
    protected FCMINType fcmin;
    @XmlElement(name = "FCAVGD")
    protected String fcavgd;
    @XmlElement(name = "FCAVGN")
    protected String fcavgn;
    @XmlElement(name = "RRMAX")
    protected RRMAXType rrmax;
    @XmlElement(name = "RRMIN")
    protected RRMINType rrmin;
    @XmlElement(name = "QRSTOT")
    protected String qrstot;
    @XmlElement(name = "BRADY")
    protected String brady;
    @XmlElement(name = "PAUSE")
    protected String pause;
    @XmlElement(name = "LONG")
    protected String _long;
    @XmlElement(name = "ESV")
    protected String esv;
    @XmlElement(name = "DBLV")
    protected String dblv;
    @XmlElement(name = "SALVV")
    protected String salvv;
    @XmlElement(name = "BGV")
    protected String bgv;
    @XmlElement(name = "TGV")
    protected String tgv;
    @XmlElement(name = "TACHY")
    protected String tachy;
    @XmlElement(name = "ESSV")
    protected String essv;
    @XmlElement(name = "DBLSV")
    protected String dblsv;
    @XmlElement(name = "SALVSV")
    protected String salvsv;
    @XmlElement(name = "BGSV")
    protected String bgsv;
    @XmlElement(name = "TGSV")
    protected String tgsv;
    @XmlElement(name = "TACHYSV")
    protected String tachysv;
    @XmlElement(name = "RRINST")
    protected String rrinst;

    /**
     * Gets the value of the fcavg property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getFCAVG() {
        return fcavg;
    }

    /**
     * Sets the value of the fcavg property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setFCAVG(String value) {
        this.fcavg = value;
    }

    /**
     * Gets the value of the fcmax property.
     *
     * @return
     *     possible object is
     *     {@link FCMAXType }
     *
     */
    public FCMAXType getFCMAX() {
        return fcmax;
    }

    /**
     * Sets the value of the fcmax property.
     *
     * @param value
     *     allowed object is
     *     {@link FCMAXType }
     *
     */
    public void setFCMAX(FCMAXType value) {
        this.fcmax = value;
    }

    /**
     * Gets the value of the fcmin property.
     *
     * @return
     *     possible object is
     *     {@link FCMINType }
     *
     */
    public FCMINType getFCMIN() {
        return fcmin;
    }

    /**
     * Sets the value of the fcmin property.
     *
     * @param value
     *     allowed object is
     *     {@link FCMINType }
     *
     */
    public void setFCMIN(FCMINType value) {
        this.fcmin = value;
    }

    /**
     * Gets the value of the fcavgd property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getFCAVGD() {
        return fcavgd;
    }

    /**
     * Sets the value of the fcavgd property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setFCAVGD(String value) {
        this.fcavgd = value;
    }

    /**
     * Gets the value of the fcavgn property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getFCAVGN() {
        return fcavgn;
    }

    /**
     * Sets the value of the fcavgn property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setFCAVGN(String value) {
        this.fcavgn = value;
    }

    /**
     * Gets the value of the rrmax property.
     *
     * @return
     *     possible object is
     *     {@link RRMAXType }
     *
     */
    public RRMAXType getRRMAX() {
        return rrmax;
    }

    /**
     * Sets the value of the rrmax property.
     *
     * @param value
     *     allowed object is
     *     {@link RRMAXType }
     *
     */
    public void setRRMAX(RRMAXType value) {
        this.rrmax = value;
    }

    /**
     * Gets the value of the rrmin property.
     *
     * @return
     *     possible object is
     *     {@link RRMINType }
     *
     */
    public RRMINType getRRMIN() {
        return rrmin;
    }

    /**
     * Sets the value of the rrmin property.
     *
     * @param value
     *     allowed object is
     *     {@link RRMINType }
     *
     */
    public void setRRMIN(RRMINType value) {
        this.rrmin = value;
    }

    /**
     * Gets the value of the qrstot property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getQRSTOT() {
        return qrstot;
    }

    /**
     * Sets the value of the qrstot property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setQRSTOT(String value) {
        this.qrstot = value;
    }

    /**
     * Gets the value of the brady property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getBRADY() {
        return brady;
    }

    /**
     * Sets the value of the brady property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setBRADY(String value) {
        this.brady = value;
    }

    /**
     * Gets the value of the pause property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getPAUSE() {
        return pause;
    }

    /**
     * Sets the value of the pause property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setPAUSE(String value) {
        this.pause = value;
    }

    /**
     * Gets the value of the long property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getLONG() {
        return _long;
    }

    /**
     * Sets the value of the long property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setLONG(String value) {
        this._long = value;
    }

    /**
     * Gets the value of the esv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getESV() {
        return esv;
    }

    /**
     * Sets the value of the esv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setESV(String value) {
        this.esv = value;
    }

    /**
     * Gets the value of the dblv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getDBLV() {
        return dblv;
    }

    /**
     * Sets the value of the dblv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setDBLV(String value) {
        this.dblv = value;
    }

    /**
     * Gets the value of the salvv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getSALVV() {
        return salvv;
    }

    /**
     * Sets the value of the salvv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setSALVV(String value) {
        this.salvv = value;
    }

    /**
     * Gets the value of the bgv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getBGV() {
        return bgv;
    }

    /**
     * Sets the value of the bgv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setBGV(String value) {
        this.bgv = value;
    }

    /**
     * Gets the value of the tgv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getTGV() {
        return tgv;
    }

    /**
     * Sets the value of the tgv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setTGV(String value) {
        this.tgv = value;
    }

    /**
     * Gets the value of the tachy property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getTACHY() {
        return tachy;
    }

    /**
     * Sets the value of the tachy property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setTACHY(String value) {
        this.tachy = value;
    }

    /**
     * Gets the value of the essv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getESSV() {
        return essv;
    }

    /**
     * Sets the value of the essv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setESSV(String value) {
        this.essv = value;
    }

    /**
     * Gets the value of the dblsv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getDBLSV() {
        return dblsv;
    }

    /**
     * Sets the value of the dblsv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setDBLSV(String value) {
        this.dblsv = value;
    }

    /**
     * Gets the value of the salvsv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getSALVSV() {
        return salvsv;
    }

    /**
     * Sets the value of the salvsv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setSALVSV(String value) {
        this.salvsv = value;
    }

    /**
     * Gets the value of the bgsv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getBGSV() {
        return bgsv;
    }

    /**
     * Sets the value of the bgsv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setBGSV(String value) {
        this.bgsv = value;
    }

    /**
     * Gets the value of the tgsv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getTGSV() {
        return tgsv;
    }

    /**
     * Sets the value of the tgsv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setTGSV(String value) {
        this.tgsv = value;
    }

    /**
     * Gets the value of the tachysv property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getTACHYSV() {
        return tachysv;
    }

    /**
     * Sets the value of the tachysv property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setTACHYSV(String value) {
        this.tachysv = value;
    }

    /**
     * Gets the value of the rrinst property.
     *
     * @return
     *     possible object is
     *     {@link String }
     *
     */
    public String getRRINST() {
        return rrinst;
    }

    /**
     * Sets the value of the rrinst property.
     *
     * @param value
     *     allowed object is
     *     {@link String }
     *
     */
    public void setRRINST(String value) {
        this.rrinst = value;
    }

}
