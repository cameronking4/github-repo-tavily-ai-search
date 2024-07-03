# AI site search - Open Source Project Finder (InstaRepo) 
### Tavily AI-search for Github repositories

![screenrun-05-11-2024-20-38-17](https://github.com/cameronking4/github-repo-tavily-ai-search/assets/35708477/7d553860-bce0-4864-b648-6eeddf6f9f82)

Here lives the code for an AI-powered search engine to find the best github repo to start your project. Use Tavily AI API to retrieve, score and analyze search results from Github. Find the perfect starter template simply by searching "Next.js shadcn dashboard". Results are rendered beautifully with Vercel AI SDK Generative UI.

## 🧱 Stack (Adapted from Next.js Morphic template)

- App framework: [Next.js](https://nextjs.org/)
- Text streaming / Generative UI: [Vercel AI SDK](https://sdk.vercel.ai/docs)
- Generative Model: [OpenAI](https://openai.com/)
- Search API: [Tavily AI](https://tavily.com/)
- Serverless Database: [Upstash](https://upstash.com/)
- Component library: [shadcn/ui](https://ui.shadcn.com/)
- Headless component primitives: [Radix UI](https://www.radix-ui.com/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Quickstart
[![capture](/public/capture-240404_blk.png)](https://github.com/cameronking4/github-repo-tavily-ai-search/assets/35708477/3344bfd5-ea36-487e-9525-421eb7fbff9f)

### 1. Fork and Clone repo

Fork the repo to your Github account

### 2. Install dependencies

```
pnpm i 
pnpm dev
```

### 3. Setting up Upstash Redis

Follow the guide below to set up Upstash Redis. Create a database and obtain `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. Refer to the [Upstash guide](https://upstash.com/blog/rag-chatbot-upstash#setting-up-upstash-redis) for instructions on how to proceed.

### 4. Fill out secrets

```
cp .env.local.example .env.local
```

Your .env.local file should look like this:

```
# OpenAI API key retrieved here: https://platform.openai.com/api-keys
OPENAI_API_KEY=

# Tavily API Key retrieved here: https://app.tavily.com/home
TAVILY_API_KEY=

# Upstash Redis URL and Token retrieved here: https://console.upstash.com/redis
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

_Note: This project focuses on Generative UI and requires complex output from LLMs. Currently, it's assumed that the official OpenAI models will be used. Although it's possible to set up other models, if you use an OpenAI-compatible model, but we don't guarantee that it'll work.
