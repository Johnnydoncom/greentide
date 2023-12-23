"use client";

import React from "react";

import { Fragment, useState } from 'react'

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import Link from "next/link";


export default function Header(){

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <React.Fragment>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5">
                            <span className="sr-only">{process.env.APP_NAME}</span>
                            <Image src="/images/Greentide-Logo.png" alt="Logo" width={300} height={100} className="h-16 w-auto" priority />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">About</Link>

                        <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
                            Services
                        </Link>
                        <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
                            Impact
                        </Link>
                        <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                            Contact
                        </Link>
                    </Popover.Group>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">{process.env.APP_NAME}</span>
                                <Image src="/images/Greentide-Logo.png" alt="Logo" width={300} height={100} className="h-12 w-auto" priority />
                            </Link>

                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root h-full">
                            <div className="-my-6 divide-y h-full divide-gray-500/10">
                                <div className="flex flex-col gap-4 justify-start h-full items-center text-center py-14">
                                    <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</Link>

                                    <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Services
                                    </Link>
                                    <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Impact
                                    </Link>
                                    <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
       </React.Fragment>
    );
}