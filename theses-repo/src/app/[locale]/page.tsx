"use client"

import { Button } from "@/components/1-atoms/button"
import { FilterChip } from "@/components/1-atoms/filter-chip"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/1-atoms/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/1-atoms/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/1-atoms/popover"

import { IconButton } from "@/components/1-atoms/icon-button"
import { Input } from "@/components/1-atoms/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Label } from "@/components/1-atoms/label"
import { useMemo, useState } from "react"

import 'material-icons/iconfont/filled.css';
import { ThesisCard } from "@/components/2-molecules/thesis-card"
import FilterChipList from "@/components/2-molecules/filter-chip-list"
import { TranslatedStrings } from "@/lib/translated-strings"
import { TranslatedTheses } from "@/lib/translated-theses"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export default function Home() {
  const strings = TranslatedStrings();
  const theses = TranslatedTheses();

  const [filterChipState, setFilterChipState] = useState(false);
  const [popoverButtonState, setPopoverButtonState] = useState(false);

  const filterChipStateChange = () => {
    setFilterChipState(!filterChipState);
  }

  const popoverButtonStateChange = () => {
    setPopoverButtonState(!popoverButtonState);
  }

  const filterChipKey = useMemo(() => String(filterChipState), [filterChipState]);
  const popoverButtonKey = useMemo(() => String(popoverButtonState), [popoverButtonState]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const filterItems = [
    { label: 'Option 1', icon: 'search', activated: false },
    { label: 'Option 2', activated: false },
    { label: 'Option 3', activated: false },
    { label: 'Option 4', icon: 'search', activated: false },
    { label: 'Option 5', icon: 'search', activated: false },
    { label: 'Option 6', icon: 'search', activated: false },
    { label: 'Option 7', icon: 'search', activated: false },
  ];

  return (
    <main className="dark:bg-dark-surface bg-surface flex flex-col items-center gap-4 p-4">
      <Button icon="design_services" iconPosition="left">{strings.labels.clearAllFilters}</Button>
      <FilterChip icon="design_services" iconPosition="left" activated={filterChipState} onClick={filterChipStateChange} key={filterChipKey}>Design Services</FilterChip>
      <FilterChip>Design Services</FilterChip>
      <Button icon="delete_forever" iconPosition="left" variant="textPrimary">Button Text</Button>
      <IconButton icon="delete_forever" />
      <Input placeholder="Text" />
      <Select>
        <SelectTrigger>
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Popover onOpenChange={popoverButtonStateChange}>
        <PopoverTrigger asChild>
          <IconButton icon="settings" variant={popoverButtonState ? 'primaryActivated' : 'primary'} key={popoverButtonKey}></IconButton>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.x
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-4 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <ThesisCard thesis={theses[1]} strings={strings}/>
      <div>
        <FilterChipList items={filterItems} />
      </div>
    </main>
  );
}
