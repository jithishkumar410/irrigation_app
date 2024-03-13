"use client"
import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function Cal() {
  const [date, setDate] = React.useState<Date | undefined>([new Date()])
 
  return (
    <Calendar
      mode="multiple"
      selected={date}
      modifiersClassNames={{
        selected: 'bg-blue-500 hover:bg-red-500',
        today: 'bg-green-500',
        
      }}
      onSelect={setDate}
      className="rounded-md border-2 border-slate-250 shadow-xl bg-white"
    />
  )
}
