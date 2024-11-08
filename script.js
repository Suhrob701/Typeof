let name = prompt("String typedagi malumot kiriting");
console.log("Ismingiz:", name); // foydalanuvchi kiritgan ismni ko‘rsatadi

let age = Number(prompt("Number typedagi malumot kiriting"));
console.log("Yoshingiz:", age); // foydalanuvchi kiritgan yoshni ko‘rsatadi

let isStudent = Boolean(prompt("boolean typedagi malumot kiriting (ha yoki yo'q)"));
console.log("Talaba ekansizmi:", isStudent)

let isConfirmed = confirm("Hamma ma'lumotlarni to'g'ri kiritganizga ishonchingiz komilmi?");


const inputs = ["Suhrob", 123, true];


const messages = inputs.map(value => {
    let type = typeof value;
    return `Siz kiritgan ${value} sozi ${type} typega tegishli`;
});


confirm(messages.join("\n"));