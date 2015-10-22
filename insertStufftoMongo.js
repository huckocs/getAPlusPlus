var mydocs = [
    {
        "Element": [
            "Abstract",
            "An abstract is a very condensed version of the content with which it is associated. It consists either of one paragraph of text or of a structured abstract, which is divided into several sections by using the AbstractSection element. If the abstract is not structured, AbstractSection may not be used.There may be more than one abstract where the same summary is presented in different languages, but one of them must be in the same language as the article to which it belongs. Some abstracts appear only onine, which is governed by the attribute OutputMedium.The standard heading of an abstract in English is \"Abstract,\" in German \"Zusammenfassung,\" in French \"Résumé,\" and in Spanish \"Resumen.\"",
            [
                "AbstractSection",
                "Figure",
                "Heading",
                "MediaObject",
                "Para",
                "Table"
            ],
            [
                "ArticleHeader",
                "BookBackmatterHeader",
                "BookFrontmatterHeader",
                "BookHeader",
                "BookSetHeader",
                "ChapterHeader",
                "PartHeader",
                "SeriesHeader",
                "SubPartHeader"
            ]
        ]
    },
    {
        "Element": [
            "ArticleBackmatter",
            "This is a container for all the components of an article that appear after the body.",
            [
                "Acknowledgments",
                "Appendix",
                "ArticleNote",
                "Bibliography",
                "Ethics",
                "Glossary"
            ],
            [
                "Article"
            ]
        ]
    }

]
db.Elements.insert( mydocs );