"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import { useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function Navbar(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <div className="bg-blue-50 sm:px-10 lg:px-20 h-20 shadow-md flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold text-blue-700">
                    <Link href="/">CiVi</Link>
                </h1>
            </div>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-portal-green-light">
                    Find Jobs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-portal-green/20 to-portal-green p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">Explore Job Opportunities</div>
                            <p className="text-sm leading-tight text-black/90">
                              Find your dream job from thousands of listings
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-portal-green-light  focus:bg-portal-green-light "
                        >
                          <div className="text-sm font-medium leading-none">Remote Jobs</div>
                          <p className="line-clamp-2 text-sm leading-snug text-black/70">
                            Work from anywhere in the world
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-portal-green-light  focus:bg-portal-green-light "
                        >
                          <div className="text-sm font-medium leading-none">Full-time Positions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-black/70">Secure long-term employment</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-portal-green-light">
                    For Employers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <Link
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-portal-green-light  focus:bg-portal-green-light "
                        >
                          <div className="text-sm font-medium leading-none">Post a Job</div>
                          <p className="line-clamp-2 text-sm leading-snug text-black/70">
                            Reach thousands of qualified candidates
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-portal-green-light  focus:bg-portal-green-light"
                        >
                          <div className="text-sm font-medium leading-none">Talent Search</div>
                          <p className="line-clamp-2 text-sm leading-snug text-black/70">
                            Find the perfect candidate for your position
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-portal-green-light  focus:bg-portal-green-light  focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Career Resources
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium  transition-colors hover:bg-portal-green-light focus:bg-portal-green-light focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Enterprise
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex  gap-5">
                <Button className="bg-white font-semibold border-2 font-sans border-blue-500 hover:bg-blue-500 text-black hover:text-white cursor-pointer">
                    Employee
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                  <Button className="bg-blue-500 font-semibold border-2 font-sans hover:bg-white text-white hover:border-black hover:text-black cursor-pointer">
                    Candidate
                </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-md p-6 rounded-lg shadow-xl">
                    <DialogHeader>
                      <DialogTitle>
                        LogIn With Your Credentials
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="tel"
                          placeholder="Enter your Email"
                          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          // value={mobile}
                          // onChange={(e) => setMobile(e.target.value)}
                          required
                        />
                      </div>
                    <div className="">
                        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                        </Label>
                        <Input
                          id="password"
                          type="tel"
                          placeholder="Enter Passwrod"
                          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          // value={mobile}
                          // onChange={(e) => setMobile(e.target.value)}
                          required
                        />
                      </div>

                      <DialogFooter className="mt-6">
                        <Button type="button" className="w-full rounded-md py-2">
                          Enter
                        </Button>
                      </DialogFooter>
                  </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}