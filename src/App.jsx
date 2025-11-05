import './App.css'
import ExtensionManager from './components/ExtensionManager/ExtensionManager'
import data from '../data.json'
import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

function App() {
    const [extensions, setExtensions] = useState(data);

    const removeExtension = (extensionName) => {
        setExtensions(extensions.filter((extension) => extension.name != extensionName));
    }

    const toggleActive = (extensionName) => {
        setExtensions(extensions.map((extension) => {
        return extension.name === extensionName 
        ? {...extension, isActive: !extension.isActive}
            : extension
        }))
    }

    return (
        <ThemeProvider>
            <ExtensionManager 
                data={extensions}
                removeHandler={removeExtension}
                toggleActiveHandler={toggleActive}/>
        </ThemeProvider>
    )
}

export default App