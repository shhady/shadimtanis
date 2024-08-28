import dynamic from 'next/dynamic'
import { Suspense } from 'react'
// import '../styles/globals.css'

// Dynamically load the CanvasScene to avoid SSR issues
const CanvasScene = dynamic(() => import('./CanvasScene'), {
  ssr: false,
})

export default function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CanvasScene />
      </Suspense>
      <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        <div style={{ position: 'absolute', bottom: 40, right: 20, fontSize: '18px', color:'white' }}>
        רוג'ה נדאף
          <br />
          ייעוץ / שיווק נדל&quot;ן - חיפה
        </div>
        {/* <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} /> */}
        {/* <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }} href="#">
          scroll up/down ...
        </a> */}
      </div>
    </>
  )
}
