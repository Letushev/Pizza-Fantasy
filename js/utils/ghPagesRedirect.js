(function(){
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;

  if (redirect && redirect !== location.href) {
    console.log('Replacing state...');
    history.replaceState(null, null, redirect);
  }
})();
