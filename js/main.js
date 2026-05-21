// ==========================================================================
// A. GLOBAL SÖZLÜK (SABİT HTML METİNLERİ İÇİN)
// ==========================================================================
const translations = {
    tr: {
        site_title: "Bindaş Fındık | Anasayfa",
        products_site_title: "Bindaş Fındık | Tüm Ürünler",
        recipes_site_title: "Bindaş Fındık | Nefis Tarifler",
        support_site_title: "Bindaş Fındık | Yardım & Destek",
        about_site_title: "Bindaş Fındık | Hakkımızda",
        recipe_detail_site_title: "Bindaş Fındık | Tarif Detayı",
        cart_site_title: "Bindaş Fındık | Sepetim",
        register_site_title: "Bindaş Fındık | Yeni Üyelik",
        login_site_title: "Bindaş Fındık | Üye Ol & Giriş Yap",
        fav_site_title: "Bindaş Fındık | Favorilerim",
        nav_products: "Ürünler",
        nav_recipes: "Tarifler",
        nav_about: "Hakkımızda",
        nav_support: "Yardım & Destek",
        hero_title: "En Taze Fındıklar Kapınızda",
        hero_subtitle: "Türkiye'nin her yerine anlaşmalı kargo ile çerezlik fındık gönderilir.",
        hero_btn: "Hemen İncele",
        best_sellers_title: "En Çok Satılan Ürünler",
        add_to_cart_btn: "Sepete Ekle",
        currency: "TL",
        total_price_label: "Toplam Fiyat : ",
        empty_cart: "Sepetiniz şu an boş.",
        empty_fav: "Listenizde henüz favori ürün bulunmuyor.",
        alert_add_cart: "başarıyla sepete eklendi!",
        alert_add_fav: "favorilere eklendi!",
        alert_remove_fav: "favorilerden çıkarıldı.",

        "about-us": "Hakkımızda",
        "about-us-description": "Bindaş Fındık, Karadeniz’in bereketli topraklarında yetişen kaliteli fındıkları özenle seçerek sofralara ulaştıran yerel bir aile işletmesidir. Doğallığı, tazeliği ve güvenilir üretimi ön planda tutarak Ordu’dan Türkiye’nin dört bir yanına gerçek fındık lezzetini ulaştırıyoruz.",
        "about-us-description-2": "Gelenekten gelen emeği modern anlayışla birleştirip her üründe aynı kaliteyi sunmayı hedefliyoruz.",

        sidebar_title: "Kategoriler",
        "cat_ic_findik": "İç Fındık",
        "cat_kabuklu-findik": "Kabuklu Fındık",
        "cat_kavrulmus-findik": "Kavrulmuş / Çifte Kavrulmuş Fındık",
        "cat_findik-ezmesi": "Fındık Ezmesi / Kreması",
        "cat_findik-unu": "Fındık Unu",
        "cat_findik-yagi": "Fındık Yağı",
        "cat_findikli-cikolata": "Fındıklı Çikolata",

        recipes_main_title: "NEFİS FINDIKLI TARİFLER",
        view_recipe: "Tarifi Gör",
        rec_kurabiye_title: "Fındıklı Kurabiye",
        rec_kurabiye_info: "Kolay • 25dk",
        rec_brownie_title: "Fındıklı Brownie",
        rec_brownie_info: "Orta • 40dk",
        rec_sutlu_title: "Fındık Ezmeli Sütlü Tatlı",
        rec_sutlu_info: "Kolay • 30dk",
        rec_baklava_title: "Fındıklı Baklava Sarma",
        rec_baklava_info: "Orta • 60dk",
        rec_magnolya_title: "Fındıklı Magnolya",
        rec_magnolya_info: "Kolay • 20dk",
        rec_dondurma_title: "Muzlu Fındıklı Dondurma",
        rec_dondurma_info: "Çok Kolay • 10dk",

        support_main_title: "YARDIM & DESTEK",
        support_sub_title: "Popüler Sorular",
        q1: "Fındıklar ne kadar süre raf ömrü mevcut?",
        a1: "Uygun koşullarda muhafaza edildiğinde 1 yıl boyunca tazeliğini korur.",
        q2: "Siparişim ne zaman kargoya verilir?",
        a2: "Hafta içi saat 10:00’a kadar verdiğiniz siparişler aynı gün kargoya teslim edilir. 10:00’dan sonra verilen siparişler ise bir sonraki iş gününde kargoya verilir.",
        q3: "Adresimde olmadığım bir zamanda siparişim geldiğinde ne yapmalıyım?",
        a3: "Kargo şirketi, adresinizde bulunamadığınız durumlarda, paketinizi şubeden alabileceğinizi belirten bir not bırakır. Bu durumda, paketinizi 3 iş günü içerisinde ilgili kargo şubesinden teslim almanız gerekmektedir. Belirtilen süre içinde teslim alınmayan paketler için iade süreci otomatik olarak başlatılacaktır.",
        q4: "Siparişimde eksik bir ürün olduğunu fark ettim, bu durumda ne yapmalıyım?",
        a4: "Siparişinizi teslim alırken kargo görevlisi ile birlikte paketinizi açıp kontrol etmelisiniz. Ürünlerinizi eksik teslim almanız halinde kargo görevlisinden durum tespit tutanağı hazırlamasını isteyebilirsiniz. Durum tespit tutanağınız varsa tutanağınızın görselini talebinizin içerisine eklemeyi unutmayınız.",
        q5: "Sipariş ettiğim ürün yerine farklı bir ürün gönderilmiş, ne yapmalıyım?",
        a5: "Faturada belirtilen ürün ile kargo paketinden çıkan ürün farklıysa, teslimat tarihinden itibaren 14 gün içinde bizimle iletişime geçmeniz gerekmektedir.",
        q6: "Ürün veya siparişle ilgili taleplerimi ve sorularımı nasıl iletebilirim?",
        a6: "Ürün veya siparişiniz ile ilgili sorularınızı ve görüşlerinizi bindasfindik@gmail.com adresine e-posta göndererek veya WhatsApp üzerinden 0543 746 39 22 telefon numaramızdan iletebilirsiniz.",
        q7: "Siparişimin teslimat adresini veya alıcı adını değiştirebilir miyim?",
        a7: "Eğer siparişiniz kargo firmasına teslim edilmediyse, teslimat adresi veya alıcı adı değişikliği yapılabilir. Ancak, sipariş kargo firmasına teslim edildikten sonra değişiklik yapılamamaktadır.",
        q8: "İade politikamız nedir?",
        a8: "Ambalajı açılmamış ürünleri 14 gün içerisinde faturası ile birlikte iade edebilirsiniz. Gıda ürünlerinde paketi açılmış ürünler iade alınmamaktadır.",
        q9: "İade için benden herhangi bir ücret alınacak mı?",
        a9: "Hayır, iade kapsamındaki ürünler için kargo ücreti tarafımızca karşılanacaktır.",
        q10: "Ücret iadesi ne zaman yapılır?",
        a10: "İade talebiniz onaylandıktan sonra 3-5 iş günü içerisinde bankanıza iletilir.",
        q11: "Yurtdışına teslimat var mı?",
        a11: "Hayır, şu an için yalnızca Türkiye sınırları içerisine gönderim sağlamaktayız.",
        contact_box_title: "İletişim",
        contact_address: "Adres:",
        contact_email: "E-posta:",
        contact_phone: "Telefon:",
        contact_hours: "Çalışma Saatleri:",
        contact_hours_value: "Hafta içi 07:00 - 17:00",
        
        related_products_title: "Bu Tarifte Kullanılan Ürünleri Hemen Alın",

        cart_main_title: "SEPETİM",
        th_product_name: "Ürün Adı",
        th_price: "Fiyat",
        th_quantity: "Ürün Adedi",
        th_remove: "Kaldır",
        total_price_initial: "Toplam Fiyat : 0 TL",
        checkout_btn: "Ödemeye geç",

        register_main_title: "Yeni Üyelik",
        lbl_name: "Ad",
        lbl_surname: "Soyad",
        lbl_phone: "Telefon",
        lbl_address: "Adres",
        ph_address: "Teslimat adresiniz...",
        lbl_email: "Mail (E-posta)",
        lbl_password: "Şifre",
        btn_register: "Üye Ol / Giriş Yap",
        text_already_account: "Zaten hesabınız var mı?",
        link_login: "Giriş Yapın",

        btn_login: "Giriş Yap",
        ph_email: "E-posta adresiniz",
        go_register_page: "Kayıt Ol Sayfasına Git",

        // FAVORİLER SAYFASI (YENİ EKLENENLER)
        fav_main_title: "Favorilerim"
    },
    en: {
        site_title: "Bindaş Hazelnut | Homepage",
        products_site_title: "Bindaş Hazelnut | All Products",
        recipes_site_title: "Bindaş Hazelnut | Delicious Recipes",
        support_site_title: "Bindaş Hazelnut | Help & Support",
        about_site_title: "Bindaş Hazelnut | About Us",
        recipe_detail_site_title: "Bindaş Hazelnut | Recipe Details",
        cart_site_title: "Bindaş Hazelnut | My Cart",
        register_site_title: "Bindaş Hazelnut | New Register",
        login_site_title: "Bindaş Hazelnut | Sign In & Register",
        fav_site_title: "Bindaş Hazelnut | My Favorites",
        nav_products: "Products",
        nav_recipes: "Recipes",
        nav_about: "About Us",
        nav_support: "Help & Support",
        hero_title: "Fresh Hazelnuts at Your Doorstep",
        hero_subtitle: "Snack hazelnuts are shipped all over the world with contracted cargo.",
        hero_btn: "Shop Now",
        best_sellers_title: "Best Selling Products",
        add_to_cart_btn: "Add to Cart",
        currency: "$",
        total_price_label: "Total Price : ",
        empty_cart: "Your cart is currently empty.",
        empty_fav: "There are no favorite products in your list yet.",
        alert_add_cart: "successfully added to cart!",
        alert_add_fav: "added to favorites!",
        alert_remove_fav: "removed from favorites.",

        "about-us": "About Us",
        "about-us-description": "Bindaş Hazelnut is a local family business that carefully selects quality hazelnuts grown in the fertile lands of the Black Sea and delivers them to your tables. Keeping naturalness, freshness, and reliable production at the forefront, we deliver the true taste of hazelnuts from Ordu to all four corners of Turkey.",
        "about-us-description-2": "We aim to combine traditional labor with a modern understanding to offer the same quality in every product.",

        sidebar_title: "Categories",
        "cat_ic_findik": "Hazelnut Kernels",
        "cat_kabuklu-findik": "In-Shell Hazelnuts",
        "cat_kavrulmus-findik": "Roasted / Double-roasted Hazelnuts",
        "cat_findik-ezmesi": "Hazelnut Paste / Cream",
        "cat_findik-unu": "Hazelnut Flour",
        "cat_findik-yagi": "Hazelnut Oil",
        "cat_findikli-cikolata": "Hazelnut Chocolate",

        recipes_main_title: "DELICIOUS HAZELNUT RECIPES",
        view_recipe: "View Recipe",
        rec_kurabiye_title: "Hazelnut Cookies",
        rec_kurabiye_info: "Easy • 25 min",
        rec_brownie_title: "Hazelnut Brownie",
        rec_brownie_info: "Medium • 40 min",
        rec_sutlu_title: "Hazelnut Pudding",
        rec_sutlu_info: "Easy • 30 min",
        rec_baklava_title: "Hazelnut Baklava Roll",
        rec_baklava_info: "Medium • 60 min",
        rec_magnolya_title: "Hazelnut Magnolia",
        rec_magnolya_info: "Easy • 20 min",
        rec_dondurma_title: "Banana Hazelnut Ice Cream",
        rec_dondurma_info: "Very Easy • 10 min",

        support_main_title: "HELP & SUPPORT",
        support_sub_title: "Popular Questions",
        q1: "How long is the shelf life of hazelnuts?",
        a1: "When stored under proper conditions, it maintains its freshness for 1 year.",
        q2: "When will my order be shipped?",
        a2: "Orders placed until 10:00 AM on weekdays are shipped on the same day. Orders placed after 10:00 AM are shipped on the next business day.",
        q3: "What should I do if my order arrives when I am not at my address?",
        a3: "If you are not found at your address, the cargo company leaves a note stating that you can pick up your package from the branch. In this case, you must receive your package from the relevant cargo branch within 3 business days. The return process will be automatically initiated for packages not collected within the specified period.",
        q4: "I noticed a missing product in my order, what should I do?",
        a4: "When receiving your order, you should open and check your package together with the courier. If your products are missing, you can ask the courier to prepare a damage assessment report. If you have a damage assessment report, do not forget to add its image to your request.",
        q5: "A different product was sent instead of the one I ordered, what should I do?",
        a5: "If the product specified in the invoice and the product inside the cargo package are different, you must contact us within 14 days from the delivery date.",
        q6: "How can I submit my requests and questions regarding a product or order?",
        a6: "You can send your questions and opinions about your product or order by sending an e-mail to bindasfindik@gmail.com or via WhatsApp at our phone number +90 0543 746 39 22.",
        q7: "Can I change the delivery address or recipient name of my order?",
        a7: "If your order has not been delivered to the cargo company, the delivery address or recipient name can be changed. However, no changes can be made after the order is delivered to the cargo company.",
        get q8() { return this._q8; },
        set q8(value) { this._q8 = value; },
        a8: "You can return unopened products within 14 days with their invoice. Opened packages are not accepted for return in food products.",
        q9: "Will I be charged any fees for returns?",
        a9: "No, the shipping fee for products within the scope of return will be covered by us.",
        q10: "When will the refund be made?",
        a10: "After your return request is approved, it will be forwarded to your bank within 3-5 business days.",
        q11: "Is there international delivery?",
        a11: "No, currently we only ship within the borders of Turkey.",
        contact_box_title: "Contact",
        contact_address: "Address:",
        contact_email: "E-mail:",
        contact_phone: "Phone:",
        contact_hours: "Working Hours:",
        contact_hours_value: "Weekdays 07:00 AM - 05:00 PM",
        
        related_products_title: "Buy the Products Used in This Recipe Immediately",

        cart_main_title: "MY CART",
        th_product_name: "Product Name",
        th_price: "Price",
        th_quantity: "Quantity",
        th_remove: "Remove",
        total_price_initial: "Total Price : 0 $",
        checkout_btn: "Proceed to checkout",

        register_main_title: "Sign Up",
        lbl_name: "First Name",
        lbl_surname: "Last Name",
        lbl_phone: "Phone Number",
        lbl_address: "Address",
        ph_address: "Your delivery address...",
        lbl_email: "Email Address",
        lbl_password: "Password",
        btn_register: "Register / Sign In",
        text_already_account: "Already have an account?",
        link_login: "Login here",

        btn_login: "Sign In",
        ph_email: "example@mail.com",
        go_register_page: "Go to Register Page",

        // FAVORİLER SAYFASI (YENİ EKLENENLER)
        fav_main_title: "My Favorites"
    }
};
// Aktif dili tespit etme fonksiyonu (Sıfırlanmayı önlemek için en başta çalışır)
function getActiveLang() {
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) return savedLang;
    
    return navigator.language.startsWith("en") ? "en" : "tr";
}

