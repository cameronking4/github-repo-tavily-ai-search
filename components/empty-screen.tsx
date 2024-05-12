import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Next.js tailwindcss dashboard with shadcn components',
    message: 'Next.js tailwindcss dashboard with shadcn components'
  },
  {
    heading: 'Langchain openai node express endpoint',
    message: 'Langchain openai node express endpoint'
  },
  {
    heading: 'The new vercel ai sdk & generative ui',
    message: 'The new vercel ai sdk & generative ui'
  },
  {
    heading: 'LLM benchmarking in python',
    message: 'LLM benchmarking in python'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
