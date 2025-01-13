import Image from "next/image"
import { Heart, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Car } from "@/sanity/schemaTypes/types/car"

interface CarCardProps {
    car: Car
}

export default function CarCard({ car }: CarCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 p-4">
                <div>
                    <h3 className="font-semibold">{car.name}</h3>
                    <p className="text-sm text-muted-foreground">{car.type}</p>
                </div>
                <Button variant="ghost" size="icon" className={car.liked ? "text-red-500" : ""}>
                    <Heart className="h-5 w-5" fill={car.liked ? "currentColor" : "none"} />
                </Button>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <div className="relative aspect-[4/3]">
                    <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <span>⛽</span>
                        {car.fuelType}
                    </div>
                    <div className="flex items-center gap-2">
                        <span>🔄</span>
                        {car.transmission}
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {car.capacity} People
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4">
                <div>
                    <p className="text-lg font-bold">${car.price}<span className="text-sm font-normal text-muted-foreground">/day</span></p>
                    <p className="text-sm text-muted-foreground line-through">${car.originalPrice}</p>
                </div>
                <Button>Rent Now</Button>
            </CardFooter>
        </Card>
    )
}

