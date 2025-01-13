import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ArrowRightLeft } from 'lucide-react'

export default function SearchForm() {
    return (
        <div className="container px-4">
            <div className="relative flex flex-col gap-4 md:flex-row md:items-end">
                <Card className="flex-1 p-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-blue-600" />
                            <span className="text-sm font-medium">Pick - Up</span>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="location1">Location 1</SelectItem>
                                    <SelectItem value="location2">Location 2</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select date" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="date1">Date 1</SelectItem>
                                    <SelectItem value="date2">Date 2</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="time1">Time 1</SelectItem>
                                    <SelectItem value="time2">Time 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </Card>
                <Button
                    size="icon"
                    className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-primary md:static md:translate-x-0 md:translate-y-0"
                >
                    <ArrowRightLeft className="h-6 w-6" />
                </Button>
                <Card className="flex-1 p-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-blue-600" />
                            <span className="text-sm font-medium">Drop - Off</span>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="location1">Location 1</SelectItem>
                                    <SelectItem value="location2">Location 2</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select date" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="date1">Date 1</SelectItem>
                                    <SelectItem value="date2">Date 2</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="time1">Time 1</SelectItem>
                                    <SelectItem value="time2">Time 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

