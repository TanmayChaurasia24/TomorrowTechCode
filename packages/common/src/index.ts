import z from "zod";

export const signupInput = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
})
export type signupInput = z.infer<typeof signupInput>


export const signinInput = z.object({
    email: z.string().email(),
    password: z.string(),
})
export type signinInput = z.infer<typeof signinInput>

export const create_blog_input = z.object({
    title: z.string(),
    content: z.string(),
})
export type create_blog_input = z.infer<typeof create_blog_input>

export const update_blog_input = z.object({
    title: z.string(),
    content: z.string(),
});
export type update_blog_input = z.infer<typeof update_blog_input>

