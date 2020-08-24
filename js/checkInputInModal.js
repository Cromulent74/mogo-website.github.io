export function checkInputs() {
    /* Varriables */
    
    const learnMoreSendBtn = $('.modal-window__btn-send');
    const learnMoreInputs = {
        name: $('.modal-window__learn-more_name'),
        surname: $('.modal-window__learn-more_surname'),
        phone: $('.modal-window__learn-more_phone'),
        email: $('.modal-window__learn-more_email')
    }
    let prevValue = learnMoreInputs.phone.val().length - 1;
    
    /* Functions */
    
    function checkInputs(inputs) {
        /* Varriables */
        
        const name = inputs.name;
        const surname = inputs.surname;
        const phone = inputs.phone;
        const email = inputs.email;
        let check = false;
        
        /* Check name */
        
        if (name.val() == '' || name.val() == ' ') {
            check = false;
            
            name.val('');
            name.addClass('input-error');
        } else {
            check = true;
            
            name.removeClass('input-error');
        }
        
        /* Check surname */
        
        if (surname.val() == '' || surname.val() == ' ') {
            check = false;
            
            surname.val('');
            surname.addClass('input-error');
        } else {
            check = true;
            
            surname.removeClass('input-error');
        }
        
        /* Check phone */
        
        if (phone.val().length === 18) {
            if (phone.val() == '' || phone.val() == ' ') {
                check = true;
            
                phone.removeClass('input-error');
            }
        } else {
            check = false;
            
            phone.val('');
            phone.addClass('input-error');
        }
        
        /* Check email */
        
        if (email.val() == '' || email.val() == ' ') {
            check = false;
            
            email.val('');
            email.addClass('input-error');
        } else {
            check = true;
            
            email.removeClass('input-error');
        }
        
        if (check === false)
            return false;
        else
            return true;
    }
    function autoPhone(inputs) {
        const phone = inputs.phone;
        let newValue = phone.val().length - 1;
        
        if (newValue > prevValue) {
            if (phone.val().length - 1 == 0) {
                let prevVal = phone.val();

                phone.val('+' + prevVal);
            } if (phone.val().length - 1 == 2) {
                let prevVal = phone.val();

                phone.val(prevVal[0] + prevVal[1] + ' (' + prevVal[2]);
            } if (phone.val().length - 1 == 7) {
                let prevVal = phone.val();

                phone.val(prevVal[0] + prevVal[1] + prevVal[2] + prevVal[3] + prevVal[4] + prevVal[5] + prevVal[6] + ') '+ prevVal[7]);
            } if (phone.val().length - 1 == 12) {
                let prevVal = phone.val();

                phone.val(prevVal[0] + prevVal[1] + prevVal[2] + prevVal[3] + prevVal[4] + prevVal[5] + prevVal[6] + prevVal[7] + prevVal[8] + prevVal[9] + prevVal[10] + prevVal[11] + '-' + prevVal[12]);
            } if (phone.val().length - 1 == 15) {
                let prevVal = phone.val();

                phone.val(prevVal[0] + prevVal[1] + prevVal[2] + prevVal[3] + prevVal[4] + prevVal[5] + prevVal[6] + prevVal[7] + prevVal[8] + prevVal[9] + prevVal[10] + prevVal[11] + prevVal[12] + prevVal[13] + prevVal[14] + '-' + prevVal[15]);
            }
            
            prevValue = phone.val().length - 1;
        }
        if (newValue < prevValue) {
            if (phone.val().length - 1 == 0) {
                phone.val('');
            } if (phone.val().length - 1 == 3) {
                let prevVal = phone.val();

                phone.val(prevVal[0] + prevVal[1]);
            } if (phone.val().length - 1 == 8) {
                let prevVal = phone.val();

                phone.val(prevVal[0] + prevVal[1] + prevVal[2] + prevVal[3] + prevVal[4] + prevVal[5] + prevVal[6]);
            } if (phone.val().length - 1 == 12) {
                let prevVal = phone.val();

                phone.val(prevVal[0] + prevVal[1] + prevVal[2] + prevVal[3] + prevVal[4] + prevVal[5] + prevVal[6] + prevVal[7] + prevVal[8] + prevVal[9] + prevVal[10] + prevVal[11]);
            } if (phone.val().length - 1 == 15) {
                let prevVal = phone.val();

                phone.val(prevVal[0] + prevVal[1] + prevVal[2] + prevVal[3] + prevVal[4] + prevVal[5] + prevVal[6] + prevVal[7] + prevVal[8] + prevVal[9] + prevVal[10] + prevVal[11] + prevVal[12] + prevVal[13] + prevVal[14]);
            }
            
            prevValue = phone.val().length - 1;
        }
    }
    
    /* Event handlers */
    
    learnMoreSendBtn.on('click', (e) => {
        const check = checkInputs(learnMoreInputs);

        $('.modal-window__learn-more').submit();
        
        return check;
    });
    
    learnMoreInputs.phone.on('input', () => {
        autoPhone(learnMoreInputs);
    });
    
    learnMoreInputs.name.on('focus', () => {
        learnMoreInputs.name.removeClass('input-error');
    });
    learnMoreInputs.surname.on('focus', () => {
        learnMoreInputs.surname.removeClass('input-error');
    });
    learnMoreInputs.phone.on('focus', () => {
        learnMoreInputs.phone.removeClass('input-error');
    });
    learnMoreInputs.email.on('focus', () => {
        learnMoreInputs.email.removeClass('input-error');
    });
}