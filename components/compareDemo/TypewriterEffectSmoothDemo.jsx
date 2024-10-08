"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const wordsGenerate = `עם שנים של ניסיון וידע מעמיק בשוק המקומי, שאדי מחויב לעזור לך למצוא את הנכס המושלם שמתאים לצרכים שלך.
בין אם אתה קונה, מוכר או משקיע, שאדי מציע שירות אישי והכוונה מקצועית בכל שלב בדרך. 
בואו נעשה את המסע שלך בנדל"ן בחיפה לחלק ויעיל.

`;
 


export default function TypewriterEffectSmoothDemo() {
  return (
    <>
      <h3 className='text-3xl font-bold'>שאדי מטאנס</h3>
          <div className="text-2xl flex flex-col md:flex-row md:gap-2 font-bold"><h2>יועץ ומשווק נדל&quot;ן</h2>
          <h2> באזור חיפה.</h2></div>
          <div className="md:w-1/2">
          <TextGenerateEffect words={wordsGenerate} />
          </div>
          
      </>
   
  );
}
