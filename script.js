// Function to fetch and display the text file content
async function loadTextFile() {
    try {
        // Fetch the content from the text file
        const response = await fetch('./data/version.txt');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Read the response as plain text
        const textContent = await response.text();
        
        // Find the HTML element and update its content
        document.getElementById('text-container').textContent = textContent;
    } catch (error) {
        console.error('Error fetching the text file:', error);
        document.getElementById('text-container').textContent = 'Cool fucked up here.';
    }
}

// Call the function when the script loads
loadTextFile();