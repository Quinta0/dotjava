import raw from "./java_tutorial.json"

export type TopicItem = {
    title: string
    description: string
    code: string
    explanation: string
    result: string
}

export type Topic = {
    id: string
    title: string
    description: string
    items: TopicItem[]
}

export const topics: Topic[] = raw.sections

export function getTopic(id: string | undefined): Topic | undefined {
    return topics.find((topic) => topic.id === id)
}
