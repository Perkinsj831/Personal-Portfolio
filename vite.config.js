import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_MAILCHIMP_URL': JSON.stringify(process.env.REACT_APP_MAILCHIMP_URL),
    'process.env.REACT_APP_MAILCHIMP_U': JSON.stringify(process.env.REACT_APP_MAILCHIMP_U),
    'process.env.REACT_APP_MAILCHIMP_ID': JSON.stringify(process.env.REACT_APP_MAILCHIMP_ID),
  }
});