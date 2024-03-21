import { ThemeProvider } from "@/components/theme-provider"
import './App.css'
import ModeToggle from '@/components/mode-toggle'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Page</h1>
        <div className="mb-4">
          <ModeToggle />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Primary Button</button>
          <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Secondary Button</button>
        </div>
        <div>
          <p className="text-xl text-gray-800 mb-2">This is large text</p>
          <p className="text-base text-gray-800 mb-2">This is medium text</p>
          <p className="text-sm text-gray-800">This is small text</p>
        </div>
      </div>
    </ThemeProvider>
  )
}
