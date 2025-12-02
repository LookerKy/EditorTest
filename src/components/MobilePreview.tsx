import { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr'; // 한글 지원 파일 import
import './MobilePreview.css';

// Plugins (Must match Editor configuration for consistent rendering)
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

// colorSyntax 제거 (Viewer에서의 충돌 방지)
import 'tui-color-picker/dist/tui-color-picker.css';
// import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

interface MobilePreviewProps {
  content: string;
}

const MobilePreview = ({ content }: MobilePreviewProps) => {
  const viewerRef = useRef<Viewer>(null);

  useEffect(() => {
    // 인스턴스가 정상적으로 생성되었는지 확인 후 실행
    const viewerInstance = viewerRef.current?.getInstance();
    if (viewerInstance) {
      viewerInstance.setMarkdown(content);
    }
  }, [content]);

  return (
    <div className="mobile-frame">
      <div className="mobile-header">
        <span>Mobile Preview (375px)</span>
      </div>
      <div className="mobile-content">
        <Viewer
          ref={viewerRef}
          initialValue={content || ' '}
          height="100%"
          language="ko-KR" 
          plugins={[
            [codeSyntaxHighlight, { highlighter: Prism }],
            // colorSyntax // Viewer에서는 제외
          ]}
        />
      </div>
    </div>
  );
};

export default MobilePreview;