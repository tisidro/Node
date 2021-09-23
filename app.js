const express = require('express');

const app = express();

//register view engine

app.set('view engine', 'ejs');

app.listen(3000);

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    next();
});

app.get('/', (req, res) => {
    const blogs = [
        { title: 'First test blog', snippet: 'lorem ipsum dolor sit amet consectetur' },
        { title: 'Second test blog', snippet: 'lorem ipsum dolor sit amet consectetur' },
        { title: 'Third test blog', snippet: 'lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: 'Home', blogs: blogs });//can also have just blogs here instead of blogs: blogs since they are the same!
});

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create A New Blog' });
});

app.use((req, res) => {
    res.status(404).render('404'), { title: '404' };
});
