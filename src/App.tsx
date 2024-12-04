import React from 'react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

const Popup: React.FC = () => {
  const [openAIKey, setOpenAIKey] = React.useState('');
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    (async function loadOpenAPIKey() {
      if (!chrome) return;
      const apiKeyFromStorage = (await chrome.storage.local.get('apiKey')) as {
        apiKey?: string;
      };
      if (apiKeyFromStorage.apiKey) setOpenAIKey(apiKeyFromStorage.apiKey);
      setIsLoaded(true);
    })();
  }, []);

  const handleAddOpenAPIKey = async () => {
    if (openAIKey) {
      await chrome.storage.local.set({ apiKey: openAIKey });
    }
  };

  return (
    <div className="relative w-[350px] h-[250px] bg-black p-4 text-white">
      {isLoaded && (
        <div>
          <div className="text-center">
            <h1 className="text-white font-bold text-2xl">AI Google Form Solver</h1>
          </div>
          <div className="mt-10 flex flex-col gap-2">
            <Input
              value={openAIKey}
              onChange={(e) => setOpenAIKey(e.target.value)}
              placeholder="GEMINI API Key"
            />
            <Button onClick={handleAddOpenAPIKey} className="dark">
              Save
            </Button>
          </div>
          <div className='text-2xl text-center'>
            Made by <a href="https://github.com/vewake" target="_blank" className="text-blue-500">Vivek</a>
          </div>

          <div className='flex flex-row justify-center'>
            <a href=" https://github.com/vewake/aiMCQGoogleformHelper" className="text-blue-500" target="_blank">
              Github
            </a>
          </div>

        </div>
      )}
    </div>
  );
};

export default Popup;
