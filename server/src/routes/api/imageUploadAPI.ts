import { Router, Request, Response } from 'express';
import fetch from 'node-fetch';

const router = Router();

// API Route to upload image
router.post('/upload', async (req: Request, res: Response) => {
  const { imageUrl, delay } = req.body; // Expect imageUrl and delay in request body

  // Define Headers
  const myHeaders: Headers = new Headers();
  myHeaders.append("apikey", "ivRVGWxuiXaQuO7NG2aUoZ6sLgQ9WR0v");

  // Request options
  const requestOptions: RequestInit = {
    method: 'POST',
    redirect: 'follow' as RequestRedirect,
    headers: myHeaders,
    body: JSON.stringify({ url: imageUrl, delay })
  };

  try {
    // Make the API request
    const response = await fetch("https://api.apilayer.com/image_upload/url", requestOptions);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

export default router;