var mydocs = 
[
    {
        "Elements": {
            "Title": "AbbreviationGroup",
            "Description": "A container for a list of abbreviations. Similar to KeywordGroup.A list of abbreviations can be divided into several sections by using the AbbreviationGroupSection element.",
            "Parents": [
                "ArticleHeader",
                "BodyFrontmatter",
                "BookBackmatterHeader",
                "BookFrontmatterHeader",
                "BookHeader",
                "BookSetHeader",
                "ChapterHeader",
                "PartHeader",
                "SeriesHeader",
                "SubPartHeader"
            ],
            "Children": [
                "AbbreviationGroupSection",
                "DefinitionList",
                "Heading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AbbreviationGroupSection",
            "Description": "A container for sections (sublists) within AbbreviationGroup. Only one level of sections is permitted, i.e., AbbreviationGroupSection is not allowed within another AbbreviationGroupSection.",
            "Parents": [
                "AbbreviationGroup"
            ],
            "Children": [
                "DefinitionList",
                "Heading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Abstract",
            "Description": "An abstract is a very condensed version of the content with which it is associated. It consists either of one paragraph of text or of a structured abstract, which is divided into several sections by using the AbstractSection element. If the abstract is not structured, AbstractSection may not be used.There may be more than one abstract where the same summary is presented in different languages, but one of them must be in the same language as the article to which it belongs. Some abstracts appear only onine, which is governed by the attribute OutputMedium.The standard heading of an abstract in English is \"Abstract,\" in German \"Zusammenfassung,\" in French \"Résumé,\" and in Spanish \"Resumen.\"",
            "Parents": [
                "ArticleHeader",
                "BookBackmatterHeader",
                "BookFrontmatterHeader",
                "BookHeader",
                "BookSetHeader",
                "ChapterHeader",
                "PartHeader",
                "SeriesHeader",
                "SubPartHeader"
            ],
            "Children": [
                "AbstractSection",
                "Figure",
                "Heading",
                "MediaObject",
                "Para",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AbstractAdditionalLanguage",
            "Description": "An instruction as to whether an additional abstract that is not in the language of the document is to be captured and rendered in the PDF versions of a publication.This instruction does not apply to whether such an abstract is included in the XML version of an object, which is routinely desired for all journal articles and book chapters. See the relevant instructions for journals and books.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AbstractGrant",
            "Description": "The terms or conditions under which a user is granted access to content, in this case to an abstract. This tag and its entry will be generated automatically at Springer.See ArticleGrants",
            "Parents": [
                "ArticleGrants",
                "ChapterGrants"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AbstractInDocumentLanguage",
            "Description": "This instruction does not apply to whether an abstract is included in the XML version of an object, which is routinely desired for all journal articles and book chapters. See the relevant instructions for journals and books.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AbstractSection",
            "Description": "This is a section inside an abstract and is used only in the context of structured abstracts. The content model is the same as for sections inside the body of an article, but within an AbstractSection no subsections are allowed.When structured abstracts are used, then all content should be within the abstract sections.",
            "Parents": [
                "Abstract"
            ],
            "Children": [
                "Figure",
                "Heading",
                "MediaObject",
                "Para",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Accepted",
            "Description": "Date when the article was accepted for publication.See ArticleHistory",
            "Parents": [
                "ArticleHistory",
                "ChapterHistory"
            ],
            "Children": [
                "Day",
                "Hour",
                "Minute",
                "Month",
                "Second",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Acknowledgments",
            "Description": "A container element for acknowledgments of financial support or other assistance in preparation of the publication. It may also contain miscellaneous information about the authors or the study.",
            "Parents": [
                "ArticleBackmatter",
                "ChapterBackmatter"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AdContactText",
            "Description": "Information from the publisher concerning the inclusion of advertising in a journal.See ImprintTexts",
            "Parents": [
                "ImprintTexts"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AdditionalColorName",
            "Description": "An element giving the name of an additional color, i.e., a color used for printing color inserts, color signatures, or spot colors.For color naming, see the description given for the element ColorSpecifications.See ColorSpecifications",
            "Parents": [
                "ColorSpecifications"
            ],
            "Children": [
                "AdditionalColorPage"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AdditionalColorPage",
            "Description": "An element giving the page on which an additional color is used.Since this element is referring to the logical page numbers in a PDF file only numeric values are allowed.See ColorSpecifications",
            "Parents": [
                "AdditionalColorName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AdditionalCover",
            "Description": "A container within File for references to the files delivered for AdditionalCoverFigure and the PrintPDF version of the additional cover.A container within File for references to the files delivered for the PrintPDF version of the additional cover.",
            "Parents": [
                "File"
            ],
            "Children": [
                "AdditionalCoverInfo",
                "BodyRef"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AdditionalCoverFirstPage",
            "Description": "The number designating the first page of an additional cover, i.e., the front side of the additional cover.See AdditionalCover",
            "Parents": [
                "AdditionalCoverInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AdditionalCoverInfo",
            "Description": "This is a container for the sequence and for the cover page numbers of the additional cover.In magazines, there could be an additional cover like a cover flap.The front and back of this additional cover can be in different files. Therefore we need a cover sequence number, while the cover page numbers are often the same.See AdditionalCover",
            "Parents": [
                "AdditionalCover",
                "DiscreteIssueObjectInfo"
            ],
            "Children": [
                "AdditionalCoverFirstPage",
                "AdditionalCoverLastPage",
                "AdditionalCoverSequenceNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AdditionalCoverLastPage",
            "Description": "The number designating the final page of an additional cover.See AdditionalCover",
            "Parents": [
                "AdditionalCoverInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AdditionalCoverSequenceNumber",
            "Description": "This number indicates the position of an additional cover within an issue.This is needed for magazines, where the additional covers could be split up in different files.See AdditionalCover",
            "Parents": [
                "AdditionalCoverInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Advertisement",
            "Description": "A container for referencing files delivered for advertisements in the context of an issue.",
            "Parents": [
                "File",
                "Issue",
                "IssueBackmatter",
                "IssueFrontmatter"
            ],
            "Children": [
                "AdvertisementInfo",
                "BodyRef"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AdvertisementFirstPage",
            "Description": "The first of one or more pages on which an advertisement is rendered.See Advertisement",
            "Parents": [
                "AdvertisementInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AdvertisementInfo",
            "Description": "AdvertisementInfo is a container element for the metadata for a specific advertisement file.See Advertisement",
            "Parents": [
                "Advertisement",
                "DiscreteBookObjectInfo",
                "DiscreteIssueObjectInfo"
            ],
            "Children": [
                "AdvertisementFirstPage",
                "AdvertisementLastPage",
                "AdvertisementSequenceNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AdvertisementLastPage",
            "Description": "The last of one or more pages on which an advertisement is rendered.See Advertisement",
            "Parents": [
                "AdvertisementInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AdvertisementSequenceNumber",
            "Description": "The sequential numbering of files for advertisements (in order of appearance in the issue) that are delivered separately. Advertisements that are part of the IssueFrontmatter or IssueBackmatter are not counted.See Advertisement",
            "Parents": [
                "AdvertisementInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Affiliation",
            "Description": "A container for the affiliation and/or address of an individual or a group.Usage:– The elements of the address, especially for the postcode and the country, should be given in the sequence of presentation customary for the country of the address. As a rule, this is the sequence shown on the manuscript.– Unless otherwise explicitly requested, do not distinguish between \"long\" and \"short\" addresses and affiliations. If both a short affiliation and a full postal address are listed on the manuscript, use the longer one or combine the two, whichever is more complete.– The entry for city and country should be in the primary language of the publication (journal or book), while the rest of the information may be in the language of the authors, the document (article or chapter), or of the publication (journal or book).– The names of countries should not be abbreviated. In general, use the rendition of the country shown on the manuscript. Exceptions are:  the United States and the United Kingdom, which should be shortened to USA and UK (without punctuation). Abbreviations of countries are not included in Postcode.– Author addresses are captured in AutorGroup (or EditorGroup); they should not be captured in Contact, where the elements City, Country, Postbox, Postcode, State, or Street are not used. (This does not apply to the address information outside of AuthorGroup and Editor group, such as for suppliers on a job sheet, which is maintained under Contact.)See AuthorGroup",
            "Parents": [
                "AuthorGroup",
                "CollaboratorGroup",
                "EditorGroup"
            ],
            "Children": [
                "OrgAddress",
                "OrgDivision",
                "OrgName",
                "URL"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AimsAndScope",
            "Description": "The publisher's text defining the aims and scopes of a journal as included in the A pages.See ImprintTexts",
            "Parents": [
                "ImprintTexts"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Amount",
            "Description": "The designation of a number, such as of a price in the context of price information, e.g., for a certain number of offprints.See OffprintOrder",
            "Parents": [
                "Price"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "APageFile",
            "Description": "An empty element within File to reference the file(s) delivered for front matter or back matter.See File",
            "Parents": [
                "File"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AplusplusRelatedObjectFile",
            "Description": "A container within File for references to related objects.This element is not supported.",
            "Parents": [
                "File"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AplusplusRootFile",
            "Description": "An empty element within File to reference the A++ file of the document.See File",
            "Parents": [
                "File"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Appendix",
            "Description": "The appendix is part of the back matter of a journal article or book component. It can contain material supplementary to a document, such as mathematical derivations, tables of data, or electronic supplementary material.Usage with electronic supplementary material (see also the documentation Creation of A++: Instructions for Springer's Joint Workflow, referenced below):As a container for the link to electronic supplementary material: ESM must be referenced in an appendix, regardless of whether it is referenced in the body or not. For this Appendix, the value of the attribute OutputMedium must be Online. If this Appendix is more than a container for the link to the  ESM, an alternative version of it for inclusion in the print publication should be prepared; this follows the \"online\" version and must have the attribute value \"Paper\".The elements MediaObject and Figure must be in a Para (see the examples of the three different usages below).Referencing a DataObject, VideoObject, or AudioObject: There must be Caption for the object, which should be immediately subordinate to ImageObject. This caption should contain a text caption if there is one and the size of the file; this later becomes the link. If the Para does not contain any text from the manuscript, please insert the following sentence: “Below is the link to the electronic supplementary material.“Including an ImageObject (low resolution): In this content model, the content of ESM is one or more graphics. This model is always to be used where there is only one version of any graphic, which is by default displayed in the HTML publication. The element Figure is always used. The optional caption should be in the element Caption immediately subordinate to Figure, not to ImageObject. Use CaptionNumber to identify the figure and caption where there are citations, for which the element InternalRef should be used.Both including a low resolution ImageObject and referencing a high-resolution version: This model is a combination of the two preceding ones.",
            "Parents": [
                "ArticleBackmatter",
                "BodyBackmatter",
                "ChapterBackmatter"
            ],
            "Children": [
                "Section1",
                "TocAppendix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Application",
            "Description": "Designates a type of supplier that is an automated service, for example the Springer DDS.",
            "Parents": [
                "Supplier"
            ],
            "Children": [
                "Deliverables",
                "Event",
                "FilesToApplication",
                "FilesToPublisher"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Archive",
            "Description": "An empty element within File to reference the zip file delivered for either manuscript files or TeX files.See FilesToSupplier",
            "Parents": [
                "File"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Article",
            "Description": "This is the top level element for a journal document that is not IssueFrontmatter, IssueBackmatter, or an Advertisement.The metadata for the article level is stored in the ArticleInfo element.The ArticleHeader includes content that appears in the header of an article in print.Body or BodyRef is the main content part of the article. Body contains XML-structured data of the body of the article, and the element BodyRef is used to reference the rendered PDF file.ArticleBackmatter contains information that appears at the end of an article.",
            "Parents": [
                "Issue",
                "JournalOnlineFirst"
            ],
            "Children": [
                "ArticleBackmatter",
                "ArticleHeader",
                "ArticleInfo",
                "Body",
                "BodyRef",
                "NoBody"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleBackmatter",
            "Description": "This is a container for all the components of an article that appear after the body.",
            "Parents": [
                "Article"
            ],
            "Children": [
                "Acknowledgments",
                "Appendix",
                "ArticleNote",
                "Bibliography",
                "Ethics",
                "Glossary"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleCategory",
            "Description": "The category of the article, usually printed with the article and displayed online. The article category is a journal-specific classification determined by the journal editor with the journal readers in mind. Entries are capitalized as in the example. See, in contrast, ArticleType.See ArticleInfo",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleCitationID",
            "Description": "An identifier to facilitate bibliographic citation of articles in continuous-publishing journals which do not include page numbers. Its use is only permitted in such journals. Articles in the journals themselves are given this identifier as part of ArticleInfo.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleClassification",
            "Description": "A container at the article level either for a group of values or for individual values that indicate a semantic relationship. See also ClassificationGroup.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": [
                "CharacteristicValue",
                "ClassificationGroup",
                "Fingerprint"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleCollection",
            "Description": "An article collection is a collection of articles, either within a journal or across journals, which share a common theme, e.g. \"Women in Chemistry\". An article can be associated with several collections. Synonyms are \"Topical Collection\" and \"Thematic Series\".",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": [
                "ArticleCollectionEditor",
                "ArticleCollectionTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleCollectionEditor",
            "Description": "The name(s) of the editor(s) of this article collection.See ArticleCollection",
            "Parents": [
                "ArticleCollection"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleCollectionTitle",
            "Description": "The title of this article collection.See ArticleCollection",
            "Parents": [
                "ArticleCollection"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleContext",
            "Description": "This element contains all the information that is required to locate an article in the hierarchy of journal, volume and issue. If only JournalID is present in ArticleContext, the article has not yet been assigned to an issue.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": [
                "IssueIDEnd",
                "IssueIDStart",
                "IssueTitle",
                "JournalID",
                "VolumeIDEnd",
                "VolumeIDStart"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleCopyright",
            "Description": "Contains the copyright information for an article.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": [
                "CopyrightComment",
                "CopyrightHolderName",
                "CopyrightYear",
                "License"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleDOI",
            "Description": "The complete DOI of an article. The prefix must be included.See ArticleInfo",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleEditorialResponsibility",
            "Description": "The name of the editor responsible for this article. In STM journals, the entry for this element is not rendered, the combination of name and additional text (creating \"Communicated by E.T. Spriolina.\") is entered under ArticleNote, which is used for rendering.In professional journals and magazines, the entry for this element is rendered as given without an ArticleNote.See ArticleInfo",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleExternalID",
            "Description": "This element holds the external ID of an article. For the time being this is only the ID from arXiv.org",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleFirstPage",
            "Description": "The page number of the first page of the article according to the display in the rendered PDF (regardless of whether the page number itself is rendered).In an OnlineFirst version, the first page is always considered to be \"1\".Content must always be present, and the entry for the last page must be higher than or equal to that for the first page.See ArticleInfo",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleFundingInformation",
            "Description": "This element contains information about the funding for an article. This information is used for FundRef.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": [
                "Fund"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleGrants",
            "Description": "A container element in which the overriding terms or conditions of access to an article are kept. The content will be generated by Springer's content management system.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": [
                "AbstractGrant",
                "BibliographyGrant",
                "BodyHTMLGrant",
                "BodyPDFGrant",
                "ESMGrant",
                "MetadataGrant"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleHeader",
            "Description": "This element contains all information that appears in the header section of an article.",
            "Parents": [
                "Article"
            ],
            "Children": [
                "AbbreviationGroup",
                "Abstract",
                "ArticleNote",
                "AuthorGroup",
                "KeywordGroup",
                "PageHeaders",
                "TocChapter"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleHistory",
            "Description": "A set of dates showing the stages of article preparation and publication. See the entries for Year, Month, and Day for further rules.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": [
                "Accepted",
                "OnlineDate",
                "Received",
                "RegistrationDate",
                "Revised"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleID",
            "Description": "ArticleID contains the unique manuscript number of the article. The manuscript number is the number assigned in the workflow systems and is also part of the DOI (e.g., in the DOI 10.1007//s00117-002-0843-x, the manuscript number is 0843 and the ArticleID is 843).The entry must be numerical without leading zeros.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleInfo",
            "Description": "ArticleInfo is a container element for all metadata related to an article.",
            "Parents": [
                "Article",
                "ArticleJobSheet",
                "DiscreteIssueObjectInfo"
            ],
            "Children": [
                "ArticleCategory",
                "ArticleCitationID",
                "ArticleClassification",
                "ArticleCollection",
                "ArticleContext",
                "ArticleCopyright",
                "ArticleDOI",
                "ArticleEditorialResponsibility",
                "ArticleExternalID",
                "ArticleFirstPage",
                "ArticleFundingInformation",
                "ArticleGrants",
                "ArticleHistory",
                "ArticleID",
                "ArticleLastPage",
                "ArticleRelatedObject",
                "ArticleSequenceNumber",
                "ArticleSubCategory",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleJobSheet",
            "Description": "A second level container element for a job sheet concerning an article. This entry on a job sheet may not be changed by suppliers.",
            "Parents": [
                "JobSheet"
            ],
            "Children": [
                "ArticleInfo",
                "AuthorGroup",
                "JournalInfo",
                "ProductionInfo",
                "PublisherInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleLastPage",
            "Description": "The page number of the last page of the article according to the display in the rendered PDF. In the OnlineFirst version of an article, page counting always with \"1\" and is not rendered.See ArticleFirstPage",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleNote",
            "Description": "A generic element for several kinds of notes or comments that appear in an article or chapter, usually as a footnote. The specific meaning or role of the note is given by the Type attribute, which must be indicated as appropriate (the Type value Misc may only be used where none of the other values is applicable).Usage in ArticleHeader in articles (see also the example below):- Multiple occurrences of ArticleNote should be captured in accordance with the sequence of presentation in a rendered article, namely, PresentedAt, PresentedBy, Dedication, CommunicatedBy, Misc, Corrigendum, and ESMHint. Also used in ArticleHeader is the Type Motto, instances of which are rendered according to a different rule.- For the standard text to be used with ESMHint, see the example.Usage in ArticleBackmatter in articles:- Misc is used to identify short commentaries that do not stem from the author of the article. Such commentaries are rendered at the very end of the article.- ProofNote is used to identify a note added in proof.- In ArticleBackmatter, the types PresentedAt, PresentedBy, Dedication, CommunicatedBy, Corrigendum, ESMHint, and Motto are not used. - ReferencedArticle is used mainly in professional journals for notes on other available versions such as \"Download this article\" or \"Read the eMagazine\"",
            "Parents": [
                "ArticleBackmatter",
                "ArticleHeader",
                "BodyFrontmatter",
                "BookBackmatterHeader",
                "BookFrontmatterHeader",
                "ChapterBackmatter",
                "ChapterHeader",
                "PartHeader",
                "SubPartHeader"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleRelatedObject",
            "Description": "A container for references to separate but strongly related objects when the initial publication is an article.For example, the related object cited in an erratum would be the original article which is to be corrected, and of a commentary it would be the original article referred to by a commentary. The related object of an article could be either an erratum or a commentary (with the types ErratumFrom or CommentaryFrom).This is a metadata entry irrelevant for rendering in PDF.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": [
                "RelatedObjectDOI",
                "RelatedObjectInfo",
                "RelatedObjectReference"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleSequenceNumber",
            "Description": "This number indicates the position of an article within an issue relative to the other articles.See ArticleInfo",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleSubCategory",
            "Description": "The subcategory of the article, usually printed with the article. It may only be used if ArticleCategory is also used. The article subcategory is a journal-specific classification determined by the journal editor with the journal readers in mind. Entries are capitalized as in the example. See, in contrast, ArticleType.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ArticleSubTitle",
            "Description": "The subtitle of the article. This element may only be used if Title is also used.There may be multiple ArticleSubTitle elements, each in a different language. For each language used there must also be a Title element.See ArticleHeader",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleSuperTitle",
            "Description": "For professional magazines, the ArticleSuperTitle can replace or supplement the subtitle as extra information for the title and appears above the article title.",
            "Parents": [
                "ArticleInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ArticleTitle",
            "Description": "The title of the article. There may be multiple ArticleTitle elements, each in a different language.Secondary language titles, i.e., those not of the article itself, are captured and rendered in the sequence English, German, French, and Spanish.",
            "Parents": [
                "ArticleInfo",
                "BibArticle",
                "RelatedObjectInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AudioObject",
            "Description": "AudioObject contains a reference to an audio file. This is useful in the context of electronic supplementary material (ESM).Usage (see also the example)1. Note that MediaObject, the parent of AudioObject, should be in a Para. Do not use InlineMediaObject.2. A Caption for the object must come immediately subordinate to AudioObject; it should contain a text caption if there is one and the size and type of the file. The caption later becomes the link.3. If the Para containing the MediaObject does not contain any text from the manuscript, please insert the following sentence: “Below is the link to the electronic supplementary material.”See Appendix",
            "Parents": [
                "InlineMediaObject",
                "MediaObject"
            ],
            "Children": [
                "Caption"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Author",
            "Description": "The Author element contains information about the author of the document in which it occurs.Each author can be connected with one or more affiliations (using one or more AffiliationID). These relations must be represented by the attribute AffiliationIDS.If an author has a corresponding or present address, the affiliations must be referenced both in the respective attribute CorrespondingAffiliationID or PresentAffiliationID and in AffiliationIDS.For journal content, there should be at least one corresponding author or institutional author, for whom there must be a Contact element. Please note the exceptions for various article types.See AuthorGroup",
            "Parents": [
                "AuthorGroup",
                "ProofRecipient",
                "TocAppendix",
                "TocChapter",
                "TocPart"
            ],
            "Children": [
                "AuthorName",
                "Biography",
                "Contact",
                "Figure",
                "OtherCredit",
                "Role"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AuthorGroup",
            "Description": "This is the container element for all information related to the authors. It contains the names and affiliations of all contributing authors.Authors are represented by a list of Author (or InstitutionalAuthor) elements. Affiliations are represented by a list of Affiliation elements. The connection between Author and Affiliation is represented by an ID/IDREF mechanism.More details can be found in the attribute descriptions for the Author element.",
            "Parents": [
                "ArticleHeader",
                "ArticleJobSheet",
                "BookAcknowledgments",
                "BookBackmatterHeader",
                "BookFrontmatterHeader",
                "BookHeader",
                "BookJobSheet",
                "BookNotes",
                "BookSetHeader",
                "ChapterHeader",
                "ChapterJobSheet",
                "DiscreteBookObjectInfo",
                "DiscreteIssueObjectInfo",
                "Foreword",
                "LocEntry",
                "PartHeader",
                "PartInfoGroup",
                "PartJobSheet",
                "Preface",
                "Section1",
                "Section2",
                "Section3",
                "SeriesHeader",
                "SubPartHeader",
                "SubSeriesHeader"
            ],
            "Children": [
                "Affiliation",
                "Author",
                "InstitutionalAuthor"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AuthorInformationStyle",
            "Description": "An instruction as to which author-related information is to be captured in discrete objects, e.g., in articles or chapters.See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "AuthorInstructions",
            "Description": "The publisher text instructing authors on manuscript preparation for a journal that is part of the A pages (IssueFrontmatter, IssueBackmatter).",
            "Parents": [
                "IssueBackmatter",
                "IssueFrontmatter"
            ],
            "Children": [
                "JournalInstructions",
                "TechnicalInstructions"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AuthorName",
            "Description": "This element contains all the components of an author's name and of the designations that often accompany it.Instructions:–\tUse multiple entries of GivenName for entering more than one given name or initial.–\tDo not use abbreviations (e.g., \"Wm.\") instead of initials (e.g., \"W.\").–\tThe elements Prefix, Degrees, and Role are not used in archive journals.Additional instructions for German-language medical magazines (FAZ):–\tA postal address is only given for the corresponding author.–\tThe elements Prefix and Degrees are used for the corresponding author only.–\tAll authors, including the corresponding author, should have an entry for affiliation that contains only OrgName, City, and Country; OrgDivision is optional. They should not have entries for Street, Postbox, Postcode, or State. (For the corresponding author there should thus be two types of entry for affiliation, a postal address and a brief affiliation.)See AuthorGroup",
            "Parents": [
                "Author"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "GivenName",
                "NativeName",
                "NoGivenName",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "AuthorQueryApplication",
            "Description": "A container element of information for/from stage 150 of the journal workflow",
            "Parents": [
                "Supplier"
            ],
            "Children": [
                "CopyrightTransfer",
                "Deliverables",
                "Event",
                "FilesToApplication",
                "FilesToPublisher"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BankAccountInformation",
            "Description": "A container element for information about an individual's bank account.",
            "Parents": [
                "RecipientInvoice"
            ],
            "Children": [
                "BankAccountNumber",
                "BankCode",
                "BankName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BankAccountNumber",
            "Description": "An element for an individual's bank account number.See BankAccountInformation",
            "Parents": [
                "BankAccountInformation"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BankCode",
            "Description": "An element for a bank's identification number.See BankAccountInformation",
            "Parents": [
                "BankAccountInformation"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BankName",
            "Description": "An element for a bank's name.See BankAccountInformation",
            "Parents": [
                "BankAccountInformation"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BibArticle",
            "Description": "This element is a container used for the structured elements of an article Citation within Bibliography. On usage, see Bibliography.See Bibliography",
            "Parents": [
                "Citation"
            ],
            "Children": [
                "ArticleTitle",
                "BibArticleDOI",
                "BibArticleNumber",
                "BibAuthorName",
                "BibComments",
                "Etal",
                "FirstPage",
                "InstitutionalAuthorName",
                "IssueID",
                "JournalTitle",
                "LastPage",
                "NoArticleTitle",
                "Occurrence",
                "VolumeID",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BibArticleDOI",
            "Description": "The DOI of an article listed in a bibliography.See BibArticle",
            "Parents": [
                "BibArticle"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BibArticleNumber",
            "Description": "A number to facilitate bibliographic citation of articles in journals which do not include page numbers (e.g., JHEP). Its use is only permitted in such journals. In reference lists where such journals are cited, it is used instead of FirstPage and LastPage.",
            "Parents": [
                "BibArticle"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BibAuthorName",
            "Description": "A container for the components of an author's name in a structured reference. The name model differs from the name model for authors of an article. On the elements to be included, see the style instructions for the respective publication type, e.g., in the Springer Style Manual.See BibArticle",
            "Parents": [
                "BibArticle",
                "BibBook",
                "BibChapter"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "Initials",
                "NoInitials",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BibBook",
            "Description": "The entry in BibBook is a structured reference of a book publication. For an edited volume or collection, use the editor model; for other publications, use the author model. .",
            "Parents": [
                "Citation"
            ],
            "Children": [
                "BibAuthorName",
                "BibBookDOI",
                "BibComments",
                "BibEditorName",
                "BibInstitutionalEditorName",
                "BookTitle",
                "ConfEventAbbreviation",
                "ConfEventDate",
                "ConfEventDateEnd",
                "ConfEventDateStart",
                "ConfEventLocation",
                "ConfEventName",
                "ConfEventURL",
                "ConfNumber",
                "ConfSeriesName",
                "EditionNumber",
                "Eds",
                "Etal",
                "FirstPage",
                "InstitutionalAuthorName",
                "ISBN",
                "LastPage",
                "NumberInSeries",
                "Occurrence",
                "PublisherLocation",
                "PublisherName",
                "SeriesTitle",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BibBookDOI",
            "Description": "The DOI of a book listed in a bibliography.See BibBook",
            "Parents": [
                "BibBook",
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BibChapter",
            "Description": "The entry in BibChapter is a structured reference of a book chapter.",
            "Parents": [
                "Citation"
            ],
            "Children": [
                "BibAuthorName",
                "BibBookDOI",
                "BibChapterDOI",
                "BibComments",
                "BibEditorName",
                "BibInstitutionalEditorName",
                "BookTitle",
                "ChapterTitle",
                "ConfEventAbbreviation",
                "ConfEventDate",
                "ConfEventDateEnd",
                "ConfEventDateStart",
                "ConfEventLocation",
                "ConfEventName",
                "ConfEventURL",
                "ConfNumber",
                "ConfSeriesName",
                "EditionNumber",
                "Eds",
                "Etal",
                "FirstPage",
                "InstitutionalAuthorName",
                "ISBN",
                "LastPage",
                "NoChapterTitle",
                "NumberInSeries",
                "Occurrence",
                "PublisherLocation",
                "PublisherName",
                "SeriesTitle",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BibChapterDOI",
            "Description": "The DOI of a chapter listed in a bibliography.See BibChapter",
            "Parents": [
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BibComments",
            "Description": "BibComments contains additional information from the author that is intended for publication. This is not intended to be a container for opinions or footnote-type information.",
            "Parents": [
                "BibArticle",
                "BibBook",
                "BibChapter",
                "BibIssue"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BibEditorName",
            "Description": "A container element for the name of an editor as part of a structured reference. On the elements to be included, see the style instructions for the respective publication type, e.g., in the style manual.",
            "Parents": [
                "BibBook",
                "BibChapter"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "Initials",
                "NoInitials",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BibInstitutionalEditorName",
            "Description": "The name of an institutional editor as part of a structured reference.",
            "Parents": [
                "BibBook",
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BibIssue",
            "Description": "The entry in BibIssue is a structured reference of an entire journal issue (e.g., a special issue or supplement).Usage:Information regarding the title of a special issue or the name of an issue editor should be put in the element BibComments.",
            "Parents": [
                "Citation"
            ],
            "Children": [
                "BibComments",
                "IssueID",
                "JournalTitle",
                "Month",
                "Occurrence",
                "VolumeID",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Bibliography",
            "Description": "The element Bibliography is a container for citations of publications. The citations are usually cited in the text of the document. The Bibliography can be divided into several divisions by using the BibSection element.Usage – General:– A Citation (i.e., an entry in Bibliography) must contain both structured and unstructured information wherever possible.Usage – BibUnstructured:– All entries in a reference list must be captured in a BibUnstructured version. Note that for such entries the elements ExternalRef and CitationNumber should also be used as appropriate.– The information captured in BibUnstructured should be styled as instructed. For the supported styles, see the Springer Style Manual.Usage – Structured:– Where possible, i.e., when a citation fits into one of the categories covered by the elements BibArticle, BibChapter, BibBook, or BibIssue, structure the information. – For some entries, a structured presentation is not possible. Case 1: The component parts are not in the DTD;  two examples of such content are patents and conference presentations that themselves were not made available in book form. Case 2: The entries for required elements are missing; examples of such content are VolumeID, PublisherName, and PublisherLocation.– The element Occurrence is only captured at Springer; it may not be data supplied to Springer.–\tDo not break up a complex family name that includes a particle within it (e.g., FJ Garcia de Abajo). The \"de\" in this case is part of the <FamilyName> \"Garcia de Abajo,\" not the content of  the element Particle.– Entries in the structured presentation should be the same as in the unstructured. This applies for example to the usage of the same capitalization, styling of numbers, and any \"internal\" punctuation that is part of the entry such as periods after initials if this is called for by the subject style of the journal (e.g., <Initials>E.L.</Initials>. Note, however, the following exceptions.– Do not insert commas in page numbers that contain four or more digits! They should appear as a string without a separator, e.g., a comma or a blank.– Do not include the “pp” that may precede page information in the element <FirstPage> (but do include any letters that are part of the page designations).– Do not include punctuation that is not an internal part of the entry itself; an example is the presentation of the year of publication, which might be presented in the style BibUnstructured version in parentheses but in the year element would be without parentheses (e.g., <Year>1963</Year>).– Do not include any letters attached to the year in order to distinguish multiple publications in one year.– Do not include words/letters in EditionNumber; the entry should only be a number.",
            "Parents": [
                "ArticleBackmatter",
                "BodyBackmatter",
                "ChapterBackmatter"
            ],
            "Children": [
                "BibSection",
                "Citation",
                "Heading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BibliographyGrant",
            "Description": "The terms or conditions under which a user is granted access to content, in this case to a Bibliography. This tag and its entry will be generated automatically at Springer.",
            "Parents": [
                "ArticleGrants",
                "ChapterGrants"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BibliographyStyle",
            "Description": "An instruction as to which style to follow when capturing bibliographic information in BibUnstructured and rendering references.See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BibSection",
            "Description": "A subsection within a bibliography is used for grouping Citations, such as for separate groups for references, suggested reading, and bibliography or for separate sections of an article or chapter.See Bibliography",
            "Parents": [
                "Bibliography"
            ],
            "Children": [
                "Citation",
                "Heading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BibUnstructured",
            "Description": "The entry in BibUnstructured is an unstructured version of a citation, i.e., one for which the individual components of a citation are not separately tagged. It can be used for rendering. See further details under Bibliography.See Bibliography",
            "Parents": [
                "Citation"
            ],
            "Children": [
                "Emphasis",
                "ExternalRef",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Binding",
            "Description": "A container element for information concerning the binding of a book.See CoverProductionInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": [
                "BookmarkRibbonColor"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Biography",
            "Description": "A short biographical note about an author or editor that is published together with an article.Usage– The name of the author or editor is captured as the heading of a FormalPara.– The biography itself is captured as the text of the Para that is part of FormalPara.– A photograph is captured as a Figure in the Para.– Either the text or the photograph may be absent, leaving either only the biography or a photograph.– When Biography is used within Loc, then AuthorName or EditorName within LocEntry will be rendered, and repeating the name inside the FormalPara heading would be redundant. Therefore Para should be used instead of FormalPara when Biography is used within Loc.",
            "Parents": [
                "Author",
                "Editor"
            ],
            "Children": [
                "FormalPara",
                "Para"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BlankPage",
            "Description": "A container within File for references to the files delivered for blank pages. Currently used at stage 700 of Springer's journal workflow.",
            "Parents": [
                "File"
            ],
            "Children": [
                "BlankPageInfo",
                "BodyRef"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BlankPageFirstPage",
            "Description": "The page number of the first blank page.See BlankPage",
            "Parents": [
                "BlankPageInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BlankPageInfo",
            "Description": "This is a container for the entries for the page numbers of blank pages.See BlankPage",
            "Parents": [
                "BlankPage",
                "DiscreteIssueObjectInfo"
            ],
            "Children": [
                "BlankPageFirstPage",
                "BlankPageLastPage"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BlankPageLastPage",
            "Description": "The page number of the final blank page.See BlankPage",
            "Parents": [
                "BlankPageInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BlockQuote",
            "Description": "Block quotations are those that are to be displayed by being set off from the main text.",
            "Parents": [
                "Para"
            ],
            "Children": [
                "Figure",
                "FormalPara",
                "Heading",
                "MediaObject",
                "Para",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Body",
            "Description": "The body of an article or chapter is located between the header and the back matter and contains the main contents of the article or chapter.The same content model is used in both journals and books.The body contains optional introductory text followed by sections. Sections are available at different levels, starting with Section1 and continuing up to Section7. The number of sections permitted depends on the publication type.",
            "Parents": [
                "Article",
                "BookAcknowledgments",
                "BookNotes",
                "Chapter",
                "Foreword",
                "Preface"
            ],
            "Children": [
                "Figure",
                "FormalPara",
                "MediaObject",
                "Para",
                "PDFExtract",
                "Section1",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BodyBackmatter",
            "Description": "This is a container for the structures that make up the body of the back matter of a book or of a part.See BookBackmatter",
            "Parents": [
                "BookBackmatter"
            ],
            "Children": [
                "Appendix",
                "Bibliography",
                "Colophon",
                "Glossary",
                "Index",
                "PDFExtract"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BodyFrontmatter",
            "Description": "This is a container for the structures that make up the body of the front matter of a book or of a part.See BookFrontmatter",
            "Parents": [
                "BookFrontmatter"
            ],
            "Children": [
                "AbbreviationGroup",
                "ArticleNote",
                "BookAcknowledgments",
                "BookNotes",
                "Dedication",
                "Foreword",
                "Frontispiece",
                "Loc",
                "Loh",
                "PDFExtract",
                "Preface",
                "Toc"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BodyHTMLGrant",
            "Description": "The terms or conditions under which a user is granted access to content, in this case to the full-text HTML version of an article. The value set for this element will be generated automatically.See ArticleGrants",
            "Parents": [
                "ArticleGrants",
                "ChapterGrants"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BodyMarkup",
            "Description": "This element indicates to the vendor which type of markup is to be provided for the body of the text.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BodyPDFGrant",
            "Description": "The terms or conditions under which a user is granted access to content, in this case to the full-text PDF version of an article or chapter. The value set for this element will be generated automatically.See ArticleGrants",
            "Parents": [
                "ArticleGrants",
                "ChapterGrants"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BodyRef",
            "Description": "A reference to the file containing an article, a chapter, or other content, such as for Cover.There should not be more than one PDF file referenced using one element BodyRef.When BodyRef is used directly under Article or Chapter, it references a file containing the entire rendered article or chapter. This is required, regardless of whether Body is included in XML or not. Previously, Body was supplied without BodyRef for journal articles processed in XML.See also the element NoBody, which should be used in an A++ file containing only metadata, i.e., without either a Body element or a reference to a PDF version of the publication.",
            "Parents": [
                "AdditionalCover",
                "Advertisement",
                "Article",
                "BlankPage",
                "Book",
                "BookBackmatter",
                "BookFrontmatter",
                "Chapter",
                "Cover",
                "Issue",
                "IssueBackmatter",
                "IssueFrontmatter",
                "Part"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Book",
            "Description": "The container element for a book.Until a book is completed, the chapters are held in the BookOnlineFirst context.",
            "Parents": [
                "Publisher",
                "Series",
                "SubSeries"
            ],
            "Children": [
                "BodyRef",
                "BookBackmatter",
                "BookFrontmatter",
                "BookHeader",
                "BookInfo",
                "BookOnlineFirst",
                "Chapter",
                "Cover",
                "NoBody",
                "Part"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookAcknowledgments",
            "Description": "Used for the acknowledgments section which may appear in the frontmatter of books after the preface.A single paragraph of acknowledgments should be included as the final paragraph of the Preface and not as a separate section.For more complex acknowledgments, BookAcknowledgments should be used.",
            "Parents": [
                "BodyFrontmatter"
            ],
            "Children": [
                "AcknowledgmentTitle",
                "AuthorGroup",
                "Body"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookBackmatter",
            "Description": "A container for the back matter of a book or of a part, i.e., all the material that occurs after the end of the last chapter of a book or a part, such as an appendix or a bibliography, regardless of whether this content is available in XML (as BodyBackmatter) or in a PDF file (via BodyRef).",
            "Parents": [
                "Book",
                "Part",
                "SubPart"
            ],
            "Children": [
                "BodyBackmatter",
                "BodyRef",
                "BookBackmatterHeader",
                "BookBackmatterInfo",
                "NoBody"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookBackmatterDOI",
            "Description": "Not yet supported.Used for the DOI of the book backmatter. The prefix must be included.",
            "Parents": [
                "BookBackmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookBackmatterFirstPage",
            "Description": "The page number of the first page of the book back matter in the rendered PDF.See BookBackmatter",
            "Parents": [
                "BookBackmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookBackmatterHeader",
            "Description": "A container for header elements in the book back matter. The elements is in this container are used infrequently.A possible use is to include an AuthorGroup for the persons who have prepared an appendix or glossary.",
            "Parents": [
                "BookBackmatter"
            ],
            "Children": [
                "AbbreviationGroup",
                "Abstract",
                "ArticleNote",
                "AuthorGroup",
                "KeywordGroup",
                "PageHeaders",
                "TocChapter"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookBackmatterInfo",
            "Description": "A container for page information about book back matter.See BookBackmatter",
            "Parents": [
                "BookBackmatter",
                "DiscreteBookObjectInfo"
            ],
            "Children": [
                "BookBackmatterDOI",
                "BookBackmatterFirstPage",
                "BookBackmatterLastPage"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookBackmatterLastPage",
            "Description": "The page number of the last page of the book back matter in the rendered PDF.See BookBackmatter",
            "Parents": [
                "BookBackmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookChapterCount",
            "Description": "The number of chapters in a book shown as a digit without leading zeros.Usage in eBook/POD deliveries:The full-service vendor should capture the number of Chapter elements in the book.",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookClassification",
            "Description": "A container at the book level either for a group of values or for individual values that indicate a semantic relationship.",
            "Parents": [
                "BookInfo"
            ],
            "Children": [
                "CharacteristicValue",
                "ClassificationGroup"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookComponents",
            "Description": "An element providing information about the nature and placement of any one insert.See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookContext",
            "Description": "This element contains all the information that is required to locate a book in the hierarchy of a book series, subseries, and/or book set. This information is used by the CMS to store an incoming book at the correct position.",
            "Parents": [
                "BookInfo"
            ],
            "Children": [
                "BookSetID",
                "BookSetTitle",
                "SeriesID",
                "SubSeriesID",
                "VolumePackageID"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookCopyright",
            "Description": "A container for the elements providing copyright information for a book.See CopyrightComment",
            "Parents": [
                "BookInfo"
            ],
            "Children": [
                "CopyrightComment",
                "CopyrightHolderName",
                "CopyrightStandardText",
                "CopyrightYear",
                "CopyrightYearFormerEditions",
                "License",
                "ProductLiability",
                "SpringerLocationsLine",
                "SpringerReferenceLine",
                "TrademarkQualifierText"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookCoverFigureText",
            "Description": "Text describing the cover figure for the book. For a brief text description of an image used on the cover. If separate figures on the front and back covers are referred to, each should be captured in its own paragraph.",
            "Parents": [
                "BookInfo"
            ],
            "Children": [
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookDOI",
            "Description": "DOI for a book publication. The prefix must be included.The content either stems from BFlow or is the same as the BookID (inserted at Springer).Usage in eBook/POD deliveries:The full-service vendor should capture this information from the printing order. It there is none, the processing instruction \"\" should be captured as a substitute for content.",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookEdition",
            "Description": "This element is used to designate the specific edition of a book as part of BookInfo.Usage in eBook/POD deliveries:This element should be captured as rendered in PDF.See BookInfo",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookElectronicISBN",
            "Description": "The ISBN of the electronic version of a book.Usage in eBook/POD deliveries:The full-service vendor should capture this information.See BookInfo",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookFeatureText",
            "Description": "Used for additional information on the title page such as \"With 36 Figures\" or \"With two chapters by...\". It may occur multiply to accommodate more than one such line.",
            "Parents": [
                "BookHeader"
            ],
            "Children": [
                "Emphasis",
                "InlineEquation",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookFrontmatter",
            "Description": "A container for the front matter of a book or of a part, i.e., all the material that occurs before the beginning of the first part or chapter (in a book or a part), such as a preface or foreword, regardless of whether this content is available in XML (as BodyFrontmatter) or in a PDF file (via BodyRef).",
            "Parents": [
                "Book",
                "Part",
                "SubPart"
            ],
            "Children": [
                "BodyFrontmatter",
                "BodyRef",
                "BookFrontmatterHeader",
                "BookFrontmatterInfo",
                "NoBody"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookFrontmatterDOI",
            "Description": "Not yet supported.Used for the DOI of the book frontmatter. The prefix must be included.",
            "Parents": [
                "BookFrontmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookFrontmatterFirstPage",
            "Description": "The page number of the first page of the book front matter in the rendered PDF.See BookFrontmatter",
            "Parents": [
                "BookFrontmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookFrontmatterHeader",
            "Description": "A container for header elements in and to the front matter of a book or of a part (not to a book itself). Such content is usually not present.All the elements permitted here, such as Abstract, KeywordGroup, AbbreviationGroup, and ArticleNote, would only be used if they applied to the BookFrontmatter alone; if such content appears in the BookFrontmatter but applies to the book (or a part) as a whole, the elements in BodyFrontmatter should be used.This element is currently not supported (neither for eBook/POD nor for BWF deliveries).",
            "Parents": [
                "BookFrontmatter"
            ],
            "Children": [
                "AbbreviationGroup",
                "Abstract",
                "ArticleNote",
                "AuthorGroup",
                "KeywordGroup",
                "PageHeaders",
                "TocChapter"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookFrontmatterInfo",
            "Description": "A container for page information about book front matter.See BookFrontmatter",
            "Parents": [
                "BookFrontmatter",
                "DiscreteBookObjectInfo"
            ],
            "Children": [
                "BookFrontmatterDOI",
                "BookFrontmatterFirstPage",
                "BookFrontmatterLastPage"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookFrontmatterLastPage",
            "Description": "The page number of the last page of the book front matter in the rendered PDF.See BookFrontmatter",
            "Parents": [
                "BookFrontmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookHeader",
            "Description": "A container for the components that belong to the header of a book. Some of this information may be relevant for the creation of a title or imprint page.Do not use AbbreviationGroup within BookHeader; use AbbreviationGroup within BodyFrontmatter if it is captured in XML.Usage for eBook/POD deliveries:In addition to the AuthorGroup and/or EditorGroup, capture the Abstract and KeywordGroup if content is present.",
            "Parents": [
                "Book"
            ],
            "Children": [
                "AbbreviationGroup",
                "Abstract",
                "AuthorGroup",
                "BookFeatureText",
                "CollaboratorGroup",
                "EditorGroup",
                "KeywordGroup",
                "LegalNotice"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookHistory",
            "Description": "A container for elements recording publication dates.See BookInfo",
            "Parents": [
                "BookInfo"
            ],
            "Children": [
                "OnlineDate",
                "PrintDate"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookID",
            "Description": "The identifier for a book.The entry currently to be made is the ISBN, namely the electronic ISBN for eBooks and the print ISBN for POD. (Previously, the 8-digit SPIN was used.)BookID must be numerical without leading zeros.For deliveries made according to the Content Delivery instructions, the content should continue to be the 8-digit SPIN.Usage in eBook/POD deliveries:The full-service vendor should capture the ISBN, using the electronic ISBN for eBook and the print ISBN for POD deliveries.See BookInfo",
            "Parents": [
                "BookInfo",
                "ChapterContext",
                "PartContext"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookInfo",
            "Description": "A container for book-related metadata.Usage for eBook/POD deliveries:Values for the attributes BookProductType and MediaType are inserted at Springer; they are not captured by the full-service vendor.The elements BookVolumeNumber and BookSequenceNumber are generated at Springer; they are not captured by the full-service vendor.In MRW deliveries, the value for MediaType must be set to \"eReferenceWork.\"",
            "Parents": [
                "Book",
                "BookJobSheet",
                "ChapterJobSheet",
                "PartJobSheet"
            ],
            "Children": [
                "BookChapterCount",
                "BookClassification",
                "BookContext",
                "BookCopyright",
                "BookCoverFigureText",
                "BookDOI",
                "BookEdition",
                "BookElectronicISBN",
                "BookHistory",
                "BookID",
                "BookMultiVolumeCount",
                "BookPrintISBN",
                "BookSequenceNumber",
                "BookSeriesCategory",
                "BookSeriesSubCategory",
                "BookstoreLocation",
                "BookSubjectGroup",
                "BookSubTitle",
                "BookTitle",
                "BookTitleID",
                "BookVolumeNumber",
                "CatalogingInformation",
                "ConferenceInfo",
                "EditionNumber",
                "PaperInfo",
                "SponsorNote"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookJobSheet",
            "Description": "A top level container element for job sheet elements. It is used during the compound stages of the book workflow.",
            "Parents": [
                "JobSheet"
            ],
            "Children": [
                "AuthorGroup",
                "BookInfo",
                "CollaboratorGroup",
                "EditorGroup",
                "ProductionInfo",
                "PublisherInfo",
                "SeriesHeader",
                "SeriesInfo",
                "SubSeriesInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookmarkRibbonColor",
            "Description": "The color ribbon to be used for a book mark.  On color naming, see the element ColorSpecifications.See Binding",
            "Parents": [
                "Binding"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookMultiVolumeCount",
            "Description": "The number of volumes to be created for one book (with one ISBN). An entry of \"0\" indicates that there is only one volume. Values of \"2\" or more indicate the number of volumes. A value of \"1\" is not permitted.See CompoundBookObjectInfo",
            "Parents": [
                "BookInfo",
                "CompoundBookObjectInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookMultiVolumeSplitAfterChapter",
            "Description": "The place at which to split a book into separate volumes.See CompoundBookObjectInfo",
            "Parents": [
                "CompoundBookObjectInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookNotes",
            "Description": "Used for information about the book. For instance, some volumes may contain information about the conference that was the source of the book. This may be several pages long.",
            "Parents": [
                "BodyFrontmatter"
            ],
            "Children": [
                "AuthorGroup",
                "Body",
                "BookNotesTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookNotesTitle",
            "Description": "The title contained in the element BookNotes",
            "Parents": [
                "BookNotes"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookOnlineFirst",
            "Description": "A wrapper for book chapters not yet assigned to a volume. This is possible for book series where individual chapters are published online before the final assignment of chapters to a book (volume).",
            "Parents": [
                "Book",
                "Series",
                "SubSeries"
            ],
            "Children": [
                "Chapter",
                "Part"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookPrintISBN",
            "Description": "The ISBN of the print version of a book.Usage in eBook/POD deliveries:The full-service vendor must capture this information.See BookInfo",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSequenceNumber",
            "Description": "The number indicating the virtual position of a book in a series, indicating the sequence even if there is no BookVolumeNumber.Usage in eBook/POD deliveries:The full-service vendor should not capture this information. It is inserted only at Springer.",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSeriesCategory",
            "Description": "Specifies the category of a book series. Used for series whose volumes fall thematically into groups (e.g., in Landolt-Börnstein).",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSeriesSubCategory",
            "Description": "Specifies the subcategory of a book series. Used for series whose volumes fall thematically into groups (as specified in BookSeriesCategory) and then further subgroups.See BookSeriesCategory",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSet",
            "Description": "This element is currently not supported.A book set is a collection of books identified as a book set in BFlow. It has its own ISBN and most other metadata.For a collection of books that does not have its own ISBN, see VolumePackage (one of the possible values for the attribute SeriesType in SeriesInfo).The element is a container for information about the set and for references to the books in the set.Usage for eBook/POD deliveries:Values for the BookSetInfo attributes BookProductType and MediaType are inserted at Springer; they are not captured by the full-service vendor.The elements BookSetVolumeNumber and BookSetSequenceNumber are generated at Springer; they are not captured by the full-service vendor.In MRW deliveries, the value for MediaType must be set to \"eReferenceWork.\"",
            "Parents": [
                "Publisher",
                "Series",
                "SubSeries"
            ],
            "Children": [
                "BookSetHeader",
                "BookSetInfo",
                "BookSetRelatedObject",
                "Cover"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookSetBookCount",
            "Description": "The number of books in a book set, shown as a digit without leading zeros.\nSee BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSetCopyright",
            "Description": "Copyright information for a book set.See BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": [
                "CopyrightHolderName",
                "CopyrightYear"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookSetDOI",
            "Description": "DOI for a book set. The prefix must be included.See BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSetEdition",
            "Description": "This element is used to designate the specific edition of a book set as part of BookSetInfo.Usage in eBook/POD deliveries:This element is not captured if the edition number is \"1.\" Otherwise, it should be captured as rendered in PDF.See BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSetElectronicISBN",
            "Description": "The ISBN of the electronic version of a book set.See BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSetHeader",
            "Description": "This element is currently not supported.A container for the components that belong to the header of a book set.Do not use AbbreviationGroup within BookHeader; use AbbreviationGroup within BodyFrontmatter if it is captured in XML.Usage for eBook/POD deliveries:In addition to the AuthorGroup and/or EditorGroup, capture the Abstract and KeywordGroup if content is present.",
            "Parents": [
                "BookSet"
            ],
            "Children": [
                "AbbreviationGroup",
                "Abstract",
                "AuthorGroup",
                "EditorGroup",
                "KeywordGroup",
                "LegalNotice"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookSetHistory",
            "Description": "A container for elements recording publication dates.",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": [
                "OnlineDate",
                "PrintDate"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookSetID",
            "Description": "The identifier for a book set.The entry currently to be made is the ISBN, namely the electronic ISBN for eBooks and the print ISBN for POD.See BookSet",
            "Parents": [
                "BookContext",
                "BookSetInfo",
                "ChapterContext",
                "PartContext"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSetInfo",
            "Description": "A container for book set-related metadataSee BookSet",
            "Parents": [
                "BookSet"
            ],
            "Children": [
                "BookSetBookCount",
                "BookSetCopyright",
                "BookSetDOI",
                "BookSetEdition",
                "BookSetElectronicISBN",
                "BookSetHistory",
                "BookSetID",
                "BookSetPrintISBN",
                "BookSetSequenceNumber",
                "BookSetSubjectGroup",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSetTitleID",
                "BookSetVolumeNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookSetPrintISBN",
            "Description": "The ISBN of the print version of a book.See BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSetRelatedObject",
            "Description": "A container for specifying related objects for a book set, i.e., the individual books that make up the set. All the published books for one output medium should be referenced.See BookSet",
            "Parents": [
                "BookSet"
            ],
            "Children": [
                "RelatedObjectDOI"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookSetSequenceNumber",
            "Description": "The number indicating the virtual position of a book set in a series, indicating the sequence even if there is no BookSetVolumeNumber.For Springer titles, this information is inserted only at Springer.See BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSetSubjectGroup",
            "Description": "The container element for the disciplines that form the primary and secondary target groups of a book set.For Springer titles, this information is inserted only at Springer.See BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": [
                "BookSubject"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookSetSubTitle",
            "Description": "The subtitle of a book set.See BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookSetTitle",
            "Description": "The title of a book set.See BookSet",
            "Parents": [
                "BookContext",
                "BookSetInfo",
                "ChapterContext",
                "PartContext"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookSetTitleID",
            "Description": "The ID of a book, not of a specific edition, printing, output medium, or language version. The entry is a string of digits that originates in BFlow (the Springer book database). The content should retain the same BookTitleID even if the title of the book is changed.See BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSetVolumeNumber",
            "Description": "The volume number of a book set in a book series.For Springer titles, this information is inserted only at Springer.See BookSet",
            "Parents": [
                "BookSetInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookstoreLocation",
            "Description": "The Bookstore Location is automatically created in BFlow, based on the element BookSubject with attribute Type=\"Secondary\" and attribute Priority=\"1\". If necessary it can be changed in BFlow manually. From BFlow it is exported to the BWF at the initial book creation and when it's changed manually. From there it is placed in the JobSheets and the Fulltext XML.The Bookstore Location is included on the back cover of the book. Librarians and booksellers use the Bookstore Location to decide where to shelve a book. For example, a book with a Bookstore Location of Mathematics would be shelved with the Mathematics titles.",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSubject",
            "Description": "The disciplines that are the subject areas of a book (not the book's topic). They should include the primary subject and may include secondary subjects.Usage in eBook/POD deliveries:The full-service vendor should not capture this information. It is inserted only at Springer.See BookSubjectGroup",
            "Parents": [
                "BookSetSubjectGroup",
                "BookSubjectGroup"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookSubjectGroup",
            "Description": "The container element for the disciplines that form the primary and secondary target groups of a book.Usage in BWF:The vendor should capture this information (copy from Jobsheet)Usage in eBook/POD deliveries:The full-service vendor should not capture this information. It is inserted only at Springer.",
            "Parents": [
                "BookInfo"
            ],
            "Children": [
                "BookSubject",
                "SubjectCollection"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookSubTitle",
            "Description": "The subtitle of a book.See BookInfo",
            "Parents": [
                "BookInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookTitle",
            "Description": "The title of a book.See BookInfo",
            "Parents": [
                "BibBook",
                "BibChapter",
                "BookInfo",
                "ChapterContext",
                "PartContext"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "BookTitleID",
            "Description": "The ID of a book, not of a specific edition, printing, output medium, or language version. The entry is a string of digits that originates in BFlow (the Springer book database). The content should retain the same BookTitleID even if the title of the book is changed.Usage in eBook/POD deliveries:The full-service vendor should capture this entry from the printing order.",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "BookVolumeNumber",
            "Description": "The volume number of a book in a book series.For Springer titles, this information is inserted only at Springer.",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Caption",
            "Description": "A Caption is a container for the elements containing the parts of a description introducing or describing an object such as a Figure, Scheme, Structure, Table, or MediaObject.The number of the caption must be tagged as CaptionNumber and must include the appropriate numbering prefix such as \"Fig.\". \"Table\", or \"Scheme\". No additional text is generated in the rendering process.A caption may be available in multiple languages, for each of which the Caption element is repeated.The element Figure may also include multiple Caption elements with the same language if the image file referred to contains several separately numbered images. See the second example.See Figure",
            "Parents": [
                "AudioObject",
                "DataObject",
                "Figure",
                "ImageObject",
                "MediaObject",
                "OpeningFigure",
                "Table",
                "VideoObject"
            ],
            "Children": [
                "CaptionContent",
                "CaptionNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CaptionAdditionalLanguage",
            "Description": "An instruction as to whether a figure caption that is not in the language of the manuscript is to be captured and rendered. If no additional captions are to be captured or rendered, the element itself is not included.See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CaptionContent",
            "Description": "This element contains the text of a caption proper.See Caption",
            "Parents": [
                "Caption"
            ],
            "Children": [
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CaptionNumber",
            "Description": "This element contains a prefix indicating the type of object (e.g., a figure, table, scheme, structure, or media object) and its number as they are rendered. No text is generated during the rendering process.See Caption",
            "Parents": [
                "Caption"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CatalogingInformation",
            "Description": "To capture the information on the copyright page regarding the cataloging entry supplied by a national library, e.g., \"Library of  Congress Control Number 2009xxxx.",
            "Parents": [
                "BookInfo"
            ],
            "Children": [
                "Emphasis",
                "InlineEquation",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Chapter",
            "Description": "A container for the chapter of a book.",
            "Parents": [
                "Book",
                "BookOnlineFirst",
                "Part",
                "SubPart"
            ],
            "Children": [
                "Body",
                "BodyRef",
                "ChapterBackmatter",
                "ChapterHeader",
                "ChapterInfo",
                "NoBody"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterBackmatter",
            "Description": "A container for the back matter within a chapter, i.e., for chapter content that appears after the main body of the text (e.g., a list of references).",
            "Parents": [
                "Chapter"
            ],
            "Children": [
                "Acknowledgments",
                "Appendix",
                "ArticleNote",
                "Bibliography",
                "Ethics",
                "Glossary",
                "Index"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterCategory",
            "Description": "The category that a chapter is assigned to and that is usually printed with the chapter. The chapter category is a book- or series-specific classification determined by the editor with the readers in mind. Entries are capitalized as in the example.",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ChapterClassification",
            "Description": "A container at the chapter level either for a group of values or for individual values that indicate a semantic relationship.",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": [
                "CharacteristicValue",
                "ClassificationGroup",
                "Fingerprint"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterContext",
            "Description": "This element contains all the information that is required to locate an chapter in the hierarchy of a book series, book, and part. This information is used by the CMS to store an incoming chapter at the correct position.",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": [
                "BookID",
                "BookSetID",
                "BookSetTitle",
                "BookTitle",
                "PartID",
                "SeriesID",
                "SubPartID",
                "SubSeriesID",
                "VolumePackageID"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterCopyright",
            "Description": "Copyright information for a chapter.",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": [
                "CopyrightComment",
                "CopyrightHolderName",
                "CopyrightYear",
                "License"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterDOI",
            "Description": "The DOI for a book chapter (including the prefix).The syntax currently used includes the ISBN and a chapter number.For Springer titles, this information is inserted only at Springer.See ChapterInfo",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ChapterFirstPage",
            "Description": "The page number of the first page of the chapter in the rendered PDF.Content is required if Chapter is not in an OnlineFirst environment, and the entry for the last page must be higher than or equal to that for the first page.See ChapterInfo",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ChapterGrants",
            "Description": "A container element in which the overriding terms or conditions of access to a chapter are kept. The content will be generated by Springer's content management system.",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": [
                "AbstractGrant",
                "BibliographyGrant",
                "BodyHTMLGrant",
                "BodyPDFGrant",
                "ESMGrant",
                "MetadataGrant"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterHeader",
            "Description": "A container for all the structures that belong to the header of a chapter.Usage in eBook/POD deliveries:The full-service vendor should capture the AuthorGroup and any Abstract, KeywordGroup, and ArticleNote that may be present.",
            "Parents": [
                "Chapter"
            ],
            "Children": [
                "AbbreviationGroup",
                "Abstract",
                "ArticleNote",
                "AuthorGroup",
                "CollaboratorGroup",
                "KeywordGroup",
                "PageHeaders",
                "TocChapter"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterHistory",
            "Description": "A container for the set of dates showing the stages of chapter preparation and publication.  See the entries for Year, Month, and Day for further rules.Usage in eBook/POD deliveries:The full-service vendor should capture this information if it is present.See ChapterInfo",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": [
                "Accepted",
                "ChapterVersionInfo",
                "OnlineDate",
                "Received",
                "RegistrationDate",
                "Revised"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterID",
            "Description": "ChapterID is one the chapter identifiers. The entry should be a simple digit that is unique within the book, starting with \"1\" for each book.ChapterID is never rendered.See ChapterInfo",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ChapterInfo",
            "Description": "A container for the  metadata associated with a chapter.Chapter numbers and IDs:– ChapterNumber is the entry to use if the chapter number is to rendered. Otherwise, it is not used.– ChapterID repeats the ChapterDOI if there is one; otherwise the entry should be identical to ChapterNumber. If neither is available, then enter the value for ChapterSequenceNumber.– Chapter ID should be Chap[n]. This entry is purely an identifier. Currently the numeric value represents the sequence in which the chapters are processed.",
            "Parents": [
                "Chapter",
                "ChapterJobSheet",
                "DiscreteBookObjectInfo"
            ],
            "Children": [
                "ChapterCategory",
                "ChapterClassification",
                "ChapterContext",
                "ChapterCopyright",
                "ChapterDOI",
                "ChapterFirstPage",
                "ChapterGrants",
                "ChapterHistory",
                "ChapterID",
                "ChapterLastPage",
                "ChapterNumber",
                "ChapterRelatedObject",
                "ChapterSequenceNumber",
                "ChapterSubCategory",
                "ChapterSubTitle",
                "ChapterTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterJobSheet",
            "Description": "A second level container element on a job sheet concerning a chapter. This entry on a job sheet may not be changed by suppliers.",
            "Parents": [
                "JobSheet"
            ],
            "Children": [
                "AuthorGroup",
                "BookInfo",
                "ChapterInfo",
                "CollaboratorGroup",
                "EditorGroup",
                "ProductionInfo",
                "PublisherInfo",
                "SeriesInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterLastPage",
            "Description": "The page number of the last page of a chapter in the rendered PDF.Content is required if Chapter is not in an OnlineFirst environment, and the entry for the last page must be higher than or equal to that for the first page.See ChapterInfo",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ChapterNumber",
            "Description": "This is the number that will be rendered with the chapter title in the publication. This element should only be used if the number is to be rendered; it should not be used if NumberingStyle is set to Unnumbered or ContentOnly. See ChapterInfo for further details.Only the chapter number (as a rule, a digit), not additional words, should be captured.\n\t\t\tThe number here is rendered in the layout before the chapter title if the attribute NumberingStyle in the element BookInfo or ChapterInfo is set to ChapterOnly, ChapterContent, or ChapterContentSeparately.\n                        \n\t\t\t\n\t\tIn some\nrendered versions, the number may be preceded by, for example, the word \"Chapter\".\nThis is, for instance, the case in English-language publications in the standard T1 layout or when otherwise\ninstructed.See ChapterInfo",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ChapterRelatedObject",
            "Description": "A container for specifying related objects such as an erratum or a commentary when the initial publication is a chapter.",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": [
                "RelatedObjectDOI"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterSequenceNumber",
            "Description": "This number (a digit) represents the position of a chapter within a book (not within an individual part), starting with \"1\" for the first chapter in a book. This information is never rendered.See ChapterInfo",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ChapterSubCategory",
            "Description": "The subcategory that a chapter is assigned to and that is usually printed with the chapter. The chapter subcategory is a book- or series-specific classification determined by the editor with the readers in mind. Entries are capitalized as in the example.This element is only to be used if ChapterCategory is also used.See ChapterCategory",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ChapterSubTitle",
            "Description": "The subtitle of a chapter.The languages that occur in multiple uses of ChapterSubTitle must also occur in ChapterTitle. One of them must be the primary language of the chapter.See ChapterInfo",
            "Parents": [
                "ChapterInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterTitle",
            "Description": "The title of a chapter.",
            "Parents": [
                "BibChapter",
                "ChapterInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChapterVersionInfo",
            "Description": "The SpringerReference platform hosts chapters that are repeatedly updated. Each update results in a new chapter version. The element ChapterVersionInfo identifies such chapters and holds the appropriate information.",
            "Parents": [
                "ChapterHistory"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CharacteristicValue",
            "Description": "This element designates semantically important information. It can be used to link different sources of content that handle related information.The semantically important information is the PCDATA entry, which must be plain text entries in English (except for the values PACS, MSC, JEL, and CASRegistryNumber, where the entry is taken from that classification). Do not capture multiple entries within one use of CharacteristicValue.Just as important as the entry is the value of the attribute Characteristic, which indicates the quality/type of the information.",
            "Parents": [
                "ArticleClassification",
                "BookClassification",
                "ChapterClassification",
                "ClassificationGroup",
                "SectionClassification"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ChinaNumber",
            "Description": "A digital journal ID from China.",
            "Parents": [
                "EditorialTexts"
            ],
            "Children": [
                "Emphasis",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Citation",
            "Description": "A Citation is a publication listed in a bibliography (list of references). It contains information sufficient for a reader to locate the cited publication, possibly using a link.This information must be supplied in the unstructured form as it is to be rendered and, if possible, in the structured form. See Bibliography.See Bibliography",
            "Parents": [
                "Bibliography",
                "BibSection"
            ],
            "Children": [
                "BibArticle",
                "BibBook",
                "BibChapter",
                "BibIssue",
                "BibUnstructured",
                "CitationNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CitationNumber",
            "Description": "This element contains the number of the citation that is rendered in the bibliography when the citations references in the text are numbered. No additional text will be generated in the rendering process.See Bibliography",
            "Parents": [
                "Citation"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CitationRef",
            "Description": "A reference to a citation element in the bibliography. The citation is reference by the CitationID attribute using the ID/IDREF mechanism.",
            "Parents": [
                "Heading",
                "Para",
                "SimplePara",
                "SubHeading"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CitationStyle",
            "Description": "Instruction as to which style to follow for the text citation of bibliographic references.See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "City",
            "Description": "The name of a city as part of an address.The entry should, as a rule, be in the primary language of the publication.See OrgAddress",
            "Parents": [
                "ConfEventLocation",
                "Contact",
                "DispatcherAddress",
                "OffprintAddress",
                "OrgAddress",
                "RecipientAddress"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ClassificationGroup",
            "Description": "A container for groups of values indicating related items of information. The container must be used if and only if:- There is more than one type of value for the attribute Characteristic of the element CharacteristicValue.- The values selected for that attribute build a semantic unit. On the sensible combination of values, see CharacteristicValue.- One of the values selected for that attribute occurs only once in this combination (making the combination unique).See CharacteristicValue",
            "Parents": [
                "ArticleClassification",
                "BookClassification",
                "ChapterClassification",
                "SectionClassification"
            ],
            "Children": [
                "CharacteristicValue"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ClassificationStyle",
            "Description": "An instruction as to whether the code designating a topic within a subject classification scheme is to be captured and rendered. To be precise, this element defines the conditions under which such code is to be captured. For more information on classification schemes, see the Springer Style Manual.See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Collaborator",
            "Description": "The Collaborator element contains information about the collaborator of the document in which it occurs.Collaborators fulfil different bibliographically relevant roles in books which go beyond author or book editor.  The role of each collaborator is given in the attribute Type. Each collaborator can be connected with one or more affiliations (using one or more AffiliationID). These relations must be represented by the attribute AffiliationIDS.If a collaborator has a corresponding or present address, the affiliations must be referenced both in the respective attribute CorrespondingAffiliationID or PresentAffiliationID and in AffiliationIDS.See CollaboratorGroup",
            "Parents": [
                "CollaboratorGroup"
            ],
            "Children": [
                "CollaboratorName",
                "Contact",
                "Role"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CollaboratorGroup",
            "Description": "This is the container element for all information related to collaborators. It contains the names and affiliations of all collaborators.Collaborators fulfil different bibliographically relevant roles in books which go beyond author or book editor. Collaborators are represented by a list of Collaborator (or InstitutionalCollaborator) elements. Affiliations are represented by a list of Affiliation elements. The connection between Collaborator and Affiliation is represented by an ID/IDREF mechanism.More details can be found in the attribute descriptions for the Collaborator element.",
            "Parents": [
                "BookHeader",
                "BookJobSheet",
                "ChapterHeader",
                "ChapterJobSheet",
                "PartHeader",
                "SeriesHeader",
                "SubPartHeader",
                "SubSeriesHeader"
            ],
            "Children": [
                "Affiliation",
                "Collaborator",
                "InstitutionalCollaborator"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CollaboratorName",
            "Description": "The container for the structured name of a collaborator. The content model is the same as that for AuthorName.",
            "Parents": [
                "Collaborator"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "GivenName",
                "NativeName",
                "NoGivenName",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Colophon",
            "Description": "A colophon, if present, almost always occurs at the very end of a book. It contains factual information about the book, especially about its production, and includes details about typographic style, the fonts used, the paper used, and perhaps the binding method of the book.",
            "Parents": [
                "BodyBackmatter"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ColorImagesInPrint",
            "Description": "The element is used to transfer information to the FSV as to which images are to be rendered in color in the print version of a book.See DiscreteObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo",
                "DiscreteObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ColorImagesOnPage",
            "Description": "Designation of a page that contains color in the print version. Only one page may be entered per element.Since this element is referring to the logical page numbers in a PDF file only numeric values are allowed.See DiscreteObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo",
                "DiscreteObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ColorSpecifications",
            "Description": "A container element for instructions on the use of color for the text/layout and printing.The naming scheme to be used for colors for this and other elements is: (a) use the words \"cyan,\" \"magenta,\" \"yellow,\" and/or \"black\" where appropriate, and (2) use the Pantone or HKS designations for any other colors.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": [
                "AdditionalColorName",
                "LayoutColorName",
                "PrintingColorName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "colspec",
            "Description": "The attributes of this empty element specify the characteristics describing how entries in a column of a table are organized and presented.Each colspec refers to a single column. Columns are numbered sequentially from left to right in the table. Both the colnum and colname attributes should be used (see below).For guidelines on best practice for marking up tables, see the additional documentation on editing and tagging tables for Springer publications (referenced below).See Table",
            "Parents": [
                "tgroup"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CompanyName",
            "Description": "The name of a supplier as inserted on the job sheet at Springer.",
            "Parents": [
                "ExternalPublisher",
                "FullServiceVendor",
                "Printer"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CompoundBookObjectInfo",
            "Description": "A container element for information about a compound book object. It relates an object via the ID to its ISBN, EAN and to information about multivolume books.",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": [
                "BookMultiVolumeCount",
                "BookMultiVolumeSplitAfterChapter",
                "EAN",
                "ISBN",
                "PurchaseOrderNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CompoundIssueObjectInfo",
            "Description": "A container element for information about a compound journal object (issue). Its attributes provide an ID that is used to identify the corresponding print PDF file of an issue (at <File> and information about the number of pages in the issue.",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": [
                "PurchaseOrderNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CompoundObjectFirstPage",
            "Description": "The page number of the first page of a compound object, i.e., the first page that does not belong for example to the issue front matter, which is numbered separately.The first page of a compound object is always an odd number.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CompoundObjectLastPage",
            "Description": "The page number of the last page of a compound object, i.e., the last page that does not belong for example to the issue back matter, which is numbered separately.The last page of a compound object is always an even number.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CompoundObjectNumberOfAPages",
            "Description": "The number of pages in the issue front matter and issue back matter. This does not include the front and back covers.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CompoundObjectNumberOfArabicPages",
            "Description": "The number of Arabic-numbered pages in a book. This does not include any pages either before the first Arabic-numbered page (e.g., endsheets or front matter) or any blank pages after the last printed Arabic-numbered page.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CompoundObjectNumberOfColorPages",
            "Description": "The number of color pages in a book or volume.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CompoundObjectNumberOfImages",
            "Description": "A digit giving the number of images in a book, listed according  to image type.Currently not supported in the book workflow.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CompoundObjectNumberOfRomanPages",
            "Description": "The number of Roman-numbered pages in a book, i.e., the number of pages in a book's front matter. This does not include any blank pages between the last printed Roman-numbered page and the first Arabic-numbered page. The value to be captured for this element is an Arabic number.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CompoundObjectProductionHistory",
            "Description": "A container element for information regarding the production history. Currently this contains the date a compound object is delivered to the printer.",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": [
                "ScheduledToPrintDate",
                "SentToPrintDate"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CompoundObjectTechnicalInfo",
            "Description": "A container element for information about compound objects.",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": [
                "ColorImagesInPrint",
                "ColorImagesOnPage",
                "CompoundObjectFirstPage",
                "CompoundObjectLastPage",
                "CompoundObjectNumberOfAPages",
                "CompoundObjectNumberOfArabicPages",
                "CompoundObjectNumberOfColorPages",
                "CompoundObjectNumberOfImages",
                "CompoundObjectNumberOfRomanPages",
                "CompoundObjectProductionHistory",
                "CompoundObjectTotalNumberOfPages",
                "CopyEditing",
                "FormatTrimSize",
                "ManufacturingProfile",
                "ManuscriptNumberOfPages",
                "NumberOfVolumes",
                "PODInformation",
                "PrintQuality",
                "PrintRun",
                "ProductionClassification",
                "ProductionEvent",
                "ReprintNumber",
                "Shares",
                "SplittingNumberOfAPageObjects",
                "SplittingNumberOfChapters",
                "SplittingNumberOfParts",
                "Typesetting"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CompoundObjectTotalNumberOfPages",
            "Description": "The total number of pages in a compound object. Since this element is referring to the logical page numbers in a PDF file.This element is repeatable to permit the total number of pages to be given separately for each volume of a multi-volume work.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ConferenceInfo",
            "Description": "A container element for information about conference-related supplements.ConferenceInfo is used for supplements that are related to a conference and contains information like conference name, abbreviation, date, location and URL.See SupplementInfo",
            "Parents": [
                "BookInfo",
                "SupplementInfo"
            ],
            "Children": [
                "ConfEventAbbreviation",
                "ConfEventDate",
                "ConfEventDateEnd",
                "ConfEventDateStart",
                "ConfEventID",
                "ConfEventLocation",
                "ConfEventName",
                "ConfEventURL",
                "ConfNumber",
                "ConfSeriesID",
                "ConfSeriesName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ConfEventAbbreviation",
            "Description": "This element contains the abbreviation of the name of the conference and is used as part of the information about conference-related supplements.See SupplementInfo",
            "Parents": [
                "BibBook",
                "BibChapter",
                "ConferenceInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ConfEventDate",
            "Description": "This element contains the date when the conference was held. It is used as part of a structured Citation and as part of the information about conference-related supplements.",
            "Parents": [
                "BibBook",
                "BibChapter",
                "ConferenceInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ConfEventDateEnd",
            "Description": "This element contains the date when the conference ends, if the conference lasts more than onde day. It is used as part of the information about conference-related supplements.",
            "Parents": [
                "BibBook",
                "BibChapter",
                "ConferenceInfo"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ConfEventDateStart",
            "Description": "This element contains the date when the conference starts, if the conference lasts more than onde day. It is used as part of the information about conference-related supplements.",
            "Parents": [
                "BibBook",
                "BibChapter",
                "ConferenceInfo"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ConfEventID",
            "Description": "This element contains the unique ID of the conference and is used for grouping all papers from the same conference.ConfEventID should be assigned so that the following rules are observed:1. The ID is unique, e.g., there is no other conferences using the same ID2. The ID is created by concatenating ConfSeriesID@Type=\"Springer\" and ConfEventDateStart/Year",
            "Parents": [
                "ConferenceInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ConfEventLocation",
            "Description": "This element contains the information about the location of a conference. It is used as part of a structured Citation and as part of the information about conference-related supplements. Use the name of the city only.",
            "Parents": [
                "BibBook",
                "BibChapter",
                "ConferenceInfo"
            ],
            "Children": [
                "City",
                "Country",
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ConfEventName",
            "Description": "This element contains the name of the conference. It is used as part of a structured Citation and as part of the information about conference-related supplements.",
            "Parents": [
                "BibBook",
                "BibChapter",
                "ConferenceInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ConfEventURL",
            "Description": "This element contains the URL where the conference can be found in the internet. It is used as part of the information about conference-related supplements.See SupplementInfo",
            "Parents": [
                "BibBook",
                "BibChapter",
                "ConferenceInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ConfNumber",
            "Description": "This element contains the number of a particular conference in a series of conferences. It is used as part of the information about conference-related supplements.",
            "Parents": [
                "BibBook",
                "BibChapter",
                "ConferenceInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ConfSeriesID",
            "Description": "This element contains the unique ID of a conference series and is used for grouping different conferences together. This helps to maintain conference series identity.ConfSeriesID should be assigned so that the following rules are observed:1. The ID is unique, e.g., there is no other conference series using the same ID2. If possible (if other rules are not violated) the ID should be picked up from http://dblp.org3. If conference series are merged, the new ID is the ID of the conference series with the longest history (e.g., \"The 14th European Conference on Machine Learning (ECML) and the 7th European Conference on Principles and Practice of Knowledge Discovery in Databases (PKDD)\" would keep series ID from ECML)4. If conference acronym or series name changes, but the numeration is kept, the ID remains the same. E.g., see this conference series, started as a workshop, but then conferted to the conference: http://www.informatik.uni-trier.de/~ley/db/conf/semweb/",
            "Parents": [
                "ConferenceInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ConfSeriesName",
            "Description": "This element contains the name of the conference series. It is used as part of the information about conference-related supplements.",
            "Parents": [
                "BibBook",
                "BibChapter",
                "ConferenceInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Contact",
            "Description": "Contains information as to how to contact a person or institution that is specific to that person or institution (e.g., telephone or fax number, e-mail address, personal url).Observe the following usage in publications (e.g., articles and chapters) for authors and editors:– Author addresses are not maintained under Contact. In Contact, do not use the elements City, Country, Postbox, Postcode, State, or Street. See Affiliation for information on handling postal addresses.– Contact information for authors should be retained where given (i.e., for as many authors as supplied).– In telephone numbers, use hyphens to separate blocks of entries and a single \"+\" instead of zeros with a country code (e.g., +49-6221-4878249). A country code should always be entered.– In telephone numbers, text and supplementary numbers  (e.g., \"ext. -4567\") should not be incorporated in the XML data. Superfluous hyphens should also not be used.Usage on the job sheet for the supplier address is different. In this context, the elements used to capture an address do appear in Contact. See the sample job sheets and the job sheet documentation.",
            "Parents": [
                "Author",
                "Collaborator",
                "ContactPerson",
                "CopyEditor",
                "Editor",
                "ExternalPublisher",
                "FullServiceVendor",
                "InstitutionalAuthor",
                "InstitutionalCollaborator",
                "InstitutionalEditor",
                "Printer",
                "ProductionEditor",
                "ProofContact",
                "ProofCoRecipient"
            ],
            "Children": [
                "City",
                "Country",
                "Email",
                "Fax",
                "OrgDivision",
                "OrgName",
                "Phone",
                "Postbox",
                "Postcode",
                "State",
                "Street",
                "URL"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ContactPerson",
            "Description": "The contact person given on the job sheet either who works with Springer at a supplier or (for journals in total service only) for the Springer internal contact.",
            "Parents": [
                "ExternalPublisher",
                "FullServiceVendor",
                "Printer",
                "ProductionInfo"
            ],
            "Children": [
                "Contact",
                "ContactPersonName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ContactPersonName",
            "Description": "The name of the Springer contact at a supplier, as used on the job sheet.See ContactPerson",
            "Parents": [
                "ContactPerson"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "GivenName",
                "NativeName",
                "NoGivenName",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ContentFiles",
            "Description": "This is a container element on a job sheet for references to files exchanged between publisher and a supplier or an application. See FilesToSupplier and FilesToPublisher for more detailed information.",
            "Parents": [
                "FilesToApplication",
                "FilesToPublisher",
                "FilesToSupplier"
            ],
            "Children": [
                "File"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CoPublisher",
            "Description": "This element is not yet supported. Do not use.",
            "Parents": [
                "PublisherInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CopyEditing",
            "Description": "A container for copy editing information on a job sheet. The category (i.e., level of editing to be performed) is given. See below for definitions of these levels.See Supplier",
            "Parents": [
                "CompoundObjectTechnicalInfo",
                "FullServiceVendor",
                "Printer"
            ],
            "Children": [
                "CopyEditor"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CopyEditor",
            "Description": "This element is not used in Springer's workflows.",
            "Parents": [
                "CopyEditing"
            ],
            "Children": [
                "Contact",
                "CopyEditorName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CopyrightComment",
            "Description": "A container element for copyright information about, for example, (1) previous editions if they were not all held by the same copyright holder as the current edition or (2) parts of the current editon if they are not held by the same copyright holder as the rest of the publication. This information supplements the entries for the current edition captured in CopyrightHolderName and CopyrightYear.Various use cases for books are shown in the examples below:- Different copyright holders for different editions: There were previous editions of the work, but not all of them were copyrighted by the same publisher/owner. In this case, the information about former editions must be captured in CopyrightComment instead of in CopyrightFormerEditions.- Divergent copyright holders for parts of the publication, e.g., some chapters have a different copyright holder than the book.- The entire book is a licensed edition.- If it were necessary in a particular case to mention copyright holders of illustrations.Usage in eBook/POD deliveries:The full-service vendor should not capture this information. It is inserted only at Springer.See BookCopyright",
            "Parents": [
                "ArticleCopyright",
                "BookCopyright",
                "ChapterCopyright"
            ],
            "Children": [
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CopyrightHolderName",
            "Description": "The name of the copyright holder.See ArticleCopyright",
            "Parents": [
                "ArticleCopyright",
                "BookCopyright",
                "BookSetCopyright",
                "ChapterCopyright",
                "IssueCopyright"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CopyrightStandardText",
            "Description": "For copyright page entries such as \"All rights reserved. This work may not be translated or copied...\" etc which differ according to country",
            "Parents": [
                "BookCopyright"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CopyrightText",
            "Description": "Information about copyright issues related to a journal as included in the A pages, such a copyright transfer (but not the form) and private use of published material.See ImprintTexts",
            "Parents": [
                "ImprintTexts"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CopyrightTransfer",
            "Description": "A container element of information about a copyright or commercial rights  transfer for/from stage 150 of the journal workflow.See AuthorQueryApplication",
            "Parents": [
                "AuthorQueryApplication"
            ],
            "Children": [
                "OrgName",
                "Reason",
                "Timestamp"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CopyrightYear",
            "Description": "The year of the copyright.Usage:CopyrightYear should not be empty.Use full number of digits for the year (e.g., 2004).If Article OnlineDate is present, Article CopyrightYear must be the same as the year in Article OnlineDate.If Article OnlineDate is not present, Article CopyrightYear must be the same as the year in Issue CoverDate.If Issue OnlineDate is present, Issue CopyrightYear must be the same as the year in Issue OnlineDate.If Issue OnlineDate is not present, Issue CopyrightYear must be the same as the year in Issue CoverDate.See ArticleCopyright",
            "Parents": [
                "ArticleCopyright",
                "BookCopyright",
                "BookSetCopyright",
                "ChapterCopyright",
                "IssueCopyright"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CopyrightYearFormerEditions",
            "Description": "A container element for the copyright years of previous editions if they had the same copyright holder as the current edition. This element is not used if the copyright holder of the previous editions was different from that of the current edition.Usage in eBook/POD deliveries:The full-service vendor should not capture this information. It is inserted only at Springer.See BookCopyright",
            "Parents": [
                "BookCopyright"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Country",
            "Description": "The name of a country as part of an address.Write out the names of all countries except the United States (abbreviate to USA) and United Kingdom (abbreviate to UK). See Affiliation and OrgAddress for instructions on usage.See OrgAddress",
            "Parents": [
                "ConfEventLocation",
                "Contact",
                "DispatcherAddress",
                "OffprintAddress",
                "OrgAddress",
                "RecipientAddress"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Cover",
            "Description": "A container within File for references to the files delivered for CoverFigure and the PrintPDF version of the cover.",
            "Parents": [
                "Book",
                "BookSet",
                "File",
                "Issue"
            ],
            "Children": [
                "BodyRef",
                "CoverFigure",
                "CoverInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CoverDate",
            "Description": "A container for the date information that appears on the cover of an issue.Entries for Year and Month must be given, alone whenever possible or in combination with DateString.See IssueHistory",
            "Parents": [
                "IssueHistory"
            ],
            "Children": [
                "DateString",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CoverExteriorColorName",
            "Description": "This element contains the name of a color used in a book's cover (outside).  On color naming, see the element ColorSpecifications.See CoverProductionInfo",
            "Parents": [
                "CoverProductionInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CoverFigure",
            "Description": "This element contains a reference to the file of the figure that appears on the cover of a book or journal.See Cover",
            "Parents": [
                "Cover"
            ],
            "Children": [
                "MediaObject"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CoverFirstPage",
            "Description": "The number designating the first page of the cover, i.e., the front side of the cover.In journals, the first page of the cover of an issue is always \"A1\", in extension of the numbering used for the issue front matter.In books, the first page of the cover is always \"C1\".See Cover",
            "Parents": [
                "CoverInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CoverInfo",
            "Description": "This is a container for the entries for the cover page numbers.In journals, the front and back exterior covers are designated \"A1\" and \"A[n]\" where n is an even number that continues the numbering from the issue backmatter. The interior covers belong to the issue frontmatter and the issue backmatter.In books, the front and back exterior covers are designated \"C1\" and \"C4\". For a softcover book, the interior covers are referred to \"C2\" and \"C3\". For a hardcover, endsheets are used; the designations are described at EndsheetsContentOnPage.See Cover",
            "Parents": [
                "Cover",
                "DiscreteBookObjectInfo",
                "DiscreteIssueObjectInfo"
            ],
            "Children": [
                "CoverFirstPage",
                "CoverLastPage"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CoverInteriorColorName",
            "Description": "This element contains the name of a color used in the interior of a book's cover. Applies to softcover books only. On color naming, see the element ColorSpecifications.See CoverProductionInfo",
            "Parents": [
                "CoverProductionInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CoverLastPage",
            "Description": "The number designating the final page of the cover.In journals, the final page of the cover of an issue is always an even number (since the first page of the cover of an issue is always \"A1\" and there is an even number of pages in the front matter and back matter). In books, the final page of the cover is always \"C4\".See Cover",
            "Parents": [
                "CoverInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CoverProductionInfo",
            "Description": "A container element for instructions for producing a cover.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": [
                "CoverExteriorColorName",
                "CoverInteriorColorName",
                "EndsheetsLayoutColorName",
                "EndsheetsPrintingColorName",
                "SpineWidth"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CreditCardHolderName",
            "Description": "The name given as owner on a credit card.See CreditCardInformation",
            "Parents": [
                "CreditCardInformation"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CreditCardInformation",
            "Description": "A container element for information about an individual's credit card.See DiscreteObjectTechnicalInfo",
            "Parents": [
                "RecipientInvoice"
            ],
            "Children": [
                "CreditCardHolderName",
                "CreditCardNumber",
                "CreditCardValidity"
            ]
        }
    },
    {
        "Elements": {
            "Title": "CreditCardNumber",
            "Description": "The number of a credit card.See CreditCardInformation",
            "Parents": [
                "CreditCardInformation"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "CreditCardValidity",
            "Description": "The expiry date of a credit card that indicates the end of a card's validity.See CreditCardInformation",
            "Parents": [
                "CreditCardInformation"
            ],
            "Children": [
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Currency",
            "Description": "The designation of the currency for price information.See OffprintOrder",
            "Parents": [
                "Price"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "DataObject",
            "Description": "DataObject contains a reference to a data file, as opposed to an audio, video, or image file. Examples are Excel tables, PDF files, zip archives, or databases that are published as electronic supplementary material. See also Section 3.6.4\tESM in the Appendix, in Creation of A++: Instructions for Springer's Joint Workflow (referenced below).Usage (see also the example):1. Note that MediaObject, the parent of DataObject, should be in a Para. Do not use InlineMediaObject.2. A Caption for the object must come immediately subordinate to DataObject; it should contain a text caption if there is one and the size and type of the file. The caption later becomes the link.3. If the Para containing the MediaObject does not contain any text from the manuscript, please insert the following sentence: “Below is the link to the electronic supplementary material.”",
            "Parents": [
                "InlineMediaObject",
                "MediaObject"
            ],
            "Children": [
                "Caption"
            ]
        }
    },
    {
        "Elements": {
            "Title": "DateString",
            "Description": "An element for capturing a  cover date that does not consist solely of Year and Month. This may be an entry such \"Summer 1978\". See CoverDate.DateStrings occur primarily in legacy material. It should not be used in current production.See IssueHistory",
            "Parents": [
                "CoverDate"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Day",
            "Description": "Day as part of a date. The numeric value of the day must be used; valid are the numbers from 1 to 31. Do not use a leading zero.",
            "Parents": [
                "Accepted",
                "ConfEventDateEnd",
                "ConfEventDateStart",
                "EmbargoDate",
                "EventDate",
                "FixedPublicationDate",
                "OnlineDate",
                "OnlineFirstDeadline",
                "PlannedPublicationDate",
                "PrintDate",
                "PrinterDeadline",
                "ProductionEvent",
                "Received",
                "RegistrationDate",
                "Revised",
                "S200TypesetterDeadline",
                "S300TypesetterDeadline",
                "S50TypesetterDeadline",
                "S600TypesetterDeadline",
                "S650TypesetterDeadline",
                "S700ElectronicDistributionDeadline",
                "S700PrinterDeadline",
                "S800PrintDistributionDeadline",
                "S900ElectronicDistributionDeadline",
                "ScheduledToPrintDate",
                "SentToPrintDate",
                "TypesetterDeadline"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Deadline",
            "Description": "Container for specifying a type of publication deadline and its date.",
            "Parents": [
                "WorkflowInfo"
            ],
            "Children": [
                "FixedPublicationDate",
                "OnlineFirstDeadline",
                "PlannedPublicationDate",
                "PrinterDeadline",
                "S200TypesetterDeadline",
                "S300TypesetterDeadline",
                "S50TypesetterDeadline",
                "S600TypesetterDeadline",
                "S650TypesetterDeadline",
                "S700ElectronicDistributionDeadline",
                "S700PrinterDeadline",
                "S800PrintDistributionDeadline",
                "S900ElectronicDistributionDeadline",
                "TypesetterDeadline"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Dedication",
            "Description": "A container for a dedication, i.e., a section at the beginning of a book (before any other body matter) containing a tribute to someone by the book author.See BookFrontmatter",
            "Parents": [
                "BodyFrontmatter"
            ],
            "Children": [
                "Heading",
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "DefinitionList",
            "Description": "A list containing pairs of terms and their definitions.",
            "Parents": [
                "AbbreviationGroup",
                "AbbreviationGroupSection",
                "Para"
            ],
            "Children": [
                "DefinitionListEntry",
                "Heading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "DefinitionListEntry",
            "Description": "A container in a DefinitionList for an entry consisting of a Term and a Definition.See DefinitionList",
            "Parents": [
                "DefinitionList"
            ],
            "Children": [
                "Description",
                "Term"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Degrees",
            "Description": "Degrees is used to capture academic degrees or society affiliations appended after a name, e.g., Ph.D., M.D., F.R.S.Usage:– In articles in archive journals (i.e., where the product type is ArchiveJournal), the elements Prefix, Degrees, or Role are not used. Thus, any such information should not be transferred from a manuscript to the XML data. – In articles in magazine-type journals, the elements Prefix and Degrees  are used for the corresponding author only. See the instructions under AuthorName.",
            "Parents": [
                "AuthorName",
                "BibAuthorName",
                "BibEditorName",
                "CollaboratorName",
                "ContactPersonName",
                "CopyEditorName",
                "EditorName",
                "OffprintRecipientName",
                "ProductionEditorName",
                "ProofContactName",
                "ProofCoRecipientName",
                "RecipientName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Deliverables",
            "Description": "A container for the type of deliverables.See Supplier",
            "Parents": [
                "Application",
                "AuthorQueryApplication",
                "ExternalPublisher",
                "FullServiceVendor",
                "Printer"
            ],
            "Children": [
                "DeliverablesForCompoundBookObjects",
                "DeliverablesForCompoundObjects",
                "DeliverablesForDiscreteBookObjects",
                "DeliverablesForDiscreteObjects",
                "NoDeliverables"
            ]
        }
    },
    {
        "Elements": {
            "Title": "DeliverablesForCompoundBookObjects",
            "Description": "A indicator of the files to be delivered in the context of compound book objects.See Supplier",
            "Parents": [
                "Deliverables"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "DeliverablesForCompoundObjects",
            "Description": "A indicator of the files to be delivered in the context of compound journal objects (e.g., issues).See Supplier",
            "Parents": [
                "Deliverables"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "DeliverablesForDiscreteBookObjects",
            "Description": "A indicator of the files to be delivered in the context of discrete book objects (chapters).See Supplier",
            "Parents": [
                "Deliverables"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "DeliverablesForDiscreteObjects",
            "Description": "A indicator of the files to be delivered in the context of discrete journal objects (articles).See Supplier",
            "Parents": [
                "Deliverables"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Description",
            "Description": "The description (i.e., definition or explanation) of a term in a definition list.See DefinitionList",
            "Parents": [
                "DefinitionListEntry"
            ],
            "Children": [
                "Para"
            ]
        }
    },
    {
        "Elements": {
            "Title": "DiscreteBookObjectInfo",
            "Description": "A container for information about the discrete objects in a book.See DiscreteObjectTechnicalInfo",
            "Parents": [
                "PartInfoGroup",
                "ProductionInfo"
            ],
            "Children": [
                "AdvertisementInfo",
                "AuthorGroup",
                "BookBackmatterInfo",
                "BookFrontmatterInfo",
                "ChapterInfo",
                "CoverInfo",
                "DiscreteObjectTechnicalInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "DiscreteIssueObjectInfo",
            "Description": "A container for information about discrete objects in an issue. The different types of discrete objects are identified by the different types of entries for the attribute ID (see the examples).See DiscreteObjectTechnicalInfo",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": [
                "AdditionalCoverInfo",
                "AdvertisementInfo",
                "ArticleInfo",
                "AuthorGroup",
                "BlankPageInfo",
                "CoverInfo",
                "DiscreteObjectTechnicalInfo",
                "IssueBackmatterInfo",
                "IssueFrontmatterInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "DiscreteObjectTechnicalInfo",
            "Description": "A container element for information about individual discrete objects.See DiscreteIssueObjectInfo",
            "Parents": [
                "DiscreteBookObjectInfo",
                "DiscreteIssueObjectInfo",
                "ProductionInfo"
            ],
            "Children": [
                "ColorImagesInPrint",
                "ColorImagesOnPage",
                "EmbargoDate",
                "NumberOfFreeCopies",
                "OffprintOrder",
                "ProductionClassification",
                "RecipientInvoice",
                "StyleInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "DispatcherAddress",
            "Description": "A container for the address of the distribution center to which copy is to be delivered.This element is not yet supported.",
            "Parents": [
                "FullServiceVendor",
                "Printer"
            ],
            "Children": [
                "City",
                "Country",
                "Postbox",
                "Postcode",
                "State",
                "Street"
            ]
        }
    },
    {
        "Elements": {
            "Title": "DisplayTerm",
            "Description": "An element naming a term that is typical of the content and to be used for semantic linking.DisplayTerm is used for fingerprints that are displayed within the BEC (background enriched content) project context, while RelevantTerms are not displayed.See Fingerprint",
            "Parents": [
                "Fingerprint"
            ],
            "Children": [
                "MainTerm",
                "VariantTerm"
            ]
        }
    },
    {
        "Elements": {
            "Title": "EAN",
            "Description": "The element for capturing the International Article Number within the CompoundBookObjectInfo.",
            "Parents": [
                "CompoundBookObjectInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "EditionNumber",
            "Description": "Used for the edition number of a structured book entry (either BibBook or BibChapter) listed in the bibliography.Used for the edition number in the BookInfo without any further bibliographic description (as opposed to BookEdition).Usage:– Do not include any words/letters in EditionNumber, where the entry should only be a number. Such text is included in BibUnstructured or in BookEdition.",
            "Parents": [
                "BibBook",
                "BibChapter",
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Editor",
            "Description": "In EditorGroup (in A++ content instances), a container for the name and contact information of the editor of a book or book series.In connection with proofs (in job sheets), a container for the name and contact information of the editor of a book, a series, or a journal.The content model of editor is similar to that of author. The connection between editor and affiliations is via the AffiliationIDS attribute.See BookHeader",
            "Parents": [
                "EditorGroup",
                "ProofContact",
                "ProofRecipient"
            ],
            "Children": [
                "Biography",
                "Contact",
                "EditorName",
                "Figure",
                "OtherCredit",
                "Role"
            ]
        }
    },
    {
        "Elements": {
            "Title": "EditorGroup",
            "Description": "This is the container element for information related to the editors. It contains the names of all the editors and institutional editors and any contact information and affiliations/addresses that are available.Editors are represented by a list of Editor elements (or InstitutionalEditor). Affiliations/addresses are represented by a list of Affiliation elements. The connection between Editor and Affiliation is represented by an ID/IDREF mechanism. This is the same concept as for AuthorGroup.See BookHeader",
            "Parents": [
                "BookHeader",
                "BookJobSheet",
                "BookSetHeader",
                "ChapterJobSheet",
                "IssueHeader",
                "LocEntry",
                "PartHeader",
                "PartInfoGroup",
                "PartJobSheet",
                "SeriesHeader",
                "SubPartHeader",
                "SubSeriesHeader"
            ],
            "Children": [
                "Affiliation",
                "Editor",
                "InstitutionalEditor"
            ]
        }
    },
    {
        "Elements": {
            "Title": "EditorialInfo",
            "Description": "The responsible publishing unit, publishing discipline and publishing segment are given here.",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": [
                "PublishingDiscipline",
                "PublishingSegment",
                "PublishingUnit"
            ]
        }
    },
    {
        "Elements": {
            "Title": "EditorialManuscriptNumber",
            "Description": "The manuscript number used in an editorial office.See ManuscriptInfo",
            "Parents": [
                "ManuscriptInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "EditorialTexts",
            "Description": "Miscellaneous texts from the publisher concerning a journal, such as a detailed description of an editorial board.See IssueFrontmatter",
            "Parents": [
                "IssueBackmatter",
                "IssueFrontmatter"
            ],
            "Children": [
                "ChinaNumber",
                "Editors",
                "FutureToC",
                "SocietyText"
            ]
        }
    },
    {
        "Elements": {
            "Title": "EditorName",
            "Description": "The container for the structured name of an editor. The content model is the same as that for AuthorName.See BookHeader",
            "Parents": [
                "Editor"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "GivenName",
                "NativeName",
                "NoGivenName",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Editors",
            "Description": "Text from the publisher about the editors of a journal, such as a detailed list of names and responsibilities, that is part of the journal's A pages.See EditorialTexts",
            "Parents": [
                "EditorialTexts"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Eds",
            "Description": "The presence of this element triggers the insertion of the character string \"eds\" during rendering. The entry made for the element <Eds> must be singular or plural depending on the number of editors of the cited publication.See BibChapter",
            "Parents": [
                "BibBook",
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ElectronicDelivery",
            "Description": "This element indicates whether manuscript material is sent in electronic form, i.e., via ftp with the job sheet file. See also the element PostalDelivery.See ManuscriptInfo",
            "Parents": [
                "ManuscriptInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ElectronicEditionText",
            "Description": "Information from the publisher about the online version of a journal and related functionality. This content is rendered as part of the A pages (and is thus part of the IssueFrontmatter or IssueBackmatter).See ImprintTexts",
            "Parents": [
                "ImprintTexts"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Email",
            "Description": "An e-mail address as part of the contact information for an author or editor.The characters used must be in the permitted ASCII ranges.See Contact",
            "Parents": [
                "Contact"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "EmbargoDate",
            "Description": "EmbargoDate specifies the end date of an embargo. An embargo is the period of time an article is only accessible via a paywall. After the embargo has elapsed the article access right are changed.",
            "Parents": [
                "DiscreteObjectTechnicalInfo"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Emphasis",
            "Description": "This is an inline element for adding emphasis (formatting) to text. The specific type of emphasis is specified by the Type attribute.",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookFeatureText",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "CatalogingInformation",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "ChinaNumber",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "EquationSource",
                "ForewordTitle",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "Literal",
                "LohEntry",
                "OpeningHeader",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "Subscript",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Superscript",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "EndsheetsContentOnPage",
            "Description": "The element designates a specific endsheet page that is to be printed. Applies to hard cover only.Page designations: The endsheets at the front of the book are E1 (the page glued to front cover), E2, E3, and E4. E1 obviously cannot contain content.The endsheets at the back of the book are E5, E6, E7, and E8 (the page glued to the back cover). E8 obviously cannot contain content.See Typesetting",
            "Parents": [
                "Typesetting"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "EndsheetsLayoutColorName",
            "Description": "This element contains the name of a color used in a book's endsheets. Applies to hardcover books only. On color naming, see the element ColorSpecifications.See CoverProductionInfo",
            "Parents": [
                "CoverProductionInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "EndsheetsPrintingColorName",
            "Description": "This element contains the name of a printing color used in a book's endsheets. Applies to hardcover books only.See CoverProductionInfo",
            "Parents": [
                "CoverProductionInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "entry",
            "Description": "The element entry is a cell in a table. In contrast to all other elements, it may be empty, i.e., contain neither a subelement nor PCDATA although the DTD does not define it as empty.General guidance:– Each entry must specify the column (via colname) or the columns (via namest and nameend) it is in. Cells in a row should be presented in sequential order. Note that entries with the morerows attribute from preceding rows implicitly occupy cells in following rows.– There should be a cell for each row and column (either explicitly or part of a merged cell), although formally rows do not have to be full (i.e., some entries may be completely absent).Usage:– The element entry may be empty.– Use either the attribute \"colname\" or the pair \"namest\" and \"nameend\".– The attributes \"charoff\", \"colsep\", \"rowsep\", and \"valign\" are currently not used.See Table",
            "Parents": [
                "row"
            ],
            "Children": [
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Equation",
            "Description": "The element Equation is a container used to capture displayed equations, i.e., those to be rendered as a block on a line separate from the running text. For equations occurring within the flow of text, use the element InlineEquation.Equations are to be captured using the element EquationSource, which should contain the TeX and the MathML coding of the equation. This will be the source of the rendered equation. Note that the TeX must be in a CDATA marked section.Equations should not be processed in XML using a graphic file, such as one supplied by an author. Any equation supplied by an author as a graphic must be keyed. If the equation cannot be rendered in TeX as accepted by Springer's submission checker, please get in touch with your Springer production contact.See also the detailed instructions in Section 3.4.14\tEquations, of Creation of A++: Instructions for Springer's Joint Workflow (cited below).See InlineEquation",
            "Parents": [
                "Para"
            ],
            "Children": [
                "EquationNumber",
                "EquationSource",
                "MediaObject"
            ]
        }
    },
    {
        "Elements": {
            "Title": "EquationNumber",
            "Description": "The number of an equation. The entry is the number without parentheses. Parentheses (but no additional text) must be generated during the rendering process.See Equation",
            "Parents": [
                "Equation"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "EquationSource",
            "Description": "Specification of the type of source captured for an equation (e.g., TeX or MathML code).If MathML is used, <math> must be used as the top-level element. For the source TeX, a CDATA marked section must be included in the document instance.See Equation",
            "Parents": [
                "Equation",
                "InlineEquation"
            ],
            "Children": [
                "Emphasis",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ESMGrant",
            "Description": "The terms or conditions under which a user is granted access to content, in this case to electronic supplementary material (ESM). This tag and its entry will be generated automatically.See ArticleGrants",
            "Parents": [
                "ArticleGrants",
                "ChapterGrants"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Etal",
            "Description": "This is an empty element used in the structured version of a citation to represent unnamed further authors. In the unstructured version of such a citation, \"et al\" is simply a string of letters.If the rendering of a citation must be executed from a structured citation (because there is no BibUnstructured version), the presence of this element should trigger the insertion of the character string \"et al\".See BibArticle",
            "Parents": [
                "BibArticle",
                "BibBook",
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Ethics",
            "Description": "Used for ethical statements relevant to the article such as ethical guidelines or conflict of interest statements.",
            "Parents": [
                "ArticleBackmatter",
                "ChapterBackmatter"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Event",
            "Description": "A container for information about the type of task to be performed by an application.See Application",
            "Parents": [
                "Application",
                "AuthorQueryApplication"
            ],
            "Children": [
                "EventDate",
                "EventName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "EventDate",
            "Description": "The date on which the designated task is to be performed by an application.See Application",
            "Parents": [
                "Event"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "EventName",
            "Description": "Designates the type of task to be performed by an application.See Application",
            "Parents": [
                "Event"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ExternalPublisher",
            "Description": "A container element for information about a publisher with whom Springer has a copublishing arrangement and for deliverables. Actually captured in the element CompanyName and Contact should be information about the company making the delivery to Springer, which may in fact be a full-service vendor, not the copublisher.",
            "Parents": [
                "Supplier"
            ],
            "Children": [
                "CompanyName",
                "Contact",
                "ContactPerson",
                "Deliverables",
                "FilesToPublisher"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ExternalRef",
            "Description": "A reference to an external resource, i.e., an online resource that is not part of the article.An ExternalRef is most frequently encountered in BibUnstructured and ArticleNote.An external reference is represented by a source (i.e., the text in the document marked for linking) and at least one target. Multiple targets are allowed.A URL used as an Internet address must start with \"http://\".",
            "Parents": [
                "BibUnstructured",
                "Heading",
                "LohEntry",
                "Para",
                "SimplePara",
                "SubHeading",
                "TocEntry"
            ],
            "Children": [
                "RefSource",
                "RefTarget"
            ]
        }
    },
    {
        "Elements": {
            "Title": "FamilyName",
            "Description": "FamilyName is a surname or last name. Where a person has only a single name, it should be tagged as a FamilyName.See AuthorName",
            "Parents": [
                "AuthorName",
                "BibAuthorName",
                "BibEditorName",
                "CollaboratorName",
                "ContactPersonName",
                "CopyEditorName",
                "EditorName",
                "OffprintRecipientName",
                "ProductionEditorName",
                "ProofContactName",
                "ProofCoRecipientName",
                "RecipientName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Fax",
            "Description": "The fax number as part of author contact information.Fax should contain valid characters only. These Characters are: \"0\" to \"9\" and \".\", \"/\", \"(\", \")\", \"-\", and \"+\".See Contact",
            "Parents": [
                "Contact"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Figure",
            "Description": "The Figure element is a container for a media object and the related caption. The Figure element should not be confused with the graphic content that is designated a figure in journals and books because the element encompasses additional types of graphic content. The various types of graphic content included in the Figure element are distinguished by the three attributes Standard, Schema, and Structure.The attribute values Standard, Schema, and Structure are the only categories that are supported. Objects belonging to each of these three types of content are frequently numbered (as \"Fig.\", \"Scheme\" and \"Structure\"). Other categories of content (e.g., \"box\", \"listing\", \"graph\") are not used as designations in publications and thus are never included as such in XML versions and, consequently, never numbered (i.e., \"Graph 1\" should not be used); they would never be given the attribute value Standard. See the explanation in the Style Manual.The element Figure (like the element Table) is always included in and at the end of the paragraph in which they are to be rendered (for nonfloating objects) or in that of their main citation (for floating objects).If the figure file contains several figures, the Figure element can have several captions. See Caption.Multiple files can be referenced from one Figure by repeating the MediaObject element. In general only one graphic file should be referenced. A tableau should be used to combine multiple graphics into one graphic file. If the tableau exceeds the size of one page, it is split into multiple files. This is the only case where multiple graphic elements may occur for one Figure.See Caption",
            "Parents": [
                "Abstract",
                "AbstractSection",
                "Author",
                "BlockQuote",
                "Body",
                "Editor",
                "Frontispiece",
                "Para",
                "PublisherLogo",
                "Section1",
                "Section2",
                "Section3",
                "Section4",
                "Section5",
                "Section6",
                "Section7",
                "SimplePara"
            ],
            "Children": [
                "Caption",
                "MediaObject"
            ]
        }
    },
    {
        "Elements": {
            "Title": "File",
            "Description": "A container element on a job sheet for referencing content files contained in an archive sent to or returned by a supplier. Its children are the types of content according to which the files are grouped.For a detailed description, see the job sheet documentation.",
            "Parents": [
                "ContentFiles"
            ],
            "Children": [
                "AdditionalCover",
                "Advertisement",
                "APageFile",
                "AplusplusRelatedObjectFile",
                "AplusplusRootFile",
                "Archive",
                "BlankPage",
                "Cover",
                "MediaObject",
                "RenditionItem",
                "SupportingItem",
                "TextFile",
                "WorkItem"
            ]
        }
    },
    {
        "Elements": {
            "Title": "FilesToApplication",
            "Description": "This element is currently not being used to reference the files sent to an application. Only \"NoFiles\" is used.",
            "Parents": [
                "Application",
                "AuthorQueryApplication"
            ],
            "Children": [
                "ContentFiles",
                "NoFiles"
            ]
        }
    },
    {
        "Elements": {
            "Title": "FilesToPublisher",
            "Description": "This element is a container for the references to the files returned to the publisher in a zip file together with the job sheet. In most cases, on job sheets sent to suppliers this element will contain a child element \"ToBeCompleted,\" indicating that the vendor is expected to name all the files he returns to the publisher.For detailed instructions see the documentation Content Exchange with Vendors.See File",
            "Parents": [
                "Application",
                "AuthorQueryApplication",
                "ExternalPublisher",
                "FullServiceVendor",
                "Printer"
            ],
            "Children": [
                "ContentFiles",
                "NoFiles",
                "ToBeCompleted"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Fingerprint",
            "Description": "A container for informaton for semantic linking.",
            "Parents": [
                "ArticleClassification",
                "ChapterClassification"
            ],
            "Children": [
                "DisplayTerm",
                "RelevantTerm"
            ]
        }
    },
    {
        "Elements": {
            "Title": "FirstPage",
            "Description": "This is the page number of the first page of an cited reference in a structured citation.See BibArticle",
            "Parents": [
                "BibArticle",
                "BibBook",
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "FixedPublicationDate",
            "Description": "A container for the year-month-day designation of the fixed deadline for publication.An optional hour designation exist for BMC content, which may not be delivered by the DDS before the fixed publication date was reached.See Deadline",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Hour",
                "Month",
                "Reason",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Footnote",
            "Description": "The Footnote element usually generates a mark (a superscript symbol or number) at the place in the flow of the document in which it occurs. The body of the footnote is then presented elsewhere, typically at the bottom of the page.Footnote is not to be used in combination with InternalRef or anywhere in ArticleInfo or ArticleHeader (such content should be captured as ArticleNote).See ArticleNote",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "ForewordTitle",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": [
                "Para"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Foreword",
            "Description": "A foreword is an introductory text that appears at the front of a book, similar to a preface. Unlike a preface, it is written not by the book author or editor, but by an invited commentator. In German, it is called Geleitwort.The foreword is part of the BookFrontmatter and will be delivered in XML as part of the complete frontmatter for full-text XML books.See BookFrontmatter",
            "Parents": [
                "BodyFrontmatter"
            ],
            "Children": [
                "AuthorGroup",
                "Body",
                "ForewordInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ForewordDate",
            "Description": "The date of a Foreword that appears below the text with the author's name and location",
            "Parents": [
                "ForewordInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ForewordInfo",
            "Description": "This element is a container for metadata regarding a foreword.See Foreword",
            "Parents": [
                "Foreword"
            ],
            "Children": [
                "ForewordDate",
                "ForewordLocation",
                "ForewordTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ForewordLocation",
            "Description": "Location given in a Foreword that appears below the text with the author's name and the date.",
            "Parents": [
                "ForewordInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ForewordTitle",
            "Description": "The title of a foreword.See Foreword",
            "Parents": [
                "ForewordInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "FormalPara",
            "Description": "A paragraph with a heading at the beginning.Formal paragraphs are used within sections at any level and follow their own hierarchy within the section. This hierarchy is indicated by the attribute RenderingStyle. The three possible values of RenderingStyle indicate the level within the hierarchy of FormalParas. The rendering of the integrated heading element is thus determined by the value of RenderingStyle.A FormalPara may contain more than one Para element.Usage:– In archive journals, RenderingStyle may only be set to Style1.– In magazine-type journals, RenderingStyle may be either Style1 or Style2 (although the latter is very infrequent).– The attribute OutputMedium=\"Online\" is used, for example, when FormalPara is the section of the article containing the reference to the ESM must have the attribute value \"Online\". An alternative version of such a section can follow and must have the attribute value \"Paper\".",
            "Parents": [
                "Acknowledgments",
                "AdContactText",
                "AimsAndScope",
                "ArticleNote",
                "Biography",
                "BlockQuote",
                "Body",
                "CopyrightText",
                "Editors",
                "ElectronicEditionText",
                "Ethics",
                "FutureToC",
                "JournalInstructions",
                "ProductionText",
                "Section1",
                "Section2",
                "Section3",
                "Section4",
                "Section5",
                "Section6",
                "Section7",
                "SocietyText",
                "SubscriptionText",
                "TechnicalInstructions"
            ],
            "Children": [
                "Heading",
                "Para"
            ]
        }
    },
    {
        "Elements": {
            "Title": "FormatTrimSize",
            "Description": "An instruction indicating the paper size of the final product.",
            "Parents": [
                "CompoundObjectTechnicalInfo",
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "FreeElectronicOffprint",
            "Description": "This empty element is an indicator that an electronic offprint is to be made available to the recipient free of charge.  It is used in connection with s150 of the journal workflow.",
            "Parents": [
                "OffprintOrder"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Frontispiece",
            "Description": "Used for the frontispiece figure in the book frontmatter.This is a rarely used component offered by STM standard layout.",
            "Parents": [
                "BodyFrontmatter"
            ],
            "Children": [
                "Figure"
            ]
        }
    },
    {
        "Elements": {
            "Title": "FullServiceVendor",
            "Description": "Container for information for and about a supplier whose role is the generation of structured data and delivery of rendered PDFs for publication.See Supplier",
            "Parents": [
                "Supplier"
            ],
            "Children": [
                "CompanyName",
                "Contact",
                "ContactPerson",
                "CopyEditing",
                "Deliverables",
                "DispatcherAddress",
                "FilesToPublisher",
                "FilesToSupplier",
                "ProofInfo",
                "RemarkFrom",
                "RemarkTo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Fund",
            "Description": "A container element in which one or more funds from one funding organization are kept.See ArticleFundingInformation",
            "Parents": [
                "ArticleFundingInformation"
            ],
            "Children": [
                "FunderName",
                "GrantNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "FunderName",
            "Description": "An element which contains the name of a funding organization.See ArticleFundingInformation",
            "Parents": [
                "Fund"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "FutureToC",
            "Description": "A list of articles to be published in the next issue that is rendered as part of the A pages of a current issue. This practice has been discontinued in journals in XML-based OnlineFirst workflow.This element is not supported.",
            "Parents": [
                "EditorialTexts"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "GivenName",
            "Description": "The given name (first name) of an individual. Repeat the element for each given name (or initial).See Author",
            "Parents": [
                "AuthorName",
                "CollaboratorName",
                "ContactPersonName",
                "CopyEditorName",
                "EditorName",
                "OffprintRecipientName",
                "ProductionEditorName",
                "ProofContactName",
                "ProofCoRecipientName",
                "RecipientName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Glossary",
            "Description": "A Glossary contains a collection of terms and brief descriptions or definitions of those terms.",
            "Parents": [
                "ArticleBackmatter",
                "BodyBackmatter",
                "ChapterBackmatter"
            ],
            "Children": [
                "GlossaryEntry",
                "GlossarySection",
                "Heading",
                "SubHeading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "GlossaryDef",
            "Description": "A GlossaryDef contains the description, explanation, or definition of a GlossaryTerm.See Glossary",
            "Parents": [
                "GlossaryEntry"
            ],
            "Children": [
                "GlossarySeeAlso",
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "GlossaryEntry",
            "Description": "GlossaryEntry is a wrapper around a glossary term and its definition.See Glossary",
            "Parents": [
                "Glossary",
                "GlossarySection"
            ],
            "Children": [
                "GlossaryDef",
                "GlossarySee",
                "GlossaryTerm",
                "IndexTerm"
            ]
        }
    },
    {
        "Elements": {
            "Title": "GlossarySection",
            "Description": "A section within a glossary.See Glossary",
            "Parents": [
                "Glossary"
            ],
            "Children": [
                "GlossaryEntry",
                "Heading",
                "SubHeading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "GlossarySee",
            "Description": "GlossarySee directs the reader to another GlossaryEntry. A \"See\" cross-reference occurs in place of the definition.Do not use \"See\" in this element, since this is added automatically when the A++ is converted into an output format.\n\t\t\tWith GlossarySee elements, the necessary cross-reference text (usually \"See\" in English) and any necessary punctuation must be generated.\n\t\tSee Glossary",
            "Parents": [
                "GlossaryEntry"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "GlossarySeeAlso",
            "Description": "GlossarySeeAlso directs the reader to another GlossaryEntry for additional information. It is presented in addition to the GlossaryDef.Do not use \"See also\" in this element, since this is added automatically when the A++ is converted into an output format.\n\t\t\tWith GlossarySeeAlso elements, the necessary cross-reference text (usually \"See also\" in English) and any necessary punctuation must be generated.\n\t\tSee Glossary",
            "Parents": [
                "GlossaryDef"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "GlossaryTerm",
            "Description": "GlossaryTerm identifies a term that appears in a Glossary. This element occurs in two very different places: it is both an inline element in running text and a structure element in a GlossaryEntry. As an inline element, it identifies a term defined in a glossary and may point to it. Within a GlossaryEntry, it identifies the term defined by that particular entry.See Glossary",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "ForewordTitle",
                "GlossaryEntry",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "GrantNumber",
            "Description": "This element is for transferring the grant number from Springer to the JWF and further on to the DDS. The element is only used between the systems and must not be used by the vendors.",
            "Parents": [
                "Fund",
                "ProductionInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "GrossPrice",
            "Description": "The gross price of an invoice.",
            "Parents": [
                "RecipientInvoice"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Handle",
            "Description": "A handle is a pointer to a pointer. It is used to store the reference to an occurrence of a citation. It is never captured by a vendor.The DOI is a good example. A DOI will never be changed after the registration, but the URL assigned to the DOI may be changed. If a system stores the DOI, it will always be able to resolve the DOI by determining the valid URL for it.See Occurrence",
            "Parents": [
                "Occurrence"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Heading",
            "Description": "The element Heading identifies a heading in a document and the parts of a document. It is widely used in A++.Headings should not contain closing punctuation.",
            "Parents": [
                "AbbreviationGroup",
                "AbbreviationGroupSection",
                "Abstract",
                "AbstractSection",
                "Acknowledgments",
                "AdContactText",
                "AimsAndScope",
                "ArticleNote",
                "Bibliography",
                "BibSection",
                "BlockQuote",
                "CopyrightText",
                "Dedication",
                "DefinitionList",
                "Editors",
                "ElectronicEditionText",
                "Ethics",
                "FormalPara",
                "FutureToC",
                "Glossary",
                "GlossarySection",
                "Index",
                "IndexDiv",
                "JournalInstructions",
                "KeywordGroup",
                "Loc",
                "LocDiv",
                "Loh",
                "OrderedList",
                "ProductionText",
                "Quiz",
                "Section1",
                "Section2",
                "Section3",
                "Section4",
                "Section5",
                "Section6",
                "Section7",
                "SeriesIndex",
                "SocietyText",
                "SubscriptionText",
                "SubSeriesIndex",
                "TechnicalInstructions",
                "Toc",
                "TocAppendix",
                "TocChapter",
                "UnorderedList"
            ],
            "Children": [
                "CitationRef",
                "Emphasis",
                "ExternalRef",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "InternalRef",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "HistoryStyle",
            "Description": "An instruction as to which elements of a history line are to be captured and rendered. See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Hour",
            "Description": "Hour as part of a date. Valid are the numbers from 0 to 23. Do not use a leading zero.",
            "Parents": [
                "Accepted",
                "FixedPublicationDate",
                "Received",
                "Revised"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ImageObject",
            "Description": "This elements contains a reference to an image. It always occur inside the wrapper MediaObject.Multiple versions of an image can be referenced by grouping them within the same MediaObject element, for example for describing references to different resolutions of the same image (high resolution, screen resolution, thumbnail).For the use of ImageObject with electronic supplementary material, see Appendix and also Section 3.6.4 ESM in the Appendix, in Creation of A++: Instructions for Springer's Joint Workflow (referenced below).See Figure",
            "Parents": [
                "InlineMediaObject",
                "MediaObject"
            ],
            "Children": [
                "Caption"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ImprintTexts",
            "Description": "The texts that are published on a journal's imprint pages (that form part of the A pages). They stem from the publisher and usually include sections on aims and scopes, copyright, subscription information, electronic publication, advertising, and production information.This element is currently not supported.",
            "Parents": [
                "IssueBackmatter",
                "IssueFrontmatter"
            ],
            "Children": [
                "AdContactText",
                "AimsAndScope",
                "CopyrightText",
                "ElectronicEditionText",
                "ProductionText",
                "SubscriptionText"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Index",
            "Description": "An Index is a container for the compiled index of a document. It may be divided in subunits (IndexDivs).It is possible to have more than one index if they are of different types, e.g., Author Index and Subject Index.",
            "Parents": [
                "BodyBackmatter",
                "ChapterBackmatter",
                "IssueBackmatter",
                "IssueFrontmatter"
            ],
            "Children": [
                "Heading",
                "IndexDiv",
                "IndexEntry",
                "SubHeading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IndexDiv",
            "Description": "An IndexDiv identifies a section of an index. An index might be divided into sections in order to group entries, usually alphabetically.See Index",
            "Parents": [
                "Index",
                "SeriesIndex",
                "SubSeriesIndex"
            ],
            "Children": [
                "Heading",
                "IndexEntry",
                "SubHeading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IndexEntry",
            "Description": "An IndexEntry is a wrapper around  index terms. If secondary and tertiary elements are associated with a particular primary index term, they are included in this wrapper, as are See and SeeAlso elements.See Index",
            "Parents": [
                "Index",
                "IndexDiv",
                "SeriesIndex",
                "SubSeriesIndex"
            ],
            "Children": [
                "PrimaryIE",
                "SecondaryIE",
                "SeeAlsoIE",
                "SeeIE",
                "TertiaryIE"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IndexTerm",
            "Description": "The element IndexTerm identifies text for which an entry is either to be included in an index or to be used for the purpose of semantic classification at the level of PCDATA (or both).The usage for creating an index differs somewhat from that used with DocBook, particularly with regard to the PCDATA captured in IndexTerm.Although permitted by the DTD, the following elements should not be used in IndexTerm: Footnote, GlossaryTerm, IndexTerm, and Sidebar.Usage– The element IndexTerm is placed in the text where a word or short phrase appears that should be identified for an index or for classification.– The text (PCDATA) captured as the immediate content of IndexTerm is part of the primary text flow, i.e., must be rendered. It also serves as the anchor of either the term to be inserted in the index or of the semantic link (classification).– The element Primary must be captured in IndexTerm. It is used to capture the word(s) that make up the term that serves as either the primary entry in the index or as the primary classification.– The elements Secondary and Tertiary are used to capture additional levels of information for either an index or for semantic links in the classification system. They are used projectwise (follow the project instructions).– Under no circumstances is the actual content of the elements Primary, Secondary, or Tertiary rendered in the primary text flow.– The attribute Type (of IndexTerm) must be present in the classification usage.– The whole IndexTerm can point to other entries in the index by using the See and SeeAlso elements.See the documentation about creating A++ for the major reference works.",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "ForewordTitle",
                "GlossaryEntry",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "Page",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Primary",
                "Secondary",
                "See",
                "SeeAlso",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript",
                "Tertiary"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Initials",
            "Description": "As used in a bibliography, Initials is used to capture for all of an individual's initials, all of which are included in a single element. Full given names should be shortened to initials. Only single-letter use is allowed. (Wm and Chas for William and Charles should be changed to W and C, respectively.)Any punctuations with an initial (such as may be dictated by the style of the publication) must be included as part of the PCDATA entry in BibUnstructured; such characters will not be generated during rendering.See BibArticle",
            "Parents": [
                "BibAuthorName",
                "BibEditorName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "InlineEquation",
            "Description": "InlineEquations are mathematical expressions that occur in the text flow, i.e., are not displayed between lines of text. This element is also used to enter individual characters in running text that are not available in the Unicode character set supported by Springer.See Equation",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookFeatureText",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "CatalogingInformation",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "ForewordTitle",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": [
                "EquationSource",
                "InlineMediaObject"
            ]
        }
    },
    {
        "Elements": {
            "Title": "InlineMediaObject",
            "Description": "A container for non-XML content (video, audio, image, data, text) that is captured inline.In an article or chapter, the most frequent use is to identify a graphic appearing inline. For example, in the element InlineEquation, this element can be used to include characters in running text that are not available in the Unicode character set supported by Springer.InlineMediaObject is not used to indicate the insertion of a graphic image without using a higher level container element (such as InlineEquation) to identify the content of the InlineMediaObject. In other words, InlineMediaObject may not be used as a substitute for an inline figure (which does not exist as an element).Follow the same instructions as given for MediaObject.See InlineEquation",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "ForewordTitle",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InlineEquation",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": [
                "AudioObject",
                "DataObject",
                "ImageObject",
                "TextObject",
                "VideoObject"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Inserts",
            "Description": "An instruction as to whether an insert is to be included in a publication.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "InstitutionalAuthor",
            "Description": "A container element for information regarding an author who is not an individual, but an organization, group, or consortium.All affiliations of an InstitutionalAuthor must be expressed by using the AffiliationIDS attribute.The InstitutionalAuthor may be the corresponding author (i.e., the CorrespondingAffiliationID is to be given), but may not be the proof recipient.",
            "Parents": [
                "AuthorGroup",
                "ProofRecipient",
                "TocAppendix",
                "TocChapter",
                "TocPart"
            ],
            "Children": [
                "Contact",
                "InstitutionalAuthorName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "InstitutionalAuthorName",
            "Description": "The name of an institutional authorSee InstitutionalAuthor",
            "Parents": [
                "BibArticle",
                "BibBook",
                "BibChapter",
                "InstitutionalAuthor"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "InstitutionalCollaborator",
            "Description": "A container element for information regarding a collaborator who is not an individual, but an organization, group, or consortium.Affiliations of an InstitutionalCollaborator must be expressed by using the AffiliationIDS attribute.",
            "Parents": [
                "CollaboratorGroup"
            ],
            "Children": [
                "Contact",
                "InstitutionalCollaboratorName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "InstitutionalCollaboratorName",
            "Description": "The name of an institutional collaboratorSee InstitutionalCollaborator",
            "Parents": [
                "InstitutionalCollaborator"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "InstitutionalEditor",
            "Description": "A container element for information regarding an editor who is not an individual, but an organization, group, or consortium.Affiliations of an InstitutionalEditor must be expressed by using the AffiliationIDS attribute.",
            "Parents": [
                "EditorGroup",
                "ProofRecipient"
            ],
            "Children": [
                "Contact",
                "InstitutionalEditorName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "InstitutionalEditorName",
            "Description": "The name of an institutional editor.See InstitutionalEditor",
            "Parents": [
                "InstitutionalEditor"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "InternalRef",
            "Description": "A reference to a location within the document. Each element with an ID attribute can be referenced.",
            "Parents": [
                "Heading",
                "Para",
                "SimplePara",
                "SubHeading"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "InvoiceAmount",
            "Description": "The amount of money being invoiced.See RecipientInvoice",
            "Parents": [
                "InvoiceItem"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "InvoiceItem",
            "Description": "Invoicing informationSee RecipientInvoice",
            "Parents": [
                "RecipientInvoice"
            ],
            "Children": [
                "InvoiceAmount",
                "InvoiceVATRate"
            ]
        }
    },
    {
        "Elements": {
            "Title": "InvoiceVATRate",
            "Description": "The rate of value-added tax (VAT) for the amount of money being invoiced.See RecipientInvoice",
            "Parents": [
                "InvoiceItem"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ISBN",
            "Description": "The element for capturing the International Standard Book Number within a structured Citation and the CompoundBookObjectInfo.",
            "Parents": [
                "BibBook",
                "BibChapter",
                "CompoundBookObjectInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Issue",
            "Description": "A container element for all issue-related elements.",
            "Parents": [
                "Volume"
            ],
            "Children": [
                "Advertisement",
                "Article",
                "BodyRef",
                "Cover",
                "IssueBackmatter",
                "IssueFrontmatter",
                "IssueHeader",
                "IssueInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueArticleCount",
            "Description": "The number of articles in an issue.See IssueInfo",
            "Parents": [
                "IssueInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "IssueBackmatter",
            "Description": "A container for the elements used to create a structured version of the back matter of an issue.This is currently not supported. Such content is delivered in PDF only.",
            "Parents": [
                "Issue"
            ],
            "Children": [
                "Advertisement",
                "AuthorInstructions",
                "BodyRef",
                "EditorialTexts",
                "ImprintTexts",
                "Index",
                "IssueBackmatterInfo",
                "Toc"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueBackmatterFirstPage",
            "Description": "The page number of the first page of the back matter of an issue.See IssueBackmatterInfo",
            "Parents": [
                "IssueBackmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "IssueBackmatterInfo",
            "Description": "A container for metadata regarding the back matter of an issue.",
            "Parents": [
                "DiscreteIssueObjectInfo",
                "IssueBackmatter"
            ],
            "Children": [
                "IssueBackmatterFirstPage",
                "IssueBackmatterLastPage",
                "IssueBackmatterSequenceNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueBackmatterLastPage",
            "Description": "The page number of the last page of the back matter of an issue.See IssueBackmatterInfo",
            "Parents": [
                "IssueBackmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "IssueBackmatterSequenceNumber",
            "Description": "This number indicates the position of a back matter within of an issue.This is needed for magazines, where it is possible to have more than one back matter, either because additional back matter content appears between articles, or because the back matter is produced in MWF in different dossiers.See IssueBackmatterInfo",
            "Parents": [
                "IssueBackmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "IssueCopyright",
            "Description": "A container for all copyright information for an issue of an journal.",
            "Parents": [
                "IssueInfo"
            ],
            "Children": [
                "CopyrightHolderName",
                "CopyrightYear"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueFrontmatter",
            "Description": "A container for the elements used to create a structured version of the front matter of an issue.This is currently not supported. Such content is delivered in PDF only.",
            "Parents": [
                "Issue"
            ],
            "Children": [
                "Advertisement",
                "AuthorInstructions",
                "BodyRef",
                "EditorialTexts",
                "ImprintTexts",
                "Index",
                "IssueFrontmatterInfo",
                "Toc"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueFrontmatterFirstPage",
            "Description": "The page number of the first page of the front matter of an issue.See IssueFrontmatterInfo",
            "Parents": [
                "IssueFrontmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "IssueFrontmatterInfo",
            "Description": "A container for metadata regarding the front matter of an issue.",
            "Parents": [
                "DiscreteIssueObjectInfo",
                "IssueFrontmatter"
            ],
            "Children": [
                "IssueFrontmatterFirstPage",
                "IssueFrontmatterLastPage",
                "IssueFrontmatterSequenceNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueFrontmatterLastPage",
            "Description": "The page number of the last page of the front matter of an issue.See IssueFrontmatterInfo",
            "Parents": [
                "IssueFrontmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "IssueFrontmatterSequenceNumber",
            "Description": "This number indicates the position of a front matter within of an issue.This is needed for magazines, where it is possible to have more than one front matter, either because additional front matter content appears between articles, or because the front matter is produced in MWF in different dossiers.See IssueFrontmatterInfo",
            "Parents": [
                "IssueFrontmatterInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "IssueHeader",
            "Description": "A container for header information that is specific to an issue, such as for the inclusion of the names of guest editors in the element EditorGroup.",
            "Parents": [
                "Issue"
            ],
            "Children": [
                "EditorGroup"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueHistory",
            "Description": "A container for all history-related dates of an issue.",
            "Parents": [
                "IssueInfo"
            ],
            "Children": [
                "CoverDate",
                "OnlineDate",
                "PricelistYear",
                "PrintDate"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueID",
            "Description": "The number of the issue as captured in a structured reference.See BibArticle",
            "Parents": [
                "BibArticle",
                "BibIssue"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "IssueIDEnd",
            "Description": "The number of the last issue of a physical issue of a journal.Issue IDs must be numerical without leading zeros.For regular issues, IssueIDStart and IssueIDEnd have the same content. For combined issues, the IssueIDEnd will be higher than IssueIDStart.For regular and combined issues, the IssueIDEnd must be less than or equal to VolumeIssueCount.See IssueInfo",
            "Parents": [
                "ArticleContext",
                "IssueInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "IssueIDStart",
            "Description": "Number of the first issue of a physical issue of a journal.Issue IDs must be numerical without leading zeros.For regular issues, IssueIDStart and IssueIDEnd have the same content.For combined issues, the IssueIDEnd will be higher than IssueIDStart.See IssueInfo",
            "Parents": [
                "ArticleContext",
                "IssueInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "IssueInfo",
            "Description": "A container element for all issue-related metadata.",
            "Parents": [
                "Issue",
                "IssueJobSheet"
            ],
            "Children": [
                "IssueArticleCount",
                "IssueCopyright",
                "IssueHistory",
                "IssueIDEnd",
                "IssueIDStart",
                "IssueRelatedObject",
                "IssueTitle",
                "SupplementInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueJobSheet",
            "Description": "A high level container for all the information supplied in a job sheet for an issue.",
            "Parents": [
                "JobSheet"
            ],
            "Children": [
                "IssueInfo",
                "JournalInfo",
                "ProductionInfo",
                "PublisherInfo",
                "VolumeInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueRelatedObject",
            "Description": "A container for references to separate but strongly related objects when the initial publication is an issue.This is a metadata entry irrelevant for rendering in PDF.",
            "Parents": [
                "IssueInfo"
            ],
            "Children": [
                "RelatedObjectDOI",
                "RelatedObjectInfo",
                "RelatedObjectReference"
            ]
        }
    },
    {
        "Elements": {
            "Title": "IssueTitle",
            "Description": "The journal issue title as may be used for a special or topical issue.",
            "Parents": [
                "ArticleContext",
                "IssueInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ItemContent",
            "Description": "ItemContent holds the content of an entry in a list or a quiz.See UnorderedList",
            "Parents": [
                "ListItem",
                "QuizItem",
                "UnorderedList"
            ],
            "Children": [
                "Para"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ItemNumber",
            "Description": "The number of a list item in an ordered list or a quiz. No additional text will be generated by the rendering process.See OrderedList",
            "Parents": [
                "ListItem",
                "QuizItem"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "JobSheet",
            "Description": "The root element of an XML job sheet, conformant to the A++ DTD, sent from Springer to a supplier (i.e., FullServiceVendor, Printer, Application) and vice versa.Springer's content and workflow management system generates XML job sheets for the steps in the production workflow.",
            "Parents": [],
            "Children": [
                "ArticleJobSheet",
                "BookJobSheet",
                "ChapterJobSheet",
                "IssueJobSheet",
                "PartJobSheet"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Journal",
            "Description": "This is the root element for the journal level in the hierarchy. It contains all journal-related elements.Articles without a given journal context (i.e., those which have not yet been assigned to an issue) are located in the element JournalOnlineFirst.",
            "Parents": [
                "Publisher"
            ],
            "Children": [
                "JournalInfo",
                "JournalOnlineFirst",
                "Volume"
            ]
        }
    },
    {
        "Elements": {
            "Title": "JournalAbbreviatedTitle",
            "Description": "The abbreviated title of the journal (short title). This version is supposed to conform to the ISO recommendations, as implemented, for example, in reference linking software and at PubMed.See JournalInfo",
            "Parents": [
                "JournalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "JournalDOI",
            "Description": "The complete DOI of a journal. The prefix must be included.See JournalInfo",
            "Parents": [
                "JournalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "JournalElectronicISSN",
            "Description": "The ISSN (International Standard Serial Number) for the electronic version of the journal.See JournalInfo",
            "Parents": [
                "JournalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "JournalID",
            "Description": "The identifier of the journal at Springer-Verlag. It may not contain any leading zeros.See JournalInfo",
            "Parents": [
                "ArticleContext",
                "JournalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "JournalInfo",
            "Description": "A container element for all the metadata related to a journal.",
            "Parents": [
                "ArticleJobSheet",
                "IssueJobSheet",
                "Journal"
            ],
            "Children": [
                "JournalAbbreviatedTitle",
                "JournalDOI",
                "JournalElectronicISSN",
                "JournalID",
                "JournalPrintISSN",
                "JournalSPIN",
                "JournalSubjectGroup",
                "JournalSubTitle",
                "JournalTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "JournalInstructions",
            "Description": "General instructions for authors about preparing and submitting a manuscript that are published as part of a journal's A pages.See AuthorInstructions",
            "Parents": [
                "AuthorInstructions"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "JournalOnlineFirst",
            "Description": "This is a container for all Online First articles of a journal.There must be an online date in OnlineFirst articles.",
            "Parents": [
                "Journal"
            ],
            "Children": [
                "Article"
            ]
        }
    },
    {
        "Elements": {
            "Title": "JournalPrintISSN",
            "Description": "The ISSN (International Standard Serial Number) of the printed version of the journal.See JournalInfo",
            "Parents": [
                "JournalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "JournalSPIN",
            "Description": "The SPIN of the journal. The SPIN is a Springer internal ID.See JournalInfo",
            "Parents": [
                "JournalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "JournalSubject",
            "Description": "The disciplines that form the primary and secondary target groups of a journal.See JournalSubjectGroup",
            "Parents": [
                "JournalSubjectGroup"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "JournalSubjectGroup",
            "Description": "The container element for the disciplines that form the primary and secondary target groups of a journal.",
            "Parents": [
                "JournalInfo"
            ],
            "Children": [
                "JournalSubject",
                "SubjectCollection"
            ]
        }
    },
    {
        "Elements": {
            "Title": "JournalSubTitle",
            "Description": "The subtitle of the journal.See JournalInfo",
            "Parents": [
                "JournalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "JournalTitle",
            "Description": "The full title of the journalSee JournalInfo",
            "Parents": [
                "BibArticle",
                "BibIssue",
                "JournalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Keyword",
            "Description": "A keyword, as supplied by an author, as a guide to the contents of a document.See KeywordGroup",
            "Parents": [
                "KeywordGroup"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "KeywordGroup",
            "Description": "A container element for a group of keywords that serve as a guide to the contents of a document.The KeywordGroup can be repeated for sets of keywords in different languages.",
            "Parents": [
                "ArticleHeader",
                "BookBackmatterHeader",
                "BookFrontmatterHeader",
                "BookHeader",
                "BookSetHeader",
                "ChapterHeader",
                "PartHeader",
                "SeriesHeader",
                "SubPartHeader"
            ],
            "Children": [
                "Heading",
                "Keyword"
            ]
        }
    },
    {
        "Elements": {
            "Title": "KeywordsAdditionalLanguage",
            "Description": "An instruction as to whether an additional keyword group that is not in the language of the document is to be captured and rendered in the PDF versions of a publication.This instruction does not apply to whether such keyword group is included in the XML version of an object, which is permitted for all journal articles and book chapters. See the relevant instructions for journals and books.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "KeywordsInDocumentLanguage",
            "Description": "An instruction as to whether a keyword group in the language of the document is to be captured and rendered, e.g., is to be included in the PDF versions of a publication.This instruction does not apply to whether a keyword group is included in the XML version of an object, which is permitted for all journal articles and book chapters. See the relevant instructions for journals and books.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "LastPage",
            "Description": "The last page of a cited article or chapter as captured in a structured reference.See Citation",
            "Parents": [
                "BibArticle",
                "BibBook",
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "LayoutColorName",
            "Description": "An element giving the name of a base color used to create the layout. On color naming, see the element ColorSpecifications.See ColorSpecifications",
            "Parents": [
                "ColorSpecifications"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "LegalNotice",
            "Description": "LegalNotice identifies a statement of legal obligation, requirement, or warranty. It occurs in the meta-information for a document, in which it frequently explains copyright, trademark, and other legal formalities of a document.",
            "Parents": [
                "BookHeader",
                "BookSetHeader",
                "SeriesHeader"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "License",
            "Description": "This element describes with which license the article is published. The license text appears in the SimplePara elements. Currently the element only supports licenses for Open Access, but this may be extend in the future to cover other licenses as well.",
            "Parents": [
                "ArticleCopyright",
                "BookCopyright",
                "ChapterCopyright"
            ],
            "Children": [
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ListItem",
            "Description": "An item in an OrderedList.See OrderedList",
            "Parents": [
                "OrderedList"
            ],
            "Children": [
                "ItemContent",
                "ItemNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Literal",
            "Description": "Literal text is an inline element to be rendered exactly as contained in the data. It is not to be used where the element <Emphasis> with its attribute FontCategory will suffice.See Emphasis",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "ForewordTitle",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": [
                "Emphasis"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Loc",
            "Description": "A container for the entries belonging to a  list of contributors.",
            "Parents": [
                "BodyFrontmatter"
            ],
            "Children": [
                "Heading",
                "LocDiv",
                "LocEntry",
                "SubHeading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "LocDiv",
            "Description": "A LocDiv identifies a section in a list of contributors. A list of contributors might be divided into sections in order to group entries.See Loc",
            "Parents": [
                "Loc"
            ],
            "Children": [
                "Heading",
                "LocEntry",
                "SubHeading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "LocEntry",
            "Description": "An entry for a list of contributors. The entry contains an author group which is structured as in AuthorGroupSee Loc",
            "Parents": [
                "Loc",
                "LocDiv"
            ],
            "Children": [
                "AuthorGroup",
                "EditorGroup"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Loh",
            "Description": "A Loh is a list of headings. It can be used to generate lists, such as of the objects captured as Figures and Tables. In these cases, the caption (number and text) are used as a rule.",
            "Parents": [
                "BodyFrontmatter"
            ],
            "Children": [
                "Heading",
                "LohEntry",
                "SubHeading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "LohEntry",
            "Description": "An entry in a list of headings.For products where the list of headings is linked to the text, an ExternalRef element is used.See Loh",
            "Parents": [
                "Loh"
            ],
            "Children": [
                "Emphasis",
                "ExternalRef",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "MainTerm",
            "Description": "An element naming a term that is typical of the content and to be used for semantic linking.See Fingerprint",
            "Parents": [
                "DisplayTerm",
                "RelevantTerm"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ManufacturingProfile",
            "Description": "The designation of a profile indicating the specific manufacturing information, i.e., information regarding print production.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ManuscriptInfo",
            "Description": "Node of a JobSheet containing information about the original manuscript submitted by the author. The contents of this element may not be modified by a supplier.",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": [
                "EditorialManuscriptNumber",
                "ElectronicDelivery",
                "ManuscriptNumberOfGraphics",
                "ManuscriptNumberOfPages",
                "ManuscriptNumberOfTables",
                "PeerReviewSystem",
                "PostalDelivery",
                "RemarkByEditor"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ManuscriptNumberOfGraphics",
            "Description": "The number of graphics in a manuscript.See ManuscriptInfo",
            "Parents": [
                "ManuscriptInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ManuscriptNumberOfPages",
            "Description": "The number of pages in a manuscript.See ManuscriptInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo",
                "ManuscriptInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ManuscriptNumberOfTables",
            "Description": "The number of tables in a manuscript.See ManuscriptInfo",
            "Parents": [
                "ManuscriptInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "MarkupProfile",
            "Description": "The designation of a profile indicating the specific markup information, i.e., information regarding generation of structured data (XML or TeX).See DiscreteObjectTechnicalInfo",
            "Parents": [
                "StyleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "MediaObject",
            "Description": "1. A container in Figure that can contain ImageObject for referencing images. Outside of Figure, MediaObject is used to contain any of the elements DataObject, VideoObject, AudioObject, or TextObject to reference electronic supplementary material.For further examples of MediaObject as part of Figure, see Figure.For examples and an explanation of the use of MediaObject for electronic supplementary material, see Appendix.  The third example there shows the usage for multiple versions of one image.2. Note that starting with JobSheetV2.4.dtd, it is also a container on a job sheet for referencing files delivered for images at stages 200 and 300.",
            "Parents": [
                "Abstract",
                "AbstractSection",
                "BlockQuote",
                "Body",
                "CoverFigure",
                "Equation",
                "Figure",
                "File",
                "OpeningFigure",
                "Para",
                "Section1",
                "Section2",
                "Section3",
                "Section4",
                "Section5",
                "Section6",
                "Section7",
                "Table"
            ],
            "Children": [
                "AudioObject",
                "Caption",
                "DataObject",
                "ImageObject",
                "TextObject",
                "VideoObject"
            ]
        }
    },
    {
        "Elements": {
            "Title": "MetadataGrant",
            "Description": "The terms or conditions under which a user is granted access to content, in this case to the metadata of an article. The content will be generated automatically.See ArticleGrants",
            "Parents": [
                "ArticleGrants",
                "ChapterGrants"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Minute",
            "Description": "Minute as part of a date. Valid are the numbers from 0 to 59. Do not use a leading zero.",
            "Parents": [
                "Accepted",
                "Received",
                "Revised"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Month",
            "Description": "A month as part of a date. The numeric value must be used for the month (e.g., 3 for March); only values between 1 and 12 are valid. Do not use a leading zero.See ArticleInfo",
            "Parents": [
                "Accepted",
                "BibIssue",
                "ConfEventDateEnd",
                "ConfEventDateStart",
                "CoverDate",
                "CreditCardValidity",
                "EmbargoDate",
                "EventDate",
                "FixedPublicationDate",
                "OnlineDate",
                "OnlineFirstDeadline",
                "PlannedPublicationDate",
                "PrintDate",
                "PrinterDeadline",
                "ProductionEvent",
                "Received",
                "RegistrationDate",
                "Revised",
                "S200TypesetterDeadline",
                "S300TypesetterDeadline",
                "S50TypesetterDeadline",
                "S600TypesetterDeadline",
                "S650TypesetterDeadline",
                "S700ElectronicDistributionDeadline",
                "S700PrinterDeadline",
                "S800PrintDistributionDeadline",
                "S900ElectronicDistributionDeadline",
                "ScheduledToPrintDate",
                "SentToPrintDate",
                "TypesetterDeadline"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NativeName",
            "Description": "The name of an author or editor captured in non-Latin letters in his/her native language.This element is not employed in all publications. Initially, its use is limited to copublications between Springer and Chinese publishers.The name is to be captured as completely as given and in the presentation (e.g., sequence) used in the native country.",
            "Parents": [
                "AuthorName",
                "CollaboratorName",
                "ContactPersonName",
                "CopyEditorName",
                "EditorName",
                "OffprintRecipientName",
                "ProductionEditorName",
                "ProofContactName",
                "ProofCoRecipientName",
                "RecipientName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NoArticleTitle",
            "Description": "Indicates the absence of an article title in the structured reference version of a Citation in the Bibliography.This element is only for cited articles where no title is used in the reference.",
            "Parents": [
                "BibArticle"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NoBody",
            "Description": "Indicates the absence of a text body. This element is used in cases where, for example, metadata is included in the A++ file but there is neither a Body element nor a BodyRef element.This is used for data delivery based on A++.",
            "Parents": [
                "Article",
                "Book",
                "BookBackmatter",
                "BookFrontmatter",
                "Chapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NoChapterTitle",
            "Description": "Indicates the absence of a chapter title in the structured reference version of a Citation in the Bibliography.This element is only for cited chapters where no title is used in the reference.",
            "Parents": [
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NoDeliverables",
            "Description": "An indicator that no files are to be delivered.",
            "Parents": [
                "Deliverables"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NoEmail",
            "Description": "An element that is not yet supported. Do not use.",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NoFiles",
            "Description": "Occurs in FilesToSupplier and FilesToPublisher and indicates that the archive contains only the job sheet but no content files. The NoFiles element is used by a supplier to return a job sheet used as a receipt. In this case, a reason must be given under Remarks.",
            "Parents": [
                "FilesToApplication",
                "FilesToPublisher",
                "FilesToSupplier"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NoGivenName",
            "Description": "Indicates the absence of a given name in an author's name.This element is only to be used with names from cultures in which only a single name is used (where there is no distinction between a given name and a  family name). The absence of a given name is indicated by the use of the empty NoGivenName element.See AuthorGroup",
            "Parents": [
                "AuthorName",
                "CollaboratorName",
                "ContactPersonName",
                "CopyEditorName",
                "EditorName",
                "OffprintRecipientName",
                "ProductionEditorName",
                "ProofContactName",
                "ProofCoRecipientName",
                "RecipientName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NoInitials",
            "Description": "Indicates the absence of initials in the structured reference version of a Citation in the Bibliography.This element is only to be used with names from cultures in which only a single name is used (where there is no distinction between a given name and a family name). The absence of initials is indicated by the use of the empty NoInitials element.It must not be used unless lack of other names has been positively confirmed.",
            "Parents": [
                "BibAuthorName",
                "BibEditorName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NumberInSeries",
            "Description": "Used to capture the series volume number of a book in the structured version of a Citation.See BibChapter",
            "Parents": [
                "BibBook",
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NumberOfFreeCopies",
            "Description": "Designation of the number of copies provided free of charge.In the case of journals, this refers to free copies of an issue.See DiscreteObjectTechnicalInfo",
            "Parents": [
                "DiscreteObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NumberOfFreeOffprints",
            "Description": "Designation of the number of offprints provided free of charge.In the case of journals, this refers to free copies of an individual article.See OffprintOrder",
            "Parents": [
                "OffprintOrder"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NumberOfPaidOffprints",
            "Description": "Designation of the number of offprints ordered and paid for.In the case of journals, this refers to the paid copies of an individual article.See OffprintOrder",
            "Parents": [
                "OffprintOrder"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NumberOfPaidPosters",
            "Description": "Designation of the number of posters ordered and paid for.See OffprintOrder",
            "Parents": [
                "OffprintOrder"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "NumberOfVolumes",
            "Description": "The number of volumes making up one book when it is too large to be published in one volume.See TechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo",
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Occurrence",
            "Description": "This element stores information about occurrences of the referenced item at abstract and/or indexing services.It should never be inserted by a vendor; the information is inserted at Springer to be used for cross-reference linking.The element Handle stores the ID specific to the occurrence. The type of the occurrence is specified by the Type attributeIf the type of the Occurrence is \"URL\", the URL is stored in the URL element.",
            "Parents": [
                "BibArticle",
                "BibBook",
                "BibChapter",
                "BibIssue"
            ],
            "Children": [
                "Handle",
                "URL"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OffprintAddress",
            "Description": "Container for the address to be used for the delivery of offprints.See OffprintOrder",
            "Parents": [
                "OffprintRecipient"
            ],
            "Children": [
                "City",
                "Country",
                "OrgDivision",
                "OrgName",
                "Postbox",
                "Postcode",
                "State",
                "Street"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OffprintOrder",
            "Description": "Container for offprint order information.See DiscreteObjectTechnicalInfo",
            "Parents": [
                "DiscreteObjectTechnicalInfo"
            ],
            "Children": [
                "FreeElectronicOffprint",
                "NumberOfFreeOffprints",
                "NumberOfPaidOffprints",
                "NumberOfPaidPosters",
                "OffprintPriceList",
                "OffprintRecipient",
                "PaidElectronicOffprint",
                "PurchaseOrderNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OffprintPrice",
            "Description": "The price for a specified number of offprints.See OffprintOrder",
            "Parents": [
                "OffprintPriceList"
            ],
            "Children": [
                "Price"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OffprintPriceList",
            "Description": "Container for offprint price information.See OffprintOrder",
            "Parents": [
                "OffprintOrder"
            ],
            "Children": [
                "OffprintPrice"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OffprintRecipient",
            "Description": "Container for information about the recipient of offprints.See OffprintOrder",
            "Parents": [
                "OffprintOrder"
            ],
            "Children": [
                "OffprintAddress",
                "OffprintRecipientName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OffprintRecipientName",
            "Description": "Container for the name of the recipient of offprints.See OffprintOrder",
            "Parents": [
                "OffprintRecipient"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "GivenName",
                "NativeName",
                "NoGivenName",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OnlineDate",
            "Description": "The date of the online publication.Usage:There must be an online date in OnlineFirst articles.If Article OnlineDate is present, Article CopyrightYear must be the same as the year in Article OnlineDate.If Article OnlineDate is not present, Article CopyrightYear must be the same as the year in Issue CoverDate.If Issue OnlineDate is present, Issue CopyrightYear must be the same as the year in Issue OnlineDate.If Issue OnlineDate is not present, Issue CopyrightYear must be the same as the year in Issue CoverDate.See ArticleInfo",
            "Parents": [
                "ArticleHistory",
                "BookHistory",
                "BookSetHistory",
                "ChapterHistory",
                "IssueHistory"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OnlineFirstDeadline",
            "Description": "Container element for the deadline for the Online First publication.In Springer's book workflow, this element will not be used as of version 1.1, where it is replaced by stage-specific elements.See WorkflowInfo",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OpeningFigure",
            "Description": "Container element used for the opening figure on the first page of an article in profession journals. Often serves as the background for the entire first page or the header data.",
            "Parents": [
                "PageHeaders"
            ],
            "Children": [
                "Caption",
                "MediaObject"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OpeningHeader",
            "Description": "Page header used on the first page of a chapter or article. The element is only used if the page header on the first page differs from that on the remaining pages.See PageHeaders",
            "Parents": [
                "PageHeaders"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OrderedList",
            "Description": "In an OrderedList, each member of the list is marked with a numeral, letter, or other sequential symbol (such as roman numerals). In journals, only numerals and letters are used.Other types of lists are UnorderedList and DefinitionList.",
            "Parents": [
                "Para"
            ],
            "Children": [
                "Heading",
                "ListItem"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OrgAddress",
            "Description": "OrgAddress is a wrapper for the constituent parts of an address (e.g., street, city). The sequence of elements should follow the postal regulations or rules of the country in the address. Usually this affects the placement of the element Postcode.Usage:– The elements of the address, especially for the postcode and the country, should be given in the sequence of presentation customary for the country of the address. As a rule, this is the sequence shown on the manuscript.– If both a short affiliation and a full postal address are listed on the manuscript, use the longer one or combine the two, whichever is more complete. The German Facharztzeitschriften, however, do distinguish between the use of \"short\" and \"long\" addresses.– The entry for city and country should be in the primary language of the publication (journal or book), while the rest of the information may be in the language of the authors, the document (article or chapter), or of the publication (journal or book).– The names of countries should not be abbreviated. In general, use the rendition of the country shown on the manuscript. Exceptions are:  the United States and the United Kingdom, which should be shortened to USA and UK (without punctuation).– Author addresses are not maintained under Contact; do not use the elements City, Country, Postbox, Postcode, State, or Street that are listed there.",
            "Parents": [
                "Affiliation"
            ],
            "Children": [
                "City",
                "Country",
                "Postbox",
                "Postcode",
                "State",
                "Street"
            ]
        }
    },
    {
        "Elements": {
            "Title": "OrgDivision",
            "Description": "A division inside an organization.Usage- OrgDivision should only be present if there is an OrgName.- If the entries for OrgDivision and OrgName consist of more than two parts, put the major entry only in OrgName and all the others in OrgDivision.See Affiliation",
            "Parents": [
                "Affiliation",
                "Contact",
                "OffprintAddress",
                "RecipientAddress"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "OrgName",
            "Description": "The name of an organization.Usage- If the entries for OrgDivision and OrgName consist of more than two parts, put the major entry only in OrgName and all the others in OrgDivision.See Affiliation",
            "Parents": [
                "Affiliation",
                "Contact",
                "CopyrightTransfer",
                "OffprintAddress",
                "RecipientAddress"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "OtherCredit",
            "Description": "The OtherCredit element holds the information about location and date given after the name of an author or editor at the end of the text (e.g., Heidelberg, June 2002). To be rendered where given. This information is customarily used in a preface or a foreword.See Preface",
            "Parents": [
                "Author",
                "Editor"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Page",
            "Description": "Page(s) of the PDF the content is extracted from.See PDFExtract",
            "Parents": [
                "PDFExtract"
            ],
            "Children": [
                "IndexTerm"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PageHeaders",
            "Description": "A container for the different kinds of headings that appear at the top of pages.Usage in STM journals- This element is not included in the XML instances.- Where page headers are rendered, they must be generated from the metadata of the journal, issue, and/or article.- Where standard page headers are rendered, they include the JournalAbbreviatedTitle, the year from CoverDate, the VolumeID, the ArticleFirstPage, \"-\" und ArticleLastPage.Usage in eBook/POD deliveries:The full-service vendor should not capture this information.Usage in professional journals- This element is captured in the XML instances, especially to cover the OpeningFigure",
            "Parents": [
                "ArticleHeader",
                "BookBackmatterHeader",
                "BookFrontmatterHeader",
                "ChapterHeader"
            ],
            "Children": [
                "OpeningFigure",
                "OpeningHeader",
                "RunningAuthor",
                "RunningTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PaidElectronicOffprint",
            "Description": "This empty element is an indicator that an electronic offprint is to be made available to the recipient for a fee. It is used in connection with s150 of the journal workflow.",
            "Parents": [
                "OffprintOrder"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PaperInfo",
            "Description": "Information text regarding type of paper used on the book copyright page",
            "Parents": [
                "BookInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Para",
            "Description": "A paragraph.A paragraph  may contain almost all inline and most block elements. Sectioning and higher-level structural elements are excluded. There is a variant of Para, namely, FormalPara, in which a Para is combined with an integrated heading.See FormalPara",
            "Parents": [
                "Abstract",
                "AbstractSection",
                "AdContactText",
                "AimsAndScope",
                "Biography",
                "BlockQuote",
                "Body",
                "CopyrightText",
                "Description",
                "Editors",
                "ElectronicEditionText",
                "Footnote",
                "FormalPara",
                "FutureToC",
                "ItemContent",
                "JournalInstructions",
                "ProductionText",
                "Section1",
                "Section2",
                "Section3",
                "Section4",
                "Section5",
                "Section6",
                "Section7",
                "SeriesInformationText",
                "Sidebar",
                "SocietyText",
                "SubscriptionText",
                "TechnicalInstructions",
                "TextObject"
            ],
            "Children": [
                "BlockQuote",
                "CitationRef",
                "DefinitionList",
                "Emphasis",
                "Equation",
                "ExternalRef",
                "Figure",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "InternalRef",
                "Literal",
                "MediaObject",
                "OrderedList",
                "Quiz",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript",
                "Table",
                "UnorderedList"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Part",
            "Description": "Parts are the highest level elements for dividing a book into segments. Each division can contain a number of component-level elements (chapters).",
            "Parents": [
                "Book",
                "BookOnlineFirst"
            ],
            "Children": [
                "BodyRef",
                "BookBackmatter",
                "BookFrontmatter",
                "Chapter",
                "PartHeader",
                "PartInfo",
                "SubPart"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PartChapterCount",
            "Description": "The number of chapters in a part.Usage in eBook/POD deliveries:The full-service vendor should capture the number of Chapter elements in the PartSee PartInfo",
            "Parents": [
                "PartInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PartContext",
            "Description": "This element contains all the information that is required to locate a part in the hierarchy of a book series and book. This information is used by the CMS to store an incoming part at the correct position.Usage in eBook/POD deliveries:The full-service vendor should capture all the relevant information.",
            "Parents": [
                "PartInfo"
            ],
            "Children": [
                "BookID",
                "BookSetID",
                "BookSetTitle",
                "BookTitle",
                "SeriesID",
                "SubSeriesID",
                "VolumePackageID"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PartHeader",
            "Description": "Container for header information for a part.Usage in eBook/POD deliveries:The full-service vendor should capture any content for AuthorGroup, EditorGroup, or KeywordGroup.See ChapterHeader",
            "Parents": [
                "Part"
            ],
            "Children": [
                "AbbreviationGroup",
                "Abstract",
                "ArticleNote",
                "AuthorGroup",
                "CollaboratorGroup",
                "EditorGroup",
                "KeywordGroup"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Particle",
            "Description": "The entry for Particle is a particle attached to a family name as a separate word. It must be tagged separately from the family name.See AuthorName",
            "Parents": [
                "AuthorName",
                "BibAuthorName",
                "BibEditorName",
                "CollaboratorName",
                "ContactPersonName",
                "CopyEditorName",
                "EditorName",
                "OffprintRecipientName",
                "ProductionEditorName",
                "ProofContactName",
                "ProofCoRecipientName",
                "RecipientName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PartID",
            "Description": "PartID is one the part identifiers. The value captured should be the same as the numerical part of the entry for the ID attribute of Part.See PartInfo for information on the different part numbers and identifiers.See PartInfo",
            "Parents": [
                "ChapterContext",
                "PartInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PartInfo",
            "Description": "The container for metadata of a book part.The identifiers and numbers given for parts should follow the usage:– PartNumber is used if the part number is to be rendered, producing for example \"Part 3\".  This element is otherwise not used.– Part ID, i.e., the ID attribute of Part, should be \"Part[digit]\", producing for example <Part ID=\"Part3\">. This entry is purely an identifier.– PartID should be the \"[digit]\" used in the attribute ID of Part.",
            "Parents": [
                "Part",
                "PartInfoGroup",
                "PartJobSheet"
            ],
            "Children": [
                "PartChapterCount",
                "PartContext",
                "PartID",
                "PartNumber",
                "PartSequenceNumber",
                "PartSubTitle",
                "PartTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PartInfoGroup",
            "Description": "A container in a job sheet within ProductionInfo for information about a part.",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": [
                "AuthorGroup",
                "DiscreteBookObjectInfo",
                "EditorGroup",
                "PartInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PartJobSheet",
            "Description": "A second level container element on a job sheet concerning a book part. This entry on a job sheet may not be changed by suppliers.",
            "Parents": [
                "JobSheet"
            ],
            "Children": [
                "AuthorGroup",
                "BookInfo",
                "EditorGroup",
                "PartInfo",
                "ProductionInfo",
                "PublisherInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PartNumber",
            "Description": "The number of the part that is to be rendered (if the attribute NumberingStyle in BookInfo is set to ChapterOnly or ChapterContent), producing for example Part 3. PartNumber is not used if no number is to be rendered.See PartInfo for information on usage of the various part identifiers and numbers.Usage in eBook/POD deliveries:The full-service vendor must capture the full designation (e.g., Part 4) if the PartNumber is rendered.See PartInfo",
            "Parents": [
                "PartInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PartSequenceNumber",
            "Description": "This number represents the position of a part relative to others within a book.The entry should be a simple digit (or digits) that is unique within the book, starting with \"1\".Usage in eBook/POD deliveries:The full-service vendor should capture this information.See PartInfo",
            "Parents": [
                "PartInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PartSubTitle",
            "Description": "A subtitle of a part.See PartInfo",
            "Parents": [
                "PartInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PartTitle",
            "Description": "The  title of a part.See PartInfo",
            "Parents": [
                "PartInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PDFExtract",
            "Description": "The PDF of articles and chapters without Fulltext XML is converted from MarkLogic into plain text.A++ XML which is sent from DDS to SpringerLink then contains this plain text as content of the element PDFExtract.",
            "Parents": [
                "Body",
                "BodyBackmatter",
                "BodyFrontmatter"
            ],
            "Children": [
                "Page"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PeerReviewPDFsStyle",
            "Description": "Usually peer reviews are not published, but there are additional forms of peer reviews in which author comments and reviewer reports from the peer review process are published online.[...]This element will be part of the jobsheet if the journal is configured accordingly and informs the vendor if the reviewer name must be included in the reviewer reports or not.If a journal does neither Open Peer Review nor Transparent Peer Review this element is not part of the jobsheet.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PeerReviewSystem",
            "Description": "An online system used during the editorial process.See ManuscriptInfo",
            "Parents": [
                "ManuscriptInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Phone",
            "Description": "The Phone number as part of the contact information for an author. See Contact for information on usage.Phone should contain valid characters only. These characters are: \"0\" to \"9\" and \".\", \"/\", \"(\", \")\", \"-\", and \"+\".See Contact",
            "Parents": [
                "Contact"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PlannedPublicationDate",
            "Description": "A container for the scheduled month, year and day of publication, i.e., of print distribution.See Deadline",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PODInformation",
            "Description": "An element providing information about the use of digital printing or the suitability of a PDF file for digital printing.",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PostalDelivery",
            "Description": "The attribute values of this element indicate whether content is being delivered by mail, as opposed to online.",
            "Parents": [
                "ManuscriptInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Postbox",
            "Description": "A post office box in an address.See OrgAddress",
            "Parents": [
                "Contact",
                "DispatcherAddress",
                "OffprintAddress",
                "OrgAddress",
                "RecipientAddress"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Postcode",
            "Description": "A code in an address for a city or region, such as the postal code, zip code, or Postleitzahl.See OrgAddress",
            "Parents": [
                "Contact",
                "DispatcherAddress",
                "OffprintAddress",
                "OrgAddress",
                "RecipientAddress"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Preface",
            "Description": "A general, introductory text that is part of a book front matter and is written by the author or editor of the book. See also Foreword.",
            "Parents": [
                "BodyFrontmatter"
            ],
            "Children": [
                "AuthorGroup",
                "Body",
                "PrefaceInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PrefaceDate",
            "Description": "The date of a Preface that appears below the text with the author's name and the location.See Preface",
            "Parents": [
                "PrefaceInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PrefaceInfo",
            "Description": "A container element for all preface-related metadata.See Preface",
            "Parents": [
                "Preface"
            ],
            "Children": [
                "PrefaceDate",
                "PrefaceLocation",
                "PrefaceTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PrefaceLocation",
            "Description": "Location given in a Preface that appears below the text with the author's name and the date",
            "Parents": [
                "PrefaceInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PrefaceTitle",
            "Description": "The title of a preface.See Preface",
            "Parents": [
                "PrefaceInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Prefix",
            "Description": "A Prefix is an honorary or academic title that precedes a name, e.g., Dr., Professor, Sir. See AuthorName for information on usage.See AuthorName",
            "Parents": [
                "AuthorName",
                "BibAuthorName",
                "BibEditorName",
                "CollaboratorName",
                "ContactPersonName",
                "CopyEditorName",
                "EditorName",
                "OffprintRecipientName",
                "ProductionEditorName",
                "ProofContactName",
                "ProofCoRecipientName",
                "RecipientName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PrepressProfile",
            "Description": "The designation of a profile indicating the specific prepress information, i.e., information regarding generation of rendered PDF data.See DiscreteObjectTechnicalInfo",
            "Parents": [
                "StyleInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Price",
            "Description": "Container for price information, e.g., for a certain number of offprints.See OffprintOrder",
            "Parents": [
                "OffprintPrice"
            ],
            "Children": [
                "Amount",
                "Currency"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PricelistYear",
            "Description": "The year that the volume of a journal is announced for. This is the year that the volume is initially scheduled to be first published in.See IssueHistory",
            "Parents": [
                "IssueHistory"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Primary",
            "Description": "In an IndexTerm, Primary identifies the most significant word or words in the entry in the index. All IndexTerms must have a Primary.See IndexTerm",
            "Parents": [
                "IndexTerm"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PrimaryIE",
            "Description": "PrimaryIE identifies the most significant word or words in an IndexEntry. IndexEntry occurs in an Index, not in the flow of the text. They are part of a rendered index, not markers for indexing.If a document includes both IndexTerm and IndexEntry, the IndexEntry is usually constructed from the IndexTerm by some external (rendering) process.See Index",
            "Parents": [
                "IndexEntry"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PrintDate",
            "Description": "The date when the print publication is available.See IssueHistory",
            "Parents": [
                "BookHistory",
                "BookSetHistory",
                "IssueHistory"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Printer",
            "Description": "Container for information for and about a supplier whose role is the generation of hard copy.See Supplier",
            "Parents": [
                "Supplier"
            ],
            "Children": [
                "CompanyName",
                "Contact",
                "ContactPerson",
                "CopyEditing",
                "Deliverables",
                "DispatcherAddress",
                "FilesToPublisher",
                "FilesToSupplier",
                "ProofInfo",
                "RemarkFrom",
                "RemarkTo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PrinterDeadline",
            "Description": "Container element for the deadline for the preparation and delivery of the printed publication.In Springer's book workflow, this element will not be used as of version 1.1, where it is replaced by stage-specific elements.See WorkflowInfo",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PrintingColorName",
            "Description": "An element giving the name of a color used in printing. On color naming, see the element ColorSpecifications.See ColorSpecifications",
            "Parents": [
                "ColorSpecifications"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PrintQuality",
            "Description": "An element specifying the quality of printing desired.",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PrintRun",
            "Description": "Designation of the number of copies to be printed.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Priority",
            "Description": "The current priority level for processing an object, which determines the deadline for the job.",
            "Parents": [
                "WorkflowInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ProductionClassification",
            "Description": "A book's production category. The tasks associated with it are defined in the book workflow documentation.See DiscreteObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo",
                "DiscreteObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ProductionCostCenter",
            "Description": "The cost center identification number of a production department at Springer that is used internally for, e.g., cost booking.",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ProductionEditor",
            "Description": "A container for the name and contact information of the production editor responsible for the journal or book. The contents of this element may not be modified by a supplier!",
            "Parents": [
                "ProductionInfo",
                "ProofRecipient"
            ],
            "Children": [
                "Contact",
                "ProductionEditorName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ProductionEditorName",
            "Description": "The name of a production editor on a job sheet.See ProductionEditor",
            "Parents": [
                "ProductionEditor"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "GivenName",
                "NativeName",
                "NoGivenName",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ProductionEvent",
            "Description": "A container element for scheduling information.Not yet in use.",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ProductionInfo",
            "Description": "ProductionInfo is a container element on a job sheet for all production-related information.",
            "Parents": [
                "ArticleJobSheet",
                "BookJobSheet",
                "ChapterJobSheet",
                "IssueJobSheet",
                "PartJobSheet"
            ],
            "Children": [
                "CompoundBookObjectInfo",
                "CompoundIssueObjectInfo",
                "CompoundObjectTechnicalInfo",
                "ContactPerson",
                "DiscreteBookObjectInfo",
                "DiscreteIssueObjectInfo",
                "DiscreteObjectTechnicalInfo",
                "EditorialInfo",
                "GrantNumber",
                "ManuscriptInfo",
                "PartInfoGroup",
                "ProductionCostCenter",
                "ProductionEditor",
                "ProductionLocation",
                "QualifyingProductionNotes",
                "SPACEInfo",
                "SupplementInfo",
                "TechnicalInfo",
                "WorkflowInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ProductionLocation",
            "Description": "The Springer location responsible for production.",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ProductionText",
            "Description": "Information from the publisher concerning the production of a journal that is part of the A pages of a journal.See ImprintTexts",
            "Parents": [
                "ImprintTexts"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ProductLiability",
            "Description": "For copyright page entries restricting the guarantee of information accuracy in the text on the part of the publisher",
            "Parents": [
                "BookCopyright"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ProofContact",
            "Description": "A container for information concerning the person to whom the proof recipient should return corrected proofs or to whom any questions should be directed. This element is used when this person is not identical to the full service vendor.See ProofInfo",
            "Parents": [
                "ProofInfo"
            ],
            "Children": [
                "Contact",
                "Editor",
                "ProofContactName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ProofContactName",
            "Description": "A container for the name of the person (not the journal editor) to whom the proof recipient should return corrected proofs or to whom any questions should be directed. This element is used when this person is not identical to the full service vendor.See ProofContact",
            "Parents": [
                "ProofContact"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "GivenName",
                "NativeName",
                "NoGivenName",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ProofCoRecipient",
            "Description": "A container for information concerning a secondary recipient of proofs, i.e., to their information.See ProofInfo",
            "Parents": [
                "ProofInfo"
            ],
            "Children": [
                "Contact",
                "ProofCoRecipientName"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ProofCoRecipientName",
            "Description": "A container for the name of a secondary recipient of proofs.See ProofCoRecipient",
            "Parents": [
                "ProofCoRecipient"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "GivenName",
                "NativeName",
                "NoGivenName",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ProofInfo",
            "Description": "A container for information concerning the recipients of proofs.",
            "Parents": [
                "FullServiceVendor",
                "Printer"
            ],
            "Children": [
                "ProofContact",
                "ProofCoRecipient",
                "ProofRecipient"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ProofRecipient",
            "Description": "A container for information concerning the recipients of proofs. Corrections should be received from each \"ProofRecipient.\"See ProofInfo",
            "Parents": [
                "ProofInfo"
            ],
            "Children": [
                "Author",
                "Editor",
                "InstitutionalAuthor",
                "InstitutionalEditor",
                "ProductionEditor"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Publisher",
            "Description": "This is the root element for the complete content model. A publisher is a unit of Springer Science and Business Media or an affiliated partner.The overall content model can be divided into two parts, one providing structure and the other the content.– For a journal, the structure part is given by the elements Publisher, Journal, Volume, Issue and Article, or as represented on a job sheet by the elements are called PublisherInfo, JournalInfo, VolumeInfo, and IssueInfo (containers for metadata). The content of an article is represented by the Body element. The metadata for the article can be found in the ArticleInfo element.– For books, there are the structure elements Series, Book, Part and Chapter. The content is represented by the Body element, which is the same as in the journal context. Each layer in the structure has a container element with all related metadata. These elements are called PublisherInfo, SeriesInfo, BookInfo, and PartInfo. The metadata for the chapter can be found in the ChapterInfo element.For examples of usage for journals and books, see the sample files. In most cases of journals, Publisher, Journal, Volume, and Issue are not the root elements of A++ files.",
            "Parents": [],
            "Children": [
                "Book",
                "BookSet",
                "Journal",
                "PublisherInfo",
                "Series"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PublisherImprintName",
            "Description": "The imprint name of a publisher as rendered on the title page. This differs from the version captured in PublisherName",
            "Parents": [
                "PublisherInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PublisherInfo",
            "Description": "Container for the metadata of a publisher.See Publisher",
            "Parents": [
                "ArticleJobSheet",
                "BookJobSheet",
                "ChapterJobSheet",
                "IssueJobSheet",
                "PartJobSheet",
                "Publisher"
            ],
            "Children": [
                "CoPublisher",
                "PublisherImprintName",
                "PublisherLocation",
                "PublisherLogo",
                "PublisherName",
                "PublisherURL"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PublisherLocation",
            "Description": "The location of the publisher.See Publisher",
            "Parents": [
                "BibBook",
                "BibChapter",
                "PublisherInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PublisherLogo",
            "Description": "Used to capture the logo on the book title page",
            "Parents": [
                "PublisherInfo"
            ],
            "Children": [
                "Figure"
            ]
        }
    },
    {
        "Elements": {
            "Title": "PublisherName",
            "Description": "The name of the publisher.See Publisher",
            "Parents": [
                "BibBook",
                "BibChapter",
                "PublisherInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PublisherURL",
            "Description": "The URL for the web page of the publisher.See Publisher",
            "Parents": [
                "PublisherInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PublishingDiscipline",
            "Description": "Indicates which publishing discipline at Springer is responsible for the book. The value is given as a numeral.",
            "Parents": [
                "EditorialInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PublishingSegment",
            "Description": "Indicates which publishing segment at Springer is responsible for the book. The value is given as a numeral.",
            "Parents": [
                "EditorialInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PublishingUnit",
            "Description": "Indicates which publishing unit at Springer is responsible for the book. The value is given as a numeral.",
            "Parents": [
                "EditorialInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "PurchaseOrderNumber",
            "Description": "If the PurchaseOrderNumber is a child element of CompoundBookObjectInfo or CompoundIssueObjectInfo then it contains a WBS element (German PSP) that is used by Controlling to assign revenue accounts. The printer can use this element in combination with a company number/address table to address the invoice.If the PurchaseOrderNumber is a child element of ReceipientInvoice then it may contain what the author entered in Stage 150 to the field \"Purchase order number\". This will appear later on the invoice that the author receives from fulfillment.",
            "Parents": [
                "CompoundBookObjectInfo",
                "CompoundIssueObjectInfo",
                "OffprintOrder",
                "RecipientInvoice"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotes",
            "Description": "This is a container element for elements containing additional instructions regarding the handling of a book manuscript. The elements possible here contain a book-specific text with special instructions that may modify the default handling of project-specific content. Default texts will not be included that describe standard processing; in this case, the element will not be present.",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": [
                "QualifyingProductionNotesAds",
                "QualifyingProductionNotesCdDvdEsm",
                "QualifyingProductionNotesColorFigures",
                "QualifyingProductionNotesComplimentaryCopies",
                "QualifyingProductionNotesCopyEditing",
                "QualifyingProductionNotesFrontmatter",
                "QualifyingProductionNotesIndex",
                "QualifyingProductionNotesLayout",
                "QualifyingProductionNotesManufacturing",
                "QualifyingProductionNotesManuscriptMaterial",
                "QualifyingProductionNotesMiscellaneous",
                "QualifyingProductionNotesProductionClassification",
                "QualifyingProductionNotesProof",
                "QualifyingProductionNotesSpringerDotCom"
            ]
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesAds",
            "Description": "This particular qualifying note will contain information about the handling of advertisements.For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.See QualifyingProductionNotes",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesCdDvdEsm",
            "Description": "This particular qualifying note will contain information about digital media that are part of the book project. For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.See QualifyingProductionNotes",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesColorFigures",
            "Description": "This particular qualifying note will contain information about the handling of the color figures.For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesComplimentaryCopies",
            "Description": "This particular qualifying note will contain information about additional tasks or the nonstandard handling of complimentary copies.For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.See QualifyingProductionNotes",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesCopyEditing",
            "Description": "This particular qualifying note will contain information about book-sprecific tasks related to copy editing. For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.See QualifyingProductionNotes",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesIndex",
            "Description": "This particular qualifying note will contain information about book-sprecific tasks related to the preparation of the index.For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.See QualifyingProductionNotes",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesLayout",
            "Description": "This particular qualifying note will contain information for the layout of certain projects in the production process.For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesManufacturing",
            "Description": "A deprecated qualifying production note which can no longer be used.\tThis particular qualifying note contained information about book-specific special features with regard to manufacturing, e.g., special binding or lamination.For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.See QualifyingProductionNotes",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesManuscriptMaterial",
            "Description": "This particular qualifying note will contain information the manuscipt material.For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesMiscellaneous",
            "Description": "Used for miscellaneous comments. If this field elememt is not used it is assumed that no other specific requirements for special features exist, e.g. content position, special binding, etc.For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesProductionClassification",
            "Description": "This particular qualifying note will contain information about book-sprecific instructions related to the production classification.For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.See QualifyingProductionNotes",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesProof",
            "Description": "This particular qualifying note will contain information about the handling of the proofs.For general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "QualifyingProductionNotesSpringerDotCom",
            "Description": "This element is used for example if not the standard chapter, but a different one should be available at Springer.com. If this elememt is not used it is assumed that the standard material is to be used for publication on the product site at www.springer.com: table of contents, preface and second chapter/contributionFor general information and usage of the qualitfying production notes, see the element QualifyingProductionNotes.See QualifyingProductionNotes",
            "Parents": [
                "QualifyingProductionNotes"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Quiz",
            "Description": "This is needed for interactive quizzes in the context of enhanced eBooks.",
            "Parents": [
                "Para"
            ],
            "Children": [
                "Heading",
                "QuizTask"
            ]
        }
    },
    {
        "Elements": {
            "Title": "QuizItem",
            "Description": "An item in a QuizTaskSee Quiz",
            "Parents": [
                "QuizTask"
            ],
            "Children": [
                "ItemContent",
                "ItemNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "QuizTask",
            "Description": "A task in a QuizSee Quiz",
            "Parents": [
                "Quiz"
            ],
            "Children": [
                "QuizItem"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Reason",
            "Description": "When used within CopyrightTransfer it explains the acceptance or rejection of Springer's copyright options at stage 150.When used within FixedPublicationDate it explains why a fixed publication date is given, e.g. start date of a conference or exhibition, contractual obligation to deliver a bulk on a specific date, etc.See CopyrightTransfer",
            "Parents": [
                "CopyrightTransfer",
                "FixedPublicationDate"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Received",
            "Description": "The date when an article was received by the editor after first submission by an author.See ArticleHistory",
            "Parents": [
                "ArticleHistory",
                "ChapterHistory"
            ],
            "Children": [
                "Day",
                "Hour",
                "Minute",
                "Month",
                "Second",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "RecipientAddress",
            "Description": "The structured address of the recipient of an invoice, such as for offprints.See RecipientInvoice",
            "Parents": [
                "RecipientInvoice"
            ],
            "Children": [
                "City",
                "Country",
                "OrgDivision",
                "OrgName",
                "Postbox",
                "Postcode",
                "State",
                "Street"
            ]
        }
    },
    {
        "Elements": {
            "Title": "RecipientInvoice",
            "Description": "The recipient of an invoice, such as for offprints",
            "Parents": [
                "DiscreteObjectTechnicalInfo"
            ],
            "Children": [
                "BankAccountInformation",
                "CreditCardInformation",
                "GrossPrice",
                "InvoiceItem",
                "PurchaseOrderNumber",
                "RecipientAddress",
                "RecipientName",
                "VATRegistrationNumber"
            ]
        }
    },
    {
        "Elements": {
            "Title": "RecipientName",
            "Description": "The structured version of the name of the recipient of an invoice, such as for offprints.See RecipientInvoice",
            "Parents": [
                "RecipientInvoice"
            ],
            "Children": [
                "Degrees",
                "FamilyName",
                "GivenName",
                "NativeName",
                "NoGivenName",
                "Particle",
                "Prefix",
                "Suffix"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ReferencePDFStyle",
            "Description": "An instruction which tells the full service vendor (FSV) that the reference PDF should be created differently than usual.See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "RefSource",
            "Description": "The source of an external reference. The content of this element will be rendered as text.See ExternalRef",
            "Parents": [
                "ExternalRef"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "RefTarget",
            "Description": "The target of an external reference. Multiple targets are possible for each external reference.The COMBINATION of the attributes TargetType=\"SearchTerm\" AND Address=\"SpringerLink:ChapterTarget\" should be used FOR REFERENCE WORKS ONLY to avoid inconsistencies on SpringerLink.See ExternalRef",
            "Parents": [
                "ExternalRef"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "RegistrationDate",
            "Description": "This is the date when the article was entered/created in the workflow systems.See ArticleHistory",
            "Parents": [
                "ArticleHistory",
                "ChapterHistory"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "RelatedObjectDOI",
            "Description": "Used to point to the DOI of a related object, e.g., in an erratum this would point to the original article, while in the original article it would point to the erratum.See ArticleRelatedObject",
            "Parents": [
                "ArticleRelatedObject",
                "BookSetRelatedObject",
                "ChapterRelatedObject",
                "IssueRelatedObject"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "RelatedObjectInfo",
            "Description": "Container element for information to be rendered about related articles. Used especially in professional journals, e.g., in an article introducing the main topic of the current issue",
            "Parents": [
                "ArticleRelatedObject",
                "IssueRelatedObject"
            ],
            "Children": [
                "ArticleTitle",
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "RelatedObjectReference",
            "Description": "Container element for the Journal/Volume/Issue information which is needed to point to the related object.See IssueRelatedObject",
            "Parents": [
                "ArticleRelatedObject",
                "IssueRelatedObject"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "RelevantTerm",
            "Description": "An element naming a term that is typical of the content and to be used for semantic linking.See Fingerprint",
            "Parents": [
                "Fingerprint"
            ],
            "Children": [
                "MainTerm",
                "VariantTerm"
            ]
        }
    },
    {
        "Elements": {
            "Title": "RemarkByEditor",
            "Description": "Contains the remarks of the editor of a journal or book concerning the production of the publication (e.g., \"Note handwritten additions on the manuscript.).See ManuscriptInfo",
            "Parents": [
                "ManuscriptInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "RemarkFrom",
            "Description": "Element in which a supplier should enter comments directed to the production editor. Usage is no longer supported in the journal workflow.",
            "Parents": [
                "FullServiceVendor",
                "Printer"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "RemarkTo",
            "Description": "A comment from a Springer production editor to a supplier on a job sheet.",
            "Parents": [
                "FullServiceVendor",
                "Printer"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "RenditionItem",
            "Description": "An empty element within File to reference the PDF file that is the rendered version of a document.See File",
            "Parents": [
                "File"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ReprintNumber",
            "Description": "The number of the printing. Currently not supported. Element to be renamed PrintingNumber.",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Revised",
            "Description": "Date of an article was revised. This must lie between the date of submission (Received) and acceptance. See ArticleHistory",
            "Parents": [
                "ArticleHistory",
                "ChapterHistory"
            ],
            "Children": [
                "Day",
                "Hour",
                "Minute",
                "Month",
                "Second",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Role",
            "Description": "Designation of the function of the author or editor in his professional capacity (e.g., Professor of Chemistry) or in connection with the publication (e.g., Editor-in-Chief).Usage– Journals: The element Role is not used in articles! See AuthorName for further information on usage.",
            "Parents": [
                "Author",
                "Collaborator",
                "Editor"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "row",
            "Description": "A row in a table. It contains all of the cells that appear in that row. On usage, see the entry for Table and the table section in the documentation Creation of A++ (referenced below).The cals element \"entrytbls\" is not supported.See Table",
            "Parents": [
                "tbody",
                "thead"
            ],
            "Children": [
                "entry"
            ]
        }
    },
    {
        "Elements": {
            "Title": "RunningAuthor",
            "Description": "This is the author's name as it appears in the page header of the article. On usage, see PageHeaders.See PageHeaders",
            "Parents": [
                "PageHeaders"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "RunningTitle",
            "Description": "This is the article or chapter title as it appears in the page header of an article or chapter, which can be different from the ArticleTitle. On usage, see PageHeaders.See PageHeaders",
            "Parents": [
                "PageHeaders"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "S200TypesetterDeadline",
            "Description": "The deadline for the delivery of stage 200 to Springer.",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "S300TypesetterDeadline",
            "Description": "The deadline for the delivery of stage 300 to Springer.",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "S50TypesetterDeadline",
            "Description": "The deadline for the delivery of stage 50 to Springer.",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "S600TypesetterDeadline",
            "Description": "The deadline for the delivery of stage 600 to Springer.",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "S650TypesetterDeadline",
            "Description": "The deadline for the delivery of stage 650 to Springer.",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "S700ElectronicDistributionDeadline",
            "Description": "Deadline for online publication and distribution.",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "S700PrinterDeadline",
            "Description": "The deadline for the delivery of hard copy at stage 700 to Springer, i.e., the date by when the printer is supposed to send the delivery to Springer.",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "S800PrintDistributionDeadline",
            "Description": "A container for a year-month-day designation of the deadline for print distribution, i.e., when the product is to be deliveable from the warehouse.",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "S900ElectronicDistributionDeadline",
            "Description": "Deadline for online publication and distribution.",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "ScheduledToPrintDate",
            "Description": "The planned date of delivery of the print data to the printer at stage 700.This element is not yet supported in Springer's book workflow.",
            "Parents": [
                "CompoundObjectProductionHistory"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Second",
            "Description": "Second as part of a date. Valid are the numbers from 0 to 59. Do not use a leading zero.",
            "Parents": [
                "Accepted",
                "Received",
                "Revised"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Secondary",
            "Description": "Secondary contains a secondary word or phrase in an IndexTerm. The text of a Secondary term is less significant than the Primary term, but more significant than the Tertiary term for sorting and display purposes.In IndexTerms, you can only have one primary, secondary, and tertiary term. If you want to index multiple secondary terms for the same Primary, you must repeat Primary in another IndexTerm. You cannot place several Secondarys in the same Primary.See IndexTerm",
            "Parents": [
                "IndexTerm"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SecondaryIE",
            "Description": "SecondaryIE identifies a secondary word or words in an IndexEntry.In IndexEntry, you can specify as many secondary terms that are necessary. Secondary and tertiary terms can be mixed, following the primary.  See Index",
            "Parents": [
                "IndexEntry"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Section1",
            "Description": "A top-level section of a document. There are seven levels of sections defined, but in most products only a limited number of levels are permitted.",
            "Parents": [
                "AdContactText",
                "AimsAndScope",
                "Appendix",
                "Body",
                "CopyrightText",
                "Editors",
                "ElectronicEditionText",
                "FutureToC",
                "JournalInstructions",
                "ProductionText",
                "SocietyText",
                "SubscriptionText",
                "TechnicalInstructions"
            ],
            "Children": [
                "AuthorGroup",
                "Figure",
                "FormalPara",
                "Heading",
                "MediaObject",
                "Para",
                "Section2",
                "SectionClassification",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Section2",
            "Description": "A subsection within a Section1See Section1",
            "Parents": [
                "Section1"
            ],
            "Children": [
                "AuthorGroup",
                "Figure",
                "FormalPara",
                "Heading",
                "MediaObject",
                "Para",
                "Section3",
                "SectionClassification",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Section3",
            "Description": "A subsection within a Section2See Section1",
            "Parents": [
                "Section2"
            ],
            "Children": [
                "AuthorGroup",
                "Figure",
                "FormalPara",
                "Heading",
                "MediaObject",
                "Para",
                "Section4",
                "SectionClassification",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Section4",
            "Description": "A subsection within a Section3See Section1",
            "Parents": [
                "Section3"
            ],
            "Children": [
                "Figure",
                "FormalPara",
                "Heading",
                "MediaObject",
                "Para",
                "Section5",
                "SectionClassification",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Section5",
            "Description": "A subsection within a Section4. See Section1",
            "Parents": [
                "Section4"
            ],
            "Children": [
                "Figure",
                "FormalPara",
                "Heading",
                "MediaObject",
                "Para",
                "Section6",
                "SectionClassification",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Section6",
            "Description": "A subsection within a Section5See Section1",
            "Parents": [
                "Section5"
            ],
            "Children": [
                "Figure",
                "FormalPara",
                "Heading",
                "MediaObject",
                "Para",
                "Section7",
                "SectionClassification",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Section7",
            "Description": "A subsection within a Section6This is the lowest-level numbered sectioning element. See Section1",
            "Parents": [
                "Section6"
            ],
            "Children": [
                "Figure",
                "FormalPara",
                "Heading",
                "MediaObject",
                "Para",
                "SectionClassification",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SectionClassification",
            "Description": "A container at the section level either for a group of values or for individual values that indicate a semantic relationship. See also ClassificationGroup.See also ArticleClassification and ChapterClassification.",
            "Parents": [
                "Section1",
                "Section2",
                "Section3",
                "Section4",
                "Section5",
                "Section6",
                "Section7"
            ],
            "Children": [
                "CharacteristicValue",
                "ClassificationGroup"
            ]
        }
    },
    {
        "Elements": {
            "Title": "See",
            "Description": "The use of See in an IndexTerm directs the reader to look elsewhere in the index to locate discussion of a topic (term). The content of See identifies the term that the reader should consult instead of the current one.Do not use \"See\" in this element, since this is added automatically when the A++ is converted into an output format.See Index",
            "Parents": [
                "IndexTerm"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SeeAlso",
            "Description": "The use of SeeAlso in an IndexTerm directs the reader to also look elsewhere in the index to locate additional information related to a topic (term). The content of See identifies another term that the reader should consult in addition to the current one.This element provides data for processing, but is not rendered in the running text, for example, of a chapter.Do not use \"See also\" in this element, since this is added automatically when the A++ is converted into an output format.See Index",
            "Parents": [
                "IndexTerm"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SeeAlsoIE",
            "Description": "SeeAlsoIE identifies a \"See also\" cross-reference in an IndexEntry. IndexEntry occurs in an Index, not in the running text of, for example, a chapter. They are part of a rendered index, not markers for indexing.Do not use \"See also\" in this element, since this is added automatically when the A++ is converted into an output format.See Index",
            "Parents": [
                "IndexEntry"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SeeIE",
            "Description": "SeeIE identifies a \"See\" cross reference in an IndexEntry. IndexEntry occurs in an Index, not in the running text of, for example, a chapter. They are part of a rendered index, not markers for indexing.Do not use \"See\" in this element, since this is added automatically when the A++ is converted into an output format.See Index",
            "Parents": [
                "IndexEntry"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SentToPrintDate",
            "Description": "A container element for the date when an object is sent to the printer.Not yet supported in Springer's book workflow.",
            "Parents": [
                "CompoundObjectProductionHistory"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Series",
            "Description": "The root element for a book series.Chapters not assigned to a specific book/volume are placed in the BookOnlineFirst context.",
            "Parents": [
                "Publisher"
            ],
            "Children": [
                "Book",
                "BookOnlineFirst",
                "BookSet",
                "SeriesHeader",
                "SeriesIndex",
                "SeriesInfo",
                "SubSeries",
                "Toc"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SeriesAbbreviatedTitle",
            "Description": "The abbreviated title of a book series.Usage in eBook/POD deliveries:The full-service vendor should not capture this information.See SeriesInfo",
            "Parents": [
                "SeriesInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SeriesElectronicISSN",
            "Description": "The ISSN for the electronic version of a book series.See SeriesInfo",
            "Parents": [
                "SeriesInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SeriesHeader",
            "Description": "A container for the header of a book series, such as for the names of the series editors.Do not use the following elements permitted by the DTD: LegalNotice, Abstract, KeywordGroup, AbbreviationGroup. Use of these elements will produce an error in the content checker.",
            "Parents": [
                "BookJobSheet",
                "Series"
            ],
            "Children": [
                "AbbreviationGroup",
                "Abstract",
                "AuthorGroup",
                "CollaboratorGroup",
                "EditorGroup",
                "KeywordGroup",
                "LegalNotice",
                "SeriesInformationText"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SeriesID",
            "Description": "The identifier for a book series.This is an identifier used internally at Springer. It must be numerical without leading zeros.Usage in eBook/POD deliveries:The full-service vendor should capture this information from the printing order.See SeriesInfo",
            "Parents": [
                "BookContext",
                "ChapterContext",
                "PartContext",
                "SeriesInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SeriesIndex",
            "Description": "An index for a book series.",
            "Parents": [
                "Series"
            ],
            "Children": [
                "Heading",
                "IndexDiv",
                "IndexEntry",
                "SubHeading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SeriesInfo",
            "Description": "A container element for the metadata related to a book series.",
            "Parents": [
                "BookJobSheet",
                "ChapterJobSheet",
                "Series"
            ],
            "Children": [
                "SeriesAbbreviatedTitle",
                "SeriesElectronicISSN",
                "SeriesID",
                "SeriesPrintISSN",
                "SeriesSubTitle",
                "SeriesTitle",
                "SubjectCollection"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SeriesInformationText",
            "Description": "A text containing a short description of the book series (such as the Aims and Scope text) to be included in the book frontmatter. Any longer text containing series information is only shown online or moved to the backmatter",
            "Parents": [
                "SeriesHeader"
            ],
            "Children": [
                "Para"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SeriesPrintISSN",
            "Description": "The ISSN for the print version of a book series.Usage in eBook/POD deliveries:The full-service vendor should capture this information from the printing order if it is available.See SeriesInfo",
            "Parents": [
                "SeriesInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SeriesSubTitle",
            "Description": "The subtitle of a book series.",
            "Parents": [
                "SeriesInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SeriesTitle",
            "Description": "The title of a book series.See SeriesInfo",
            "Parents": [
                "BibBook",
                "BibChapter",
                "SeriesInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Share",
            "Description": "The number of printed copies of a publication that are to be printed for one region.See Shares",
            "Parents": [
                "Shares"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Shares",
            "Description": "A container element for information about the shares of a printing that are requested for different regions.",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": [
                "Share"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Sidebar",
            "Description": "A Sidebar is a short piece of text/content that is rendered outside the running text, usually in the margin. They are frequently used to highlight passages or include short marginal summaries.Usage: The element Sidebar is not used in archive journals, only in magazine-type journals (FAZ) and books.\n\t\t\tIn the FAZ, Sidebars of the Type \"Lexicon\" are rendered with a right-pointing arrowhead. This symbol must be repeated in the text immediately before the InternalRef pointing to the Sidebar.",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "ForewordTitle",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": [
                "Para"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SimplePara",
            "Description": "A paragraph with a reduced content model.",
            "Parents": [
                "Acknowledgments",
                "ArticleNote",
                "BookCoverFigureText",
                "CaptionContent",
                "CopyrightComment",
                "Dedication",
                "entry",
                "Ethics",
                "GlossaryDef",
                "License",
                "RelatedObjectInfo",
                "SponsorNote",
                "SupplementNote",
                "tfooter"
            ],
            "Children": [
                "CitationRef",
                "Emphasis",
                "ExternalRef",
                "Figure",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "InternalRef",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript",
                "Table"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SocietyText",
            "Description": "Text from the publisher that is part of a journal's A pages concerning a society related to a journal.",
            "Parents": [
                "EditorialTexts"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SPACEInfo",
            "Description": "A container for  metadata of a publication object (Article, Issue, Chapter, Part or Book)  on a job sheet. SPACE (Springer Advanced Content Management Environment) is the name of the first content and workflow management system Springer used. These metadata may not be modified by a supplier on the job sheet!See ProductionInfo",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SpecialShippingRemark",
            "Description": "tbd",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SpineWidth",
            "Description": "Important note: This element must be used in Springer's Book Workflow! It should not yet be used in Springer's Journal Workflow!Information on the spine width of a book should be captured here. The value should be given in millimeters.The element must be repeated in multi-volume works in order to capture the spine width of each volume.The element replaces the previously used attribute \"SpineWidth\" under CoverProductionInfo. After implementation of this element, the previously used attribute should no longer be used. It will be retained in legacy data",
            "Parents": [
                "CoverProductionInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SplittingNumberOfAPageObjects",
            "Description": "The projected number of objects to be created during the discrete phase of the book workflow for the items in a book's front and back matter.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SplittingNumberOfParts",
            "Description": "The projected number of parts to be created during the discrete phase of the book workflow.See CompoundObjectTechnicalInfo",
            "Parents": [
                "CompoundObjectTechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SponsorNote",
            "Description": "An element for issue sponsorship information.See SupplementInfo",
            "Parents": [
                "BookInfo",
                "SupplementInfo"
            ],
            "Children": [
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SpringerLocationsLine",
            "Description": "Used on a book copyright page for the line of publisher locations.In Springer publications, this is most commonly the list of Springer locations. Occasionally, where the copyright holder is not Springer, the location of the copyright holder may appear here instead.",
            "Parents": [
                "BookCopyright"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SpringerReferenceLine",
            "Description": "For the copyright page entry referring to Springer. See example.",
            "Parents": [
                "BookCopyright"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Stack",
            "Description": "Indicates that the text should be displayed with subscript and superscript vertically aligned.",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookFeatureText",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "CatalogingInformation",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "ChinaNumber",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "EquationSource",
                "ForewordTitle",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": [
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "State",
            "Description": "The name of a state(or province) as part of an address. This is to be used where this is an integral part of an address.See OrgAddress",
            "Parents": [
                "Contact",
                "DispatcherAddress",
                "OffprintAddress",
                "OrgAddress",
                "RecipientAddress"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Street",
            "Description": "The name of a street (and house number) as part of an address.See OrgAddress",
            "Parents": [
                "Contact",
                "DispatcherAddress",
                "OffprintAddress",
                "OrgAddress",
                "RecipientAddress"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "StructuredAbstract",
            "Description": "An instruction as to whether the abstract in the document language should be structured or not. It does not apply to abstracts captured in XML but not rendered in PDF (i.e., that are only for online display).See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "StyleInfo",
            "Description": "A container element for journal-specific information needed for generation of XML, TeX, or PDF data.See DiscreteObjectTechnicalInfo",
            "Parents": [
                "DiscreteObjectTechnicalInfo"
            ],
            "Children": [
                "MarkupProfile",
                "PrepressProfile"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubHeading",
            "Description": "A subheading in an index, glossary, or any kind of contents list.See Index",
            "Parents": [
                "Glossary",
                "GlossarySection",
                "Index",
                "IndexDiv",
                "Loc",
                "LocDiv",
                "Loh",
                "SeriesIndex",
                "SubSeriesIndex",
                "Toc",
                "TocAppendix",
                "TocChapter"
            ],
            "Children": [
                "CitationRef",
                "Emphasis",
                "ExternalRef",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "InternalRef",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubjectCollection",
            "Description": "The discipline that is used as the online library at SpringerLink.Usage in eBook/POD deliveries:The full-service vendor should not capture this information. It is inserted only at Springer.See BookSubjectGroup",
            "Parents": [
                "BookSubjectGroup",
                "JournalSubjectGroup",
                "SeriesInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SubPart",
            "Description": "A part embedded within a part. Each such part can contain a number of component-level elements (chapters, front matter, and back matter).SubParts cannot be used recursively. Such lower levels of hierarchy are not captured.For further information, see Part.See PartHeader",
            "Parents": [
                "Part"
            ],
            "Children": [
                "BookBackmatter",
                "BookFrontmatter",
                "Chapter",
                "SubPartHeader",
                "SubPartInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubPartChapterCount",
            "Description": "The number of chapters in a subpart.Usage in eBook/POD deliveries:Capture the number of Chapter elements in the subpart.See SubPartInfo",
            "Parents": [
                "SubPartInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SubPartHeader",
            "Description": "Container for header information for a subpart.Usage in eBook/POD deliveries:Capture all of the relevant information for AuthorGroup, EditorGroup, or KeywordGroup.",
            "Parents": [
                "SubPart"
            ],
            "Children": [
                "AbbreviationGroup",
                "Abstract",
                "ArticleNote",
                "AuthorGroup",
                "CollaboratorGroup",
                "EditorGroup",
                "KeywordGroup"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubPartID",
            "Description": "SubPartID is one the part identifiers. The value captured should be the same as the numerical portion of the entry for the ID attribute of SubPart.See PartInfo for information on the different part numbers and identifiers.Usage in eBook/POD deliveries:The entry should be a simple digit that is unique within the book, starting with \"1\" for each book. It should be the digit portion of the entry for the attribute ID of SubPart.See SubPartInfo",
            "Parents": [
                "ChapterContext",
                "SubPartInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SubPartInfo",
            "Description": "The container for metadata of a subpart in a book.The identifiers and numbers given for subparts should follow the same type of usage as for parts:– SubPartNumber is used if the part number is to be rendered, producing for example \"3\".  This element is otherwise not used.– SubPart ID, i.e., the ID attribute of SubPart, should be \"SubPart[digit]\", producing for example <SubPart ID=\"Part3\">. This entry is purely an identifier.– SubPartID should be the \"[digit]\" used in the attribute ID of SubPart.",
            "Parents": [
                "SubPart"
            ],
            "Children": [
                "SubPartChapterCount",
                "SubPartID",
                "SubPartNumber",
                "SubPartSequenceNumber",
                "SubPartSubTitle",
                "SubPartTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubPartNumber",
            "Description": "The number of the subpart. It is only present if it is to be rendered, producing for example \"Part 3.\" SubPartNumber should not be used if no number is to be rendered.See SubPartInfo for information on usage of the various part identifiers and numbers.See SubPartInfo",
            "Parents": [
                "SubPartInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SubPartSequenceNumber",
            "Description": "This number represents the position of a subpart within a book (not within an individual part). This information is never rendered.The entry should be a simple digit (or digits) that is unique within the book, starting with \"1\".See SubPartInfo",
            "Parents": [
                "SubPartInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SubPartSubTitle",
            "Description": "A subtitle of a subpart.See SubPartInfo",
            "Parents": [
                "SubPartInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubPartTitle",
            "Description": "The title of a subpart.See SubPartInfo",
            "Parents": [
                "SubPartInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Subscript",
            "Description": "Subscript identifies text that is to be displayed as a subscript when rendered.",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookFeatureText",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "CatalogingInformation",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "ChinaNumber",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "EquationSource",
                "ForewordTitle",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "Stack",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": [
                "Emphasis"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubscriptionText",
            "Description": "Information from the publisher about subscribing to a journal as included in the A pages.See ImprintTexts",
            "Parents": [
                "ImprintTexts"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubSeries",
            "Description": "A series that is part of another series.",
            "Parents": [
                "Series"
            ],
            "Children": [
                "Book",
                "BookOnlineFirst",
                "BookSet",
                "SubSeriesHeader",
                "SubSeriesIndex",
                "SubSeriesInfo",
                "Toc"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubSeriesAbbreviatedTitle",
            "Description": "The abbreviated title of a book subseries.See SubSeriesInfo",
            "Parents": [
                "SubSeriesInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SubSeriesHeader",
            "Description": "A container for the header of a book subseries, such as for the names of the series editors.",
            "Parents": [
                "SubSeries"
            ],
            "Children": [
                "AuthorGroup",
                "CollaboratorGroup",
                "EditorGroup"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubSeriesID",
            "Description": "An identifier for a book subseries.This is an identifier used internally at Springer (taken from BFlow). It must be numerical without leading zeros.See SubSeriesInfo",
            "Parents": [
                "BookContext",
                "ChapterContext",
                "PartContext",
                "SubSeriesInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SubSeriesIndex",
            "Description": "An index for a book subseriesSee SeriesIndex",
            "Parents": [
                "SubSeries"
            ],
            "Children": [
                "Heading",
                "IndexDiv",
                "IndexEntry",
                "SubHeading"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubSeriesInfo",
            "Description": "A container element for the metadata related to a book subseries.See SeriesInfo",
            "Parents": [
                "BookJobSheet",
                "SubSeries"
            ],
            "Children": [
                "SubSeriesAbbreviatedTitle",
                "SubSeriesElectronicISSN",
                "SubSeriesID",
                "SubSeriesPrintISSN",
                "SubSeriesSubTitle",
                "SubSeriesTitle"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubSeriesPrintISSN",
            "Description": "The ISSN for the print version of a book subseries.See SubSeriesInfo",
            "Parents": [
                "SubSeriesInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "SubSeriesSubTitle",
            "Description": "The subtitle of a book subseries.",
            "Parents": [
                "SubSeriesInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SubSeriesTitle",
            "Description": "The title of a book subseries.See SubSeriesInfo",
            "Parents": [
                "SubSeriesInfo"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Suffix",
            "Description": "Suffix is an appendage to a name, e.g., Jr. or Sr.The possible entries are currently limited to Jr, Jr., Sr, Sr., II, III, IV, V, II., III., IV., V., 2d, 2nd, 3d, 3rd, 4th, and 5th.",
            "Parents": [
                "AuthorName",
                "BibAuthorName",
                "BibEditorName",
                "CollaboratorName",
                "ContactPersonName",
                "CopyEditorName",
                "EditorName",
                "OffprintRecipientName",
                "ProductionEditorName",
                "ProofContactName",
                "ProofCoRecipientName",
                "RecipientName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Superscript",
            "Description": "Superscript identifies text that is to be displayed as a superscript when rendered.",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookFeatureText",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "CatalogingInformation",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "ChinaNumber",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "EquationSource",
                "ForewordTitle",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "Para",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "Stack",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": [
                "Emphasis"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SupplementInfo",
            "Description": "A container element for supplement-related information.",
            "Parents": [
                "IssueInfo",
                "ProductionInfo"
            ],
            "Children": [
                "ConferenceInfo",
                "SponsorNote",
                "SupplementNote"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SupplementNote",
            "Description": "An element for free text information on the supplement, for example a brief introduction.See SupplementInfo",
            "Parents": [
                "SupplementInfo"
            ],
            "Children": [
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Supplier",
            "Description": "This is a container element on a job sheet for information to and from an external supplier.",
            "Parents": [
                "WorkflowInfo"
            ],
            "Children": [
                "Application",
                "AuthorQueryApplication",
                "ExternalPublisher",
                "FullServiceVendor",
                "Printer"
            ]
        }
    },
    {
        "Elements": {
            "Title": "SupportingItem",
            "Description": "Currently not supported. Do not use.",
            "Parents": [
                "File"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Table",
            "Description": "This is the top level element for a table.The complete CALS table model in included into the A++ DTD. To retain compatibility with the CALS standard, the element names within a table are left in lowercase letters.Only a subset of the CALS table model is actually used. See the section on tables in the documentation n Creation of A++ (referenced below) for instructions specific to Springer's use of the CALS model.",
            "Parents": [
                "Abstract",
                "AbstractSection",
                "BlockQuote",
                "Body",
                "Para",
                "Section1",
                "Section2",
                "Section3",
                "Section4",
                "Section5",
                "Section6",
                "Section7",
                "SimplePara"
            ],
            "Children": [
                "Caption",
                "MediaObject",
                "tfooter",
                "tgroup"
            ]
        }
    },
    {
        "Elements": {
            "Title": "tbody",
            "Description": "The tbody wrapper identifies the rows of a table that form the body of the table, as distinct from the header (thead) and footer (tfoot) rows.In most tables, the tbody contains most of the rows.See Table",
            "Parents": [
                "tgroup"
            ],
            "Children": [
                "row"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TechnicalInfo",
            "Description": "A container element for technical instructions about editing and rendering content needed by a full-service vendor.",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": [
                "AbstractAdditionalLanguage",
                "AbstractInDocumentLanguage",
                "AuthorInformationStyle",
                "BibliographyStyle",
                "Binding",
                "BodyMarkup",
                "BookComponents",
                "CaptionAdditionalLanguage",
                "CitationStyle",
                "ClassificationStyle",
                "ColorSpecifications",
                "CoverProductionInfo",
                "FormatTrimSize",
                "HistoryStyle",
                "Inserts",
                "KeywordsAdditionalLanguage",
                "KeywordsInDocumentLanguage",
                "NumberOfVolumes",
                "PeerReviewPDFsStyle",
                "ReferencePDFStyle",
                "SpecialShippingRemark",
                "StructuredAbstract",
                "TextSpecifications",
                "TitleAdditionalLanguage",
                "TitleUpperCase",
                "TocInfo",
                "Typesetting"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TechnicalInstructions",
            "Description": "Further going technical instructions for authors about preparing a manuscript that a part of the A pages.See ImprintTexts",
            "Parents": [
                "AuthorInstructions"
            ],
            "Children": [
                "FormalPara",
                "Heading",
                "Para",
                "Section1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Term",
            "Description": "The Term in a DefinitionListEntry identifies what is described, explained, or defined by that entry.See DefinitionList",
            "Parents": [
                "DefinitionListEntry"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Tertiary",
            "Description": "Tertiary contains a third-level word or phrase in an IndexTerm. The text of a Tertiary term is less significant than the Primary and Secondary terms for sorting and display purposes.You cannot use IndexTerms to construct indexes with more than three levels.In IndexTerms, you can only have one primary, secondary, and tertiary term. If you want to index multiple tertiary terms for the same primary and secondary, you must repeat the primary and secondary in another IndexTerm. You cannot place several Tertiarys in the same primary.See IndexTerm",
            "Parents": [
                "IndexTerm"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TertiaryIE",
            "Description": "TertiaryIE identifies a third-level word or words in an IndexEntry.In IndexEntry, you can specify as many tertiary terms that are necessary. Secondary and tertiary terms can be mixed, following the primary.See Index",
            "Parents": [
                "IndexEntry"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TextFile",
            "Description": "Currently not supported. Do not use.",
            "Parents": [
                "File"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "TextObject",
            "Description": "A TextObject is a wrapper containing a textual description of a media object.TextObjects are only allowed in MediaObjects as a fall-back option. They may not be the primary content.See MediaObject",
            "Parents": [
                "InlineMediaObject",
                "MediaObject"
            ],
            "Children": [
                "Para"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TextSpecifications",
            "Description": "A container element for various instructions relevant to format and printing.Note that the millimeter values are definitive; other values, such as in inches, are approximations.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "tfooter",
            "Description": "A table footer contains text that appears below the body of the table, such as a footnote or explanatory text.See Table",
            "Parents": [
                "Table"
            ],
            "Children": [
                "SimplePara"
            ]
        }
    },
    {
        "Elements": {
            "Title": "tgroup",
            "Description": "A tgroup surrounds a logically complete portion of a table. Most tables consist of a single tgroup, but complex tables may be easier to code using multiple tgroups. As used at Springer, each tgroup in a table must be structurally similar (i.e., consist of the same overall number of columns), and only one tfooter should be present. See the section on tables in the documentation Creation of A++ (referenced below) for instructions specific to Springer's use of the CALS model.The tgroup specifies the number of columns in the table, and contains all of the header, body, and footer rows, along with any additional column or span specifications necessary to express the geometry of the table.Most of the properties of rows, columns, and cells inherit their default characteristics from the enclosing tgroup.The cals element \"spanspec\" is not supported.See Table",
            "Parents": [
                "Table"
            ],
            "Children": [
                "colspec",
                "tbody",
                "thead"
            ]
        }
    },
    {
        "Elements": {
            "Title": "thead",
            "Description": "The thead wrapper identifies the rows of a table that form the head of the table, as distinct from the body (tbody) and foot (tfoot) rows.Header rows are always rendered at the beginning of the table.See Table",
            "Parents": [
                "tgroup"
            ],
            "Children": [
                "row"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Timestamp",
            "Description": "tbd",
            "Parents": [
                "CopyrightTransfer"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "TitleAdditionalLanguage",
            "Description": "An instruction as to whether a title that is not in the language of the manuscript is to be included in the PDF versions of a publication. If no additional titles are to be captured, the element itself is not included.See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "TitleUpperCase",
            "Description": "An instruction as to which capitalization style to use for a title (e.g., of an article or a chapter) and any section headings. See TechnicalInfo",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "ToBeCompleted",
            "Description": "This element is present on a job sheet as a child of the element FilesToPublisher if the publisher expects content files to be returned by the supplier.See Supplier",
            "Parents": [
                "FilesToPublisher"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Toc",
            "Description": "The Toc element defines a table of contents in a document.The general structure of elements in a Toc is analogous to the structure of the document it refers to. For example, a Toc for a Book can contain TocFront elements for the front matter of the book, TocChapter elements for the body of the book, TocPart elements for the parts within the body of the book, and TocBack elements for the back matter. Inside each of these are additional elements reflecting the structure of each component.Usage:– The table of contents is generated in a publication or a document from the instance's XML data according to the value of the attribute TocLevels in Book, Chapter, or Article.– The value for TocLevels in ChapterInfo and ArticleInfo indicates whether a Toc should be generated (TocLevels=\"0\" means no ToC), and if so, how many levels.– A Toc should as a rule always be generated at book level, thus the value for TocLevels in BookInfo does not indicate whether it should be generated but rather indicates how many headings from chapter sections are to be included. TocLevels=\"0\" means the part and chapter titles are included but no headings from any sections, and TocLevels=\"2\" means that the headings from Section1 and Section2 should be included. TocLevels should not be used in IssueInfo, PartInfo, SeriesInfo, and VolumeInfo.",
            "Parents": [
                "BodyFrontmatter",
                "IssueBackmatter",
                "IssueFrontmatter",
                "Series",
                "SubSeries",
                "Volume"
            ],
            "Children": [
                "Heading",
                "SubHeading",
                "TocBack",
                "TocChapter",
                "TocFront",
                "TocPart"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocAppendix",
            "Description": "An entry in an appendix table of contents. An author name is optionally possible in addition to the heading.",
            "Parents": [
                "Appendix"
            ],
            "Children": [
                "Author",
                "Heading",
                "InstitutionalAuthor",
                "SubHeading",
                "TocEntry",
                "TocSection1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocBack",
            "Description": "The Tocback element is a chapter-level Toc element for back matter (such as bibliography or glossary).See Toc",
            "Parents": [
                "Toc"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocChapter",
            "Description": "An entry in a chapter table of contents. An author name is optionally possible in addition to the chapter title.",
            "Parents": [
                "ArticleHeader",
                "BookBackmatterHeader",
                "BookFrontmatterHeader",
                "ChapterHeader",
                "Toc",
                "TocPart"
            ],
            "Children": [
                "Author",
                "Heading",
                "InstitutionalAuthor",
                "SubHeading",
                "TocEntry",
                "TocSection1"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocEntry",
            "Description": "A TocEntry contains the title of an entry in a Toc.For products where the entries are linked, the element TocEntry contains an ExternalRef element.See Toc",
            "Parents": [
                "TocAppendix",
                "TocChapter",
                "TocPart",
                "TocSection1",
                "TocSection2",
                "TocSection3",
                "TocSection4",
                "TocSection5",
                "TocSection6",
                "TocSection7"
            ],
            "Children": [
                "Emphasis",
                "ExternalRef",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocFront",
            "Description": "An entry in a table of contents for a front matter component.See Toc",
            "Parents": [
                "Toc"
            ],
            "Children": [
                "Emphasis",
                "Footnote",
                "GlossaryTerm",
                "IndexTerm",
                "InlineEquation",
                "InlineMediaObject",
                "Literal",
                "Sidebar",
                "Stack",
                "Subscript",
                "Superscript"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocInfo",
            "Description": "An instruction describing how a table of contents is to be included in the PDF versions of a publication.",
            "Parents": [
                "TechnicalInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "TocPart",
            "Description": "An entry in a table of contents for a part of a book. An author entry is optionally possible in addition to the part title.",
            "Parents": [
                "Toc"
            ],
            "Children": [
                "Author",
                "InstitutionalAuthor",
                "TocChapter",
                "TocEntry"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocSection1",
            "Description": "A top-level entry within a table of contents entry for a chapterlike component.See Toc",
            "Parents": [
                "TocAppendix",
                "TocChapter"
            ],
            "Children": [
                "TocEntry",
                "TocSection2"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocSection2",
            "Description": "A second-level entry within a table of contents entry for a chapterlike component.See Toc",
            "Parents": [
                "TocSection1"
            ],
            "Children": [
                "TocEntry",
                "TocSection3"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocSection3",
            "Description": "A third-level entry within a table of contents entry for a chapterlike component.See Toc",
            "Parents": [
                "TocSection2"
            ],
            "Children": [
                "TocEntry",
                "TocSection4"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocSection4",
            "Description": "A fourth-level entry within a table of contents entry for a chapterlike component.See Toc",
            "Parents": [
                "TocSection3"
            ],
            "Children": [
                "TocEntry",
                "TocSection5"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocSection5",
            "Description": "A fifth-level entry within a table of contents entry for a chapterlike component.See Toc",
            "Parents": [
                "TocSection4"
            ],
            "Children": [
                "TocEntry",
                "TocSection6"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocSection6",
            "Description": "A sixth-level entry within a table of contents entry for a chapterlike component.See Toc",
            "Parents": [
                "TocSection5"
            ],
            "Children": [
                "TocEntry",
                "TocSection7"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TocSection7",
            "Description": "A seventh-level entry within a table of contents entry for a chapterlike component.See Toc",
            "Parents": [
                "TocSection6"
            ],
            "Children": [
                "TocEntry"
            ]
        }
    },
    {
        "Elements": {
            "Title": "TrademarkQualifierText",
            "Description": "A text on the book copyright page qualifying the use of trademarks in the text.",
            "Parents": [
                "BookCopyright"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "TypesetterDeadline",
            "Description": "Container element for the deadline for the preparation and delivery of the print PDF of, for example, an issue.In Springer's book workflow, this element will not be used as of version 1.1, where it is replaced by stage-specific elements.See WorkflowInfo",
            "Parents": [
                "Deadline"
            ],
            "Children": [
                "Day",
                "Month",
                "Year"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Typesetting",
            "Description": "A container element for various instructions related to typesetting.",
            "Parents": [
                "CompoundObjectTechnicalInfo",
                "TechnicalInfo"
            ],
            "Children": [
                "EndsheetsContentOnPage"
            ]
        }
    },
    {
        "Elements": {
            "Title": "UnorderedList",
            "Description": "In an UnorderedList, the entries (items) are not marked to be in a sequence. As a rule, they are rendered with a symbol, specified by the Mark attribute. As a rule, the entry for Mark is Dash; the rendering style sheet of the publication may request that a different symbol be used.",
            "Parents": [
                "Para"
            ],
            "Children": [
                "Heading",
                "ItemContent"
            ]
        }
    },
    {
        "Elements": {
            "Title": "URL",
            "Description": "A URL, such as  an author's personal URL in contact information or in the bibliography within occurrence.",
            "Parents": [
                "Affiliation",
                "Contact",
                "Occurrence"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "VariantTerm",
            "Description": "An element naming the variants of a term that is typical of the content and to be used for semantic linking.The main term is stored in the element MainTerm, the variants (e.g. the plural form) are stored in the element VariantTerm.See Fingerprint",
            "Parents": [
                "DisplayTerm",
                "RelevantTerm"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "VATRegistrationNumber",
            "Description": "The value added tax registration number is used to transfer a VAT ID in a job sheet at stage 150.See RecipientInvoice",
            "Parents": [
                "RecipientInvoice"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "VideoObject",
            "Description": "VideoObject contains a reference to a video file.Usage (see also the example):1. Note that MediaObject, the parent of VideoObject, should be in a Para. Do not use InlineMediaObject.2. A Caption for the object must come immediately subordinate to VideoObject; it must contain a descriptive text caption.See Appendix",
            "Parents": [
                "InlineMediaObject",
                "MediaObject"
            ],
            "Children": [
                "Caption"
            ]
        }
    },
    {
        "Elements": {
            "Title": "Volume",
            "Description": "The volume level in a journal hierarchy.",
            "Parents": [
                "Journal"
            ],
            "Children": [
                "Issue",
                "Toc",
                "VolumeInfo"
            ]
        }
    },
    {
        "Elements": {
            "Title": "VolumeID",
            "Description": "The number of the volume as in a structured reference.See VolumeInfo",
            "Parents": [
                "BibArticle",
                "BibIssue"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "VolumeIDEnd",
            "Description": "The volume number, or specifically the final part of a possible range. If there is no range, repeat the value for VolumeIDStart.See VolumeInfo",
            "Parents": [
                "ArticleContext",
                "VolumeInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "VolumeIDStart",
            "Description": "The volume number, or specifically the initial part of a possible range.See VolumeInfo",
            "Parents": [
                "ArticleContext",
                "VolumeInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "VolumeInfo",
            "Description": "A container for the metadata for a journal volume.",
            "Parents": [
                "IssueJobSheet",
                "Volume"
            ],
            "Children": [
                "VolumeIDEnd",
                "VolumeIDStart",
                "VolumeIssueCount"
            ]
        }
    },
    {
        "Elements": {
            "Title": "VolumeIssueCount",
            "Description": "Number of regular and combined issues contained in a volume, where the combined issues always are counted as the number of regular issues they represent.Does not include any supplements!See VolumeInfo",
            "Parents": [
                "VolumeInfo"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "VolumePackageID",
            "Description": "The ID of a volume package. See the attribute SeriesType of SeriesInfo.This element is currently not used.",
            "Parents": [
                "BookContext",
                "ChapterContext",
                "PartContext"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "WorkflowInfo",
            "Description": "Container element for instructions to suppliers or users for the production workflow, especially regarding deadlines and deliverables.See ProductionInfo",
            "Parents": [
                "ProductionInfo"
            ],
            "Children": [
                "Deadline",
                "Priority",
                "Supplier"
            ]
        }
    },
    {
        "Elements": {
            "Title": "WorkItem",
            "Description": "A container for references to some types of delivered files, such as PitStopReport, the ReferencePDF, the DeltaPDF, the AuthorFeedback file, the OffprintOrder, and the CopyrightTransfer statementSee File",
            "Parents": [
                "File"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "Year",
            "Description": "The year as represented by a four-digit entry; all four digits must be included. Currently supported are years in the range from \"1842\" to \"2100\".",
            "Parents": [
                "Accepted",
                "BibArticle",
                "BibBook",
                "BibChapter",
                "BibIssue",
                "ConfEventDateEnd",
                "ConfEventDateStart",
                "CoverDate",
                "CreditCardValidity",
                "EmbargoDate",
                "EventDate",
                "FixedPublicationDate",
                "OnlineDate",
                "OnlineFirstDeadline",
                "PlannedPublicationDate",
                "PrintDate",
                "PrinterDeadline",
                "ProductionEvent",
                "Received",
                "RegistrationDate",
                "Revised",
                "S200TypesetterDeadline",
                "S300TypesetterDeadline",
                "S50TypesetterDeadline",
                "S600TypesetterDeadline",
                "S650TypesetterDeadline",
                "S700ElectronicDistributionDeadline",
                "S700PrinterDeadline",
                "S800PrintDistributionDeadline",
                "S900ElectronicDistributionDeadline",
                "ScheduledToPrintDate",
                "SentToPrintDate",
                "TypesetterDeadline"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%AbstractTextBlockModel;",
            "Description": "Text blocks allowed within an abstract.Para | Figure | MediaObject | TableAbstractTextBlockModel occurs in:\n\t\t\t      Abstract, AbstractSection",
            "Parents": [
                "Abstract",
                "AbstractSection"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%AddressModel;",
            "Description": "Content model for addresses. The differences in usage can be found in the descriptions given for each of the parent elements.Street | Postbox | Postcode | City | State | CountryAddressModel occurs in:\n\t\t\t      Contact, DispatcherAddress, OffprintAddress, OrgAddress, RecipientAddress",
            "Parents": [
                "Contact",
                "DispatcherAddress",
                "OffprintAddress",
                "OrgAddress",
                "RecipientAddress"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%ApplicationModel;",
            "Description": "Content model for the element \"Application,\" which is the designation for a service that has the role of a supplier or recipient of deliveries to/from Springer's content and workflow management system.Event?, FilesToApplication, Deliverables, FilesToPublisherApplicationModel occurs in:\n\t\t\t      Application, AuthorQueryApplication",
            "Parents": [
                "Application",
                "AuthorQueryApplication"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%ArticleNoteTypeAttrValues;",
            "Description": "List of attribute values allowed for the semantic types of the element ArticleNote.PresentedAt – For a note indicating that an article was presented in public.PresentedBy – For a note indicating that an article was presented by a specific person in public, such as an individual in the name of a group of authors.CommunicatedBy – For a note indicating the name of the editor responsible. This must be used if the element ArticleEditorialResponsibility is present.Motto – A phrase or sentence used before the body of the text. A precise bibliographic source is usually not given.ESMHint – For a note indicating that there is ESM for an article and containing a link to it via the DOI.ProofNote – For a note added in Proof.Misc – Use \"Misc\" only if no other type matches.Dedication – For a note containing a dedication.Corrigendum – For a note indicating a corrected version of a publication.(PresentedAt | \n                                       PresentedBy |\n                                       CommunicatedBy |\n                                       Motto | \n                                       ESMHint |\n                                       ProofNote |\n                                       Misc | \n                                       Dedication |\n                                       Corrigendum |\n                                       ReferencedArticle |\n                                       CrossLinking)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%ArticleTypeAttrValues;",
            "Description": "List of allowed attribute values for semantic article types.OriginalPaper – Standard article, usually presenting new results.ReviewPaper – Standard article, interpreting previously published results.BriefCommunication – Short article submitted for rapid publication and not usually reviewed that exhibits the same structure as a standard article.EditorialNotes – An editorial.BookReview – A book review.ContinuingEducation – Article forming integral part of further education (usually medical).Interview – An interview.Letter – A letter, or a reply to a letter.Erratum – An article noting a correction to a previously published article.Legacy – Not to be used for new data. Internal use only.Abstract – An abstract.Report – A longer report on the proceedings of an event or congress.Announcement – Short announcement, usually from a society.News – Collection of news stories, usually from a society.Events – A calendar of events.Acknowledgments – A listing of active referees.(OriginalPaper | \n                                   ReviewPaper |\n                                   BriefCommunication |\n                                   EditorialNotes |\n                                   BookReview |\n                                   ContinuingEducation |\n                                   Interview |\n                                   Letter |\n                                   Erratum |\n                                   Legacy | \n                                   Abstract |\n                                   Report |\n                                   Announcement |\n                                   News |\n                                   Events |\n                                   Acknowledgments |\n                                   MediaReport |\n                                   BibliographicalNote |\n                                   ProductNotes |\n                                   Unknown)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%AuthorshipModel;",
            "Description": "Content model for an authorship in a bibliographic section.(BibAuthorName | InstitutionalAuthorName)+, Etal?AuthorshipModel occurs in:\n\t\t\t      BibArticle, BibBook, BibChapter",
            "Parents": [
                "BibArticle",
                "BibBook",
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%BibNameModel;",
            "Description": "Content model for a name in the bibliographic section.Prefix?, (Initials | NoInitials), FamilyName, Particle?, Suffix?, Degrees?BibNameModel occurs in:\n\t\t\t      BibAuthorName, BibEditorName",
            "Parents": [
                "BibAuthorName",
                "BibEditorName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%bodyatt;",
            "Description": "CALS table model parameter entity for additional attributes to the table element.",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%BookOrJournal;",
            "Description": "For internal use only.Journal",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%BooleanAttrValues;",
            "Description": "For internal use only.(Yes | No)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%ChapterTypeAttrValues;",
            "Description": "List of attribute values to specify the type of an chapter. These are:OriginalPaper – Standard chapter, usually presenting new results.ReviewPaper – Standard chapter, surveying and interpreting previously published results.Erratum – A chapter, formally speaking, noting a correction to a previously published chapter.CompoundObjectErratum – A chapter, formally speaking, to an entire book.APageObject - An object treated during the discrete phases of the BWF as an chapter, but which is actually a precursor of a book's front and/or back matter.(OriginalPaper | \n\t\t\t\t\t\t\t\t   ReviewPaper | \n\t\t\t\t\t\t\t\t   Erratum | \n\t\t\t\t\t\t\t\t   CompoundObjectErratum | \n\t\t\t\t\t\t\t\t   APageObject |\n\t\t\t\t\t\t\t\t   Essay |\n\t\t\t\t\t\t\t\t   Definition |\n\t\t\t\t\t\t\t\t   SynonymEntry)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%CharacteristicAttrValues;",
            "Description": "The value of this attribute indicates the quality or type of the information. Some values represent types that may (or must) be combined in groups (see ClassificationGroup); see the definitions given below.Substance – An object such as a chemical or pharmaceutical entity. This value may be combined with Property.Property – A feature or related object of the entity given as the value of Substance. This value may be combined with Substance.MainSubject – The primary topic of a passage of text. This value may be combined with SecondarySubject.SecondarySubject – The subordinate topic of a passage of text. This value must be combined with MainSubject.GroupTitle – To be defined. This value may be combined with GroupSort.GroupSort – To be defined. This value may be combined with GroupTitle.Discipline – The primary academic field of the subject matter. This value may be combined with SubDiscipline.SubDiscipline – The subfield of the primary academic field of the subject matter. This value must be combined with Discipline.PACS – Physics and Astronomy Classification Scheme (maintained at http://www.aip.org/pacs/). This value should not be combined with others.MSC – Mathematics Subject Classification (maintained at http://www.ams.org/msc/). This value should not be combined with others.JEL – Journal of Economic Literature classification system (maintained at http://www.aeaweb.org/journal/jel_class_system.html). This value should not be combined with others.ElementSystem – A plain text listing of the elements in a chemical substance, listed only as letters in alphabetical order, separated with a hyphen. This value may be combined with CASRegistryNumber.CASRegistryNumber – A unique identifier of each individual chemical substance (see http://www.cas.org/EO/regsys.html). This value may be combined with ElementSystem.Keyword – A significant word from the content. This may repeat an entry from the element Keyword in KeywordGroup. This value should not be combined with others.Package – The indicator of a content package, currently as defined for the Landolt-Börnstein series.TopicalCollection – A deprecated value. Use the element ArticleCollection instead.TitleSynonym – This is neeeded for Springer reference works. It allows automatic creation of a synonym index and improved navigation and search on online platforms.ContentClass – This is also needed for Springer reference works. Possible values are \"SynonymEntry\", \"Definition\" and \"Essay\" for SpringerReference, and \"DataSheet\", \"Introduction\" and \"Application\" for SpringerMaterials. Allows improved navigation and search on online platforms like SpringerReference, SpringerMaterials and SpringerLink.Substrate – A material or substance serving, in a general sense, as a \"backdrop\" for the substance covered. The new value \"Substrate\" will cover the \"background\" against which a substance occurs. It is used to give context to the substance information.SubstanceID – A unique identifier for a chemical substance. The new value \"SubstanceID\" will accommodate a unique ID for chemical substances that is used to establish links to InfoChem's data bases, for example SPRESIweb. It allows an unambiguous identification of substance, which is not possible using names or sum formulas alone.SubstanceClass – A substance class, e.g. \"polymer\". The new value \"SubstanceClass\" will give context to a document by indicating the group of substances that the substance covered in the document belongs to. It will be used to find related documents based on substances.PropertyID – A unique identifier for a physical or chemical property. The new value \"PropertyID\" will accommodate a unique ID for the property that is used to locate the property in the hierarchically organized thesaurus. It will be used to find related documents based on chemical or physical properties.PropertyClass – A property class, e.g. \"optical properties\". The new value \"PropertyClass\" will give context to a document by indicating the group of properties that the property covered in the document belongs to. It will be used to find related documents based on chemical or physical properties.PropertyParameter – A parameter to specify the context how the property is obtained, e.g. a temperature or a magnetic field. The new value \"PropertyParameter\" will provide context to how a physical or chemical property has been established. It states parameters that have been fixed externally when the property has been measured, for example temperature or magnetic field.PropertyValue – A numerical value of the property, stored as string, e.g \"12.3\" or \"23.45E-12\". The new values \"PropertyValue\" and \"PropertyUnit\" allow to add actual data for physical/chemical properties in the metadata, e.g a melting temperature in Kelvin.PropertyUnit – The physical/chemical unit of the numerical value. The new values \"PropertyValue\" and \"PropertyUnit\" allow to add actual data for physical/chemical properties in the metadata, e.g a melting temperature in Kelvin.ImagesMD – A value which indicates that the images of a given chapter or book should be included in the Images.MD database.EntityPrefix - A value which defines the namespace of the entities found.Disease - The name of a certain disease as referenced by InfoChem.DiseaseID - The ID of a the same disease as referenced by InfoChem.DBLPID - Used to store the ID from DBLP (DataBase systems and Logic Programming research group at the University of Trier, Germany) on book level. (Substance |\n\t\t\t\t\t\t\t\t\t  SubstanceID |\n\t\t\t\t\t\t\t\t\t  SubstanceClass |\n\t\t\t\t\t\t\t\t\t  Substrate |\n                                      Property |\n                                      PropertyID |\n                                      PropertyClass |\n                                      PropertyParameter |\n                                      PropertyValue |\n                                      PropertyUnit |\n                                      MainSubject |\n                                      SecondarySubject |\n                                      GroupTitle |\n                                      GroupSort |\n                                      Discipline |\n                                      SubDiscipline |\n                                      PACS |\n                                      MSC |\n                                      JEL |\n                                      ElementSystem |\n                                      CASRegistryNumber |\n                                      Keyword |\n                                      Package |\n                                      TopicalCollection |\n                                      TitleSynonym |\n                                      ContentClass |\n                                      ImagesMD |\n                                      EntityPrefix |\n                                      Disease |\n                                      DiseaseID |\n                                      DBLPID)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%ClassificationModel;",
            "Description": "This entity contains elements (CharacteristicValue and ClassificationGroup) designating semantically important information.CharacteristicValue | ClassificationGroupClassificationModel occurs in:\n\t\t\t      ArticleClassification, BookClassification, ChapterClassification, SectionClassification",
            "Parents": [
                "ArticleClassification",
                "BookClassification",
                "ChapterClassification",
                "SectionClassification"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%CommonModule;",
            "Description": "For internal use only.",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%ConfInfoModel;",
            "Description": "The content model to describe information about a conference in a bibliographic reference.ConfProcTitle, ConfEventName?, ConfEventLocation?, ConfEventDate?",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%CountryAttrValues;",
            "Description": "This entity contains the list of all the countries supported by A++ and will be updated as needed. The country entries are used in accordance with ISO 3166 two-letter country codes.AT - AustriaCH - SwitzerlandCN - ChinaDE - GermanyFR - FranceGB - Great BritainIN - IndiaIT - ItalyJP - JapanNL - The NetherlandsSG - SingaporeUS - United States(US | DE | NL | GB | AT | IT | FR | JP | IN | CH | SG | CN | --)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%DCTMAtts;",
            "Description": "Documentum attributes to be added to each element that has an xml_content_rule in the XML application configuration file.These attributes are:xmlns:dctm – An attribute and value inserted by Springer's content management system.dctm:obj_id – An object ID inserted by Springer's content management system.dctm:obj_status – An attribute and value inserted by Springer's content management system.dctm:version_label – An attribute and value inserted by Springer's content management system.xmlns:dctm              CDATA #IMPLIED\n                         dctm:obj_id             CDATA #IMPLIED\n                         dctm:obj_status         CDATA #IMPLIED\n\t                 dctm:version_label      CDATA #IMPLIED",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%DCTMLinkAtts;",
            "Description": "Documentum attributes to be added to each element that has an xml_link_rule in the XML application configuration file.These attributes are:xmlns:dctm – An attribute and value inserted by Springer's content management system.dctm:link_obj_id – An object ID inserted by Springer's content management system.dctm:link_obj_status – An attribute and value inserted by Springer's content management system.dctm:link_version_label – An attribute and value inserted by Springer's content management system.xmlns:dctm              CDATA #IMPLIED\n                         dctm:link_obj_id        CDATA #IMPLIED\n                         dctm:link_obj_status    CDATA #IMPLIED\n                         dctm:link_version_label CDATA #IMPLIED",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%EditorshipModel;",
            "Description": "Content model of an editorship in a bibliographic reference.(BibEditorName | BibInstitutionalEditorName)+, Eds, Etal?EditorshipModel occurs in:\n\t\t\t      BibBook, BibChapter, BibChapter",
            "Parents": [
                "BibBook",
                "BibChapter",
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%EmphasisTypeAttrValues;",
            "Description": "The possible values for emphasis types.(Bold | \n                                    Italic | \n                                    Underline | \n                                    DoubleUnderline | \n                                    SmallCaps |\n                                    BoldItalic | \n                                    BoldUnderline | \n                                    BoldDoubleUnderline | \n                                    BoldSmallCaps | \n                                    ItalicUnderline | \n                                    ItalicDoubleUnderline | \n                                    ItalicSmallCaps | \n                                    BoldItalicUnderline | \n                                    BoldItalicDoubleUnderline | \n                                    BoldItalicSmallCaps | \n                                    UnderlineSmallCaps | \n                                    DoubleUnderlineSmallCaps |\n                                    Strikethrough)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%EquationSourceModel;",
            "Description": "For internal use only.%VerySimpleTextModel; %MathMLModel;#PCDATA | Superscript | Subscript | Stack | Emphasis  EquationSourceModel occurs in:\n\t\t\t      EquationSource",
            "Parents": [
                "EquationSource"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%FingerprintTermModel;",
            "Description": "Content model including all fingerprint terms elements#PCDATA | MainTerm | VariantTermFingerprintTermModel occurs in:\n\t\t\t      DisplayTerm, RelevantTerm",
            "Parents": [
                "DisplayTerm",
                "RelevantTerm"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%FullTextBlockModel;",
            "Description": "Content model including all text block elements.Para | FormalPara | Figure | MediaObject | TableFullTextBlockModel occurs in:\n\t\t\t      BlockQuote, Body, Section1, Section2, Section3, Section4, Section5, Section6, Section7",
            "Parents": [
                "BlockQuote",
                "Body",
                "Section1",
                "Section2",
                "Section3",
                "Section4",
                "Section5",
                "Section6",
                "Section7"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%FullTextModel;",
            "Description": "All elements inside a paragraph.%SimpleTextModel; | %ListElements; | %ReferenceElements; | Figure | MediaObject | Table | BlockQuote | Equation | Quiz#PCDATA | Superscript | Subscript | Stack | Emphasis | InlineEquation | Literal | IndexTerm | GlossaryTerm | Footnote | Sidebar | InlineMediaObject | OrderedList | UnorderedList | DefinitionList | InternalRef | CitationRef | ExternalRef | Figure | MediaObject | Table | BlockQuote | Equation | QuizFullTextModel occurs in:\n\t\t\t      Para",
            "Parents": [
                "Para"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%GrantsAttrValues;",
            "Description": "The possible values for the terms of access to content are:OpenAccess – This value means that access to the specified content is not restricted.Restricted – This value means that access to the specified content is restricted.(OpenAccess | Restricted)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%GrantsModel;",
            "Description": "The types of grants(MetadataGrant, AbstractGrant?, BodyPDFGrant?, BodyHTMLGrant?, BibliographyGrant?, ESMGrant?)GrantsModel occurs in:\n\t\t\t      ArticleGrants, ChapterGrants",
            "Parents": [
                "ArticleGrants",
                "ChapterGrants"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%GrantsTypeAttrValues;",
            "Description": "The two models for the values assigned for grants:Regular – This value indicates that access to the article as a whole is restricted and that access to the parts of the article is determined by the entries made for each part.OpenChoice – This value indicates that access to the article as a whole is not restricted. The values set for the grants to the individual parts of the article should all be OpenAccess; any other value set for them is overridden by the OpenAccess value for the element ArticleGrants.(Regular | OpenChoice)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%IssueTypeAttrValues;",
            "Description": "Values for specifying the type of an issue.Regular – This is the default type of issue. It designates an issue that contains the content of only one issue.Combined – More than one issue combined into one physical issue.Supplement – A supplement as an additional issue in a volume.(Regular | Combined | Supplement)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%JournalProductTypeAttrValues;",
            "Description": "Specifies the product type of the journal. Springer's content and workflow management system sets the value for this attribute. There are three possible values.ArchiveJournal – This is the standard value for a scientific journal.NonStandardArchiveJournal – This value indicates an archive journal for which the production process, layout, or style rules deviate from the standard.Magazine – This value indicates a journal that is a mix trade and scientific journal, for which additional editorial or layout issues are important. An example is the group of German medical magazines (Facharztzeitchriften).Legacy – Used only for true legacy material, e.g., for back files.(ArchiveJournal | NonStandardArchiveJournal | Magazine | Legacy)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%LanguageAttrValues;",
            "Description": "This entity contains the list of all the languages supported by A++ and will be updated as needed. The language entries are used in accordance with ISO 639 two-letter language codes.Ar – ArabicBg – BulgarianBn – BengaliBs – BosnianCs – CzechDa – DanishDe – GermanEl – GreekEn – EnglishEs – SpanishEt – EstonianEu – BasqueFa – PersianFi – FinnishFr – FrenchHe – HebrewHi – HindiHr – CroatianHu – HungarianId – IndonesianIt – ItalianJa – JapaneseKo – KoreanLa – LatinLt – LithuanianLv – LatvianMn – MongolianNl – DutchNo – NorwegianPa – Panjabi, PunjabiPl – PolishPt – PortugeseRo – RomanianRu – RussianSk – SlovakSl – SlovenianSr – SerbianSv – SwedishTh – ThaiTr – TurkishUk – UkranianVi – VietnameseZh – Chinese-- – Used to indicate that the language is unknown or irrelevant. In practice, there are two uses of this value: (1) Used in Citation to indicate that the language of a title is not in the list of languages that Springer itself supports. (2) Used in a KeywordGroup that contains an entry from an external classification scheme, such as PACS, MSC, or JEL. Avoid other uses of this language code.(Ar | Bg | Bn | Bs | Cs | Da | De | El | En | Es | Et | Eu | Fa | Fi | Fr | He | Hi | Hr | Hu | Id | It | Ja | Ko | La | Lt | Lv | Mn | Nl | No | Pa | Pl | Pt | Ro | Ru | Sk | Sl | Sr | Sv | Th | Tr | Uk | Vi | Zh | --)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%ListElements;",
            "Description": "Types of lists inside A++.OrderedList | UnorderedList | DefinitionList",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%ListItemTypeAttrValues;",
            "Description": "List of values to specify the semantic type of a list item.Question – Indicates a question in a combination of questions and answers.Answer – Indicates an answer in a combination of questions and answers.(Question | Answer | CorrectAnswer | Solution)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%MathMLModel;",
            "Description": "The content model for MathML.",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%NameModel;",
            "Description": "The content model for a name.Prefix?, (GivenName+ | NoGivenName), Particle?, FamilyName, Suffix?, Degrees?, NativeName?NameModel occurs in:\n\t\t\t      AuthorName, CollaboratorName, ContactPersonName, CopyEditorName, EditorName, OffprintRecipientName, ProductionEditorName, ProofContactName, ProofCoRecipientName, RecipientName",
            "Parents": [
                "AuthorName",
                "CollaboratorName",
                "ContactPersonName",
                "CopyEditorName",
                "EditorName",
                "OffprintRecipientName",
                "ProductionEditorName",
                "ProofContactName",
                "ProofCoRecipientName",
                "RecipientName"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%NumberingDepthAttrValues;",
            "Description": "The value of this attribute (a number from 1 to 7) indicates the number of levels of section headings that are to be assigned heading numbers if the value of NumberingStyle indicates that they are to be numbered (i.e., if the value is either ChapterContent or ContentOnly).1 - The headings in instances of Section1 are numbered.2 - The headings in instances of Section2 are numbered.3 - The headings in instances of Section3 are numbered.4 - The headings in instances of Section4 are numbered.5 - The headings in instances of Section5 are numbered.6 - The headings in instances of Section6 are numbered.7 - The headings in instances of Section7 are numbered.(1 | 2 | 3 | 4 | 5 | 6 | 7)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%NumberingStyleAttrValues;",
            "Description": "Numbering styles supported for chapters, articles, and sections in them.Specifies whether and how sections and subsections should be numbered. The numbering is specified only by this attribute and does not appear explicitly as #PCDATA in the sections themselves. The numbers must be generated during rendering. Unnumbered – Not numbered.ChapterOnly – Only the chapter itself but not the sections within it is numbered.ChapterContent – Both the chapter title and the headings of sections within it are numbered. The number of the section heading includes the chapter number as its initial part (e.g., heading 3.2 is the heading of the second major section in chapter 3). This attribute value is not an option for journal articles since their titles are not numbered.ChapterContentSeparately – Both the chapter title and the headings of sections within it are numbered but independently of one another. In other words, the number of a section heading does not contain the chapter number. This attribute value is not an option for journal articles since their titles are not numbered.ContentOnly – The sections in the article or chapter are numbered, but not the article/chapter itself.Outline – A deprecated numbering style which is no longer allowed. Use Unnumbered with hardcoded chapter numbers.(Unnumbered |\n                                      ChapterOnly |\n                                      ChapterContent |\n                                      ChapterContentSeparately |\n                                      ContentOnly |\n                                      Outline)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%OutputMediumAttrValues;",
            "Description": "The values indicate the medium in which objects are to be published.Paper – Indicates that the related element will only be rendered for and published on paper, not online.Online – Indicates that the related element will only be rendered for and published in the electronic version, not on paper. An example of such content is electronic supplementary material.All – Indicates that the related element will be rendered for and published in each output medium.(Paper | Online | All)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%paracon;",
            "Description": "For internal use only.#PCDATA",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%ParaTypeAttrValues;",
            "Description": "Values to specify the type of a paragraph.(Important |\n                                Questions |\n                                Answers |\n                                CorrectAnswer |\n                                EyeCatcher |\n                                Programcode |\n                                GeneticSequence |\n                                Example |\n                                Trailer |\n                                Literal |\n                                Overview |\n                                Tip |\n                                Warning |\n                                Recipe |\n                                Procedure |\n                                Definition |\n                                LearningGoals|\n                                BackgroundInformation |\n                                Source |\n                                LegalText |\n                                Questionnaire)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%PDFTypeAttrValues;",
            "Description": "The value selected from the list of possible values for PDFType specifies the manner of generation of a PDF file specified in FileRef, which in practice indicates the nature of content (for publication or for reference only).Typeset – Indicates that the PDF file is the result of rendering for publication. Such PDF files should be confirmed as correct by the generation of a PitStop report; if this confirmation is not obtained, the value set for PDFType should be Scanned.Scanned – Indicates that the PDF file is the result of scanning, such as of the author manuscript/data to generate the ReferencePDF file. It is also set if no PitStop report is obtained to confirm the quality of the file.(Typeset | Scanned)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%ReferenceElements;",
            "Description": "Collection for all types of references. They are:InternalRef – A document internal reference of any kind except to a Citation.CitationRef – A document internal reference to a Citation only.ExternalRef – A document external reference of any kind.InternalRef | CitationRef | ExternalRefReferenceElements occurs in:\n\t\t\t      Heading, SimplePara, SubHeading",
            "Parents": [
                "Heading",
                "SimplePara",
                "SubHeading"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%RelatedObjectTypeAttrValues;",
            "Description": "Values for related object types to specify the connection between the current article/issue/chapter and another one, for example, for errata and commentaries. Related articles/issues/chapters refer to each other in both directions.The possible values are:ErratumTo – Used in the file of an erratum to indicate the object being corrected. The object being referred to (i.e., that for which the DOI is given in RelatedObjectDOI) is the original publication for which the erratum is a correction. NB: This type can ONLY occur if the ArticleType/ChapterType of the current article/chapter is \"Erratum\".ErratumFrom – Used in the file of a publication (which contains a mistake) to refer to an object that contains a correction. The object referred to is an erratum to the previously published object.CommentaryTo – Used in the file of a commentary to refer to the original publication. The object being referred to is the article/issue/chapter to which the current article/issue/chapter commentary refers.CommentaryFrom – Used in the file of a publication to indicate a commentary to it. The object being referred to is the commentary.ReplyTo – Used in the file of a reply to refer to a commentary. The object being referred to is the article/issue/chapter (which is a commentary) to which the current article/issue/chapter reply refers.ReplyFrom – Used in the file of a publication to indicate a reply to it. The object being referred to is the reply.RelatedArticle – Used in the file of a publication to indicate a related article.RelatedIssue – Used in the file of a publication to indicate a related issue.(ErratumFrom |\n                                        ErratumTo |\n                                        CommentaryFrom |\n                                        CommentaryTo |\n                                        ReplyFrom |\n                                        ReplyTo |\n                                        RelatedArticle |\n                                        RelatedIssue)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%RenderingStyleAttrValues;",
            "Description": "Values for the rendering style of run-in paragraphs.(Style1 | Style2 | Style3)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%SectionTypeAttrValues;",
            "Description": "Values to specify the semantic type of a section.(Introduction |\n                                   MaterialsAndMethods |\n                                   Results |\n                                   Overview |\n                                   Box |\n                                   Discussion |\n                                   Trailer |\n                                   CaseStudy |\n                                   Conclusion |\n                                   Example |\n                                   Excurse |\n                                   Tip |\n                                   Warning |\n                                   Recipe |\n                                   LearningGoals |\n                                   Procedure |\n                                   BackgroundInformation |\n                                   LegalText |\n                                   Questionnaire)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%SeriesTypeAttrValues;",
            "Description": "The values possible according to ChapterTypeAttrValues are the various types of book series. For Springer titles, this information is inserted only at Springer.Hierarchy – A series that has more than one level of subseries. The value does not indicate the level at which the content is located.Series – A standard series. The series information belongs to the bibliographic information of the book. Volumes may or may not be numbered.Subseries – A series within Series.VirtualSeries – A series in which the series information does not belong to the bibliographic information of a book. Such books exhibit a common identity.VolumePackage – A multibook package in which the indiviudal books or volumes have separate ISBNs. A package ISBN is optional, depending on whether package sales are intended. This value is currently not supported.(Series |\n                                  Subseries |\n                                  VirtualSeries |\n                                  VolumePackage |\n                                  Hierarchy)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%SimpleTextModel;",
            "Description": "A simplified content model for text. The full text model is declared by %FullTextModel;%VerySimpleTextModel; | InlineEquation | Literal | IndexTerm | GlossaryTerm | Footnote | Sidebar | InlineMediaObject#PCDATA | Superscript | Subscript | Stack | Emphasis | InlineEquation | Literal | IndexTerm | GlossaryTerm | Footnote | Sidebar | InlineMediaObjectSimpleTextModel occurs in:\n\t\t\t      AcknowledgmentTitle, ArticleSubTitle, ArticleSuperTitle, ArticleTitle, BibComments, BibUnstructured, BookNotesTitle, BookSetSubTitle, BookSetTitle, BookSubTitle, BookTitle, ChapterSubTitle, ChapterTitle, CharacteristicValue, Colophon, ConfEventLocation, ConfEventName, ConfSeriesName, ForewordTitle, GlossarySee, GlossarySeeAlso, GlossaryTerm, Heading, IndexTerm, InternalRef, IssueTitle, Keyword, LegalNotice, LohEntry, OpeningHeader, PartSubTitle, PartTitle, PrefaceTitle, Primary, PrimaryIE, RefSource, RunningTitle, Secondary, SecondaryIE, See, SeeAlso, SeeAlsoIE, SeeIE, SeriesSubTitle, SeriesTitle, SimplePara, SubHeading, SubPartSubTitle, SubPartTitle, SubSeriesSubTitle, SubSeriesTitle, Term, Tertiary, TertiaryIE, TocBack, TocEntry, TocFront",
            "Parents": [
                "AcknowledgmentTitle",
                "ArticleSubTitle",
                "ArticleSuperTitle",
                "ArticleTitle",
                "BibComments",
                "BibUnstructured",
                "BookNotesTitle",
                "BookSetSubTitle",
                "BookSetTitle",
                "BookSubTitle",
                "BookTitle",
                "ChapterSubTitle",
                "ChapterTitle",
                "CharacteristicValue",
                "Colophon",
                "ConfEventLocation",
                "ConfEventName",
                "ConfSeriesName",
                "ForewordTitle",
                "GlossarySee",
                "GlossarySeeAlso",
                "GlossaryTerm",
                "Heading",
                "IndexTerm",
                "InternalRef",
                "IssueTitle",
                "Keyword",
                "LegalNotice",
                "LohEntry",
                "OpeningHeader",
                "PartSubTitle",
                "PartTitle",
                "PrefaceTitle",
                "Primary",
                "PrimaryIE",
                "RefSource",
                "RunningTitle",
                "Secondary",
                "SecondaryIE",
                "See",
                "SeeAlso",
                "SeeAlsoIE",
                "SeeIE",
                "SeriesSubTitle",
                "SeriesTitle",
                "SimplePara",
                "SubHeading",
                "SubPartSubTitle",
                "SubPartTitle",
                "SubSeriesSubTitle",
                "SubSeriesTitle",
                "Term",
                "Tertiary",
                "TertiaryIE",
                "TocBack",
                "TocEntry",
                "TocFront"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%SupplierModel;",
            "Description": "The content model for suppliersCompanyName, Contact?, ContactPerson?, RemarkFrom?, RemarkTo?, CopyEditing?, \nProofInfo?, FilesToSupplier, Deliverables, DispatcherAddress?, FilesToPublisherSupplierModel occurs in:\n\t\t\t      FullServiceVendor, Printer",
            "Parents": [
                "FullServiceVendor",
                "Printer"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%TableEntryModel;",
            "Description": "For internal use only.SimplePara*TableEntryModel occurs in:\n\t\t\t      tfooter",
            "Parents": [
                "tfooter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%TableStyleAttrValues;",
            "Description": "Values to specify predefined layout styles for a table(Style1 | Style2 | Style3 | Style4)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%TargetTypeAttrValues;",
            "Description": "The value selected from the list of possible values for TargetType specifies the type of target file specified in BodyRef.PDF – This is a legacy designation for PDF to be used for an online publication. It may no longer be used. OnlinePDF is the value that is to be used in its place.PrintPDF – Indicates that the related file is PDF for printing.OnlinePDF – Indicates that the related file is PDF for online publication, such as for an eBook.Manuscript – Indicates that the related file is the author's manuscript.TEX – Indicates that the related file is a TeX file.(PDF | PrintPDF | OnlinePDF | Manuscript | TEX)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.colspec.att;",
            "Description": "For internal use only.",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.entry.att;",
            "Description": "For internal use only.",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.entry.mdl;",
            "Description": "For internal use only.(%TableEntryModel;)*(SimplePara*)*tbl.entry.mdl occurs in:\n\t\t\t      entry",
            "Parents": [
                "entry"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.row.att;",
            "Description": "For internal use only.",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.row.mdl;",
            "Description": "For internal use only.entry+tbl.row.mdl occurs in:\n\t\t\t      row",
            "Parents": [
                "row"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.table.att;",
            "Description": "For internal use only. ID           ID                     #REQUIRED\n                           Width        CDATA                  #IMPLIED\n                           Style        %TableStyleAttrValues; #IMPLIED             \n                           Orientation  (Landscape | Portrait) #IMPLIED\n                           Float        %BooleanAttrValues;    #REQUIRED ID           ID                     #REQUIRED\n                           Width        CDATA                  #IMPLIED\n                           Style        (Style1 | Style2 | Style3 | Style4) #IMPLIED             \n                           Orientation  (Landscape | Portrait) #IMPLIED\n                           Float        (Yes | No)    #REQUIRED",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.table.mdl;",
            "Description": "For internal use only.%tbl.table-titles.mdl; %tbl.table-main.mdl;Caption*, ((MediaObject+ | tgroup+), tfooter?)tbl.table.mdl occurs in:\n\t\t\t      Table",
            "Parents": [
                "Table"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.table.name;",
            "Description": "For internal use only.Table",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.table-main.mdl;",
            "Description": "For internal use only.((MediaObject+ | tgroup+), tfooter?)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.table-titles.mdl;",
            "Description": "For internal use only.Caption*,",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.tbody.att;",
            "Description": "For internal use only.",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.tgroup.att;",
            "Description": "For internal use only.",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.tgroup.mdl;",
            "Description": "For internal use only.colspec* , thead? , tbody+tbl.tgroup.mdl occurs in:\n\t\t\t      tgroup",
            "Parents": [
                "tgroup"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%tbl.thead.att;",
            "Description": "For internal use only.",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%titles;",
            "Description": "For internal use only.title?",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%TocLevelsAttrValues;",
            "Description": "Levels to be included in a table of contents. The numbers refer to the level of sections in an article or chapter.(0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%VerySimpleTextModel;",
            "Description": "Reduced text model used in EquationSource and in SimpleTextModel.#PCDATA | Superscript | Subscript | Stack | EmphasisVerySimpleTextModel occurs in:\n\t\t\t      BookFeatureText, CatalogingInformation, ChinaNumber",
            "Parents": [
                "BookFeatureText",
                "CatalogingInformation",
                "ChinaNumber"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%VolumeTypeAttrValues;",
            "Description": "The possible values for volume type.Regular – A single volume (e.g., volume 64).Combined – A physical volume consisting of several volumes (e.g., volumes 33 and 34 combined into one delivery.(Regular | Combined)",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%WithMathML;",
            "Description": "For internal use only.IGNORE",
            "Parents": [],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%YearModel;",
            "Description": "Content model for years.YearYearModel occurs in:\n\t\t\t      BibBook, BibChapter",
            "Parents": [
                "BibBook",
                "BibChapter"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%YearMonthDayHourMinuteSecondModel;",
            "Description": "Content model for a date consisting of year, month, day, hour, minute and second.%YearMonthDayModel;, (Hour, Minute, Second)?Year, Month, Day, (Hour, Minute, Second)?YearMonthDayHourMinuteSecondModel occurs in:\n\t\t\t      Accepted, Received, Revised",
            "Parents": [
                "Accepted",
                "Received",
                "Revised"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%YearMonthDayModel;",
            "Description": "Content model for a date consisting of year, month and day.%YearMonthModel;, DayYear, Month, DayYearMonthDayModel occurs in:\n\t\t\t      EmbargoDate, EventDate, FixedPublicationDate, OnlineDate, OnlineFirstDeadline, PrintDate, PrinterDeadline, ProductionEvent, RegistrationDate, S200TypesetterDeadline, S300TypesetterDeadline, S50TypesetterDeadline, S600TypesetterDeadline, S650TypesetterDeadline, S700ElectronicDistributionDeadline, S700PrinterDeadline, S800PrintDistributionDeadline, S900ElectronicDistributionDeadline, ScheduledToPrintDate, SentToPrintDate, TypesetterDeadline",
            "Parents": [
                "EmbargoDate",
                "EventDate",
                "FixedPublicationDate",
                "OnlineDate",
                "OnlineFirstDeadline",
                "PrintDate",
                "PrinterDeadline",
                "ProductionEvent",
                "RegistrationDate",
                "S200TypesetterDeadline",
                "S300TypesetterDeadline",
                "S50TypesetterDeadline",
                "S600TypesetterDeadline",
                "S650TypesetterDeadline",
                "S700ElectronicDistributionDeadline",
                "S700PrinterDeadline",
                "S800PrintDistributionDeadline",
                "S900ElectronicDistributionDeadline",
                "ScheduledToPrintDate",
                "SentToPrintDate",
                "TypesetterDeadline"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%YearMonthModel;",
            "Description": "Content model for a date consisting of year and month.%YearModel;, MonthYear, MonthYearMonthModel occurs in:\n\t\t\t      CoverDate, PlannedPublicationDate",
            "Parents": [
                "CoverDate",
                "PlannedPublicationDate"
            ],
            "Children": []
        }
    },
    {
        "Elements": {
            "Title": "%yesorno;",
            "Description": "For internal use only.NMTOKEN",
            "Parents": [],
            "Children": []
        }
    }
]
db.Elements.insert( mydocs );