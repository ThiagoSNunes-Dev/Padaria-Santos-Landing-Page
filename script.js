// Configuração do Swiper
if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
            swiper.autoplay.stop();
            swiper.params.speed = 500;
        });
    }
}

// Array de produtos
const produtos = [
    { id: 1, nome: 'Pão de Queijo', preco: 0.50, imagem: '/imagens/paodequeijo.jpg', descricao: 'Delicioso por fora, macio por dentro! Nosso pão de queijo é feito com ingredientes selecionados e muito queijo de verdade, perfeito para acompanhar um café ou como lanche rápido.', categoria: 'Salgados', slug: 'pao-de-queijo' },
    { id: 2, nome: 'Pão de Sal', preco: 0.60, imagem: '/imagens/paodesal.jpg', descricao: 'O clássico pão de sal, crocante por fora e macio por dentro. Ideal para sanduíches ou para comer com manteiga no café da manhã.', categoria: 'Paes', slug: 'pao-de-sal' },
    { id: 3, nome: 'Enroladinho de Salsicha', preco: 1.99, imagem: '/imagens/enroladinhodesalsicha.jpg', descricao: 'Saboroso enroladinho de salsicha, perfeito para um lanche rápido. Feito com massa leve e salsicha de qualidade.', categoria: 'Salgados', slug: 'enroladinho-de-salsicha' },
    { id: 4, nome: 'Bolo Bombocado', preco: 16.49, imagem: '/imagens/bolobombocado.jpg', descricao: 'Um bolo bombocado irresistível, com textura macia e sabor intenso de coco. Perfeito para sobremesa ou lanche da tarde.', categoria: 'Bolos', slug: 'bolo-bombocado' },
    { id: 5, nome: 'Bolo de Chocolate', preco: 19.99, imagem: '/imagens/bolodechocolate.jpg', descricao: 'Bolo de chocolate fofinho e delicioso, com cobertura cremosa de chocolate. Uma explosão de sabor para os amantes de chocolate.', categoria: 'Bolos', slug: 'bolo-de-chocolate' },
    { id: 6, nome: 'Pudim', preco: 4.99, imagem: '/imagens/pudim.jpg', descricao: 'Pudim cremoso com calda caramelizada, feito com leite condensado e ovos. Uma sobremesa clássica que derrete na boca.', categoria: 'Sobremesas', slug: 'pudim' },
    { id: 7, nome: 'Rosca de Leite', preco: 2.50, imagem: '/imagens/rosquinhadeleite.jpg', descricao: 'Rosca de leite macia e saborosa, com leve toque de baunilha. Perfeita para acompanhar um café ou chá.', categoria: 'Paes', slug: 'rosca-de-leite' },
    { id: 8, nome: 'Pão de Doce', preco: 1.20, imagem: '/imagens/paodedoce.jpeg', descricao: 'Pão doce com um toque especial de canela e açúcar. Ideal para o café da manhã ou lanche da tarde.', categoria: 'Paes', slug: 'pao-de-doce' },
    { id: 9, nome: 'Bolo de Cenoura', preco: 16.49, imagem: '/imagens/bolodecenoura.jpg', descricao: 'Bolo de cenoura macio com cobertura de chocolate. Um clássico brasileiro que combina o sabor da cenoura com o doce do chocolate.', categoria: 'Bolos', slug: 'bolo-de-cenoura' },
    { id: 10, nome: 'Bolo de Fubá', preco: 16.49, imagem: '/imagens/bolodefuba.jpg', descricao: 'Bolo de fubá tradicional, com textura leve e sabor suave de milho. Perfeito para acompanhar um café fresquinho.', categoria: 'Bolos', slug: 'bolo-de-fuba' },
    { id: 11, nome: 'Bolo de Milho', preco: 16.49, imagem: '/imagens/bolodemilho.jpg', descricao: 'Bolo de milho cremoso, feito com milho verde fresco. Uma delícia típica das festas juninas, mas gostosa o ano todo.', categoria: 'Bolos', slug: 'bolo-de-milho' },
    { id: 12, nome: 'Bolo de Trigo', preco: 16.49, imagem: '/imagens/bolodetrigo.jpg', descricao: 'Bolo de trigo simples e delicioso, com sabor caseiro. Ideal para quem gosta de um bolo fofinho e sem muita cobertura.', categoria: 'Bolos', slug: 'bolo-de-trigo' },
    { id: 13, nome: 'Bolo de Mandioca', preco: 16.49, imagem: '/imagens/bolodemandioca.jpg', descricao: 'Bolo de mandioca com textura única e sabor marcante. Feito com mandioca fresca e coco ralado.', categoria: 'Bolos', slug: 'bolo-de-mandioca' },
    { id: 14, nome: 'Bolo de Laranja', preco: 16.99, imagem: '/imagens/bolodelaranja.jpg', descricao: 'Bolo de laranja fofinho e cítrico, com cobertura de glacê de laranja. Perfeito para um lanche refrescante.', categoria: 'Bolos', slug: 'bolo-de-laranja' },
    { id: 15, nome: 'Bolo de Chocolate', preco: 20.99, imagem: '/imagens/bolodechocolate2-1.jpg', descricao: 'Bolo de chocolate, ainda mais irresistível, cobertura e recheio de chocolate.', categoria: 'Bolos', slug: 'bolo-de-chocolate-2' },
    { id: 16, nome: 'Bolo de Coco', preco: 17.99, imagem: '/imagens/bolodecoco.jpg', descricao: 'Bolo de coco úmido e saboroso, com cobertura de coco ralado. Uma explosão de sabor tropical.', categoria: 'Bolos', slug: 'bolo-de-coco' },
    { id: 17, nome: 'Bolo de Formigueiro', preco: 16.49, imagem: '/imagens/boloformigueiro.jpeg', descricao: 'Bolo de formigueiro com granulado, perfeito para festas e lanches. O contraste do granulado com a massa fofinha é irresistível.', categoria: 'Bolos', slug: 'bolo-de-formigueiro' },
    { id: 18, nome: 'Bolo de Banana', preco: 16.99, imagem: '/imagens/bolodebanana.jpg', descricao: 'Bolo de banana com um toque caseiro, feito com bananas maduras e canela. Perfeito para aproveitar bananas que estão sobrando.', categoria: 'Bolos', slug: 'bolo-de-banana' },
    { id: 19, nome: 'Bolo de Leite Ninho', preco: 16.49, imagem: '/imagens/bolodeleiteninho.jpg', descricao: 'Bolo de leite ninho cremoso, com recheio e cobertura de creme de leite ninho. Uma sobremesa sofisticada e deliciosa.', categoria: 'Bolos', slug: 'bolo-de-leite-ninho' },
    { id: 20, nome: 'Mousse de Maracujá', preco: 3.50, imagem: '/imagens/moussedemaracuja.jpg', descricao: 'Mousse leve e refrescante com sabor intenso de maracujá. Perfeito para dias quentes ou como sobremesa após uma refeição.', categoria: 'Sobremesas', slug: 'mousse-de-maracuja' },
    { id: 21, nome: 'Pão Integral', preco: 8.99, imagem: '/imagens/paointegral.jpg', descricao: 'Pão rico em fibras, perfeito para uma alimentação saudável. Feito com farinha integral e grãos.', categoria: 'Paes', slug: 'pao-integral' },
    { id: 22, nome: 'Pão de Forma', preco: 11.49, imagem: '/imagens/paodeforma.jpg', descricao: 'Pão fatiado, macio e versátil para sanduíches e torradas. Ideal para o café da manhã ou lanches rápidos.', categoria: 'Paes', slug: 'pao-de-forma' },
    { id: 23, nome: 'Cajuzinho', preco: 1.50, imagem: '/imagens/cajuzinho.jpg', descricao: 'Doce de amendoim com toque de chocolate, coberto com granulado. Um clássico das festas brasileiras.', categoria: 'Sobremesas', slug: 'cajuzinho' },
    { id: 24, nome: 'Torta de Morango', preco: 6.00, imagem: '/imagens/tortademorango.jpg', descricao: 'Torta com creme de baunilha e morangos frescos, coberta com geleia de morango. Uma sobremesa leve e deliciosa.', categoria: 'Sobremesas', slug: 'torta-de-morango' },
    { id: 25, nome: 'Pão de Milho', preco: 2.50, imagem: '/imagens/paodemilho.jpg', descricao: 'Pão leve com sabor rústico de milho, ótimo para lanches. Feito com fubá e milho verde.', categoria: 'Paes', slug: 'pao-de-milho' },
    { id: 26, nome: 'Pão de Centeio', preco: 3.00, imagem: '/imagens/paocenteio.jpg', descricao: 'Pão denso e nutritivo, com sabor marcante de centeio. Ideal para sanduíches mais robustos.', categoria: 'Paes', slug: 'pao-de-centeio' },
    { id: 27, nome: 'Pão Ciabatta', preco: 4.00, imagem: '/imagens/paociabatta.jpg', descricao: 'Pão italiano com casca crocante e miolo aerado, perfeito para bruschettas ou sanduíches gourmet.', categoria: 'Paes', slug: 'pao-ciabatta' },
    { id: 28, nome: 'Pão de Leite', preco: 1.80, imagem: '/imagens/paodeleite.jpg', descricao: 'Pão macio e levemente doce, ideal para lanches infantis ou para comer com geleia.', categoria: 'Paes', slug: 'pao-de-leite' },
    { id: 29, nome: 'Cheesecake', preco: 7.00, imagem: '/imagens/cheesecake.jpg', descricao: 'Torta cremosa de queijo com base de biscoito e cobertura de frutas vermelhas. Uma sobremesa sofisticada e irresistível.', categoria: 'Sobremesas', slug: 'cheesecake' },
    { id: 30, nome: 'Esfiha de Carne', preco: 3.00, imagem: '/imagens/esfiha.jpg', descricao: 'Esfiha recheada com carne moída temperada, suculenta e saborosa. Perfeita para um lanche rápido.', categoria: 'Salgados', slug: 'esfiha-de-carne' },
    { id: 31, nome: 'Coxinha de Frango', preco: 3.50, imagem: '/imagens/coxinhadefrango.jpg', descricao: 'Coxinha crocante com recheio cremoso de frango desfiado. Um clássico das padarias brasileiras.', categoria: 'Salgados', slug: 'coxinha-de-frango' },
    { id: 32, nome: 'Empada de Palmito', preco: 3.20, imagem: '/imagens/empada.jpg', descricao: 'Empada com massa amanteigada e recheio cremoso de palmito. Uma opção vegetariana deliciosa.', categoria: 'Salgados', slug: 'empada-de-palmito' },
    { id: 33, nome: 'Beijinho', preco: 1.50, imagem: '/imagens/beijinho.jpg', descricao: 'Doce de coco com toque de leite condensado, coberto com coco ralado. Um docinho tradicional e irresistível.', categoria: 'Sobremesas', slug: 'beijinho' },
    { id: 34, nome: 'Quibe Frito', preco: 3.00, imagem: '/imagens/quibefrito.jpg', descricao: 'Quibe crocante com recheio de carne moída e especiarias. Perfeito para um lanche ou aperitivo.', categoria: 'Salgados', slug: 'quibe-frito' },
    { id: 35, nome: 'Folhado de Frango', preco: 3.50, imagem: '/imagens/folhadefrango.jpg', descricao: 'Massa folhada com recheio cremoso de frango e catupiry. Uma combinação irresistível de sabores.', categoria: 'Salgados', slug: 'folhado-de-frango' },
    { id: 36, nome: 'Pudim de Leite', preco: 5.00, imagem: '/imagens/pudimdeleite.jpg', descricao: 'Pudim cremoso com calda de caramelo, clássico e irresistível. Feito com leite condensado, ovos e baunilha.', categoria: 'Sobremesas', slug: 'pudim-de-leite' }
];

