import './style.css'

import { EditorView, basicSetup } from "codemirror"

const theme = EditorView.baseTheme({
    "&": {
        backgroundColor: "#034"
    }
})

const view = new EditorView({
    extensions: [
        basicSetup,
        //theme
    ],
    parent: document.querySelector("#app")!,
})

console.log(view)