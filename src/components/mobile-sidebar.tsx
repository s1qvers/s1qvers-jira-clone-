"use client";

import {MenuIcon} from "lucide-react"; 

import { Button } from "./ui/button"; 
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"; 

export const MobileSidebar = () => {
    return (
        <Sheet modal={false}>
            <SheetTrigger asChild>
                <Button size="icon" variant="secondary" className="lg:hidden">
                    <MenuIcon className="size-4 text-neutral-500" />
                </Button>
            </SheetTrigger>
        </Sheet>
    );
};