const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const axios = require('axios'); // Add axios for HTTP requests
const app = express();
const port = 3000;

// Konfigurasi koneksi ke database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'otics_tps',
    password: 'sukatno_ali',
    database: 'db_energy_area_compressor'
});

// Membuka koneksi ke database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1); // Keluar dari proses jika koneksi gagal
    }
    console.log('MySQL Connected...');
});

// Middleware untuk menangani JSON dan CORS
app.use(express.json());
app.use(cors());

// API untuk mengambil semua data dari tabel tb_pershift_kub
app.get('/api/tb_pershift_kub', (req, res) => {
    const sql = 'SELECT * FROM tb_pershift_kub';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

// API untuk mengambil data berdasarkan shift
app.get('/api/tb_pershift_kub/shift/:shift', (req, res) => {
    const shift = req.params.shift;
    const sql = 'SELECT * FROM tb_pershift_kub WHERE shift = ?';
    db.query(sql, [shift], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

// API untuk mengambil data berdasarkan hari (day)
app.get('/api/tb_pershift_kub/day/:day', (req, res) => {
    const day = req.params.day;
    if (isNaN(day)) {
        return res.status(400).json({ error: 'Invalid day parameter. Day must be a number.' });
    }

    const sql = 'SELECT * FROM tb_pershift_kub WHERE day = ?';
    db.query(sql, [day], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

// API untuk mengambil data berdasarkan minggu (week)
app.get('/api/tb_pershift_kub/week/:week', (req, res) => {
    const week = req.params.week;
    if (isNaN(week)) {
        return res.status(400).json({ error: 'Invalid week parameter. Week must be a number.' });
    }

    const sql = 'SELECT * FROM tb_pershift_kub WHERE week = ?';
    db.query(sql, [week], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

// API untuk mengambil data berdasarkan bulan (month)
app.get('/api/tb_pershift_kub/month/:month', async (req, res) => {
    const month = req.params.month;
    try {
        const response = await axios.get(`https://script.google.com/macros/s/AKfycbyU3lbuD9vAi723xQeXwdEL7wqJNhK82ndYuuV-1lNRYNu6ss4G24OAT3I1uUvuUbeE/exec?month=${month}`);
        res.json(response.data);
    } catch (err) {
        console.error('Error fetching data from Google Sheets:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API untuk mengambil data berdasarkan tahun (year)
app.get('/api/tb_pershift_kub/year/:year', (req, res) => {
    const year = req.params.year;
    if (isNaN(year)) {
        return res.status(400).json({ error: 'Invalid year parameter. Year must be a number.' });
    }

    const sql = 'SELECT * FROM tb_pershift_kub WHERE year = ?';
    db.query(sql, [year], (err, results) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});