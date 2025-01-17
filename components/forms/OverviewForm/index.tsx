'use client'

import TitleForm from "@/components/atoms/TitleForm"
import CustomUpload from "@/components/organism/CustomUpload"
import FieldInput from "@/components/organism/FieldInput"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Separator } from "@/components/ui/separator"
import { overviewFormSchema } from "@/lib/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { EMPLOYEE_OPTIONS, LOCATION_OPTIONS, optionType } from "@/app/constants"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface OverviewFormProps {

}

const OverviewForm: FC<OverviewFormProps> = ({
  
    
}) => {
  const form = useForm<z.infer<typeof overviewFormSchema>>({
    resolver: zodResolver(overviewFormSchema),
  });

  const onSubmit = (val: z.infer<typeof overviewFormSchema>) => {
    console.log(val);
  }

  return (
    <div>
      <h2>OverviewForm</h2>
      <div className="my-5">
        <TitleForm title="Basic Information" subtitle="this is company information that you can update anytime" />
      </div>

      <Separator className="mb-7" />

      <Form  {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <FieldInput title="Company Logo" subtitle="This image will be shown as publicly as company logo">
              <CustomUpload form={form} name="image" />
            </FieldInput>

            <FieldInput title="Company Details" subtitle="Introduce your company core quicly to users by fill up company details">
              <div className="space-y-5">
              <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company name</FormLabel>
                      <FormControl>
                        <Input className='w-[450px]' placeholder="Twitter" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>website</FormLabel>
                      <FormControl>
                        <Input 
                          className='w-[450px]' 
                          placeholder="https://twitter" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className='w-[450px'>
                            <SelectValue placeholder="Location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                            <SelectItem key={item.id + i} value={item.id}>
                                {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              <div className="w-[450px] grid grid-cols-2 gap-4">
              <FormField
                  control={form.control}
                  name="employee"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className='w-[450px'>
                            <SelectValue placeholder="Employee" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {EMPLOYEE_OPTIONS.map((item: optionType, i: number) => (
                            <SelectItem key={item.id + i} value={item.id}>
                                {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Industry</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className='w-[450px'>
                                    <SelectValue placeholder="Industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                                    <SelectItem key={item.id + i} value={item.id}>
                                        {item.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
              </div>

              <FormField
                control={form.control}
                name="dateFounded"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date Founded</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[450px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>



              </div>
            </FieldInput>
          </form>
      </Form>
    </div>
  )
}

export default OverviewForm