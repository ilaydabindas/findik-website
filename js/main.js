document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 1. DİNAMİK ÜRÜN VERİTABANI (KATALOG)
    // ==========================================================================
    const tumUrunler = [
        // İÇ FINDIK
        { kategoriId: "grid-ic-findik", ad: "İç Fındık", aciklama: "500 gr", fiyat: 325.00, img: "../images/products/ic-findik-500.png", enCokSatan: true },
        { kategoriId: "grid-ic-findik", ad: "İç Fındık", aciklama: "1 kg", fiyat: 600.00, img: "../images/products/ic-findik-1.png", enCokSatan: true },
        { kategoriId: "grid-ic-findik", ad: "İç Fındık", aciklama: "2 kg", fiyat: 1150.00, img: "../images/products/ic-findik-2.png" },
        { kategoriId: "grid-ic-findik", ad: "İç Fındık", aciklama: "5 kg", fiyat: 3000.00, img: "../images/products/ic-findik-5.png" },

        // KABUKLU FINDIK
        { kategoriId: "grid-kabuklu-findik", ad: "Kabuklu Fındık", aciklama: "500 gr", fiyat: 95.00, img: "../images/products/kabuklu-findik-500.png" },
        { kategoriId: "grid-kabuklu-findik", ad: "Kabuklu Fındık", aciklama: "1 kg", fiyat: 180.00, img: "../images/products/kabuklu-findik-1.png" },
        { kategoriId: "grid-kabuklu-findik", ad: "Kabuklu Fındık", aciklama: "2 kg", fiyat: 350.00, img: "../images/products/kabuklu-findik-2.png" },
        { kategoriId: "grid-kabuklu-findik", ad: "Kabuklu Fındık", aciklama: "5 kg", fiyat: 850.00, img: "../images/products/kabuklu-findik-5.png" },

        // KAVRULMUŞ FINDIK
        { kategoriId: "grid-kavrulmus-findik", ad: "Kavrulmuş Fındık", aciklama: "500 gr", fiyat: 375.00, img: "../images/products/kavrulmus-findik-500.png" },
        { kategoriId: "grid-kavrulmus-findik", ad: "Kavrulmuş Fındık", aciklama: "1 kg", fiyat: 700.00, img: "../images/products/kavrulmus-findik-1.png", enCokSatan: true },
        { kategoriId: "grid-kavrulmus-findik", ad: "Kavrulmuş Fındık", aciklama: "2 kg", fiyat: 1350.00, img: "../images/products/kavrulmus-findik-2.png", enCokSatan: true },
        { kategoriId: "grid-kavrulmus-findik", ad: "Kavrulmuş Fındık", aciklama: "5 kg", fiyat: 3300.00, img: "../images/products/kavrulmus-findik-5.png" },

        // ÇİFTE KAVRULMUŞ FINDIK
        { kategoriId: "grid-kavrulmus-findik", ad: "Çifte Kavrulmuş Fındık", aciklama: "500 gr", fiyat: 375.00, img: "../images/products/kavrulmus-findik-500.png" },
        { kategoriId: "grid-kavrulmus-findik", ad: "Çifte Kavrulmuş Fındık", aciklama: "1 kg", fiyat: 700.00, img: "../images/products/kavrulmus-findik-1.png" },
        { kategoriId: "grid-kavrulmus-findik", ad: "Çifte Kavrulmuş Fındık", aciklama: "2 kg", fiyat: 1350.00, img: "../images/products/kavrulmus-findik-2.png" },
        { kategoriId: "grid-kavrulmus-findik", ad: "Çifte Kavrulmuş Fındık", aciklama: "5 kg", fiyat: 3300.00, img: "../images/products/kavrulmus-findik-5.png", enCokSatan: true },

        // FINDIK EZMESİ / KREMASI
        { kategoriId: "grid-findik-ezmesi", ad: "Fındık Ezmesi", aciklama: "350 gr", fiyat: 250.00, img: "../images/products/findik-ezmesi-350.png" },
        { kategoriId: "grid-findik-ezmesi", ad: "Fındık Ezmesi", aciklama: "700 gr", fiyat: 400.00, img: "../images/products/findik-ezmesi-700.png", enCokSatan: true },
        { kategoriId: "grid-findik-ezmesi", ad: "Fındık Kreması", aciklama: "350 gr", fiyat: 200.00, img: "../images/products/findik-kremasi-350.png", enCokSatan: true },
        { kategoriId: "grid-findik-ezmesi", ad: "Fındık Kreması", aciklama: "700 gr", fiyat: 350.00, img: "../images/products/findik-kremasi-700.png" },

        // FINDIK UNU
        { kategoriId: "grid-findik-unu", ad: "Fındık Unu", aciklama: "250 gr", fiyat: 200.00, img: "../images/products/findik-unu-250.png", enCokSatan: true },
        { kategoriId: "grid-findik-unu", ad: "Fındık Unu", aciklama: "500 gr", fiyat: 350.00, img: "../images/products/findik-unu-500.png" },
        { kategoriId: "grid-findik-unu", ad: "Fındık Unu", aciklama: "1 kg", fiyat: 600.00, img: "../images/products/findik-unu-1.png" },
        { kategoriId: "grid-findik-unu", ad: "Fındık Unu", aciklama: "2 kg", fiyat: 1000.00, img: "../images/products/findik-unu-2.png" },

        // FINDIK YAĞI
        { kategoriId: "grid-findik-yagi", ad: "Fındık Yağı", aciklama: "250 ml", fiyat: 100.00, img: "../images/products/findik-yagi-250.png" },
        { kategoriId: "grid-findik-yagi", ad: "Fındık Yağı", aciklama: "500 ml", fiyat: 200.00, img: "../images/products/findik-yagi-500.png" },
        { kategoriId: "grid-findik-yagi", ad: "Fındık Yağı", aciklama: "1 L", fiyat: 300.00, img: "../images/products/findik-yagi-1.png" },
        { kategoriId: "grid-findik-yagi", ad: "Fındık Yağı", aciklama: "2 L", fiyat: 500.00, img: "../images/products/findik-yagi-2.png" },
        { kategoriId: "grid-findik-yagi", ad: "Fındık Yağı", aciklama: "5 L", fiyat: 1000.00, img: "../images/products/findik-yagi-5.png" },

        // FINDIKLI ÇİKOLATA / GOFRET
        { kategoriId: "grid-findikli-cikolata", ad: "Fındıklı Çikolata", aciklama: "250 gr", fiyat: 200.00, img: "../images/products/findikli-cikolata-250.png" },
        { kategoriId: "grid-findikli-cikolata", ad: "Fındıklı Çikolata", aciklama: "500 gr", fiyat: 400.00, img: "../images/products/findikli-cikolata-500.png", enCokSatan: true },
        { kategoriId: "grid-findikli-cikolata", ad: "Fındıklı Çikolata", aciklama: "1 kg", fiyat: 800.00, img: "../images/products/findikli-cikolata-1.png" },
        { kategoriId: "grid-findikli-cikolata", ad: "Fındıklı Gofret - Sütlü", aciklama: "30 gr", fiyat: 40.00, img: "../images/products/gofret-sutlu.png", enCokSatan: true },
        { kategoriId: "grid-findikli-cikolata", ad: "Fındıklı Gofret - Bitter", aciklama: "30 gr", fiyat: 40.00, img: "../images/products/gofret-bitter.png", enCokSatan: true },
        { kategoriId: "grid-findikli-cikolata", ad: "Fındıklı Gofret - Beyaz", aciklama: "30 gr", fiyat: 40.00, img: "../images/products/gofret-beyaz.png" },
        { kategoriId: "grid-findikli-cikolata", ad: "Fındıklı Çikolata Kare", aciklama: "60 gr", fiyat: 60.00, img: "../images/products/cikolata-kare.png", enCokSatan: true }
    ];

    // ==========================================================================
    // 2. ÜRÜNLERİ OTOMATİK OLARAK HTML İÇİNE YAZDIRAN KOD
    // ==========================================================================
    function urunleriEkranaBas() {
        const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/");

        tumUrunler.forEach(urun => {
            let imgPath = urun.img;
            // Ana sayfadaysak dosya yolundaki "../" kismini kaldir
            if (isIndexPage) {
                imgPath = imgPath.replace("../", "");
            }

            const urunHTML = `
                <div class="product-card" style="position: relative;">
                    <button class="fav-btn" style="position: absolute; top: 15px; right: 15px; background: #fff; border: none; font-size: 1.5rem; color: #ccc; cursor: pointer; border-radius: 50%; width: 35px; height: 35px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; z-index: 10;"><i class="fa-solid fa-heart"></i></button>
                    <img src="${imgPath}" alt="${urun.ad}">
                    <h3>${urun.ad}</h3>
                    <p>${urun.aciklama}</p>
                    <span class="price">${urun.fiyat.toFixed(2)} TL</span>
                    <button class="add-to-cart-btn">Sepete Ekle</button>
                </div>
            `;

            const kategoriKutusu = document.getElementById(urun.kategoriId);
            if (kategoriKutusu) {
                kategoriKutusu.innerHTML += urunHTML;
            }

            if (urun.enCokSatan) {
                const bestSellerKutusu = document.getElementById("grid-best-sellers");
                if (bestSellerKutusu) {
                    bestSellerKutusu.innerHTML += urunHTML;
                }
            }
        });
    }

    urunleriEkranaBas();

    // ==========================================================================
    // 3. TARAYICI HAFIZASINDAN VERİLERİ ÇEK VE BUTONLARI DİNLE
    // ==========================================================================
    let sepet = JSON.parse(localStorage.getItem("findikSepet")) || [];
    let favoriler = JSON.parse(localStorage.getItem("findikFavori")) || [];

    const favButtons = document.querySelectorAll(".fav-btn");
    favButtons.forEach(btn => {
        const card = btn.closest(".product-card");
        if(card) {
            const cardName = card.querySelector("h3").innerText;
            const cardDesc = card.querySelector("p").innerText;
            if (favoriler.some(urun => urun.ad === cardName && urun.aciklama === cardDesc)) {
                btn.style.color = "#e74c3c";
            }
        }

        btn.addEventListener("click", (e) => {
            const productCard = e.currentTarget.closest(".product-card");
            const productName = productCard.querySelector("h3").innerText;
            const productDesc = productCard.querySelector("p").innerText;
            const productPriceText = productCard.querySelector(".price").innerText;
            const productPrice = parseFloat(productPriceText.replace(" TL", ""));
            const productImg = productCard.querySelector("img").src;

            const urunVarMi = favoriler.find(urun => urun.ad === productName && urun.aciklama === productDesc);

            if (urunVarMi) {
                favoriler = favoriler.filter(urun => !(urun.ad === productName && urun.aciklama === productDesc));
                e.currentTarget.style.color = "#ccc";
                alert(productName + " (" + productDesc + ") favorilerden cikarildi.");
            } else {
                favoriler.push({ ad: productName, aciklama: productDesc, fiyat: productPrice, img: productImg });
                e.currentTarget.style.color = "#e74c3c";
                alert(productName + " (" + productDesc + ") favorilere eklendi!");
            }
            
            localStorage.setItem("findikFavori", JSON.stringify(favoriler));
        });
    });

    const favGrid = document.getElementById("favori-grid");
    if (favGrid) {
        favGrid.innerHTML = "";
        if (favoriler.length === 0) {
            favGrid.innerHTML = "<h3 style=\"grid-column: 1/-1; text-align:center; color: #7f8c8d; padding: 50px 0;\">Listenizde henuz favori urun bulunmuyor.</h3>";
        } else {
            favoriler.forEach((urun, index) => {
                const urunHTML = `
                    <div class="product-card" style="position: relative;">
                        <img src="${urun.img}" alt="${urun.ad}">
                        <h3>${urun.ad}</h3>
                        <p>${urun.aciklama}</p>
                        <span class="price">${urun.fiyat.toFixed(2)} TL</span>
                        <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                            <button class="btn add-to-cart-btn" style="flex: 1; margin-right: 10px; margin-top: 0; background-color: #2c3e50;"><i class="fa-solid fa-bag-shopping"></i> Ekle</button>
                            <button class="btn remove-fav-btn" data-index="${index}" style="background-color: #fff; color: #e74c3c; border: 1px solid #e74c3c; margin-top: 0;" title="Kaldir"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                `;
                favGrid.innerHTML += urunHTML;
            });

            document.querySelectorAll(".remove-fav-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const index = e.currentTarget.getAttribute("data-index");
                    favoriler.splice(index, 1);
                    localStorage.setItem("findikFavori", JSON.stringify(favoriler));
                    window.location.reload();
                });
            });

            favGrid.querySelectorAll(".add-to-cart-btn").forEach(button => {
                button.addEventListener("click", (event) => {
                    const productCard = event.target.closest(".product-card");
                    const productName = productCard.querySelector("h3").innerText;
                    const productDesc = productCard.querySelector("p").innerText;
                    const productPriceText = productCard.querySelector(".price").innerText;
                    const productPrice = parseFloat(productPriceText.replace(" TL", ""));
                    
                    // Gorsel yolunu sayfadan cek
                    const productImg = productCard.querySelector("img").src;
                    
                    const mevcutUrun = sepet.find(urun => urun.ad === productName && urun.adetEx === productDesc);
                    if (mevcutUrun) {
                        mevcutUrun.adet += 1;
                    } else {
                        // Gorseli de kaydet
                        sepet.push({ ad: productName, fiyat: productPrice, adet: 1, adetEx: productDesc, img: productImg });
                    }
                    localStorage.setItem("findikSepet", JSON.stringify(sepet));
                    alert(productName + " basariyla sepete eklendi!");
                });
            });
        }
    }

    const addToCartButtons = document.querySelectorAll(".product-card .add-to-cart-btn");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productCard = event.target.closest(".product-card");
            const productName = productCard.querySelector("h3").innerText;
            const productDesc = productCard.querySelector("p").innerText;
            const priceElement = productCard.querySelector(".price");
            
            // Gorsel yolunu sayfadan cek
            const productImg = productCard.querySelector("img").src;
            
            if(!priceElement) return;

            const productPriceText = priceElement.innerText;
            const productPrice = parseFloat(productPriceText.replace(" TL", ""));
            const mevcutUrun = sepet.find(urun => urun.ad === productName && urun.adetEx === productDesc);

            if (mevcutUrun) {
                mevcutUrun.adet += 1;
            } else {
                // Gorseli de kaydet
                sepet.push({ ad: productName, fiyat: productPrice, adet: 1, adetEx: productDesc, img: productImg });
            }

            localStorage.setItem("findikSepet", JSON.stringify(sepet));
            alert(productName + " (" + productDesc + ") basariyla sepete eklendi!");
        });
    });

    // ==========================================================================
    // 4. SEPET SAYFASINI TABLOYA YAZDIRMA VE GÖRSELLERİ GÖSTERME
    // ==========================================================================
    const cartTableBody = document.querySelector(".cart-table tbody");
    const totalPriceElement = document.querySelector(".total-price");

    if (cartTableBody) {
        sepetiEkranaYazdir();
    }

    function sepetiEkranaYazdir() {
        cartTableBody.innerHTML = "";
        let toplamFiyat = 0;

        if (sepet.length === 0) {
            cartTableBody.innerHTML = "<tr><td colspan=\"4\" style=\"text-align:center;\">Sepetiniz su an bos.</td></tr>";
            if (totalPriceElement) totalPriceElement.innerText = "Toplam Fiyat : 0 TL";
            return;
        }

        sepet.forEach((urun, index) => {
            const araToplam = urun.fiyat * urun.adet;
            toplamFiyat += araToplam;
            
            // Gorsel varsa img etiketini, yoksa gri boslugu basar
            const imgHTML = urun.img ? 
                `<img src="${urun.img}" alt="${urun.ad}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px; border: 1px solid #eaeaea;">` : 
                `<div class="img-placeholder" style="width: 50px; height: 50px; background-color: #eaeaea; border-radius: 5px; border: 1px solid #ccc;"></div>`;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td class="product-info">
                    ${imgHTML}
                    <span>${urun.ad} (${urun.adetEx || ''})</span>
                </td>
                <td>${urun.fiyat.toFixed(2)} TL</td>
                <td>
                    <div class="quantity-control">
                        <button class="qty-btn azalt" data-index="${index}">-</button>
                        <span>${urun.adet}</span>
                        <button class="qty-btn artir" data-index="${index}">+</button>
                    </div>
                </td>
                <td><button class="remove-btn" data-index="${index}" title="Sepetten Cikar"><i class="fa-solid fa-trash"></i></button></td>
            `;
            cartTableBody.appendChild(tr);
        });
        if (totalPriceElement) totalPriceElement.innerText = `Toplam Fiyat : ${toplamFiyat.toFixed(2)} TL`;
        sepetButonlariniDinle();
    }

    function sepetButonlariniDinle() {
        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const index = e.currentTarget.getAttribute("data-index");
                sepet.splice(index, 1);
                localStorage.setItem("findikSepet", JSON.stringify(sepet));
                sepetiEkranaYazdir();
            });
        });
        document.querySelectorAll(".artir").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                sepet[index].adet += 1;
                localStorage.setItem("findikSepet", JSON.stringify(sepet));
                sepetiEkranaYazdir();
            });
        });
        document.querySelectorAll(".azalt").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                if (sepet[index].adet > 1) {
                    sepet[index].adet -= 1;
                    localStorage.setItem("findikSepet", JSON.stringify(sepet));
                    sepetiEkranaYazdir();
                }
            });
        });
    }
});