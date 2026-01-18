function calcular() {
  let produto = document.getElementById("produto").value;
  let insumos = parseFloat(document.getElementById("insumos").value);
  let fixos = parseFloat(document.getElementById("fixos").value);
  let quantidade = parseFloat(document.getElementById("quantidade").value);
  let margem = parseFloat(document.getElementById("margem").value);

  let custoTotal = insumos + fixos;
  let custoUnitario = custoTotal / quantidade;
  let precoVenda = custoUnitario * (1 + margem / 100);

  document.getElementById("resultado").innerHTML = `
    <p><strong>Produto:</strong> ${produto || "Não informado"}</p>
    <p><strong>Custo Total:</strong> R$ ${custoTotal.toFixed(2)}</p>
    <p><strong>Custo Unitário:</strong> R$ ${custoUnitario.toFixed(2)}</p>
    <p><strong>Preço de Venda Sugerido:</strong> R$ ${precoVenda.toFixed(2)}</p>
  `;
}
