import { z } from "zod";

const emailSchema = z.string().email();
export function isEmailValid(email: string) {
    return emailSchema.safeParse(email);
}