import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const forbidenWords = {
    "Q": "",
    "X": "",
    "W": "",
    "Ё": "Е",
    "q": "",
    "x": "",
    "w": "",
    "ё": "е"
}
root.render(<Content />)

function Content() {
    const [text, setText] = React.useState("");

    React.useEffect(() => {
        //setText(text.toUpperCase());
        if (text != "") {
            if (text[text.length - 1] in forbidenWords) {
                setText(text.slice(0, -1) + forbidenWords[text[text.length - 1]])
            }
        }
    })

    function fixText(event) {
        setText(event.target.value);
    }
    return(
        <>
            <h1>Текстовое поле</h1>
            <textarea id="inp" placeholder="Введите текст" cols="80" rows="16" onChange={fixText} value={text} />
            <p></p>
        </>
    )
}

reportWebVitals();
