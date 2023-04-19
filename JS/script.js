window.onload = () => {
    let bodyBehindModal = document.querySelector( "body" );

    let inputFull = document.getElementById( "full-name" );

    let inputUser = document.getElementById( "user-name" );

    let checkBoxState = document.getElementById( "agree" );

    let form = document.getElementById( "main__form" );

    let labels = document.getElementsByTagName( "label" );

    let popUpBtn = document.getElementById( "popup-submit" );

    let modal = document.querySelector( ".popup-wrapper" );

    let account = document.querySelector( ".main__p" );

    let signUpBtn = document.querySelector( ".main__btn" );

    inputFull.onkeydown = ( e ) => {
        if ( !isNaN( parseInt( e.key ) ) ) {
            alert( "You may not enter numbers in this field!" );
            return false;
        }
    };

    inputUser.onkeydown = ( e ) => {
        if ( e.key === "." || e.key === "," ) {
            alert( "No commas or dots allowed!" );
            return false;
        }
    };

    checkBoxState.onclick = () => {
        if ( checkBoxState.checked === true ) {
            console.log( "Согласен!" );
        }
        else {
            console.log( "Не согласен!" );
        }
    };


    form.addEventListener( "submit", function ( e ) {
        e.preventDefault();
        e.stopPropagation();
        if ( e.target[0].value.length < 1 ) {
            alert( "Заполните поле Full Name" );
        }
        else if ( e.target[1].value.length < 1 ) {
            alert( "Заполните поле Your Username" );
        }
        else if ( e.target[2].value.length < 1 ) {
            alert( "Заполните поле E-mail" );
        }
        else if ( e.target[3].value.length < 8 ) {
            alert( "Введите пароль не менее 8 символов " );
        }
        else if ( e.target[4].value !== e.target[3].value ) {
            alert( "Пароли не совпадают" );
        }
        else if ( e.target[5].checked === false ) {
            alert( "Вы не поставили галочку в поле согласие на обработку персональных данных " );
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
            if ( form[1].value.length < 1 ) {
                alert( "Заполните поле Your Username" );
            }
            else if ( form[3].value.length < 1 ) {
                alert( "Заполните пароль" );
            }
            else {
                alert( "Добро пожаловать, " + form[1].value + "!" );
                window.location.reload();
            }
        };
    }

    function logIn() {
        modal.style.display = "none";
        document.querySelector( ".main__h1 " ).innerHTML = "Log in to the system";
        form[0].style.display = "none";
        labels[0].style.display = "none";
        form[2].style.display = "none";
        labels[2].style.display = "none";
        form[4].style.display = "none";
        labels[4].style.display = "none";
        form[5].style.display = "none";
        labels[5].style.display = "none";
        signUpBtn.innerText = "Sign In";
        signUpBtn.type = "button";
        account.style.display = "none";
        bodyBehindModal.style.overflow = "revert";
        welcome();
    }


};
   
 