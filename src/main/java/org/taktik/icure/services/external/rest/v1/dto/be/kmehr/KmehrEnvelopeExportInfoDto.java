package org.taktik.icure.services.external.rest.v1.dto.be.kmehr;

import org.taktik.icure.services.external.rest.v1.dto.HealthcarePartyDto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class KmehrEnvelopeExportInfoDto implements Serializable {
    List<String> secretForeignKeys;
    List<String> tags;
    List<String> contexts;
    private Boolean isPsy;
    private String documentId;
    private String transactionType;
    HealthcarePartyDto recipient;
    String note;

    public List<String> getSecretForeignKeys() {
        return secretForeignKeys;
    }

    public void setSecretForeignKeys(List<String> secretForeignKeys) {
        this.secretForeignKeys = secretForeignKeys;
    }

    public List<String> getTags() {
        if(tags != null)
            return tags;
        else
            return new ArrayList<String>();
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public List<String> getContexts() {
        if(contexts != null)
            return contexts;
        else
            return new ArrayList<String>();
    }

    public void setContexts(List<String> contexts) {
        this.contexts = contexts;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public HealthcarePartyDto getRecipient() {
        return recipient;
    }

    public void setRecipient(HealthcarePartyDto recipient) {
        this.recipient = recipient;
    }

    public Boolean getPsy() {
        return isPsy;
    }

    public void setPsy(Boolean psy) {
        isPsy = psy;
    }

    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String documentId) {
        this.documentId = documentId;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }
}
