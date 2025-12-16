const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function fetchContact (){
    console.log("Sedang menghubungkan ke database...");
    await delay();
    console.log("Terhubung");
    return [
        {name: "Ridwan", role: "Backend Developer"},
        {name: "Budi", role: "Senior Engineer"}
    ]
}



async function main() {
     console.log("Aplikasi Contacts dimulai...");
     try {
        const data = await fetchContact();
        console.log("Data diterima", data);

     }
     catch (error){
        console.log("Gagal mengambil data", error)
     }
     
}


main()