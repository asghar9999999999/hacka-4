import Header from "./homepage/components/header"
import Hero from "./homepage/components/hero"
import SearchForm from "./homepage/components/search-form"
import CarCard from "./homepage/components/car-card"
import Footer from "./homepage/components/footer"
import { Button } from "@/components/ui/button"

const popularCars = [
    {
        id: "1",
        name: "Koenigsegg",
        type: "Sport",
        image: "/car (7).png?height=2000&width=2000",
        price: 99.00,
        originalPrice: 120.00,
        capacity: 2,
        transmission: "Manual",
        fuelType: "90L",
        liked: true
    },
    {
        id: "2",
        name: "Nissan GT-R",
        type: "Sport",
        image: "/car-3.png?height=200&width=400",
        price: 80.00,
        originalPrice: 100.00,
        capacity: 2,
        transmission: "Manual",
        fuelType: "90L",
        liked: false
    },
    {
        id: "3",
        name: "Rolls-Royce",
        type: "Sedan",
        image: "/car-4.png?height=200&width=400",
        price: 96.00,
        originalPrice: 120.00,
        capacity: 4,
        transmission: "Manual",
        fuelType: "70L",
        liked: true
    },
    {
        id: "4",
        name: "Nissan GT-R",
        type: "Sport",
        image: "/car-5.png?height=200&width=400",
        price: 80.00,
        originalPrice: 100.00,
        capacity: 2,
        transmission: "Manual",
        fuelType: "90L",
        liked: false
    }
]

const recommendedCars = [
    {
        id: "5",
        name: "All New Rush",
        type: "SUV",
        image: "/car.png?height=200&width=400",
        price: 72.00,
        originalPrice: 80.00,
        capacity: 6,
        transmission: "Manual",
        fuelType: "70L",
        liked: false
    },
    {
        id: "6",
        name: "CR - V",
        type: "SUV",
        image: "/car-7.png?height=200&width=400",
        price: 80.00,
        originalPrice: 100.00,
        capacity: 6,
        transmission: "Manual",
        fuelType: "80L",
        liked: true
    },
    {
        id: "7",
        name: "All New Terios",
        type: "SUV",
        image: "/car-1.png?height=200&width=400",
        price: 74.00,
        originalPrice: 90.00,
        capacity: 6,
        transmission: "Manual",
        fuelType: "90L",
        liked: false
    },
    {
        id: "8",
        name: "CR - V",
        type: "SUV",
        image: "/car-6.png?height=200&width=400",
        price: 80.00,
        originalPrice: 100.00,
        capacity: 6,
        transmission: "Manual",
        fuelType: "80L",
        liked: true
    }
]

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Header />
            <main className="flex-1">
                <Hero />
                <SearchForm />
                <div className="container px-4 py-8">
                    <section className="mb-8">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Popular Car</h2>
                            <a href="#" className="text-sm text-primary hover:underline">
                                View All
                            </a>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {popularCars.map((car) => (
                                <CarCard key={car.id} car={car} />
                            ))}
                        </div>
                    </section>
                    <section>
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Recommendation Car</h2>
                            <a href="#" className="text-sm text-primary hover:underline">
                                View All
                            </a>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {recommendedCars.map((car) => (
                                <CarCard key={car.id} car={car} />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <Button size="lg">
                                Show more car
                            </Button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}

