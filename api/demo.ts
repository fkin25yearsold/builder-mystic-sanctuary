import type { VercelRequest, VercelResponse } from '@vercel/node';

interface DemoResponse {
  message: string;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const response: DemoResponse = {
    message: "Hello from Vercel Function",
  };
  return res.status(200).json(response);
}
