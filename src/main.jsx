import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback='loading'>
			<Toaster
				position='center-bottom'
				reverseOrder={false}
				toastOptions={{
					duration: 2000,
				}}
			/>
			<App />
		</Suspense>
	</React.StrictMode>
)
