window.onload = () => {
    let bodyBehindModal = document.querySelector( "body" );

    let formMain = document.getElementById( "main__form" );

    let labels = document.getElementsByTagName( "label" );

    let popUpBtn = document.getElementById( "popup-submit" );

    let modal = document.querySelector( ".popup-wrapper" );

    let account = document.querySelector( ".main__p" );

    let signUpBtn = document.querySelector( ".main__btn" );

    let errorMsg = document.getElementsByClassName( "error-message" );

    let inputStyles = {
        "border-color": "red",
        "border-width": "1px",
        "border-style": "solid"
    };
    
    formMain.addEventListener( "submit", function ( e ) {

        e.preventDefault();
        e.stopPropagation();
        for ( let item of errorMsg ) {
            item.style.display = "none";
        }

        for ( let item of formMain ) {
            item.style.borderColor = "revert";
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
        else if ( this[5].checked == false ) {
            document.querySelector( ".checkbox-error" ).style.display = "block";
        }
        else {
            modal.style.display = "flex";
            bodyBehindModal.style.overflow = "hidden";
        }
    } );

    popUpBtn.onclick = () => {
        logIn();
    };

    account.onclick = () => {
        logIn();
    };

    function welcome() {
        signUpBtn.onclick = () => {
            if ( formMain[1].value.length < 1 ) {
                alert( "Заполните поле Your Username" );
            }
            else if ( formMain[3].value.length < 1 ) {
                alert( "Заполните пароль" );
            }
            else {
                alert( "Добро пожаловать, " + formMain[1].value + "!" );
                window.location.reload();
            }
        };
    }

    function logIn() {
        modal.style.display = "none";
        document.querySelector( ".main__h1 " ).innerHTML = "Log in to the system";
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
        account.style.display = "none";
        bodyBehindModal.style.overflow = "revert";
        // welcome()
    }


};
   
 