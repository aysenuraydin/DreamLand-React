import React, { useState, useEffect } from "react";
import { storage } from "../firebase/firebaseConfig"; // Firebase Storage'ı içe aktar
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [uploading, setUploading] = useState(false);

    // 📌 Firebase Storage'a yükleme işlemi
    const handleUpload = () => {
        if (!image) {
            alert("Lütfen bir resim seçin!");
            return;
        }

        setUploading(true);

        // 📌 Firebase Storage içinde 'images/' klasörüne dosya yükleme
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Yükleme yüzdesini hesaplayabilirsin (isteğe bağlı)
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Yükleme ilerlemesi: ${progress}%`);
            },
            (error) => {
                console.error("Yükleme hatası:", error);
                setUploading(false);
            },
            () => {
                // 📌 Yükleme tamamlandığında dosya URL'ini al
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageUrls((prev) => [...prev, downloadURL]); // Yeni resmi listeye ekle
                    setUploading(false);
                    setImage(null);
                });
            }
        );
    };

    // 📌 Firebase Storage'dan resimleri listeleme
    useEffect(() => {
        const fetchImages = async () => {
            const imagesRef = ref(storage, "images/"); // 'images/' klasöründeki tüm resimler
            listAll(imagesRef)
                .then((response) => {
                    const urls = response.items.map((item) => getDownloadURL(item));
                    Promise.all(urls).then((results) => setImageUrls(results));
                })
                .catch((error) => console.error("Resimleri getirirken hata:", error));
        };

        fetchImages();
    }, []);

    return (
        <div className="p-4 border rounded-lg shadow-lg w-96 mx-auto">
            <h2 className="text-lg font-semibold mb-3">Firebase Storage'a Resim Yükle</h2>

            {/* 📌 Dosya Seçme Alanı */}
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />

            {/* 📌 Yükleme Butonu */}
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded disabled:opacity-50"
                onClick={handleUpload}
                disabled={uploading}
            >
                {uploading ? "Yükleniyor..." : "Yükle"}
            </button>

            {/* 📌 Yüklenen Resimleri Listeleme */}
            <h3 className="text-md font-medium mt-4">Seçilen Resim</h3>
            <div className="grid grid-cols-3 gap-2 mt-2">
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt="Yüklenen Resim" className="w-full h-24 object-cover rounded" />
                ))}
            </div>
            <h3 className="text-md font-medium mt-4">Yüklenen Resimler</h3>
            <div className="grid grid-cols-3 gap-2 mt-2">
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt="Yüklenen Resim" className="w-full h-24 object-cover rounded" />
                ))}
            </div>
        </div>
    );
};

export default ImageUpload;