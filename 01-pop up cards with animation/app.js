const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActive();
        panel.classList.add("active");

    })
})

function removeActive()
{
    panels.forEach(panel => {
        panel.classList.remove("active");

    })
}
/* Tıklama olayı tetiklendiğinde, tüm panellerden "active" sınıfını kaldıran ve tıklanan panele "active" sınıfını ekleyen bir işlev olan removeActive işlevini çağırır.

İşlevlerin işleyişi şu şekildedir:

const panels = document.querySelectorAll(".panel");: 
HTML belgesinde "panel" sınıfına sahip tüm elementleri seçmek için document.querySelectorAll kullanarak bir NodeList oluşturur. Bu NodeList, belgedeki tüm "panel" elementlerini içerir.

panels.forEach(panel => { ... }): 
NodeList içindeki her panel elementi için bir döngü oluşturur.

panel.addEventListener("click", () => { ... }): 
Her panel elementine tıklama olayı dinleyicisi ekler. Tıklama olayı tetiklendiğinde, aşağıdaki kodu içeren bir anonim işlev çalıştırılır:

a. removeActive();: 
Önceki "active" sınıfını kaldırmak için removeActive işlevini çağırır.

b. panel.classList.add("active");: 
Tıklanan panel elementine "active" sınıfını ekler, böylece bu paneli vurgular.

function removeActive() { ... }: 
Bu işlev, "active" sınıfını tüm panel elementlerinden kaldırmak için kullanılır. Bir döngü kullanarak, NodeList içindeki her panel elementinin "active" sınıfını kaldırır.F */