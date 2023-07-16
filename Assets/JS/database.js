const firebaseConfig = {
  apiKey: "AIzaSyD-L2gxgDW054zkb-T6ZJ0V54xaM3t8I7A",
  authDomain: "alyv-20477.firebaseapp.com",
  projectId: "alyv-20477",
  storageBucket: "alyv-20477.appspot.com",
  messagingSenderId: "1022422810569",
  appId: "1:1022422810569:web:7b62c015601dbbb1bd7218"
};
// Firebase'i başlatma
firebase.initializeApp(firebaseConfig);

// Login işlemi
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      console.log("Giriş başarılı!");
      var user = userCredential.user;
      // Giriş başarılı olduğunda yapılacak işlemler
    })
    .catch(function (error) {
      console.log("Giriş hatası:", error);
    });
}