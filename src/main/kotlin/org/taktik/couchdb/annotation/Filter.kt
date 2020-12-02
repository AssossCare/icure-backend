/*
 *  iCure Data Stack. Copyright (c) 2020  aduchate
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

package org.taktik.couchdb.annotation


/**
 * Annotation for defining filter functions embedded in repositories.
 * @author henrik lundgren
 */
@Target(AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS)
@Retention(AnnotationRetention.RUNTIME)
annotation class Filter(
        /**
         * The name of the filter
         * @return
         */
        val name: String,
        /**
         * Inline filter function.
         * @return
         */
        val function: String = "",
        /**
         * Filter functions are best stored in a separate files.
         *
         * By specifying the file parameter a function can be loaded from the classpath.
         * The path is relative to the class annotated by this annotation.
         *
         * If the file my_filter.json is in the same directory as the repository this
         * parameter should be set to "my_filter.js".
         *
         * @return
         */
        val file: String = "")
