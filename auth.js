firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (!email || !senha) {
    alert("Por favor, insira e-mail e senha.");
    return;
  }

  auth.signInWithEmailAndPassword(email, senha)
    .then(userCredential => {
      console.log("Login bem-sucedido:", userCredential.user);
      window.location.href = 'index.html';
    })
    .catch(error => {
      let mensagemErro = "Ocorreu um erro ao tentar fazer login.";
      
      if (error.code === 'auth/user-not-found') {
        mensagemErro = "Usuário não encontrado. Verifique o e-mail ou clique em 'Cadastrar' para criar uma nova conta.";
      } else if (error.code === 'auth/wrong-password') {
        mensagemErro = "Senha incorreta. Por favor, tente novamente.";
      } else if (error.code === 'auth/invalid-email') {
        mensagemErro = "O formato do e-mail é inválido. Por favor, verifique o que foi digitado.";
      }
      
      alert(mensagemErro);
      console.error("Erro no login:", error);
    });
}

function cadastrar() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (!email || !senha) {
    alert("Por favor, insira e-mail e senha para se cadastrar.");
    return;
  }

  auth.createUserWithEmailAndPassword(email, senha)
    .then(userCredential => {
      alert("Cadastro realizado com sucesso! Faça o login agora.");
      console.log("Usuário cadastrado:", userCredential.user);
    })
    .catch(error => {
      let mensagemErro = "Ocorreu um erro durante o cadastro.";

      if (error.code === 'auth/email-already-in-use') {
        mensagemErro = "Este e-mail já está cadastrado. Tente fazer login.";
      } else if (error.code === 'auth/invalid-email') {
        mensagemErro = "O formato do e-mail é inválido. Por favor, verifique o que foi digitado.";
      } else if (error.code === 'auth/weak-password') {
        mensagemErro = "A senha é muito fraca. A senha deve ter pelo menos 6 caracteres.";
      }
      
      alert(mensagemErro);
      console.error("Erro no cadastro:", error);
    });
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    });
}

// Monitora o estado de autenticação
auth.onAuthStateChanged(user => {
  const naPaginaDeLogin = window.location.pathname.endsWith('login.html');

  if (user && naPaginaDeLogin) {
    // Se o usuário ESTÁ logado e na página de login, redireciona para a principal
    window.location.href = 'index.html';
  } else if (!user && !naPaginaDeLogin) {
    // Se o usuário NÃO ESTÁ logado e NÃO está na página de login, redireciona para o login
    window.location.href = 'login.html';
  }
});