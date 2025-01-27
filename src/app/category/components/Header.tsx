"use client";
import { Search, Settings, Heart, Bell } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="bg-white py-4 px-6 flex items-center justify-between border-b">
            <div className="flex items-center gap-8">
                <Link href="/" className="text-2xl font-bold text-primary text-morent-blue">MORENT</Link>
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-morent-gray w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search something here"
                        className="pl-10 pr-4 py-2 bg-morent-background rounded-lg w-[400px] focus:outline-none focus:ring-2 focus:ring-morent-blue"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-morent-background rounded-full">
                    <Heart className="w-6 h-6 text-morent-gray" />
                </button>
                <button className="p-2 hover:bg-morent-background rounded-full">
                    <Bell className="w-6 h-6 text-morent-gray" />
                </button>
                <button className="p-2 hover:bg-morent-background rounded-full">
                    <Settings className="w-6 h-6 text-morent-gray" />
                </button>
                <Avatar className="w-10 h-10 ">
                    <Image
                        src="/Profil.png?height=2000&width=2000"
                        alt="Sports car"
                        width={2000}
                        height={2000}

                    />               
                     </Avatar>
            </div>
        </header>
    );
};