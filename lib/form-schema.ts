import { JOBTYPES } from "@/app/constants"
import {z} from "zod"

export const jobFormSchema = z.object({
    roles: z.string({required_error: 'Job Title is Required'}).min(3, {message: 'Job title must be at least 3 characters'}),
    jobType: z.enum(JOBTYPES, {
        required_error: "You need to select job type",
    }),
    salaryForm: z.string({ required_error: "Salary from is required" }), 
    salaryTo: z.string({ required_error: "Salary to is required" }),
    categoryId: z.string({ required_error: "You need to select category" }),
    requiredSkills: z
        .string()
        .array()
        .nonempty({ message: "Required skill must be at least 1 skill" }),
    jobDescription: z
        .string({ required_error: "Job Description is required" })
        .min(10, { message: "Job description must be at least 10 characters" }),
    responsibility: z
        .string({ required_error: "Responsibility is required" })
        .min(10, { message: "Responsibility must be at least 10 characters" }),
    whoAreYou: z
    .string({ required_error: "Who are you is required" })
    .min(10, { message: "Who are you must be at least 10 characters" }),
    niceToHave: z
        .string({ required_error: "Nice to have is required" })
        .min(10, { message: "Nice to have must be at least 10 characters" }),
    benefits: z
        .object({
            benefit: z.string(),
            description: z.string(),
        })
        .array()
        .nonempty({ message: "Benefit must be at least 1 benefit" }),
    
});

export const overviewFormSchema = z.object({
    image: z.any().refine((item: any) => item?.name, {message: 'Image is required'}),
    name: z.string({required_error: 'Name is required'}),
    website: z.string({required_error: 'Website is required'}),
    location: z.string({required_error: 'location is required'}),
    employee: z.string({required_error: 'employee is required'}),
    industry: z.string({required_error: 'industry is required'}),
    dateFounded: z.date({required_error: 'datefounded is required'}),
    techStack: z.string().array().nonempty({message: 'Tech stack must be at least 1 data'}),
    description: z.string({required_error: 'description is required'}),
})


