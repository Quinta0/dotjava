import { Link } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { topics } from "@/data/topics"

export default function Home() {
    return (
        <section className="py-12 md:py-24 w-full">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-4xl font-bold mb-4">Dot Java</h1>
                <p className="text-lg text-muted-foreground mb-12">
                    A quick, code-first tour of the Java language. Pick a topic to get started.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    {topics.map((topic) => (
                        <Link key={topic.id} to={`/topic/${topic.id}`}>
                            <Card className="h-full transition-colors hover:bg-accent">
                                <CardHeader>
                                    <CardTitle>{topic.title}</CardTitle>
                                    <CardDescription>{topic.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    {topic.items.length} topics
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
