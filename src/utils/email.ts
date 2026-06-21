import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export function initEmailJS() {
  if (!PUBLIC_KEY) {
    console.warn('EmailJS public key is not set. Add VITE_EMAILJS_PUBLIC_KEY to your .env file.');
    return;
  }

  emailjs.init(PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    throw new Error('EmailJS is not configured. Check your .env values for VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID.');
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    from_name: data.name,
    from_email: data.email,
    name: data.name,
    email: data.email,
    subject: data.subject || 'No subject provided',
    message: data.message,
    to_name: 'Albert John C. Diaz',
    reply_to: data.email,
  });
}
