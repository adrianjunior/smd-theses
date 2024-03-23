"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select"

export default function Home() {
  return (
    <main className="dark:bg-dark-surface bg-surface">
      <div className="inline-flex items-center justify-center whitespace-nowrap gap-8 p-8">
        <Select>
          <SelectTrigger>
            <span className='material-icons'>sort</span>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Semester [9-0]">Semester [9-0]</SelectItem>
            <SelectItem value="Semester [0-9]">Semester [0-9]</SelectItem>
            <SelectItem value="Title [A-Z]">Title [A-Z]</SelectItem>
            <SelectItem value="Title [Z-A]">Title [Z-A]</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </main>
  );
}
