import { useRef } from 'react';

// Toast UI Editor Imports
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr'; // 한글 지원

// Plugin Imports
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

interface UREditorProps {
  initialValue?: string;
  onChange?: (markdown: string) => void;
}

const UREditor = ({ initialValue = '내용을 입력하세요.', onChange }: UREditorProps) => {
  const editorRef = useRef<Editor>(null);

  const handleChange = () => {
    if (editorRef.current) {
      const instance = editorRef.current.getInstance();
      const markdown = instance.getMarkdown();
      if (onChange) {
        onChange(markdown);
      }
    }
  };

  return (
    <Editor
      ref={editorRef}
      initialValue={initialValue}
      previewStyle="tab"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      language="ko-KR"
      plugins={[
        [codeSyntaxHighlight, { highlighter: Prism }],
        colorSyntax
      ]}
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
        ['scrollSync'],
      ]}
      onChange={handleChange}
    />
  );
};

export default UREditor;