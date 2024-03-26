"use client"

import { Button } from "@/components/atoms/button"
import { FilterChip } from "@/components/atoms/filter-chip"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/atoms/select"
import { IconButton } from "@/components/atoms/icon-button"
import { Input } from "@/components/atoms/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <main className="dark:bg-dark-surface bg-surface inline-flex flex-col gap-4 p-4">
      <Button icon="design_services" iconPosition="left">Button</Button>
      <FilterChip icon="design_services" iconPosition="left">Design Services</FilterChip>
      <IconButton icon="delete_forever" />
      <Input placeholder="Text" />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </Select>
    </main>
  );
}
