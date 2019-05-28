package org.taktik.icure.be.ehealth.logic.kmehr.note.impl

import org.taktik.icure.be.ehealth.logic.kmehr.note.NoteLogic
import org.springframework.stereotype.Service
import org.taktik.icure.entities.HealthcareParty
import org.taktik.icure.entities.Patient
import org.taktik.icure.services.external.http.websocket.KmehrFileOperation
import java.io.OutputStream

@Service
class NoteLogicImpl(val noteExport :  NoteExport) : NoteLogic {
    override fun createNoteExport(os: OutputStream, patient: Patient, sfks: List<String>, sender: HealthcareParty, language: String, document: String, comment: String, transactionType: String) {
        noteExport!!.exportNote(os,patient,sfks,sender,language, document, comment, transactionType)
    }
}