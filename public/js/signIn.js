const signUpFormHandler = async (event) => {
    event.preventDefault();
console.log("hello")
    const name = document.querySelector("signName").value.trim();
    const email = document.querySelector("signEmail").value.trim();
    const password = document.querySelector("signPass").value.trim();

    // sends a post to create the user
    if (name && email && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({name, email, password}),
          headers: {'Content-Type': 'application/json'},
        });
    
        // takes the user to the questions page if ok
        if (response.ok) {
          document.location.replace('/questions');
        } else {
          alert("Please Try Again");
        }
      }
    };









document.addEventListener("submit", signUpFormHandler)