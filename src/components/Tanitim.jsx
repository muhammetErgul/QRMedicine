import React from "react";

const Tanitim = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-8">
      <div className="w-full sm:w-11/12 md:w-10/12 lg:w-4/5 xl:w-3/4 px-4 flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1 w-full">
          <iframe 
            className="w-full rounded-lg shadow-md" 
            height="430px"
            src="https://www.youtube.com/embed/ysACqAfa35c" 
            title="Medicine Hospital Tanıtım Filmi" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
          ></iframe>
        </div>
        <div className="flex-1 p-8 rounded-lg w-full">
          <h1 className="text-3xl font-bold text-[#0A568C] mb-4">ATLAS ÜNİVERSİTESİ MEDICINE HASTANESİ</h1>
          <p className="text-gray-700 leading-relaxed">
            Atlas Üniversitesi Medicine Hastanesi; 1998’den beri kaliteli sağlık
            hizmetleriyle hastalarının güvenini kazanmış, başarılı tanı ve tedavi
            süreçleriyle birçok hastasının şifa bulmasına vesile olmuş saygın bir
            sağlık kurumu olarak hizmetlerini devam ettirmektedir. Hastanemiz, son
            teknoloji ile donatılmış modern binası, teknik cihaz ve
            ekipmanlarıyla, 75.000 m2 kapalı alana sahiptir. 400 yatak kapasitesi,
            biri hibrit olmak üzere 19 ameliyathanesi ile yılda 400 bin poliklinik
            ve 30 binden fazla ameliyat gerçekleştirerek sunduğu hizmetlerle
            sağlık sistemimiz içerisinde, öncü ve lider kurumlardan biri olmayı
            başarmıştır. Ayrıca 250 kişilik konferans salonu, 3 adet dersliği ile
            hastanemiz; yıllardır lise ve üniversite düzeyinde uygulama eğitimi ve
            sağladığı staj olanaklarıyla 10 bini aşkın öğrencisine sağlık eğitimi
            vererek önemli bir misyon üstlenmiştir. Güçlü bir akademik kadroya ve
            bilimsel birikime sahip olan hastanemiz 2019 yılından itibaren “Atlas
            Üniversitesi Medicine Hastanesi” olarak, etik tutumu ve ilkeli
            duruşundan taviz vermeden, ülkemiz ve dünya tıbbına hizmet vermeye
            devam edecektir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tanitim;
