import axios from 'axios';

const API_KEY = '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';

export const getSuggestions = async (inputText: any) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo-1106",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant."
          },
          {
            role: "user",
            content: inputText
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error();
    throw error;
  }
};
