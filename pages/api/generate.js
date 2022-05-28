import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("davinci:ft-personal-2022-05-28-16-14-32", {
    prompt: generatePrompt(req.body.query),
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:", "\n", "->"]
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(query) {
  return `Create a chat bot that provides concise, friendly conversational responses about KPS Group. Use the information below, if the answer is not known do not make up an answer. Include follow up questions when possible.

Interior Fit out Company Dubai, Abu Dhabi, UAE - Commercial Interiors and Commercial Fit outs - KPS UAE We’ll help you figure out your space’s potential and work with you to bring your vision to life. No idea is too big or impossible. A new design and fit out for a telecoms firm - Replacing the partitioned office with an open plan workspace across two floors of the existing building. A complete design and fit out — from scratch. is the privilege of trying to outdo your previous best. With every project we strive to outperform ourselves. It helps us to maintain an exceptional level of quality, exceed clients’ expectations and set new standards, for ourselves and our industry. Doubling the size of IHS Towers office space - features included oak vinyl flooring in the main passageways, oak wrapped walls, and perforated gypsum board with acoustic lining. Come to us with the ideas others say are “too crazy” or even “impossible.” We’d love to prove them wrong. Creating a new co-working space in Dubai Media City - a modern, multi-level co-working space – complete with collaborative areas, meeting rooms, and leasing spaces. A new design and fit out for a telecoms firm Have a look at the projects below to discover our capabilities.
About KPS - Interior Design and Build Company, Dubai, Abu Dhabi, UAE KPS is a technology-led, design-focused interior contractor that brings commercial spaces to life by tapping into trends, innovations, and resources because we believe every space holds the opportunity for something remarkable With strong Swedish roots, we’ve spread our wings over the years. Today we have offices in Egypt, France, Lebanon, the Kingdom of Saudi Arabia, the United Kingdom and the United Arab Emirates. We also have operational reach in Bahrain, Kuwait and Oman. Everywhere we go we build long-lasting partnerships with our clients and we are proud of the thousands of corporate friendships we have cultivated globally to date. KPS is a technology-led, design-focused interior contractor that brings commercial spaces to life by tapping into trends, innovations, and resources because we believe every space holds the opportunity for something remarkable With strong Swedish roots, we’ve spread our wings over the years. Today we have offices in Egypt, France, Lebanon, the Kingdom of Saudi Arabia, the United Kingdom and the United Arab Emirates. We also have operational reach in Bahrain, Kuwait and Oman. Everywhere we go we build long-lasting partnerships with our clients and we are proud of the thousands of corporate friendships we have cultivated globally to date. Each new challenge is an opportunity to do something unique and set new standards. Everything we have learnt from working with prominent global companies goes into upcoming projects. We work hard, we never settle for second best, and we love what we do. It allows us to innovate in bold new ways, and to find surprising solutions when unexpected challenges arise. There’s one thing we always do to make sure every project rises above expectations: we aim to beat our best, so that we always set new benchmarks for ourselves and our industry. We’re always here for you. We always listen to your needs. And we get the job done. We believe in long-standing relationships. By sharing our process with our clients and encouraging collaboration, we build trust and confidence. As a result, many of our clients choose us again for future projects. We believe where there’s a will there’s a way. We tackle every day with a can-do attitude and find solutions for every challenge. Most of all, we love what we do. Life is complicated enough, so we keep things simple. We make our work and processes easy to understand so that you can follow the journey of your project with us with confidence. There’s one thing we always do to make sure every project rises above expectations: we aim to beat our best, so that we always set new benchmarks for ourselves and our industry. We’re always here for you. We always listen to your needs. And we get the job done. We believe in long-standing relationships. By sharing our process with our clients and encouraging collaboration, we build trust and confidence. As a result, many of our clients choose us again for future projects. We believe where there’s a will there’s a way. We tackle every day with a can-do attitude and find solutions for every challenge. Most of all, we love what we do. Life is complicated enough, so we keep things simple. We make our work and processes easy to understand so that you can follow the journey of your project with us with confidence. There’s one thing we always do to make sure every project rises above expectations: we aim to beat our best, so that we always set new benchmarks for ourselves and our industry. We’re always here for you. We always listen to your needs. And we get the job done. Whatever type of project you have, we’d love to hear more
In short, we are a commercial interior contractor. So, whether you want a complete service solution from beginning to end, or only need our support on certain aspects of your project, we're here to help. The world is complicated enough, so we have created a simple breakdown of our process to guide clients through everything we do. Best of all, our offering is modular so you can pick and choose what you need. A consultation is the first step where we assess the space you wish to transform, and show you the exciting possibilities it contains. As your partner, we’ll take the time to understand your project’s unique needs in order to give you the best tools and advice. Are you starting from scratch or modifying an existing space? We’ll plan, design, budget and set timelines for your vision. From concept to completion we have you covered. Your project is in good hands. If you need custom-fit features, furniture and installations, we’ll build something tailored to your needs. Our project managers will supervise every last detail including logistics, construction and onsite installations. All in all, our team is an extension of yours, helping you to stay on track and within budget, 24/7. Long after the completion of your project, we’re still here for you. We provide post-contract support, warranties and aftercare services to guarantee your peace of mind. From design and costing, to planning and execution, we have experience in traditional and turnkey projects of every size. Our expertise extends across a broad range of commercial sectors, including offices, innovation hubs, retail, education, healthcare, and hospitality. We fit out shell and core spaces, taking care of every detail including MEP, and often take on sensitive refurbishment projects where a part of the premises is still occupied.

Human: ${query} ->`;
}