// Função auxiliar para encontrar produto por slug ou ID
function encontrarProduto(slugOrId) {
    if (typeof slugOrId === 'string') {
        return produtos.find(prod => prod.slug === slugOrId);
    } else {
        return produtos.find(p => p.id === slugOrId);
    }
}

// Função para preencher detalhes do produto no DOM
function preencherDetalhes(produto) {
    const imagem = document.getElementById('produto-imagem');
    const nome = document.getElementById('produto-nome');
    const descricao = document.getElementById('produto-descricao');
    const preco = document.getElementById('produto-preco');
    const addCart = document.getElementById('add-cart');
    const qntd = document.getElementById('qntd');

    if (!imagem || !nome || !descricao || !preco || !addCart || !qntd) {
        console.error("Elementos de detalhes do produto não encontrados no DOM");
        return false;
    }

    imagem.src = produto.imagem;
    imagem.alt = produto.nome;
    nome.textContent = produto.nome;
    descricao.textContent = produto.descricao;
    preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
    addCart.textContent = 'Adicionar ao Carrinho';
    qntd.value = '1';
    qntd.min = '1';
    qntd.max = '100';

    return true;
}

// Função para exibir detalhes do produto
function exibirDetalhesProduto(slugOrId) {
    const produto = encontrarProduto(slugOrId);
    const infoProduto = document.querySelector('.info-produto');
    const categoriaDetalhes = document.querySelector('.categoria-detalhes');

    if (!infoProduto) {
        console.error("Elemento .info-produto não encontrado no DOM");
        return;
    }

    if (produto) {
        currentProduto = produto; // Define o produto atual para eventos
        const novaUrl = `/produto/${produto.slug}`; // Definindo novaUrl
        if (preencherDetalhes(produto)) {
            infoProduto.style.display = 'grid';
            if (categoriaDetalhes) {
                categoriaDetalhes.classList.add('info-visivel');
            }
            infoProduto.classList.add('info-produto-visivel');

            // Altera a URL e recarrega a página
            if (window.location.pathname !== novaUrl) {
                window.location.href = novaUrl;
            }
        }
    } else {
        infoProduto.style.display = 'none';
    }
}

