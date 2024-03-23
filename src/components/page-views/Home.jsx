"use client"
import React from 'react';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-1">
            <h1>Home Page!</h1>
            </div>
            <Sheet>
                <SheetTrigger>
                    <Button varient="primary">Open Menu</Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>
                            Navigate to another page
                        </SheetTitle>
                        <SheetDescription>
                            Use the below buttons to surf the web.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid grid-cols-1 gap-5 pt-4">
                        <div className="grid grid-cols-4 items-center gap-0">
                            <Link to="/">
                                <Button className="row-start-1 col-start-1 col-span-4" varient="ghost">Home</Button>
                            </Link>
                            <Link to="/about">
                                <Button className="row-start-2 col-start-1 col-span-4" varient="ghost">About</Button>
                            </Link>
                            <Link to="/contact">
                                <Button className="row-start-3 col-start-1 col-span-4" varient="ghost">Contact</Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="row-start-4 col-start-1 col-span-4" varient="ghost">Sign in</Button>
                            </Link>
                            <Link to="/test">
                                <Button className="row-start-4 col-start-1 col-span-4" varient="ghost">Test</Button>
                            </Link>
                        </div>
                    </div>
                    <SheetFooter className="bottom-0 pt-12">
                        <SheetClose asChild>
                            <Button type="submit">Close Menu</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Home;
