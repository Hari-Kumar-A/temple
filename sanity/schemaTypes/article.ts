import { defineType, defineField } from "sanity";

export const article = defineType({
        name: "article",
        title: "Article",
        type: "document",
        fields: [
                defineField({
                        name: "title",
                        title: "Title",
                        type: "string",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "author",
                        title: "Author",
                        type: "string",
                }),
                defineField({
                        name: "publishedAt",
                        title: "Published Date",
                        type: "datetime",
                }),
                defineField({
                        name: "content",
                        title: "Content",
                        type: "text",
                }),
        ],
});