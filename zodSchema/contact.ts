import z from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({message: "Must be a valid email"}).min(1, { message: "Email address is required" }),
    phone: z.string().min(8),
    country: z.string().min(1, { message: "Country is required" }),
    company: z.string(),
    message: z.string().min(2, { message: "Message is required" })
});

export type Client = z.infer<typeof contactSchema>;