document.addEventListener("DOMContentLoaded", () => {
    const currentLang = getActiveLang();
    window.currentLang = currentLang;
    const paraBirimi = translations[currentLang].currency;

    // Sayfa açılır açılmaz HTML dil etiketini ve statik metinleri giydiriyoruz
    document.documentElement.lang = currentLang;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        if (translations[currentLang] && translations[currentLang][translationKey]) {
            element.textContent = translations[currentLang][translationKey];
        }
    });

    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderElements.forEach(element => {
        const placeholderKey = element.getAttribute("data-i18n-placeholder");
        if (translations[currentLang] && translations[currentLang][placeholderKey]) {
            element.setAttribute("placeholder", translations[currentLang][placeholderKey]);
        }
    });

    // CONTACT PHONE LANGUAGE FIX
    const contactPhoneEl = document.getElementById("contact-phone");
    if (contactPhoneEl) {
        if (currentLang === "en") {
            contactPhoneEl.innerText = "+90 543 746 39 22";
        } else {
            contactPhoneEl.innerText = "0543 746 39 22";
        }
    }

    // ==========================================================================
    // 1. DİNAMİK ÜRÜN VERİTABANI (KATALOG - ÇOK DİLLİ)
    // ==========================================================================
    const tumUrunler = [
        // İÇ FINDIK
        { kategoriId: "grid-ic-findik", ad_tr: "İç Fındık", ad_en: "Hazelnut Kernels", aciklama_tr: "500 gr", aciklama_en: "500 g",fiyat_tr:325.00, fiyat_en: 7, img: "../images/products/ic-findik-500.png", enCokSatan: true },
        { kategoriId: "grid-ic-findik", ad_tr: "İç Fındık", ad_en: "Hazelnut Kernels", aciklama_tr: "1 kg", aciklama_en: "1 kg",fiyat_tr:600.00, fiyat_en: 13.00, img: "../images/products/ic-findik-1.png", enCokSatan: true },
        { kategoriId: "grid-ic-findik", ad_tr: "İç Fındık", ad_en: "Hazelnut Kernels", aciklama_tr: "2 kg", aciklama_en: "2 kg", fiyat_tr:1150.00, fiyat_en: 25.00, img: "../images/products/ic-findik-2.png" },
        { kategoriId: "grid-ic-findik", ad_tr: "İç Fındık", ad_en: "Hazelnut Kernels", aciklama_tr: "5 kg", aciklama_en: "5 kg", fiyat_tr:3000.00, fiyat_en: 66.00, img: "../images/products/ic-findik-5.png" },

        // KABUKLU FINDIK
        { kategoriId: "grid-kabuklu-findik", ad_tr: "Kabuklu Fındık", ad_en: "In-Shell Hazelnut", aciklama_tr: "500 gr", aciklama_en: "500 g", fiyat_tr:95.00, fiyat_en: 2.50, img: "../images/products/kabuklu-findik-500.png" },
        { kategoriId: "grid-kabuklu-findik", ad_tr: "Kabuklu Fındık", ad_en: "In-Shell Hazelnut", aciklama_tr: "1 kg", aciklama_en: "1 kg", fiyat_tr: 180.00, fiyat_en: 4.00, img: "../images/products/kabuklu-findik-1.png" },
        { kategoriId: "grid-kabuklu-findik", ad_tr: "Kabuklu Fındık", ad_en: "In-Shell Hazelnut", aciklama_tr: "2 kg", aciklama_en: "2 kg", fiyat_tr:350.00, fiyat_en: 7.50, img: "../images/products/kabuklu-findik-2.png" },
        { kategoriId: "grid-kabuklu-findik", ad_tr: "Kabuklu Fındık", ad_en: "In-Shell Hazelnut", aciklama_tr: "5 kg", aciklama_en: "5 kg", fiyat_tr: 850.00, fiyat_en: 18.50, img: "../images/products/kabuklu-findik-5.png" },

        // KAVRULMUŞ FINDIK
        { kategoriId: "grid-kavrulmus-findik", ad_tr: "Kavrulmuş Fındık", ad_en: "Roasted Hazelnuts", aciklama_tr: "500 gr", aciklama_en: "500 g", fiyat_tr: 375.00,fiyat_en: 8.50, img: "../images/products/kavrulmus-findik-500.png" },
        { kategoriId: "grid-kavrulmus-findik", ad_tr: "Kavrulmuş Fındık", ad_en: "Roasted Hazelnuts", aciklama_tr: "1 kg", aciklama_en: "1 kg", fiyat_tr: 700.00, fiyat_en: 15.50, img: "../images/products/kavrulmus-findik-1.png", enCokSatan: true },
        { kategoriId: "grid-kavrulmus-findik", ad_tr: "Kavrulmuş Fındık", ad_en: "Roasted Hazelnuts", aciklama_tr: "2 kg", aciklama_en: "2 kg", fiyat_tr: 1350.00, fiyat_en: 30.00, img: "../images/products/kavrulmus-findik-2.png", enCokSatan: true },
        { kategoriId: "grid-kavrulmus-findik", ad_tr: "Kavrulmuş Fındık", ad_en: "Roasted Hazelnuts", aciklama_tr: "5 kg", aciklama_en: "5 kg", fiyat_tr: 3300.00, fiyat_en: 72.50, img: "../images/products/kavrulmus-findik-5.png" },

        // ÇİFTE KAVRULMUŞ FINDIK
        { kategoriId: "grid-kavrulmus-findik", ad_tr: "Çifte Kavrulmuş Fındık", ad_en: "Double-roasted Hazelnuts", aciklama_tr: "500 gr", aciklama_en: "500 g",fiyat_tr: 375.00, fiyat_en: 8.50, img: "../images/products/ckavrulmus-findik-500.png" },
        { kategoriId: "grid-kavrulmus-findik", ad_tr: "Çifte Kavrulmuş Fındık", ad_en: "Double-roasted Hazelnuts", aciklama_tr: "1 kg", aciklama_en: "1 kg", fiyat_tr: 700.00, fiyat_en: 15.50, img: "../images/products/ckavrulmus-findik-1.png" },
        { kategoriId: "grid-kavrulmus-findik", ad_tr: "Çifte Kavrulmuş Fındık", ad_en: "Double-roasted Hazelnuts", aciklama_tr: "2 kg", aciklama_en: "2 kg", fiyat_tr: 1350.00, fiyat_en: 30.00, img: "../images/products/ckavrulmus-findik-2.png" },
        { kategoriId: "grid-kavrulmus-findik", ad_tr: "Çifte Kavrulmuş Fındık", ad_en: "Double-roasted Hazelnuts", aciklama_tr: "5 kg", aciklama_en: "5 kg", fiyat_tr: 3300.00, fiyat_en: 72.50, img: "../images/products/ckavrulmus-findik-5.png", enCokSatan: true },

        // FINDIK EZMESİ / KREMASI
        { kategoriId: "grid-findik-ezmesi", ad_tr: "Fındık Ezmesi", ad_en: "Hazelnut Paste", aciklama_tr: "350 gr", aciklama_en: "350 g",fiyat_tr: 250.00, fiyat_en: 5.50, img: "../images/products/findik-ezmesi-350.png" },
        { kategoriId: "grid-findik-ezmesi", ad_tr: "Fındık Ezmesi", ad_en: "Hazelnut Paste", aciklama_tr: "700 gr", aciklama_en: "700 g", fiyat_tr: 400.00,fiyat_en: 9.00, img: "../images/products/findik-ezmesi-700.png", enCokSatan: true },
        { kategoriId: "grid-findik-ezmesi", ad_tr: "Fındık Kreması", ad_en: "Hazelnut Cream", aciklama_tr: "350 gr", aciklama_en: "350 g", fiyat_tr: 200.00, fiyat_en: 4.00, img: "../images/products/findik-kremasi-350.png", enCokSatan: true },
        { kategoriId: "grid-findik-ezmesi", ad_tr: "Fındık Kreması", ad_en: "Hazelnut Cream", aciklama_tr: "700 gr", aciklama_en: "700 g", fiyat_tr: 350.00, fiyat_en: 8.00, img: "../images/products/findik-kremasi-700.png" },

        // FINDIK UNU
        { kategoriId: "grid-findik-unu", ad_tr: "Fındık Unu", ad_en: "Hazelnut Flour", aciklama_tr: "250 gr", aciklama_en: "250 g", fiyat_tr: 200.00,fiyat_en: 4.50, img: "../images/products/findik-unu-250.png", enCokSatan: true },
        { kategoriId: "grid-findik-unu", ad_tr: "Fındık Unu", ad_en: "Hazelnut Flour", aciklama_tr: "500 gr", aciklama_en: "500 g", fiyat_tr: 350.00, fiyat_en: 8.00, img: "../images/products/findik-unu-500.png" },
        { kategoriId: "grid-findik-unu", ad_tr: "Fındık Unu", ad_en: "Hazelnut Flour", aciklama_tr: "1 kg", aciklama_en: "1 kg", fiyat_tr: 600.00, fiyat_en: 13.50, img: "../images/products/findik-unu-1.png" },
        { kategoriId: "grid-findik-unu", ad_tr: "Fındık Unu", ad_en: "Hazelnut Flour", aciklama_tr: "2 kg", aciklama_en: "2 kg", fiyat_tr: 1000.00, fiyat_en: 22.00, img: "../images/products/findik-unu-2.png" },

        // FINDIK YAĞI
        { kategoriId: "grid-findik-yagi", ad_tr: "Fındık Yağı", ad_en: "Hazelnut Oil", aciklama_tr: "250 ml", aciklama_en: "250 ml",fiyat_tr: 100.00, fiyat_en: 2.50, img: "../images/products/findik-yagi-250.png" },
        { kategoriId: "grid-findik-yagi", ad_tr: "Fındık Yağı", ad_en: "Hazelnut Oil", aciklama_tr: "500 ml", aciklama_en: "500 ml", fiyat_tr: 200.00, fiyat_en: 4.50, img: "../images/products/findik-yagi-500.png" },
        { kategoriId: "grid-findik-yagi", ad_tr: "Fındık Yağı", ad_en: "Hazelnut Oil", aciklama_tr: "1 L", aciklama_en: "1 L", fiyat_tr: 300.00,fiyat_en: 7.00, img: "../images/products/findik-yagi-1.png" },
        { kategoriId: "grid-findik-yagi", ad_tr: "Fındık Yağı", ad_en: "Hazelnut Oil", aciklama_tr: "2 L", aciklama_en: "2 L", fiyat_tr: 500.00, fiyat_en: 11.00, img: "../images/products/findik-yagi-2.png" },
        { kategoriId: "grid-findik-yagi", ad_tr: "Fındık Yağı", ad_en: "Hazelnut Oil", aciklama_tr: "5 L", aciklama_en: "5 L", fiyat_tr: 1000.00, fiyat_en: 22.00, img: "../images/products/findik-yagi-5.png" },

        // FINDIKLI ÇİKOLATA / GOFRET
        { kategoriId: "grid-findikli-cikolata", ad_tr: "Fındıklı Çikolata", ad_en: "Hazelnut Chocolate", aciklama_tr: "250 gr", aciklama_en: "250 g", fiyat_tr: 200.00, fiyat_en: 4.50, img: "../images/products/findikli-cikolata-250.png" },
        { kategoriId: "grid-findikli-cikolata", ad_tr: "Fındıklı Çikolata", ad_en: "Hazelnut Chocolate", aciklama_tr: "500 gr", aciklama_en: "500 g", fiyat_tr: 400.00, fiyat_en: 9.00, img: "../images/products/findikli-cikolata-500.png", enCokSatan: true },
        { kategoriId: "grid-findikli-cikolata", ad_tr: "Fındıklı Çikolata", ad_en: "Hazelnut Chocolate", aciklama_tr: "1 kg", aciklama_en: "1 kg", fiyat_tr: 800.00, fiyat_en: 18.00, img: "../images/products/findikli-cikolata-1.png" },
        { kategoriId: "grid-findikli-cikolata", ad_tr: "Fındıklı Gofret - Sütlü", ad_en: "Milk Chocolate", aciklama_tr: "30 gr", aciklama_en: "30 g", fiyat_tr: 40.00, fiyat_en: 1.00, img: "../images/products/gofret-sutlu.png", enCokSatan: true },
        { kategoriId: "grid-findikli-cikolata", ad_tr: "Fındıklı Gofret - Bitter", ad_en: "Dark Chocolate", aciklama_tr: "30 gr", aciklama_en: "30 g", fiyat_tr: 40.00, fiyat_en: 1.00, img: "../images/products/gofret-bitter.png", enCokSatan: true },
        { kategoriId: "grid-findikli-cikolata", ad_tr: "Fındıklı Gofret - Beyaz", ad_en: "White Chocolate", aciklama_tr: "30 gr", aciklama_en: "30 g", fiyat_tr: 40.00, fiyat_en: 1.00, img: "../images/products/gofret-beyaz.png" },
        { kategoriId: "grid-findikli-cikolata", ad_tr: "Fındıklı Çikolata Kare", ad_en: "Hazelnut Chocolate Bar", aciklama_tr: "60 gr", aciklama_en: "60 g", fiyat_tr: 60.00, fiyat_en: 1.50, img: "../images/products/cikolata-kare.png", enCokSatan: true }
    ];

    // ==========================================================================
    // 2. ÜRÜNLERİ OTOMATİK OLARAK HTML İÇİNE YAZDIRAN KOD
    // ==========================================================================
    function urunleriEkranaBas() {
        const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/");
        const butonMetni = translations[currentLang].add_to_cart_btn;

        const anaSayfaGrid = document.getElementById("grid-best-sellers");
        let kategoriBulunduMu = false;

        tumUrunler.forEach((urun, index) => {
            let imgPath = urun.img;
            if (isIndexPage) {
                imgPath = imgPath.replace("../", "");
            }

            const urunAdi = currentLang === "en" ? urun.ad_en : urun.ad_tr;
            const urunAciklama = currentLang === "en" ? urun.aciklama_en : urun.aciklama_tr;

            const urunHTML = `
                <div class="product-card" data-urun-id="${index}" style="position: relative;">
                    <button class="fav-btn" style="position: absolute; top: 15px; right: 15px; background: #fff; border: none; font-size: 1.5rem; color: #ccc; cursor: pointer; border-radius: 50%; width: 35px; height: 35px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; z-index: 10;"><i class="fa-solid fa-heart"></i></button>
                    <img src="${imgPath}" alt="${urunAdi}">
                    <h3>${urunAdi}</h3>
                    <p>${urunAciklama}</p>
                    <span class="price">${(currentLang === "en" ? urun.fiyat_en : urun.fiyat_tr).toFixed(2)} ${paraBirimi}</span>
                    <button class="add-to-cart-btn">${butonMetni}</button>
                </div>
            `;

            const kategoriKutusu = document.getElementById(urun.kategoriId);
            if (kategoriKutusu) {
                kategoriKutusu.innerHTML += urunHTML;
                kategoriBulunduMu = true;
            }

            if (urun.enCokSatan && anaSayfaGrid && !kategoriKutusu) {
                anaSayfaGrid.innerHTML += urunHTML;
            }
        });

        if (!kategoriBulunduMu && anaSayfaGrid) {
            anaSayfaGrid.innerHTML = ""; 
            tumUrunler.forEach((urun, index) => {
                let imgPath = urun.img;
                if (isIndexPage) imgPath = imgPath.replace("../", "");
                const urunAdi = currentLang === "en" ? urun.ad_en : urun.ad_tr;
                const urunAciklama = currentLang === "en" ? urun.aciklama_en : urun.aciklama_tr;

                anaSayfaGrid.innerHTML += `
                    <div class="product-card" data-urun-id="${index}" style="position: relative;">
                        <button class="fav-btn" style="position: absolute; top: 15px; right: 15px; background: #fff; border: none; font-size: 1.5rem; color: #ccc; cursor: pointer; border-radius: 50%; width: 35px; height: 35px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; z-index: 10;"><i class="fa-solid fa-heart"></i></button>
                        <img src="${imgPath}" alt="${urunAdi}">
                        <h3>${urunAdi}</h3>
                        <p>${urunAciklama}</p>
                        <span class="price">${(currentLang === "en" ? urun.fiyat_en : urun.fiyat_tr).toFixed(2)} ${paraBirimi}</span>
                        <button class="add-to-cart-btn">${butonMetni}</button>
                    </div>
                `;
            });
        }
    }

    urunleriEkranaBas();

    function syncFavUI() {
        const favIds = (JSON.parse(localStorage.getItem("findikFavori")) || []).map(u => Number(u.id));
        document.querySelectorAll(".product-card").forEach(card => {
            const id = Number(card.getAttribute("data-urun-id"));
            const btn = card.querySelector(".fav-btn i");
            if (!btn) return;
            if (favIds.includes(id)) {
                btn.style.color = "#e74c3c";
            } else {
                btn.style.color = "#ccc";
            }
        });
    }

    syncFavUI();
    window.addEventListener("pageshow", syncFavUI);

    // ==========================
    // FAVORİLER SAYFASI RENDER
    // ==========================
    function favorileriEkranaBas() {
        const grid = document.getElementById("favori-grid");
        if (!grid) return;

        const favoriler = JSON.parse(localStorage.getItem("findikFavori")) || [];

        grid.innerHTML = "";

        if (favoriler.length === 0) {
            grid.innerHTML = `<p>${translations[currentLang].empty_fav}</p>`;
            return;
        }

        favoriler.forEach(urun => {
            grid.innerHTML += `
                <div class="product-card" data-urun-id="${urun.id}" style="position: relative;">
                    
                    <button class="fav-btn" style="position: absolute; top: 15px; right: 15px; background: #fff; border: none; font-size: 1.5rem; color: #e74c3c; cursor: pointer; border-radius: 50%; width: 35px; height: 35px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display:flex; align-items:center; justify-content:center; z-index:10;">
                        <i class="fa-solid fa-heart"></i>
                    </button>

                    <img src="${urun.img}" style="width:100%; border-radius:10px;">

                    <h3>${currentLang === "en" ? urun.ad_en : urun.ad_tr}</h3>
                    <p>${currentLang === "en" ? urun.aciklama_en : urun.aciklama_tr}</p>

                    <span class="price">${(currentLang === "en" ? urun.fiyat_en : urun.fiyat_tr).toFixed(2)} ${paraBirimi}</span>

                    <button class="add-to-cart-btn">
                        ${translations[currentLang].add_to_cart_btn}
                    </button>

                </div>
            `;
        });
    }

    // Eğer favoriler sayfasındaysak çalıştır
    if (document.getElementById("favori-grid")) {
        favorileriEkranaBas();
    }

    // ==========================================================================
    // 3. SEPET & FAVORİ BUTONLARINI DİNLEME ALANI
    // ==========================================================================
    let sepet = JSON.parse(localStorage.getItem("findikSepet")) || [];
    let favoriler = JSON.parse(localStorage.getItem("findikFavori")) || [];

    document.addEventListener("click", (e) => {
        // FAVORİ BUTONU
        const favBtn = e.target.closest(".fav-btn");
        if (favBtn) {
            const productCard = favBtn.closest(".product-card");
            if (!productCard) return;

            const productImg = productCard.querySelector("img").src;
            const productId = Number(productCard.getAttribute("data-urun-id"));
            const urunVarMi = favoriler.find(u => Number(u.id) === productId);
            const urun = tumUrunler[productId];
            const productName = currentLang === "en" ? urun.ad_en : urun.ad_tr;
            const productDesc = currentLang === "en" ? urun.aciklama_en : urun.aciklama_tr;

            if (urunVarMi) {
                favoriler = favoriler.filter(u => Number(u.id) !== productId);
                favBtn.style.color = "#ccc";

                localStorage.setItem("findikFavori", JSON.stringify(favoriler));

                alert(productName + " (" + productDesc + ") " + translations[currentLang].alert_remove_fav);

                // instantly update heart icons everywhere
                syncFavUI();

                // if we are on favorites page, re-render immediately
                const favGrid = document.getElementById("favori-grid");
                if (favGrid) {
                    favorileriEkranaBas();
                }

                return;
            } else {
                favoriler.push({
                    id: productId,
                    ad_tr: tumUrunler[productId].ad_tr,
                    ad_en: tumUrunler[productId].ad_en,
                    aciklama_tr: tumUrunler[productId].aciklama_tr,
                    aciklama_en: tumUrunler[productId].aciklama_en,
                    fiyat_tr: tumUrunler[productId].fiyat_tr,
                    fiyat_en: tumUrunler[productId].fiyat_en,
                    img: productImg
                });
                favBtn.style.color = "#e74c3c";
                alert(productName + " (" + productDesc + ") " + translations[currentLang].alert_add_fav);
            }

            localStorage.setItem("findikFavori", JSON.stringify(favoriler));
            syncFavUI();
            return;
        }

        // SEPET BUTONU
        const cartBtn = e.target.closest(".add-to-cart-btn");
        if (cartBtn) {
            const productCard = cartBtn.closest(".product-card");
            if (!productCard) return;

            const productImg = productCard.querySelector("img").src;
            const productId = Number(productCard.getAttribute("data-urun-id"));
            const urun = tumUrunler[productId];
            const productName = currentLang === "en" ? urun.ad_en : urun.ad_tr;
            const productDesc = currentLang === "en" ? urun.aciklama_en : urun.aciklama_tr;

            const productPrice = currentLang === "en"
                ? urun.fiyat_en
                : urun.fiyat_tr;

            // Find if the product already exists in cart (by id and language-specific description)
            const mevcutUrun = sepet.find(u =>
                (currentLang === "en"
                    ? u.ad_en === urun.ad_en && u.adetEx_en === urun.aciklama_en
                    : u.ad_tr === urun.ad_tr && u.adetEx_tr === urun.aciklama_tr)
            );

            if (mevcutUrun) {
                mevcutUrun.adet += 1;
            } else {
                sepet.push({
                    ad_tr: urun.ad_tr,
                    ad_en: urun.ad_en,
                    fiyat_tr: urun.fiyat_tr,
                    fiyat_en: urun.fiyat_en,
                    adet: 1,
                    adetEx_tr: urun.aciklama_tr,
                    adetEx_en: urun.aciklama_en,
                    img: productImg
                });
            }

            localStorage.setItem("findikSepet", JSON.stringify(sepet));
            alert(productName + " (" + productDesc + ") " + translations[currentLang].alert_add_cart);
        }
    });

    // ==========================================================================
    // 4. SEPET SAYFASI YAZDIRMA İŞLEMLERİ
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
            cartTableBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">${translations[currentLang].empty_cart}</td></tr>`;
            if (totalPriceElement) totalPriceElement.innerText = translations[currentLang].total_price_label + "0 " + paraBirimi;
            return;
        }

        sepet.forEach((urun, index) => {
            const urunAdi = currentLang === "en" ? urun.ad_en : urun.ad_tr;
            const urunAciklama = currentLang === "en" ? urun.adetEx_en : urun.adetEx_tr;
            const urunFiyati = currentLang === "en" ? urun.fiyat_en : urun.fiyat_tr;
            const araToplam = urunFiyati * urun.adet;
            toplamFiyat += araToplam;
            
            const imgHTML = urun.img ? 
                `<img src="${urun.img}" alt="${urunAdi}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px; border: 1px solid #eaeaea;">` : 
                `<div class="img-placeholder" style="width: 50px; height: 50px; background-color: #eaeaea; border-radius: 5px; border: 1px solid #ccc;"></div>`;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td class="product-info">
                    ${imgHTML}
                    <span>${urunAdi} (${urunAciklama || ''})</span>
                </td>
                <td>${urunFiyati.toFixed(2)} ${paraBirimi}</td>
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
        // Show total price in cart-total element if exists, otherwise fallback to .total-price
        const totalElement = document.getElementById("cart-total");
        if (totalElement) {
            totalElement.innerText = `${toplamFiyat.toFixed(2)} ${paraBirimi}`;
        } else if (totalPriceElement) {
            totalPriceElement.innerText = `${translations[currentLang].total_price_label}${toplamFiyat.toFixed(2)} ${paraBirimi}`;
        }
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

// ==========================================================================
// B. DİL DEĞİŞTİRME BUTON TETİKLEYİCİSİ
// ==========================================================================
function setLanguage(lang) {
    localStorage.setItem("preferredLanguage", lang);
    window.location.reload(); 
}

document.addEventListener("DOMContentLoaded", () => {
    const activeLang = getActiveLang();
    
    if (document.getElementById("btn-tr") && document.getElementById("btn-en")) {
        document.getElementById("btn-tr").addEventListener("click", () => setLanguage("tr"));
        document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
        
        if(activeLang === 'tr') {
            document.getElementById("btn-tr").style.color = "#000";
            document.getElementById("btn-en").style.color = "#777";
        } else {
            document.getElementById("btn-tr").style.color = "#777";
            document.getElementById("btn-en").style.color = "#000";
        }
    }
});