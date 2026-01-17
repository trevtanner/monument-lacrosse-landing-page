import * as z from "zod";

export const AddEventFormSchema = z.object({
  title: z
    .string()
    .min(2, { error: "Name must be at least 2 characters long." })
    .trim(),
  team: z
    .string()
    .min(2, { error: "team must be at least 2 characters long." })
    .trim(),
  age: z
    .string()
    .min(2, { error: "age must be at least 2 characters long." })
    .trim(),
  date: z.date().min(new Date(), { error: "Date cannot have already passed" }),
  url: z.url().trim(),
});

export type FormState =
  | {
      errors?: {
        title?: string[];
        team?: string[];
        age?: string[];
        date?: Date;
        url?: string[];
      };
      message?: string;
    }
  | undefined;

export const EditEventFormSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .min(2, { error: "Name must be at least 2 characters long." })
    .trim(),
  team: z
    .string()
    .min(2, { error: "team must be at least 2 characters long." })
    .trim(),
  age: z
    .string()
    .min(2, { error: "age must be at least 2 characters long." })
    .trim(),
  date: z.date().min(new Date(), { error: "Date cannot have already passed" }),
  url: z.url().trim(),
});

export type EditFormState =
  | {
      errors?: {
        id?: number[];
        title?: string[];
        team?: string[];
        age?: string[];
        date?: Date;
        url?: string[];
      };
      message?: string;
    }
  | undefined;
