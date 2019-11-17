function Avaliar(estrela) {
  var url = window.location;
  url = url.toString();
  url = url.split("index.html");
  url = url[0];

  var s1 = document.getElementById("s1").src;
  var s2 = document.getElementById("s2").src;
  var s3 = document.getElementById("s3").src;
  var s4 = document.getElementById("s4").src;
  var s5 = document.getElementById("s5").src;
  var avaliacao = 0;

  if (estrela == 5) {
    if (
      s5 ==
      url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png"
    ) {
      document.getElementById("s1").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s2").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s3").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s4").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s5").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      avaliacao = 5;
    } else {
      document.getElementById("s1").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s2").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s3").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s4").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s5").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      avaliacao = 5;
    }
  }

  //ESTRELA 4
  if (estrela == 4) {
    if (
      s4 ==
      url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png"
    ) {
      document.getElementById("s1").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s2").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s3").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s4").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s5").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 4;
    } else {
      document.getElementById("s1").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s2").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s3").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s4").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s5").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 4;
    }
  }

  //ESTRELA 3
  if (estrela == 3) {
    if (
      s3 ==
      url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png"
    ) {
      document.getElementById("s1").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s2").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s3").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s4").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s5").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 3;
    } else {
      document.getElementById("s1").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s2").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s3").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s4").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s5").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 3;
    }
  }

  //ESTRELA 2
  if (estrela == 2) {
    if (
      s2 ==
      url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png"
    ) {
      document.getElementById("s1").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s2").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s3").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s4").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s5").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 2;
    } else {
      document.getElementById("s1").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s2").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s3").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s4").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s5").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 2;
    }
  }

  //ESTRELA 1
  if (estrela == 1) {
    if (
      s1 ==
      url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png"
    ) {
      document.getElementById("s1").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s2").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s3").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s4").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s5").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 1;
    } else {
      document.getElementById("s1").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s2").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s3").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s4").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s5").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 1;
    }
  }
}

function Avaliar2(estrela) {
  var url = window.location;
  url = url.toString();
  url = url.split("index.html");
  url = url[0];

  var s1 = document.getElementById("s11").src;
  var s2 = document.getElementById("s22").src;
  var s3 = document.getElementById("s33").src;
  var s4 = document.getElementById("s44").src;
  var s5 = document.getElementById("s55").src;
  var avaliacao = 0;

  if (estrela == 5) {
    if (
      s5 ==
      url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png"
    ) {
      document.getElementById("s11").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s22").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s33").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s44").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s55").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      avaliacao = 5;
    } else {
      document.getElementById("s11").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s22").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s33").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s44").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s55").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      avaliacao = 5;
    }
  }

  //ESTRELA 4
  if (estrela == 4) {
    if (
      s4 ==
      url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png"
    ) {
      document.getElementById("s11").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s22").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s33").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s44").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s55").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 4;
    } else {
      document.getElementById("s11").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s22").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s33").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s44").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s55").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 4;
    }
  }

  //ESTRELA 3
  if (estrela == 3) {
    if (
      s3 ==
      url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png"
    ) {
      document.getElementById("s11").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s22").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s33").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s44").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s55").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 3;
    } else {
      document.getElementById("s11").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s22").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s33").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s44").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s55").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 3;
    }
  }

  //ESTRELA 2
  if (estrela == 2) {
    if (
      s2 ==
      url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png"
    ) {
      document.getElementById("s11").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s22").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s33").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s44").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s55").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 2;
    } else {
      document.getElementById("s11").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s22").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s33").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s44").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s55").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 2;
    }
  }

  //ESTRELA 1
  if (estrela == 1) {
    if (
      s1 ==
      url + "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png"
    ) {
      document.getElementById("s11").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s22").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s33").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s44").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s55").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 1;
    } else {
      document.getElementById("s11").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star1.png";
      document.getElementById("s22").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s33").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s44").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      document.getElementById("s55").src =
        "https://www.blogson.com.br/wp-content/uploads/2017/10/star0.png";
      avaliacao = 1;
    }
  }
}

// Usa sessionStorage pra manter o dado across paginas