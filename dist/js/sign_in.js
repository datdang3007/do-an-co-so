// let username = $('#inputLogin').val();
// let password = $('#inputPassword').val();

$("#btnSignIn").click((e) => {
    e.preventDefault();

    const data = {
        username: "Dang Tien Dat",
        email: "dat1awdwadwadwad",
        admin: 0,
    };
    Register(data).then(data => {
        console.log(data);
    });

    // AlertRegister(data);
});

async function Register(data) {
    let test = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((data) => data.json())
    return test
}

// async function AlertRegister(data) {
//     Register(data).then(dt => {
//         alert(dt);
//     });
// }