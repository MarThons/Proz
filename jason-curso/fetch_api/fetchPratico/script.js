function cadastrarProduto() {
    const productName = document.getElementById('productName').value;
    const productValue = document.getElementById('productValue').value;
    const productDescription = document.getElementById('productDescription').value;

    const data = {
        produto: productName,
        valor: productValue,
        descricao: productDescription
    };

    fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        if (result.data) {
            document.getElementById('feedback').innerText = 'Produto cadastrado com sucesso!';
            document.getElementById('productList').innerHTML += `<li>${productName} - R$ ${productValue}</li>`;
            // Limpar os campos após o sucesso
            document.getElementById('productName').value = '';
            document.getElementById('productValue').value = '';
            document.getElementById('productDescription').value = '';
        } else {
            document.getElementById('feedback').innerText = 'Erro ao cadastrar o produto. Tente novamente.';
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
        document.getElementById('feedback').innerText = 'Erro na requisição. Tente novamente mais tarde.';
    });
}