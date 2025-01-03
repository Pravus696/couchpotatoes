var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import fetch from 'node-fetch';
const router = Router();
// API Route to upload image
router.post('/upload', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imageUrl, delay } = req.body; // Expect imageUrl and delay in request body
    // Define Headers
    const myHeaders = new Headers();
    myHeaders.append("apikey", "ivRVGWxuiXaQuO7NG2aUoZ6sLgQ9WR0v");
    // Request options
    const requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
        body: JSON.stringify({ url: imageUrl, delay })
    };
    try {
        // Make the API request
        const response = yield fetch("https://api.apilayer.com/image_upload/url", requestOptions);
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to upload image' });
    }
}));
export default router;
