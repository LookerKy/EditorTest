import { useState } from 'react';
import './App.css';
import UREditor from "./components/EditorComponents";
import MobilePreview from "./components/MobilePreview";

function App() {
  const [content, setContent] = useState('');

  const handleEditorChange = (markdown: string) => {
    setContent(markdown);
    console.log('Editor Content:', markdown);
  };

  return (
    <>
      <div>
        <h2>Toast UI Editor V3 (React 19)</h2>
        
        <div className="main-container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div className="editor-wrapper" style={{ flex: '1', minWidth: '600px', maxWidth: '800px' }}>
              <UREditor
                  initialValue="# Hello World"
                  onChange={handleEditorChange}
              />
            </div>

            <div className="preview-wrapper">
                <MobilePreview content={content} />
            </div>
        </div>

        <div style={{ marginTop: '40px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
           <h3>Raw Markdown State</h3>
           <pre style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>{content}</pre>
        </div>
      </div>
    </>
  );
}

export default App;
