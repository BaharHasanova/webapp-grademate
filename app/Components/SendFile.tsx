// utils/sendFile.ts

export async function sendFile(file: File): Promise<any | null> {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://example.com/upload', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    const responseData = await response.json();
    console.log('File uploaded successfully:', responseData);
    return responseData;
  } catch (error) {
    console.error('Error uploading file:', error);
    return null;
  }
}
