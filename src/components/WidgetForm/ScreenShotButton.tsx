import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";

export function ScreenShotButton () {
    const [isTakingScreeshot, setIsTakingScreenshot] = useState(false)
   
   
    async function handleTakeScreenShot () {
        setIsTakingScreenshot(true);
       const canvas = await html2canvas(document.querySelector('html')!)
       const base64Image = canvas.toDataURL('image/png');

       console.log(base64Image);

       setIsTakingScreenshot(false);
    }
    
    return (
        <button
                      type="button"
                      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brands-500"
                      >
                        <Camera className="w-6 h-6 text-zinc-100" />
                     </button>
    )
}