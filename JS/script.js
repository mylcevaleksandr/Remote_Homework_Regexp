window.onload = () => {
    let bodyBehindModal = document.querySelector( "body" );

    let formMain = document.getElementById( "main__form" );

    let labels = document.getElementsByTagName( "label" );

    let popUpBtn = document.getElementById( "popup-submit" );

    let modal = document.querySelector( ".popup-wrapper" );

    let account = document.querySelector( ".main__p" );

    let signUpBtn = document.querySelector( ".main__btn" );

    let errorMsg = document.getElementsByClassName( "error-message" );

    let formUsername = formMain[1].nextElementSibling;

    let formPassword = formMain[3].nextElementSibling;

    let formHeader = document.querySelector( ".main__h1 " );

    let registeredUser = "";

    let registeredPassword = "";

    let inputStyles = {
        "border-color": "red",
        "border-width": "1px",
        "border-style": "solid"
    };

    let authentificationStyle = {
        "border-width": "0",
        "borderBottomWidth": "1px",
        "borderColor": "green"
    };

    popUpBtn.onclick = () => {
        logIn();
    };

    account.onclick = () => {
        logIn();
    };

    formMain.addEventListener( "submit", function ( e ) {

        e.preventDefault();
        e.stopPropagation();
        for ( let item of errorMsg ) {
            item.style.display = "none";
        }

        for ( let item of formMain ) {
            item.style = "revert";
        }
        if ( !e.target[0].value.match( /^[А-ЯA-Z][А-яa-z]+\s*$/ ) ) {
            this[0].nextElementSibling.style.display = "block";
            Object.assign( this[0].style, inputStyles );
        }
        else if ( !e.target[1].value.match( /^[A-Za-z0-9-_]+\s*$/ ) ) {
            this[1].nextElementSibling.style.display = "block";
            Object.assign( this[1].style, inputStyles );
        }
        else if ( !e.target[2].value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ) ) {
            this[2].nextElementSibling.style.display = "block";
            Object.assign( this[2].style, inputStyles );
        }
        else if ( !e.target[3].value.match( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?^])[A-Za-z\d#$@!%&*?^]{8,16}$/ ) ) {
            this[3].nextElementSibling.style.display = "block";
            Object.assign( this[3].style, inputStyles );
        }
        else if ( e.target[4].value !== e.target[3].value ) {
            this[4].nextElementSibling.style.display = "block";
            Object.assign( this[4].style, inputStyles );
        }
        else if ( this[5].checked === false ) {
            document.querySelector( ".checkbox-error" ).style.display = "block";
        }
        else {
            modal.style.display = "flex";
            bodyBehindModal.style.overflow = "hidden";
            clientObjectCreator( e.target );
            welcome();
        }
    } );

    function clientObjectCreator( target ) {
        let clientObj = {};
        clientObj.name = target[0].value;
        clientObj.username = target[1].value;
        clientObj.email = target[2].value;
        clientObj.password = target[4].value;
        setLocalStorage( clientObj );
    }

    function setLocalStorage( client, ) {
        let clients = localStorage.getItem( "clients" );
        let userArray = [];
        if ( clients ) {
            userArray = JSON.parse( clients );
            userArray.push( client );
            localStorage.setItem( "clients", JSON.stringify( userArray ) );
        }
        else {
            userArray.push( client );
            localStorage.setItem( "clients", JSON.stringify( userArray ) );
        }
        console.log( userArray );
    }

    function welcome() {
        let userName = "";
        let userN = "";
        let userP = "";

        account.innerHTML = "Registration";

        account.onclick = () => {
            window.location.reload();
        };

        signUpBtn.onclick = () => {
            userN = formMain[1].value;
            userP = formMain[3].value;

            for ( let item of errorMsg ) {
                item.style.display = "none";
            }

            for ( let item of formMain ) {
                item.style.borderColor = "green";
            }
            if ( !userN ) {
                formUsername.style.display = "block";
                Object.assign( formMain[1].style, inputStyles );
            }
            if ( !userP ) {
                formPassword.innerHTML = "Введите свой пароль!";
                formPassword.style.display = "block";
                Object.assign( formMain[3].style, inputStyles );
            }
            if ( userN && userP ) {
                userName = search( userN, userP );

                authentification( userN, userP, userName );

            }
        };
    }

    function search( username, password ) {

        let clients = localStorage.getItem( "clients" );

        let testArray = JSON.parse( clients );

        registeredPassword = "";
        registeredUser = "";

        for ( let i = 0; i < testArray.length; i++ ) {
            if ( testArray[i].username === username ) {
                registeredUser = testArray[i].username;

            }
            if ( testArray[i].username === username && testArray[i].password === password ) {
                registeredPassword = testArray[i].password;
                return testArray[i];
            }
        }
    }

    function authentification( username, password, user ) {
        formUsername.style.display = "none";
        formPassword.style.display = "none";

        if ( !registeredUser ) {
            Object.assign( formMain[1].style, inputStyles );

            formMain[1].style.borderColor = "red";
            formUsername.innerHTML = "Такой пользователь не зарегистрирован";
            formUsername.style.display = "block";
        }
        else if ( !registeredPassword ) {
            Object.assign( formMain[3].style, authentificationStyle );
            formMain[3].style.borderColor = "red";
            formPassword.innerHTML = "Неверный пароль";
            formPassword.style.display = "block";
        }
        else {
            formHeader.innerHTML = "Welcome " + user.name + "!";
            document.querySelector( ".main__h3" ).style.display = "none";
            account.style.display = "none";
            formMain[1].style.display = "none";
            formMain[3].style.display = "none";
            labels[1].style.display = "none";
            labels[3].style.display = "none";
            signUpBtn.innerText = "Exit";
            signUpBtn.onclick = () => {
                window.location.reload();
            };
        }
    }

    function logIn() {
        modal.style.display = "none";
        formHeader.innerHTML = "Log in to the system";
        formMain[0].style.display = "none";
        labels[0].style.display = "none";
        formMain[2].style.display = "none";
        labels[2].style.display = "none";
        formMain[4].style.display = "none";
        labels[4].style.display = "none";
        formMain[5].style.display = "none";
        labels[5].style.display = "none";
        signUpBtn.innerText = "Sign In";
        signUpBtn.type = "button";
        bodyBehindModal.style.overflow = "revert";
        welcome();
    }
};
   
 