// Verifica slug ou ID na URL ao carregar
window.addEventListener('load', () => {
    const path = window.location.pathname;
    const match = path.match(/^\/produto\/([a-z0-9-]+)$/);
    let slugOrId = match ? match[1] : new URLSearchParams(window.location.search).get('id');
    if (slugOrId) {
        exibirDetalhesProduto(slugOrId);
    }
    // Outros códigos de carregamento...
});

// Manipula navegação de voltar/avançar
window.addEventListener('popstate', (event) => {
    const path = window.location.pathname;
    const match = path.match(/^\/produto\/([a-z0-9-]+)$/);
    const infoProduto = document.querySelector('.info-produto');
    if (match) {
        exibirDetalhesProduto(match[1]);
    } else {
        if (infoProduto) infoProduto.style.display = 'none';
        currentProduto = null;
    }
});

// Array do carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Salva o carrinho
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Exibe produtos por categoria
function exibirProdutosPorCategoria(categoria) {
    const container = document.getElementById('produtos-filtrados');
    if (!container) {
        console.error("Elemento #produtos-filtrados não encontrado no DOM");
        return;
    }
    container.innerHTML = '';
    let produtosFiltrados = categoria === 'Menu' ? produtos : produtos.filter(p => p.categoria === categoria);
    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', produto.id);
        card.innerHTML = `
            <div class="product-content">
                <div class="product-image-container">
                    <img class="product-image" src="${produto.imagem || '/imagens/placeholder.jpg'}" alt="${produto.nome}">
                    <div class="product-text">
                        <h3>${produto.nome}</h3>
                        <h4>Preço: R$ ${produto.preco.toFixed(2)}</h4>
                    </div>
                    <button class="add-cart" type="button">Adicionar ao Carrinho</button>
                    <div class="container-cart-qntd">
                        <button class="btn-menos" onclick="alterarQuantidade(${produto.id}, -1, false)">-</button>
                        <input class="quantidade" type="number" value="1" min="1" onchange="alterarQuantidade(${produto.id}, this.value, false)">
                        <button class="btn-mais" onclick="alterarQuantidade(${produto.id}, 1, false)">+</button>
                    </div>
                </div>
            </div>
        `;
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
                exibirDetalhesProduto(produto.slug);
            }
        });
        container.appendChild(card);

        const btnAdd = card.querySelector('.add-cart');
        btnAdd.addEventListener('click', e => {
            e.stopPropagation();
            e.preventDefault();
            const quantidade = parseInt(card.querySelector('.quantidade').value) || 1;
            adicionarAoCarrinho(produto.id, quantidade);
        });
    });
}

