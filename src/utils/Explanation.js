const API_KEY = "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";

export async function explainQuestion({ question }) {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "meta-llama/llama-3-8b-instruct",
            messages: [
                {
                    role: "user",
                    content: `Explain the following question in SIMPLE  English.
                                Rules:
                                - Maximum 100 words (strict limit, do not exceed)
                                - Keep sentences short

                                Question: ${question}`
                }
            ]
        })
    });

    const data = await response.json();

    return data.choices[0].message.content;
}
