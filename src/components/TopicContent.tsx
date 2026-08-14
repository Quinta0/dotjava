import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import type { Topic } from "@/data/topics"

export default function TopicContent({ topic }: { topic: Topic }) {
    return (
        <section className="py-12 md:py-24 w-full">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-8">{topic.title}</h2>
                <p className="text-lg mb-8">{topic.description}</p>
                <div className="grid md:grid-cols-2 gap-16">
                    {topic.items.map((item, itemIndex) => (
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
    )
}