// Adiciona ao carrinho
function adicionarAoCarrinho(id, quantidade = 1) {
    const produto = produtos.find(p => p.id == id);
    if (produto) {
        const itemExistente = carrinho.find(item => item.id == id);
        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        } else {
            carrinho.push({ ...produto, quantidade });
        }
        salvarCarrinho();
        exibirCarrinho();
    }
}

// Função para alterar quantidade (carrinho ou cards)
function alterarQuantidade(id, valor, isCart) {
    let novaQuantidade;
    if (typeof valor === 'string') {
        novaQuantidade = parseInt(valor.replace(/[^0-9]/g, '')) || 1;
    } else {
        if (isCart) {
            const item = carrinho.find(item => item.id === id);
            if (!item) return;
            novaQuantidade = item.quantidade + valor;
        } else {
            const card = document.querySelector(`.product-card[data-id="${id}"]`);
            if (!card) return;
            const input = card.querySelector('.quantidade');
            novaQuantidade = (parseInt(input.value) || 1) + valor;
        }
    }
    novaQuantidade = Math.max(1, Math.min(100, novaQuantidade));

    if (isCart) {
        const item = carrinho.find(item => item.id === id);
        if (item) item.quantidade = novaQuantidade;
        salvarCarrinho();
        exibirCarrinho();
    } else {
        const card = document.querySelector(`.product-card[data-id="${id}"]`);
        if (card) {
            const input = card.querySelector('.quantidade');
            input.value = novaQuantidade;
        }
    }
}

