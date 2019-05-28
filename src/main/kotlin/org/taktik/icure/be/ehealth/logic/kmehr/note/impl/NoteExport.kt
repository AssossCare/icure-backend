package org.taktik.icure.be.ehealth.logic.kmehr.note.impl

import org.taktik.icure.be.ehealth.dto.kmehr.v20161201.Utils
import org.taktik.icure.be.ehealth.dto.kmehr.v20161201.be.fgov.ehealth.standards.kmehr.cd.v1.CDHCPARTY
import org.taktik.icure.be.ehealth.dto.kmehr.v20161201.be.fgov.ehealth.standards.kmehr.cd.v1.CDHCPARTYschemes
import org.taktik.icure.be.ehealth.dto.kmehr.v20161201.be.fgov.ehealth.standards.kmehr.schema.v1.FolderType
import org.taktik.icure.be.ehealth.dto.kmehr.v20161201.be.fgov.ehealth.standards.kmehr.schema.v1.HcpartyType
import org.taktik.icure.be.ehealth.dto.kmehr.v20161201.be.fgov.ehealth.standards.kmehr.schema.v1.Kmehrmessage
import org.taktik.icure.be.ehealth.dto.kmehr.v20161201.be.fgov.ehealth.standards.kmehr.schema.v1.RecipientType
import org.taktik.icure.be.ehealth.logic.kmehr.v20161201.KmehrExport
import org.taktik.icure.entities.HealthcareParty
import org.taktik.icure.entities.Patient
import java.io.OutputStream
import java.io.OutputStreamWriter
import java.time.Instant
import javax.xml.bind.JAXBContext
import javax.xml.bind.Marshaller

@org.springframework.stereotype.Service
class NoteExport: KmehrExport(){

    fun exportNote(os: OutputStream, patient: Patient, sfks: List<String>, sender: HealthcareParty, language: String, document: String, comment: String, transactionType: String, config: Config = Config(_kmehrId = System.currentTimeMillis().toString(),
            date = makeXGC(Instant.now().toEpochMilli())!!,
            time = Utils.makeXGC(Instant.now().toEpochMilli(), true)!!,
            soft = Config.Software(name = "Topaz", version = ICUREVERSION),
            clinicalSummaryType = "",
            defaultLanguage = "en"
    )){
        val message = initializeMessage(sender, config)
        message.header.recipients.add(RecipientType().apply {
            hcparties.add(HcpartyType().apply {
                cds.add(CDHCPARTY().apply { s = CDHCPARTYschemes.CD_HCPARTY; sv = "1.6"; value = "application" })
                name = "RSW" //TODO: should change based on selected hub
            })
        })

        message.folders.add(makePatientFolder(1, patient, sfks, sender, config, language))

        val jaxbMarshaller = JAXBContext.newInstance(Kmehrmessage::class.java).createMarshaller()

        // output pretty printed
        jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true)
        jaxbMarshaller.setProperty(Marshaller.JAXB_ENCODING, "UTF-8")

        jaxbMarshaller.marshal(message, OutputStreamWriter(os, "UTF-8"))
    }

    private fun makePatientFolder(patientIndex: Int, patient: Patient, sfks: List<String>, healthcareParty: HealthcareParty, config: Config, language: String): FolderType{
        //creation of Patient
        val folder = FolderType().apply {
            ids.add(idKmehr(patientIndex))
            this.patient = makePatient(patient, config)
        }



        return folder
    }




}