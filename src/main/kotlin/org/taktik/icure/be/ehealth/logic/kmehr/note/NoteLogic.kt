package org.taktik.icure.be.ehealth.logic.kmehr.note

import org.taktik.icure.entities.HealthcareParty
import org.taktik.icure.entities.Patient
import java.io.OutputStream

interface NoteLogic {
    fun createNoteExport(os: OutputStream, patient: Patient, sfks: List<String>, sender: HealthcareParty, language: String, document: String, comment: String, transactionType: String)
}