// Função para remover item do carrinho
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    salvarCarrinho();
    exibirCarrinho();
}

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = [];
    salvarCarrinho();
    exibirCarrinho();
}

// Exibe o carrinho
function exibirCarrinho() {
    const listaInterativa = document.getElementById('lista');
    if (!listaInterativa) {
        console.error("Elemento #lista não encontrado no DOM");
        return;
    }
    listaInterativa.innerHTML = `
        <div class="cart-header">
            <img src="/imagens/fechar.png" alt="Fechar carrinho" class="close-button" onclick="toggleCart()">
        </div>
        <h1>Seu carrinho</h1>  
    `;
    // Calcula o número de tipos de itens no carrinho
    const totalTiposItens = carrinho.length;
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        if (totalTiposItens > 0) {
            cartCount.textContent = totalTiposItens;
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    } else {
        console.warn("Elemento #cart-count não encontrado no DOM");
    }
    if (carrinho.length === 0) {
        listaInterativa.innerHTML += '<p style="color: black;">O carrinho está vazio.</p>';
        const totalElement = document.createElement('p');
        totalElement.id = 'cart-total';
        listaInterativa.appendChild(totalElement);
        return;
    }

    let total = 0;
    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
        const divItem = document.createElement('div');
        divItem.className = 'item-carrinho';
        divItem.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" style="width: 50px; height: 50px; object-fit: cover;">
            <div class="item-info">
                <h2>${item.nome}</h2>
                <p>Preço: R$ ${item.preco.toFixed(2)}</p>
                <p>Total: R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
            <button class="btn-menos" onclick="alterarQuantidade(${item.id}, -1, true)">-</button>
            <input class="quantidade" type="number" value="${item.quantidade}" min="1" onchange="alterarQuantidade(${item.id}, this.value, true)">
            <button class="btn-mais" onclick="alterarQuantidade(${item.id}, 1, true)">+</button>
            <button class="remover-item" onclick="removerDoCarrinho(${item.id})">Remover</button>
        `;
        listaInterativa.appendChild(divItem);
    });
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'space-between';
    container.style.gap = '10px';

    const totalElement = document.createElement('p');
    totalElement.id = 'cart-total';
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    container.appendChild(totalElement);

    const limpar = document.createElement('button');
    limpar.id = 'limpar';
    limpar.textContent = 'Limpar Carrinho';
    limpar.onclick = limparCarrinho;
    container.appendChild(limpar);

    listaInterativa.appendChild(container);

    const finalizarCompra = document.createElement('button');
    container.style.marginBottom = "25px";
    container.style.alignItems = "center";
    finalizarCompra.id = 'finalizar';
    finalizarCompra.textContent = 'Finalizar Compra';
    finalizarCompra.className = 'botaofinalizar';
    finalizarCompra.onclick = function() {
        const mensagemElement = document.getElementById('mensagem') || listaInterativa.appendChild(document.createElement('p'));
        mensagemElement.id = 'mensagem';
        mensagemElement.innerHTML = 'Função indisponível no momento, <a href="/Sobre" class="saiba-mais">SAIBA MAIS</a>';
    };
    listaInterativa.appendChild(finalizarCompra);

    const mensagemElement = document.createElement('p');
    mensagemElement.id = 'mensagem';
    listaInterativa.appendChild(mensagemElement);
}

// Função para mover o cart-count entre desktop e mobile
function moveCartCount() {
    const cartCount = document.getElementById('cart-count');
    const desktopCartIcon = document.querySelector('nav .cart-icon');  // Use selector correto
    const mobileCartIcon = document.querySelector('#abrir-menu-mob .cart-icon');
    if (!cartCount) return console.error('Cart count não encontrado');

    if (window.innerWidth <= 768) {  // Mobile
        if (mobileCartIcon && cartCount.parentNode !== mobileCartIcon) {
            mobileCartIcon.appendChild(cartCount);
        }
    } else {  // Desktop
        if (desktopCartIcon && cartCount.parentNode !== desktopCartIcon) {
            desktopCartIcon.appendChild(cartCount);
        }
    }
}

window.addEventListener('load', moveCartCount);
window.addEventListener('resize', moveCartCount);

// Alterna visibilidade do carrinho
function toggleCart() {
    const listaInterativa = document.getElementById('lista');
    const overlay = document.querySelector('.overlay');
    if (listaInterativa) {
        listaInterativa.classList.toggle('open');
    }
    if (overlay) {
        overlay.classList.toggle('show');
    }
    if (listaInterativa && listaInterativa.classList.contains('open')) {
        exibirCarrinho(); // Atualiza o conteúdo do carrinho ao abrir
    }
}

// Produto atual para detalhes
let currentProduto = null;

// Inicializa eventos para detalhes do produto (chamado uma vez)
function initDetalhesEvents() {
    const addCart = document.getElementById('add-cart');
    const btnMenos = document.getElementById('btn-menos');
    const btnMais = document.getElementById('btn-mais');
    const qntd = document.getElementById('qntd');

    if (!addCart || !btnMenos || !btnMais || !qntd) {
        console.error("Elementos de detalhes não encontrados para eventos");
        return;
    }

    function alterarQuantidadeDetalhes(valor) {
        let novaQuantidade;
        const input = qntd;
        const mensagemElement = document.getElementById('mensagem') || document.querySelector('.info-produto').appendChild(document.createElement('p'));
        mensagemElement.id = 'mensagem';

        if (typeof valor === 'string') {
            novaQuantidade = parseInt(valor);
            if (isNaN(novaQuantidade)) {
                input.value = input.value || 1;
                mensagemElement.innerText = "Por favor, insira um número válido.";
                setTimeout(() => { mensagemElement.innerText = ""; }, 3000);
                return;
            }
        } else {
            novaQuantidade = (parseInt(input.value) || 1) + valor;
        }

        novaQuantidade = Math.max(1, Math.min(100, novaQuantidade));
        input.value = novaQuantidade;
        mensagemElement.innerText = "";
    }

    addCart.addEventListener('click', () => {
        if (currentProduto) {
            alterarQuantidadeDetalhes(qntd.value);
            const quantidade = parseInt(qntd.value) || 1;
            adicionarAoCarrinho(currentProduto.id, quantidade);
        } else {
            console.error("Nenhum produto atual para adicionar ao carrinho");
        }
    });

    btnMenos.addEventListener('click', () => {
        alterarQuantidadeDetalhes(-1);
    });

    btnMais.addEventListener('click', () => {
        alterarQuantidadeDetalhes(1);
    });

    qntd.addEventListener('change', () => {
        alterarQuantidadeDetalhes(qntd.value);
    });

    qntd.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}

// Função para alternar visibilidade do menu mobile
function toggleMenu() {
    const menuMob = document.getElementById('container-mobile');
    const overlay = document.querySelector('.overlay');

    if (menuMob.classList.contains('abrir-menu')) {
        // Menu está aberto: feche apenas ele
        menuMob.classList.remove('abrir-menu');
        overlay.classList.remove('show');
    } else {
        // Menu está fechado: feche qualquer outro painel aberto usando closeSidePanels
        closeSidePanels();
        // Agora abra o menu
        menuMob.classList.add('abrir-menu');
        overlay.classList.add('show');
    }
}

// Função para abrir o carrinho a partir do menu mobile
function openCartFromMenu() {
    const menuMob = document.getElementById('container-mobile');
    const overlay = document.querySelector('.overlay');
    const listaInterativa = document.getElementById('lista');

    menuMob.classList.remove('abrir-menu');

    if (!listaInterativa.classList.contains('open')) {
        listaInterativa.classList.add('open');
        overlay.classList.add('show');
        exibirCarrinho();
    }
}

// Função para fechar painéis laterais (usada no overlay)
function closeSidePanels() {
    const menuMob = document.getElementById('container-mobile');
    const listaInterativa = document.getElementById('lista');
    const overlay = document.querySelector('.overlay');

    if (menuMob.classList.contains('abrir-menu')) {
        menuMob.classList.remove('abrir-menu');
    }
    if (listaInterativa.classList.contains('open')) {
        listaInterativa.classList.remove('open');
    }
    overlay.classList.remove('show');
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const path = window.location.pathname.replace(/\/$/, '');
    const lowerPath = path.toLowerCase();
    const infoProduto = document.querySelector('.info-produto');
    const categoriaDetalhes = document.querySelector('.categoria-detalhes');
    const headers = document.querySelectorAll('.categoria-detalhes h2');

    // Lista de categorias para detecção de paths
    const categoryPaths = ['/menu', '/bolos', '/sobremesas', '/paes', '/salgados'];
    const isCategoryPath = categoryPaths.includes(lowerPath);

    headers.forEach(header => {
        header.addEventListener('click', function() {
            headers.forEach(h => h.classList.remove('active')); // Remove .active de todos
            this.classList.add('active'); // Adiciona .active ao clicado
        
            let tipo = params.get('tipo');
            const path = window.location.pathname;
            const decoded = decodeURIComponent(path);
            if (decoded !== path) {
            history.replaceState(null, '', decoded);
            }
            const isCategoryPath = /^(\/Menu|\/Bolos|\/Sobremesas|\/Paes|\/Salgados)$/.test(path);

            if (tipo) {
                // Limpa a URL se query string estiver presente
                history.replaceState({ categoria: tipo }, '', `/${tipo}`);
                exibirProdutosPorCategoria(tipo);
            } else if (isCategoryPath) {
                tipo = path.substring(1);
                exibirProdutosPorCategoria(tipo);
            } else {
                exibirProdutosPorCategoria('Menu');
            }
            
        });
    });

    // Inicializa eventos de detalhes uma vez
    initDetalhesEvents();

    let produto = null;

    let slug = null;
    if (lowerPath.startsWith('/produto/')) {
        slug = path.substring('/produto/'.length);
        produto = encontrarProduto(slug);
    }

    const productId = params.get('id');
    if (!produto && productId) {
        produto = encontrarProduto(parseInt(productId));
    }

    if (lowerPath.includes('produtos') || lowerPath.startsWith('/produto/') || isCategoryPath) {
        if (!infoProduto) {
            console.error("Elemento .info-produto não encontrado no DOM");
            return;
        }

        if (produto) {
            if (productId) {
                window.location.href = `/produto/${produto.slug}`;
            }
        } else {
            infoProduto.style.display = 'none';
        }

        document.querySelectorAll('.categoria-detalhes h2').forEach(h2 => {
            h2.addEventListener('click', () => {
                const categoria = h2.getAttribute('data-categoria');
                exibirProdutosPorCategoria(categoria);
                // Altera a URL para a versão limpa sem recarregar
                history.pushState({ categoria }, '', `/${categoria}`);
            });
        });

        let tipo = params.get('tipo');
        if (!tipo && isCategoryPath) {
            tipo = path.substring(1); 
        }

        if (tipo) {
            exibirProdutosPorCategoria(tipo);
        } else {
            exibirProdutosPorCategoria('Menu');
        }
    }
    //estilo de detalhes
    

    exibirCarrinho();

    // Configuração do menu mobile
    const btnMenu = document.getElementById('icone-mobile');
    if (btnMenu) {
        btnMenu.addEventListener('click', toggleMenu);
    }

    const fecharMenu = document.getElementById('fechar');
    if (fecharMenu) {
        fecharMenu.addEventListener('click', toggleMenu);
    }

    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.addEventListener('click', closeSidePanels);
    }
});