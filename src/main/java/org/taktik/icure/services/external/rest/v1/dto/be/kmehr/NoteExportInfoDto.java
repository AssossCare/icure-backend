package org.taktik.icure.services.external.rest.v1.dto.be.kmehr;

import org.taktik.icure.services.external.rest.v1.dto.HealthcarePartyDto;

import java.io.Serializable;
import java.util.List;

public class NoteExportInfoDto implements Serializable {
    List<String> secretForeignKeys;
    HealthcarePartyDto recipient;
    String comment;
    String type;

    public List<String> getSecretForeignKeys() {
        return secretForeignKeys;
    }

    public void setSecretForeignKeys(List<String> secretForeignKeys) {
        this.secretForeignKeys = secretForeignKeys;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public HealthcarePartyDto getRecipient() {
        return recipient;
    }

    public void setRecipient(HealthcarePartyDto recipient) {
        this.recipient = recipient;
    }

    public String getType() { return type; }

    public void setType(String type) { this.type = type; }
}
