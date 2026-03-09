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
                        name: "category",
                        title: "Category",
                        type: "string",
                        description: "e.g., Alumni Memoirs, Vedic Wisdom",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "author",
                        title: "Author Name",
                        type: "string",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "role",
                        title: "Author Role/Class",
                        type: "string",
                        description: "e.g., Class of 1978 • President, Students' Association",
                }),
                defineField({
                        name: "excerpt",
                        title: "Excerpt",
                        type: "text",
                        description: "A short 2-line summary for the article list page.",
                        validation: (Rule) => Rule.max(200),
                }),
                defineField({
                        name: "accent",
                        title: "Accent Color Class",
                        type: "string",
                        description: "Tailwind border color (e.g., border-indigo-400 or border-amber-400)",
                        initialValue: "border-primary",
                }),
                defineField({
                        name: "publishedDate",
                        title: "Published Date",
                        type: "datetime",
                        initialValue: (new Date()).toISOString(),
                }),
                defineField({
                        name: "content",
                        title: "Content",
                        type: "array",
                        description: "The main body of the article.",
                        of: [
                                {
                                        type: "block",
                                        // This enables rich text features like bold, italics, and headers
                                },
                        ],
                }),
                defineField({
                        name: "image",
                        title: "Feature Image / Author Photo",
                        type: "image",
                        options: { hotspot: true },
                }),
        ],
});