import Link from "next/link"
import {RxHamburgerMenu} from 'react-icons/rx'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
export const Header = () => {
    const NAV_ITEMS = [
        {
            label : "WORKOUTS",
            href : "#"
        },
        {
            label : "PROGRAMS",
            href : "#"
        },
        {
            label : "HEALTHY LIVING",
            href : "#"
        },
        {
            label : "COMMUNITY",
            href : "#"
        },{
            label : "ABOUT",
            href : "#"
        },
        ,{
            label : "STORE",
            href : "#"
        },
    ]
    return (
        <nav className="color-white p-5 m-4">
            <div className="flex items-center justify-between">
                <Link href={'/'} className="text-white hover:text-[#E6533C] text-lg relative cursor-pointer">
                    WORKOUT
                </Link>

                <div className="hidden md:flex lg:flex items-center gap-4 text-sm relative cursor-pointer text-white">
                    {NAV_ITEMS.map(item => (
                        <Link href={`${item?.href}`} key={item?.label} className="hover:text-[#E6533C] ">
                                {item?.label}
                        </Link>
                    ))}
                </div>

                <Sheet>
                    <SheetTrigger className="text-white md:hidden">
                        <RxHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                    </SheetTrigger>
                    <SheetContent className="bg-body">
                        <SheetHeader>
                            <SheetTitle className="text-white">WORKOUT</SheetTitle>
                            <SheetDescription className="text-white">
                                <div className="flex flex-col items-start mt-2 gap-4 text-sm relative cursor-pointer text-white">
                                    {NAV_ITEMS.map(item => (
                                        <Link href={`${item?.href}`} key={item?.label} className="hover:text-[#E6533C] p-2">
                                                {item?.label}
                                        </Link>
                                    ))}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>  
        </nav>
    )
}