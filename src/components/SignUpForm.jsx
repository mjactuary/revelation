'use client'
import { useId } from 'react'
import { useState } from 'react'
import { Button } from '@/components/Button'
import React from 'react'


export function SignUpForm({ inputKey }) {
  let id = useId()
  
  // Local state to manage input and output text
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Event handler to set outputText to inputText when button is clicked
  const handleClick = async (event)=> {

    event.preventDefault(); // prevent page reload on form submission
    setIsLoading(true);
    try {
      const responsePastor = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`, 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: "You are a master Christian theologian who has studied the Book of Revelation, you are asked to answer the following question or explain the following concept: " + inputText + " :your response should be three sentences or less "
            }
          ]
        })
      });

          // Check if the response was not successful
  if (!responsePastor.ok) {
    const errorData = await responsePastor.json();
    console.error("Error from OpenAI API:", errorData);
    throw new Error(`OpenAI API Error: ${errorData.error || 'Unknown Error'}`);

  }

  const dataPastor = await responsePastor.json();
  let responseTextPastor = dataPastor.choices && dataPastor.choices[0] && dataPastor.choices[0].message ? dataPastor.choices[0].message.content.trim() : "";
  setOutputText(responseTextPastor);

} catch (error) {
  console.error("There was an error fetching the data:", error);
  setOutputText(`The Pastor is unfortunately busy.`);
} finally {
  setIsLoading(false);
}


    
  }


  return (
   <div>
   <div className="relative isolate mt-8 flex items-center pr-1">
      <label htmlFor={id} className="sr-only">
        Question
      </label>
      <input
        type="text"
        name="question"
        id={id}
        placeholder="Why does the lamb have 7 horns?"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
        value={inputText} // bind the input value to inputText state
        onChange={(e) => setInputText(e.target.value)} // update inputText state when input value changes
      />
      <Button type="button" onClick={handleClick} isLoading={isLoading}>
        Ask
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
      
    </div>
    <div className="text-white">{outputText}</div>
  </div>
  )
}

