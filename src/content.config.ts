import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const course = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/courses" }),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    vorlesungen: z.array(
      z.object({
        video_info: z.object({
          id: z.object({
            page_id: z.number().nonnegative(),
            video_id: z.string().uuid(),
          }),
          title: z.string(),
          date: z.string(),
        }),
        captions: z.array(
          z.object({
            start: z.object({
              hours: z.number().nonnegative(),
              minutes: z.number().nonnegative(),
              seconds: z.number().nonnegative(),
              milliseconds: z.number().nonnegative(),
            }),
            end: z.object({
              hours: z.number().nonnegative(),
              minutes: z.number().nonnegative(),
              seconds: z.number().nonnegative(),
              milliseconds: z.number().nonnegative(),
            }),
            text: z.string(),
          }),
        ),
        caption_info: z.string(),
      }),
    ),
  }),
});

export const collections = { course };
