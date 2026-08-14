import { Link, useParams } from "react-router-dom"
import TopicContent from "@/components/TopicContent"
import { getTopic } from "@/data/topics"

export default function Topic() {
    const { id } = useParams<{ id: string }>()
    const topic = getTopic(id)

    if (!topic) {
        return (
            <section className="py-24 w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
                <Link to="/" className="underline">Back to all topics</Link>
            </section>
        )
    }

    return <TopicContent topic={topic} />
}
