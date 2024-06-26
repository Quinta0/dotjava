import JavaText from "./java_tutorial.json"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Cabin} from "next/dist/compiled/@next/font/dist/google";


export default function MainPage() {
    const JavaContent = JavaText
    return (
        <>
            {JavaContent.sections.map((section, index) => (
                <section key={index} id={section.id} className={`py-12 md:py-24 w-full ${index % 2 === 0 ? 'bg-muted' : ''}`}>
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl font-bold mb-8">{section.title}</h2>
                        <p className="text-lg mb-8">{section.description}</p>
                        <div className="grid md:grid-cols-2 gap-16">
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-muted-foreground mb-6">{item.description}</p>
                                    <div className="bg-background rounded-lg p-6 shadow-2xl my-4">
                                        <Carousel className="max-w px-8">
                                            <CarouselContent>
                                                <CarouselItem>
                                                    <pre className="text-sm font-mono">
                                                        <code className="text-pretty">{item.code}</code>
                                                    </pre>
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <pre className="text-sm font-mono">
                                                        <code className="text-pretty">{item.result}</code>
                                                    </pre>
                                                </CarouselItem>
                                            </CarouselContent>
                                            <CarouselPrevious className="mx-6"/>
                                            <CarouselNext className="mx-6"/>
                                        </Carousel>
                                    </div>
                                    <p className="text-pretty">{item.explanation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}
