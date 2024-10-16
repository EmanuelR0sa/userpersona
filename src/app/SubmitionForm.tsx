"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast, useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const FormSchema = z.object({
  service: z.string().min(2, {
    message: "Service description must be at least 2 characters.",
  }),
  targetuser: z.string().min(2, {
    message: "add target users",
  }),
})

type InputFormProps= {
    onResponse: (message: string) => void;
  }

export function InputForm({ onResponse }: InputFormProps) {
    const [isLoading, setIsLoading]= useState(false);
     const { toast } = useToast();


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      service: "",
      targetuser: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)
    try {
        const response = await fetch('/api/persona', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if(!response.ok){
            throw new Error('Failed to submit the form')
        }

        const result = await response.json();

        toast({
            description: "Persona generated successfully.",
          })

          onResponse(result.message)

          form.reset()
    } catch (error) {
        toast({
            title: "Error",
            description: "Fail to submit the form. Please try again.",
            variant: "destructive"
          })
    }finally {
        setIsLoading(false)
      }
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 mt-7">
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe the Business or Service?</FormLabel>
              <FormControl>
                <Input placeholder="mobile fitness app" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="targetuser"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Who are the target users?</FormLabel>
              <FormControl>
                <Input placeholder="business man" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-violet-800 hover:bg-violet-950" type="submit">{isLoading ? 'Submitting...' : 'Submit'}</Button>
      </form>
    </Form>
  )
}
