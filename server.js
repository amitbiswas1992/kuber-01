const express = require('express');
const path = require('path');
const app = express();

// Get port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date()
    });
});

// Main routes for different HTML versions
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// About routes
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/02-about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '02_about.html'));
});

app.get('/03-about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '03_about.html'));
});

app.get('/06-about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '06_about.html'));
});

app.get('/07-about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '07_about.html'));
});

// Contact routes
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/02-contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '02_contact.html'));
});

app.get('/03-contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '03_contact.html'));
});

app.get('/04-contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '04_contact.html'));
});

app.get('/06-contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '06_contact.html'));
});

app.get('/07-contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '07_contact.html'));
});

// Blog routes
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.get('/02-blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '02_blog.html'));
});

app.get('/03-blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '03_blog.html'));
});

// Blog Single routes
app.get('/blog-single', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog-single.html'));
});

app.get('/02-blog-single', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '02_blog-single.html'));
});

app.get('/03-blog-single', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '03_blog-single.html'));
});

app.get('/04-blog-single', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '04_blog-single.html'));
});

// Services routes
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/02-services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '02_services.html'));
});

app.get('/03-services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '03_services.html'));
});

app.get('/06-services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '06_services.html'));
});

// Works routes
app.get('/works', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'works.html'));
});

app.get('/02-works', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '02_works.html'));
});

app.get('/03-works', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '03_works.html'));
});

// Work Single routes
app.get('/work-single', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'work-single.html'));
});

app.get('/02-work-single', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '02_work-single.html'));
});

app.get('/03-work-single', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '03_work-single.html'));
});

// PHP handler route
app.post('/handler.php', (req, res) => {
    // Handle form submissions here
    res.json({ status: 'success', message: 'Form submitted successfully' });
});

// Handle 404 - Page Not Found
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Website available at http://localhost:${PORT}`);
    console.log(`Health check available at http://localhost:${PORT}/health`);
});

