// --- DATA MATERI LENGKAP ---
const materiData = {
    'bab1': `
        <h1>I. Pengantar Kalkulus</h1>
        
        <h2>1. Pengertian Kalkulus</h2>
        <p>Kalkulus adalah cabang matematika yang mempelajari **perubahan** dan **akumulasi perubahan** pada suatu besaran. Kalkulus digunakan untuk memahami bagaimana suatu nilai berubah dari waktu ke waktu dan bagaimana perubahan-perubahan kecil tersebut dijumlahkan menjadi satu kesatuan.</p>
        
        <p>Secara umum, kalkulus terbagi menjadi dua bagian utama:</p>
        <ol>
            <li><strong>Kalkulus Diferensial:</strong> Mempelajari **Turunan** (laju perubahan sesaat).</li>
            <li><strong>Kalkulus Integral:</strong> Mempelajari **Integral** (akumulasi atau hasil total perubahan).</li>
        </ol>

        <h2>2. Mengapa Kalkulus Penting?</h2>
        <p>Dalam kehidupan nyata, banyak fenomena yang tidak bersifat tetap, tetapi selalu berubah, seperti:</p>
        <ul>
            <li>Kecepatan kendaraan (tidak konstan)</li>
            <li>Pertumbuhan penduduk</li>
            <li>Perubahan suhu</li>
            <li>Keuntungan perusahaan</li>
        </ul>
        <p>Kalkulus memungkinkan kita:</p>
        <ul>
            <li>Mengukur laju perubahan (Turunan).</li>
            <li>Menghitung hasil total dari perubahan (Integral).</li>
            <li>Membuat model matematika dari kejadian nyata.</li>
        </ul>
        
        <hr>

        <h2>3. Konsep Dasar yang Mendasari Kalkulus</h2>
        <p>Kalkulus dibangun di atas tiga konsep utama:</p>

        <h3>3.1 Fungsi</h3>
        <p>Fungsi adalah aturan yang menghubungkan setiap nilai variabel bebas (input) dengan tepat satu nilai variabel terikat (output).</p>
        <p>Ditulis sebagai:</p>
        \\[ y = f(x) \\]
        <p>Keterangan: \\(x\\) adalah variabel bebas dan \\(y\\) adalah variabel terikat.</p>
        <p>Contoh: Jika \\(f(x) = x^2 + 2x\\). Jika \\(x=2\\), maka \\(f(2) = 4 + 4 = 8\\).</p>
        
        <h3>3.2 Perubahan</h3>
        <p>Kalkulus berfokus pada bagaimana suatu nilai berubah, yang bisa bersifat besar atau sangat kecil (mendekati nol).</p>
        
        <h3>3.3 Limit</h3>
        <p>Limit adalah konsep dasar kalkulus yang menjelaskan nilai yang didekati suatu fungsi ketika variabelnya mendekati nilai tertentu.</p>
        <p>Notasi:</p>
        \\[ \lim_{x \\to a} f(x) \\]
        <p>Limit adalah fondasi matematis yang memungkinkan pendefinisian Turunan dan Integral.</p>
        
        <hr>

        <h2>4. Sejarah Singkat Kalkulus</h2>
        <p>Kalkulus dikembangkan secara independen pada abad ke-17 oleh:</p>
        <ul>
            <li><strong>Isaac Newton</strong> (Inggris)</li>
            <li><strong>Gottfried Wilhelm Leibniz</strong> (Jerman)</li>
        </ul>
        <p>Tujuan awal pengembangan kalkulus adalah untuk menjelaskan gerak benda dan menghitung luas/volume. Notasi \\(dx/dy\\) dan \\(\\int\\) yang sering digunakan sekarang banyak berasal dari Leibniz.</p>

        <h2>5. Hubungan Kalkulus dengan Ilmu Lain</h2>
        <p>Kalkulus sangat erat kaitannya dengan berbagai bidang:</p>
        <ul>
            <li><strong>Fisika:</strong> Menghitung Kecepatan, Percepatan, dan Gerak Benda.</li>
            <li><strong>Teknik:</strong> Analisis struktur, Desain mesin, dan Elektronika.</li>
            <li><strong>Ekonomi:</strong> Menghitung Biaya Marginal, Keuntungan Maksimum.</li>
            <li><strong>Biologi:</strong> Memodelkan Pertumbuhan populasi dan Penyebaran penyakit.</li>
        </ul>

        <h2>6. Contoh Penerapan Awal Kalkulus (Kecepatan Sesaat)</h2>
        <p>Untuk perpindahan \\(\\Delta s\\) dalam waktu \\(\\Delta t\\), kecepatan rata-rata adalah:</p>
        \\[ v_{\\text{rata-rata}} = \\frac{\\Delta s}{\\Delta t} \\]
        <p>Namun, untuk mengetahui kecepatan sesaat, kita harus membuat interval waktu \\(\\Delta t\\) menjadi sangat kecil (mendekati nol) menggunakan limit:</p>
        \\[ v_{\\text{sesaat}} = \lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t} \\]
        <p>Ekspresi terakhir ini adalah definisi formal dari turunan (diferensial).</p>

        <hr>

        <h2>7. Tujuan Mempelajari Kalkulus</h2>
        <p>Mempelajari kalkulus bertujuan untuk: Memahami perubahan, Menyelesaikan masalah kompleks, Menghubungkan matematika dengan dunia nyata, dan Mengembangkan kemampuan analisis yang lebih dalam.</p>
    `,
    'bab2': `
        <h1>II. Sistem Bilangan Riil </h1>
        
        <h2>1. Pengertian Bilangan Riil</h2>
        <p>Bilangan riil adalah semua bilangan yang dapat dituliskan dan **ditempatkan pada garis bilangan**.</p>
        <p>Bilangan riil mencakup seluruh bilangan yang biasa digunakan dalam kehidupan sehari-hari, baik bilangan positif, negatif, pecahan, maupun bilangan desimal.</p>
        <p>Dalam kalkulus, bilangan riil sangat penting karena:</p>
        <ul>
            <li>Nilai variabel pada fungsi biasanya berupa bilangan riil.</li>
            <li>Konsep limit, turunan, dan integral menggunakan bilangan riil.</li>
        </ul>

        <hr>

        <h2>2. Jenis-Jenis Bilangan Riil</h2>
                
        <h3>2.1 Bilangan Asli (\\(\\mathbb{N}\\))</h3>
        <p>Bilangan yang digunakan untuk menghitung benda. Contoh: \\(1, 2, 3, 4, 5, \\dots\\).</p>
        
        <h3>2.2 Bilangan Cacah</h3>
        <p>Bilangan cacah adalah bilangan asli yang ditambah dengan nol. Contoh: \\(0, 1, 2, 3, 4, 5, \\dots\\).</p>
        
        <h3>2.3 Bilangan Bulat (\\(\\mathbb{Z}\\))</h3>
        <p>Bilangan yang mencakup bilangan bulat positif, nol, dan bilangan bulat negatif. Contoh: \\(\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots\\).</p>
        
        <h3>2.4 Bilangan Rasional (\\(\\mathbb{Q}\\))</h3>
        <p>Bilangan yang dapat ditulis dalam bentuk pecahan \\(\\frac{a}{b}\\) di mana \\(a, b\\) adalah bilangan bulat dan \\(b \\neq 0\\). Desimalnya berhenti atau berulang. Contoh: \\(\\frac{1}{2}, 3, 0.75, -\\frac{5}{4}\\).</p>
        
        <h3>2.5 Bilangan Irasional</h3>
        <p>Bilangan yang tidak dapat ditulis dalam bentuk pecahan sederhana. Desimalnya tidak berhenti dan tidak berulang. Contoh: \\(\\sqrt{2}, \\pi, e\\).</p>
        
        <hr>

        <h2>3. Garis Bilangan Riil</h2>
        <p>Garis bilangan adalah garis lurus yang digunakan untuk menunjukkan posisi setiap bilangan riil.</p>
                <ul>
            <li>Bilangan positif berada di sebelah kanan nol.</li>
            <li>Bilangan negatif berada di sebelah kiri nol.</li>
            <li>Nol berada di tengah.</li>
        </ul>
        <p>Setiap titik pada garis bilangan menunjukkan satu bilangan riil.</p>

        <hr>

        <h2>4. Operasi dan Sifat Dasar</h2>

        <h3>4.1 Operasi pada Bilangan Riil</h3>
        <p>Bilangan riil dapat dioperasikan dengan operasi dasar matematika (Penjumlahan, Pengurangan, Perkalian, Pembagian). Catatan: Pembagian dengan nol tidak diperbolehkan.</p>
        
        <h3>4.2 Sifat-Sifat Bilangan Riil (Terhadap Penjumlahan dan Perkalian)</h3>
        <ol>
            <li><strong>Sifat Komutatif (Pertukaran):</strong> \\(a + b = b + a\\) dan \\(a \\times b = b \\times a\\).</li>
            <li><strong>Sifat Asosiatif (Pengelompokan):</strong> \\((a + b) + c = a + (b + c)\\) dan \\((a \\times b) \\times c = a \\times (b \\times c)\\).</li>
            <li><strong>Sifat Distributif (Penyebaran):</strong> \\(a \\times (b + c) = (a \\times b) + (a \\times c)\\).</li>
        </ol>

        <hr>

        <h2>5. Nilai Mutlak dan Interval</h2>
        
        <h3>5.1 Nilai Mutlak</h3>
        <p>Nilai mutlak (\\(|x|\\)) adalah jarak suatu bilangan dari nol pada garis bilangan, selalu bernilai non-negatif.</p>
        \\[ |x| = \\begin{cases} x & \\text{jika } x \\geq 0 \\\\ -x & \\text{jika } x < 0 \\end{cases} \\]
        <p>Contoh: \\(|5| = 5\\) dan \\(|-5| = 5\\).</p>

        <h3>5.2 Interval Bilangan Riil</h3>
        <p>Interval adalah kumpulan bilangan riil yang berada di antara dua bilangan tertentu. Interval sering digunakan dalam menentukan domain fungsi dan himpunan penyelesaian pertidaksamaan dalam kalkulus.</p>
        <p>Contoh: Bilangan \\(x\\) di mana \\(1 < x < 5\\).</p>

        <hr>

        <h2>6. Peran Bilangan Riil dalam Kalkulus</h2>
        <p>Bilangan riil berperan penting dalam:</p>
        <ul>
            <li>Menentukan nilai fungsi dan operasinya.</li>
            <li>Menentukan domain dan range (jangkauan) fungsi.</li>
            <li>Menghitung limit, turunan, dan integral.</li>
        </ul>
        <p>Tanpa bilangan riil, kalkulus tidak dapat diterapkan secara nyata.</p>

        <h2>7. Kesimpulan</h2>
        <p>Bilangan riil mencakup semua bilangan pada garis bilangan. Terdiri dari bilangan asli, cacah, bulat, rasional, dan irasional. Sistem bilangan riil adalah fondasi utama yang memungkinkan semua perhitungan dan analisis dalam kalkulus.</p>
    `,
    'bab3': `
        <h1>III. Sistem Koordinat Kartesius</h1>
        
        <h2>1. Pengertian Sistem Koordinat Kartesius</h2>
        <p>Sistem koordinat Kartesius adalah sistem penentuan posisi suatu titik pada bidang datar (bidang-XY) dengan menggunakan dua garis bilangan yang saling tegak lurus (ortogonal).</p>
        <p>Sistem ini sangat penting dalam kalkulus karena digunakan untuk:</p>
        <ul>
            <li>Menggambar grafik fungsi dan menganalisis hubungan antar variabel.</li>
            <li>Menjadi dasar visual dalam pembahasan limit, turunan, dan integral.</li>
        </ul>
        
        <hr>

        <h2>2. Unsur-Unsur Utama</h2>
        <p>Sistem koordinat Kartesius terdiri dari:</p>

        <h3>2.1 Sumbu Mendatar (Sumbu X)</h3>
        <p>Garis horizontal, digunakan untuk menunjukkan nilai **variabel bebas** (absis). Nilai bertambah ke kanan.</p>
        
        <h3>2.2 Sumbu Tegak (Sumbu Y)</h3>
        <p>Garis vertikal, digunakan untuk menunjukkan nilai **variabel terikat** (ordinat). Nilai bertambah ke atas.</p>
        
        <h3>2.3 Titik Pusat (Origin)</h3>
        <p>Titik perpotongan antara sumbu X dan sumbu Y, dinotasikan \\((0, 0)\\).</p>

        <h3>2.4 Penentuan Letak Titik</h3>
        <p>Letak suatu titik ditentukan oleh pasangan bilangan berurutan \\((x, y)\\), di mana \\(x\\) adalah posisi mendatar dan \\(y\\) adalah posisi tegak.</p>
        <p>Contoh: Titik \\((2, 3)\\) berarti 2 satuan ke kanan dari titik pusat, lalu 3 satuan ke atas.</p>

        <hr>

        <h2>3. Kuadran dalam Sistem Koordinat</h2>
        <p>Bidang Kartesius dibagi menjadi empat kuadran yang diberi nomor berlawanan arah jarum jam, dimulai dari kuadran kanan atas.</p>
        
        <table style="width: 80%; margin: 16px auto; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="border-bottom: 2px solid var(--accent); padding: 8px;">Kuadran</th>
                    <th style="border-bottom: 2px solid var(--accent); padding: 8px;">Nilai X (Absis)</th>
                    <th style="border-bottom: 2px solid var(--accent); padding: 8px;">Nilai Y (Ordinat)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px; text-align: center;">I</td>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px; text-align: center;">Positif (+)</td>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px; text-align: center;">Positif (+)</td>
                </tr>
                <tr>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px; text-align: center;">II</td>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px; text-align: center;">Negatif (-)</td>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px; text-align: center;">Positif (+)</td>
                </tr>
                <tr>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px; text-align: center;">III</td>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px; text-align: center;">Negatif (-)</td>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px; text-align: center;">Negatif (-)</td>
                </tr>
                <tr>
                    <td style="padding: 8px; text-align: center;">IV</td>
                    <td style="padding: 8px; text-align: center;">Positif (+)</td>
                    <td style="padding: 8px; text-align: center;">Negatif (-)</td>
                </tr>
            </tbody>
        </table>

        <hr>

        <h2>4. Jarak Antara Dua Titik</h2>
        <p>Jarak \\(d\\) antara titik \\(A(x_1, y_1)\\) dan \\(B(x_2, y_2)\\) dihitung menggunakan prinsip Pythagoras (jarak horizontal \\(\\Delta x\\) dan jarak vertikal \\(\\Delta y\\)):</p>
        \\[ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\]
        <p>Konsep ini sangat penting sebagai dasar menghitung panjang busur kurva dalam integral.</p>

        <h2>5. Gradien (Kemiringan Garis)</h2>
        <p>Gradien \\(m\\) mengukur tingkat kemiringan suatu garis. Gradien adalah perbandingan perubahan vertikal (\\(\\Delta y\\)) terhadap perubahan horizontal (\\(\\Delta x\\)).</p>
        \\[ m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} \\]
        <ul>
            <li>\\(m > 0\\): Garis naik (dari kiri ke kanan).</li>
            <li>\\(m < 0\\): Garis turun.</li>
            <li>\\(m = 0\\): Garis mendatar (horizontal).</li>
            <li>\\(m = \\text{tak terdefinisi}\\): Garis tegak (vertikal).</li>
        </ul>
        <p>Konsep gradien ini adalah cikal bakal dari konsep **Turunan** dalam kalkulus.</p>
        
        <h2>6. Persamaan Garis Lurus</h2>
        <p>Bentuk umum persamaan garis lurus adalah:</p>
        \\[ y = mx + c \\]
        <p>Di mana \\(m\\) adalah gradien dan \\(c\\) adalah titik potong dengan sumbu Y.</p>

        <hr>

        <h2>7. Grafik Fungsi dalam Sistem Kartesius</h2>
        <p>Grafik fungsi adalah representasi visual dari hubungan \\(y = f(x)\\) pada bidang Kartesius.</p>
        <p>Grafik fungsi sangat penting dalam kalkulus karena memungkinkan kita untuk secara visual memahami:</p>
        <ul>
            <li>Perilaku fungsi saat mendekati titik (Limit).</li>
            <li>Laju perubahan fungsi (Turunan, diwakili oleh kemiringan garis singgung).</li>
            <li>Akumulasi atau luas di bawah kurva (Integral).</li>
        </ul>

        <h2>8. Kesimpulan</h2>
        <p>Sistem Koordinat Kartesius adalah fondasi geometris dan visual bagi kalkulus. Ini memungkinkan kita untuk menerjemahkan hubungan aljabar ke dalam bentuk grafik, memfasilitasi pemahaman tentang perubahan dan akumulasi.</p>
    `,
    'bab4': `
        <h1>IV. Limit (Batas)</h1>
        
        <h2>1. Pengertian Limit</h2>
        <p>Limit adalah konsep dalam kalkulus yang digunakan untuk mengetahui nilai yang **didekati** oleh suatu fungsi \\(f(x)\\) ketika variabelnya \\(x\\) mendekati nilai tertentu \\(a\\).</p>
        <p>Limit menyatakan nilai pendekatan, bukan nilai tepat fungsi di titik tersebut. Limit menjawab pertanyaan: “Jika nilai \\(x\\) semakin dekat ke suatu angka \\(a\\), nilai fungsi \\(f(x)\\) akan mendekati angka berapa?”</p>

        <h2>2. Mengapa Limit Penting?</h2>
        <p>Limit merupakan fondasi utama kalkulus. Secara matematis:</p>
        <ul>
            <li><strong>Turunan (Derivatif)</strong> didefinisikan menggunakan limit (laju perubahan sesaat).</li>
            <li><strong>Integral Tentu</strong> berasal dari konsep limit penjumlahan luas-luas kecil (Riemann Sum).</li>
            <li><strong>Kontinuitas</strong> fungsi ditentukan oleh perbandingan nilai limit dan nilai fungsi.</li>
        </ul>

        <hr>

        <h2>3. Bentuk Umum dan Notasi</h2>
        <p>Secara umum, limit ditulis sebagai:</p>
        \\[ \\lim_{x \\to a} f(x) = L \\]
        <p>Artinya: Ketika nilai \\(x\\) semakin dekat ke \\(a\\) (dari kiri maupun kanan), Nilai fungsi \\(f(x)\\) semakin dekat ke \\(L\\).</p>
        
        <h2>4. Limit Kiri dan Limit Kanan</h2>
        <p>Agar nilai limit \\( \\lim_{x \\to a} f(x) \\) ada, nilai pendekatan dari kedua arah harus sama.</p>
                <ul>
            <li><strong>Limit Kiri:</strong> Pendekatan dari nilai \\(x\\) yang lebih kecil dari \\(a\\). Notasi: \\( \\lim_{x \\to a^-} f(x) \\)</li>
            <li><strong>Limit Kanan:</strong> Pendekatan dari nilai \\(x\\) yang lebih besar dari \\(a\\). Notasi: \\( \\lim_{x \\to a^+} f(x) \\)</li>
        </ul>
        <p><strong>Syarat Keberadaan Limit:</strong> Limit \\( \\lim_{x \\to a} f(x) \\) ada jika dan hanya jika \\( \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L \\).</p>

        <hr>

        <h2>5. Metode Penyelesaian Limit Fungsi Aljabar</h2>

        <h3>5.1 Substitusi Langsung</h3>
        <p>Jika substitusi nilai \\(x = a\\) tidak menghasilkan bentuk tak tentu, maka nilai limit sama dengan nilai fungsi \\(f(a)\\).</p>
        <p>Contoh: \\( \\lim_{x \\to 3} (x + 2) = 3 + 2 = 5 \\).</p>

        <h3>5.2 Faktorisasi dan Penyederhanaan (Untuk Bentuk Tak Tentu)</h3>
        <p>Jika substitusi langsung menghasilkan **Bentuk Tak Tentu** seperti \\( \\frac{0}{0} \\) atau \\( \\frac{\\infty}{\\infty} \\), fungsi harus disederhanakan terlebih dahulu.</p>
                <p>Contoh: Tentukan \\( \\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} \\)</p>
        <ol>
            <li>Substitusi langsung menghasilkan \\( \\frac{0}{0} \\).</li>
            <li>Faktorisasi: \\( \\lim_{x \\to 1} \\frac{(x - 1)(x + 1)}{x - 1} \\)</li>
            <li>Sederhanakan: \\( \\lim_{x \\to 1} (x + 1) \\)</li>
            <li>Hasil: \\( 1 + 1 = 2 \\).</li>
        </ol>

        <hr>

        <h2>6. Limit Menuju Tak Hingga (\\( \\infty \\))</h2>
        <p>Limit tak hingga membahas perilaku fungsi ketika nilai \\(x\\) menjadi sangat besar atau sangat kecil tanpa batas. Notasi: \\( \\lim_{x \\to \\infty} f(x) \\).</p>

        <h3>Prinsip Limit Fungsi Pecahan di Tak Hingga:</h3>
        <p>Diberikan \\( \\lim_{x \\to \\infty} \\frac{P(x)}{Q(x)} \\), dengan \\(n\\) adalah derajat pembilang \\(P(x)\\) dan \\(m\\) adalah derajat penyebut \\(Q(x)\\).</p>
        <ul>
            <li>Jika \\(n < m\\) (Derajat Pembilang &lt; Penyebut) → Limit mendekati \\(0\\).</li>
            <li>Jika \\(n = m\\) (Derajat Pembilang = Penyebut) → Limit mendekati perbandingan koefisien pangkat tertinggi.</li>
            <li>Jika \\(n > m\\) (Derajat Pembilang &gt; Penyebut) → Limit menuju \\( \\infty \\) atau \\( - \\infty \\).</li>
        </ul>

        <hr>

        <h2>7. Perbedaan Nilai Fungsi dan Nilai Limit</h2>
        <p>Limit dan nilai fungsi adalah dua konsep yang berbeda, terutama pada fungsi yang terputus (diskontinu):</p>
                <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="border-bottom: 2px solid var(--accent); padding: 8px;">Nilai Fungsi \\(f(a)\\)</th>
                    <th style="border-bottom: 2px solid var(--accent); padding: 8px;">Nilai Limit \\( \\lim_{x \\to a} f(x) \\)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px;">Nilai tepat fungsi di titik \\(x=a\\).</td>
                    <td style="border-bottom: 1px solid var(--border-color); padding: 8px;">Nilai yang didekati fungsi saat \\(x\\) mendekati \\(a\\).</td>
                </tr>
                <tr>
                    <td style="padding: 8px;">Bisa saja tidak terdefinisi (lubang pada grafik).</td>
                    <td style="padding: 8px;">Bisa saja ada, meskipun fungsi tidak terdefinisi di titik tersebut.</td>
                </tr>
            </tbody>
        </table>

        <hr>

        <h2>8. Peran Limit dalam Kalkulus Lanjutan</h2>
        <p>Limit adalah jembatan menuju konsep kalkulus yang lebih tinggi:</p>
        
        <h3>Peran dalam Turunan:</h3>
        <p>Turunan (laju perubahan sesaat) adalah limit dari laju perubahan rata-rata, didefinisikan sebagai:</p>
        \\[ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} \\]
        
        <h3>Peran dalam Integral:</h3>
        <p>Integral tentu (luas daerah) berasal dari limit penjumlahan Riemann (penjumlahan luas persegi panjang kecil):</p>
        \\[ \\int_a^b f(x) dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i) \\Delta x \\]
    `,
    'bab5': `
        <h1>V. Kontinuitas</h1>
        
        <h2>1. Pengertian Kontinuitas</h2>
        <p>Kontinuitas adalah sifat suatu fungsi yang berjalan mulus tanpa terputus pada suatu titik atau pada suatu selang tertentu.</p>
        <p>Secara sederhana: Fungsi dikatakan kontinu jika grafiknya dapat digambar tanpa mengangkat pensil.</p>
        <p>Artinya, pada grafik fungsi:</p>
        <ul>
            <li>Tidak ada loncatan grafik (jump).</li>
            <li>Tidak ada lubang (hole).</li>
            <li>Tidak ada patahan (kink).</li>
        </ul>

        <hr>

        <h2>2. Syarat Fungsi Kontinu di Suatu Titik</h2>
        <p>Sebuah fungsi \\(f(x)\\) dikatakan **kontinu** di suatu titik \\(x=c\\) jika tiga syarat berikut terpenuhi secara simultan:</p>
                <ol>
            <li><strong>\\(f(c)\\) terdefinisi (Nilai Fungsi Ada)</strong>
                <p>Artinya nilai fungsi \\(f\\) di \\(x=c\\) ada dan bisa dihitung.</p>
            </li>
            <li><strong>\\( \lim_{x \to c} f(x) \\) ada (Nilai Limit Ada)</strong>
                <p>Artinya nilai limit dari kiri dan kanan harus sama: \\( \lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) \\).</p>
            </li>
            <li><strong>Nilai Limit Sama dengan Nilai Fungsi</strong>
                \\[ \lim_{x \to c} f(x) = f(c) \\]
                <p>Nilai yang didekati oleh fungsi (limit) harus sama dengan nilai fungsi sebenarnya di titik tersebut.</p>
            </li>
        </ol>
        <p>Jika salah satu syarat tidak terpenuhi, maka fungsi tersebut **tidak kontinu** (diskontinu) di titik \\(c\\).</p>
        
        <hr>

        <h2>3. Jenis-Jenis Ketak-kontinuan (Diskontinuitas)</h2>

        <h3>3.1 Ketak-kontinuan Dapat Dihilangkan (Removable Discontinuity)</h3>
        <p>Ciri-ciri: Grafik memiliki lubang, tetapi limit fungsi ada. Nilai fungsi \\(f(c)\\) mungkin tidak didefinisikan atau nilainya berbeda dengan limit.</p>
                <p>Jika lubang ini "ditutup" dengan mendefinisikan \\(f(c) = \lim_{x \to c} f(x)\\), fungsi dapat menjadi kontinu.</p>

        <h3>3.2 Ketak-kontinuan Loncat (Jump Discontinuity)</h3>
        <p>Ciri-ciri: Limit kiri dan limit kanan berbeda nilainya. Grafik terlihat "meloncat" secara mendadak.</p>
                <p>Pada jenis ini, \\( \lim_{x \to c} f(x) \\) tidak ada, sehingga fungsi tidak kontinu.</p>

        <h3>3.3 Ketak-kontinuan Tak Hingga (Infinite Discontinuity)</h3>
        <p>Ciri-ciri: Nilai fungsi menuju sangat besar atau sangat kecil (menuju \\( \infty \\) atau \\( -\infty \\)).</p>
                <p>Ini biasanya terjadi pada fungsi rasional ketika penyebutnya nol, membentuk asimtot tegak.</p>
        
        <hr>

        <h2>4. Kontinuitas pada Selang (Interval)</h2>
        <p>Fungsi dikatakan **kontinu pada suatu selang (interval)** jika fungsi tersebut kontinu di setiap titik dalam selang tersebut.</p>
        <ul>
            <li><strong>Selang Terbuka:</strong> Kontinu di setiap \\(x\\) pada \\((a, b)\\).</li>
            <li><strong>Selang Tertutup:</strong> Kontinu di \\((a, b)\\), kontinu kanan di \\(x=a\\) dan kontinu kiri di \\(x=b\\).</li>
        </ul>

        <h2>5. Fungsi yang Selalu Kontinu</h2>
        <p>Beberapa jenis fungsi yang selalu kontinu di seluruh domainnya:</p>
        <ul>
            <li><strong>Fungsi Polinomial:</strong> Contoh \\(f(x) = x^3 - 2x + 1\\).</li>
            <li><strong>Fungsi Rasional:</strong> Kontinu di semua titik kecuali ketika penyebutnya bernilai nol.</li>
            <li><strong>Fungsi Eksponensial:</strong> Contoh \\(f(x) = e^x\\).</li>
            <li><strong>Fungsi Trigonometri:</strong> Sinus (\\( \sin x \\)) dan Kosinus (\\( \cos x \\)).</li>
        </ul>

        <hr>

        <h2>6. Peran Kontinuitas dalam Kalkulus</h2>
        <p>Kontinuitas sangat vital karena menjadi prasyarat untuk banyak teorema dan operasi kalkulus:</p>
        <ul>
            <li><strong>Teorema Nilai Antara (Intermediate Value Theorem):</strong> Hanya berlaku pada fungsi yang kontinu pada selang tertutup.</li>
            <li><strong>Keterdiferensialan (Differentiability):</strong> Jika suatu fungsi dapat diturunkan di suatu titik, maka fungsi itu pasti kontinu di titik tersebut.</li>
            <li><strong>Integral:</strong> Fungsi yang kontinu pada selang tertutup pasti terintegralkan pada selang tersebut.</li>
        </ul>

        <h2>7. Kesimpulan</h2>
        <p>Kontinuitas menunjukkan fungsi berjalan mulus (tanpa loncatan, lubang, atau patahan). Kontinuitas bergantung mutlak pada limit, di mana nilai limit harus sama dengan nilai fungsi di titik yang diperiksa. Konsep ini adalah dasar untuk memahami sifat fungsi dalam turunan dan integral.</p>
    `,
    'bab6': `
        <h1>VI. Turunan (Derivatif)</h1>
        
        <h2>1. Pengertian Turunan</h2>
        <p>Turunan adalah ukuran laju perubahan sesaat dari suatu fungsi terhadap variabelnya.</p>
        <p>Artinya, turunan menunjukkan seberapa cepat suatu nilai \\(y\\) berubah ketika variabel \\(x\\) berubah sedikit.</p>
        <p>Jika suatu fungsi dinyatakan sebagai \\(y=f(x)\\), maka turunannya dinyatakan sebagai:</p>
        \\[ f'(x) \\quad \\text{atau} \\quad \\frac{dy}{dx} \\]
        
        <h2>2. Makna Konsep Turunan Secara Intuitif</h2>
        <p>Secara sederhana, turunan menjawab pertanyaan: <strong>“Jika \\(x\\) berubah sedikit, seberapa besar perubahan \\(y\\)?”</strong></p>
        <h3>Contoh Nyata:</h3>
        <ul>
            <li>Kecepatan adalah turunan dari jarak.</li>
            <li>Percepatan adalah turunan dari kecepatan.</li>
            <li>Kemiringan grafik adalah turunan dari fungsi.</li>
        </ul>
        <p>Artinya: Turunan = kecepatan perubahan. Tanpa turunan, kita hanya tahu nilai, bukan laju perubahannya.</p>

        <h2>3. Turunan sebagai Kemiringan Garis Singgung</h2>
        <p>Pada grafik fungsi, garis yang menghubungkan dua titik disebut garis *secant*. Ketika jarak dua titik semakin kecil, garis *secant* mendekati garis *singgung*.
        ➡️ Turunan adalah gradien garis singgung pada suatu titik.
        
        <h2>4. Definisi Formal Turunan (Definisi Limit)</h2>
        <p>Turunan didefinisikan menggunakan limit:</p>
        \\[ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} \\]
        
        <h3>Penjelasan Bagian Rumus:</h3>
        <ul>
            <li>\\(f(x+h)\\) → nilai fungsi setelah \\(x\\) bertambah sedikit.</li>
            <li>\\(f(x)\\) → nilai fungsi awal.</li>
            <li>Pembilang (\\(f(x+h) - f(x)\\)) → perubahan nilai fungsi.</li>
            <li>Penyebut (\\(h\\)) → perubahan nilai variabel.</li>
            <li>\\(h \\to 0\\) → perubahan yang sangat kecil (sesaat).</li>
        </ul>
        <p>➡️ Rumus ini menyatakan perubahan sesaat, bukan rata-rata.</p>

        <h2>5. Turunan Sebagai Laju Perubahan</h2>
        <p>Jika \\(x\\) adalah waktu dan \\(f(x)\\) adalah jarak, maka \\(f'(x) = \\text{kecepatan}\\).</p>
        <p>Jika \\(f'(x)\\) adalah kecepatan, maka \\(f''(x) = \\text{percepatan}\\).</p>
        
        <h2>6. Notasi Turunan</h2>
        <p>Turunan dapat ditulis dalam beberapa bentuk:</p>
        <ul>
            <li>\\(f'(x)\\)</li>
            <li>\\(\\dfrac{dy}{dx}\\)</li>
            <li>\\(\\dfrac{d}{dx}[f(x)]\\)</li>
        </ul>
        <p>Semua notasi tersebut memiliki makna yang sama.</p>

        <h2>7. Aturan Dasar Turunan</h2>

        <h3>7.1 Aturan Konstanta</h3>
        <p>Jika \\(f(x) = c\\), maka \\(f'(x) = 0\\).</p>
        <p>Penjelasan: Nilai konstanta tidak berubah, sehingga laju perubahannya adalah 0.</p>

        <h3>7.2 Turunan Variabel (Aturan Pangkat Khusus)</h3>
        \\[ \\frac{d}{dx}(x) = 1 \\]
        <p>Artinya: Setiap perubahan \\(x\\) sebesar 1, perubahan nilai fungsi juga 1.</p>

        <h3>7.3 Aturan Pangkat (Power Rule)</h3>
        <p>Jika \\(f(x) = x^n\\), maka \\(f'(x) = nx^{n-1}\\).</p>
        <p>Contoh: Jika \\(f(x) = x^4\\), maka \\(f'(x) = 4x^3\\).</p>

        <h2>8. Aturan Turunan Gabungan (Fungsi Aljabar)</h2>

        <h3>8.1 Penjumlahan dan Pengurangan</h3>
        \\[ (f(x) \\pm g(x))' = f'(x) \\pm g'(x) \\]
        <p>Contoh: Jika \\(f(x) = 3x^2 + 5x - 4\\), maka \\(f'(x) = 6x + 5\\).</p>

        <h3>8.2 Konstanta Pengali</h3>
        <p>Jika \\(f(x) = k \\cdot g(x)\\), maka \\(f'(x) = k \\cdot g'(x)\\).</p>
        
        <h2>9. Turunan Tingkat Dua dan Lebih</h2>
        <h3>Turunan Kedua</h3>
        <p>Dinotasikan sebagai \\(f''(x)\\) atau \\(\\dfrac{d^2y}{dx^2}\\).</p>
        <p>Makna: Menyatakan perubahan dari turunan pertama (misalnya, percepatan).</p>
        <p>Contoh: Jika \\(f(x) = x^3\\), \\(f'(x) = 3x^2\\), maka \\(f''(x) = 6x\\).</p>

        <h2>10. Hubungan Turunan dengan Grafik</h2>
        <ul>
            <li>\\(f'(x) > 0\\) → grafik naik.</li>
            <li>\\(f'(x) < 0\\) → grafik turun.</li>
            <li>\\(f'(x) = 0\\) → titik stasioner (maksimum atau minimum lokal).</li>
        </ul>
        
        <h2>11. Turunan dan Kontinuitas</h2>
        <ul>
            <li><strong>Dapat Diturunkan \(\\implies\) Pasti Kontinu.</strong></li>
            <li><strong>Kontinu \(\\nRightarrow\) Pasti Dapat Diturunkan.</strong> (Contoh: \\(f(x) = |x|\\) kontinu di \\(x=0\\) tetapi tidak dapat diturunkan di sana).</li>
        </ul>
        
        <h2>12. Aplikasi Turunan</h2>
        <h3>12.1 Dalam Fisika (Gerak)</h3>
        <ul>
            <li>Kecepatan: \\(v = \\dfrac{ds}{dt}\\)</li>
            <li>Percepatan: \\(a = \\dfrac{dv}{dt}\\)</li>
        </ul>
        <h3>12.2 Dalam Ekonomi</h3>
        <p>Biaya Marginal (MC) adalah turunan dari Fungsi Biaya Total \\(C(x)\\): \\(MC = C'(x)\\).</p>
        <h3>12.3 Dalam Geometri</h3>
        <ul>
            <li>Menentukan gradien garis singgung.</li>
            <li>Menentukan titik belok (menggunakan turunan kedua).</li>
        </ul>
        
        <h2>Ringkasan Inti Turunan</h2>
        <p>Turunan = laju perubahan sesaat, didefinisikan dengan limit, digunakan untuk kecepatan, kemiringan, dan optimasi.</p>
    `,
    'bab7': `
        <h1>VII. Integral (Antiturunan)</h1>

        <h2>1. Pengertian Integral</h2>
        <p>Integral adalah operasi matematika yang digunakan untuk menghitung total, akumulasi, atau penjumlahan berkelanjutan dari suatu perubahan.</p>
        <p>Jika turunan digunakan untuk mengetahui laju perubahan, maka integral digunakan untuk mengetahui hasil total dari perubahan tersebut.</p>
        <p>Secara sederhana: <strong>Integral = proses menjumlahkan perubahan-perubahan kecil menjadi satu kesatuan.</strong></p>

        <h2>2. Hubungan Integral dengan Turunan (Antiturunan)</h2>
        <p>Integral dan turunan saling berhubungan sebagai operasi kebalikan (antiturunan).</p>
        <ul>
            <li>Turunan → memecah perubahan</li>
            <li>Integral → menyusun kembali perubahan</li>
        </ul>
        <p>Secara matematis:</p>
        \\[ \int f'(x)\\,dx = f(x) + C \\]
        <p>Artinya: Jika suatu fungsi diturunkan lalu diintegralkan, kita akan kembali ke fungsi awal (ditambah konstanta \\(C\\)).</p>

        <h2>3. Notasi Integral</h2>
        <p>Integral dituliskan dengan simbol \\(\\int\\) (berasal dari huruf S/Sum, yang berarti penjumlahan). Variabel di belakangnya (misalnya \\(dx\\)) menunjukkan variabel yang dijumlahkan dan lebar perubahan yang sangat kecil.</p>

        <h2>4. Jenis-Jenis Integral</h2>
        <p>Integral terbagi menjadi dua jenis utama:</p>
        <ol>
            <li>Integral Tak Tentu</li>
            <li>Integral Tentu</li>
        </ol>

        <hr>

        <h2>5. INTEGRAL TAK TENTU</h2>
        <p>Integral tak tentu adalah integral yang hasilnya berupa fungsi. Integral ini digunakan untuk mencari antiturunan.</p>

        <h3>5.1 Rumus Umum Aturan Pangkat</h3>
        <p>Untuk \\(n \\neq -1\\):</p>
        \\[ \\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\]
        
        <h3>5.2 Penjelasan Konstanta \\(C\\)</h3>
        <p>Konstanta \\(C\\) (Konstanta Integrasi) ditambahkan karena turunan dari konstanta adalah nol. Oleh karena itu, kita tidak dapat mengetahui nilai pasti konstanta tersebut hanya dari turunannya.</p>
        <p>Contoh: \\(x^2, x^2+5, x^2-3\\) semua memiliki turunan \\(2x\\).</p>

        <h3>5.3 Contoh Integral Tak Tentu</h3>
        <p><strong>Contoh 1:</strong></p>
        \\[ \\int x^2 dx \\]
        \\[ = \\frac{x^3}{3} + C \\]
        
        <p><strong>Contoh 2:</strong> (Aturan Penjumlahan)</p>
        \\[ \\int (3x^2 + 4x) dx \\]
        \\[ = x^3 + 2x^2 + C \\]

        <hr>

        <h2>6. INTEGRAL TENTU</h2>
        <p>Integral tentu adalah integral yang digunakan untuk menghitung nilai tertentu (Luas daerah, Jarak total, Akumulasi nyata). Integral tentu memiliki batas bawah (\\(a\\)) dan batas atas (\\(b\\)).</p>

        <h3>6.1 Makna Geometris Integral Tentu</h3>
        <p>Integral tentu \\(\\int_a^b f(x)\,dx\\) menyatakan luas daerah di bawah kurva \\(y=f(x)\\) terhadap sumbu-X dari \\(x=a\\) ke \\(x=b\\).</p>
        
        <h3>6.2 Teorema Fundamental Kalkulus (Cara Menghitung)</h3>
        <p>Integral tentu dihitung menggunakan Teorema Fundamental Kalkulus (TFK):</p>
        \\[ \\int_a^b f(x)\\,dx = F(b) - F(a) \\]
        <p>Di mana \\(F(x)\\) adalah antiturunan dari \\(f(x)\\).</p>

        <h3>6.3 Contoh Integral Tentu</h3>
        <p>Hitung \\(\\int_0^2 x^2 dx\\)</p>
        <ol>
            <li><strong>Antiturunan:</strong> \\(F(x) = \\frac{x^3}{3}\\)</li>
            <li><strong>Substitusi Batas:</strong>
                \\[ \\left[\\frac{x^3}{3}\\right]_0^2 \\]
            </li>
            <li><strong>Hitung Selisih:</strong>
                \\[ = \\frac{8}{3} - \\frac{0}{3} = \\frac{8}{3} \\]
            </li>
        </ol>

        <h3>6.4 Luas Daerah</h3>
        <p>Jika grafik berada di bawah sumbu-X, hasil integral bernilai negatif. Untuk menghitung luas fisik, kita mengambil nilai mutlak:</p>
        \\[ \\text{Luas} = \\left| \\int_a^b f(x)\\,dx \\right| \\]

        <hr>

        <h2>7. APLIKASI INTEGRAL</h2>
        <h3>7.1 Dalam Fisika (Gerak)</h3>
        <p>Jarak total (\\(s\\)) adalah integral dari fungsi kecepatan (\\(v(t)\\)):</p>
        \\[ s = \\int v(t)\\,dt \\]
        <p>Contoh: Jika \\(v(t)=2t\\), maka \\(s(t) = t^2 + C\\).</p>

        <h3>7.2 Dalam Ekonomi</h3>
        <p>Fungsi Biaya Total (\\(C(x)\\)) adalah integral dari Biaya Marginal (\\(MC(x)\\)):</p>
        \\[ C(x) = \\int MC(x)\\,dx \\]

        <h3>7.3 Dalam Teknik dan Geometri</h3>
        <ul>
            <li>Menghitung luas penampang.</li>
            <li>Menghitung volume benda putar.</li>
        </ul>
        
        <h2>Ringkasan Inti Integral</h2>
        <p>Integral = penjumlahan perubahan, Integral tak tentu → antiturunan, Integral tentu → nilai nyata (luas/akumulasi), Integral = kebalikan turunan.</p>
    `,
    'bab8': `
        <h1>VIII. Aplikasi Kalkulus</h1>
        
        <h2>1. Pengertian Aplikasi Kalkulus</h2>
        <p>Aplikasi kalkulus adalah penerapan konsep turunan dan integral untuk menyelesaikan masalah nyata dalam berbagai bidang ilmu, seperti fisika, ekonomi, teknik, dan kehidupan sehari-hari.</p>
        <p>Jika Turunan digunakan untuk mengetahui laju perubahan, dan Integral digunakan untuk mengetahui hasil total dari perubahan, maka Aplikasi kalkulus menghubungkan konsep matematika dengan peristiwa nyata.</p>

        <hr>

        <h2>2. Aplikasi Turunan (Diferensial)</h2>
        <p>Turunan digunakan ketika permasalahan berkaitan dengan: kecepatan perubahan, kenaikan atau penurunan, nilai maksimum dan minimum, dan kemiringan grafik.</p>

        <h3>2.1 Aplikasi Turunan dalam Fisika (Gerak)</h3>
        <h4>a. Kecepatan</h4>
        <p>Kecepatan (\\(v(t)\\)) adalah laju perubahan jarak (\\(s\\)) terhadap waktu (\\(t\\)):</p>
        \\[ v(t) = \\frac{ds}{dt} \\]
        <p>Contoh: Jika posisi benda \\(s(t) = t^2 + 3t\\), maka kecepatannya \\(v(t) = 2t + 3\\).</p>
        
        <h4>b. Percepatan</h4>
        <p>Percepatan (\\(a(t)\\)) adalah laju perubahan kecepatan terhadap waktu. Percepatan adalah turunan kedua dari posisi:</p>
        \\[ a(t) = \\frac{dv}{dt} = \\frac{d^2s}{dt^2} \\]
        <p>Contoh: Jika \\(v(t) = 2t + 3\\), maka percepatannya \\(a(t) = 2\\).</p>

        <h3>2.2 Aplikasi Turunan dalam Geometri</h3>
        <h4>a. Gradien Garis Singgung</h4>
        <p>Gradien garis singgung (\\(m\\)) pada suatu titik adalah nilai turunan fungsi di titik tersebut:</p>
        \\[ m = f'(x) \\]
        <p>Contoh: Untuk fungsi \\(y = x^2\\), turunannya \\(y' = 2x\\). Pada titik \\(x=2\\), gradiennya adalah \\(m = 4\\).</p>
        
        <h4>b. Titik Maksimum dan Minimum (Optimasi)</h4>
        <p>Titik stasioner (maksimum atau minimum lokal) dicapai ketika laju perubahan fungsi adalah nol:</p>
        \\[ f'(x) = 0 \\]
        <p>Contoh: Untuk \\(f(x) = -x^2 + 4x\\), \\(f'(x) = -2x + 4\\). Menetapkan \\(f'(x)=0\\) memberikan \\(x=2\\), yang merupakan titik maksimum dengan nilai \\(f(2) = 4\\).</p>

        <h3>2.3 Aplikasi Turunan dalam Ekonomi</h3>
        <h4>a. Biaya Marginal</h4>
        <p>Biaya marginal (\\(MC\\)) adalah turunan dari fungsi Biaya Total (\\(C(x)\\)):</p>
        \\[ MC = \\frac{dC}{dx} \\]
        <p>Contoh: Jika \\(C(x) = x^2 + 10x\\), maka \\(MC = 2x + 10\\).</p>

        <hr>

        <h2>3. Aplikasi Integral (Antiturunan)</h2>
        <p>Integral digunakan untuk menghitung luas, jarak total, atau akumulasi.</p>

        <h3>3.1 Aplikasi Integral dalam Fisika</h3>
        <h4>a. Jarak dari Kecepatan</h4>
        <p>Jarak (\\(s\\)) adalah integral dari fungsi kecepatan (\\(v(t)\\)):</p>
        \\[ s = \int v(t)\,dt \\]
        <p>Contoh: Jika \\(v(t) = 4t\\), maka \\(s(t) = 2t^2 + C\\).</p>

        <h3>3.2 Aplikasi Integral dalam Geometri</h3>
                <h4>a. Luas Daerah</h4>
        <p>Luas daerah (\\(L\\)) yang dibatasi oleh kurva \\(f(x)\\) dan sumbu-X dari \\(a\\) ke \\(b\\) dihitung dengan integral tentu:</p>
        \\[ L = \\int_a^b f(x)\,dx \\]
        
        <h4>b. Volume Benda Putar</h4>
        <p>Volume benda putar (\\(V\\)) yang dibentuk dengan memutar kurva \\(f(x)\\) di sekitar sumbu-X (Metode Cakram):</p>
        \\[ V = \\pi \\int_a^b [f(x)]^2 dx \\]
        
        <h3>3.3 Aplikasi Integral dalam Ekonomi</h3>
        <h4>a. Biaya Total</h4>
        <p>Biaya total (\\(C(x)\\)) adalah integral dari Biaya Marginal (\\(MC(x)\\)):</p>
        \\[ C(x) = \int MC(x)\,dx \\]

        <hr>

        <h2>4. Hubungan Aplikasi Turunan dan Integral</h2>
        <p>Keduanya saling melengkapi dalam menganalisis suatu fenomena:</p>
        <div style="border: 1px solid var(--border-color); padding: 12px; border-radius: 8px; margin-top: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="border-bottom: 2px solid var(--accent); padding: 8px;">Turunan</th>
                        <th style="border-bottom: 2px solid var(--accent); padding: 8px;">Integral</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border-bottom: 1px solid var(--border-color); padding: 8px;">Laju perubahan</td>
                        <td style="border-bottom: 1px solid var(--border-color); padding: 8px;">Akumulasi</td>
                    </tr>
                    <tr>
                        <td style="border-bottom: 1px solid var(--border-color); padding: 8px;">Kecepatan</td>
                        <td style="border-bottom: 1px solid var(--border-color); padding: 8px;">Jarak</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Gradien Garis Singgung</td>
                        <td style="padding: 8px;">Luas Daerah</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>5. Kesimpulan</h2>
        <p>Kalkulus bukan hanya teori, tetapi merupakan alat yang sangat penting untuk perhitungan teknik, analisis ekonomi, pemodelan ilmiah, dan pengambilan keputusan di dunia nyata. Turunan dan integral adalah dua sisi mata uang yang saling melengkapi.</p>
    `,
};
// --- END DATA MATERI LENGKAP ---

