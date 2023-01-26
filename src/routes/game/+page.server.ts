import { error } from '@sveltejs/kit';
import { OPENAI_API_KEY } from '$env/static/private';
import { Configuration, OpenAIApi } from "openai"
import type { PageServerLoad, Actions } from './$types';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const load = (async ({ fetch, params, url }) => {
  let name = url.searchParams.get('name');
  console.log("🚀 ~ file: +page.server.ts:14 ~ load ~ name", name)

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Give me a quote from ${name} first followed by 2 random quotes fromfamous people in an array format without names`,
    temperature: 0.6,
    max_tokens: 225,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  return {
    openAIResponse: response.data.choices[0],
  }


}) satisfies PageServerLoad;