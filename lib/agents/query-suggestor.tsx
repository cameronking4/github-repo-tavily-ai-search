import { createStreamableUI, createStreamableValue } from 'ai/rsc'
import { CoreMessage, streamObject } from 'ai'
import { PartialRelated, relatedSchema } from '@/lib/schema/related'
import { Section } from '@/components/section'
import SearchRelated from '@/components/search-related'
import { OpenAI } from '@ai-sdk/openai'

export async function querySuggestor(
  uiStream: ReturnType<typeof createStreamableUI>,
  messages: CoreMessage[]
) {
  const openai = new OpenAI({
    baseUrl: process.env.OPENAI_API_BASE, // optional base URL for proxies etc.
    apiKey: process.env.OPENAI_API_KEY, // optional API key, default to env property OPENAI_API_KEY
    organization: '' // optional organization
  })
  const objectStream = createStreamableValue<PartialRelated>()
  uiStream.append(
    <Section title="Related" separator={true}>
      <SearchRelated relatedQueries={objectStream.value} />
    </Section>
  )

  let finalRelatedQueries: PartialRelated = {}
  await streamObject({
    model: openai.chat(process.env.OPENAI_API_MODEL || 'gpt-4-turbo'),
    system: `As a professional senior developer, your task is to generate a set of three queries that explore the topic matter more deeply, building upon the initial query and the information uncovered in its search results.

    For instance, if the original query was "Nextjs shadcn dashboard", your output should follow this format:

    "{
      "related": [
        "What shadcn components are used in these repos?",
        "Which repo has the most pages or components?",
        "What .env variables are used in these repos?"
      ]
    }"

    Aim to create queries that progressively delve into more specific aspects, implications, or adjacent topics and github repositories related to the initial query. The goal is to anticipate the user's potential information needs and guide them towards a more comprehensive understanding of the subject matter.
    Please match the language of the response to the user's language.`,
    messages,
    schema: relatedSchema
  })
    .then(async result => {
      for await (const obj of result.partialObjectStream) {
        if (obj.items) {
          objectStream.update(obj)
          finalRelatedQueries = obj
        }
      }
    })
    .finally(() => {
      objectStream.done()
    })

  return finalRelatedQueries
}