// --- FUNGSI NAVIGASI & TEMA ---
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const materiGrid = document.getElementById('materi-grid-view');
const materiDetail = document.getElementById('materi-detail-view');
const detailContentArea = document.getElementById('detail-content-area');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

function showPage(targetId) {
    pages.forEach(page => page.style.display = 'none');

    const targetPage = document.getElementById(targetId);
    if (targetPage) {
        targetPage.style.display = 'block';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.target === targetId) {
            link.classList.add('active');
        }
    });

    if (targetId === 'materi') {
        closeMateri();
    }
    
    // Panggil ulang perhitungan jika halaman kalkulator dibuka
    if (targetId === 'kalkulator') {
        hitungTurunan();
        hitungIntegral();
    }
}

function openMateri(babId) {
    detailContentArea.innerHTML = materiData[babId];

    materiGrid.style.display = 'none';
    materiDetail.style.display = 'block';

    if (window.MathJax) {
        // Render ulang MathJax untuk konten baru
        MathJax.typesetPromise([detailContentArea]).catch((err) => console.log('MathJax Error:', err));
    }
}

function closeMateri() {
    materiGrid.style.display = 'block';
    materiDetail.style.display = 'none';
}


function toggleTheme() {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeIcon.textContent = isDarkMode ? '🌙' : '🔆';

    if (window.MathJax) {
        MathJax.typeset(); 
    }
}

