import { defineType, defineField } from "sanity";

export const activity = defineType({
        name: "activity",
        title: "Activity",
        type: "document",
        fields: [
                defineField({
                        name: "name",
                        title: "Activity Name",
                        type: "string",
                        validation: (Rule) => Rule.required(),
                }),
                defineField({
                        name: "description",
                        title: "Description",
                        type: "text",
                }),
                defineField({
                        name: "image",
                        title: "Image",
                        type: "image",
                        options: { hotspot: true },
                }),
        ],
});