"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react"; 

import { SideBar } from "./sidebar";
import { Button } from "./ui/button"; 
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"; 

export const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const

    return (
        <Sheet modal={false}>
            <SheetTrigger asChild>
                <Button variant="secondary" className="lg:hidden">
                    <MenuIcon className="size-4 text-neutral-500" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0"> 
                <SideBar />
            </SheetContent>
        </Sheet>
    );
};