// Tambahkan event listener untuk navigasi
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(e.target.dataset.target);
    });
});

// Tambahkan event listener untuk theme toggle
themeToggle.addEventListener('click', toggleTheme);


// --- FUNGSI PENDUKUNG KALKULATOR ---

// Fungsi Pembagi Bersama Terbesar (Greatest Common Divisor) untuk menyederhanakan pecahan
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// --- FUNGSI KALKULATOR TURUNAN ---
function formatTurunanResult(a, n) {
    const hasilA = a * n;
    const hasilN = n - 1;

    // Turunan dari konstanta (n=0) atau koefisien 0
    if (n === 0 || hasilA === 0) {
        return `Hasil: $f'(x) = 0$`;
    } 
    
    // Turunan pangkat 1 (menjadi konstanta, hasilN=0)
    if (hasilN === 0) {
        let koefisienStr = hasilA === 1 ? '1' : hasilA === -1 ? '-1' : hasilA;
        return `Hasil: $f'(x) = ${koefisienStr}$`;
    }

    let koefisienStr;
    
    if (hasilA === 1) {
        koefisienStr = ''; // x^n
    } else if (hasilA === -1) {
        koefisienStr = '-'; // -x^n
    } else {
        koefisienStr = hasilA;
    }

    let pangkat = hasilN === 1 ? '' : `^{${hasilN}}`;
    
    return `Hasil: $f'(x) = ${koefisienStr}x${pangkat}$`;
}

