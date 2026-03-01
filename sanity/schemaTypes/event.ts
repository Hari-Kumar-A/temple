import { defineType, defineField } from "sanity";

export const event = defineType({
        name: "event",
        title: "Event",
        type: "document",
        fields: [
                defineField({
                        name: "title",
                        title: "Event Title",
                        type: "string",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "date",
                        title: "Event Date",
                        type: "date",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "description",
                        title: "Description",
                        type: "text",
                }),
                defineField({
                        name: "image",
                        title: "Event Image",
                        type: "image",
                        options: { hotspot: true },
                }),
        ],
});