function validateForm() {
    let x = document.forms["myForm"]["fname"]["myForm"]["fprenom"]["myForm"]["femail"].value;
    if (x == "") {
      alert("Ce champ doit être remlpi");
      return false;
    }
  }