package org.taktik.icure.entities.samv2.embed

import java.io.Serializable

class SupplyProblem(
        from: Long? = null,
        to: Long? = null,
        var reason: SamText? = null,
        var expectedEndOn: Long? = null,
        var impact: SamText? = null,
        var additionalInformation: SamText? = null
) : DataPeriod(from, to), Serializable, Comparable<SupplyProblem> {
    override fun compareTo(other: SupplyProblem): Int {
        return if (this == other) {
            0
        } else compareValuesBy(this, other, { it.from }, { it.reason }, { System.identityHashCode(it) }).also { if(it==0) throw IllegalStateException("Invalid compareTo implementation") }
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is SupplyProblem) return false
        if (!super.equals(other)) return false

        if (reason != other.reason) return false
        if (expectedEndOn != other.expectedEndOn) return false
        if (impact != other.impact) return false
        if (additionalInformation != other.additionalInformation) return false

        return true
    }

    override fun hashCode(): Int {
        var result = super.hashCode()
        result = 31 * result + (reason?.hashCode() ?: 0)
        result = 31 * result + (expectedEndOn?.hashCode() ?: 0)
        result = 31 * result + (impact?.hashCode() ?: 0)
        result = 31 * result + (additionalInformation?.hashCode() ?: 0)
        return result
    }
}
