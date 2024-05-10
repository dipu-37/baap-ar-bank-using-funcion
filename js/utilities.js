function getIputValueById(inputid){
    const inputfield = document.getElementById(inputid);
    const  inputfield_string = inputfield.value ;
    inputfield.value='';
    const inputfield_value = parseFloat(inputfield_string);
    return inputfield_value;
}

function getElementValueById(element_id){
    const element = document.getElementById(element_id);
    const element_value_string = element.innerText;
    const element_value = parseFloat(element_value_string);
    return element_value;
}

function setTextElementValueById(elementid, newvalue)
{
    const textelement = document.getElementById(elementid)
    textelement.innerText= newvalue;

}