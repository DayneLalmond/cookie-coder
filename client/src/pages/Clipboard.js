import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { ADD_CLIPBOARD } from '../utils/mutations';
import '../styles/index.css';

export default function Clipboard() {

  const [code, setCode] = useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const [topic, setTopic] = useState('');
  const [formErr, setFormErr] = useState(null)
  const [addToClipboard, { error }] = useMutation(ADD_CLIPBOARD)
  const HandleButtonClick = async (event) => {


    if (topic.length <= 10) {
      setFormErr('Topic needs to be longer')
    } else {
      setFormErr(null)
    }
    // notice user about condition

    const response = await addToClipboard({
      variables: {
        code,
        topic,
      }
    })
    console.log(response)
  }

  return (
    <div className="clipboard">
      <div>
        <h4>New Clipboard</h4>
      </div>
      <CodeEditor
        value={code}
        language="js"
        className="clipboardarea"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={10}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}/>

      <textarea value={topic} onChange={(evn) => setTopic(evn.target.value)} rows="4" cols="100"></textarea>
      <button onClick={HandleButtonClick}>Save</button>
      {formErr && <p>{formErr}</p>}
    </div>
  );
};