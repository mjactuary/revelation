<button 
  onClick={handleClick} 
  disabled={isLoading}
  className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto">
  {isLoading ? 'Loading...' : 'Ask'}
  
</button>



//NEW STUFF

'use client'

import { useState } from 'react'

function BibleCom({ inputKey }) {
    // Declare a state variable called 'count' and its setter 'setCount'
    // const [count, setCount] = useState(0);
  
    const [inputText, setInputText] = useState('');   // state for input text
    const [outputText, setOutputText] = useState(''); // state for output text
    const [isLoading, setIsLoading] = useState(false);
  
    // Handle form submission
    const handleClick = async (event)=> {

      event.preventDefault(); // prevent page reload on form submission
      setIsLoading(true);
      try {
        const responsePastor = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${inputKey}`, 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: "Provide the bible verse for: " + inputText + " and give a brief Christian commentary on the verse, your commentary should be three sentences or less "
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
  
    // Handle input text change
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    }
  
    return (
      
      
        
            <div className="flex items-center gap-x-8">
              <div className="px-4 py-5 sm:p-6">
                <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSubmit}>
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="textInput" className="sr-only">Text</label>
                    <input
                      type="text"
                      name="text"
                      id="textInput"
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="e.g. John 3:16"
                      value={inputText}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  
                  <button 
  onClick={handleSubmit} 
  disabled={isLoading}
  className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto">
  {isLoading ? 'Loading...' : 'Ask'}
  
</button>
                  
                  </form>
                <div className="mt-5">
  <p className="text-white">{outputText}</p>
</div>
              </div>
            </div>

          
           
        
  
          
    )
  }
  
  export default BibleCom;