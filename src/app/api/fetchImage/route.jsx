// app/api/fetchImage/route.js

export async function GET(req) {
    // Extract the URL from the request
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
  
    // Log the incoming request
    console.log('Incoming request:', {
      method: req.method,
      id: id,
    });
  
    if (!id) {
      console.error('No file ID provided');
      return new Response(JSON.stringify({ error: 'No file ID provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    const imageUrl = `https://drive.google.com/uc?export=view&id=${id}`;
    console.log(`Fetching image from URL: ${imageUrl}`);
  
    try {
      // Fetch the image from Google Drive
      const response = await fetch(imageUrl);
  
      // Log the response status
      console.log(`Response status from Google Drive: ${response.status}`);
  
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
  
      const buffer = await response.arrayBuffer(); // Fetch the binary data of the image
  
      // Return the image data as a buffer
      return new Response(Buffer.from(buffer), {
        status: 200,
        headers: {
          'Content-Type': 'image/jpeg', // Adjust based on the actual file type
          'Access-Control-Allow-Origin': '*', // Allow CORS from any origin
        },
      });
    } catch (error) {
      console.error('Error fetching image:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch image' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }