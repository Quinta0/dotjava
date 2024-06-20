import Link from "next/link";
import JavaContent from "../app/java_tutorial.json";
import {JSX, SVGProps} from "react";
import {Button} from "@/components/ui/button";

export default function Navigation() {
    return (
        <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl" prefetch={false}>
                    <CodeIcon className="w-6 h-6"/>
                    Dot Java
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    {JavaContent.sections.map((section, index) => (
                        <Link key={index} href={`#${section.id}`} className="hover:underline" prefetch={false}>
                            {section.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path fill="#FCFCFC" opacity="1.000000" stroke="none"
                  d="
M410.993958,311.997833
	C410.984070,251.685364 410.974640,191.872437 410.950897,132.059509
	C410.950775,131.758057 410.747650,131.456650 410.481018,130.714798
	C385.238434,130.714798 359.846375,130.714798 334.226685,130.714798
	C334.226685,118.510406 334.226685,106.749191 334.226685,94.734009
	C372.851379,94.734009 411.417328,94.734009 450.518524,94.734009
	C450.518524,96.585030 450.518524,98.201042 450.518524,99.817055
	C450.518280,173.292236 450.483337,246.767456 450.544250,320.242584
	C450.558044,336.881256 448.760773,353.188080 441.814331,368.480042
	C431.804352,390.516083 415.206604,405.886169 392.339081,413.506226
	C362.237671,423.536865 331.966187,423.304871 302.717468,410.285675
	C275.974670,398.381897 260.761566,376.813599 255.100037,348.441040
	C253.489624,340.370422 253.064514,332.063293 252.056076,323.528076
	C265.968353,323.528076 278.871552,323.528076 291.074066,323.528076
	C292.780731,332.325165 293.632660,341.024353 296.220825,349.172028
	C301.829712,366.828979 314.212372,377.917847 332.139099,382.561066
	C346.144257,386.188507 360.300110,386.144745 374.031616,381.696930
	C395.828674,374.636627 407.066986,358.591736 409.875427,336.416199
	C410.875092,328.522644 410.656464,320.474792 410.993958,311.997833
z"/>
            <path fill="#FDFDFD" opacity="1.000000" stroke="none"
                  d="
M88.082108,348.899780
	C96.337631,346.484802 104.306267,346.337982 112.140968,348.535126
	C126.024956,352.428772 133.839737,361.946350 136.584061,375.933624
	C139.973038,393.206451 133.284363,408.960266 119.434303,416.107788
	C99.387474,426.453217 73.876472,418.160767 66.682755,398.797058
	C60.637661,382.525238 64.397789,356.446655 88.082108,348.899780
z"/>
        </svg>
    )
}