function hitungTurunan() {
    const aElement = document.getElementById('turunan-a');
    if (!aElement) return; 

    const a = parseFloat(aElement.value) || 0;
    const n = parseFloat(document.getElementById('turunan-n').value) || 0;
    const hasilElement = document.getElementById('turunan-hasil');

    hasilElement.innerHTML = formatTurunanResult(a, n);

    if (window.MathJax) {
        MathJax.typesetPromise([hasilElement]);
    }
}

// --- FUNGSI KALKULATOR INTEGRAL ---
function formatIntegralResult(a, n) {
    const hasilN = n + 1;
    
    // Integral 1/x (kasus n = -1)
    if (n === -1) {
        let koefisien = a === 1 ? '' : a === -1 ? '-' : a;
        return `Hasil: $\\int f(x) dx = ${koefisien}\\ln|x| + C$`;
    } 
    
    // Integral konstanta (kasus n = 0)
    if (n === 0) {
        let koefisien = a === 1 ? '' : a === -1 ? '-' : a;
        return `Hasil: $\\int f(x) dx = ${koefisien}x + C$`;
    }
    
    let koefisienStr;
    const numerator = a;
    const denominator = hasilN;
    
    const commonDivisor = gcd(Math.abs(numerator), Math.abs(denominator));
    
    const numSign = Math.sign(numerator);
    const denSign = Math.sign(denominator);
    let totalSign = numSign * denSign; 
    let tanda = (totalSign < 0) ? '-' : '';
    
    const num = Math.abs(numerator) / commonDivisor;
    const den = Math.abs(denominator) / commonDivisor;

    if (den === 1) {
        if (num === 1) {
            koefisienStr = tanda === '-' ? '-' : '';
        } else {
            koefisienStr = tanda + num;
        }
    } else {
        // Menggunakan double backslash \\frac untuk MathJax
        koefisienStr = `${tanda}\\frac{${num}}{${den}}`;
    }
    
    const pangkat = hasilN === 1 ? '' : `^{${hasilN}}`;
    
    // Penyesuaian koefisien 1 atau -1 saat sudah disederhanakan
    if (koefisienStr === '-1') koefisienStr = '-';
    if (koefisienStr === '1') koefisienStr = '';


    // Menggunakan double backslash \\int untuk MathJax
    return `Hasil: $\\int f(x) dx = ${koefisienStr}x${pangkat} + C$`;
}

function hitungIntegral() {
    const aElement = document.getElementById('integral-a');
    if (!aElement) return; 

    const a = parseFloat(aElement.value) || 0;
    const n = parseFloat(document.getElementById('integral-n').value) || 0;
    const hasilElement = document.getElementById('integral-hasil');

    hasilElement.innerHTML = formatIntegralResult(a, n);
    
    if (window.MathJax) {
        MathJax.typesetPromise([hasilElement]);
    }
}


// Inisialisasi: Muat tema dari local storage dan kalkulator
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '🌙';
    } else {
        themeIcon.textContent = '🔆';
    }

    showPage('home');
    
    if (window.MathJax) {
        MathJax.typesetPromise().catch((err) => console.log('Initial MathJax Error:', err));
    }

    // Panggil inisialisasi kalkulator (untuk memastikan input awal ter-render)
    hitungTurunan();
    hitungIntegral();
});